import { NextResponse } from "next/server";
import { z } from "zod";
import { generateSocialContent } from "@/lib/anthropic/social-agent";
import { createSupabaseServiceClient } from "@/lib/supabase/server";

const socialSchema = z.object({
  topic: z.string().min(2),
  vertical: z.enum(["cuts", "care", "both"]),
  platforms: z.array(z.enum(["instagram", "tiktok", "x"])).min(1),
  tone: z.enum(["educational", "hype", "personal", "provocative"]),
  saveDraft: z.boolean().optional(),
});

export async function POST(request: Request) {
  const payload = socialSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ error: payload.error.flatten() }, { status: 400 });
  }

  const content = await generateSocialContent(payload.data);
  let mode = process.env.ANTHROPIC_API_KEY ? "live" : "demo";

  if (payload.data.saveDraft) {
    const supabase = createSupabaseServiceClient();

    if (supabase) {
      await supabase.from("social_drafts").insert({
        topic: payload.data.topic,
        vertical: payload.data.vertical,
        tone: payload.data.tone,
        content,
      });
    } else {
      mode = "demo";
    }
  }

  return NextResponse.json({ content, mode });
}
