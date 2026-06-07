import { VideoCard } from "@/components/vlog/VideoCard";
import { vlogs } from "@/lib/content";

export const metadata = {
  title: "Vlog",
};

export default function VlogPage() {
  return (
    <section className="bg-ink py-16">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold">Vlog</p>
          <h1 className="display-type mt-4 text-cream">Video breakdowns from the chair and the care routine.</h1>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {["cuts", "care"].map((tag) => (
            <span key={tag} className="rounded border border-gold/30 px-3 py-2 text-sm text-gold">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {vlogs.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
