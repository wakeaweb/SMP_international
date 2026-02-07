document.addEventListener('DOMContentLoaded', () => {
    // Sticky Header
    const header = document.getElementById('header');
    const isSubPage = header && header.classList.contains('scrolled');
    if (header && !isSubPage) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const mobileOverlay = document.getElementById('mobile-menu-overlay');
    const mobileClose = document.getElementById('mobile-menu-close');

    function openMobileMenu() {
        if (mobileOverlay) {
            mobileOverlay.classList.add('active');
            if (hamburger) hamburger.classList.add('menu-open');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeMobileMenu() {
        if (mobileOverlay) {
            mobileOverlay.classList.remove('active');
            if (hamburger) hamburger.classList.remove('menu-open');
            document.body.style.overflow = '';
        }
    }

    if (hamburger) {
        hamburger.addEventListener('click', openMobileMenu);
    }

    if (mobileClose) {
        mobileClose.addEventListener('click', closeMobileMenu);
    }

    document.querySelectorAll('.mobile-menu-list a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Header scroll durumunu body'ye class olarak ekle (hamburger rengi için)
    if (header) {
        const updateBodyScrollClass = () => {
            if (header.classList.contains('scrolled')) {
                document.body.classList.add('header-scrolled');
            } else {
                document.body.classList.remove('header-scrolled');
            }
        };
        const headerObserver = new MutationObserver(updateBodyScrollClass);
        headerObserver.observe(header, { attributes: true, attributeFilter: ['class'] });
        updateBodyScrollClass();
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all
            faqItems.forEach(faq => faq.classList.remove('active'));

            // Open clicked if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.01,
        rootMargin: '0px 0px 0px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .uni-card, .project-card, .case-card').forEach(el => observer.observe(el));
});
