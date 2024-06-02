// IMPORT FILE
$(function () {
  $("#header-placeholder").load("imports/header.html");
  $("#footer-placehoder").load("imports/footer.html");
});



// SCROLL EVENT
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("header").addClass("sticky");
      document.querySelector(".backtotop").style.opacity = "1";
    } else {
      $("header").removeClass("sticky");

      document.querySelector(".backtotop").style.opacity = "0"
    }
  });
  $(".backtotop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },2000
    );
  });
});

// SLIDER
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("bn-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
}
function btnSlide(n) {
  showSlides((slideIndex += n));
}

// CUSTOMER
$(".single-item").slick({
  autoplay: true,
  autoplaySpeed: 3500,
  dots: true,
  pauseOnHover: false,
  pauseOnFocus: false,
});
