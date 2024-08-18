import { ChatInput } from "@/components/sections";
import Image from "next/image";
import { sendRequest } from "@/utils/apiChat";

export default async function Home() {
  try {
    const responseData = await sendRequest("Hello, I need your help!");
    console.log(responseData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Other chat components here */}
      <div className="mt-auto">
        <ChatInput />
      </div>
    </div>
  );
}
