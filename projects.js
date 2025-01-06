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

//projects

document.addEventListener("DOMContentLoaded", () => {
    const sectionHeader = document.querySelector(".section-header");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                sectionHeader.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    observer.observe(sectionHeader);
});

