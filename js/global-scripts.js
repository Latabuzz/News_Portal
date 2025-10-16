// Global JavaScript untuk Urban Vibes Daily

document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeMobileNavigation();
    initializeScrollReveal();
    initializeSmoothScrolling();
    initializeFormHandlers();
    initializeLoadingAnimation();
});

// Fungsi Dark Mode
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    if (!themeToggle) return;
    
    // Mengecek preferensi tema yang tersimpan
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Menerapkan tema yang tersimpan
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
        themeToggle.setAttribute('data-tooltip', 'Mode Terang');
        themeToggle.setAttribute('aria-label', 'Beralih ke mode terang');
    }

    themeToggle.addEventListener('click', function() {
        this.style.animation = 'spin 0.5s ease';
        
        setTimeout(() => {
            const currentTheme = body.getAttribute('data-theme');
            
            if (currentTheme === 'dark') {
                body.removeAttribute('data-theme');
                themeToggle.textContent = '🌙';
                themeToggle.setAttribute('data-tooltip', 'Mode Gelap');
                themeToggle.setAttribute('aria-label', 'Beralih ke mode gelap');
                localStorage.setItem('theme', 'light');
            } else {
                body.setAttribute('data-theme', 'dark');
                themeToggle.textContent = '☀️';
                themeToggle.setAttribute('data-tooltip', 'Mode Terang');
                themeToggle.setAttribute('aria-label', 'Beralih ke mode terang');
                localStorage.setItem('theme', 'dark');
            }
            
            this.style.animation = '';
        }, 250);
    });

    // Deteksi preferensi sistem
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme')) {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
        themeToggle.setAttribute('data-tooltip', 'Mode Terang');
        localStorage.setItem('theme', 'dark');
    }
}

// Mobile Navigation
function initializeMobileNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Tutup menu saat klik link
    const navLinks = document.querySelectorAll('.nav-link a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Tutup menu saat klik di luar
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
        if (!isClickInsideNav) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// Scroll Reveal Animation
function initializeScrollReveal() {
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.scroll-reveal');
        
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const elementTop = reveal.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('revealed');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Jalankan sekali saat load
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Form Handlers
function initializeFormHandlers() {
    // Newsletter form
    const newsletterForm = document.querySelector('.form-card');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email');
            if (email && email.value) {
                showNotification('Terima kasih! Email Anda telah berhasil didaftarkan untuk newsletter.', 'success');
                email.value = '';
            }
        });
    }

    // Search functionality
    const searchButton = document.querySelector('.search-button');
    const searchBar = document.querySelector('.search-bar');
    
    if (searchButton && searchBar) {
        searchButton.addEventListener('click', function() {
            const query = searchBar.value.trim();
            if (query) {
                showNotification(`Mencari: "${query}"`, 'info');
                // Implementasi pencarian bisa ditambahkan di sini
            }
        });
        
        searchBar.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
}

// Loading Animation
function initializeLoadingAnimation() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                loadingOverlay.classList.add('fade-out');
                setTimeout(() => {
                    loadingOverlay.style.display = 'none';
                }, 500);
            }, 1000);
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    // Hapus notifikasi yang ada
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Buat notifikasi baru
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;

    // Tambahkan styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        color: 'white',
        zIndex: '10001',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        animation: 'slideInRight 0.3s ease',
        maxWidth: '400px',
        wordWrap: 'break-word'
    });

    // Set warna berdasarkan type
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    notification.style.background = colors[type] || colors.info;

    // Style tombol close
    const closeButton = notification.querySelector('button');
    Object.assign(closeButton.style, {
        background: 'none',
        border: 'none',
        color: 'white',
        fontSize: '1.5rem',
        cursor: 'pointer',
        padding: '0',
        lineHeight: '1'
    });

    document.body.appendChild(notification);

    // Auto remove setelah 5 detik
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Console welcome message
setTimeout(() => {
    console.log('%c🌟 Selamat datang di Urban Vibes Daily!', 'color: #667eea; font-size: 16px; font-weight: bold;');
    console.log('%c💡 Fitur yang tersedia:', 'color: #333; font-size: 14px;');
    console.log('   - Mode Gelap/Terang (tombol di kanan atas)');
    console.log('   - Animasi halus saat scroll');
    console.log('   - Navigasi responsif untuk mobile');
    console.log('   - Form newsletter yang interaktif');
    console.log('   - Sistem notifikasi');
}, 2000);
