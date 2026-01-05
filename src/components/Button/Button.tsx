import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonColor = 'primary' | 'secondary' | 'danger' | 'success' | 'warning';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The size of the button
   * @default 'md'
   */
  size?: ButtonSize;

  /**
   * The color of the button
   * @default 'primary'
   */
  color?: ButtonColor;

  /**
   * The variant of the button
   * @default 'solid'
   */
  variant?: 'solid' | 'liquid' | 'gas';
}

const buttonStyles = cva('border', {
  variants: {
    size: {
      sm: 'h-8 px-5 text-xs rounded-sm',
      md: 'h-9 px-6 text-sm rounded',
      lg: 'h-10 px-7 text-base rounded-md',
    },
    color: {
      primary: '',
      secondary: '',
      danger: '',
      success: '',
      warning: '',
    },
    variant: {
      solid: 'border-transparent',
      liquid: 'border-transparent',
      gas: 'bg-transparent',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: 'solid',
      className: 'bg-primary-600 text-white hover:bg-primary-700 active:border-primary-100',
    },
    {
      color: 'primary',
      variant: 'liquid',
      className: 'bg-primary-100 text-primary-600 hover:bg-primary-200 active:border-primary-50',
    },
    {
      color: 'primary',
      variant: 'gas',
      className:
        'border-primary-600 text-primary-600 hover:border-primary-700 active:border-primary-200',
    },

    {
      color: 'secondary',
      variant: 'solid',
      className: 'bg-secondary-600 text-white hover:bg-secondary-700 active:border-secondary-100',
    },
    {
      color: 'secondary',
      variant: 'liquid',
      className:
        'bg-secondary-100 text-secondary-600 hover:bg-secondary-200 active:border-secondary-50',
    },
    {
      color: 'secondary',
      variant: 'gas',
      className:
        'border-secondary-600 text-secondary-600 hover:border-secondary-700 active:border-secondary-200',
    },

    {
      color: 'danger',
      variant: 'solid',
      className: 'bg-danger-600 text-white hover:bg-danger-700 active:border-danger-100',
    },
    {
      color: 'danger',
      variant: 'liquid',
      className: 'bg-danger-100 text-danger-600 hover:bg-danger-200 active:border-danger-50',
    },
    {
      color: 'danger',
      variant: 'gas',
      className:
        'border-danger-600 text-danger-600 hover:border-danger-700 active:border-danger-200',
    },

    {
      color: 'success',
      variant: 'solid',
      className: 'bg-success-600 text-white hover:bg-success-700 active:border-success-100',
    },
    {
      color: 'success',
      variant: 'liquid',
      className: 'bg-success-100 text-success-600 hover:bg-success-200 active:border-success-50',
    },
    {
      color: 'success',
      variant: 'gas',
      className:
        'border-success-600 text-success-600 hover:border-success-700 active:border-success-200',
    },

    {
      color: 'warning',
      variant: 'solid',
      className: 'bg-warning-600 text-white hover:bg-warning-700 active:border-warning-100',
    },
    {
      color: 'warning',
      variant: 'liquid',
      className: 'bg-warning-100 text-warning-600 hover:bg-warning-200 active:border-warning-50',
    },
    {
      color: 'warning',
      variant: 'gas',
      className:
        'border-warning-600 text-warning-600 hover:border-warning-700 active:border-warning-200',
    },
  ],
});

/**
 * Button component - customize me!
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = 'md', color = 'primary', variant = 'solid', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn('cursor-pointer', buttonStyles({ size, color, variant }), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
