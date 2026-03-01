import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import { GalaxyBackground } from "@/components/ui/GalaxyBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fu Hoang — Senior Full-Stack Software Developer (London)",
  description:
    "Senior Full-Stack Software Developer in London. Next.js, React, Laravel, MongoDB. Testing, CI/CD, AWS. Contract & freelance.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Fu Hoang — Senior Full-Stack Software Developer",
    description:
      "Production-grade web systems. Next.js, React, Laravel, MongoDB. Testing, CI/CD, AWS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden bg-ink text-slate-100 antialiased">
        <GalaxyBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
