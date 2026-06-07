import Anthropic from "@anthropic-ai/sdk";

export type SocialPlatform = "instagram" | "tiktok" | "x";
export type SocialVertical = "cuts" | "care" | "both";
export type SocialTone = "educational" | "hype" | "personal" | "provocative";

export type SocialGenerationInput = {
  topic: string;
  vertical: SocialVertical;
  platforms: SocialPlatform[];
  tone: SocialTone;
};

export type SocialGeneration = Partial<Record<SocialPlatform, string>>;

const systemPrompt = `You are the social media voice for Christian Truss — master barber and self-care expert.
Brand verticals: "Truss The Cuts" (barber community) and "Truss The Care" (self-care community).
Brand voice: authoritative but approachable, educational, culturally fluent, confidence-forward.
Tagline: "Truss The Cuts. Truss The Care. Truss yourself."

When generating content:
- Instagram caption: 150-220 words, storytelling hook, 3-5 hashtags, CTA to book or follow
- TikTok script: 30-45 second spoken script, hook in first 3 seconds, trend-aware
- X/Twitter: punchy 1-2 sentence insight or question, no hashtags, high shareability
- Always offer both Cuts and Care angles for each topic
- Never sound like a brand press release — sound like Christian talking directly to his community`;

function fallbackGeneration(input: SocialGenerationInput): SocialGeneration {
  const angle =
    input.vertical === "both"
      ? "the cut and the care behind it"
      : input.vertical === "cuts"
        ? "the craft in the chair"
        : "the care routine behind confidence";

  const output: SocialGeneration = {};

  if (input.platforms.includes("instagram")) {
    output.instagram = `Most people talk about ${input.topic} like it is just a look. I see it as a standard. ${angle} matters because the way you show up is built before the world sees you.\n\nFor Truss The Cuts, this is about precision, consultation, and teaching clients how to maintain the result. For Truss The Care, it is about making the routine simple enough to repeat and strong enough to change how you move.\n\nBook the chair, follow for the breakdowns, and keep building the ritual.\n\n#TrussTheCuts #TrussTheCare #ChristianTruss #MensGrooming #SelfCare`;
  }

  if (input.platforms.includes("tiktok")) {
    output.tiktok = `Hook: Stop treating ${input.topic} like a random trend.\n\nHere is the truth: the cut is the signal, but the care is the system. If you want the look to last, you need the consultation, the right shape, and the routine after the appointment.\n\nCuts angle: ask your barber what your head shape and growth pattern need.\n\nCare angle: build the daily habit that keeps the result clean.\n\nThat is the standard. Truss The Cuts. Truss The Care. Truss yourself.`;
  }

  if (input.platforms.includes("x")) {
    output.x = `${input.topic} is not just style. It is the visible result of standards you repeat when nobody is watching.`;
  }

  return output;
}

export async function generateSocialContent(
  input: SocialGenerationInput,
): Promise<SocialGeneration> {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return fallbackGeneration(input);
  }

  const anthropic = new Anthropic({ apiKey });
  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1200,
    system: systemPrompt,
    messages: [
      {
        role: "user",
        content: `Generate JSON only for this request:
topic: ${input.topic}
vertical: ${input.vertical}
platforms: ${input.platforms.join(", ")}
tone: ${input.tone}

Return a JSON object with only these possible keys: instagram, tiktok, x.`,
      },
    ],
  });

  const text = response.content
    .map((block) => (block.type === "text" ? block.text : ""))
    .join("")
    .trim();

  try {
    return JSON.parse(text) as SocialGeneration;
  } catch {
    return { instagram: text };
  }
}
