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


function animateValue(id, start, end, duration) {
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const obj = document.getElementById(id);
    const timer = setInterval(() => {
        current += increment;
        obj.innerHTML = current + (id === "yearsExperience" ? "+" : "+");
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}



function animateValue(id, start, end, duration) {
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const obj = document.getElementById(id);
    
    const timer = setInterval(() => {
        current += increment;
        obj.innerHTML = current + (id === "yearsExperience" || id === "awardsWinning" ? "+" : "+");
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Start animations when the page loads
window.onload = function() {
    animateValue("yearsExperience", 0, 25, 2000);
    animateValue("projectsCompleted", 0, 1250, 3000);
    animateValue("awardsWinning", 0, 45, 2000);
    animateValue("professionalTeam", 0, 1375, 3000);
};



// services-intro

window.addEventListener('scroll', function () {
    var element = document.querySelector('.services-intro'); 
    var elementPosition = element.getBoundingClientRect().top; 
    var screenPosition = window.innerHeight;

    if (elementPosition < screenPosition) {
        element.classList.add('scroll-in-view'); 
    }
});


// work text animation


document.addEventListener("DOMContentLoaded", () => {
    const workText = document.getElementById("work-text");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                workText.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    observer.observe(workText);
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

