"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { services } from "@/lib/content";
import type { ServiceKey } from "@/types/booking";

const timeSlots = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

export function BookingForm({ selectedService }: { selectedService: ServiceKey }) {
  const router = useRouter();
  const service = useMemo(
    () => services.find((item) => item.key === selectedService) || services[0],
    [selectedService],
  );
  const [status, setStatus] = useState<string>("");

  async function submitBooking(formData: FormData) {
    setStatus("Saving booking request...");

    const payload = {
      service: service.key,
      date: String(formData.get("date") || ""),
      time_slot: String(formData.get("time_slot") || ""),
      full_name: String(formData.get("full_name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      notes: String(formData.get("notes") || ""),
    };

    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = (await response.json()) as { id?: string; error?: string };

    if (!response.ok) {
      setStatus(data.error || "Booking could not be saved.");
      return;
    }

    router.push(`/book/confirm?service=${service.key}&booking=${data.id || "demo"}`);
  }

  return (
    <form action={submitBooking} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-cream/70">
          Preferred date
          <Input name="date" required type="date" />
        </label>
        <label className="grid gap-2 text-sm text-cream/70">
          Preferred time
          <select
            className="min-h-11 rounded border border-gold/25 bg-ink-soft px-3 text-cream outline-none focus:border-gold"
            name="time_slot"
            required
          >
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input name="full_name" placeholder="Full name" required />
        <Input name="email" placeholder="Email" required type="email" />
      </div>
      <Input name="phone" placeholder="Phone" />
      <Textarea name="notes" placeholder="Notes, goals, or service preferences" />
      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit">Request Appointment</Button>
        <Button
          href={`/api/stripe/checkout?product=${service.key === "care_consult" ? "consult" : "cutsCourse"}`}
          variant="secondary"
        >
          Pay Deposit
        </Button>
      </div>
      {status ? <p className="text-sm text-gold">{status}</p> : null}
    </form>
  );
}
