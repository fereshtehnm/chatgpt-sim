import { ChatInput } from "@/components/sections";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* Other chat components here */}
      <div className="mt-auto">
        <ChatInput />
      </div>
    </div>
  );
}
