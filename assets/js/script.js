$(document).ready(function () {
  function animateSgv(id, delay, delayIncrement) {
    const logo = document.getElementById(id);
    logo.style.visibility = 'visible';
    const logoPaths = document.querySelectorAll(`#${id} path`);
    delay = delay;
    for (let i = 0; i < logoPaths.length; i++) {
      logoPaths[i].style.strokeDasharray = logoPaths[i].getTotalLength();
      logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
      logoPaths[i].style.animation = `line-anim 2s ease forwards ${delay}s`;
      delay += delayIncrement;
    }
    logo.style.animation = `fill 0.5s ease forwards ${delay}s`;
  }
  // Set the id of SVG, delay time in seconds to start animation and delay between each animation
  animateSgv('logo', 0, 0.3);
  setTimeout(function () {
    $(".overlay").fadeOut("slow");
  }, 2300)

  AOS.init();

    var typed = new Typed('.element', {
      strings: ["Web Development", "App Development", "Social Media Marketing", "Graphics Design", "Video Editing", "IOT Automation", "Data Entry"],
      typeSpeed: 50,
      loop: true,
      backDelay: 1200,
      backSpeed: 40,
    });

  // open navigation
  $(".btn-menu").click(e => {
    $("nav ul").toggleClass("hidden");
  });

  //scroll to top
  $(".go-top").click(e => {
    $("html, body").animate({
      scrollTop: 0
    }, '500');
  });

  if (window.innerWidth > 1024 && window.scrollY > 102) {
    $(".site-header").addClass("fixed float-header");
  }

  if (window.scrollY > 815) {
    $(".go-top").addClass("show");
  }

  // change header on scroll
  $(window).scroll(function () {
    if (window.scrollY > 815) {
      $(".go-top").addClass("show");
    } else {
      $(".go-top").removeClass("show");
    }

    if (window.innerWidth > 1024) {
      if (window.scrollY <= 102 && window.scrollY != 0) {
        $('.site-header').removeClass("float-header");
        $('.site-header').addClass("fixed");
      } else if (window.scrollY > 102 && window.scrollY != 0) {
        $('.site-header').addClass("float-header");
      } else {
        $('.site-header').removeClass("fixed float-header");
      }
    }
  });

  /* Navigation scroll */
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ?
          target :
          $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate({
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  var $carousel = $(".main-carousel");
  $carousel.flickity({
    // options
    cellAlign: 'center',
    contain: true
  });

  var $changeSlide = $("#package-slides a");
  $changeSlide.click(function () {
    var selector = $(this).attr("data-toggle");
    $(this).parent().parent().find("a").removeClass("active");
    $(this).addClass("active");
    $carousel.flickity('select', selector);
  });

  $carousel.on('change.flickity', function (event, index) {
    $changeSlide[index].click();
  });

});