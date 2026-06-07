import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/Input";
import { posts, vlogs } from "@/lib/content";

export const metadata = {
  title: "Admin Posts",
};

export default function AdminPostsPage() {
  return (
    <div className="grid gap-6">
      <div>
        <p className="eyebrow text-gold">Content CMS</p>
        <h1 className="page-title mt-3 text-cream">Blog and vlog CRUD</h1>
      </div>
      <Card>
        <h2 className="font-serif text-2xl text-cream">Create post</h2>
        <form className="mt-5 grid gap-3">
          <Input name="title" placeholder="Title" />
          <Input name="slug" placeholder="Slug" />
          <select className="min-h-11 rounded border border-gold/25 bg-ink-soft/40 px-3 text-cream outline-none">
            <option value="blog">Blog</option>
            <option value="vlog">Vlog</option>
          </select>
          <Textarea name="body" placeholder="MDX body or vlog description" />
          <Button className="w-fit" type="submit">
            Save Draft
          </Button>
        </form>
      </Card>
      <div className="grid gap-3">
        {[...posts, ...vlogs].map((post) => (
          <Card key={post.id} className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
            <div>
              <p className="font-serif text-2xl text-cream">{post.title}</p>
              <p className="text-sm text-cream/50">
                {post.type} / {post.published ? "published" : "draft"}
              </p>
            </div>
            <div className="flex gap-2">
              <Button href={`/api/posts/${post.slug}`} variant="secondary">
                Edit
              </Button>
              <Button href={`/blog/${post.slug}`} variant="ghost">
                View
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
