"use client";

import Galaxy from "@/components/Galaxy";

export function GalaxyBackground() {
  return (
    <div aria-hidden className="fixed inset-0 z-0">
      <Galaxy
        className="h-full w-full opacity-90"
        hueShift={200}
        glowIntensity={0.2}
        starSpeed={0.2}
        speed={0.5}
        density={1.1}
        twinkleIntensity={0.3}
        mouseInteraction={true}
        mouseRepulsion={true}
        repulsionStrength={3}
        transparent
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(67,56,202,0.25),transparent_42%),radial-gradient(circle_at_78%_72%,rgba(14,165,233,0.18),transparent_40%)]" />
    </div>
  );
}
