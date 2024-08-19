import { NextRequest, NextResponse } from "next/server";
import { EdenAIResponse } from "@/types";
import axios from "axios";

interface Message {
  role: "user" | "AI";
  content: string;
}

export async function POST(req: NextRequest) {
  const api_key = process.env.API_KEY;
  const api_address = process.env.PUBLIC_API_ADDRESS as string;

  if (!api_key) {
    console.error("API_KEY environment variable is not set");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  try {
    const { messages }: { messages: Message[] } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const prompt = messages.map((m) => m.content).join("\n");

    const response = await axios.post<EdenAIResponse>(
      api_address,
      {
        providers: "mistral/small",
        text: prompt,
        chatbot_global_action: "Act as an assistant",
        previous_history: [],
        temperature: 0.0,
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${api_key}`,
          "Content-Type": "application/json",
        },
      }
    );

    const aiResponse = response.data["mistral/small"].generated_text;

    return NextResponse.json({ content: aiResponse });
  } catch (error) {
    console.error("Error generating text:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
