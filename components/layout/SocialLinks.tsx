import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
    >
      <path d="M19.11 4.89A9.92 9.92 0 0 0 12.04 2a9.95 9.95 0 0 0-8.6 14.94L2 22l5.2-1.36A10 10 0 0 0 12.04 22h.01A9.99 9.99 0 0 0 22 12.04a9.9 9.9 0 0 0-2.89-7.15Zm-7.06 15.43h-.01a8.3 8.3 0 0 1-4.22-1.15l-.3-.18-3.08.81.82-3-.2-.31a8.28 8.28 0 1 1 6.99 3.83Zm4.55-6.2c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.12-.17.25-.65.8-.79.97-.15.17-.29.19-.54.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.37-1.69-.14-.25-.02-.38.11-.5.12-.12.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.76-1.85-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.02 2.58c.12.17 1.74 2.65 4.22 3.72.59.25 1.05.4 1.41.51.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.17.21-.58.21-1.07.15-1.17-.05-.1-.22-.17-.47-.29Z" />
    </svg>
  );
}

type IconComponent = LucideIcon | ComponentType<{ size?: number }>;

const links = [
  {
    href: "mailto:fuhoang84@googlemail.com",
    label: "Email",
    icon: Mail,
  },
  {
    href: "https://github.com/fuhoang",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/fu-hoang84/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://www.instagram.com/fuhoang/",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://wa.me/447535034000",
    label: "WhatsApp",
    icon: WhatsAppIcon,
  },
];

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      {links.map(({ href, label, icon: Icon }: { href: string; label: string; icon: IconComponent }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-panel card-surface text-slate-100 transition hover:scale-105"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
