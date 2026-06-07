import Link from "next/link";
import { Play } from "lucide-react";
import type { Post } from "@/types/post";

export function VideoCard({ video }: { video: Post }) {
  return (
    <Link
      className="group block overflow-hidden rounded-lg border border-gold/25 bg-cream/5"
      href={`/vlog/${video.slug}`}
    >
      <div
        className="grid aspect-video place-items-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(15,14,12,0.2), rgba(15,14,12,0.72)), url(${video.thumbnail_url})`,
        }}
      >
        <span className="grid size-14 place-items-center rounded-full border border-gold/60 bg-ink/70 text-gold transition group-hover:scale-105">
          <Play fill="currentColor" size={22} aria-hidden />
        </span>
      </div>
      <div className="p-5">
        <h2 className="font-serif text-2xl leading-tight text-cream">{video.title}</h2>
        <p className="mt-2 text-sm text-cream/60">{video.excerpt}</p>
      </div>
    </Link>
  );
}
