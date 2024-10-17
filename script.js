const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
}); //The Locomotive Scroll is soo good


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

let swiper;

function initSwiper() {
    swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 5000,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: "auto",
                spaceBetween: 100
            }
        }
    });
}

function swiperAnimation() {
    const page4 = document.querySelector("#page4");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!swiper) {
                    initSwiper();
                } else {
                    swiper.autoplay.start();
                }
            } else {
                if (swiper) {
                    swiper.autoplay.stop();
                }
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    observer.observe(page4);
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 2500) //2.5 seconds seems alright
}

swiperAnimation()
page4Animation()
loaderAnimation()



const gyanaxLogo = document.querySelector('nav img');
const gyanaxElements = document.querySelectorAll('div[id^="page2-bottom"] h2, div[id^="bottom-part2"] p');
//Only Works for first element dunno whyy
gyanaxElements.forEach(element => {
    const gyanaxText = element.textContent.match(/Gainax/,);
    if (gyanaxText) {
      const textNode = element.firstChild;
      const newTextNode = textNode.cloneNode(true); 
      newTextNode.textContent = newTextNode.textContent.replace(/Gyanax/, '');
      element.replaceChild(gyanaxLogo.cloneNode(true), textNode);
      element.appendChild(newTextNode);
    }
  });

function setupMobileMenu() {
    const hamburger = document.querySelector('#hamburger');
    const navPart2 = document.querySelector('#nav-part2');

    hamburger.addEventListener('click', () => {
        navPart2.classList.toggle('active');
    });
}

// This function gets called when the DOM loaded
document.addEventListener('DOMContentLoaded', setupMobileMenu);
