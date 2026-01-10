"use client";

import { motion } from "framer-motion";

const lineVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeOut" as const, delay: 0.5 },
  },
};

export default function DecorativeLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
      {/* Curva 1: esquina superior izquierda */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -left-[100px] -top-[50px] w-[700px] h-[500px]"
        viewBox="0 0 700 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="strokeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3A818D" stopOpacity="0" />
            <stop offset="20%" stopColor="#3A818D" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#3A818D" stopOpacity="0.4" />
            <stop offset="80%" stopColor="#3A818D" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#3A818D" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          d="M 0 450 Q 300 200 700 50"
          stroke="url(#strokeGrad1)"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Curva 2: esquina inferior derecha */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute -right-[100px] -bottom-[50px] w-[700px] h-[500px]"
        viewBox="0 0 700 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="strokeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3A818D" stopOpacity="0" />
            <stop offset="20%" stopColor="#3A818D" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#3A818D" stopOpacity="0.4" />
            <stop offset="80%" stopColor="#3A818D" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#3A818D" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          d="M 0 450 Q 400 300 700 50"
          stroke="url(#strokeGrad2)"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </motion.svg>
    </div>
  );
}
