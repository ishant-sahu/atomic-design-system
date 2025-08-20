import React, { useId } from 'react';
import { cn } from '../../../utils/cn';

export interface RadioProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type' | 'onChange'
  > {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'default' | 'error' | 'success';
  onChange?: (value: string) => void;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      variant = 'default',
      onChange,
      id,
      value,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const radioId = id || `radio-${generatedId}`;
    const hasError = variant === 'error' || !!error;
    const hasSuccess = variant === 'success';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };

    return (
      <div className="flex items-start space-x-3">
        <div className="flex items-center h-5">
          <input
            type="radio"
            className={cn(
              'h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500',
              hasError && 'border-error-500 focus:ring-error-500',
              hasSuccess && 'border-success-500 focus:ring-success-500',
              className
            )}
            ref={ref}
            id={radioId}
            value={value}
            onChange={handleChange}
            {...props}
          />
        </div>
        <div className="ml-3 text-sm">
          {label && (
            <label
              htmlFor={radioId}
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

Radio.displayName = 'Radio';
