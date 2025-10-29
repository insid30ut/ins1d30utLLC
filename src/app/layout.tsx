import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '@/styles/globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Insideout Technologies LLC | IT Services & Solutions',
    template: '%s | Insideout Technologies LLC',
  },
  description: 'Professional IT services, computer repair, networking solutions, and security camera installation. Expert, personalized service from a local pro you can trust.',
  keywords: ['IT services', 'computer repair', 'networking', 'security cameras', 'tech support'],
  authors: [{ name: 'Insideout Technologies LLC' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Insideout Technologies LLC',
    title: 'Insideout Technologies LLC | IT Services & Solutions',
    description: 'Professional IT services, computer repair, networking solutions, and security camera installation.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}