import React from 'react';
import { cn } from '@/utils/cn';

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Icon wrapper component
 * For Phase 1, this provides a placeholder structure for SVG icons
 * In future phases, integrate with an icon library or custom SVG icons
 */
export function Icon({
  name,
  size = 'md',
  className,
  ...props
}: IconProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  // Placeholder - In future phases, implement actual icon rendering
  // This could be replaced with react-icons, heroicons, or custom SVGs
  return (
    <svg
      className={cn(sizes[size], className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      {/* Placeholder icon paths will be added based on icon library choice */}
      <title>{name}</title>
    </svg>
  );
}