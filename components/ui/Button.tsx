import Link from "next/link";

const variantStyles = {
  primary: "bg-cyan-300 text-slate-950 hover:bg-cyan-200",
  secondary: "border border-white/15 text-white hover:border-cyan-300/40 hover:bg-white/10",
  ghost: "border border-white/10 text-slate-300 hover:border-violet-300/40 hover:bg-white/10 hover:text-white",
};

type ButtonProps = {
  href: string;
  label: string;
  variant?: keyof typeof variantStyles;
};

export function Button({ href, label, variant = "secondary" }: ButtonProps) {
  const className = `rounded-full px-5 py-3 text-sm font-semibold transition ${variantStyles[variant]}`;

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
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
