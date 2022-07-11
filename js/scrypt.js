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
    centerMode: true,
    variableWidth: true,
  });

  // ---------- Team slider -----------
  $(".team__slider").slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
    swipe: false,
  });

  // ---------- Creation1 slider -----------
  $(".creation1__slider").slick({
    slidesToShow: 1,
    prevArrow:
      "<div class='arrow__prev'><div class='arrow__prev-svg'></div></div>",
    nextArrow:
      "<div class='arrow__next'><div class='arrow__next-svg'></div></div>",
  });

  // ---------- Creation2 slider -----------
  $(".creation2__slider").slick({
    slidesToShow: 1,
    prevArrow:
      "<div class='arrow__prev'><div class='arrow__prev-svg'></div></div>",
    nextArrow:
      "<div class='arrow__next'><div class='arrow__next-svg'></div></div>",
  });
  // -----------------------------------------------------------------------

  // ---------- collection1Top__slider1 -----------
  $(".collection1Top__slider").slick({
    asNavFor: ".collection1Bottom__slider",
    slidesToShow: 1,
    fade: true,
    draggable: false,
    swipe: false,
    arrows: false,
  });

  // ---------- collection1Top__slider2 -----------
  $(".collection1Top__slider-2").slick({
    asNavFor: ".collection1Bottom__slider-2",
    slidesToShow: 1,
    fade: true,
    draggable: false,
    swipe: false,
    arrows: false,
  });

  // ---------- collection1Top__sliderInside1 -----------
  $(".collection1Top__sliderInside").slick({
    infinite: false,
    prevArrow:
      "<div class='arrow__prev'><div class='arrow__prev-svg'></div></div>",
    nextArrow:
      "<div class='arrow__next'><div class='arrow__next-svg'></div></div>",
  });

  // ---------- collection1Top__sliderInside2 -----------
  $(".collection1Top__sliderInside-2").slick({
    initialSlide: 2,
    infinite: false,
    // appendArrows: $(".sliderInside"),
    // infinite: false,
    // fade: true,
    // waitForAnimate: false,
    // centerMode: true,
    // variableWidth: true,
    // swipe: false,
    prevArrow:
      "<div class='arrow__prev'><div class='arrow__prev-svg'></div></div>",
    nextArrow:
      "<div class='arrow__next'><div class='arrow__next-svg'></div></div>",
  });

  // ---------- collection1Bottom__slider1 -----------
  $(".collection1Bottom__slider").slick({
    centerMode: true,
    variableWidth: true,
    asNavFor: ".collection1Top__slider",
    prevArrow:
      "<div class='arrow__prev-bottom'><div class='arrow__prev-svg-bottom'></div></div>",
    nextArrow:
      "<div class='arrow__next-bottom'><div class='arrow__next-svg-bottom'></div></div>",
  });

  // ---------- collection1Bottom__slider2 -----------
  $(".collection1Bottom__slider-2").slick({
    centerMode: true,
    variableWidth: true,
    asNavFor: ".collection1Top__slider-2",
    prevArrow:
      "<div class='arrow__prev-bottom'><div class='arrow__prev-svg-bottom'></div></div>",
    nextArrow:
      "<div class='arrow__next-bottom'><div class='arrow__next-svg-bottom'></div></div>",
  });
});
// --------------- /End Partners Slider ----------------

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

// ========================= Before After1 ==================
const slider1 = document.querySelector(".slider1 input");
const img2 = document.querySelector(".images .img-2");
const dragLine1 = document.querySelector(".slider1 .drag-line");
slider1.oninput = () => {
  let slider1Val = slider1.value;
  dragLine1.style.left = slider1Val + "%";
  img2.style.width = slider1Val + "%";
};

// ========================= Before After new1 ==================
// const container = document.querySelector(".container1");
// const slider = document.querySelector(".container1__slider");
// const leftImage = document.querySelector(".container1__left-image");
// const rightImage = document.querySelector(".container1__right-image");

// let clicked = false;
// let xPosition;

// const sliderDragHandler = (event) => {
//   xPosition = event.layerX;
//   let containerSize = container.offsetWidth;

//   if (clicked) {
//     leftImage.style.width = `${xPosition}px`;
//     slider.style.left = `${xPosition}px`;

//     if (xPosition < 30) {
//       leftImage.style.width = 0;
//       slider.style.left = 0;
//     }

//     if (xPosition + 30 > containerSize) {
//       leftImage.style.width = `${containerSize}px`;
//       slider.style.left = `${containerSize}px`;
//     }
//   }
// };

// const sliderTouchStartHandler = (event) => {
//   xPosition = event.touches[0].clientX;
// };

// const sliderTouchMoveHandler = (event) => {
//   let containerSize = container.offsetWidth;
//   let touch = event.touches[0].clientX;

//   leftImage.style.width = `${touch}px`;
//   slider.style.left = `${touch}px`;

//   if (touch < 10) {
//     leftImage.style.width = 0;
//     slider.style.left = "2px";
//   }
//   if (touch + 10 > containerSize) {
//     leftImage.style.width = `${containerSize}px`;
//     slider.style.left = `${containerSize - 2}px`;
//   }
//   event.preventDefault();
// };

/* desktop events */
// container.addEventListener("mousedown", () => (clicked = true));
// container.addEventListener("mouseup", () => (clicked = false));
// container.addEventListener("mousemove", sliderDragHandler);

/* mobile events */
// container.addEventListener("touchstart", sliderTouchStartHandler);
// container.addEventListener("touchmove", sliderTouchMoveHandler);

// ========================= Before After new2 ==================
// const slider = document.querySelector(".slider__one");
// const before = slider.querySelector(".before");
// const beforeImage = before.querySelector("img");
// const change = slider.querySelector(".change");
// let isActive = false;

// document.addEventListener("DOMContentLoaded", () => {
//   let width = slider.offsetWidth;
//   beforeImage.style.width = `${width}px`;
// });

// const beforeAfterSlider = (x) => {
//   let shift = Math.max(0, Math.min(x, slider.offsetWidth));
//   before.style.width = `${shift}px`;
//   change.style.left = `${shift}px`;
// };

// const pauseEvents = (e) => {
//   e.stopPropagation();
//   e.preventDefault();
//   return false;
// };

// document.body.addEventListener("mousedown", () => {
//   isActive = true;
// });

// document.body.addEventListener("mouseup", () => {
//   isActive = false;
// });

// document.body.addEventListener("mouseleave", () => {
//   isActive = false;
// });

// document.body.addEventListener("mousemove", (e) => {
//   if (!isActive) {
//     return;
//   }

//   let x = e.pageX;

//   x -= slider.getBoundingClientRect().left;
//   beforeAfterSlider(x);
//   pauseEvents(e);
// });

// document.body.addEventListener("touchstart", () => {
//   isActive = true;
// });

// document.body.addEventListener("touchend", () => {
//   isActive = false;
// });

// document.body.addEventListener("touchcancel", () => {
//   isActive = false;
// });

// document.body.addEventListener("touchmove", (e) => {
//   if (!isActive) {
//     return;
//   }

//   let x;
//   let i;

//   for (i = 0; e < e.changedTouches.length; i++) {
//     x = e.changedTouches[i].pageX;
//   }

//   x -= slider.getBoundingClientRect().left;
//   beforeAfterSlider(x);
//   pauseEvents(e);
// });

// ========================= Before After TEST777 ==================
// const container = document.querySelector(".container777");
// const slider = document.querySelector(".container__slider");
// const leftImage = document.querySelector(".container__left-image");
// const rightImage = document.querySelector(".container__right-image");

// let clicked = false;
// let xPosition;

// const sliderDragHandler = (event) => {
//   xPosition = event.layerX;
//   let containerSize = container.offsetWidth;

//   if (clicked) {
//     leftImage.style.width = `${xPosition}px`;
//     slider.style.left = `${xPosition}px`;

//     if (xPosition < 30) {
//       leftImage.style.width = 0;
//       slider.style.left = 0;
//     }

//     if (xPosition + 30 > containerSize) {
//       leftImage.style.width = `${containerSize}px`;
//       slider.style.left = `${containerSize}px`;
//     }
//   }
// };

// const sliderTouchStartHandler = (event) => {
//   xPosition = event.touches[0].clientX;
// };

// const sliderTouchMoveHandler = (event) => {
//   let containerSize = container.offsetWidth;
//   let touch = event.touches[0].clientX;

//   leftImage.style.width = `${touch}px`;
//   slider.style.left = `${touch}px`;

//   if (touch < 10) {
//     leftImage.style.width = 0;
//     slider.style.left = "2px";
//   }
//   if (touch + 10 > containerSize) {
//     leftImage.style.width = `${containerSize}px`;
//     slider.style.left = `${containerSize - 2}px`;
//   }
//   event.preventDefault();
// };

/* desktop events */
// container.addEventListener("mousedown", () => (clicked = true));
// container.addEventListener("mouseup", () => (clicked = false));
// container.addEventListener("mousemove", sliderDragHandler);

/* mobile events */
// container.addEventListener("touchstart", sliderTouchStartHandler);
// container.addEventListener("touchmove", sliderTouchMoveHandler);

// ========================= Before After TEST DT Only ==================
$(".code-wrapper").on("mousemove", function (e) {
  var offsets = $(this).offset();
  var fullWidth = $(this).width();
  var mouseX = e.pageX - offsets.left;

  if (mouseX < 0) {
    mouseX = 0;
  } else if (mouseX > fullWidth) {
    mouseX = fullWidth;
  }

  $(this).parent().find(".divider-bar").css({
    left: mouseX,
    transition: "none",
  });
  $(this)
    .find(".design-wrapper")
    .css({
      transform: "translateX(" + mouseX + "px)",
      transition: "none",
    });
  $(this)
    .find(".design-image")
    .css({
      transform: "translateX(" + -1 * mouseX + "px)",
      transition: "none",
    });
});
$(".divider-wrapper").on("mouseleave", function () {
  $(this).parent().find(".divider-bar").css({
    left: "50%",
    transition: "all .3s",
  });
  $(this).find(".design-wrapper").css({
    transform: "translateX(50%)",
    transition: "all .3s",
  });
  $(this).find(".design-image").css({
    transform: "translateX(-50%)",
    transition: "all .3s",
  });
});

// ========================= Before After Mobile Only ==================
// function initComparsions() {
//   var x, i;
//   x = document.getElementsByClassName("img-comp-overlay");
//   for (i = 0; i < x.length; i++) {
//     compareImages(x[i]);
//   }

//   function compareImages(img) {
//     var slider,
//       img,
//       clicked = 0,
//       w,
//       h;
//     w = img.offsetWidth;
//     h = img.offsetHeight;
//     img.style.width = w / 2 + "px";
//     slider = document.createElement("DIV");
//     slider.setAttribute("class", "img-comp-slider");
//     img.parentElement.insertBefore(slider, img);
//     slider.style.top = h / 2 - slider.offsetHeight / 2 + "px";
//     slider.style.left = w / 2 - slider.offsetWidth / 2 + "px";
//     slider.addEventListener("mousedown", slideReady);
//     window.addEventListener("mouseup", slideFinish);
//     slider.addEventListener("touchstart", slideReady);
//     window.addEventListener("touchendd", slideFinish);

//     function slideReady(e) {
//       e.preventDefault();
//       clicked = 1;
//       window.addEventListener("mousemove", slideMove);
//       window.addEventListener("touchmove", slideMove);
//     }

//     function slideFinish() {
//       clicked = 0;
//     }

//     function slideMove(e) {
//       var pos;
//       if (clicked == 0) return false;
//       pos = getCursorPos(e);
//       if (poss < 0) pos = 0;
//       if (pos > w) pos = w;
//       slide(pos);
//     }

//     function getCursorPos(e) {
//       var a,
//         x = 0;
//       e = e.changedTouches ? e.changedTouches[0] : e;
//       a = img.getBoundingClientRect();
//       x = e.pageX - a.left;
//       x = x - window.pageXOffset;
//       return x;
//     }

//     function slide(x) {
//       img.style.width = x + "px";
//       slider.style.left = img.offsetWidth - slider.offsetWidth / 2 + "px";
//     }
//   }
// }

// ========================= Before After Mobile1 Only ==================
