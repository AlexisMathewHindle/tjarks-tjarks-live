/*-----------------------------------------*/
/*     SCRIPT FOR HIDING SIDE MENUS        */
/*-----------------------------------------*/

var width = $(window).width()

if(width > 767 ) {
//     /* LEFT HAND HERO BUTTON */

    $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_one = 170;      
        var scroll_pos_two = 488// set to whatever you want it to be
        
        $('.results').html( y_scroll_pos);
        
        if((y_scroll_pos > scroll_pos_one) && (y_scroll_pos < scroll_pos_two)) {
            $('#hero-btnLeft').fadeIn();
            
        } else {
            $('#hero-btnLeft').fadeOut();
        }
    });

    /* RIGHT HAND HERO BUTTON */

    $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_one = 170;// set to whatever you want it to be
        var scroll_pos_two = 508;
        
        if ((y_scroll_pos > scroll_pos_one) && (y_scroll_pos < scroll_pos_two)) {
            $('#hero-btnRight').fadeIn();
        } else {
            $('#hero-btnRight').fadeOut();
        }
    });


    /* LEFT HAND FIRST BUTTON */

    $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_one = 600;   
        var scroll_post_two = 780// set to whatever you want it to be
        
        $('.results').html( y_scroll_pos);
        
        if((y_scroll_pos > scroll_pos_one) && (y_scroll_pos < scroll_post_two)) {
            $('#left-oneBtn').fadeIn();
            
        } else {
            $('#left-oneBtn').fadeOut();
        }
    });

    /* RIGHT HAND FIRST BUTTON */

    $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_one = 600;   
        var scroll_post_two = 780// set to whatever you want it to be

        if((y_scroll_pos > scroll_pos_one) && (y_scroll_pos < scroll_post_two)) {
            $('#right-oneBtn').fadeIn();
        } else {
            $('#right-oneBtn').fadeOut();
        }
    });

    /* LEFT HAND SECOND BUTTON */

    $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_one = 1050; 
        var scroll_pos_two = 1950// set to whatever you want it to be

        if((y_scroll_pos > scroll_pos_one) && (y_scroll_pos < scroll_pos_two)) {
            $('#left-twoBtn').fadeIn();
        } else {
            $('#left-twoBtn').fadeOut();
        }
    });

    /* RIGHT HAND SECOND BUTTON */

    $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_one = 1050; 
        var scroll_pos_two = 1950// set to whatever you want it to be

        if((y_scroll_pos > scroll_pos_one) && (y_scroll_pos < scroll_pos_two)) {
            $('#right-twoBtn').fadeIn();
        } else {
            $('#right-twoBtn').fadeOut();
        }
    });

    // /* LEFT HAND FOURTH BUTTON */

    // $(window).on('scroll', function() {
    //     var y_scroll_pos = window.pageYOffset;
    //     var scroll_pos_one = 1400; 
    //     var scroll_pos_two = 2700// set to whatever you want it to be

    //     if((y_scroll_pos > scroll_pos_one) && (y_scroll_pos < scroll_pos_two)) {
    //         $('.left-btn--four').fadeIn();
    //         $('.left-btn--three').hide();
    //         $('.back-sectionThree--btn').css('display','block');
    // //        $('.back-sectionTwo--btn').css('display','none');
    //     } else {
    //         $('.left-btn--four').hide();
    //     }
    // });

}