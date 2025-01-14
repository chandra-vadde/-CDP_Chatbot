import React, { useState, useRef, useEffect } from 'react';
import { MessageCircleQuestion } from 'lucide-react';
import { findResponse } from './data/cdpData';
import { ChatMessage } from './components/ChatMessage';

interface Message {
  text: string;
  isUser: boolean;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm your CDP Support Assistant. How can I help you with Segment, mParticle, Lytics, or Zeotap?",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }]);
    setInput('');

    // Simulate typing delay
    setTimeout(() => {
      const response = findResponse(userMessage);
      setMessages((prev) => [...prev, { text: response, isUser: false }]);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center">
          <MessageCircleQuestion className="h-8 w-8 text-blue-500 mr-3" />
          <h1 className="text-xl font-semibold text-gray-800">CDP Support Assistant</h1>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-1 max-w-4xl w-full mx-auto p-4 flex flex-col">
        {/* Messages Area */}
        <div className="flex-1 bg-white rounded-lg shadow-sm mb-4 p-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                message={message.text}
                isUser={message.isUser}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question about CDPs..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;