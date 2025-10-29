'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { 
    label: 'Services', 
    href: '/services',
    submenu: [
      { label: 'Computer Repair', href: '/services/computer-repair' },
      { label: 'Networking', href: '/services/networking' },
      { label: 'Security Cameras', href: '/services/security-cameras' },
    ]
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Desktop Navigation component
 * Displays main navigation menu for desktop screens
 */
export function Navigation() {
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navLinks.map((link) => (
        <div
          key={link.href}
          className="relative"
          onMouseEnter={() => link.submenu && setActiveDropdown(link.label)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Link
            href={link.href}
            className={cn(
              'text-base font-medium text-dark hover:text-primary transition-colors duration-default',
              link.submenu && 'flex items-center gap-1'
            )}
          >
            {link.label}
            {link.submenu && (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </Link>

          {/* Dropdown submenu */}
          {link.submenu && activeDropdown === link.label && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-default shadow-elevated py-2 z-50">
              {link.submenu.map((sublink) => (
                <Link
                  key={sublink.href}
                  href={sublink.href}
                  className="block px-4 py-2 text-sm text-dark hover:bg-light hover:text-primary transition-colors duration-default"
                >
                  {sublink.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}