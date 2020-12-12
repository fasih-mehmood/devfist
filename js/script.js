$.fn.isOnScreen = function () {
  var win = $(window);
  var viewport = {
    top: win.scrollTop(),
    left: win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();

  var bounds = this.offset();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();

  return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

$(document).ready(function () {
  // open navigation
  $(".btn-menu").click(e => {
    $("nav ul").toggleClass("hidden");
  });

  if(window.innerWidth > 1024 && window.scrollY > 102) {
    $(".site-header").addClass("fixed float-header");
  }
  // change header on scroll
  $(window).scroll(function () {
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

  // initialize isotop
  var $flist = $("#filter-items");
  var $filter = $("#filters")
  // Run Isotope
  $flist.isotope({
    filter: "*",
    itemSelector: '.filter-item'
  })
  $filter.find("a").click(function() {
    var selector = $(this).attr("data-filter");
    $(this).parent().parent().find("a").removeClass("active");
    $(this).addClass("active");
    $flist.isotope({
      filter: selector,
      animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
      },
    });
    return false;
    });
});


// $(document).on('scroll', function () {
//   $(".counter-count").each(function () {
//     $(this).prop('Counter', 0).animate({
//       Counter: $(this).text()
//     }, {
//       duration: 2000,
//       easing: 'swing',
//       step: function (now) {
//         $(this).text(Math.ceil(now));
//       }
//     });
//     var counter = 1;
//   }).isOnScreen();
// })

// $('.counter-count').each(function () {
//   $(this).prop('Counter', 0).animate({
//     Counter: $(this).text()
//   }, {
//     duration: 2000,
//     easing: 'swing',
//     step: function (now) {
//       $(this).text(Math.ceil(now));
//     }
//   });
// });