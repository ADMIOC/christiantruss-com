import type { MetadataRoute } from "next";
import { posts, vlogs } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const routes = ["", "/cuts", "/care", "/book", "/blog", "/vlog"];
  const postRoutes = posts.map((post) => `/blog/${post.slug}`);
  const vlogRoutes = vlogs.map((video) => `/vlog/${video.slug}`);

  return [...routes, ...postRoutes, ...vlogRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
