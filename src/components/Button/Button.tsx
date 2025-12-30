import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';

export type ButtonSize = 'sm' | 'md';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The size of the button
   * @default 'md'
   */
  size?: ButtonSize;
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm rounded-sm',
  md: 'h-10 px-4 text-sm rounded-md',
};

/**
 * Button component - customize me!
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center font-medium',
          'bg-primary-600 text-white',
          'hover:bg-primary-700',
          'transition-all duration-200',
          // Size
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
