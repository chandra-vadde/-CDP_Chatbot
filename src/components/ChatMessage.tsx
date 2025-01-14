import React from 'react';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

export function ChatMessage({ message, isUser }: ChatMessageProps) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-2 ${
          isUser
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-gray-100 text-gray-800 rounded-bl-none'
        }`}
      >
        <pre className="whitespace-pre-wrap font-sans">{message}</pre>
      </div>
    </div>
  );
}