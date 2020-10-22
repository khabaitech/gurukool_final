
!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 1;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });


  // Activate smooth scroll on page load with hash links in the url
 /* $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });*/

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }
  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Stick the header at top on scroll
 /* $("#header").sticky({
    topSpacing: 0,
    zIndex: '50'
  });*/

  // Intro carousel
  var heroCarousel = $("#heroCarousel");
  var heroCarouselIndicators = $("#hero-carousel-indicators");
  heroCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>"):
      heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");
  });

  heroCarousel.on('slid.bs.carousel', function(e) {
    $(this).find('.carousel-content ').addClass('animate__animated animate__fadeInDown');
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Skills section
  /*$('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });*/

})(jQuery);

// Read more
function read() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  var know_more = document.getElementById("know_more");

  if(dots.style.display === "none"){
    dots.style.display = "inline";
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
    know_more.style.display = "block";
    
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
    know_more.style.display = "none";
  }
}
//Slider Js

function scroll_to(clicked_link, nav_height) {
  var element_class = clicked_link.attr('href').replace('#', '.');
  var scroll_to = 0;
  if(element_class != '.top-content') {
    element_class += '-container';
    scroll_to = $(element_class).offset().top - nav_height;
  }
  if($(window).scrollTop() != scroll_to) {
    $('html, body').stop().animate({scrollTop: scroll_to}, 1000);
  }
}

jQuery(document).ready(function() {
  
  /*
      Navigation
  */
  $('a.scroll-link').on('click', function(e) {
    e.preventDefault();
    scroll_to($(this), $('nav').outerHeight());
  });
  
    /*
      
    /*
      Wow
  */
  new WOW().init();
  
  /*
      Carousel
  */
  $('#carousel-example').on('slide.bs.carousel', function (e) {

      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 4;
      var totalItems = $('.carousel-item').length;
      
      if (idx >= totalItems-(itemsPerSlide-1)) {
          var it = itemsPerSlide - (totalItems - idx);
          for (var i=0; i<it; i++) {
              // append slides to end
              if (e.direction=="left") {
                  $('.carousel-item').eq(i).appendTo('.carousel-inner');
              }
              else {
                  $('.carousel-item').eq(0).appendTo('.carousel-inner');
              }
          }
      }
  });
  
});

//////student dashboard js
function next(){

  var x = document.getElementById("step1")

    x.style.display="none";

  var y = document.getElementById("step2")

    y.style.display = "none";
 
  var z = document.getElementById("step3")

    z.style.display ="block";

  var a = document.getElementById("step4")

    a.style.display="block";      

}
function previous(){

  var x = document.getElementById("step1")

    x.style.display="block";

  var y = document.getElementById("step2")

    y.style.display = "block";

  var z = document.getElementById("step3")

    z.style.display ="none";

  var a = document.getElementById("step4")

    a.style.display="none";     

}

///teacher registration
 function next1(){
        var a = document.getElementById("step1")
        a.style.display="none";

        var b = document.getElementById("step2")
        b.style.display = "block";
      }
      function previous1(){
        var x = document.getElementById("step1")
        x.style.display = "block";

        var step2 = document.getElementById("step2")
        step2.style.display = "none";

        var step3 = document.getElementById("step3")
        step3.style.display = "none";
      }
      function next2(){
        var y = document.getElementById("step3")
        y.style.display="block";

        var step2 = document.getElementById("step2")
        step2.style.display = "none";
      }
      function previous2(){
        var step2 = document.getElementById("step2")
        step2.style.display="block";

        var step3 = document.getElementById("step3")
        step3.style.display = "none";
      }

  ///faq js
  $(document).ready(function(){
    $("#accordion .card .card-link").click(function(){
    if($(this).find("i.fa").hasClass(".fa-minus"))
    {
    $(this).find("i.fa").removeClass("fa-minus");
    $(this).find("i.fa").addClass("fa-plus");
    }
    else if($(this).find("i.fa").hasClass("fa-plus"))
    {
    $(this).find("i.fa").removeClass("fa-plus");
    $(this).find("i.fa").addClass("fa-minus");
    }
    $(this).parents(".card").siblings().find(".card-header .card-link i.fa").removeClass("fa-minus");
    $(this).parents(".card").siblings().find(".card-header .card-link i.fa").addClass("fa-plus");
    });
    });


    //function for edit profile

    function editbasic(){
      $('.edit-profile-basic').toggle();
    }
    function editlocation(){
      $('.edit-profile-location').toggle();
    }
