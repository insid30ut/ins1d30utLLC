'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import { Container } from './Container';
import { Button } from '@/components/ui/Button';

/**
 * Header component with logo, navigation, and mobile menu
 * Sticky header that appears on all pages
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-default' : 'bg-white'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Insideout Technologies LLC"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="hidden sm:block text-lg font-bold text-dark">
              Insideout Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <Navigation />

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button variant="primary" size="md">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-default hover:bg-light transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}