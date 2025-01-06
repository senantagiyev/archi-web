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

// swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    }
});

// slider images
const images = document.querySelectorAll('.slider-image');
let currentIndex = 0;

function changeImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(changeImage, 5000);


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

document.addEventListener("DOMContentLoaded", () => {
    const welcomeText = document.getElementById("welcome-text");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    welcomeText.classList.add("show");
                }
            });
        },
        {
            threshold: 0.5, 
        }
    );

    observer.observe(welcomeText);
});


// services animation


document.addEventListener("DOMContentLoaded", () => {
    const serviceBlock = document.getElementById("service-main-block");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                serviceBlock.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    observer.observe(serviceBlock);
});



// work text animation


document.addEventListener("DOMContentLoaded", () => {
    const contentBlock = document.querySelector(".content");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                contentBlock.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    observer.observe(contentBlock);
});


//How we work animation

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

