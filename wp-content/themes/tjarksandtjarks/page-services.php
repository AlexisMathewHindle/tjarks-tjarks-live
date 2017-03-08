<?php
/*
	Template Name: Services Page
*/
get_header(); ?>

<?php
/*
	ADVANCED CUSTOM FIELDS VARIABLES  
*/

	$heroServices_bg		= get_field('heroServices_bg');
	$services_title			= get_field('services_title');
	$services_intro			= get_field('services_intro');

	$packaging_icon 		= get_field('packaging_icon');
	$iconTitle_one			= get_field('iconTitle_one');

	$artwork_icon			= get_field('artwork_icon');
	$iconTitle_two			= get_field('iconTitle_two');

	$website_icon			= get_field('website_icon');
	$iconTitle_three		= get_field('iconTitle_three');

	$retail 				= get_field('retail');
	$iconTitle_four			= get_field('iconTitle_four');

	$style_icon				= get_field('style_icon');
	$iconTitle_five			= get_field('iconTitle_five');

	$branding_icon			= get_field('branding_icon');
	$iconTitle_six			= get_field('iconTitle_six');

	$photography_icon		= get_field('photography_icon');
	$iconTitle_seven		= get_field('iconTitle_seven');

	$advertising_icon		= get_field('advertising_icon');
	$iconTitle_eight		= get_field('iconTitle_eight');

	$servicesOne_img		= get_field('servicesOne_img');
	$servicesTwo_img		= get_field('servicesTwo_img');
	$servicesThree_img		= get_field('servicesThree_img');

	$packagingTitle			= get_field('packagingTitle');
	$packaging_paraOne		= get_field('packaging_paraOne');
	$packaging_paraTwo		= get_field('packaging_paraTwo');

	$servicesFour_img 		= get_field('servicesFour_img');
	$servicesFive_img		= get_field('servicesFive_img');
	$servicesSix_img		= get_field('servicesSix_img');

	$artworkTitle			= get_field('artworkTitle');
	$artwork_paraOne		= get_field('artwork_paraOne');
	$artwork_paraTwo		= get_field('artwork_paraTwo');

	$servicesSeven_img 		= get_field('servicesSeven_img');
	$servicesEight_img		= get_field('servicesEight_img');
	$servicesNine_img		= get_field('servicesNine_img');

	$webTitle				= get_field('webTitle');
	$web_paraOne			= get_field('web_paraOne');
	$web_paraTwo			= get_field('web_paraTwo');

	$servicesTen_img		= get_field('servicesTen_img');
	$servicesEleven_img		= get_field('servicesEleven_img');
	$servicesTwelve_img		= get_field('servicesTwelve_img');

	$retailTitle			= get_field('retailTitle');
	$retail_paraOne			= get_field('retail_paraOne');
	$retail_paraTwo			= get_field('retail_paraTwo');

	$servicesThirteen_img	= get_field('servicesThirteen_img');
	$servicesFourteen_img	= get_field('servicesFourteen_img');
	$servicesFifteen_img	= get_field('servicesFifteen_img');

	$styleTitle				= get_field('styleTitle');
	$style_paraOne			= get_field('style_paraOne');
	$style_paraTwo			= get_field('style_paraTwo');

	$servicesSixteen_img	= get_field('servicesSixteen_img');
	$servicesSeventeen_img	= get_field('servicesSeventeen_img');
	$servicesEighteen_img	= get_field('servicesEighteen_img');

	$brandingTitle			= get_field('brandingTitle');
	$branding_paraOne		= get_field('branding_paraOne');
	$branding_paraTwo		= get_field('branding_paraTwo');

	$servicesNineteen_img	= get_field('servicesNineteen_img');
	$servicesTwenty_img		= get_field('servicesTwenty_img');
	$servicesTwentyone_img	= get_field('servicesTwentyone_img');

	$photographyTitle		= get_field('photographyTitle');
	$photography_paraOne	= get_field('photography_paraOne');
	$photography_paraTwo	= get_field('photography_paraTwo');

	$servicesTwentytwo_img	= get_field('servicesTwentytwo_img');
	$servicesTwentythree_img= get_field('servicesTwentythree_img');
	$servicesTwentyfour_img	= get_field('servicesTwentyfour_img');

	$advertisingTitle		= get_field('advertisingTitle');
	$advertising_paraOne	= get_field('advertising_paraOne');
	$advertising_paraTwo	= get_field('advertising_paraTwo');

	$servicesTwentyfive_img	= get_field('servicesTwentyfive_img');
	$servicesTwentysix_img	= get_field('servicesTwentysix_img');



;?>


<div class="page-content">

 <!-- HERO CONTAINER -->

	<div class="container">
		
		<div class="row">
			
			<div class="col-md-12">
				
				<div class="hero-scroll">
					<div class="heroServices">
						
						<div id="servicesCarousel" class="carousel fade" data-ride="carousel">

			              <ol class="carousel-indicators">
			                <li data-target="carousel-servicesOne" data-slide-to="0" class="active"></li>
			              </ol>

			              <!-- Carousel items -->
			              <div class="carousel-inner">

			              	<img src="<?php echo get_template_directory_uri();?>/assets/img/transparent.png" alt="">

			                <div class="active item" id="carousel-servicesOne" title="<?php echo $heroServices_bg['title'];?>" style="background-image:  url(<?php echo $heroServices_bg['url']; ?>)"></div>

			              </div>

						</div>

					</div>

				</div>
			</div>
		</div>
	</div>

<!-- SERVICES FIRST SECTION -->

<div class="container">
	
	<div class="row">
		
		<div class="section-one section-oneServices">

			<!-- <div class="col-md-2"></div> -->

			<div class="col-md-12" id="services">
				
				<div id="services-about" class="text-row">
					
					<h1 class="text-center"><?php echo $services_title ;?></h1>
                    <div class="text-row-split">
					<p><?php echo $services_intro ;?></p>
                    </div>
				</div>

<!--				<div id="services-icon-row" class="row">-->
<!--					-->
<!--					<div class="col-xs-6 col-md-3">-->
<!---->
<!--						<a href="#branding">-->
<!---->
<!--							<div class="services-icon">-->
<!--								-->
<!--								<img src="--><?php //echo $packaging_icon['url'] ;?><!--" alt="--><?php //echo $packaging_icon['alt'] ;?><!--" title="--><?php //echo $packaging_icon['title'];?><!--"/>-->
<!---->
<!---->
<!--								<p><a href="#branding" class="outline">--><?php //echo $iconTitle_one ;?><!--</a></p>-->
<!---->
<!--							</div>-->
<!---->
<!--						</a>-->
<!---->
<!--					</div>-->
<!---->
<!--					<div class="col-xs-6 col-md-3">-->
<!---->
<!--						<a href="#packaging">-->
<!---->
<!--						<div class="services-icon">-->
<!--						-->
<!--							<img src="--><?php //echo $artwork_icon['url'] ;?><!--" alt="--><?php //echo $artwork_icon['alt'];?><!--" title="--><?php //echo $artwork_icon['title'];?><!--"/>-->
<!---->
<!--							<p><a href="#packaging" class="outline">--><?php //echo $iconTitle_two ;?><!--</a></p>-->
<!--						</div>-->
<!---->
<!--						</a>-->
<!---->
<!--					</div>-->
<!---->
<!--					<div class="col-xs-6 col-md-3">-->
<!---->
<!--						<a href="#artwork">-->
<!---->
<!--							<div class="services-icon">-->
<!--							-->
<!--								<img src="--><?php //echo $website_icon['url'] ;?><!--" alt="--><?php //echo $website_icon['alt'];?><!--" title="--><?php //echo $website_icon['title'];?><!--"/>-->
<!---->
<!---->
<!--								<p><a href="#artwork" class="outline">--><?php //echo $iconTitle_three ;?><!--</a></p>-->
<!---->
<!--							</div>-->
<!--						</a>-->
<!---->
<!--					</div>-->
<!---->
<!--					<div class="col-xs-6 col-md-3">-->
<!--						-->
<!--						<a  href="#style">-->
<!---->
<!--							<div class="services-icon">-->
<!---->
<!--								<img src="--><?php //echo $retail['url'];?><!--" alt="--><?php //echo $retail['alt'];?><!--" title="--><?php //echo $retail['title'];?><!--"/>-->
<!---->
<!---->
<!--								<p><a href="#style" class="outline">--><?php //echo $iconTitle_four ;?><!--</a></p>-->
<!---->
<!--							</div>-->
<!---->
<!--						</a>-->
<!--							-->
<!--					</div>-->
<!---->
<!--					<div class="col-xs-6 col-md-3">-->
<!--						-->
<!--						<a href="#advertising">-->
<!---->
<!--							<div class="services-icon">-->
<!---->
<!--								<img src="--><?php //echo $style_icon['url'] ;?><!--" title="--><?php //echo $style_icon['title'];?><!--" alt="--><?php //echo $style_icon['alt'];?><!--"/>-->
<!---->
<!--								-->
<!--								<p><a href="#advertising" class="outline">--><?php //echo $iconTitle_five ;?><!--</a></p>-->
<!---->
<!---->
<!---->
<!--							</div>-->
<!---->
<!--						</a>-->
<!--							-->
<!--					</div>-->
<!---->
<!--					<div class="col-xs-6 col-md-3">-->
<!--						-->
<!--						<a href="#web">-->
<!---->
<!--							<div class="services-icon">-->
<!---->
<!--								<img src="--><?php //echo $branding_icon['url'] ;?><!--" alt="--><?php //echo $branding_icon['alt'];?><!--" title="--><?php //echo $branding_icon['title'];?><!--"/>-->
<!---->
<!--								-->
<!--								<p><a href="#web" class="outline">--><?php //echo $iconTitle_six ;?><!--</a></p>-->
<!---->
<!--							</div>-->
<!---->
<!--						</a>-->
<!--							-->
<!--					</div>-->
<!---->
<!--					<div class="col-xs-6 col-md-3">-->
<!--						-->
<!--						<a href="#retail">-->
<!---->
<!--							<div class="services-icon">-->
<!---->
<!--								<img src="--><?php //echo $photography_icon['url'] ;?><!--" alt="--><?php //echo $photography_icon['alt'];?><!--" title="--><?php //echo $photography_icon['title'];?><!--"/>-->
<!---->
<!---->
<!--								<p><a href="#retail" class="outline">--><?php //echo $iconTitle_seven ;?><!--</a></p>-->
<!---->
<!---->
<!--							</div>-->
<!---->
<!--						</a>-->
<!--							-->
<!--					</div>-->
<!---->
<!--					<div class="col-xs-6 col-md-3">-->
<!--						-->
<!--						<a href="#photography">-->
<!---->
<!--							<div class="services-icon">-->
<!---->
<!--								<img src="--><?php //echo $advertising_icon['url'] ;?><!--" alt="--><?php //echo $advertising_icon['alt'];?><!--" title="--><?php //echo $advertising_icon['title'];?><!--"/>-->
<!---->
<!---->
<!--								<p><a href="#photography" class="outline">--><?php //echo $iconTitle_eight ;?><!--</a></p>-->
<!---->
<!---->
<!--							</div>-->
<!---->
<!--						</a>-->
<!--							-->
<!--					</div>-->
<!---->
<!--				</div>-->

			</div>

		</div>	
		
	</div>

	<!-- <div class="row">
		
		<div class="section-twoServices">
		
			<div class="col-md-6">
				<div id="trigger-servicesImgOne"></div>
				<div class="left-services servicesOne">
				
					<img src="<?php echo $servicesOne_img['url'] ;?>" alt="<?php echo $servicesOne_img['alt'];?>" title="<?php echo $servicesOne_img['title'];?>"/> 
				
				</div>

			</div>

			<div class="col-md-6">
				
				<div class="right-services servicesTwo">

					<img src="<?php echo $servicesTwo_img['url'] ;?>" alt="<?php echo $servicesTwo_img['alt'];?>" title="<?php echo $servicesTwo_img['title'];?>"/> 

				</div>

			</div>

		</div>

	</div> -->


	<div id="services-row" class="row">
		
		<div class="section-threeServices">
			
			<div class="col-md-6 col-md-push-6">

				<div id="trigger-serviceImgThree"></div>

				<div class="rightServices servicesThree" id="branding">
					
					<img src="<?php echo $servicesThree_img['url'] ;?>" alt="<?php echo $servicesThree_img['alt'];?>" title="<?php echo $servicesThree_img['title'];?>">

				</div>
				
			</div>

			<div class="col-md-6 col-md-pull-6">

				<div class="leftServices servicesFour" id="packaging">
					
					<h2 class="services_title--lineup" id="packagingTitle"><?php echo $packagingTitle ;?></h2>

					<?php echo get_field('packaging_paraOne') ;?>

					<?php echo get_field('packaging_paraTwo') ;?>

				</div>
				
			
			</div>

		</div>
		
	</div>


	<!-- <div class="row">
		

		<div class="section-fourServices">

			<div class="col-md-6">

				<div id="trigger-serviceImgFive"></div>

				<div class="rightServices servicesFive">
					
					<img src="<?php echo $servicesFour_img['url'] ;?>" alt="<?php echo $servicesFour_img['alt'];?>" title="<?php echo $servicesFour_img['title'];?>"/> 

				</div>
			
			</div>

	
			<div class="col-md-6">

				<div class="leftServices servicesSix">
				
					<img src="<?php echo $servicesFive_img['url'] ;?>" alt="<?php echo $servicesFive_img['alt'];?>" title="<?php echo $servicesFive_img['title'];?>"/> 

				</div>

			</div>
			

		</div>

	</div>
 -->

	<div id="services-row" class="row">
		
		<div class="section-fiveServices">	

			<div id="trigger-serviceImgSeven"></div>

			<div class="col-md-6">

				<div class="rightServices servicesSeven">
					
					<img src="<?php echo $servicesSix_img['url'] ;?>" alt="<?php echo $servicesSix_img['alt'];?>" title="<?php echo $servicesSix_img['title'];?>">

				</div>
				
			</div>

			<div class="col-md-6">

				<div class="leftServices servicesEight">
					
					<h2 class="services_title--lineup" id="artwork"><?php echo $artworkTitle ;?></h2>

					<?php echo $artwork_paraOne ; ?>

					<?php echo $artwork_paraTwo ;?>

				</div>
			
			</div>

		</div>

	</div>

	<!-- <div class="row">
		
		<div class="section-sixServices">

			<div class="col-md-6">

				<div id="trigger-serviceImgNine"></div>

				<div class="rightServices servicesNine">
					
					<img src="<?php echo $servicesSeven_img['url'] ;?>" alt="<?php echo $servicesSeven_img['alt'];?>" title="<?php echo $servicesSeven_img['title'];?>"/> 

				</div>
			
			</div>


			<div class="col-md-6">

				<div class="leftServices servicesTen">
				
					<img src="<?php echo $servicesEight_img['url'] ;?>" alt="<?php echo $servicesEight_img['alt'];?>" title="<?php echo $servicesEight_img['title'];?>"/> 

				</div>

			</div>
			

		</div>

	</div> -->


	<div class="row" id="services-row">
		
		<div class="section-sevenServices">

			<div class="col-md-6 col-md-push-6">
				
				<div id="trigger-serviceImgEleven"></div>

				<div class="rightServices servicesEleven">
					
					<img src="<?php echo $servicesNine_img['url'] ;?>" alt="<?php echo $servicesNine_img['alt'];?>" title="<?php echo $servicesNine_img['title'];?>">

				</div>

			</div>	

			<div class="col-md-6 col-md-pull-6">

				<div class="leftServices servicesTwelve">
					
					<h2 class="services_title--lineup" id="style"><?php echo $webTitle ;?></h2>

					<?php echo $web_paraOne; ?>

					<?php echo $web_paraTwo; ?>

				</div>

			</div>

		</div>

	</div>


	<!-- <div class="row">
		
		<div class="section-eightServices">

			<div class="col-md-6">

				<div id="trigger-serviceImgThirteen"></div>

				<div class="rightServices servicesThirteen">
					
					<img src="<?php echo $servicesTen_img['url'] ;?>" alt="<?php echo $servicesTen_img['alt'];?>" title="<?php echo $servicesTen_img['title'];?>"/> 

				</div>
			
			</div>


			<div class="col-md-6">

				<div class="leftServices servicesFourteen">
				
					<img src="<?php echo $servicesEleven_img['url'] ;?>" alt="<?php echo $servicesEleven_img['alt'];?>" title="<?php echo $servicesEleven_img['title'];?>"/> 

				</div>

			</div>
			

		</div>

	</div> -->


	<div class="row" id="services-row" >
		
		<div class="section-nineServices">

			<div class="col-md-6">
				
				<div id="trigger-serviceImgFifteen"></div>

				<div class="rightServices servicesFifteen">
					
					<img src="<?php echo $servicesTwelve_img['url'] ;?>" alt="<?php echo $servicesTwelve_img['alt'];?>" title="<?php echo $servivesTwelve_img['title'];?>">

				</div>

			</div>	

			<div class="col-md-6">

				<div class="leftServices servicesSixteen">
					
					<h2 class="services_title--lineup" id="advertising"><?php echo $retailTitle ;?></h2>

					<?php echo $retail_paraOne ;?>

					<?php echo $retail_paraTwo ;?>

				</div>

			</div>

		</div>

	</div>


	<!-- <div class="row">
		
		<div class="section-tenServices">

			<div class="col-md-6">

				<div id="trigger-serviceImgSeventeen"></div>

				<div class="rightServices servicesSeventeen">
					
					<img src="<?php echo $servicesThirteen_img['url'] ;?>" alt="<?php echo $servicesThirteen_img['alt'];?>" title="<?php echo $servicesThirteen_img['title'];?>"/> 

				</div>
			
			</div>


			<div class="col-md-6">

				<div class="leftServices servicesEighteen">
				
					<img src="<?php echo $servicesFourteen_img['url'] ;?>" alt="<?php echo $servicesFourteen_img['alt'];?>" title="<?php echo $servicesFourteen_img['title'];?>"/> 

				</div>

			</div>
			

		</div>

	</div> -->


	<div class="row" id="services-row" >
		
		<div class="section-elevenServices">

			<div class="col-md-6 col-md-push-6">
				
				<div id="trigger-serviceImgNineTeen"></div>

				<div class="rightServices servicesNineteen">
					
					<img src="<?php echo $servicesFifteen_img['url'] ;?>" alt="<?php echo $servicesFifteen_img['alt'];?>" title="<?php echo $servicesFifteen_img['title'];?>">

				</div>

			</div>	

			<div class="col-md-6 col-md-pull-6">

				<div class="leftServices servicesTwenty">
					
					<h2 class="services_title--lineup" id="web"><?php echo $styleTitle ;?></h2>

					<?php echo $style_paraOne ;?>

					<?php echo $style_paraTwo ;?>

				</div>

			</div>

		</div>

	</div>


	<!-- <div class="row">
		
		<div class="section-twelveServices">

			<div class="col-md-6">

				<div id="trigger-serviceImgTwentyOne"></div>

				<div class="rightServices servicesTwentyOne">
					
					<img src="<?php echo $servicesSixteen_img['url'] ;?>" alt="<?php echo $servicesSixteen_img['alt'];?>" title="<?php echo $servicesSixteen_img['title'];?>"/> 

				</div>
			
			</div>


			<div class="col-md-6">

				<div class="leftServices servicesTweentyTwo">
				
					<img src="<?php echo $servicesSeventeen_img['url'] ;?>" alt="<?php echo $servicesSeventeen_img['alt'];?>" title="<?php echo $servicesSeventeen_img['title'];?>"/> 

				</div>

			</div>
			

		</div>

	</div> -->


	<div class="row" id="services-row" >
		
		<div class="section-thirteenServices">

			<div class="col-md-6">
				
				<div id="trigger-serviceImgTwentyThree"></div>

				<div class="rightServices servicesTwentyThree">
					
					<img src="<?php echo $servicesEighteen_img['url'] ;?>" alt="<?php echo $servicesEighteen_img['alt'];?>" title="<?php echo $servicesEighteen_img['title'];?>">

				</div>

			</div>	

			<div class="col-md-6">

				<div class="leftServices servicesTwentyFour">
					
					<h2 class="services_title--lineup" id="retail"><?php echo $brandingTitle ;?></h2>

					<?php echo $branding_paraOne ;?>

					<?php echo $branding_paraTwo ;?>

				</div>

			</div>

		</div>

	</div>


	<!-- <div class="row">
		
		<div class="section-fourteenServices">

			<div class="col-md-6">

				<div id="trigger-serviceImgTwentyFive"></div>

				<div class="rightServices servicesTwentyFive">
					
					<img src="<?php echo $servicesNineteen_img['url'] ;?>" alt="<?php echo $servicesNineteen_img['alt'];?>" title="<?php echo $servicesNineteen_img['title'];?>"/> 

				</div>
			
			</div>


			<div class="col-md-6">

				<div class="leftServices servicesTweentySix">
				
					<img src="<?php echo $servicesTwenty_img['url'] ;?>" alt="<?php echo $servicesTwenty_img['alt'];?>" title="<?php echo $servicesTwenty_img['title'];?>"/> 

				</div>

			</div>
			

		</div>

	</div> -->


	<div class="row" id="services-row" >
		
		<div class="section-fifteenServices">

			<div class="col-md-6 col-md-push-6">
				
				<div id="trigger-serviceImgTwentySeven"></div>

				<div class="rightServices servicesTwentySeven">
					
					<img src="<?php echo $servicesTwentyone_img['url'] ;?>"  alt="<?php echo $servicesTwentyone_img['alt'];?>" title="<?php echo $servicesTwentyone_img['title'];?>">

				</div>

			</div>	

			<div class="col-md-6 col-md-pull-6">

				<div class="leftServices servicesTwentyEight">
					
					<h2 class="services_title--lineup" id="photography"><?php echo $photographyTitle ;?></h2>

					<?php echo $photography_paraOne ;?>

					<?php echo $photography_paraTwo ;?>

				</div>

			</div>

		</div>

	</div>


	<!-- <div class="row">
		
		<div class="section-sixteenServices">

			<div class="col-md-6">

				<div id="trigger-serviceImgTwentyNine"></div>

				<div class="rightServices servicesTwentyNine">
					
					<img src="<?php echo $servicesTwentytwo_img['url'] ;?>" alt="<?php echo $servicesTwentytwo_img['alt'];?>" title="<?php echo $servicesTwentytwo_img['title'];?>"/> 

				</div>
			
			</div>


			<div class="col-md-6">

				<div class="leftServices servicesThirty">
				
					<img src="<?php echo $servicesTwentythree_img['url'] ;?>" alt="<?php echo $servicesTwentythree_img['alt'];?>" title="<?php echo $servicesTwentythree_img['title'];?>"/> 

				</div>

			</div>
			

		</div>

	</div> -->


	<div class="row" id="services-row" >
		
		<div class="section-seventeenServices">

			<div class="col-md-6">
				
				<div id="trigger-serviceImgThirtyOne"></div>

				<div class="rightServices servicesThirtyOne">
					
					<img src="<?php echo $servicesTwentyfour_img['url'] ;?>" alt="<?php echo $servicesTwentyfour_img['alt'];?>" title="<?php echo $servicesTwentyfour_img['title'];?>">

				</div>

			</div>	

			<div class="col-md-6">

				<div class="leftServices servicesThirtyTwo">
					
					<h2 class="services_title--lineup"><?php echo $advertisingTitle ;?></h2>

					<?php echo $advertising_paraOne ;?>

					<?php echo $advertising_paraTwo ;?>

				</div>

			</div>

		</div>

	</div>


	<!-- <div class="row">
		
		<div class="section-eighteenServices">

			<div class="col-md-6">

				<div id="trigger-serviceImgThirtyThree"></div>

				<div class="rightServices servicesThirtyThree">
					
					<img src="<?php echo $servicesTwentyfive_img['url'] ;?>" alt="<?php echo $servicesTwentyfive_img['alt'];?>" title="<?php echo $servicesTwentyfive_img['title'];?>"/> 

				</div>
			
			</div>


			<div class="col-md-6">

				<div class="leftServices servicesThirtyFour">
				
					<img src="<?php echo $servicesTwentysix_img['url'] ; ?>" alt="<?php echo $servicesTwentysix_img['alt'];?>" title="<?php echo $servicesTwentysix_img['title'];?>"/> 

				</div>

			</div>
			

		</div>

	</div> -->
	

</div>


    <a id="footer"></a>
      
  </div><!-- PAGE WRAP - DO NOT DELETE -->


<div class="services-footer" id="main-footer">
	<?php get_footer(); ?>
</div>
