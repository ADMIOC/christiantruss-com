import { Play } from "lucide-react";
import { getBunnyStreamEmbed } from "@/lib/bunny/media";

export function VideoPlayer({ videoId }: { videoId?: string | null }) {
  const embed = videoId ? getBunnyStreamEmbed(videoId) : null;

  if (embed) {
    return (
      <iframe
        className="aspect-video w-full rounded-lg border border-gold/25"
        src={embed}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
        title="Christian Truss vlog player"
      />
    );
  }

  return (
    <div className="grid aspect-video place-items-center rounded-lg border border-gold/25 bg-cream/5 text-center">
      <div>
        <Play className="mx-auto mb-4 text-gold" size={42} aria-hidden />
        <p className="eyebrow text-gold">Bunny.net video placeholder</p>
        <p className="mt-2 text-sm text-cream/58">
          Add Bunny Stream credentials and a video ID to render the live embed.
        </p>
      </div>
    </div>
  );
}
