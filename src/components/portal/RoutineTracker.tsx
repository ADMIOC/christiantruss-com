import { CheckCircle2, CircleDashed } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { routineTasks } from "@/lib/member-portal";

export function RoutineTracker({ compact = false }: { compact?: boolean }) {
  const tasks = compact ? routineTasks.slice(0, 3) : routineTasks;

  return (
    <Card>
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="eyebrow text-gold">Care routine</p>
          <h2 className="mt-2 font-serif text-2xl text-cream">Today&apos;s standards</h2>
        </div>
        <span className="rounded border border-gold/30 px-3 py-1 text-sm text-gold">
          2 / 4 complete
        </span>
      </div>
      <div className="mt-5 grid gap-3">
        {tasks.map((task) => {
          const done = task.status === "done";
          const Icon = done ? CheckCircle2 : CircleDashed;

          return (
            <div
              key={task.id}
              className="grid gap-3 rounded border border-gold/15 bg-ink/35 p-3 sm:grid-cols-[auto_1fr_auto] sm:items-center"
            >
              <Icon className={done ? "text-teal-light" : "text-gold"} size={20} aria-hidden />
              <div>
                <p className="font-medium text-cream">{task.label}</p>
                <p className="text-xs text-cream/48">{task.detail}</p>
              </div>
              <p className="eyebrow text-cream/42">{task.cadence}</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
