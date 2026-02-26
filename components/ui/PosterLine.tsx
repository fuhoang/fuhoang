"use client";

import { motion, useReducedMotion } from "framer-motion";

export function PosterLine({ text }: { text: string }) {
  const reduce = useReducedMotion();

  return (
    <div className="border-y border-panel py-3 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: reduce ? 0 : -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="whitespace-nowrap text-xs uppercase tracking-[0.35em] text-muted font-mono"
      >
        {text} <span className="mx-3">•</span> {text}{" "}
        <span className="mx-3">•</span> {text}
      </motion.div>
    </div>
  );
}
