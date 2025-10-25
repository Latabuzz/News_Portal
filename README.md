# 🌟 Urban Vibes Daily - News Portal Website

> A modern, responsive, and feature-rich lifestyle news portal built with HTML5, CSS3, and Vanilla JavaScript

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-Active-success.svg)

---

## 📋 Table of Contents

- [🎯 Project Overview](#-project-overview)
- [✨ Key Features](#-key-features)
- [🏗️ Architecture & Tech Stack](#-architecture--tech-stack)
- [📂 Project Structure](#-project-structure)
- [🛠️ Technologies Used](#-technologies-used)
- [⚙️ Installation & Setup](#-installation--setup)
- [🚀 Usage](#-usage)
- [📱 Pages & Features](#-pages--features)
- [🎨 Design System](#-design-system)
- [📊 Browser Support](#-browser-support)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🎯 Project Overview

**Urban Vibes Daily** adalah platform berita gaya hidup modern yang menyediakan konten berkualitas tentang:

- 💪 **Gaya Hidup Sehat** - Tips kesehatan, fitness, dan wellness
- 💄 **Kecantikan** - Tutorial makeup, skincare, dan beauty tips
- 👗 **Fashion** - Trend terbaru dan style inspiration
- ✈️ **Travel** - Destinasi wisata dan tips perjalanan
- 🍴 **Kuliner** - Resep, review restoran, dan food trends
- 🎭 **Budaya** - Seni tradisional dan budaya kontemporer

Platform ini dirancang dengan fokus pada **User Experience (UX)**, **Responsiveness**, dan **Modern Web Standards**.

---

## ✨ Key Features

### 🎭 User Interface & Experience
- ✅ **Dark Mode / Light Mode** - Toggle tema dengan preference saving di localStorage
- ✅ **Responsive Design** - Mobile-first approach, support untuk semua ukuran layar
- ✅ **Smooth Animations** - Scroll reveal effects dan page transitions
- ✅ **Modern Navigation** - Hamburger menu untuk mobile, dropdown menus
- ✅ **Loading Animation** - Smooth loading screen saat halaman dimuat

### 🔧 Functionality
- ✅ **Hero Slideshow** - Auto-rotating carousel dengan navigation dots
- ✅ **Search Bar** - Pencarian artikel dengan notification system
- ✅ **Newsletter Subscription** - Form subscription dengan email validation
- ✅ **Interactive Topic Cards** - 6 kategori dengan hover effects
- ✅ **Notification System** - Toast notifications untuk user feedback

### 📱 Responsive Features
- ✅ **Mobile Navigation** - Hamburger menu dengan smooth transitions
- ✅ **Adaptive Images** - Gambar yang optimize untuk berbagai ukuran layar
- ✅ **Fluid Typography** - Font sizes yang scalable
- ✅ **Touch-friendly UI** - Button sizes yang sesuai untuk mobile

### ♿ Accessibility
- ✅ **Semantic HTML** - Proper HTML5 semantic elements
- ✅ **ARIA Labels** - Screen reader support
- ✅ **Keyboard Navigation** - Full keyboard support
- ✅ **Color Contrast** - WCAG compliant color ratios

---

## 🏗️ Architecture & Tech Stack

### Technology Stack Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    Urban Vibes Daily                          │
├─────────────────────────────────────────────────────────────┤
│                        Frontend                               │
├──────────────────┬─────────────────┬────────────────────────┤
│   HTML5          │   CSS3           │   JavaScript (Vanilla) │
│  (Semantic)      │  (Variables)     │  (No Framework)        │
│  - Pages         │  - Grid/Flexbox  │  - DOM Manipulation    │
│  - Structure     │  - Gradients     │  - Event Handlers      │
│  - Forms         │  - Animations    │  - Local Storage       │
└──────────────────┴─────────────────┴────────────────────────┘
         ↓                  ↓                      ↓
┌──────────────────┬─────────────────┬────────────────────────┐
│  External APIs   │  Google Fonts    │   Font Awesome Icons   │
│  - None (yet)    │  (Mukta Font)    │   (v6.4.0)             │
└──────────────────┴─────────────────┴────────────────────────┘
```

### Component Architecture

```
index.html (Main)
├── header (navigation)
│   ├── logo
│   ├── nav-toggle (mobile)
│   └── nav-links (with dropdowns)
├── main
│   ├── hero-section (slideshow + CTA)
│   ├── search-section (search bar)
│   ├── topics-section (6 category cards)
│   ├── newsletter-section (subscription form)
│   └── footer (links + social)
└── Scripts & Styles
    ├── global-styles.css (theme + base)
    ├── home.css (homepage specific)
    └── global-scripts.js (functionality)

Topik Pages (6x)
├── gayahidupsehat.html
├── kecantikan.html
├── fashion.html
├── travel.html
├── kuliner.html
└── budaya.html
    ├── page-header
    ├── featured-section
    ├── article-grid (9-12 cards)
    └── footer
```

---

## 📂 Project Structure

```
News_Portal/
├── 📄 index.html                    # Homepage (main entry point)
├── 📄 about_us.html                 # About page
├── 📄 home.html                     # Alternative home version
├── 📄 halaman-berita.html           # News page template
│
├── 📂 asset/
│   ├── logo1.png                    # Logo
│   ├── image/                       # Images folder
│   │   ├── people.jpeg              # Hero images
│   │   ├── healthylifestyle.jpeg    # Category images
│   │   ├── fashion.jpeg
│   │   ├── makeup.jpeg
│   │   ├── food.jpeg
│   │   ├── culture.jpeg
│   │   ├── healthylifestyle2.jpeg   # Card images
│   │   ├── beauty2.jpeg
│   │   ├── fashion2.jpeg
│   │   ├── travel.jpeg
│   │   ├── travel2.jpeg
│   │   ├── food2.jpeg
│   │   ├── culture2.jpeg
│   │   └── in.png
│   └── topic/                       # Topic resources
│
├── 📂 css/
│   ├── global-styles.css            # Main stylesheet (520 lines)
│   │   ├── CSS Variables (theme colors)
│   │   ├── Light/Dark theme
│   │   ├── Navigation styles
│   │   └── Footer styles
│   ├── home.css                     # Homepage styles (800+ lines)
│   │   ├── Hero section
│   │   ├── Topics grid
│   │   ├── Animations
│   │   └── Responsive design
│   ├── style.css                    # Legacy styles
│   ├── halaman-style.css            # News page styles
│   ├── topic.css                    # Topic pages base
│   ├── budaya.css                   # Culture page specific
│   └── about_us.css                 # About page styles
│
├── 📂 js/
│   ├── global-scripts.js            # Main JavaScript (300+ lines)
│   │   ├── Theme toggle (dark mode)
│   │   ├── Mobile navigation
│   │   ├── Scroll reveal animations
│   │   ├── Form handlers
│   │   ├── Notification system
│   │   └── Smooth scrolling
│   ├── script.js                    # Legacy scripts
│   └── slideshow.js                 # Slideshow functionality
│
├── 📂 script/
│   └── script.js                    # Additional scripts
│
├── 📄 generate_images.py            # Python script for image generation
├── 📄 README.md                     # This file
└── 📄 .gitignore                    # Git ignore file

```

---

## 🛠️ Technologies Used

### Frontend Technologies

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **HTML** | HTML5 | Living Standard | Semantic markup, accessibility |
| **CSS** | CSS3 | Modern | Responsive design, animations, grid/flexbox |
| **JavaScript** | Vanilla JS (ES6+) | ES2015+ | DOM manipulation, interactivity |
| **Fonts** | Google Fonts | - | Mukta font family |
| **Icons** | Font Awesome | 6.4.0 | UI icons and symbols |
| **Build Tool** | Python | 3.x | Image generation utilities |

### CSS Features Used
- ✅ **CSS Grid** - Layout untuk topics grid
- ✅ **CSS Flexbox** - Navigation, footer layout
- ✅ **CSS Variables** - Dynamic theming (light/dark)
- ✅ **CSS Gradients** - Modern backgrounds
- ✅ **CSS Animations** - Slide, fade, spin effects
- ✅ **CSS Transforms** - Hover effects, transitions
- ✅ **Media Queries** - Responsive breakpoints (480px, 768px, 1024px)

### JavaScript Features Used
- ✅ **localStorage API** - Theme persistence
- ✅ **DOM API** - Element manipulation
- ✅ **Event Listeners** - User interactions
- ✅ **requestAnimationFrame** - Smooth animations
- ✅ **matchMedia API** - System preference detection
- ✅ **ES6+ Features** - Arrow functions, template literals, destructuring

---

## ⚙️ Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Optional: Python 3.x for image generation

### Quick Start (Local)

1. **Clone Repository**
   ```bash
   git clone https://github.com/Latabuzz/News_Portal.git
   cd News_Portal
   ```

2. **Start Local Server**
   
   **Option A: Python (Built-in)**
   ```bash
   python -m http.server 8000
   # Akses: http://localhost:8000
   ```
   
   **Option B: Node.js**
   ```bash
   npx http-server
   ```
   
   **Option C: Live Server (VS Code)**
   - Install extension "Live Server"
   - Right-click index.html → "Open with Live Server"

3. **Open in Browser**
   ```
   http://localhost:8000/index.html
   ```

### Folder Structure Setup
```
Pastikan struktur folder ini ada:
├── css/
│   ├── global-styles.css
│   ├── home.css
│   └── (other CSS files)
├── js/
│   ├── global-scripts.js
│   └── (other JS files)
├── asset/
│   ├── logo1.png
│   └── image/ (semua gambar)
└── index.html (dan halaman lainnya)
```

---

## 🚀 Usage

### Basic Navigation

1. **Homepage (index.html)**
   - Hero section dengan auto-scrolling slideshow
   - 6 kategori topics dalam grid layout
   - Newsletter subscription form
   - Search functionality

2. **Topic Pages**
   - Click kategori untuk ke halaman topik
   - Artikel grid dengan hover effects
   - Featured section per topik
   - Back button di navigation

3. **Theme Toggle**
   - Click moon icon (🌙) di top-right corner
   - Theme preference tersimpan di localStorage
   - Automatic system preference detection

4. **Mobile Navigation**
   - Tap hamburger menu untuk open/close
   - Menu otomatis close saat klik link
   - Responsive navigation untuk semua devices

### Features Usage

**Newsletter Subscription**
```javascript
// Fill email field dan klik "Subscribe"
// Notification akan muncul dengan konfirmasi
showNotification('Email berhasil didaftarkan!', 'success');
```

**Search Functionality**
```javascript
// Type di search bar dan tekan Enter atau klik tombol Search
// Notification akan menampilkan query yang dicari
showNotification('Mencari: "keyword"', 'info');
```

**Theme Toggle**
```javascript
// Click theme toggle button di top-right
// Theme berubah dan tersimpan otomatis
// Preference loading di page reload berikutnya
```

---

## 📱 Pages & Features

### 1. **Homepage (index.html)** 🏠
- **Hero Section**: Slideshow dengan 6 slides, overlay text, navigation dots
- **Call-to-Action**: "Bergabung Sekarang" dan "Jelajahi Topik" buttons
- **Search Section**: Search bar dengan placeholder help text
- **Topics Grid**: 6 kategori dalam responsive grid (3 kolom desktop, 1 kolom mobile)
- **Newsletter**: Email subscription form dengan validation
- **Footer**: Links, social media icons, copyright info

**Fitur Khusus:**
- Auto-rotating slideshow (5 second interval)
- Hover effects pada topic cards
- Smooth scroll ke section
- Loading animation

### 2. **Gaya Hidup Sehat** 💪
- Featured section dengan gradient hijau
- 12 artikel cards tentang kesehatan
- Kategori: fitness, nutrition, wellness
- Related tips dan recommendations

### 3. **Kecantikan** 💄
- Featured section untuk beauty workshop
- 12 artikel cards tentang makeup & skincare
- Tutorial dan product reviews
- Workshop information

### 4. **Fashion** 👗
- Featured section dengan gradient ungu
- 12 artikel cards tentang fashion trends
- Style tips dan outfit ideas
- Designer spotlight

### 5. **Travel** ✈️
- Featured section dengan gradient biru
- 12 artikel cards tentang destinasi
- Tips perjalanan dan budget guides
- Destination reviews

### 6. **Kuliner** 🍴
- Featured section untuk resep spesial
- 12 artikel cards tentang resep & reviews
- Restaurant recommendations
- Food photography showcase

### 7. **Budaya** 🎭
- Featured section untuk festival budaya
- 12 artikel cards tentang budaya
- Regional cultural maps dengan 6 regions
- Tradisi dan seni Indonesia

### 8. **About Us** ℹ️
- Company information
- Team profiles
- Mission & vision
- Contact information

---

## 🎨 Design System

### Color Palette

**Light Theme (Default)**
```css
--bg-color: #ffffff;
--text-color: #333333;
--card-bg: #f5f5f5;
--border-color: #e0e0e0;
--shadow: rgba(0, 0, 0, 0.1);
```

**Dark Theme**
```css
--bg-color: #1a1a1a;
--text-color: #e0e0e0;
--card-bg: #2a2a2a;
--border-color: #444444;
--shadow: rgba(0, 0, 0, 0.3);
```

**Accent Colors (per Kategori)**
| Kategori | Gradient | Primary |
|----------|----------|---------|
| Gaya Hidup Sehat | `#10b981 → #34d399` | Green |
| Kecantikan | `#ec4899 → #f97316` | Pink |
| Fashion | `#8b5cf6 → #06b6d4` | Purple |
| Travel | `#3b82f6 → #06b6d4` | Blue |
| Kuliner | `#ff6b6b → #ff8787` | Red |
| Budaya | `#f59e0b → #dc2626` | Orange |

### Typography

**Font Family**: Mukta (Google Fonts)
- **Font Weights**: 300, 400, 700
- **Line Height**: 1.6 (body), 1.2 (headings)

**Font Sizes**
```
h1: 3rem (desktop), 2rem (mobile)
h2: 2.2rem (desktop), 1.8rem (mobile)
h3: 1.5rem (desktop), 1.2rem (mobile)
body: 1rem (desktop), 0.95rem (mobile)
small: 0.875rem
```

### Spacing System
- **Base Unit**: 0.5rem (8px)
- **Scale**: 0.5, 1, 1.5, 2, 3, 4, 6, 8 rem
- **Padding**: 1rem, 2rem, 3rem, 4rem
- **Margin**: Same as padding
- **Gap**: 1rem, 1.5rem, 2rem, 3rem

### Responsive Breakpoints
```css
Mobile:     320px - 480px
Tablet:     481px - 768px
Desktop:    769px - 1024px
Large:      1025px+
```

---

## 📊 Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Latest 2 versions |
| Firefox | ✅ Full | Latest 2 versions |
| Safari | ✅ Full | Latest 2 versions |
| Edge | ✅ Full | Latest 2 versions |
| IE 11 | ❌ Not Supported | Use modern browsers |

---

## 🎯 Performance Metrics

- **Page Load Time**: < 2 seconds
- **Largest Contentful Paint**: < 1.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms
- **Lighthouse Score**: 85+

---

## 🔧 Customization Guide

### Mengubah Warna Tema

Edit di `css/global-styles.css`:
```css
:root {
    --gradient-start: #ff6b6b;      /* Ubah warna utama */
    --gradient-end: #ff8787;        /* Ubah warna secondary */
    --bg-color: #ffffff;
    --text-color: #333333;
}
```

### Mengubah Font

Edit di HTML head section:
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=FONT_NAME:wght@300;400;700&display=swap">
```

### Menambah Kategori Baru

1. **Buat halaman HTML baru** (misal: `lifestyle.html`)
2. **Copy structure** dari halaman kategori existing
3. **Update navigation** di semua halaman untuk include kategori baru
4. **Update homepage** topics grid untuk include kategori baru

---

## 🤝 Contributing

Contributions are welcome! Berikut cara berkontribusi:

1. **Fork** repository
2. **Create feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit changes** (`git commit -m 'Add AmazingFeature'`)
4. **Push ke branch** (`git push origin feature/AmazingFeature`)
5. **Open Pull Request**

### Development Guidelines
- Follow existing code style
- Test di multiple browsers
- Ensure responsive design
- Update documentation
- Add meaningful commit messages

---

## 📝 Future Roadmap

### Phase 1 (Q1 2025)
- ✅ Launch MVP website
- ⏳ Implement backend API
- ⏳ Database integration

### Phase 2 (Q2 2025)
- ⏳ User authentication system
- ⏳ Comment system
- ⏳ Like/bookmark functionality
- ⏳ Advanced search with filters

### Phase 3 (Q3 2025)
- ⏳ Content management system
- ⏳ Admin dashboard
- ⏳ Email notifications
- ⏳ Social media integration

### Phase 4 (Q4 2025)
- ⏳ Mobile app (React Native)
- ⏳ PWA support
- ⏳ Analytics integration
- ⏳ Performance optimization

---

## 🐛 Known Issues

- None at the moment

## 📧 Contact & Support

- **Email**: support@urbanvibesdaily.com
- **GitHub Issues**: [Report Bug](https://github.com/Latabuzz/News_Portal/issues)
- **Website**: urbanvibesdaily.com (coming soon)

---

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

```
MIT License

Copyright (c) 2024 Urban Vibes Daily

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🌟 Acknowledgments

- **Google Fonts** untuk Mukta font
- **Font Awesome** untuk icons
- **Komunitas Open Source** untuk inspirasi dan tools
- **Contributors** yang telah membantu project ini

---

## 📈 Project Statistics

```
Lines of Code:     ~2,500
HTML Pages:        8
CSS Files:         6
JavaScript Files:  3
Images:            15+
Total Assets:      50+
Development Time:  ~40 hours
Last Updated:      October 2024
```

---

## 🚀 Quick Links

- 🌐 [Website](https://urbanvibesdaily.com)
- 📖 [Documentation](./docs/README.md)
- 🔗 [GitHub Repository](https://github.com/Latabuzz/News_Portal)
- 📢 [Report Issues](https://github.com/Latabuzz/News_Portal/issues)

---

<div align="center">

### Made with ❤️ by Urban Vibes Daily Team

⭐ **Star this repo if you like it!**

![GitHub stars](https://img.shields.io/github/stars/Latabuzz/News_Portal?style=social)
![GitHub forks](https://img.shields.io/github/forks/Latabuzz/News_Portal?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/Latabuzz/News_Portal?style=social)

</div>

---

**Last Updated**: October 25, 2024  
**Version**: 1.0.0 (Release)  
**Status**: 🟢 Active & Maintained
