# TrailBlaize IT Services - Design Guidelines

## Design Approach
**Reference-Based Premium Security Aesthetic** - Drawing inspiration from Apple's minimalism, Stripe's sophisticated data visualization, and enterprise security platforms like CrowdStrike/Palo Alto Networks. This creates a premium, trust-building experience that appeals to ultra-high-net-worth individuals while maintaining technical credibility.

---

## Core Design Elements

### A. Color Palette

**Dark Mode Primary (Default)**
- Background: 220 25% 8% (deep charcoal with blue undertone)
- Surface: 220 20% 12% (elevated surfaces)
- Surface Elevated: 220 18% 16% (cards, modals)

**Brand Colors**
- Electric Blue Primary: 210 100% 55% (vibrant, trustworthy)
- Electric Blue Muted: 210 80% 45% (secondary actions)
- Gold/Copper Accent: 35 90% 55% (premium highlights, sparingly used)
- Copper Dark: 35 70% 45% (accent borders, icons)

**Functional Colors**
- Success: 142 76% 45% (security confirmations)
- Warning: 35 100% 55% (alerts, important notices)
- Error: 0 84% 60% (critical issues)
- Text Primary: 0 0% 95%
- Text Secondary: 0 0% 65%
- Text Muted: 0 0% 45%

### B. Typography

**Font Stack**
- Headlines: 'Inter', system-ui, sans-serif (weights: 600, 700, 800)
- Body: 'Inter', system-ui, sans-serif (weights: 400, 500)
- Monospace/Technical: 'JetBrains Mono', monospace (for code, metrics)

**Type Scale**
- Hero: text-6xl md:text-7xl lg:text-8xl font-bold (tracking-tight)
- H1: text-4xl md:text-5xl font-bold
- H2: text-3xl md:text-4xl font-semibold
- H3: text-2xl md:text-3xl font-semibold
- Body Large: text-lg md:text-xl (hero subheads)
- Body: text-base
- Small: text-sm

### C. Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, gap-8, mb-16, py-20)

**Container Strategy**
- Max-width: max-w-7xl for content sections
- Full-width: w-full with inner containers for hero, pricing tables
- Grid System: 12-column base, 2-3 columns for solutions, 2-column for pricing tiers

**Vertical Rhythm**
- Section Padding: py-20 md:py-28 lg:py-32 (generous breathing room)
- Component Spacing: gap-8 to gap-16 between major elements
- Card Padding: p-8 md:p-10 lg:p-12

### D. Component Library

**Navigation**
- Fixed header with backdrop blur (backdrop-blur-xl bg-surface/80)
- Logo left, navigation center, CTA right
- Micro-interactions on hover (subtle electric-blue underline)

**Hero Section**
- Full-viewport height (min-h-screen) with animated dashboard mockup
- Large hero image/video background with dark overlay (50-60% opacity)
- Centered content with stacked headline, subheadline, dual CTAs
- Security badges below CTAs (AES-256, uptime stats in grid)
- Subtle gradient overlay from bottom (from-background/90 to transparent)

**Solution Cards**
- Glass-morphism effect: backdrop-blur-md with border (border-electric-blue/20)
- Hover state: lift effect (hover:-translate-y-2) with increased border opacity
- Icon top-left (electric-blue), title, problem, solution, benefits list, CTA button
- Background: subtle gradient (from-surface to-surface-elevated)

**Pricing Cards**
- Two-tier layout (Standard and Premium) side-by-side on desktop
- Premium card elevated with gold/copper border-t-4
- Feature comparison with checkmarks (electric-blue for Premium, muted for Standard)
- Prominent pricing with annual savings badge

**Data Visualization**
- Animated metrics counters for "The Result" section
- Circular progress indicators for uptime stats
- Network topology diagram with glowing connection lines (electric-blue)
- Dashboard mockups with real-time data visualizations

**Buttons & CTAs**
- Primary: Electric-blue with white text, hover glow effect
- Secondary: Outline with electric-blue border, hover fill
- Ghost: Text only with hover background
- On images: Frosted glass with backdrop-blur-md

**Trust Signals**
- Security badge grid (4 columns on desktop, 2 on mobile)
- Certification logos with subtle hover scale
- Live uptime counter with pulsing indicator
- Client testimonial cards with avatar, quote, company logo

### E. Animations & Interactions

**Use Sparingly - Quality Over Quantity**
- Hero: Subtle parallax on scroll (dashboard mockup depth)
- Cards: Smooth hover lift (transition-all duration-300)
- Metrics: Count-up animation on viewport entry
- Navigation: Smooth scroll to anchors
- CTAs: Subtle scale on hover (hover:scale-105)
- Page transitions: Fade in content blocks sequentially

**Avoid**: Excessive motion, distracting particles, auto-playing carousels

---

## Images

**Hero Section**
Large hero image/video: Sophisticated abstract network visualization or blurred data center with security dashboard overlay. Dark, moody aesthetic with electric-blue accents and particles. Dimensions: 1920x1080, optimized for web.

**Solution Cards**
Five custom icons representing each solution (firewall shield, VPN lock, motion sensor, cloud backup, network segmentation). Style: Line icons with electric-blue stroke, 64x64px.

**Dashboard Mockups**
Two high-fidelity mockups: 1) Home security dashboard with camera feeds, alerts, 2) Enterprise IT dashboard with performance metrics. Dark UI with electric-blue data visualizations.

**About/Team Section**
Professional team photo or office environment, color-graded to match dark theme with blue tinting.

**Case Study**
Before/after comparison images showing network topology or security improvements.

---

## Page-Specific Layouts

**Homepage**: Hero → Trust signals → 5 Solution cards (masonry grid) → "The Result" metrics → Case study teaser → Tiered pricing preview → Final CTA

**Solutions Page**: Hero with breadcrumb → Detailed solution breakdown (2-column: description left, visual right) → Technical specs table → Related case studies

**Pricing Page**: Hero → Interactive tier comparison table → FAQ accordion (dark cards) → Contact CTA

**About**: Hero → Mission/values grid (3 columns) → Team section → Global presence map → Trust certifications

**Contact**: Split layout (60/40) - Form left with security assurance, contact info/office hours right

---

## Technical Specifications

- Glass-morphism: backdrop-blur-xl with border opacity 10-20%
- Shadows: Subtle, elevated (shadow-2xl for cards, shadow-lg for buttons)
- Border Radius: rounded-2xl for cards, rounded-lg for buttons, rounded-full for badges
- Transitions: transition-all duration-300 ease-in-out
- Responsive breakpoints: Mobile-first, breakpoints at md (768px), lg (1024px), xl (1280px)