import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// NVIDIA Nemotron via OpenAI-compatible endpoint (free tier)
// TODO: Add NVIDIA_API_KEY to .env.local — get it from https://integrate.api.nvidia.com
const client = new OpenAI({
  apiKey: process.env.NVIDIA_API_KEY ?? "nvapi-placeholder",
  baseURL: "https://integrate.api.nvidia.com/v1",
});

const SYSTEM_PROMPT = `You are the Craig du Toit Nel Wellness AI Assistant — a friendly, knowledgeable health and wellness guide.

Craig du Toit Nel has two sections:
- Craig Slimming: medical-grade peptides, formulas, slimming solutions
- Craig Lifestyle: skincare, beauty tools, Glow range products (GlowTox, GlowMist, Citrus Cleanser, Klow, Lash & Glow, and more)

You can help users:
- Find the right products for their goals
- Understand peptides, skincare ingredients, and formulas
- Navigate the shop and find combos or deals
- Check on Craig Coins loyalty rewards
- Answer wellness and beauty questions
- Guide them through the website

Always be warm, encouraging, and professional. Never give medical diagnoses. Always recommend consulting a healthcare professional for medical concerns. Keep responses concise unless the user asks for detail.

Product prices are in South African Rand (R). Key Lifestyle products:
- Klow & Lashes Combo: R1,185 | Klow: R1,045 | Lash & Glow Preglued Lashes: R330
- Glow Be With You Combo: R1,210 | GlowBalm Citrus Cleanser: R290 | GlowMist: R242
- Glow Rejuvenating Cream: R441 | GlowTox: R370 | Facial Tool: R34.65
- Cream & GlowMist Combo: R585 | GlowMist + GlowBalm COMBO: R500.50 | 797 DEAL: R877
- Try Before You Buy (7 Day Sample): R330

Craig Coins: earn 1 coin per R100 spent, redeem 1 coin = R1 discount.

If the user asks to navigate somewhere, respond with a JSON action like: {"action": "navigate", "path": "/lifestyle/shop"}`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
    }

    const completion = await client.chat.completions.create({
      model: "nvidia/llama-3.1-nemotron-ultra-253b-v1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.slice(-10), // keep last 10 for context window
      ],
      max_tokens: 512,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content ?? "";
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to get response from AI. Please try again." },
      { status: 500 }
    );
  }
}
