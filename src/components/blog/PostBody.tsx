export function PostBody({ body }: { body?: string | null }) {
  return (
    <article className="prose prose-invert max-w-none prose-headings:font-serif prose-a:text-gold">
      <p>{body || "Christian will publish the full article body from the admin CMS."}</p>
    </article>
  );
}
