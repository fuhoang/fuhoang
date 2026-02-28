"use client";

import ReactBitsScrambledText from "@/components/ScrambledText";

type ScrambledTextProps = {
  text: string;
  className?: string;
  stepMs?: number;
};

export function ScrambledText({ text, className, stepMs = 110 }: ScrambledTextProps) {
  return (
    <ReactBitsScrambledText
      className={className}
      duration={Math.min(2.2, Math.max(0.5, stepMs / 70))}
      speed={0.55}
      radius={120}
      scrambleChars=".:"
    >
      {text}
    </ReactBitsScrambledText>
  );
}
