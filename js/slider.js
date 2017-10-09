
//  MENU SLIDER
    $(".hidden").click(function() {
        $(this).toggleClass("menu-on");
    });

    $(".hidden").click(function() {
        $(".nav").slideToggle(600);
    });
// });

// MENU SLIDER SCROLL
$(window).scroll(function() {
    if ($(this).scrollTop() > 130) {
        $('nav').addClass('fixed');
        /*$('logo').addClass('fixed');*/
    } else if ($(this).scrollTop() < 130) {
        $('nav').removeClass('fixed');
        /* $('logo').removeClass('fixed');*/
    }
});

$(window).resize(function() {
    if ($(window).width() > 650) {
        $(".nav").show();
        $(".hidden").hide();
    } else {
        $(".nav").hide();
        $(".hidden").show();
    }
});
