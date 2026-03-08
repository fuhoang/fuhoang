import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { GalaxyBackground } from "@/components/ui/GalaxyBackground";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden bg-ink text-slate-100 antialiased">
        <GalaxyBackground />
        <div className="relative z-10">{children}</div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
