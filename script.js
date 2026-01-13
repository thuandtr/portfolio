// Smooth scrolling for navigation links
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

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(15, 5, 26, 0.95)';
        header.style.boxShadow = '0 0 30px rgba(139, 92, 246, 0.2)';
    } else {
        header.style.background = 'rgba(15, 5, 26, 0.7)';
        header.style.boxShadow = 'none';
    }
});

// CTA button/link click handler
const ctaButton = document.querySelector('.cta-button');
if (ctaButton && ctaButton.tagName === 'BUTTON') {
    ctaButton.addEventListener('click', () => {
        const contactSection = document.querySelector('.contact');
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

// Professional avatar interaction effect
document.addEventListener('mousemove', (e) => {
    const avatarImage = document.querySelector('.avatar-image');
    if (avatarImage) {
        const rect = avatarImage.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        
        avatarImage.style.setProperty('--light-angle', `${angle}rad`);
    }
});

// Experience cards - add interactive effect
document.querySelectorAll('.experience-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.borderColor = 'rgba(139, 92, 246, 0.8)';
    });
    card.addEventListener('mouseleave', function () {
        this.style.borderColor = 'rgba(139, 92, 246, 0.3)';
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.experience-card, .project-item').forEach(el => {
    el.style.opacity = '0.8';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});
