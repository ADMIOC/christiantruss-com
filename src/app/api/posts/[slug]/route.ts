import { NextResponse } from "next/server";
import { z } from "zod";
import { posts, vlogs } from "@/lib/content";
import { createSupabaseServiceClient } from "@/lib/supabase/server";

const updatePostSchema = z.object({
  title: z.string().min(1).optional(),
  excerpt: z.string().optional(),
  body: z.string().optional(),
  type: z.enum(["blog", "vlog"]).optional(),
  video_url: z.string().optional(),
  thumbnail_url: z.string().optional(),
  published: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
});

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  const supabase = createSupabaseServiceClient();

  if (!supabase) {
    const post = [...posts, ...vlogs].find((item) => item.slug === params.slug);
    return NextResponse.json({ post, mode: "demo" });
  }

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }

  return NextResponse.json({ post: data });
}

export async function PATCH(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const payload = updatePostSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ error: payload.error.flatten() }, { status: 400 });
  }

  const supabase = createSupabaseServiceClient();

  if (!supabase) {
    return NextResponse.json({ slug: params.slug, updates: payload.data, mode: "demo" });
  }

  const { data, error } = await supabase
    .from("posts")
    .update(payload.data)
    .eq("slug", params.slug)
    .select("*")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ post: data });
}

export async function DELETE(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  const supabase = createSupabaseServiceClient();

  if (!supabase) {
    return NextResponse.json({ slug: params.slug, deleted: true, mode: "demo" });
  }

  const { error } = await supabase.from("posts").delete().eq("slug", params.slug);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ deleted: true });
}
