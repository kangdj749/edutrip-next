// src/components/ui/button.tsx
'use client';

import { cn } from '@/libs/utils'; // Pastikan utils ini tersedia
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'outline';
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = 'solid', ...props }, ref) => {
    const baseStyle =
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
      solid: 'bg-primary text-white hover:bg-primary/90',
      outline: 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-100',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyle, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
