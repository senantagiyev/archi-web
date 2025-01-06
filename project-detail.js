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


// detail

document.addEventListener("DOMContentLoaded", () => {
    const projectImg = document.querySelector(".project-img");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                projectImg.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    observer.observe(projectImg);
});



// description
window.addEventListener('scroll', function () {
    var element = document.querySelector('.featured-image');
    var elementPosition = element.getBoundingClientRect().top; 
    var screenPosition = window.innerHeight; 

    if (elementPosition < screenPosition) {
        element.classList.add('scroll-in-view'); 
    }
});
