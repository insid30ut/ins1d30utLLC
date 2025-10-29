import React from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { business } from '@/data/business';

/**
 * Footer component with business info, quick links, and social media
 * Appears at the bottom of all pages
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-2xl">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Business Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{business.name}</h3>
            <div className="space-y-2 text-sm">
              <p>
                <a href={`tel:${business.phone}`} className="hover:text-primary">
                  {business.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${business.email}`} className="hover:text-primary">
                  {business.email}
                </a>
              </p>
              <div className="mt-4">
                <p className="font-semibold mb-1">Hours:</p>
                <p className="whitespace-pre-line text-secondary">{business.hours}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">About</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">Services</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary">Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/computer-repair" className="hover:text-primary">
                  Computer Repair
                </Link>
              </li>
              <li>
                <Link href="/services/networking" className="hover:text-primary">
                  Networking
                </Link>
              </li>
              <li>
                <Link href="/services/security-cameras" className="hover:text-primary">
                  Security Cameras
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Area</h4>
            <p className="text-sm text-secondary mb-2">We proudly serve:</p>
            <ul className="space-y-1 text-sm">
              {business.serviceArea.map((area) => (
                <li key={area} className="text-secondary">{area}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/30 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary">
              © {currentYear} {business.name}. All rights reserved.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-4">
              {business.socials.facebook && (
                <a
                  href={business.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              )}
              {business.socials.twitter && (
                <a
                  href={business.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              )}
              {business.socials.linkedin && (
                <a
                  href={business.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}