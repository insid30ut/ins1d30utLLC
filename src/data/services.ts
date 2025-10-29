import { Service } from '@/types';

/**
 * Services data structure for Insideout Technologies
 * These represent the main service categories offered
 */
export const services: Service[] = [
  {
    id: 'computer-repair',
    title: 'IT & Computer Repair',
    description: 'Expert computer repair and technical support for all your hardware and software needs.',
    icon: 'laptop',
    slug: 'computer-repair',
    features: [
      'Laptop Screen & Battery Replacement',
      'Data Recovery & Transfer',
      'Virus & Malware Removal',
      'Custom PC Builds',
      'OS Installation & Upgrades',
      'Performance Optimization',
    ],
  },
  {
    id: 'networking',
    title: 'Network Solutions',
    description: 'Professional network setup, optimization, and troubleshooting for homes and businesses.',
    icon: 'network',
    slug: 'networking',
    features: [
      'Home Network Setup',
      'Wi-Fi Optimization',
      'Cable Runs & Organization',
      'Business Network Solutions',
      'Security Best Practices',
      'Remote Access Setup',
    ],
  },
  {
    id: 'security-cameras',
    title: 'Security & Surveillance',
    description: 'Complete security camera installation and surveillance system setup.',
    icon: 'camera',
    slug: 'security-cameras',
    features: [
      'NVR/DVR System Installation',
      'IP Camera Setup',
      'Smart Doorbell Integration',
      'Professional Mounting',
      'System Monitoring Setup',
      'Remote Access Training',
    ],
  },
];

/**
 * Get service by slug
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

/**
 * Get all service slugs for static generation
 */
export function getServiceSlugs(): string[] {
  return services.map(service => service.slug);
}