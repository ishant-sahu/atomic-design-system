import React from 'react';
import { cn } from '../../../utils/cn';
import { ButtonProps } from '../../atoms/Button';

export interface ButtonGroupProps {
  children: React.ReactElement<ButtonProps>[];
  variant?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  variant = 'horizontal',
  size = 'md',
  className,
}) => {
  return (
    <div
      className={cn(
        'inline-flex',
        variant === 'vertical' ? 'flex-col' : 'flex-row',
        className
      )}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            size,
            className: cn(
              child.props.className,
              variant === 'horizontal'
                ? index === 0
                  ? 'rounded-r-none'
                  : index === children.length - 1
                  ? 'rounded-l-none'
                  : 'rounded-none'
                : index === 0
                ? 'rounded-b-none'
                : index === children.length - 1
                ? 'rounded-t-none'
                : 'rounded-none',
              variant === 'horizontal'
                ? index !== 0 && '-ml-px'
                : index !== 0 && '-mt-px'
            ),
          });
        }
        return child;
      })}
    </div>
  );
};
