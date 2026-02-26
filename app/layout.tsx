import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-ink text-slate-100 antialiased">{children}</body>
    </html>
  );
}
