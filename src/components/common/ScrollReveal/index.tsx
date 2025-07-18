"use client";

import { motion } from "framer-motion";

type ScrollRevealProps = {
  children: React.ReactNode;
  viewport?: {
    once?: boolean;
    amount?: number;
    margin?: string;
  };
  className?: string;
  transition?: {
    duration?: number;
  };
};

export default function ScrollReveal({ children, viewport, className, transition }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}