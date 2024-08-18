// src/pages/page.tsx
import React from "react";
import { ChatBox } from "@/components/sections";

export const runtime = 'edge'

export default function Home() {

  return (
    <div className="flex flex-col h-screen">
      <ChatBox />
    </div>
  );
}
