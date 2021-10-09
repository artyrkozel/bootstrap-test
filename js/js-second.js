
jQuery("document").ready(function($){
 
	var nav = $('.wr-header');
  var replacer = $('.header-replacer');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 716) {
      nav.addClass("f-nav");
      replacer.addClass('visible')
		} else {
      nav.removeClass("f-nav");
      replacer.removeClass('visible');
		}
	});
 
});
$('.header_burger').click(function(event) {
  event.preventDefault();
  $('.header .nav-bar').toggleClass('show');
})
if( $(window).width() < 1050 ){
  $('.header .nav-bar li a').click(function(event) {
    event.preventDefault();
    $('.header .nav-bar').toggleClass('show');
  });
}
  $(window).scroll(function(){
    $('.header .nav-bar').removeClass('show');
    })



$(document).ready(function() {
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});
$('.header_burger').click(function(event) {
  $('.header_burger, .nav-bar').toggleClass('active');
});

$('.slider-single').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  adaptiveHeight: true,
  infinite: false,
 useTransform: true,
  speed: 400,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-nav')
  .on('init', function(event, slick) {
    $('.slider-nav .slick-slide.slick-current').addClass('is-active');
  })
  .slick({
    slidesToShow: 7,
    slidesToScroll: 7,
    dots: false,
    focusOnSelect: false,
    infinite: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      }
    }, {
      breakpoint: 640,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
     }
    }, {
      breakpoint: 420,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
   }
    }]
  });
  $('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
 });

 $('.slider-nav')
    .on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        dots: false,
        focusOnSelect: false,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
        }
        }]
    });

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

//An image to overlay
$overlay.append($image);

//Add overlay
$("body").append($overlay);

  //click the image and a scaled version of the full size image will appear
  $("#photo-gallery a").click( function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");

    //update overlay with the image linked in the link
    $image.attr("src", imageLocation);

    //show the overlay
    $overlay.show();
  } );

  $("#overlay").click(function() {
    $( "#overlay" ).hide();
  });