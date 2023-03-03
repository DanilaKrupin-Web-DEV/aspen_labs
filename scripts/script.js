/*
░░░░░░░░░░░░░░░░░░░░░░░░░░░░
MOBILE NAV
░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
var openMobileNav = document.querySelector(".open-mobile-nav-button");
var navigationElements = document.querySelector(".navigation__elements");

openMobileNav.addEventListener("click", function () {
  header.classList.toggle("header--open");
  navigationElements.classList.toggle("navigation__elements--show");
});
/*
*/

/*
░░░░░░░░░░░░░░░░░░░░░░░░░░░░
SHOW/HIDE NAV ON SCROLL
░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
// Window width conditions
if (window.innerWidth > 800) {
  var lastScrollTop = 0;
  window.addEventListener(
    "scroll",
    function () {
      if (window.pageYOffset > 200) {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
          $(".nav-wrapper").css("top", "-74px");
        } else if (($(document).outerHeight(true) - $(window).height()) * 0.95 > window.pageYOffset) {
          $(".nav-wrapper").css("top", "0");
          $(".nav-wrapper").fadeIn(300);
        }
        lastScrollTop = st;
      }
    },
    false
  );
}
/*
*/

/*
░░░░░░░░░░░░░░░░░░░░░░░░░░░░
CONTENT REVEAL ANIMATION
░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");
for (let elm of elements) {
  observer.observe(elm);
}

function onEntry1(entry1) {
  entry1.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show_slow");
    }
  });
}
let options1 = { threshold: [0.5] };
let observer1 = new IntersectionObserver(onEntry1, options1);
let elements1 = document.querySelectorAll(".element-animation_slow");
for (let elm1 of elements1) {
  observer1.observe(elm1);
}

function onEntry2(entry2) {
  entry2.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show_slower");
    }
  });
}
let options2 = { threshold: [0.5] };
let observer2 = new IntersectionObserver(onEntry2, options2);
let elements2 = document.querySelectorAll(".element-animation_slower");
for (let elm2 of elements2) {
  observer2.observe(elm2);
}
/*
*/

/*
░░░░░░░░░░░░░░░░░░░░░░░░░░░░
SHOW YOUTUBE VIDEO
░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
const videoPlayIcon = document.querySelector(".preorder__play-icon");
const preorderVideoWrapper = document.querySelector(".karbonxs_video");
const youtubeVideo = document.querySelector(".preorder__youtube");

preorderVideoWrapper.addEventListener("click", function () {
  videoPlayIcon.classList.add("hidden");
  youtubeVideo.classList.remove("hidden");
  autoplay();
});

function autoplay() {
  // autoplay youtube video on click
  const youtubeUrlPattern = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
  [...document.querySelectorAll("iframe")]
    .filter((iframeEl) => {
      // filter to iframes loading youtube urls only
      return iframeEl.src.match(youtubeUrlPattern);
    })
    .forEach((iframeEl) => {
      const a = document.createElement("a");
      a.href = iframeEl.src;
      a.search = a.search || "?";
      a.search += "&autoplay=1&loop=1&rel=0";
      iframeEl.src = a.href;
    });
}
/*
*/

/*
░░░░░░░░░░░░░░░░░░░░░░░░░░░░
CONTACT PAGE FIXED IMAGE
░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
  };
}

let button = document.querySelector(".sumbit_btn_wrapper");

if (window.innerWidth > 800) {
  let height = getCoords(button).top;
  console.log(height);
  $(".fixed_img_wrapper").css("height", height + 190 + "px");
}
/*
*/