import { DualVertical } from "@/components/brand/DualVertical";
import { HeroSection } from "@/components/brand/HeroSection";
import { MarketStats } from "@/components/brand/MarketStats";
import { PositioningStatement } from "@/components/brand/PositioningStatement";
import { PostCard } from "@/components/blog/PostCard";
import { Button } from "@/components/ui/Button";
import { posts, testimonials, vlogs } from "@/lib/content";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DualVertical />
      <MarketStats />
      <PositioningStatement />
      <section className="bg-ink py-16">
        <div className="container-shell">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-gold">Latest education</p>
              <h2 className="page-title mt-3 text-cream">Blog and vlog field notes</h2>
            </div>
            <Button href="/blog" variant="secondary">
              View All Posts
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[...posts.slice(0, 2), vlogs[0]].map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-gold/20 bg-cream py-12 text-ink">
        <div className="container-shell grid gap-4 md:grid-cols-3">
          {testimonials.map((quote) => (
            <blockquote key={quote} className="font-serif text-2xl leading-tight">
              &ldquo;{quote}&rdquo;
            </blockquote>
          ))}
        </div>
      </section>
      <section className="bg-ink py-16">
        <div className="container-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow text-gold">Stay close</p>
            <h2 className="page-title mt-3 text-cream">Book the chair. Build the ritual.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/book">Book a Cut</Button>
            <Button href="/care" variant="secondary">
              Join Care
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
