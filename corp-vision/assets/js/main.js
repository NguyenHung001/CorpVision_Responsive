// IMPORT FILE
$(function () {
  $("#header-placeholder").load("components/header.html");
  $("#footer-placehoder").load("components/footer.html");
});

// SCROLL EVENT
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("header").addClass("sticky");
      document.querySelector(".backtotop").style.opacity = "1";
    } else {
      $("header").removeClass("sticky");

      document.querySelector(".backtotop").style.opacity = "0";
    }
  });
  $(".backtotop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });
});

// SLIDER
let slideIndex = 1;
let slideInterval = setInterval(() => showSlides(slideIndex += 1), 5000); 

showSlides(slideIndex);

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("bn-item");

    if (n > slides.length) { 
        slideIndex = 1;
    }
    if (n < 1) { 
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function btnSlide(n) {
    clearInterval(slideInterval); 
    slideIndex += n;
    showSlides(slideIndex);
    slideInterval = setInterval(() => showSlides(slideIndex += 1), 5000); 
}

// CUSTOMER
$(".single-item").slick({
  autoplay: true,
  autoplaySpeed: 3500,
  dots: true,
  pauseOnHover: false,
  pauseOnFocus: false,
});

// EVENT SCROLL
const showContentOnScroll = () => {
  const elements = document.querySelectorAll(".show-content");

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top >= 0 && rect.top <= windowHeight) {
      element.classList.add("show");
    }
  });
};
window.addEventListener("scroll", showContentOnScroll);
