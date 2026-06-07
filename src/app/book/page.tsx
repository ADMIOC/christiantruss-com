"use client";

import { useState } from "react";
import { BookingForm } from "@/components/booking/BookingForm";
import { ServiceCard } from "@/components/booking/ServiceCard";
import { services } from "@/lib/content";
import type { ServiceKey } from "@/types/booking";

export default function BookPage() {
  const [selected, setSelected] = useState<ServiceKey>(services[0].key);

  return (
    <section className="bg-ink py-16">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold">Booking</p>
          <h1 className="display-type mt-4 text-cream">Reserve the chair.</h1>
          <p className="mt-5 text-cream/65">
            Choose the service, send the request, and use Stripe when payment is
            required for a consult, course, or membership.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.key}
              service={service}
              selected={selected === service.key}
              onSelect={(item) => setSelected(item.key)}
            />
          ))}
        </div>
        <div className="mt-10 max-w-3xl">
          <BookingForm selectedService={selected} />
        </div>
      </div>
    </section>
  );
}
