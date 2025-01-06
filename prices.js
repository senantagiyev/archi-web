// burger menu

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.querySelector('.overlay');

    burgerMenu.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
    });

    function closeMenu() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
    }

    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
});


// faq

document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const isActive = header.classList.contains('active');
            
            accordionHeaders.forEach(h => {
                h.classList.remove('active');
                const content = h.nextElementSibling;
                content.style.maxHeight = null;
            });
            
            if (!isActive) {
                header.classList.add('active');
                const content = header.nextElementSibling;
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});

// contact-form footer animation

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                contactForm.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    observer.observe(contactForm);
});


//prices animation

document.addEventListener("DOMContentLoaded", () => {
    const pricingHeader = document.querySelector(".pricing-header");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                pricingHeader.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    observer.observe(pricingHeader);
});


//how we work animation

document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.querySelector(".image-container");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                imageContainer.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    observer.observe(imageContainer);
});



//faq animation

document.addEventListener("DOMContentLoaded", () => {
    const faqImage = document.querySelector(".faq-image");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                faqImage.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    observer.observe(faqImage);
});
