    /* SCROLL MAGIC SCRIPT FOR ABOUT PAGE */

  var controller = new ScrollMagic.Controller();


  /*-----------------------------------------------*/
  /*    SCENE FOR TITLE FADE IN ON ABOUT PAGE      */
  /*-----------------------------------------------*/
   
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger-aboutTitle",
    triggerHook: 'onEnter',
    offset: 100
  })

  .addTo(controller);

  scene.on("enter", function (event) {
      // alert("Scene entered.");
      $('.about-title').addClass('show-title');
      // setTimeout(function(){
      //     $('#image-two').addClass('test');
      // }, 1000);
  });


  /*------------------------------------------------------------------------------*/
  /*    SCENE FOR 1ST CONTENT FADE IN ON ABOUT PAGE AS WELL AS COUNT DOWN START   */
  /*------------------------------------------------------------------------------*/

  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger-aboutContent",
    triggerHook: 'onEnter',
    offset: 100
  })

  .addTo(controller);

  scene.on("enter", function (event) {
      // alert("Scene entered.");
      $('.about-content').addClass('show-content');
      // setTimeout(function(){
      //     $('#image-two').addClass('test');
      // }, 1000);

       $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
  });
  scene.reverse(false)

  /*-----------------------------------------------------*/
  /*    SCENE FOR 2ND CONTENT FADE IN ON ABOUT PAGE      */
  /*-----------------------------------------------------*/

  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger-seniorContent",
    triggerHook: 'onEnter',
    offset: 100
  })

  .addTo(controller);

  scene.on("enter", function(event){
    $('.senior-contentTwo').addClass('show-content');
  })


  /*---------------------------------------------------------------*/
  /*    SCENE FOR 3RD CONTENT FADE IN ON ABOUT PAGE WITH TITLE     */
  /*---------------------------------------------------------------*/


  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger-mainContent",
    triggerHook: 'onEnter',
    offset: 100
  })

  .addTo(controller);

  scene.on("enter", function(event) {
    $('.senior-titleThree').addClass('show-title');
    setTimeout(function(){
      $('.senior-contentThree').addClass('show-content');
    }, 500);
  })

  /*----------------------------*/
  /*    SCENE FOR IMAGE GROUP   */
  /*----------------------- ----*/


  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger-imgOne",
    triggerHook: 'onEnter',
    offset: 100
  })

  .addTo(controller);

  scene.on("enter", function(event) {
    $('.left-container').addClass('animate-img');

    setTimeout(function(){
      $('.right-containerOne').addClass('animate-img')
    }, 500);

    setTimeout(function(){
      $('.right-containerTwo').addClass('animate-img')
    }, 1000);

  })

  /*-------------------------------*/
  /*    SCENE FOR HEADSHOT TITLE   */
  /*-------------------------------*/

  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger-headshotTitle",
    triggerHook: 'onEnter',
    offset: 100
  })

  .addTo(controller);

  scene.on("enter", function(event){
    $('.headshot-title').addClass('show-title')
  })

  /*---------------------------------------*/
  /*    SCENE FOR HEADSHOT IMAGES 1ST ROW  */
  /*---------------------------------------*/

  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger-headshotOne",
    triggerHook: 'onEnter',
    offset: 100
  })

  .addTo(controller);

  scene.on("enter", function(event){
    $('#teamShotOne').addClass('animate-img')

    setTimeout(function(){
      $('#teamShotTwo').addClass('animate-img')
    },500)
  })

  /*---------------------------------------*/
  /*    SCENE FOR HEADSHOT IMAGES 2ND ROW  */
  /*---------------------------------------*/

  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger-headshotTwo",
    triggerHook: 'onEnter',
    offset: 100
  })

  .addTo(controller);

  scene.on("enter", function(event){
    $('#teamShotFour').addClass('animate-img')

    setTimeout(function(){
      $('#teamShotThree').addClass('animate-img')
    },500)
  })


  /*---------------------------------------*/
  /*    SCENE FOR HEADSHOT IMAGES 3RD ROW  */
  /*---------------------------------------*/

  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger-headshotThree",
    triggerHook: 'onEnter',
    offset: 100
  })

  .addTo(controller);

  scene.on("enter", function(event){
    $('#teamShotSix').addClass('animate-img')

    setTimeout(function(){
      $('#teamShotFive').addClass('animate-img')
    },500)
  })

  /*---------------------------------------*/
  /*    SCENE FOR HEADSHOT IMAGES 4TH ROW  */
  /*---------------------------------------*/

  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger-headshotFour",
    triggerHook: 'onEnter',
    offset: 100
  })

  .addTo(controller);

  scene.on("enter", function(event){
    $('#teamShotEight').addClass('animate-img')

    setTimeout(function(){
      $('#teamShotSeven').addClass('animate-img')
    },500)
  })

  /*---------------------------------------*/
  /*    SCENE FOR HEADSHOT IMAGES 4TH ROW  */
  /*---------------------------------------*/

  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger-headshotFour",
    triggerHook: 'onEnter',
    offset: 100
  })

  .addTo(controller);

  scene.on("enter", function(event){
    $('#teamShotEight').addClass('animate-img')

    setTimeout(function(){
      $('#teamShotSeven').addClass('animate-img')
    },500)
  })

  /*---------------------------------------*/
  /*    SCENE FOR HEADSHOT IMAGES 5TH ROW  */
  /*---------------------------------------*/

  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger-headshotFive",
    triggerHook: 'onEnter',
    offset: 100
  })

  .addTo(controller);

  scene.on("enter", function(event){
    $('#teamShotTen').addClass('animate-img')

    setTimeout(function(){
      $('#teamShotNine').addClass('animate-img')
    },500)
  })

  /*---------------------------------------*/
  /*    SCENE FOR HEADSHOT IMAGES 6TH ROW  */
  /*---------------------------------------*/

  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger-headshotSix",
    triggerHook: 'onEnter',
    offset: 100
  })

  .addTo(controller);

  scene.on("enter", function(event){
    $('#teamShotTwelve').addClass('animate-img')

    setTimeout(function(){
      $('#teamShotEleven').addClass('animate-img')
    },500)
  })

  /*---------------------------------------*/
  /*    SCENE FOR HEADSHOT IMAGES 7TH ROW  */
  /*---------------------------------------*/

  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger-headshotSeven",
    triggerHook: 'onEnter',
    offset: 100
  })

  .addTo(controller);

  scene.on("enter", function(event){
    $('#teamShotFourteen').addClass('animate-img')

    setTimeout(function(){
      $('#teamShotThirteen').addClass('animate-img')
    },500)
  })

  /*---------------------------------------*/
  /*    SCENE FOR HEADSHOT IMAGES 8TH ROW  */
  /*---------------------------------------*/

  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger-headshotEight",
    triggerHook: 'onEnter',
    offset: 100
  })

  .addTo(controller);

  scene.on("enter", function(event){
    $('#teamShotSixteen').addClass('animate-img')

    setTimeout(function(){
      $('#teamShotFifteen').addClass('animate-img')
    },500)
  })

  /*---------------------------------------*/
  /*    SCENE FOR FOOTER DISPLAY           */
  /*---------------------------------------*/

  // var scene = new ScrollMagic.Scene({
  //   triggerElement: "#trigger-aboutFooter",
  //   triggerHook: 'onEnter',
  //   // offset: 10
  // })



  // .addTo(controller);

  // // scene.on("enter", function(event){
  // //   $('.about-footer').addClass('show-content');
  // // })

  // // var scene = new ScrollMagic.Scene({
  // //   triggerElement: "#trigger-aboutFooter",
  // //   triggerHook: 'onLeave',
  // //   offset: -10
  // // })

  // // .addTo(controller);

  // scene.on("enter", function(event){

  //   alert("This is working")

  //   // $(window).on('scroll', function() {
  //   //     var y_scroll_pos = window.pageYOffset;
  //   //     var scroll_pos_one = 4941; 
  //   //     var scroll_pos_two = 5030// set to whatever you want it to be

  //   //     if((y_scroll_pos > scroll_pos_one)  && (y_scroll_pos < scroll_pos_two) )  {


  //   //          $('.about-footer').addClass('show-content');


  //   //     } else {

  //   //         $('.about-footer').removeClass('show-content');
  //   //     }
  //   // });
    
  // })

  