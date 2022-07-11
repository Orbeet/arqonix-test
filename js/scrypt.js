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

// ========================= Before After2 ==================
const slider2 = document.querySelector(".slider2 input");
const img4 = document.querySelector(".images .img-4");
const dragLine2 = document.querySelector(".slider2 .drag-line");
slider2.oninput = () => {
  let slider2Val = slider2.value;
  dragLine2.style.left = slider2Val + "%";
  img4.style.width = slider2Val + "%";
};

// ========================= Before After3 ==================
const slider3 = document.querySelector(".slider3 input");
const img6 = document.querySelector(".images .img-6");
const dragLine3 = document.querySelector(".slider3 .drag-line");
slider3.oninput = () => {
  let slider3Val = slider3.value;
  dragLine3.style.left = slider3Val + "%";
  img6.style.width = slider3Val + "%";
};

// ========================= Before After4 ==================
const slider4 = document.querySelector(".slider4 input");
const img8 = document.querySelector(".images .img-8");
const dragLine4 = document.querySelector(".slider4 .drag-line");
slider4.oninput = () => {
  let slider4Val = slider4.value;
  dragLine4.style.left = slider4Val + "%";
  img8.style.width = slider4Val + "%";
};

// ========================= Before After5 ==================
const slider5 = document.querySelector(".slider5 input");
const img10 = document.querySelector(".images .img-10");
const dragLine5 = document.querySelector(".slider5 .drag-line");
slider5.oninput = () => {
  let slider5Val = slider5.value;
  dragLine5.style.left = slider5Val + "%";
  img10.style.width = slider5Val + "%";
};

// ========================= Before After6 ==================
const slider6 = document.querySelector(".slider6 input");
const img12 = document.querySelector(".images .img-12");
const dragLine6 = document.querySelector(".slider6 .drag-line");
slider6.oninput = () => {
  let slider6Val = slider6.value;
  dragLine6.style.left = slider6Val + "%";
  img12.style.width = slider6Val + "%";
};

// ========================= Before After7 ==================
const slider7 = document.querySelector(".slider7 input");
const img14 = document.querySelector(".images .img-14");
const dragLine7 = document.querySelector(".slider7 .drag-line");
slider7.oninput = () => {
  let slider7Val = slider7.value;
  dragLine7.style.left = slider7Val + "%";
  img14.style.width = slider7Val + "%";
};

// ========================= Before After8 ==================
const slider8 = document.querySelector(".slider8 input");
const img16 = document.querySelector(".images .img-16");
const dragLine8 = document.querySelector(".slider8 .drag-line");
slider8.oninput = () => {
  let slider8Val = slider8.value;
  dragLine8.style.left = slider8Val + "%";
  img16.style.width = slider8Val + "%";
};

// ========================= Before After9 ==================
const slider9 = document.querySelector(".slider9 input");
const img18 = document.querySelector(".images .img-18");
const dragLine9 = document.querySelector(".slider9 .drag-line");
slider9.oninput = () => {
  let slider9Val = slider9.value;
  dragLine9.style.left = slider9Val + "%";
  img18.style.width = slider9Val + "%";
};

// ========================= Before After10 ==================
const slider10 = document.querySelector(".slider10 input");
const img20 = document.querySelector(".images .img-20");
const dragLine10 = document.querySelector(".slider10 .drag-line");
slider10.oninput = () => {
  let slider10Val = slider10.value;
  dragLine10.style.left = slider10Val + "%";
  img20.style.width = slider10Val + "%";
};

// ========================= Before After11 ==================
const slider11 = document.querySelector(".slider11 input");
const img22 = document.querySelector(".images .img-22");
const dragLine11 = document.querySelector(".slider11 .drag-line");
slider11.oninput = () => {
  let slider11Val = slider11.value;
  dragLine11.style.left = slider11Val + "%";
  img22.style.width = slider11Val + "%";
};

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
