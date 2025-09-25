import type { ReactNode } from 'react';
import clsx from 'clsx';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div className={clsx('rounded-xl border border-neutral-200 bg-white shadow-sm', className)}>
      {children}
    </div>
  );
}

export function CardBody({ children, className }: CardProps) {
  return <div className={clsx('p-4', className)}>{children}</div>;
}

export function CardHeader({ children, className }: CardProps) {
  return <div className={clsx('p-4 border-b border-neutral-200', className)}>{children}</div>;
}

export function CardFooter({ children, className }: CardProps) {
  return <div className={clsx('p-4 border-t border-neutral-200', className)}>{children}</div>;
}
