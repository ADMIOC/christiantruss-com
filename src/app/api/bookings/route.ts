import { NextResponse } from "next/server";
import { z } from "zod";
import { sendBrevoEmail } from "@/lib/brevo/email";
import { services } from "@/lib/content";
import { createSupabaseServiceClient } from "@/lib/supabase/server";

const bookingSchema = z.object({
  service: z.string(),
  date: z.string().min(1),
  time_slot: z.string().min(1),
  full_name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  notes: z.string().optional(),
});

export async function GET() {
  const supabase = createSupabaseServiceClient();

  if (!supabase) {
    return NextResponse.json({ bookings: [], mode: "demo" });
  }

  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ bookings: data });
}

export async function POST(request: Request) {
  const payload = bookingSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ error: payload.error.flatten() }, { status: 400 });
  }

  const service = services.find((item) => item.key === payload.data.service);
  const price_cents = service
    ? Number(service.price.replace(/[^0-9]/g, "")) * 100
    : null;
  const supabase = createSupabaseServiceClient();

  if (!supabase) {
    return NextResponse.json({
      id: "demo-booking",
      mode: "demo",
      message: "Supabase is not configured; booking validated but not persisted.",
    });
  }

  const { data, error } = await supabase
    .from("bookings")
    .insert({
      service: payload.data.service,
      date: payload.data.date,
      time_slot: payload.data.time_slot,
      notes: [
        payload.data.notes,
        payload.data.full_name,
        payload.data.email,
        payload.data.phone,
      ]
        .filter(Boolean)
        .join(" | "),
      price_cents,
      status: "pending",
    })
    .select("id")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  await sendBrevoEmail({
    to: payload.data.email,
    subject: "Christian Truss booking request received",
    html: `<p>Your ${service?.name || "service"} request for ${payload.data.date} at ${payload.data.time_slot} was received.</p>`,
  });

  return NextResponse.json({ id: data.id }, { status: 201 });
}
