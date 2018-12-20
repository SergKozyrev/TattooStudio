// Header slider

$('.header-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true,
    dots: true
});


// Artist slider
$('.artist-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.artist-slider-nav'
});
$('.artist-slider-nav').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.artist-slider',
    dots: false,
    centerMode: true,
    focusOnSelect: true
});