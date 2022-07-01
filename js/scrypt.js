"use strict";

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");
} else {
  document.body.classList.add("_pc");
}

// menu burger
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const noScroll = document.querySelector(".w-nav-button");
const mobileBtn = document.querySelector(".mobile__burger-btn");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.add("_lock");
    iconMenu.classList.add("_active");
    menuBody.classList.add("_active");
    noScroll.classList.add("w--open");
  });
}

if (mobileBtn) {
  mobileBtn.addEventListener("click", function (e) {
    document.body.classList.remove("_lock");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
    noScroll.classList.remove("w--open");
  });
}

// Stop body scroll when mobile menu is open
const body = document.body;
function letBodyScroll(bool) {
  if (bool) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
}

const targetNode = document.querySelector(".w-nav-button");
const config = { attributes: true, childList: false, subtree: false };
const callback = function (mutationsList, observer) {
  for (let i = 0; i < mutationsList.length; i++) {
    if (mutationsList[i].type === "attributes") {
      const menuIsOpen = mutationsList[i].target.classList.contains("w--open");
      letBodyScroll(menuIsOpen);
    }
  }
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

// scroll on click
// const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
const menuLinks = document.querySelectorAll(".goto[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      if (iconMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        iconMenu.classList.remove("_active");
        menuBody.classList.remove("_active");
        noScroll.classList.remove("w--open");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}
// -------------------------------------------------------

// --------------- Partners and Team Sliders ----------------
$(document).ready(function () {
  $(".partners__slider").slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    // waitForAnimate: false,
    centerMode: true,
    variableWidth: true,
  });

  // ---------- Team slider -----------
  $(".team__slider").slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    // waitForAnimate: false,
    centerMode: true,
    variableWidth: true,
    swipe: false,
  });

  // ---------- Creation1 slider -----------
  $(".creation1__slider").slick({
    // adaptiveHeight: true,
    slidesToShow: 1,
    // waitForAnimate: false,
    // centerMode: true,
    // variableWidth: true,
    // swipe: false,
    prevArrow:
      "<img src='../assets/images/arrow-prev.svg' class='arrow__prev' alt='1'>",
    nextArrow:
      "<img src='../assets/images/arrow-next.svg' class='arrow__next' alt='2'>",
  });

  // ---------- Creation2 slider -----------
  $(".creation2__slider").slick({
    // adaptiveHeight: true,
    slidesToShow: 1,
    // waitForAnimate: false,
    // centerMode: true,
    // variableWidth: true,
    // swipe: false,
    prevArrow:
      "<img src='../assets/images/arrow-prev.svg' class='arrow__prev' alt='1'>",
    nextArrow:
      "<img src='../assets/images/arrow-next.svg' class='arrow__next' alt='2'>",
  });
});

// --------------- /End Partners Slider ----------------

// $(document).ready(function () {
//   $(function () {
//     $(".accordion__title").on("click", function (e) {
//       e.preventDefault();
//       var $this = $(this);

//       if (!$this.hasClass("accordion-active")) {
//         $(".accordion__content").slideUp(400);
//         $(".accordion__title").removeClass("accordion-active");
//         $(".accordion__arrow").removeClass("accordion__rotate");
//       }

//       $this.toggleClass("accordion-active");
//       $this.next().slideToggle();
//       $(".accordion__arrow", this).toggleClass("accordion__rotate");
//     });
//   });
// });

// ===================== FAQ Test ==================
// stagger items
// gsap.fromTo(
//   ".accordion-item",
//   { autoAlpha: 0, scale: 0.9 },
//   { duration: 1, autoAlpha: 1, scale: 1, ease: Power1.easeInOut, stagger: 0.05 }
// );

// function open and close accordion itens

// const accordionItems = document.querySelectorAll(".accordion-item");
// accordionItems.forEach((itemAccordion) => {
// accordion content

// const accordionTitle = itemAccordion.querySelector(".title");
// const accordionContent = itemAccordion.querySelector(".content");
// const accordionArrow = itemAccordion.querySelector(".arrow");

// on click title

// accordionTitle.addEventListener("click", (event) => {
// prevent click

// event.preventDefault();

// check if accordion item is open

// if (!itemAccordion.classList.contains("-active")) {
// close others accordions

// const accordionItemsActive = document.querySelectorAll(
//   ".accordion-item.-active"
// );
// accordionItemsActive.forEach((itemAccordionActive) => {
//   const accordionContent = itemAccordionActive.querySelector(".content");
//   const accordionArrow = itemAccordionActive.querySelector(".arrow");

// remove active class accordion item

// itemAccordionActive.classList.remove("-active");

// close content

// gsap.to(accordionContent, {
//   duration: 0.5,
//   height: 0,
//   display: "none",
//   autoAlpha: 0,
//   ease: "expo.inOut",
// });

// rotate arrow

//   gsap.to(accordionArrow, {
//     duration: 0.5,
//     autoAlpha: 0,
//     y: -10,
//     ease: "back.in",
//     onComplete: function () {
//       gsap.set(accordionArrow, { rotation: 0 });
//     },
//   });
//   gsap.to(accordionArrow, {
//     duration: 0.5,
//     autoAlpha: 1,
//     y: 0,
//     ease: "back.out",
//     delay: 0.5,
//   });
// });

// add active class accordion item

// itemAccordion.classList.add("-active");

// // open content
// gsap.set(accordionContent, {
//   height: "auto",
//   display: "block",
//   autoAlpha: 1,
// });
// gsap.from(accordionContent, {
//   duration: 0.5,
//   height: 0,
//   display: "none",
//   autoAlpha: 0,
//   ease: "expo.inOut",
// });

// rotate arrow

//   gsap.to(accordionArrow, {
//     duration: 0.5,
//     autoAlpha: 0,
//     y: 10,
//     ease: "back.in",
//     onComplete: function () {
//       gsap.set(accordionArrow, { rotation: 180 });
//     },
//   });
//   gsap.to(accordionArrow, {
//     duration: 0.5,
//     autoAlpha: 1,
//     y: 0,
//     ease: "back.out",
//     delay: 0.5,
//   });
// } else {
// remove active class accordion item

// itemAccordion.classList.remove("-active");

// // close content
// gsap.to(accordionContent, {
//   duration: 0.5,
//   height: 0,
//   display: "none",
//   autoAlpha: 0,
//   ease: "expo.inOut",
// });

// rotate arrow

//       gsap.to(accordionArrow, {
//         duration: 0.5,
//         autoAlpha: 0,
//         y: -10,
//         ease: "back.in",
//         onComplete: function () {
//           gsap.set(accordionArrow, { rotation: 0 });
//         },
//       });
//       gsap.to(accordionArrow, {
//         duration: 0.5,
//         autoAlpha: 1,
//         y: 0,
//         ease: "back.out",
//         delay: 0.5,
//       });
//     }
//   });
// });

// ========================= FAQ LAST ==================
$(document).ready(function () {
  $(".accordion-list > li > .answer").hide();

  $(".accordion-list > li").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });
});
