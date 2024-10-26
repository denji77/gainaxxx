const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
}); //The Locomotive Scroll is soo good


let swiper;

function initSwiper() {
    swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 5000,
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            640: {
                slidesPerView: "auto",
                spaceBetween: 20
            }
        }
    });

    const swiperContainer = document.querySelector('.swiper-container');
    const swiperSlides = document.querySelectorAll('.swiper-slide');

    //Don't Work properly i don't know why.
    swiperContainer.addEventListener('mouseenter', () => {
        swiper.autoplay.stop();
        swiperContainer.classList.add('swiper-container-hover');
    });

    swiperContainer.addEventListener('mouseleave', () => {
        swiper.autoplay.start();
        swiperContainer.classList.remove('swiper-container-hover');
    });

    swiperSlides.forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            slide.style.transform = 'scale(1.2)';
            slide.style.zIndex = '2';
            swiperSlides.forEach(s => {
                if (s !== slide) s.style.opacity = '0.5';
            });
        });

        slide.addEventListener('mouseleave', () => {
            slide.style.transform = 'scale(1)';
            slide.style.zIndex = '1';
            swiperSlides.forEach(s => s.style.opacity = '1');
        });
    });
}

function swiperAnimation() {
    const page4 = document.querySelector("#page4");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!swiper) initSwiper();
                else swiper.autoplay.start();
            } else if (swiper) {
                swiper.autoplay.stop();
            }
        });
    }, { threshold: 0.1 });

    observer.observe(page4);
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(() => loader.style.top = "-100%", 2500);
}

function setupMobileMenu() {
    const hamburger = document.querySelector('#hamburger');
    const navPart2 = document.querySelector('#nav-part2');

    hamburger.addEventListener('click', () => {
        navPart2.classList.toggle('active');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    swiperAnimation();
    setupMobileMenu();
    loaderAnimation();
    initSwiper();
});
