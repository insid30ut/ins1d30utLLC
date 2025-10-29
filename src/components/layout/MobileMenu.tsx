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

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Mobile hamburger menu component
 * Displays navigation menu for mobile/tablet screens
 */
export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = React.useState<string | null>(null);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Menu Panel */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-80 bg-white shadow-elevated z-50 transform transition-transform duration-300 ease-in-out md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-light">
            <span className="text-lg font-semibold text-dark">Menu</span>
            <button
              onClick={onClose}
              className="p-2 rounded-default hover:bg-light transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    className="flex-1 px-4 py-3 text-base font-medium text-dark hover:bg-light hover:text-primary transition-colors"
                    onClick={() => !link.submenu && onClose()}
                  >
                    {link.label}
                  </Link>
                  {link.submenu && (
                    <button
                      onClick={() => setExpandedItem(expandedItem === link.label ? null : link.label)}
                      className="px-4 py-3"
                      aria-label={`Toggle ${link.label} submenu`}
                    >
                      <svg 
                        className={cn(
                          'w-5 h-5 transition-transform',
                          expandedItem === link.label && 'rotate-180'
                        )}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Submenu */}
                {link.submenu && expandedItem === link.label && (
                  <div className="bg-light/50">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className="block px-8 py-2 text-sm text-secondary hover:text-primary hover:bg-light transition-colors"
                        onClick={onClose}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}