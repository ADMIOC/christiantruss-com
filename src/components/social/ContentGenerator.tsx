"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { PostPreview } from "@/components/social/PostPreview";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import type {
  SocialGeneration,
  SocialPlatform,
  SocialTone,
  SocialVertical,
} from "@/lib/anthropic/social-agent";

const platforms: SocialPlatform[] = ["instagram", "tiktok", "x"];

export function ContentGenerator() {
  const [generation, setGeneration] = useState<SocialGeneration>({});
  const [status, setStatus] = useState("");

  async function submit(formData: FormData, saveDraft = false) {
    setStatus(saveDraft ? "Saving draft..." : "Generating...");
    const selectedPlatforms = platforms.filter((platform) => formData.get(platform));

    const response = await fetch("/api/social/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        topic: String(formData.get("topic") || ""),
        vertical: String(formData.get("vertical") || "both") as SocialVertical,
        tone: String(formData.get("tone") || "educational") as SocialTone,
        platforms: selectedPlatforms.length ? selectedPlatforms : platforms,
        saveDraft,
      }),
    });

    const data = (await response.json()) as {
      content?: SocialGeneration;
      error?: string;
      mode?: string;
    };

    if (!response.ok) {
      setStatus(data.error || "Could not generate content.");
      return;
    }

    setGeneration(data.content || {});
    setStatus(saveDraft ? "Draft saved." : data.mode === "demo" ? "Generated in demo mode." : "Generated.");
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <Card>
        <div className="flex items-center gap-3">
          <Sparkles className="text-gold" size={24} aria-hidden />
          <h1 className="page-title text-cream">Social content generator</h1>
        </div>
        <form className="mt-6 grid gap-4" action={(formData) => submit(formData)}>
          <Input name="topic" placeholder="Topic, trend, client question, or content idea" required />
          <label className="grid gap-2 text-sm text-cream/70">
            Vertical
            <select className="min-h-11 rounded border border-gold/25 bg-ink-soft px-3 text-cream outline-none" name="vertical">
              <option value="both">Both</option>
              <option value="cuts">Cuts</option>
              <option value="care">Care</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm text-cream/70">
            Tone
            <select className="min-h-11 rounded border border-gold/25 bg-ink-soft px-3 text-cream outline-none" name="tone">
              <option value="educational">Educational</option>
              <option value="hype">Hype</option>
              <option value="personal">Personal</option>
              <option value="provocative">Provocative</option>
            </select>
          </label>
          <fieldset className="grid gap-2">
            <legend className="text-sm text-cream/70">Platforms</legend>
            <div className="flex flex-wrap gap-3 text-sm text-cream/70">
              {platforms.map((platform) => (
                <label key={platform} className="flex items-center gap-2">
                  <input defaultChecked name={platform} type="checkbox" />
                  {platform}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="flex flex-wrap gap-3">
            <Button type="submit">Generate</Button>
            <Button
              formAction={(formData) => submit(formData, true)}
              type="submit"
              variant="secondary"
            >
              Save to Drafts
            </Button>
          </div>
          {status ? <p className="text-sm text-gold">{status}</p> : null}
        </form>
      </Card>
      <div className="grid gap-4">
        {platforms.map((platform) =>
          generation[platform] ? (
            <PostPreview key={platform} platform={platform} content={generation[platform] || ""} />
          ) : null,
        )}
      </div>
    </div>
  );
}
