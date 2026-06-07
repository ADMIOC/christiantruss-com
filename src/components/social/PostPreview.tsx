"use client";

import { Copy } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { SocialPlatform } from "@/lib/anthropic/social-agent";

const labels: Record<SocialPlatform, string> = {
  instagram: "Instagram",
  tiktok: "TikTok",
  x: "X",
};

export function PostPreview({
  platform,
  content,
}: {
  platform: SocialPlatform;
  content: string;
}) {
  async function copy() {
    await navigator.clipboard.writeText(content);
  }

  return (
    <Card>
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-serif text-2xl text-cream">{labels[platform]}</h2>
        <Button onClick={copy} type="button" variant="ghost">
          <Copy className="mr-2" size={16} aria-hidden />
          Copy
        </Button>
      </div>
      <p className="mt-4 whitespace-pre-line text-sm text-cream/68">{content}</p>
    </Card>
  );
}
