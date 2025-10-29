# Insideout Technologies LLC - Website

Professional services website for a one-person IT business built with Next.js, TypeScript, and Tailwind CSS.

## Project Status

**Phase 1: Foundation Setup - ✅ COMPLETE**

The foundation for the website has been successfully established with:
- ✅ Next.js 15 with TypeScript and App Router
- ✅ Tailwind CSS configured with brand design system
- ✅ Complete component architecture
- ✅ Type definitions and utilities
- ✅ Layout components (Header, Footer, Navigation, Mobile Menu)
- ✅ UI components (Button, Input, Textarea, Select, Badge, Icon)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
insideout-tech/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with Header/Footer
│   │   └── page.tsx            # Home page
│   ├── components/
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Container.tsx
│   │   ├── ui/                 # UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Textarea.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Icon.tsx
│   │   ├── sections/           # Page sections (Phase 2+)
│   │   ├── cards/              # Card components (Phase 2+)
│   │   ├── forms/              # Form components (Phase 2+)
│   │   └── common/             # Common components (Phase 2+)
│   ├── data/
│   │   ├── business.ts         # Business information
│   │   └── services.ts         # Services data
│   ├── styles/
│   │   └── globals.css         # Global styles & Tailwind
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   └── utils/
│       ├── cn.ts               # Class name utility
│       └── validation.ts       # Form validation
├── public/
│   ├── logo.png                # Business logo
│   ├── images/                 # Image assets
│   └── icons/                  # Icon assets
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.js              # Next.js configuration
```

## Design System

### Brand Colors

- **Primary Blue**: `#0052CC` - CTAs, highlights, links
- **Secondary Grey**: `#6B7280` - Body text, secondary elements
- **Dark Grey**: `#1F2937` - Headlines, primary text
- **Light Grey**: `#F3F4F6` - Backgrounds, dividers
- **White**: `#FFFFFF` - Primary background
- **Success Green**: `#10B981` - Trust indicators
- **Accent Blue (Light)**: `#DBEAFE` - Light backgrounds, hover states

### Typography

- **Headings**: Inter/Poppins (sans-serif)
  - H1: 48px, weight 700
  - H2: 36px, weight 700
  - H3: 28px, weight 600
  - H4: 24px, weight 600
- **Body**: Inter (sans-serif)
  - Base: 16px, weight 400
  - Small: 14px, weight 400
  - Large: 18px, weight 400

### Spacing System

8px base unit scale:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

## Next Steps

### Phase 2: Core Pages
- [ ] Implement Home page with Hero, Services, Testimonials
- [ ] Build About page with owner profile
- [ ] Create Contact page with form and business info
- [ ] Set up contact form API route

### Phase 3: Services
- [ ] Build main Services page
- [ ] Create Computer Repair sub-page
- [ ] Create Networking sub-page
- [ ] Create Security Cameras sub-page

### Phase 4: Gallery & Polish
- [ ] Implement Project Gallery
- [ ] Add testimonials functionality
- [ ] Finalize responsive design
- [ ] SEO optimization

### Phase 5: Launch
- [ ] Deploy to Vercel/Netlify
- [ ] Set up analytics
- [ ] Test all functionality
- [ ] Go live!

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Configuration

### Business Information

Update business details in `src/data/business.ts`:
- Company name, phone, email
- Business hours
- Service area
- Social media links

### Services

Update services in `src/data/services.ts`:
- Service titles and descriptions
- Service features
- Service slugs for URLs

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## License

Private - All rights reserved by Insideout Technologies LLC

## Support

For questions or issues, contact the development team.