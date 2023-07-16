//Popup video
function pupUpvideo() {
  const popUp = document.querySelector(".pop-up");

  document.querySelectorAll(".thumbnail").forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      const src = "https://www.youtube.com/embed/";
      const key = element.getAttribute("data-youtube");
      document.querySelector("iframe").src = src + key;
      popUp.style.display = "flex";
    });
  });

  document.querySelector(".pop-up .close").addEventListener("click", () => {
    popUp.style.display = "none";
    document.querySelector("iframe").src = "";
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      popUp.style.display = "none";
      document.querySelector("iframe").src = "";
    }
  });
  // document.addEventListener("click", (e) => {
  //   popUp.style.display = "none";
  // });
}
pupUpvideo();

// select language

handleLang = () => {
  const lang = document.querySelector(".language");
  const langItems = document.querySelectorAll(".language .language__option a");
  const langCurrent = document.querySelector(
    ".language .language__current span"
  );
  lang.addEventListener("click", (e) => {
    e.stopPropagation();
    lang.classList.toggle("active");
  });
  langItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      let langText = item.textContent;
      let langCurrentPrev = langCurrent.textContent;
      langCurrent.innerHTML = langText;
      item.innerHTML = langCurrentPrev;
    });
  });
  document.addEventListener("click", () => {
    lang.classList.remove("active");
  });
};
handleLang();

//nav mobile
function menuMobileHandle() {
  const btnMenu = document.querySelector(".btnMenu");
  const nav = document.querySelector(".nav");
  btnMenu.addEventListener("click", function () {
    this.classList.toggle("clicked");
    nav.classList.toggle("active");
  });
  //hide nav
  function hideNav() {
    btnMenu.classList.remove("clicked");
    nav.classList.remove("active");
  }

  //resize wd
  window.addEventListener("resize", function () {
    let wWindow = window.innerWidth;
    if (wWindow > 992) {
      hideNav();
    }
  });
}
menuMobileHandle();

//new tabs
function handleTabNew() {
  let tabs = document.querySelectorAll(".news__btn-item");
  let listNews = document.querySelectorAll(".news__card");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (tab) {
        tab.classList.remove("active");
      });
      this.classList.add("active");

      listNews.forEach(function (newsList) {
        newsList.classList.remove("active");
        console.log(listNews);
      });
      let id = this.getAttribute("data-tab");
      document.querySelector(".news__card-" + id).classList.add("active");
    });
  });
}
handleTabNew();

//sroll header
function changeBgHeader() {
  const header = document.querySelector(".header");
  scrolY = window.scrollY;
  if (scrolY > 870) {
    header.classList.add("--black-color");
  } else {
    header.classList.remove("--black-color");
  }
}
changeBgHeader();
window.addEventListener("scroll", changeBgHeader);

//Bacltotop
function backtotop() {
  let backToTop = document.querySelector(".back-to-top");
  let heightSection = document.querySelector(".news");
  scrolY = window.scrollY;

  if (scrolY > 900) {
    backToTop.classList.add("active");
  } else {
    backToTop.classList.remove("active");
  }
  if (scrolY > heightSection.offsetTop) {
    backToTop.classList.remove("active");
  }
}

backtotop();
window.addEventListener("scroll", backtotop);
//SCROLL to ACTIVE

function activeMenu() {
  let menus = document.querySelectorAll(".header .menu li a");
  let heightHeader = document.querySelector(".header").offsetHeight;
  let sections = [];
  function removeActiceMenu() {
    menus.forEach(function (menuElement, menuIndex) {
      menuElement.classList.remove("active");
    });
  }
  menus.forEach(function (element, index) {
    let className = element.getAttribute("data-section");
    let section = document.querySelector(className);
    let positonSection = section.offsetTop;
    sections.push(section);
    element.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: section.offsetTop - heightHeader + 1,
      });
      removeActiceMenu();
      element.classList.add("active");
    });
  });
  window.addEventListener("scroll", function (e) {
    let positionScroll = this.window.pageYOffset;
    sections.forEach(function (section, index) {
      if (
        positionScroll > section.offsetTop - heightHeader &&
        positionScroll < section.offsetTop + section.offsetHeight - heightHeader
      ) {
        removeActiceMenu();
        menus[index].classList.add("active");
      } else {
        menus[index].classList.remove("active");
      }
    });
  });
}
activeMenu();

// SLIDER

// let listItemSlider = document.querySelectorAll(".slider__item");
// let number = document.querySelector(".slider__bottom-paging .number");
// let dotted = document.querySelectorAll(".slider__bottom-paging .dotted li");
// let currentSlider = 0;
// listItemSlider.forEach(function (itemSlider, index) {
//   if (itemSlider.classList.contains("active")) {
//     currentSlider = index;
//   }
// });

// function goTo(index) {
//   listItemSlider[currentSlider].classList.remove("active");
//   listItemSlider[index].classList.add("active");
//   dotted[currentSlider].classList.remove("is-seclected");
//   dotted[index].classList.add("is-seclected");
//   currentSlider = index;
//   number.innerHTML = (currentSlider + 1).toString().padStart(2, "0");
// }
// dotted.forEach(function (li, index) {
//   li.addEventListener("click", function () {
//     goTo(index);
//   });
// });
// document
//   .querySelector(".btn-main-slider.--next")
//   .addEventListener("click", function () {
//     if (currentSlider < listItemSlider.length - 1) {
//       goTo(currentSlider + 1);
//       // listItemSlider[currentSlider].classList.remove("active");
//       // listItemSlider[currentSlider + 1].classList.add("active");
//       // currentSlider++;
//     } else {
//       goTo(0);
//     }
//   });
// document
//   .querySelector(".btn-main-slider.--prev")
//   .addEventListener("click", function () {
//     if (currentSlider > 0) {
//       goTo(currentSlider - 1);
//       // listItemSlider[currentSlider].classList.remove("active");
//       // listItemSlider[currentSlider - 1].classList.add("active");
//       // currentSlider--;
//     } else {
//       goTo(listItemSlider.length - 1);
//       // listItemSlider[currentSlider].classList.remove("active");
//       // listItemSlider[listItemSlider.length - 1].classList.add("active");
//       // currentSlider = listItemSlider.length - 1;
//     }
//   });

function handleSliderHero() {
  //khởi tạo slider
  var slider = document.querySelector(".slider__item-wrap");
  var flktySlider = new Flickity(slider, {
    // options
    cellAlign: "left",
    contain: true,
    draggable: ">1",
    prevNextButtons: false,
    wrapAround: true,
    // pageDots: false,
    on: {
      ready: function () {
        console.log("Flickity is ready");
        handleDotsSlider();
      },
      change: function (index) {
        console.log("Slide changed to" + index);
        handlePagingSlider(index);
      },
    },
  });
  let btnPrev = document.querySelector(".slider__bottom-controll .--prev");
  let btnNext = document.querySelector(".slider__bottom-controll .--next");

  btnPrev.addEventListener("click", function () {
    flktySlider.previous(true);
  });
  btnNext.addEventListener("click", function () {
    flktySlider.next(true);
  });

  function handleDotsSlider() {
    let dotsSlider = document.querySelector(".flickity-page-dots");
    let dotsSliderBottom = document.querySelector(".slider__bottom-paging");
    dotsSliderBottom.appendChild(dotsSlider);
  }

  let totalNumer = document.querySelectorAll(".slider__item").length;
  function handlePagingSlider(index) {
    let number = document.querySelector(".number");
    number.innerHTML =
      "<span>" +
      (index + 1).toString().padStart(2, "0 ") +
      "</span>/" +
      totalNumer.toString().padStart(2, "0");
  }
}

handleSliderHero();

//Fancybox

Fancybox.bind("[data-fancybox]", {
  infinite: false,
  keyboard: {
    Escape: "close",
    Delete: "close",
    Backspace: "close",
    PageUp: "next",
    PageDown: "prev",
    ArrowUp: "prev",
    ArrowDown: "next",
    ArrowRight: "next",
    ArrowLeft: "prev",
  },
  on: {
    ready: (fancybox) => {
      console.log(`fancybox #${fancybox.id} is ready!`);
    },
  },
  caption: function (fancybox, carousel, slide) {},
  wheel: (instance, event) => "slide",
});

// Fancybox.bind('[data-fancybox="gallery"]', {
//   caption: (fancybox, slide) => {
//     const caption = slide.caption || "";

//     return `${slide.index + 1} / ${
//       fancybox.carousel?.slides.length
//     } <br /> ${caption}`;
//   },
// });

// Slider photo
function handlePhotoSlider() {
  let slider = document.querySelector(".carousel__img");
  let progressBar = document.querySelector(".carousel__line-yl");
  let flktySlider = new Flickity(slider, {
    cellAlign: "left",
    contain: true,
    draggable: ">1",
    prevNextButtons: false,
    wrapAround: true,
    pageDots: false,
    freeScroll: true,
    lazyLoad: 4,
    on: {
      // ready: function () {
      //   console.log("Flickity is ready");
      //   handleDotsSlider();
      // },
      // change: function (index) {
      //   console.log("Slide changed to" + index);
      //   handlePagingSlider(index);
      // },
      scroll: function (progress) {
        let progressWidth = Math.max(0, Math.min(1, progress));
        progressBar.style.width = progressWidth * 100 + "%";
      },
    },
  });
}
window.addEventListener("load", function () {
  handlePhotoSlider();
});

//loading
let load = document.querySelector(".loading");
let percent = document.querySelector(".percent");
let progress = document.querySelector(".progress");

let count = 4;
let per = 16;
let loading = setInterval(animate, 50);
function animate() {
  if ((count == 100) & (per == 160)) {
    percent.classList.add("--animate");
    setTimeout(function () {
      load.classList.add("--hide");
    }, 700);
    clearInterval(loading);
  } else {
    per = per + 3;
    count = count + 2;
    progress.style.width = per + "px";
    percent.textContent = count + "%";
  }
}
animate();

function handleScrollSection() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.querySelector(".section__line-yl").style.width = scrolled + "%";
}

window.onscroll = function () {
  handleScrollSection();
};
