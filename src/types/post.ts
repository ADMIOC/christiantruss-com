export type PostType = "blog" | "vlog";

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string | null;
  body?: string | null;
  type: PostType;
  video_url?: string | null;
  thumbnail_url?: string | null;
  published: boolean;
  published_at?: string | null;
  tags?: string[] | null;
  created_at: string;
};
