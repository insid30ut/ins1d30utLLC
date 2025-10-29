/**
 * Core TypeScript interfaces for Insideout Technologies website
 */

/**
 * Service interface representing IT services offered
 */
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  slug: string;
}

/**
 * Testimonial interface for customer reviews
 */
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number; // 1-5
  service?: string;
  avatar?: string;
}

/**
 * Project interface for gallery items
 */
export interface Project {
  id: string;
  title: string;
  category: 'cabling' | 'camera' | 'build';
  beforeImage: string;
  afterImage: string;
  description: string;
  specs?: string[];
}

/**
 * Contact message interface for form submissions
 */
export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  submittedAt: Date;
}

/**
 * Business information interface
 */
export interface BusinessInfo {
  name: string;
  phone: string;
  email: string;
  hours: string;
  serviceArea: string[];
  socials: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

/**
 * Navigation link interface
 */
export interface NavLink {
  label: string;
  href: string;
  submenu?: NavLink[];
}