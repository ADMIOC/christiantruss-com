import { notFound } from "next/navigation";
import { CommentThread } from "@/components/blog/CommentThread";
import { PostBody } from "@/components/blog/PostBody";
import { PostCard } from "@/components/blog/PostCard";
import { posts } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((item) => item.slug === params.slug);
  return {
    title: post?.title || "Blog Post",
    description: post?.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <section className="bg-ink py-16">
      <div className="container-shell max-w-4xl">
        <p className="eyebrow text-gold">Christian Truss</p>
        <h1 className="display-type mt-4 text-cream">{post.title}</h1>
        <p className="mt-5 text-lg text-cream/65">{post.excerpt}</p>
        <div className="mt-10 border-y border-gold/20 py-8">
          <PostBody body={post.body} />
        </div>
        <div className="mt-10">
          <p className="eyebrow text-gold">Related posts</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {related.map((item) => (
              <PostCard key={item.id} post={item} />
            ))}
          </div>
        </div>
        <CommentThread />
      </div>
    </section>
  );
}
