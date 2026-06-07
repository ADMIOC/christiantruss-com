import { PostCard } from "@/components/blog/PostCard";
import { Input } from "@/components/ui/Input";
import { posts } from "@/lib/content";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags || [])));

  return (
    <section className="bg-ink py-16">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold">Blog</p>
          <h1 className="display-type mt-4 text-cream">Field notes for cuts and care.</h1>
        </div>
        <div className="mt-8 grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
          <Input placeholder="Search posts" />
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded border border-gold/30 px-3 py-2 text-sm text-gold">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
