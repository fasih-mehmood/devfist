$(document).ready(function () {
  // open navigation
  $(".btn-menu").click(e => {
    $("nav ul").toggleClass("hidden");
  });

  //scroll to top
  $(".go-top").click(e => {
    $("body").animate({scrollTop:0}, '500');
  });

  if(window.innerWidth > 1024 && window.scrollY > 102) {
    $(".site-header").addClass("fixed float-header");
  }

  if(window.scrollY > 815) {
    $(".go-top").addClass("show");
  }

  // change header on scroll
  $(window).scroll(function () {
    if(window.scrollY > 815) {
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

  // initialize isotope
  var $flistProject = $("#filter-project-items");
  var $filterProject = $("#project-filters");
  // Run isotope
  $flistProject.isotope({
    filter: "*",
    itemSelector: '.filter-project-item',
    layout: "masonry"
  });
  $filterProject.find("a").click(function() {
    var selector = $(this).attr("data-filter");
    $(this).parent().parent().find("a").removeClass("active");
    $(this).addClass("active");
    $flistProject.isotope({
      filter: selector,
      animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
      },
    });
    return false;
    });

    $carousel = $(".main-carousel");
    $carousel.flickity({
      // options
      cellAlign: 'center',
      contain: true
    });

    $changeSlide = $("#package-slides a");
    $changeSlide.click(function() {
      var selector = $(this).attr("data-toggle");
      $(this).parent().parent().find("a").removeClass("active");
      $(this).addClass("active");
      $carousel.flickity( 'select', selector );
    });

    $carousel.on('change.flickity', function( event, index ) {
      $changeSlide[index].click();
    });

});
