interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ children, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
