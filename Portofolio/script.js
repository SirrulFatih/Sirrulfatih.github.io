/**
 * Portfolio Website - Sirrul Fatih Ahdiat
 * JavaScript for interactive functionality
 */

// ===== DOM ELEMENTS =====
const header = document.getElementById('header');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');
const backToTop = document.getElementById('back-to-top');

// ===== MOBILE NAVIGATION =====
/**
 * Creates and manages the overlay for mobile menu
 */
function createNavOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('nav-overlay');
    document.body.appendChild(overlay);
    return overlay;
}

const navOverlay = createNavOverlay();

/**
 * Opens the mobile navigation menu
 */
function openMenu() {
    navMenu.classList.add('show-menu');
    navOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

/**
 * Closes the mobile navigation menu
 */
function closeMenu() {
    navMenu.classList.remove('show-menu');
    navOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

// Event listeners for mobile menu
if (navToggle) {
    navToggle.addEventListener('click', openMenu);
}

if (navClose) {
    navClose.addEventListener('click', closeMenu);
}

navOverlay.addEventListener('click', closeMenu);

// Close menu when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('show-menu')) {
        closeMenu();
    }
});

// ===== HEADER SCROLL EFFECT =====
/**
 * Adds scrolled class to header when scrolling
 */
function handleHeaderScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// ===== ACTIVE NAVIGATION LINK =====
/**
 * Updates active navigation link based on scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

// ===== BACK TO TOP BUTTON =====
/**
 * Shows/hides back to top button based on scroll position
 */
function handleBackToTop() {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== SCROLL EVENT LISTENER =====
let ticking = false;

function onScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleHeaderScroll();
            updateActiveNavLink();
            handleBackToTop();
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', onScroll);

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href === '#') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
/**
 * Creates intersection observer for fade-in animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.about__container, .skills__group, .project__card, .contact__card, .timeline__item'
    );
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

// Initialize scroll animations
initScrollAnimations();

// ===== LAZY LOADING IMAGES =====
/**
 * Initializes lazy loading for images
 */
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

initLazyLoading();

// ===== PREFERS REDUCED MOTION =====
/**
 * Checks if user prefers reduced motion
 */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    document.documentElement.style.scrollBehavior = 'auto';
}

// ===== INITIALIZE ON DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', () => {
    // Initial scroll position check
    handleHeaderScroll();
    updateActiveNavLink();
    handleBackToTop();
    
    // Add loaded class to body for initial animations
    document.body.classList.add('loaded');
});
