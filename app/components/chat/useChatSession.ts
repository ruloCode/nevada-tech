'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
}

function getSessionId(): string {
  if (typeof window === 'undefined') return generateId();
  let id = sessionStorage.getItem('chat-session-id');
  if (!id) {
    id = generateId();
    sessionStorage.setItem('chat-session-id', id);
  }
  return id;
}

export function useChatSession(language: string) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const sessionId = useRef(getSessionId());

  // Reset session ID on mount (client-side only)
  useEffect(() => {
    sessionId.current = getSessionId();
  }, []);

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || isLoading) return;

      const userMessage: ChatMessage = {
        id: generateId(),
        role: 'user',
        content: content.trim(),
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: content.trim(),
            sessionId: sessionId.current,
            language,
          }),
        });

        if (!res.ok) throw new Error('Request failed');

        const data = await res.json();

        const assistantMessage: ChatMessage = {
          id: generateId(),
          role: 'assistant',
          content: data.response || data.output || 'Sorry, I could not process your request.',
          timestamp: Date.now(),
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch {
        const errorMessage: ChatMessage = {
          id: generateId(),
          role: 'assistant',
          content: language === 'es'
            ? 'Lo siento, hubo un error. Por favor intenta de nuevo.'
            : 'Sorry, something went wrong. Please try again.',
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, language]
  );

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return { messages, isLoading, sendMessage, clearMessages };
}
