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

window.addEventListener('scroll', function () {
    var element = document.getElementById('contact-form');
    var elementPosition = element.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (elementPosition < screenPosition) {
        element.classList.add('scroll-in-view');
    }
});


//prices animation

document.addEventListener("DOMContentLoaded", function () {
    const pricingHeader = document.querySelector(".pricing-header");

    const onScroll = () => {
        const rect = pricingHeader.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            pricingHeader.classList.add("scroll-in-view");
            window.removeEventListener("scroll", onScroll); 
        }
    };

    window.addEventListener("scroll", onScroll);
});


//how we work animation

document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector(".image-container");

    const onScroll = () => {
        const rect = imageContainer.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            imageContainer.classList.add("scroll-in-view");
            window.removeEventListener("scroll", onScroll); 
        }
    };

    window.addEventListener("scroll", onScroll);
});


//faq animation

document.addEventListener("DOMContentLoaded", function () {
    const faqImage = document.querySelector(".faq-image");

    const onScroll = () => {
        const rect = faqImage.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            faqImage.classList.add("scroll-in-view");
            window.removeEventListener("scroll", onScroll);
        }
    };

    window.addEventListener("scroll", onScroll);
});
