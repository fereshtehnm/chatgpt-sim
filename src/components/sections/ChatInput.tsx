"use client"
import React, { useState } from 'react';

const ChatInput= () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage(''); // Clear the input after sending
    }
  };

  return (
    <div className="fixed bottom-10 w-5/6 flex items-center px-4 py-2 z-50">
      <button className="p-2 hover:bg-gray-200 rounded-full">
        <i className="fas fa-paperclip text-gray-500"></i>
      </button>
      <input
        type="text"
        className="flex-grow ml-2 bg-white rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Message ChatGPT"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSendMessage();
          }
        }}
      />
      <button
        onClick={handleSendMessage}
        className="ml-2 p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
      >
        <i className="fas fa-paper-plane text-gray-500"></i>
      </button>
    </div>
  );
};

export default ChatInput;
