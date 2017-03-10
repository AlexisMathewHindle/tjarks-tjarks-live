var theLanguage = $('html').attr('lang');

if (window.location.href.indexOf("work") != -1) {

    if ($('#geniNav li').hasClass('menu-item-object-custom')) {
        $('#menu-item-26').addClass('current-menu-item');
        console.log('This is work');
    }
}


/*=============================================
=        SCRIPT FOR BROWSER VERSION           =
=============================================*/


var browser = '';
var browserVersion = 0;

if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    browser = 'Opera';
} else if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
    browser = 'MSIE';
} else if (/Navigator[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    browser = 'Netscape';
} else if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    browser = 'Chrome';
} else if (/Safari[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    browser = 'Safari';
    /Version[\/\s](\d+\.\d+)/.test(navigator.userAgent);
    browserVersion = new Number(RegExp.$1);
} else if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    browser = 'Firefox';
}
if (browserVersion === 0) {
    browserVersion = parseFloat(new Number(RegExp.$1));
}


/* SCRIPT TO REMOVE VIDEO CONTAINER FOR SAFARI 6.2 AND BELOW */

if (browser == 'Safari' && browserVersion < '6.2') {
    $('#videoplayer').hide();
    $('.video-close').hide();
}

/* SCRIPT FOR OPERA UPDATE CHECK */

if (browser == 'Opera' && browserVersion < '38') {

    $('#outdated-browser').show();

}

/* SCRIPT FOR CHROME UPDATE CHECK */

if (browser == 'Safari' && browserVersion < '8') {

    $('#outdated-browser').show();

}

/* SCRIPT FOR IE UPDATE CHECK */

if (browser == 'MSIE' && browserVersion <= '9') {

    $('#outdated-browser').show();

}

/* SCRIPT FOR FIREFOX UPDATE CHECK */

if (browser == 'Firefox' && browserVersion < '45') {
    $('#outdated-browser').show();
}

/* SCRIPT FOR CHROME UPDATE CHECK */

if (browser == 'Chrome' && browserVersion <= '50') {
    $('#outdated-browser').show();

}

/* SCRIPT TO CLOSE OUTDATED BROWSER ALERT USING CLOSE CROSS */

$('#btnCloseUpdateBrowser').click(function() {
    $('#outdated-browser').hide();
});


/* SCRIPT FOR SLIDE IN AND OUT OF BROWSER UPDATE WARNING */

setTimeout(function() {

    $('#outdated-browser').addClass('outdated-show ');

}, 1000);

setTimeout(function() {

    $('#outdated-browser').removeClass('outdated-show ');

}, 5000);



/*---------------------------------------------*/
/*     SCRIPT TO FIND PATHNAME & PAGE          */
/*---------------------------------------------*/

var pathname = window.location.pathname; // Returns path only
var url = window.location.href; // Returns full URL

console.log(url);
console.log(pathname);


/*---------------------------------------------*/
/*     SCRIPT FOR SMOOTH SCROLL SIDE MENU      */
/*---------------------------------------------*/

$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});



/*--------------------------------------------------*/
/*     SCRIPT FOR MOBILE MENU ASIDE CONTAINER       */
/*--------------------------------------------------*/


$('#menu-icon').click(function() {
    $('.aside-container').toggle("slide", { direction: 'right' }, 800);
    $('.aside-container').css('display', 'block');

});


$(window).resize(function() {

    var w = $(this).width();
    if (w > 767) {
        console.log('larger than');
        $('.aside-container').fadeOut();
        $('.page-content').css('display', 'block');
        $('.js-toggle-menu').removeClass('open');
    }

});


/*--------------------------------------------------------------*/
/*     SCRIPT FOR FOR SHOW/HIDE MOBILE MENU ON CONTACT CLICK    */
/*--------------------------------------------------------------*/


$('#click_contact').click(function() {
    $('.aside-container').toggle("slide", { direction: 'right' }, 800);
});

/*-----------------------------------------*/
/*     SCRIPT FOR MOBILE MENU TOGGLE       */
/*-----------------------------------------*/


$('.js-toggle-menu').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $('.page-content').fadeToggle(1000);
});

/*---------------------------------------------------*/
/*     SCRIPT FOR LANGUAGE ACTIVE COLOR CHANGE       */
/*---------------------------------------------------*/

if ($('.lang-item-4').hasClass('current-lang')) {
    console.log('This is current lang');
    $('.lang-item-4 a').addClass('current-lang');
} else {
    $('.lang-item-7 a').css('color', '#f35c05');
}

/*-----------------------------------------*/
/*     SCRIPT FOR VIDEO CONTAINER TOGGLE   */
/*-----------------------------------------*/

$('.js-toggle-video').click(function(e) {
    e.preventDefault();

    if ($(this).toggleClass('open').hasClass('open')) {
        $('.video-container').velocity('transition.slideUpBigOut');
        // $('.control').fadeOut('1000');


        setTimeout(function() {
            $('#heroCarousel').addClass('index');
        }, 500);


    } else {
        $('.video-container').velocity('transition.slideDownBigIn');
        // $('.control').fadeIn('1000');

        $('#heroCarousel').removeClass('index');;

    }



});



/*-----------------------------------------*/
/*     SCRIPT TO PAUSE VIDEO ON HIDE       */
/*-----------------------------------------*/


var iframe = $('#videoplayer')[0];
var player = $f(iframe);

$('.js-toggle-video').click(function() {
    player.api('pause');
});

// $('.js-toggle-video').click(function() {
//     player.api('play');
// });

/*---------------------------------------------*/
/*     SCRIPT TO FADE VIDEO OUT ON END         */
/*---------------------------------------------*/


$('#videoplayer').bind('ended', function() {
    $(this).parent().velocity('transition.slideUpBigOut');
    $('.js-toggle-video').toggleClass('open');
    $('#section-one').toggleClass('videoplayer-top');
    // $('#mobile-content').toggleClass('videoplayer-top');

    // $('#heroCarousel').toggleClass('index');
});


/*----------------------------------------------------*/
/*     SCRIPT FOR FOR HIDING CAROUSEL INDICATORS      */
/*----------------------------------------------------*/

$(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 210) {
            $('.carousel-indicators').fadeOut();
        } else {
            $('.carousel-indicators').fadeIn();
        }
    });
});

$(document).ready(function(e) {
    $(".carousel-indicators").click(function() {
        $(".carousel").carousel('prev');
    });
    $(".left").click(function() {
        $(".carousel").carousel('prev');
    });
    $(".right").click(function() {
        $(".carousel").carousel('next');
    });
});

/*------------------------------*/
/*     SCRIPT FOR OFFSETTING    */
/*------------------------------*/

$(function() {

    var topPane = $('.hero-scroll').position();
    var bottomPane = $('.section-one').position();
    var scrolling = false;

    function parallax() {
        if ($(this).scrollTop() >= 280) {
            var st = $(this).scrollTop();

            $('.hero-scroll').css({ top: Math.ceil(topPane.top + st * 0.4 - 111) });
            $('.section-one').css({ top: Math.ceil(bottomPane.top + st * 0.5) });
        } else {
            $('.hero-scroll').css({ top: 0 });
        }
    }

    $(window).scroll(function() {
        scrolling = true;
    });

    setInterval(function() {
        if (scrolling) {
            scrolling = false;
            parallax();
        }
    }, 1);

});


/*------------------------------------------*/
/*    SCRIPT TO PREVENT JITTER ON SCROLL    */
/*------------------------------------------*/


/* ANOTHER SCRIPT FOR BROWSER CHECK */

var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
var is_safari = navigator.userAgent.indexOf("Safari") > -1;
var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
if ((is_chrome) && (is_safari)) { is_safari = false; }
if ((is_chrome) && (is_opera)) { is_chrome = false; }


/*------------------------------------------*/
/*  SCRIPT TO NOODLES VIDEO PAUSE ON CLOSE  */
/*------------------------------------------*/

/* VIMEO HEADER BEING CALLED IN HEADER */

var iframeNoodles = $('#noodles-video')[0];
var playerNoodles = $f(iframeNoodles);

$('.close').click(function() {
    playerNoodles.api('pause');
});

$('.modal').on('hidden.bs.modal', function() {
    playerNoodles.api('pause');
})


/*---------------------------------------------*/
/*     SCRIPT  FOR ACTIVE MENU ON WORK PAGE    */
/*---------------------------------------------*/


$(document).ready(function() {

    $('.work-buttons button').click(function() {
        $('button').removeClass("active");
        $(this).addClass("active");
    });

});

// $('#noodles-modal').modal({
//     show:true,
//     backdrop:true,
//     keyboard:true
// })


/*--------------------------------------------*/
/*     SCRIPT FOR ACTIVE MENU ON WORK PAGE    */
/*--------------------------------------------*/

$(document).ready(function() {

    $('.team-buttons button').click(function() {
        $('button').removeClass("active");
        $(this).addClass("active");
    });

});


/*-----------------------------------------------*/
/*     SCRIPT FOR SECONDARY MENU ON WORK PAGE    */
/*-----------------------------------------------*/



$(window).load(function() {
    $grid = $('.grid');
    $grid.isotope();

    //$('#packaging,#artwork,#branding,#webDesign,#retail,#style,#advertising, #all-button').click(function() {

    $('.work-buttons button').click(function() {

        var id = $(this).attr('id');
        var className = id.replace("-button", "");

        if (className == 'all') {
            $grid.isotope({
                itemSelector: '.col-md-4',
                percentPosition: true,
                filter: '*',
                layoutMode: 'fitRows',
                masonry: {
                    columnWidth: 50
                }

            });
            return false;
        }
        $grid.isotope({
            filter: '.' + className
        });
    });
});


$(function() {
    var $container = $('#Portfolio');

    $container.isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
    });

    $('#filters').on('click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $('#filters a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({ filter: filterValue });
    });
});

/*-----------------------------------------------*/
/*     SCRIPT FOR SECONDARY MENU ON TEAM PAGE    */
/*-----------------------------------------------*/


var grid = $('.grid');

$(window).load(function() {

    $grid.isotope();

    $('.team-buttons button').click(function() {

        var id = $(this).attr('id');
        var className = id.replace("-button", "");

        if (className == 'all') {
            $grid.isotope({
                itemSelector: '.col-md-2',
                percentPosition: true,
                filter: '*',
                masonry: {
                    columnWidth: '.col-md-2',
                    isFitWidth: true
                }
            });
            return false;
        }
        $grid.isotope({
            filter: '.' + className
        });
    });
});



/*-----------------------------------------------*/
/*    SCENE FOR ANIMATION ON HOME PAGE           */
/*-----------------------------------------------*/


if ($('#trigger-homeTitle').length > 0) {


    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-homeTitle",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);


    scene.on("enter", function(event) {

        $('.text-row h1').addClass('show-title');

        setTimeout(function() {
            $('.text-row-split').addClass('show-content');
        }, 500);

        /*=======================================================================
        =            SCRIPT FOR CHANGING TYPE ON HOMEPAGE MAIN TITLE            =
        =======================================================================*/


        function remove() {
            setTimeout(function() {

                $('.typed-cursor').hide();
                $('.textChange').css('marginRight', '10px');

            }, 1500);

        }

        if (theLanguage == 'en-GB') {

            $(function() {

                $(".textChange").typed({
                    strings: ["packaging", "branding", "web", "research", "creative"],
                    typeSpeed: 100,
                    backDelay: 750,
                });

            });

        }

        if (theLanguage == 'de-DE') {

            $(function() {

                $(".textChange").typed({
                    strings: ["verpackung", "branding", "web", "kreativ", "forschung"],
                    typeSpeed: 100,
                    backDelay: 750,
                });

            });


        }


    });

    /* SCENE FOR SECTION LEFT SIDE BOTTOM IMAGES  */

    var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger-oneLeft",
            triggerHook: 'onEnter',
            offset: 100
        })
        .addTo(controller);

    scene.on("enter", function(event) {

        $('.leftSide_Two').addClass('animate-img');

        console.log('this is working');

    });

    /*    SCENE FOR SECTION THREE 1ST ROW IMAGES   */


    var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger-threeImgOne",
            triggerHook: 'onEnter',
            offset: 100
        })
        .addTo(controller);

    scene.on("enter", function(event) {

        $('#leftSide-One').addClass('animate-img');

        setTimeout(function() {
            $('#rightSide-One').addClass('animate-img');
        }, 500);

        setTimeout(function() {
            $('#rightSide-Two').addClass('animate-img');
        }, 1000);

    });

}


/*-----------------------------------------------*/
/*    SCENE FOR ANIMATION ON ABOUT PAGE           */
/*-----------------------------------------------*/

if ($('#trigger-aboutTitle').length > 0) {

    var controller = new ScrollMagic.Controller();


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-aboutTitle",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {

        $('.about-title').addClass('show-title');

        /*=======================================================================
        =            SCRIPT FOR CHANGING TYPE ON ABOUT TITLE                      =
          =======================================================================*/

        if (theLanguage == 'en-GB') {

            $(function() {

                $(".textChangeAbout").typed({
                    strings: ["innovative.", "creative.", "passionate.", "precise.", "efficient.", "experts.", "<span id='test11'>Tjarks &amp; Tjarks.</span>"],
                    typeSpeed: 100,
                    backDelay: 1350,
                });

            });

        }

        if (theLanguage == 'de-DE') {

            $(".textChangeAbout").typed({
                strings: ["innovativ", "kreativ", "leidenschaftlich", "präzise", "effizient", "experten", "Tjarks & Tjarks"],
                typeSpeed: 100,
                backDelay: 1350,
                loop: false,
            });
        }

        //SCRIPT FOR TIMING OUT HIDE OF CURSOR

        setTimeout(function() {

            $('.typed-cursor').hide();

        }, 26000);


    });
    scene.reverse(false);


    /*    SCENE FOR 1ST CONTENT FADE IN ON ABOUT PAGE AS WELL AS COUNT DOWN START   */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-aboutContent",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {

        $('.about-content').addClass('show-content');

        setTimeout(function() {
            $('.counter').addClass('show-content');
        }, 500);


        /*=============================================
        =    SCRIPT FOR COUNTER ON ABOUT PAGE          =
        =============================================*/


        $('.counting-1').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 1000,
                easing: 'easeOutExpo',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

        $('.counting-2').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 1500,
                easing: 'easeOutExpo',
                step: function(now) {
                    $(this).text(Math.ceil(now));

                },
            });
        });

        $('.counting-3').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'easeOutExpo',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                },
                complete: function() {
                    $('.counting-3').append('<span class="counter-plus">+</span>');
                }
            });
        });

        $('.counting-4').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2500,
                easing: 'easeOutExpo',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                },
                complete: function() {
                    $('.counting-4').append('<span class="counter-plus">+</span>');
                }
            });
        });
    });
    scene.reverse(false);


    /*    SCENE FOR 2ND CONTENT FADE IN ON ABOUT PAGE      */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-mainContent",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('.sliderContent').addClass('show-content');
    });


    /*    SCENE FOR 3RD CONTENT FADE IN ON ABOUT PAGE WITH TITLE     */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-mainContent",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('.senior-titleThree').addClass('show-title');
        setTimeout(function() {
            $('.senior-contentThree').addClass('show-content');
        }, 500);
    });

    /*    SCENE FOR IMAGE GROUP   */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-imgOne",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('.left-container').addClass('animate-img');

        setTimeout(function() {
            $('.right-containerOne').addClass('animate-img');
        }, 500);

        setTimeout(function() {
            $('.right-containerTwo').addClass('animate-img');
        }, 1000);

    });

    /*    SCENE FOR HEADSHOT IMAGES 1ST ROW  */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-headshotOne",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('#teamShotOne').addClass('animate-img');

        setTimeout(function() {
            $('#teamShotTwo').addClass('animate-img');
        }, 500);
    });


    /*    SCENE FOR HEADSHOT IMAGES 2ND ROW  */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-headshotTwo",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('#teamShotFour').addClass('animate-img');

        setTimeout(function() {
            $('#teamShotThree').addClass('animate-img');
        }, 500);
    });



    /*    SCENE FOR HEADSHOT IMAGES 3RD ROW  */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-headshotThree",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('#teamShotSix').addClass('animate-img');

        setTimeout(function() {
            $('#teamShotFive').addClass('animate-img');
        }, 500);
    });


    /*    SCENE FOR HEADSHOT IMAGES 4TH ROW  */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-headshotFour",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('#teamShotEight').addClass('animate-img');

        setTimeout(function() {
            $('#teamShotSeven').addClass('animate-img');
        }, 500);
    });


    /*    SCENE FOR HEADSHOT IMAGES 4TH ROW  */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-headshotFour",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('#teamShotEight').addClass('animate-img');

        setTimeout(function() {
            $('#teamShotSeven').addClass('animate-img');
        }, 500);
    });


    /*    SCENE FOR HEADSHOT IMAGES 5TH ROW  */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-headshotFive",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('#teamShotTen').addClass('animate-img');

        setTimeout(function() {
            $('#teamShotNine').addClass('animate-img');
        }, 500);
    });


    /*    SCENE FOR HEADSHOT IMAGES 6TH ROW  */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-headshotSix",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('#teamShotTwelve').addClass('animate-img');

        setTimeout(function() {
            $('#teamShotEleven').addClass('animate-img');
        }, 500);
    });


    /*    SCENE FOR HEADSHOT IMAGES 7TH ROW  */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-headshotSeven",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('#teamShotFourteen').addClass('animate-img');

        setTimeout(function() {
            $('#teamShotThirteen').addClass('animate-img');
        }, 500);
    });


    /*    SCENE FOR HEADSHOT IMAGES 8TH ROW  */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-headshotEight",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('#teamShotSixteen').addClass('animate-img');

        setTimeout(function() {
            $('#teamShotFifteen').addClass('animate-img');
        }, 500);
    });

    /*    SCENE FOR HEADSHOT IMAGES 9TH ROW  */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-headshotNine",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('#teamShotSeventeen').addClass('animate-img');

        setTimeout(function() {
            $('#teamShotEighteen').addClass('animate-img');
        }, 500);
    });

    /*    SCENE FOR HEADSHOT IMAGES 9TH ROW  */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-headshotTen",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('#teamShotNineteen').addClass('animate-img');

        setTimeout(function() {
            $('#teamShotTwenty').addClass('animate-img');
        }, 500);
    });

}



/*-----------------------------------------------*/
/*    SCENE FOR ANIMATION ON SERVICES PAGE       */
/*-----------------------------------------------*/



if ($('#trigger-servicesImgOne').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-servicesImgOne",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('.servicesOne').addClass('animate-img');

        setTimeout(function() {
            $('.servicesTwo').addClass('animate-img');
        }, 500);
    });

}

if ($('#trigger-serviceImgThree').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger-serviceImgThree",
            triggerHook: 'onEnter',
            offset: 100
        })
        .addTo(controller);

    scene.on("enter", function() {

        $('.servicesFour').addClass('animate-img');

        setTimeout(function() {
            $('.servicesThree').addClass('animate-img');
        }, 500);

    });

}

if ($('#trigger-serviceImgFive').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgFive",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {

        $('.servicesFive').addClass('animate-img');

        setTimeout(function() {
            $('.servicesSix').addClass('animate-img');
        }, 500);
    });
}

if ($('#trigger-serviceImgSeven').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgSeven",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {

        $('.servicesEight').addClass('animate-img');

        setTimeout(function() {
            $('.servicesSeven').addClass('animate-img');
        }, 500);
    });
}

if ($('#trigger-serviceImgNine').length > 0) {


    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgNine",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {

        $('.servicesNine').addClass('animate-img');

        setTimeout(function() {
            $('.servicesTen').addClass('animate-img');
        }, 500);
    });
}




if ($('#trigger-serviceImgEleven').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: '#trigger-serviceImgEleven',
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {

        $('.servicesEleven').addClass('animate-img');

        setTimeout(function() {
            $('.servicesTwelve').addClass('animate-img');
        }, 500);

    });


}


if ($('#trigger-serviceImgThirteen').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgThirteen",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {
        $('.servicesThirteen').addClass('animate-img');

        setTimeout(function() {
            $('.servicesFourteen').addClass('animate-img');
        }, 500);
    });
}


if ($('#trigger-serviceImgFifteen').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgFifteen",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {
        $('.servicesFifteen').addClass('animate-img');

        setTimeout(function() {
            $('.servicesSixteen').addClass('animate-img');
        }, 500);
    });
}


if ($('#trigger-serviceImgSeventeen').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgSeventeen",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {
        $('.servicesSeventeen').addClass('animate-img');

        setTimeout(function() {
            $('.servicesEighteen').addClass('animate-img');
        }, 500);
    });
}


if ($('#trigger-serviceImgNineTeen').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgNineTeen",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {
        $('.servicesNineteen').addClass('animate-img');

        setTimeout(function() {
            $('.servicesTwenty').addClass('animate-img');
        }, 500);
    });
}



if ($('#trigger-serviceImgTwentyOne').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgTwentyOne",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {
        $('.servicesTwentyOne').addClass('animate-img');

        setTimeout(function() {
            $('.servicesTweentyTwo').addClass('animate-img');
        }, 500);
    });
}


if ($('#trigger-serviceImgTwentyThree').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgTwentyThree",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {
        $('.servicesTwentyThree').addClass('animate-img');

        setTimeout(function() {
            $('.servicesTwentyFour').addClass('animate-img');
        }, 500);
    });
}


if ($('#trigger-serviceImgTwentyFive').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgTwentyFive",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {
        $('.servicesTwentyFive').addClass('animate-img');

        setTimeout(function() {
            $('.servicesTweentySix').addClass('animate-img');
        }, 500);
    });
}


if ($('#trigger-serviceImgTwentySeven').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgTwentySeven",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {
        $('.servicesTwentySeven').addClass('animate-img');

        setTimeout(function() {
            $('.servicesTwentyEight').addClass('animate-img');
        }, 500);
    });
}


if ($('#trigger-serviceImgTwentyNine').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgTwentyNine",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {
        $('.servicesTwentyNine').addClass('animate-img');

        setTimeout(function() {
            $('.servicesThirty').addClass('animate-img');
        }, 500);
    });
}

if ($('#trigger-serviceImgThirtyOne').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgThirtyOne",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {
        $('.servicesThirtyOne').addClass('animate-img');

        setTimeout(function() {
            $('.servicesThirtyTwo').addClass('animate-img');
        }, 500);
    });
}


if ($('#trigger-serviceImgThirtyThree').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgThirtyThree",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {
        $('.servicesThirtyThree').addClass('animate-img');

        setTimeout(function() {
            $('.servicesThirtyFour').addClass('animate-img');
        }, 500);
    });
}

/*=====================================================
=            SCRIPT FOR FOR FOOTER FADE IN            =
=====================================================*/


var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: "#footer",
    triggerHook: 'onEnter',
    offset: 100
})

.addTo(controller);

scene.on("enter", function() {

    $('#main-footer').addClass('show-footer');

});

/*=====================================================================
=            SCRIPT TO HIDE CAREER LINK IF ON CAREERS PAGE            =
=====================================================================*/


if ($('.career-footer').length > 0) {

    $('.careerContainer').css('display', 'none');
}

/*=====================================================
=            SCRIPT TO SHOW AVAILABLE JOBS            =
=====================================================*/


$('#roleOne').click(function() {
    $('.role-one').show();
    $('.role-two').hide();
    $('.role-three').hide();
});


$('#roleTwo').click(function() {
    $('.role-two').show();
    $('.role-one').hide();
    $('.role-three').hide();
});

$('#roleThree').click(function() {
    $('.role-two').hide();
    $('.role-one').hide();
    $('.role-three').show();
});

/*===================================================================
=            SCRIPT FOR ABOUT PAGE MANAGER IMAGE SCROLL             =
===================================================================*/

$(document).ready(function() {

    $('.seniorSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        asNavFor: '.seniorSliderContent',
        centerMode: true,
        focusOnSelect: true,
        centerPadding: 0,
        pauseOnHover: true,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='http://tjarksandtjarks.com/wp-content/themes/tjarksandtjarks/assets/img/back_white.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='http://tjarksandtjarks.com/wp-content/themes/tjarksandtjarks/assets/img/forward_white.png'>",
        responsive: [{
            breakpoint: 997,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: 0,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                variableWidth: false,
            }
        }]

    });

    $('.seniorSliderContent').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.seniorSlider'
    });

});

/*=============================================
=   SCRIPT FOR FOOTER ADDRESS PLUS ANIMATION   =
=============================================*/



$('#uk-office, #js-officeOne').click(function(e) {
    e.preventDefault();

    $('.js-toggle-addressOne').toggleClass('open');

    if ($('.js-toggle-addressTwo').hasClass('open')) {
        $('.js-toggle-addressTwo').toggleClass('open');
    }

});



$('#us-office, #js-officeTwo').click(function(e) {
    e.preventDefault();
    $('.js-toggle-addressTwo').toggleClass('open');

    if ($('.js-toggle-addressOne').hasClass('open')) {
        $('.js-toggle-addressOne').toggleClass('open');
    }
});