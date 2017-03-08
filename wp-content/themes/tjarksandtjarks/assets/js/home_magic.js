/*-----------------------------------------------*/
/*    SCENE FOR TITLE FADE IN ON HOME PAGE       */
/*-----------------------------------------------*/

var controller =  new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
	triggerElement: "#trigger-homeTitle",
	triggerHook: 'onEnter',
	offset: 100
})

.addTo(controller);




scene.on("enter", function(event){
	$('.section-two h1').addClass('show-title')

	setTimeout(function(){
		$('.text-row-split').addClass('show-content');
	},500)
})

/*-------------------------------*/
/*    SCENE FOR 1ST ROW IMAGES   */
/*-------------------------------*/

var scene = new ScrollMagic.Scene({
	triggerElement:  "#trigger-threeImgOne",
	triggerHook: 'onEnter',
	offset: 100
})
.addTo(controller);

scene.on("enter", function(event){
	$('#three-imgOne').addClass('animate-img')

	setTimeout(function(){
		$('#three-imgTwo').addClass('animate-img')
	},500)
})

/*-------------------------------*/
/*    SCENE FOR 2ND ROW IMAGES   */
/*-------------------------------*/

var scene = new ScrollMagic.Scene({
	triggerElement: "#trigger-threeImgThree",
	triggerHook: 'onEnter',
	offset: 100
})

.addTo(controller)
.addIndicators()

scene.on("enter", function(event){
	$('#three-imgFour').addClass('animate-img')
	
	setTimeout(function(){
		$('#three-imgThree').addClass('animate-img')
	}, 500)
})