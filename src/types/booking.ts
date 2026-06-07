export type ServiceKey = "cut" | "cut_beard" | "signature" | "care_consult" | "vip";

export type Booking = {
  id: string;
  client_id?: string | null;
  service: ServiceKey;
  date: string;
  time_slot: string;
  status: "pending" | "confirmed" | "cancelled";
  notes?: string | null;
  price_cents: number;
  created_at: string;
};
