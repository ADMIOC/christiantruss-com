import Link from "next/link";
import type { ReactNode } from "react";
import { CalendarCheck, FileText, LayoutDashboard, Sparkles, Users } from "lucide-react";

const nav = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/posts", label: "Posts", icon: FileText },
  { href: "/admin/bookings", label: "Bookings", icon: CalendarCheck },
  { href: "/admin/members", label: "Members", icon: Users },
  { href: "/admin/social", label: "Social", icon: Sparkles },
];

export function AdminShell({ children }: { children: ReactNode }) {
  return (
    <section className="bg-ink">
      <div className="container-shell grid min-h-[76vh] gap-6 py-8 md:grid-cols-[240px_1fr]">
        <aside className="rounded-lg border border-gold/20 bg-gold/10 p-4">
          <p className="eyebrow mb-4 text-gold">Admin</p>
          <nav className="grid gap-1">
            {nav.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  className="flex items-center gap-3 rounded px-3 py-2 text-sm text-cream/72 transition hover:bg-cream/10 hover:text-gold"
                  href={item.href}
                >
                  <Icon size={17} aria-hidden />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>
        <div>{children}</div>
      </div>
    </section>
  );
}
