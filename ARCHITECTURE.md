# Insideout Technologies LLC - Website Architecture

**Project:** Professional Services Website for One-Person IT Business  
**Framework:** Next.js with TypeScript & Tailwind CSS  
**Status:** Architecture & Planning Phase  
**Brand Colors:** Grey & Blue  

---

## 1. Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary Blue** | #0052CC | CTAs, highlights, links, accent elements |
| **Secondary Grey** | #6B7280 | Body text, secondary elements |
| **Dark Grey** | #1F2937 | Headlines, primary text |
| **Light Grey** | #F3F4F6 | Backgrounds, dividers, card backgrounds |
| **White** | #FFFFFF | Primary background |
| **Success Green** | #10B981 | Trust indicators, check marks |
| **Accent Blue (Light)** | #DBEAFE | Light backgrounds, hover states |

### Typography

```
Headings: Inter or Poppins (sans-serif)
- H1: 48px, weight 700, line-height 1.2
- H2: 36px, weight 700, line-height 1.25
- H3: 28px, weight 600, line-height 1.35
- H4: 24px, weight 600, line-height 1.4

Body: Inter (sans-serif)
- Base: 16px, weight 400, line-height 1.6
- Small: 14px, weight 400, line-height 1.5
- Large: 18px, weight 400, line-height 1.7

Button Text: 16px, weight 600
```

### Spacing System

```
8px base unit scale:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
```

### Component Tokens

- **Border Radius:** 8px (standard), 12px (large cards)
- **Box Shadow:** `0 2px 8px rgba(0,0,0,0.1)` (default), `0 10px 25px rgba(0,0,0,0.15)` (elevated)
- **Transition:** `all 0.3s ease-in-out`

---

## 2. Page Structure & Wireframes

### 2.1 Home Page

**Purpose:** Answer "Who you are," "What you do," and "Why trust you" in 10 seconds.

**Sections:**
1. **Hero Section**
   - Logo (left aligned in nav)
   - Headline: "Reliable IT & Security Solutions for Your Home and Business"
   - Subheadline: "Expert, personalized service from a local pro you can trust"
   - Two CTAs: "Get a Free Quote" (Primary Blue) | "Learn More" (Secondary)
   - Hero background: Clean gradient or subtle pattern using brand colors

2. **Trust Bar**
   - 3-4 trust signals with icons:
     - ✓ Licensed & Insured
     - ✓ 5-Star Reviews
     - ✓ Serving [Local Area]
     - ✓ 20+ Years Experience

3. **Services Overview**
   - 3 service cards in grid layout:
     - **IT & Computer Repair** (icon, description, link)
     - **Network Solutions** (icon, description, link)
     - **Security & Surveillance** (icon, description, link)
   - Each card links to detailed Services page

4. **Testimonials Section**
   - 2-3 customer testimonials with:
     - Quote text
     - Customer name & location
     - Star rating (5 stars)
   - Carousel or static grid

5. **Final CTA Section**
   - Headline: "Ready to solve your tech problem?"
   - Contact form or large button linking to contact page

6. **Footer**
   - Logo, business info, hours
   - Quick links (About, Services, Gallery, Contact)
   - Social media links

---

### 2.2 About Page

**Purpose:** Build personal connection and communicate expertise.

**Sections:**
1. **Hero/Header**
   - Page title: "About Insideout Technologies"
   - Subheading: "Meet the expert behind your tech solutions"

2. **Owner Profile**
   - Professional headshot (left/top)
   - Owner story (right/below):
     - "Hi, I'm [Your Name]..."
     - Why you started the business
     - Your experience (years, specializations)
     - Your core advantage statement
     - Any relevant certifications/credentials

3. **Core Values/Why Choose Us**
   - 3-4 value propositions:
     - "Direct Access to Expert"
     - "Personalized Service"
     - "Local & Reliable"
     - "Transparent Pricing"

4. **Certifications**
   - List of relevant certs (CompTIA A+, Network+, vendor certs, etc.)
   - Display as badges or checklist

5. **CTA Section**
   - "Ready to work with me?" → Contact button

---

### 2.3 Services Page (Main)

**Purpose:** Organize and categorize all services for easy navigation.

**Sections:**
1. **Hero**
   - Title: "What I Can Do For You"
   - Intro text

2. **Service Buckets**
   - 3 main service category cards:
     
     **A. Residential IT Services**
     - Brief description
     - Key offerings:
       - PC/Laptop Repair
       - Data Transfer & Recovery
       - Malware Removal
       - OS Installation & Upgrades
       - Custom PC Builds
     - Link: "Learn More" → `/services/computer-repair`
     
     **B. Business IT Services**
     - Brief description
     - Key offerings:
       - Network Setup & Optimization
       - Business PC Support
       - Backup & Data Security
       - System Migration
     - Link: "Learn More" → `/services/networking`
     
     **C. Security & Surveillance**
     - Brief description
     - Key offerings:
       - Security Camera Installation
       - NVR/DVR System Setup
       - Doorbell Camera Installation
       - System Monitoring & Training
     - Link: "Learn More" → `/services/security-cameras`

3. **Why These Services?**
   - Brief explanation of service scope

4. **CTA**
   - "Discuss your needs" → Contact

---

### 2.4 Services Sub-Pages

**Computer Repair** (`/services/computer-repair`)
- Hero with page title
- What's included:
  - ✓ Laptop Screen & Battery Replacement
  - ✓ Data Recovery & Transfer
  - ✓ Virus & Malware Removal
  - ✓ Custom PC Builds
  - ✓ OS Installation & Upgrades
  - ✓ Performance Optimization
- Process: Consultation → Diagnosis → Repair → Testing
- Before/After gallery images (when available)
- Customer testimonials for this service
- CTA: "Schedule a Repair"

**Networking Solutions** (`/services/networking`)
- Hero with page title
- What's included:
  - ✓ Home Network Setup
  - ✓ Wi-Fi Optimization
  - ✓ Cable Runs & Organization
  - ✓ Business Network Solutions
  - ✓ Security Best Practices
  - ✓ Remote Access Setup
- Process: Assessment → Design → Installation → Testing
- Before/After gallery (cable organization, network setup)
- Case study: "How I fixed [Client]'s Network Performance"
- CTA: "Get Network Assessment"

**Security Cameras** (`/services/security-cameras`)
- Hero with page title
- What's included:
  - ✓ NVR/DVR System Installation
  - ✓ IP Camera Setup
  - Smart Doorbell Integration
  - ✓ Professional Mounting
  - ✓ System Monitoring Setup
  - ✓ Remote Access Training
- Process: Consultation → Site Survey → Design → Installation → Training
- Before/After gallery (camera placements, clean installs)
- System types available (brands, specifications)
- CTA: "Schedule Consultation"

---

### 2.5 Project Gallery Page

**Purpose:** Provide visual proof of work quality.

**Structure:**
1. **Hero**
   - Title: "Recent Projects"
   - Intro: "Before & After galleries of my work"

2. **Gallery Grid**
   - Organize by project type (tabs or sections):
     
     **Network Cabling**
     - Before/After images (organized pairs)
     - Caption: "Before/After: [Project Description]"
     - Example: "Before/After: Organized small office network closet"
     
     **Security Camera Installation**
     - Before/After images
     - Caption: "Before/After: [Location Type] security system install"
     - Example: "Before/After: Residential front entrance surveillance"
     
     **Custom PC Builds**
     - Gallery images showing clean builds
     - Specs listed below images
     - Example: "Custom Gaming PC Build - High Performance"

3. **Lightbox/Modal**
   - Click to enlarge images
   - Navigation between images

4. **CTA**
   - "See what I can do for you" → Contact

---

### 2.6 Contact Page

**Purpose:** Make it easy to get in touch.

**Sections:**
1. **Hero**
   - Title: "Get In Touch"
   - Subheading: "Ready to solve your tech problem?"

2. **Two-Column Layout**
   
   **Left: Contact Form**
   - Name (required)
   - Email (required)
   - Phone (required)
   - Service Type (dropdown): Computer Repair, Networking, Security Cameras, Other
   - Message/Description (textarea)
   - Submit button
   - Success message on submit

   **Right: Direct Contact Info**
   - Business phone number (clickable tel: link)
   - Email address (clickable mailto: link)
   - Business hours
   - Service area: "[List cities/counties you serve]"
   - Social media links

3. **Map Section** (Optional)
   - Embedded Google Map showing service area

4. **Service Area Callout**
   - "We serve [County/Cities]"
   - List of specific towns

---

## 3. Component Architecture

### Core Components

```
/components
├── layout/
│   ├── Header.tsx
│   ├── Navigation.tsx
│   ├── MobileMenu.tsx
│   ├── Footer.tsx
│   └── Container.tsx
├── sections/
│   ├── HeroSection.tsx
│   ├── TrustBar.tsx
│   ├── ServiceCards.tsx
│   ├── TestimonialSection.tsx
│   ├── CTASection.tsx
│   └── GalleryGrid.tsx
├── cards/
│   ├── ServiceCard.tsx
│   ├── TestimonialCard.tsx
│   ├── ProjectCard.tsx
│   └── FeatureCard.tsx
├── forms/
│   ├── ContactForm.tsx
│   └── QuoteForm.tsx
├── ui/
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Textarea.tsx
│   ├── Select.tsx
│   ├── Badge.tsx
│   └── Icon.tsx
└── common/
    ├── SEOMeta.tsx
    ├── BreadCrumb.tsx
    └── BackToTop.tsx
```

### Component Specifications

**Header/Navigation**
- Logo on left
- Navigation menu (Home, About, Services, Gallery, Contact)
- Responsive: Mobile hamburger menu below 768px
- Sticky on scroll

**Footer**
- Business info (name, phone, email)
- Quick links
- Social media
- Copyright

**ServiceCard**
- Icon (top)
- Title (h3)
- Description (body text)
- "Learn More" link

**TestimonialCard**
- Quote in italic
- Customer name & location
- 5-star rating
- Optional avatar

**Button**
- Primary: Blue background, white text
- Secondary: White background, blue border & text
- Sizes: sm (14px), md (16px), lg (18px)
- Hover state: Darker blue

**ContactForm**
- Required fields: Name, Email, Phone, Message
- Optional: Service Type dropdown
- Submit button
- Form validation
- Success/error messages

---

## 4. Next.js Project Structure

```
insideout-tech/
├── public/
│   ├── logo.png
│   ├── logo-dark.png
│   ├── favicon.ico
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── gallery/
│   │   │   ├── before-after/
│   │   │   └── projects/
│   │   ├── testimonials/
│   │   └── team/
│   └── icons/
│       ├── service-*.svg
│       └── social-*.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx (Home)
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx (Main)
│   │   │   ├── computer-repair/
│   │   │   │   └── page.tsx
│   │   │   ├── networking/
│   │   │   │   └── page.tsx
│   │   │   └── security-cameras/
│   │   │       └── page.tsx
│   │   ├── gallery/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts (Contact form API)
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── cards/
│   │   ├── forms/
│   │   ├── ui/
│   │   └── common/
│   ├── data/
│   │   ├── services.ts
│   │   ├── testimonials.ts
│   │   ├── projects.ts
│   │   ├── team.ts
│   │   └── business.ts (Contact info, hours, service area)
│   ├── styles/
│   │   └── globals.css
│   ├── utils/
│   │   ├── cn.ts (Class name utilities)
│   │   ├── validation.ts (Form validation)
│   │   └── api.ts (API helpers)
│   └── types/
│       └── index.ts (TypeScript interfaces)
├── .env.local (Environment variables)
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

### Key Directories

**`/src/data`** - Content & Configuration
```typescript
// services.ts
export const services = [
  {
    id: 'computer-repair',
    title: 'IT & Computer Repair',
    description: '...',
    icon: 'laptop',
    features: [...]
  },
  // ... more services
];

// business.ts
export const business = {
  name: 'Insideout Technologies LLC',
  phone: '(XXX) XXX-XXXX',
  email: 'info@insideouttech.com',
  hours: '...',
  serviceArea: ['City 1', 'City 2', ...],
  socials: { /* links */ }
};
```

**`/src/api`** - Server-Side Logic
- Contact form submission handler
- Email notification service integration
- Form validation

---

## 5. Content Structure

### Data Models

```typescript
// Service
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  slug: string;
}

// Testimonial
interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number; // 1-5
  service?: string;
}

// Project
interface Project {
  id: string;
  title: string;
  category: 'cabling' | 'camera' | 'build';
  beforeImage: string;
  afterImage: string;
  description: string;
}

// Contact Message
interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  submittedAt: Date;
}
```

### Content Placeholders

The site will include placeholder content structures ready for you to fill in:

1. **Testimonials** - Template with 3 example slots
2. **Service Descriptions** - Outline text for each service
3. **Business Info** - Fields for phone, email, hours, service area
4. **Images** - Designated folders for gallery, team, and service images
5. **Certifications** - List structure for credentials

---

## 6. SEO & Metadata Strategy

### Meta Tags Implementation
- Dynamic page titles (each page unique)
- Meta descriptions (160 characters max)
- Open Graph tags for social sharing
- Canonical URLs

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Insideout Technologies LLC",
  "image": "logo.png",
  "description": "...",
  "telephone": "(XXX) XXX-XXXX",
  "email": "info@insideouttech.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[City]",
    "addressRegion": "[State]"
  },
  "areaServed": ["City1", "City2", ...],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "X"
  }
}
```

### Page SEO Checklist
- H1 unique per page
- Alt text on all images
- Internal linking to related content
- Mobile-friendly design
- Fast load times (Next.js optimization)

---

## 7. Performance & Accessibility

### Performance Optimization
- Next.js Image component for image optimization
- CSS-in-JS with Tailwind (zero unused CSS)
- Dynamic imports for code splitting
- Static generation for pages (ISG where appropriate)

### Accessibility (WCAG 2.1 AA)
- Semantic HTML5
- ARIA labels on interactive elements
- Color contrast ratios ≥ 4.5:1
- Keyboard navigation support
- Form labels properly associated

### Mobile Responsiveness
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- All pages fully responsive
- Touch-friendly buttons (min 44x44px)

---

## 8. API & Backend

### Contact Form API
**Endpoint:** `POST /api/contact`

**Request:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "serviceType": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "We'll get back to you soon!",
  "id": "submission_id"
}
```

**Features:**
- Form validation (client + server)
- Email notification to business
- Auto-reply to customer
- Rate limiting (prevent spam)

---

## 9. Deployment & Hosting

### Recommended Platforms
- **Vercel** (optimized for Next.js, free tier available)
- **Netlify** (alternative, also supports Next.js)
- **AWS Amplify** (scalable option)

### Pre-Deployment Checklist
- SSL/HTTPS certificate (automatic with Vercel/Netlify)
- Environment variables configured
- Contact form email service set up
- Analytics tracking enabled
- Performance tested
- Accessibility audit completed
- SEO meta tags finalized

---

## 10. Implementation Phases

### Phase 1: Foundation
- Set up Next.js project structure
- Create design system & Tailwind config
- Build core components (Header, Footer, Buttons, etc.)

### Phase 2: Core Pages
- Implement Home, About, Contact pages
- Set up API for contact form
- Add business data configuration

### Phase 3: Services
- Build Services main page
- Create all sub-page templates
- Add service data & descriptions

### Phase 4: Gallery & Polish
- Implement Project Gallery
- Add testimonials section
- Finalize responsive design
- SEO optimization

### Phase 5: Launch
- Deploy to Vercel/Netlify
- Set up monitoring & analytics
- Test all forms and functionality
- Create deployment documentation

---

## Next Steps

1. **Review this architecture document**
2. **Provide feedback or modifications**
3. **Approve plan and switch to Code mode for implementation**
4. **Begin Phase 1: Foundation Setup**
