'use client';

import { motion } from 'framer-motion';
import { type ChatMessage as ChatMessageType } from './useChatSession';

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? 'bg-white text-black rounded-br-md'
            : 'bg-white/10 text-white rounded-bl-md'
        }`}
      >
        {message.content}
      </div>
    </motion.div>
  );
}
