import clsx from 'clsx';

type BadgeProps = {
  children: React.ReactNode;
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error';
  className?: string;
};

export function Badge({ children, color = 'neutral', className }: BadgeProps) {
  const colorMap: Record<string, string> = {
    primary: 'bg-[color:oklch(60%_0.12_259)] text-white', // fallback simple
    neutral: 'bg-neutral-100 text-neutral-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-amber-100 text-amber-800',
    error: 'bg-red-100 text-red-800',
  };
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        colorMap[color],
        className
      )}
    >
      {children}
    </span>
  );
}
