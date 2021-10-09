
jQuery("document").ready(function($){
 
	var nav = $('header');
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



$('.about-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplaySpeed: 300,
  
  responsive: [
    {
      breakpoint: 1050,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    } },
    {
      breakpoint: 780,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 1
      } },
      {
        breakpoint: 500,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        } },
]
});
$('.wr-price-table').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
  {
  breakpoint: 1200,
  settings: {
  slidesToShow: 3,
  slidesToScroll: 1
  } },
  {
  breakpoint: 780,
  settings: {
  slidesToShow: 2,
  slidesToScroll: 1
    } },
  {
    breakpoint: 420,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
      } },
]
});
$('.member-info').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 300,
  appendArrows: $('.member-arrow'),
  responsive: [
    
    {
      breakpoint: 1200,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    } },
    {
      breakpoint: 800,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      } },
    {
      breakpoint: 650,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1
      } },
  ] 
});
$('.quotes-block').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 300,
  appendArrows: $('.arroww'), 
});
$('.header_burger').click(function(event){
  $('.header_burger, .nav-bar').toggleClass('active')
})

