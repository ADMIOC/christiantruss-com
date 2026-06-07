import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { Post } from "@/types/post";

export function PostCard({ post }: { post: Post }) {
  const href = post.type === "vlog" ? `/vlog/${post.slug}` : `/blog/${post.slug}`;

  return (
    <Link
      className="luxury-panel block rounded-lg p-5 transition duration-200 hover:border-gold/70 hover:bg-cream/10"
      href={href}
    >
      <div className="flex flex-wrap gap-2">
        {(post.tags || []).slice(0, 2).map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <h2 className="mt-5 font-serif text-2xl leading-tight text-cream">{post.title}</h2>
      <p className="mt-3 text-sm text-cream/62">{post.excerpt}</p>
    </Link>
  );
}
