import { BookingConfirmation } from "@/components/booking/BookingConfirmation";

export const metadata = {
  title: "Booking Confirmation",
};

export default function BookingConfirmPage({
  searchParams,
}: {
  searchParams: { service?: string; booking?: string };
}) {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-ink px-4 py-16">
      <BookingConfirmation
        serviceKey={searchParams.service}
        bookingId={searchParams.booking}
      />
    </section>
  );
}
