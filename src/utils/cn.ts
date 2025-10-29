import clsx, { ClassValue } from 'clsx';

/**
 * Utility function to merge class names with clsx
 * Useful for conditional classes and merging Tailwind classes
 * 
 * @param inputs - Class names to merge
 * @returns Merged class string
 * 
 * @example
 * cn('base-class', condition && 'conditional-class', 'another-class')
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}