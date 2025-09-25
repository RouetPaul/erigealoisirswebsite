import type { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none';
  const sizes = {
    sm: 'text-sm h-9 px-3',
    md: 'text-sm h-10 px-4',
    lg: 'text-base h-12 px-5',
  } as const;
  const variants = {
    primary: 'bg-[var(--color-primary)] text-white hover:opacity-90',
    secondary: 'border border-neutral-300 bg-white hover:bg-neutral-50',
    ghost: 'hover:bg-neutral-100',
  } as const;

  return (
    <button className={clsx(base, sizes[size], variants[variant], className)} {...props}>
      {leftIcon && (
        <span className="mr-2" aria-hidden>
          {leftIcon}
        </span>
      )}
      {children}
      {rightIcon && (
        <span className="ml-2" aria-hidden>
          {rightIcon}
        </span>
      )}
    </button>
  );
}
