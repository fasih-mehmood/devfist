$(document).ready(function () {

  // handling services section and modal popups
  var serviceItem = $('.service-item');
  var serviceModal = $('.modal-content');
  serviceItem.click(function () {
    var element = $(this);
    var title = element.find('h4').text();
    serviceModal.find('#servicesModalLabel').text(title);
    var img = serviceModal.find('img');
    var rightContent = serviceModal.find('.right-content');
    var content = "";
    if (title.includes("Web")) {
      content = `<p>Increase your digital presence with a brand new website built From HTML/CSS.</br>All packages include a fully responsive design, which means your website will work perfectly over the cutting edge devices and screens sizes:</p> <ul class="pt-2"><li>Mobile First</li><li>No syntax errors</li><li>Basic SEO</li><li>Form integration</li><li>Cross-browser compatibility</li><li>Lazy Loading for images & Videos (fast loading speed)</li><li>Server Upload</li><li>Code & Images fully optimized</li></ul><p>We don't work with any page builder or premade templates.</p>`;
      img.attr('src', 'assets/img/web-project.webp');
      img.attr('alt', 'Frontend website');
    } else if (title.includes("App")) {
      content = `<p>Expand your business online or offline with custom made desktop and android applications.</br>We develop all sorts of applications ranging from chat applications to pos and management applications.</br>The pos system supports all features like:</p><ul class="pt-2"><li>Retail &amp; Whole Business Management</li><li>Stock &amp; Invetory Management System</li><li>Restaurant Management System</li><li>Multi service Center</li><li>Electronics, hardware &amp; Mobile shop</li><li>Super General store</li><li>Super Mart</li><li>Manage Single &amp; Variable products</li><li>Classify products</li><li>Stock alerts on low stock</li><li>Easily add purchases</li><li>Add purchase for different locations</li><li>Add discounts &amp; Taxes</li><li>Simplified interface for selling products</li><li>Add new customer</li></ul>`;
      img.attr('src', 'assets/img/pos-project.webp');
      img.attr('alt', 'Desktop Application');
    } else if (title.includes("Social")) {
      content = `<p>Online business is the future and for a successful future, effective Facebook advertising, and FB marketing is unavoidable as it has 2 Billion active users. </br>So if you are confused about</p><ul class="pt-2"><li>How to set up ads campaign</li><li>How to reach your target audience</li><li>How to increase brand awareness</li><li>How to boost your sales</li><li>How to increase traffic on your blog</li><li>How to generate maximum leads</li><li>How to set up a Facebook pixel</li></ul><p>then you are at the right place. </br>Our services include:</p><ul class="pt-2"><li>Complete Business Profile</li><li>Strategy for organic and inorganic FB marketing</li><li>Paid Facebook advertising</li><li>Account Management</li><li>Content Creation</li><li>Designing Custom Ads</li><li>Copy Writing</li><li>FB Ads compaign setup</li><li>Content Calendar</li><li>Pixel Setup</li><li>Ads campaign reports</li></ul>`;
      img.attr('src', 'assets/img/social-project.webp');
      img.attr('alt', 'Social media marketing');
    } else if (title.includes("Graphics")) {
      content = ``;
      img.attr('src', 'assets/img/web-project.webp');
      img.attr('alt', 'Frontend website');
    } else if (title.includes("Video")) {
      content = ``;
      img.attr('src', 'assets/img/web-project.webp');
      img.attr('alt', 'Frontend website');
    } else if (title.includes("IOT")) {
      content = ``;
      img.attr('src', 'assets/img/web-project.webp');
      img.attr('alt', 'Frontend website');
    } else if (title.includes("Data")) {
      content = ``;
      img.attr('src', 'assets/img/web-project.webp');
      img.attr('alt', 'Frontend website');
    }
    rightContent.html(content);
    $(".modal").modal("toggle");
  });

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

  function animateProgressBar() {
    $('.progress .progress-bar').css("width", function () {
      return $(this).attr("aria-valuenow") + "%";
    });
  }

  setTimeout(function () {
    $(".overlay").fadeOut("slow");

    if (window.scrollY > 815) {
      $(".go-top").addClass("show");
      if (window.scrollY < 1500)
        animateProgressBar();
    }
  }, 2300)

  AOS.init();
  var typed = new Typed('.element', {
    strings: ["Web Development", "App Development", "Social Media Marketing", "Graphics Designing", "Video Editing", "IOT Automation", "Data Entry"],
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

  // change header on scroll
  $(window).scroll(function () {
    if (window.scrollY > 815) {
      $(".go-top").addClass("show");
      if (window.scrollY < 1500)
        animateProgressBar();
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