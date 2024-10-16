const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


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

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}


function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
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