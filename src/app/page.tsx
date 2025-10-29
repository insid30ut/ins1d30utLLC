import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

/**
 * Home page - Placeholder for Phase 1
 * Full implementation will be done in Phase 2
 */
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Placeholder */}
      <section className="bg-gradient-to-br from-primary/10 to-accent py-3xl">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-6">
              Reliable IT & Security Solutions for Your Home and Business
            </h1>
            <p className="text-large text-secondary mb-8">
              Expert, personalized service from a local pro you can trust
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Get a Free Quote
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Placeholder Content */}
      <section className="section-padding">
        <Container>
          <div className="text-center">
            <h2 className="mb-4">Phase 1: Foundation Complete</h2>
            <p className="text-large text-secondary max-w-2xl mx-auto">
              The foundation for Insideout Technologies website has been set up successfully. 
              Page implementations will be added in subsequent phases.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}