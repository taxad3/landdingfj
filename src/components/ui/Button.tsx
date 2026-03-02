import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  target?: string;
  onClick?: (e?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

export default function Button({
  children,
  variant = 'primary',
  href,
  target,
  className = '',
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:scale-105',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-green-500/50',
    ghost: 'text-slate-300 hover:text-green-500 hover:bg-slate-800/50',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} className={classes} onClick={onClick as any}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
