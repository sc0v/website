$( document ).ready(function() {
    $("#intro-logo").fadeIn();
    $('.slickslider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
	});
});

var halfwinheight=$( window ).height()/2;
var winheight=$( window ).height()/1.4;

$(window).scroll(function(i){
        $("#intro-logo").css({'opacity':( halfwinheight-$(window).scrollTop() )/100});

});


