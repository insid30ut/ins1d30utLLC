import React from 'react';
import { cn } from '@/utils/cn';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

/**
 * Container component for consistent page layout and max-width
 * Provides responsive padding and centered content
 */
export function Container({
  children,
  size = 'lg',
  className,
  ...props
}: ContainerProps) {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div
      className={cn(
        'container-custom',
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}