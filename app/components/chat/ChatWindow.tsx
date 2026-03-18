'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { useChatSession } from './useChatSession';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

interface ChatWindowProps {
  onClose: () => void;
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-white/10 rounded-2xl rounded-bl-md px-4 py-3 flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 bg-white/50 rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}

export default function ChatWindow({ onClose }: ChatWindowProps) {
  const locale = useLocale();
  const t = useTranslations('Chat');
  const { messages, isLoading, sendMessage } = useChatSession(locale);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] max-h-[calc(100vh-8rem)] bg-[#0a0a0a] border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl z-50"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div>
          <h3 className="text-white text-sm font-medium">{t('title')}</h3>
          <p className="text-white/50 text-xs">{t('subtitle')}</p>
        </div>
        <button
          onClick={onClose}
          className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scrollbar-hide">
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full">
            <p className="text-white/30 text-sm text-center px-6">{t('greeting')}</p>
          </div>
        )}
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        {isLoading && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-white/10">
        <ChatInput onSend={sendMessage} disabled={isLoading} />
      </div>

      {/* Powered by */}
      <div className="text-center pb-2">
        <span className="text-white/20 text-[10px]">{t('poweredBy')}</span>
      </div>
    </motion.div>
  );
}
