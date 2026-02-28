import type { Metadata } from "next";
import { JetBrains_Mono, Roboto } from "next/font/google";
import { GalaxyBackground } from "@/components/ui/GalaxyBackground";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
});

export const metadata: Metadata = {
  title: "Fu Hoang — Senior Full-Stack Software Developer (London)",
  description:
    "Senior Full-Stack Software Developer in London. Next.js, React, Laravel, MongoDB. Testing, CI/CD, AWS. Contract & freelance.",
  metadataBase: new URL("https://example.com"), // change when you have your real domain
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
      <body
        className={`${roboto.variable} ${jetBrainsMono.variable} relative min-h-screen overflow-x-hidden bg-ink text-slate-100 antialiased`}
      >
        <GalaxyBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
