# 🏗️ Urban Vibes Daily - Technical Architecture

## System Architecture Overview

### High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                  CLIENT BROWSER                          │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────────┐  ┌─────────────┐  ┌──────────────┐ │
│  │   HTML5        │  │   CSS3      │  │  JavaScript  │ │
│  │  Structure     │  │  Styling &  │  │  (Vanilla)   │ │
│  │  - Semantic    │  │  Animations │  │  - DOM API   │ │
│  │  - Pages (8x)  │  │  - Grid     │  │  - Events    │ │
│  │  - Forms       │  │  - Flexbox  │  │  - Storage   │ │
│  │  - Content     │  │  - Gradients│  │  - Timers    │ │
│  └────────────────┘  └─────────────┘  └──────────────┘ │
│                            ↓                              │
│           ┌────────────────────────────────┐             │
│           │  Local Storage (Theme Persist) │             │
│           └────────────────────────────────┘             │
│                            ↓                              │
│         ┌──────────────────────────────────┐             │
│         │  External Resources              │             │
│         ├──────────────────────────────────┤             │
│         │ • Google Fonts (Mukta)           │             │
│         │ • Font Awesome (v6.4.0)          │             │
│         │ • Image Assets (15+)             │             │
│         └──────────────────────────────────┘             │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## Component Architecture

### 1. **HTML Structure Hierarchy**

```
index.html (Root Document)
├── DOCTYPE & Meta Tags
├── <head>
│   ├── Title & Meta
│   ├── CSS Links
│   │   ├── global-styles.css
│   │   └── home.css
│   ├── External Resources
│   │   ├── Google Fonts
│   │   └── Font Awesome
│   └── Preload Images
├── <body>
│   ├── Theme Toggle Button
│   ├── Loading Overlay
│   ├── Header
│   │   ├── Logo
│   │   ├── Nav Toggle (Mobile)
│   │   └── Navigation Menu
│   ├── Main Content
│   │   ├── Hero Section
│   │   │   ├── Hero Content (Text & CTA)
│   │   │   └── Hero Image (Slideshow)
│   │   ├── Search Section
│   │   ├── Topics Section
│   │   │   └── 6x Topic Cards (Grid)
│   │   ├── Newsletter Section
│   │   └── Footer
│   └── Scripts
│       └── global-scripts.js
```

### 2. **CSS Architecture**

#### Global Styles (`global-styles.css`)
```
File Structure (520 lines):

1. CSS Variables (Theme System)
   ├── Light Theme Variables
   ├── Dark Theme Variables
   └── Color Constants

2. Reset & Base Styles
   ├── Universal Reset
   ├── Body Defaults
   ├── Typography Base

3. Header & Navigation
   ├── Header Styling
   ├── Nav Bar Styles
   ├── Mobile Menu Toggle
   ├── Dropdown Menus
   └── Active States

4. Utility Classes
   ├── Text Alignment
   ├── Margins & Padding
   └── Scroll Reveal Animation

5. Footer Styles
   ├── Footer Container
   ├── Footer Sections
   ├── Social Icons
   └── Responsive Footer

6. Responsive Media Queries
   ├── Tablet (768px)
   └── Mobile (480px)
```

#### Homepage Styles (`home.css`)
```
File Structure (800+ lines):

1. Hero Section Styling
   ├── Hero Container
   ├── Hero Content
   ├── Hero Image Wrapper
   └── Slideshow Container

2. Slideshow Components
   ├── Slide Styling
   ├── Slide Overlay
   ├── Navigation Controls
   └── Dot Navigation

3. Search Section
   ├── Search Container
   ├── Search Bar
   └── Search Button

4. Topics Grid Section
   ├── Grid Layout
   ├── Topic Cards
   ├── Topic Image Wrapper
   ├── Topic Badge
   ├── Topic Content
   └── Staggered Animation

5. Newsletter Section
   ├── Form Container
   ├── Form Inputs
   ├── Submit Button
   └── Success Message

6. Animations
   ├── Slide In
   ├── Fade In
   ├── Scale Up
   ├── Stagger Effects
   └── Hover Transitions

7. Responsive Design
   ├── Tablet Breakpoint
   ├── Mobile Breakpoint
   └── Touch Optimized
```

#### Topic-Specific Styles
- `budaya.css` - Culture page with regional maps
- `topic.css` - Base styles for topic pages
- Individual inline styles in HTML files

### 3. **JavaScript Module Structure**

#### Global Scripts (`global-scripts.js`)
```javascript
File Structure (300+ lines):

1. DOM Initialization
   └── DOMContentLoaded Event Handler

2. Theme Management Module
   ├── initializeTheme()
   ├── localStorage persistence
   ├── System preference detection
   └── Dynamic theme switching

3. Mobile Navigation Module
   ├── initializeMobileNavigation()
   ├── Hamburger menu toggle
   ├── Link click handlers
   └── Outside click detection

4. Animation Module
   ├── initializeScrollReveal()
   ├── Scroll event listener
   └── Reveal on scroll animation

5. Navigation Module
   ├── initializeSmoothScrolling()
   ├── Anchor link handling
   └── Smooth scroll behavior

6. Form Handler Module
   ├── initializeFormHandlers()
   ├── Newsletter form submission
   ├── Search functionality
   └── Keyboard shortcuts

7. Loading Animation Module
   ├── initializeLoadingAnimation()
   ├── Loading screen fade out
   └── Timing control

8. Notification System
   ├── showNotification(message, type)
   ├── Toast styling
   ├── Auto-dismiss
   └── Type variants (success, error, info, warning)

9. Utility Functions
   ├── debounce(func, wait)
   └── Helper functions

10. Console Messages
    └── Welcome & feature list logging
```

---

## State Management

### Local Storage Schema

```javascript
// Theme Preference
localStorage.setItem('theme', 'dark' | 'light');
// Persists user's theme choice across sessions
```

### DOM State

```javascript
// Element States
document.body.dataset.theme = 'dark' | '';

// Menu States
navMenu.classList.toggle('active');
navToggle.classList.toggle('active');

// Animation States
element.classList.add('revealed', 'scroll-reveal', 'fade-in-up');
```

---

## Data Flow Diagram

### Theme Toggle Flow
```
User Clicks Theme Button
        ↓
Event Listener Triggered
        ↓
Animate Button (spin 0.5s)
        ↓
Get Current Theme
        ↓
Check Dark/Light
        ├─ If Dark → Switch to Light
        └─ If Light → Switch to Dark
        ↓
Update DOM (data-theme attribute)
        ↓
Update localStorage
        ↓
Update Button Icon & Tooltip
        ↓
CSS Variables Cascade to all elements
```

### Form Submission Flow
```
User Fills Email & Clicks Subscribe
        ↓
preventDefault() stops page reload
        ↓
Get Email Input Value
        ↓
Validate (trim & check value)
        ↓
Show Success Notification
        ↓
Clear Input Field
        ↓
Auto-dismiss Notification after 5s
```

### Scroll Reveal Flow
```
Page Loads / User Scrolls
        ↓
Scroll Event Fires
        ↓
Query all .scroll-reveal elements
        ↓
For each element:
  ├─ Get window height
  ├─ Get element position
  ├─ Check if in viewport
  └─ Add 'revealed' class if visible
        ↓
CSS transitions element to visible
```

---

## Performance Optimization

### Code Splitting Strategy
```
Global Scripts (All Pages)
├── global-styles.css     (520 lines)
└── global-scripts.js     (300 lines)

Page-Specific Assets
├── home.css              (800+ lines) - Only on index.html
├── budaya.css            (200+ lines) - Only on budaya.html
└── Individual styles     (inline in HTML)
```

### Image Optimization
```
Image Sizes:
- Hero Slideshow: 1200x800px (optimized)
- Topic Cards: 400x300px (responsive)
- Category Images: 800x600px
- Logo: 170x50px

Format: JPEG (compressed)
Fallback: PNG for logo
```

### CSS Variables for DRY Code
```css
/* Instead of repeating colors throughout CSS: */
:root {
  --gradient-start: #ff6b6b;
  --gradient-end: #ff8787;
  --bg-color: #ffffff;
  --text-color: #333333;
  --shadow: rgba(0, 0, 0, 0.1);
}

/* Use everywhere: */
background: var(--gradient-start);
color: var(--text-color);
box-shadow: 0 4px 10px var(--shadow);
```

---

## Browser Rendering Process

### Critical Rendering Path
```
1. Parse HTML
   ├─ Build DOM Tree
   └─ Find external resources

2. Load CSS
   ├─ CSSOM Construction
   ├─ CSS Variables Resolution
   └─ Media Query Evaluation

3. Load JavaScript
   ├─ Parse & Compile
   ├─ Execute global scope
   └─ Register event listeners

4. Combine DOM + CSSOM
   └─ Render Tree Creation

5. Layout
   ├─ Calculate positions & sizes
   └─ Viewport calculations

6. Paint
   ├─ Rasterize pixels
   └─ Composite layers

7. Composite
   └─ Final image to screen
```

### Event Handling Timeline
```
DOMContentLoaded Event (500ms)
├─ Initialize Theme
├─ Initialize Mobile Nav
├─ Initialize Scroll Reveal
├─ Initialize Smooth Scroll
├─ Initialize Form Handlers
└─ Initialize Loading Animation

window.onload Event (1000ms)
└─ Fade out loading overlay

User Interactions (ongoing)
├─ Click → Event Listener → DOM Update → Repaint
├─ Scroll → Scroll Event → Element Check → Reflow
└─ Resize → Media Query Re-evaluation
```

---

## Accessibility Architecture

### Semantic HTML Structure
```html
<header>              <!-- Main header -->
  <nav>               <!-- Navigation landmark -->
    <!-- Links -->
  </nav>
</header>

<main>                <!-- Main content area -->
  <section>           <!-- Content sections -->
    <article>         <!-- Individual articles -->
      <h1>, <p>       <!-- Content hierarchy -->
    </article>
  </section>
</main>

<footer>               <!-- Footer landmark -->
  <!-- Links & info -->
</footer>
```

### ARIA Attributes
```html
<button aria-label="Beralih ke mode gelap">🌙</button>
<input aria-label="Search articles" type="text">
<div role="alert" class="notification">Success!</div>
```

### Keyboard Navigation
```
Tab        → Cycle through focusable elements
Enter      → Activate buttons/submit forms
Escape     → Close mobile menu (optional)
Home/End   → Jump to page start/end
```

---

## Security Considerations

### Current Security Measures
- ✅ **No Direct File Uploads** - Static content only
- ✅ **localStorage Only** - No sensitive data storage
- ✅ **Content Security Policy Ready** - Can be implemented
- ✅ **No External API Calls** - Reduced attack surface
- ✅ **Semantic HTML** - XSS resistant markup

### FUTURE: Backend Security Checklist
```
For backend implementation:
- [ ] Input validation & sanitization
- [ ] CSRF protection
- [ ] Rate limiting
- [ ] SQL injection prevention
- [ ] Authentication & Authorization
- [ ] HTTPS enforcement
- [ ] CORS configuration
- [ ] Request logging & monitoring
```

---

## Responsive Design Architecture

### Breakpoint Strategy
```css
/* Mobile-First Approach */

/* Base (320px - 480px) */
html {
  font-size: 16px;
  grid-template-columns: 1fr;
}

/* Tablet (481px - 768px) */
@media (min-width: 481px) {
  grid-template-columns: 1fr 1fr;
}

/* Desktop (769px - 1024px) */
@media (min-width: 769px) {
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 18px;
}

/* Large (1025px+) */
@media (min-width: 1025px) {
  grid-template-columns: repeat(4, 1fr);
}
```

### Flexible Components
```
Topics Grid
├─ 1 column (mobile)
├─ 2 columns (tablet)
└─ 3 columns (desktop)

Navigation
├─ Hamburger Menu (mobile)
└─ Horizontal Menu (desktop)

Typography
├─ 14px body (mobile)
└─ 16px body (desktop)

Spacing
├─ 1rem (mobile)
└─ 2rem (desktop)
```

---

## Animation Architecture

### CSS Animations
```css
@keyframes slideInLeft {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleUp {
  from { transform: scale(0.95); }
  to { transform: scale(1); }
}
```

### Transition Effects
```css
/* Smooth transitions */
transition: all 0.3s ease;
transition-property: transform, box-shadow, background;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
```

### JavaScript Animations
```javascript
// Scroll Reveal
element.style.animation = 'slideInUp 0.8s ease forwards';

// Theme Toggle
themeToggle.style.animation = 'spin 0.5s ease';

// Notification
notification.style.animation = 'slideInRight 0.3s ease';
```

---

## Testing Strategy

### Manual Testing Checklist
```
[ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
[ ] Mobile responsiveness (320px, 480px, 768px, 1024px)
[ ] Theme toggle functionality (light/dark persist)
[ ] Form submissions (newsletter, search)
[ ] Navigation (desktop & mobile)
[ ] Scroll animations (reveal effects)
[ ] Loading screen animation
[ ] Smooth scrolling
[ ] Keyboard navigation
[ ] Screen reader testing
[ ] Image lazy loading
[ ] Performance metrics
```

### Browser DevTools Checks
```
Console:
  - No JavaScript errors
  - Custom console welcome message

Network:
  - All resources loading
  - No 404 errors
  - Asset sizes optimized

Lighthouse:
  - Performance > 80
  - Accessibility > 85
  - Best Practices > 90
  - SEO > 90

Coverage:
  - Unused CSS < 10%
  - Unused JavaScript < 15%
```

---

## Deployment Architecture

### Local Development
```
http://localhost:8000
├─ index.html
├─ css/ (all CSS files)
├─ js/ (all JavaScript)
└─ asset/ (images & resources)
```

### Static Site Hosting (Recommended)
```
Platforms:
├─ GitHub Pages (Free, with domain)
├─ Netlify (Free tier available)
├─ Vercel (Optimized for static sites)
├─ Firebase Hosting (Google backed)
└─ AWS S3 + CloudFront (Scalable)

Build Process:
1. Git push → Trigger deployment
2. Build optimization (minify CSS/JS)
3. Asset optimization (image compression)
4. Deploy to CDN
5. SSL/HTTPS automatic
```

---

## Future Architecture Considerations

### Phase 2: Backend Integration
```
Frontend (Vue/React)
        ↓
        API Gateway (REST/GraphQL)
        ↓
Backend Services
├─ User Service
├─ Article Service
├─ Comment Service
├─ Search Service
└─ Email Service
        ↓
Database (PostgreSQL/MongoDB)
        ↓
Cache Layer (Redis)
```

### Phase 3: Infrastructure
```
Load Balancer
        ↓
├─ Web Server 1
├─ Web Server 2
└─ Web Server 3
        ↓
Database Cluster
├─ Primary DB
├─ Replica 1
└─ Replica 2
        ↓
CDN (CloudFlare/AWS)
        ↓
Static Assets Distribution
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Oct 2024 | Initial release with 8 pages, dark mode, responsive design |
| 0.9.0 | Sep 2024 | Beta version with core features |
| 0.5.0 | Aug 2024 | MVP with basic structure |

---

## References & Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [Web.dev](https://web.dev/)
- [Can I Use](https://caniuse.com/)

---

**Document Version**: 1.0  
**Last Updated**: October 25, 2024  
**Author**: Urban Vibes Daily Development Team
