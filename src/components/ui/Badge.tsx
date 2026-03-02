interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-green-500/20 text-green-500 text-sm font-medium ${className}`}>
      {children}
    </span>
  );
}
