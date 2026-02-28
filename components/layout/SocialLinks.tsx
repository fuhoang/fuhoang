import { Github, Instagram, Linkedin, Mail } from "lucide-react";

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
];

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      {links.map(({ href, label, icon: Icon }) => (
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
