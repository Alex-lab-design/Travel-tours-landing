$(function () {
    $('.button, .header__nav-list').on('click', function () {
        $('.header__nav').toggleClass('header__nav--active')
    });
    $('.button, .header__nav-list').on('click', function () {
        $('body').toggleClass('body--active')
    });
    
});

