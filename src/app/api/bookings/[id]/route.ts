import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServiceClient } from "@/lib/supabase/server";

const updateSchema = z.object({
  status: z.enum(["pending", "confirmed", "cancelled"]).optional(),
  notes: z.string().optional(),
  date: z.string().optional(),
  time_slot: z.string().optional(),
});

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } },
) {
  const payload = updateSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ error: payload.error.flatten() }, { status: 400 });
  }

  const supabase = createSupabaseServiceClient();

  if (!supabase) {
    return NextResponse.json({ id: params.id, mode: "demo", ...payload.data });
  }

  const { data, error } = await supabase
    .from("bookings")
    .update(payload.data)
    .eq("id", params.id)
    .select("*")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ booking: data });
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } },
) {
  const supabase = createSupabaseServiceClient();

  if (!supabase) {
    return NextResponse.json({ id: params.id, mode: "demo", deleted: true });
  }

  const { error } = await supabase.from("bookings").delete().eq("id", params.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ deleted: true });
}
