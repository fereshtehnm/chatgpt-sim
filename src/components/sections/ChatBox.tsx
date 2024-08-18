'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (

     <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}
      <form onSubmit={handleSubmit} className="fixed bottom-10 right-0 w-4/5 flex items-center px-4 py-2 z-50">
        <input
          className="flex-grow ml-2 bg-white rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
        >
          <i className="fas fa-paper-plane text-gray-500">Ask AI</i>
        </button>
      </form>
    </div>
  );
}
