import { NextResponse } from "next/server";
import { z } from "zod";
import { posts, vlogs } from "@/lib/content";
import { createSupabaseServiceClient } from "@/lib/supabase/server";

const postSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  excerpt: z.string().optional(),
  body: z.string().optional(),
  type: z.enum(["blog", "vlog"]).default("blog"),
  video_url: z.string().optional(),
  thumbnail_url: z.string().optional(),
  published: z.boolean().default(false),
  tags: z.array(z.string()).optional(),
});

export async function GET() {
  const supabase = createSupabaseServiceClient();

  if (!supabase) {
    return NextResponse.json({ posts: [...posts, ...vlogs], mode: "demo" });
  }

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ posts: data });
}

export async function POST(request: Request) {
  const payload = postSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ error: payload.error.flatten() }, { status: 400 });
  }

  const supabase = createSupabaseServiceClient();

  if (!supabase) {
    return NextResponse.json({ post: payload.data, mode: "demo" }, { status: 201 });
  }

  const { data, error } = await supabase
    .from("posts")
    .insert(payload.data)
    .select("*")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ post: data }, { status: 201 });
}
