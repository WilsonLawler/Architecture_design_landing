// --------------------------------------------------------------toggle button

// This code dosen't works on Firefox and IE and works on other browesers.
$(document).ready(function() {
  $(".animated-icon4").click(function() {
    $(this).toggleClass("open");
  });
});

// Works everywhere
$(document).ready(function() {
  // Hide/show animation hamburger function
  $("navbar-toggler").on("click", function() {
    // Take this line to third hamburger animation
    $(".animated-icon4").toggleClass("open");
  });
});

// --------------------------------------------scroll-effect;

var waypoint = new Waypoint({
  element: document.getElementById("scrollPoint"),
  handler: function(direction) {
    if (direction == "down") {
      $(".navbar").addClass("bg-white navbar-light navbar-shadow");
      $(".navbar").removeClass("navbar-dark");
      $(".link-to-top").show();
      console.log("Scrolled to waypoint!");
    } else {
      $(".navbar").removeClass("bg-white navbar-light navbar-shadow");
      $(".navbar").addClass("navbar-dark");
      $(".link-to-top").hide();
      console.log("up");
    }
  },
  // context: "#scrollContext1",
  offset: "20%"
});

var waypoint2 = new Waypoint({
  element: document.getElementById("scrollPoint2"),
  handler: function(direction) {
    if (direction == "down") {
      $(".navbar").hide();
    } else if (direction == "up") {
      $(".navbar").show();
    }
  },

  offset: "10%"
});

// ------------------------------------------gallery-fadeUp-effect

$(function() {
  $(".gcontainer").mouseover(function() {
    $(".floatbox").addClass("fadeInUp animated");
  });
  $(".gcontainer").mouseout(function() {
    $(".floatbox").removeClass("fadeInUp animated");
  });
});

// ----------------------carousel

$(".main-carousel").flickity({
  // options
  cellAlign: "left",
  contain: true,
  prevNextButtons: false,
  autoPlay: true,
  wrapAround: true
});

// ----------------------------SMOOTH SCROLL

$(".link-to-top").on("click", function(e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top
    },
    500,
    "linear"
  );
});

$(".link-to-context1").on("click", function(e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top
    },
    500,
    "linear"
  );
});
