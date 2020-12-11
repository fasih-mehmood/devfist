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
  $(".btn-menu").click(e => {
    $("nav ul").toggleClass("hidden");
  })
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