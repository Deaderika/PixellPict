// var swiper = new Swiper(".slide-content", {
//     slidesPerView: 3,
//     spaceBetween: 25,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets:true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },

//       breakpoints:{
//         0:{
//             slidesPerView: 1,
//         },
//         520:{
//             slidesPerView: 2,
//         },
//         950:{
//             slidesPerView: 3,
//         },
//       }
//   });



/**
  Swiper:
  https://swiperjs.com/
**//**
  Swiper:
  https://swiperjs.com/
**/

const swiper = new Swiper(".swiperCarousel", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 10,
  keyboard: {
    enabled: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const slides = document.getElementsByClassName("swiper-slide");
for (const slide of slides) {
  slide.addEventListener("click", () => {
    const { className } = slide;
    if (className.includes("swiper-slide-next")) {
      swiper.slideNext();
    } else if (className.includes("swiper-slide-prev")) {
      swiper.slidePrev();
    }
  });
}

function resizeTextToFit() {
  const quoteEls = document.getElementsByClassName('quote');
  for (const el of quoteEls) {
    el.style.width = el.offsetWidth;
    el.style.height = el.offsetHeight;
  }
  textFit(quoteEls, { maxFontSize: 14 });
}
resizeTextToFit();
addEventListener("resize", (event) => {
  resizeTextToFit();
});