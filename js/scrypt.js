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
    // fade: true,
    // waitForAnimate: false,
    // centerMode: true,
    // variableWidth: true,
    // swipe: false,
    prevArrow:
      // "<img src='../assets/images/arrow-prev.svg' class='arrow__prev' alt='1'>",
      // "<img src='https://svgshare.com/i/6Ei.svg' class='arrow__prev' alt='1'>",
      "<div class='arrow__prev'><div class='arrow__prev-svg'></div></div>",
    nextArrow:
      "<div class='arrow__next'><div class='arrow__next-svg'></div></div>",
    // "<img src='../assets/images/arrow-next.svg' class='arrow__next' alt='2'>",
    // "<div class='arrow__next'><span><svg width='12' height='18' viewBox='0 0 12 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
    // <path d='M11.0921 8.33977L2.93459 0.808928C2.74592 0.634608 2.49406 0.538574 2.22551 0.538574C1.95695 0.538574 1.70509 0.634608 1.51642 0.808928L0.91568 1.3634C0.524773 1.72469 0.524773 2.31191 0.91568 2.67265L7.76571 8.9966L0.908079 15.3276C0.719407 15.5019 0.615234 15.7343 0.615234 15.9821C0.615234 16.2301 0.719407 16.4625 0.908079 16.637L1.50882 17.1913C1.69764 17.3656 1.94935 17.4617 2.21791 17.4617C2.48646 17.4617 2.73832 17.3656 2.92699 17.1913L11.0921 9.65357C11.2812 9.4787 11.3851 9.24522 11.3845 8.99702C11.3851 8.74785 11.2812 8.51451 11.0921 8.33977Z' fill='white'/>
    // </svg></span></div>",
  });

  // ---------- Creation2 slider -----------
  $(".creation2__slider").slick({
    // adaptiveHeight: true,
    slidesToShow: 1,
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
  // -----------------------------------------------------------------------
  // -----------------------------------------------------------------------
  // -----------------------------------------------------------------------

  // ---------- collection1Top__slider -----------
  $(".collection1Top__slider").slick({
    asNavFor: ".collection1Bottom__slider",
    // adaptiveHeight: true,
    slidesToShow: 1,
    // infinite: false,
    fade: true,
    // waitForAnimate: false,
    // centerMode: true,
    // variableWidth: true,
    draggable: false,
    // touchMove: false,
    swipe: false,
    arrows: false,
    //   prevArrow:
    //     "<div class='arrow__prev'><div class='arrow__prev-svg'></div></div>",
    //   nextArrow:
    //     "<div class='arrow__next'><div class='arrow__next-svg'></div></div>",
  });

  // ---------- collection1Top__sliderInside -----------
  $(".collection1Top__sliderInside").slick({
    // adaptiveHeight: true,
    // slidesToShow: 1,
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

  // ---------- collection1Top__slider TEST --------------------------------
  var $wrapperSlider = $(".collection1Top__sliderTEST"),
    wrapperSlider = $wrapperSlider[0];
  $(".collection1Top__sliderTEST").slick({
    // dots: true,
    // infinite: true,
    fade: true,
    centerMode: false,
    variableWidth: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // swipe: false,
    // draggable: false,
  });

  $(".collection1Top__sliderInsideTEST").on("mousedown", function () {
    wrapperSlider.slick.setOption({
      swipe: false,
    });
  });

  $(".collection1Top__sliderInsideTEST")
    .slick({
      dots: false,
      infinite: false,
      centerMode: false,
      variableWidth: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: false,
      prevArrow:
        "<div class='arrow__prev'><div class='arrow__prev-svg'></div></div>",
      nextArrow:
        "<div class='arrow__next'><div class='arrow__next-svg'></div></div>",
    })
    .on("afterChange", function (event, slick) {
      wrapperSlider.slick.setOption({
        swipe: true,
      });
    });
  // ---------- /End collection1Top__slider TEST ----------------------------

  // ---------- collection1Bottom__slider -----------
  $(".collection1Bottom__slider").slick({
    // adaptiveHeight: true,
    // slidesToShow: 1,
    // infinite: false,
    // fade: true,
    // waitForAnimate: false,
    centerMode: true,
    variableWidth: true,
    asNavFor: ".collection1Top__slider",
    // swipe: false,
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
