import { NextRequest, NextResponse } from "next/server";
import { EdenAIResponse } from "@/types";
import axios from "axios";
import { Message } from "@/types";

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
    const { messages }: { messages: Message[] } = await req.json(); // Extract the messages array from the request body

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request body" }, // Return a 400 error if messages are missing or not an array
        { status: 400 }
      );
    }
    const prompt = messages.map((m) => m.content).join("\n"); // Combine message contents into a prompt

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

    const aiResponse = response.data["mistral/small"].generated_text; // Extract the generated text from the response

    return NextResponse.json({ content: aiResponse }); // Return the AI's response as a JSON object
  } catch (error) {
    console.error("Error generating text:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
