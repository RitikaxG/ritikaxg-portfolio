export function Badge({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-xs font-medium text-neutral-300">
      {children}
    </span>
  );
}
