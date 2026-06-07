import { notFound } from "next/navigation";
import { CommentThread } from "@/components/blog/CommentThread";
import { VideoPlayer } from "@/components/vlog/VideoPlayer";
import { vlogs } from "@/lib/content";

export function generateStaticParams() {
  return vlogs.map((video) => ({ slug: video.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const video = vlogs.find((item) => item.slug === params.slug);
  return {
    title: video?.title || "Vlog",
    description: video?.excerpt,
  };
}

export default function VlogPostPage({ params }: { params: { slug: string } }) {
  const video = vlogs.find((item) => item.slug === params.slug);

  if (!video) {
    notFound();
  }

  return (
    <section className="bg-ink py-16">
      <div className="container-shell max-w-5xl">
        <p className="eyebrow text-gold">Christian Truss Vlog</p>
        <h1 className="page-title mt-4 text-cream">{video.title}</h1>
        <p className="mt-3 max-w-3xl text-cream/65">{video.excerpt}</p>
        <div className="mt-8">
          <VideoPlayer videoId={video.video_url} />
        </div>
        <div className="mt-8 max-w-3xl text-cream/68">
          <h2 className="font-serif text-2xl text-cream">Description + transcript</h2>
          <p className="mt-3">{video.body}</p>
        </div>
        <CommentThread />
      </div>
    </section>
  );
}
