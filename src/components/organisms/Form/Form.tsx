import React from 'react';
import { cn } from '../../../utils/cn';
import { Button } from '../../atoms/Button';
import { Card, CardHeader, CardBody, CardFooter } from '../../atoms/Card';

export interface FormField {
  name: string;
  label: string;
  required?: boolean;
  helperText?: string;
  error?: string;
  component: React.ReactNode;
}

export interface FormProps {
  title?: string;
  subtitle?: string;
  fields: FormField[];
  onSubmit?: (data: Record<string, any>) => void;
  submitText?: string;
  cancelText?: string;
  onCancel?: () => void;
  loading?: boolean;
  className?: string;
}

export const Form: React.FC<FormProps> = ({
  title,
  subtitle,
  fields,
  onSubmit,
  submitText = 'Submit',
  cancelText = 'Cancel',
  onCancel,
  loading = false,
  className,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (onSubmit) {
      const formData = new FormData(e.currentTarget as HTMLFormElement);
      const data: Record<string, any> = {};

      for (const [key, value] of formData.entries()) {
        data[key] = value;
      }

      onSubmit(data);
    }
  };

  return (
    <Card className={cn('w-full max-w-2xl', className)}>
      <form onSubmit={handleSubmit}>
        {(title || subtitle) && (
          <CardHeader>
            {title && (
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {subtitle}
              </p>
            )}
          </CardHeader>
        )}

        <CardBody>
          <div className="space-y-6">
            {fields.map((field) => (
              <div key={field.name} className="space-y-2">
                {field.label && (
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {field.label}
                    {field.required && (
                      <span className="text-error-600 ml-1">*</span>
                    )}
                  </label>
                )}

                {field.component}

                {field.error && (
                  <p className="text-sm text-error-600 dark:text-error-400">
                    {field.error}
                  </p>
                )}

                {field.helperText && !field.error && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {field.helperText}
                  </p>
                )}
              </div>
            ))}
          </div>
        </CardBody>

        <CardFooter>
          <div className="flex gap-3 w-full">
            {onCancel && (
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                className="flex-1"
              >
                {cancelText}
              </Button>
            )}
            <Button
              type="submit"
              loading={loading}
              className={cn(onCancel ? 'flex-1' : 'w-full')}
            >
              {submitText}
            </Button>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};
