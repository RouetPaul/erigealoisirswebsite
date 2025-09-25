import type { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string;
};

export function Input({ className, label, hint, error, id, ...props }: Props) {
  const inputId = id || props.name || 'input';
  const describedBy = [hint ? `${inputId}-hint` : undefined, error ? `${inputId}-error` : undefined]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={clsx('grid gap-1', className)}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-neutral-800">
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-describedby={describedBy || undefined}
        aria-invalid={!!error || undefined}
        className="h-10 rounded-lg border border-neutral-300 bg-white px-3 text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2"
        {...props}
      />
      {hint && (
        <p id={`${inputId}-hint`} className="text-xs text-neutral-600">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${inputId}-error`} className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
