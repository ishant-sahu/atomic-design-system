import React from 'react';
import { cn } from '../../../utils/cn';

export interface CheckboxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type' | 'onChange'
  > {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'default' | 'error' | 'success';
  onChange?: (checked: boolean) => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      variant = 'default',
      onChange,
      id,
      checked,
      ...props
    },
    ref
  ) => {
    const checkboxId =
      id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = variant === 'error' || !!error;
    const hasSuccess = variant === 'success';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.checked);
      }
    };

    return (
      <div className="flex items-start space-x-3">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            className={cn(
              'h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500',
              hasError && 'border-error-500 focus:ring-error-500',
              hasSuccess && 'border-success-500 focus:ring-success-500',
              className
            )}
            ref={ref}
            id={checkboxId}
            checked={checked}
            onChange={handleChange}
            {...props}
          />
        </div>
        <div className="ml-3 text-sm">
          {label && (
            <label
              htmlFor={checkboxId}
              className="font-medium text-gray-700 dark:text-gray-300"
            >
              {label}
            </label>
          )}
          {error && (
            <p className="text-error-600 dark:text-error-400 mt-1">{error}</p>
          )}
          {helperText && !error && (
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              {helperText}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
