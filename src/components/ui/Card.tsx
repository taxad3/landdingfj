import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const hoverStyles = hover
    ? 'hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300'
    : '';

  return (
    <div className={`bg-slate-900/50 border border-slate-800 rounded-xl p-6 ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
