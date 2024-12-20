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


// numbers animation
function animateNumbers() {
    animateValue("yearsExperience", 0, 20, 2000);
    animateValue("projectsCompleted", 0, 1220, 3000);
}

window.onload = animateNumbers;

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    animateNumbers();
}

document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("welcome-text");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    target.classList.add("animate"); 
                }
            });
        },
        { threshold: 0.5 } 
    );

    observer.observe(target);
});

window.addEventListener('scroll', function() {
    var element = document.getElementById('service-main-block');
    var elementPosition = element.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (elementPosition < screenPosition) {
        element.classList.add('scroll-in-view');
    }
});


// services animation


window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.content, #service-main-block'); 
    elements.forEach(function(element) {
        var elementPosition = element.getBoundingClientRect().top;
        var screenPosition = window.innerHeight;

        if (elementPosition < screenPosition) {
            element.classList.add('scroll-in-view');
        }
    });
});


// work text animation


window.addEventListener('scroll', function () {
    var element = document.getElementById('work-text');
    var elementPosition = element.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (elementPosition < screenPosition) {
        element.classList.add('scroll-in-view');
    }
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


// why us animation

window.addEventListener('scroll', function () {
    var element = document.querySelector('.section-intro'); 
    var elementPosition = element.getBoundingClientRect().top; 
    var screenPosition = window.innerHeight; 

    if (elementPosition < screenPosition) {
        element.classList.add('scroll-in-view');
    }
});


// inspiration animation

window.addEventListener('scroll', function () {
    var element = document.querySelector('.content-container'); 
    var elementPosition = element.getBoundingClientRect().top; 
    var screenPosition = window.innerHeight; 

    if (elementPosition < screenPosition) {
        element.classList.add('scroll-in-view');
    }
});
