import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServiceClient } from "@/lib/supabase/server";

const commentSchema = z.object({
  post_id: z.string().optional(),
  author_name: z.string().min(1),
  body: z.string().min(2),
});

export async function POST(request: Request) {
  const payload = commentSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ error: payload.error.flatten() }, { status: 400 });
  }

  const supabase = createSupabaseServiceClient();

  if (!supabase) {
    return NextResponse.json({ comment: payload.data, mode: "demo" }, { status: 201 });
  }

  const { data, error } = await supabase
    .from("comments")
    .insert({
      ...payload.data,
      author_role: "visitor",
      approved: false,
    })
    .select("*")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ comment: data }, { status: 201 });
}
