"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import axios from "axios";
import Button from "../ui/Button";
import { Message } from "@/types";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userMessage: Message = { role: "user", content: input };

    // Set the user message and clear the input
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput(""); // Clear the input field immediately

    try {
      const response = await axios.post<{ content: string }>("/api/chat", {
        messages: [...messages, userMessage],
      });
      
      if (response.data.content) {
        const aiMessage: Message = {
          role: "AI",
          content: response.data.content,
        };
        setMessages((prevMessages) => [...prevMessages, aiMessage]); // Only add the AI message now
      } else {
        console.error("No content in AI response");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col w-full py-24 mx-auto stretch">
      <ul className="overflow-auto px-6 w-full h-full">
        {messages.map((m, index) => (
          <li key={index} className="mb-2">
            {m.role === "user" ? (
              <Image src="/user.svg" width={35} height={35} alt="user" />
            ) : (
              <Image src="/ai.svg" width={35} height={35} alt="user" />

            )}
            <div className="bg-light-gray ml-6 mt-1 mb-3 rounded-md p-3">
              {m.content}
            </div>
            
          </li>
        ))}
      </ul>
      <form
        onSubmit={handleSubmit}
        className="fixed bottom-10 right-0 w-full sm:w-5/6 flex items-center px-4 py-2 z-50"
      >
        <input
          className="flex-grow ml-2 bg-white rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
        <Button type="submit">Ask AI</Button>
      </form>
    </div>
  );
}
