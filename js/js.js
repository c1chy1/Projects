

var dots = 4;
var sliderElem = document.querySelector('.slider');
var dotElems = sliderElem.querySelectorAll('.slider__dot');
var indicatorElem = sliderElem.querySelector('.slider__indicator');

Array.prototype.forEach.call(dotElems, function (dotElem) {

    dotElem.addEventListener('click', function (e) {

        var currentPos = parseInt(sliderElem.getAttribute('data-pos'));
        var newPos = parseInt(dotElem.getAttribute('data-pos'));

        var newDirection = newPos > currentPos ? 'right' : 'left';
        var currentDirection = newPos < currentPos ? 'right' : 'left';

        indicatorElem.classList.remove('slider__indicator--' + currentDirection);
        indicatorElem.classList.add('slider__indicator--' + newDirection);
        sliderElem.setAttribute('data-pos', newPos);
    });
});
$(function() {

    $('a[href="#fantasy"]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 720);
                return false;}
        }
    });
    $('a[href="#slider__dots"]').click(function(e) {
        $("html,body").animate({scrollTop:0}, 1000);
        e.preventDefault();
    });

    $('a[href="#site-footer"]').click(function(e) {
        $("html,body").animate({scrollTop:$(document).height()}, 1000);
        e.preventDefault();
    });
    // INITIATE THE FOOTER
    siteFooter();
    // COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
    $(window).resize(function() {
        siteFooter();
    });

    function siteFooter() {
        var siteContent = $('.wrapper');
        var siteContentHeight = siteContent.height();
        var siteContentWidth = siteContent.width();

        var siteFooter = $('#site-footer');
        var siteFooterHeight = siteFooter.height();
        var siteFooterWidth = siteFooter.width();

        console.log('Content Height = ' + siteContentHeight + 'px');
        console.log('Content Width = ' + siteContentWidth + 'px');
        console.log('Footer Height = ' + siteFooterHeight + 'px');
        console.log('Footer Width = ' + siteFooterWidth + 'px');

        siteContent.css({
            "margin-bottom" : siteFooterHeight

        });

    }
    var animation = false,
        animDur = 1000,
        $row = $('.box__row'),
        $cell = $('.box__row-cell'),
        $content = $('.box__content'),
        $closeBtn = $('.box__close');

    var animFalse = function() {
        animation = false;
    };

    var active = function() {
        if (animation) return;
        var cellData = $(this).data('cell');
        var $content = $('.box__content[data-content=' + cellData + ']');
        animation = true;

        $cell.addClass('cell-fade');
        $(this).addClass('active');
        $content.addClass('show-content');
        $closeBtn.addClass('box-close-active');

        setTimeout(animFalse, animDur);
    };
    var close = function() {
        animation = true;

        $cell.removeClass('active cell-fade');
        $content.removeClass('show-content');
        $(this).removeClass('box-close-active');

        setTimeout(animFalse, animDur);
    };

    $row.on('click', '.box__row-cell', active);
    $closeBtn.on('click', close);
    $cell.on({
        mouseenter: function() {
            $cell.addClass('hover-cell');
            $(this).removeClass('hover-cell');
        },
        mouseleave: function() {
            $cell.removeClass('hover-cell');
        }
    });

    $(document).on('click', '.button', function(event){
        $(this).addClass('oppenned');
        event.stopPropagation();
    });
    $(document).on('click', 'body', function(event) {
        $('.button').removeClass('oppenned');
    });
    $(document).on('click', '.cls', function(event){
        $('.button').removeClass('oppenned');
        event.stopPropagation();
    });


    $(document).ready(function () {
        //initialize swiper when document ready
        var mySwiper = new Swiper ('.swiper-container', {
            // Optional parameters
            direction: 'vertical',
            loop: true
        })
    });


});












