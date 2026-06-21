import Link from "next/link";

const variantStyles = {
  primary: "bg-neutral-100 text-neutral-950 hover:bg-white",
  secondary: "border border-white/15 bg-white/[0.035] text-neutral-200 hover:border-white/30 hover:bg-white/10 hover:text-white",
  ghost: "text-neutral-400 hover:text-white",
};

type ButtonProps = {
  href: string;
  label: string;
  variant?: keyof typeof variantStyles;
};

export function Button({ href, label, variant = "secondary" }: ButtonProps) {
  const className = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${variantStyles[variant]}`;

  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#")) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
