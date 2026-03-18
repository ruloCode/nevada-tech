'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatWindow from './ChatWindow';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
      </AnimatePresence>

      {/* Floating button — hidden on mobile when chat is open (fullscreen) */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-lg shadow-white/10 ${
          isOpen ? 'hidden sm:flex' : ''
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.15 }}
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
