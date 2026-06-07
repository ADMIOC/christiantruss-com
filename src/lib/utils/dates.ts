import { format, parseISO } from "date-fns";

export function formatDisplayDate(value: string | Date) {
  const date = typeof value === "string" ? parseISO(value) : value;
  return format(date, "MMM d, yyyy");
}
