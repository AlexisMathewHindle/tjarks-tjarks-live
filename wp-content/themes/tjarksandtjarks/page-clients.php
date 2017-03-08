<?php

/*
	
	Template Name: Clients Page
*/

get_header(); ?>

<?php 
	
	/*
	ADVANCED CUSTOM FIELDS 
	*/

	$clientSlider_one		= get_field('clientSlider_one');
	$aboutTitle				= get_field('aboutTitle');
	$aboutContent			= get_field('aboutContent');

 	$client_imgOne 			= get_field('client_imgOne');
 	$client_imgTwo			= get_field('client_imgTwo');
 	$client_imgThree		= get_field('client_imgThree');
 	$client_imgFour			= get_field('client_imgFour');
 	$client_imgFive			= get_field('client_imgFive');
 	$client_imgSix			= get_field('client_imgSix');
 	$client_imgSeven		= get_field('client_imgSeven');
 	$client_imgEight		= get_field('client_imgEight');
 	$client_imgNine			= get_field('client_imgNine');
 	$client_imgTen			= get_field('client_imgTen');
 	$client_imgEleven		= get_field('client_imgEleven');
 	$client_imgTwelve		= get_field('client_imgTwelve');
 	$client_imgThirteen		= get_field('client_imgThirteen');
 	$client_imgFourteen		= get_field('client_imgFourteen');
 	$client_imgFifteen		= get_field('client_imgFifteen');
 	$client_imgSixteen		= get_field('client_imgSixteen');

 	$flipperImg_one			= get_field('flipperImg_one');
 	$flipperImg_two			= get_field('flipperImg_two');
 	$flipperImg_three		= get_field('flipperImg_three');
 	$flipperImg_four		= get_field('flipperImg_four');
 	$flipperImg_five		= get_field('flipperImg_five');
 	$flipperImg_six			= get_field('flipperImg_six');

 	$block_one 				= get_field('block_one');
 	$blockFooter_one 		= get_field('blockFooter_one');

	$block_two 				= get_field('block_two');
 	$blockFooter_two 		= get_field('blockFooter_two');

 	$block_threeHeader 		= get_field('block_threeHeader');
 	$blockFooter_three 		= get_field('blockFooter_three');

 	$block_four 			= get_field('block_four');
 	$blockFooter_four 		= get_field('blockFooter_four');

 	$block_five 			= get_field('block_five');
 	$blockFooter_five 		= get_field('blockFooter_five');

 	$block_headerSix		= get_field('block_headerSix');
 	$blockFooter_six 		= get_field('blockFooter_six');

 	
 	
 	
 	
 	
 	

;?>

<div class="page-content">

<!-- HERO CLIENTS CONTAINER  -->

<div class="container">

	<div class="row">
		
		<div class="col-md-12">
			
			<div class="hero-scroll">

				<h1><?php echo get_field('blockHeader_two');?></h1>
			
				<div class="heroClients">
					
					<div id="clientsCarousel" class="carousel fade" data-ride="carousel">

			              <ol class="carousel-indicators">
			                <li data-target="carousel-clientsOne" data-slide-to="0" class="active"></li>
			              </ol>

			              <!-- Carousel items -->
			              <div class="carousel-inner">

			              	<img src="<?php echo get_template_directory_uri();?>/assets/img/transparent.png" alt="">
			              	
			                <div class="active item" id="carousel-clientsOne" title="<?php echo $clientSlider_one['title'];?>" style="background-image: url('<?php echo $clientSlider_one['url']	;?>')"></div>

			              </div>

					</div>

				</div>

			</div>

		</div>

	</div>

</div>

<!-- CLIENTS CONTENT CONTAINER -->

<div class="container">
	
	<div class="row">

		<div class="section-one">
		
			<div class="col-md-12" id="about">
				
				<div class="clients-about text-row">
					
					<h1 class="text-center"><?php echo $aboutTitle ;?></h1>
					
					<div class="text-row-split">
						<?php echo $aboutContent ;?>
					</div>
					

				</div>

			</div>

		</div>

	</div>

</div>


<!-- CLIENTS LOGO CONTAINER -->

<div class="container" id="logos">
	
	<div class="clients-logo">

		

		<!-- <div class="clients"> -->
			
			<img class="tall-logo" src="<?php echo $client_imgOne['url'] ;?>" alt="<?php echo $client_imgOne['alt'];?>" title="<?php echo $client_imgOne['title'];?>">

			<img class="tall-logo" src="<?php echo $client_imgTwo['url'] ;?>" alt="<?php echo $client_imgTwo['alt'];?>" title="<?php echo $client_imgTwo['title'];?>">

			<img class="tall-logo" src="<?php echo $client_imgThree['url'] ;?>" alt="<?php echo $client_imgThree['alt'];?>" title="<?php echo $client_imgThree['title'];?>">

			<img class="tall-logo"  src="<?php echo $client_imgFour['url'] ;?>" alt="<?php echo $$client_imgFour['alt'];?>" title="<?php echo $client_imgFour['title'];?>">

			<img src="<?php echo $client_imgFive['url'] ;?>" alt="<?php echo $client_imgFive['alt'];?>" title="<?php echo $client_imgFive['title'];?>">

			<img src="<?php echo $client_imgSix['url'] ;?>" alt="<?php echo $client_imgSix['alt'];?>" title="<?php echo $client_imgSix['title'];?>">

			<img src="<?php echo $client_imgSeven['url'] ;?>" alt="<?php echo $client_imgSeven['alt'];?>" title="<?php echo $client_imgSeven['title'];?>">

			<img src="<?php echo $client_imgEight['url'] ;?>" alt="<?php echo $client_imgEight['alt'] ;?>" title="<?php echo $client_imgEight['title'] ;?>">

			<img src="<?php echo $client_imgNine['url'] ;?>" alt="<?php echo $client_imgNine['alt'] ;?>" title="<?php echo $client_imgNine['title'] ;?>">

			<img src="<?php echo $client_imgTen['url'] ;?>" alt="<?php echo $client_imgTen['alt'] ;?>" title="<?php echo $client_imgTen['title'] ;?>">

			<img src="<?php echo $client_imgEleven['url'] ;?>" alt="<?php echo $client_imgEleven['alt'] ;?>" title="<?php echo $client_imgEleven['title'] ;?>">

			<img src="<?php echo $client_imgTwelve['url'] ;?>" alt="<?php echo $client_imgTwelve['alt'] ;?>" title="<?php echo $client_imgTwelve['title'] ;?>">

			<img src="<?php echo $client_imgThirteen['url'] ;?>" alt="<?php echo $client_imgThirteen['alt'];?>" title="<?php echo $client_imgThirteen['title'];?>">

			<img src="<?php echo $client_imgFourteen['url'] ;?>" alt="<?php echo $client_imgFourteen['alt'] ;?>" title="<?php echo $client_imgFourteen['title'] ;?>">

			<img src="<?php echo $client_imgFifteen['url'] ;?>" alt="<?php echo $client_imgFifteen['alt'] ;?>" title="<?php echo $client_imgFifteen['title'] ;?>">

			<img class="tall-logo"  src="<?php echo $client_imgSixteen['url'] ;?>" alt="<?php echo $client_imgSixteen['alt'] ;?>" title="<?php echo $client_imgSixteen['title'] ;?>">

		</div>		

	</div>

</div>

<!-- QUOTE CONTAINER -->
<div class="container">
	
	<div class="row">
		
		<div class="col-sm-4">
			
			<div class="block">
				
				<div class="block_quote">
				
				<blockquote>
					<h3><?php echo $block_one ;?></h3>
					<footer><?php echo $blockFooter_one ;?></footer>
				</blockquote>

 			</div>

 			<div class="block_image">
 				
 				<img src="<?php echo $flipperImg_one['url'] ;?>" alt="<?php echo $flipperImg_one['alt'] ;?>" title="<?php echo $flipperImg_one['title'] ;?>" >

 			</div>

			</div>

		</div>

		<div class="col-sm-4">
			
			<div class="block">
				
				<div class="block_quote block_quote--bg" title="<?php $flipperImg_two['title'];?>" style="background-image: url('<?php echo $flipperImg_two['url'] ;?>')">
				
				<blockquote>
					<h3><?php echo $block_two ;?></h3>
					<footer><?php echo $blockFooter_two ;?></footer>
				</blockquote>

 			</div>

			</div>

		</div>

		<div class="col-sm-4">
			
			<div class="block">
				
				<div class="block_quote">
				
				<blockquote>
					<h3><?php echo $block_threeHeader ;?></h3>
					<footer><?php echo $blockFooter_three ;?></footer>
				</blockquote>

 			</div>

 			<div class="block_image">
 				
 				<img src="<?php echo $flipperImg_three['url'] ;?>" alt="<?php echo $flipperImg_three['alt'] ;?>" title="<?php echo $flipperImg_three['title'] ;?>" >

 			</div>

			</div>

		</div>

	</div>


	<div class="row">
		
		<div class="col-sm-4">
			
			<div class="block">
				
				<div class="block_quote">
				
				<blockquote>
					<h3><?php echo $block_four ;?></h3>
					<footer><?php echo $blockFooter_four ;?></footer>
				</blockquote>

 			</div>

 			<div class="block_image">
 				
 				<img src="<?php echo $flipperImg_four['url'] ;?>" alt="<?php echo $flipperImg_four['alt'] ;?>" title="<?php echo $flipperImg_four['title'] ;?>" >

 			</div>

			</div>

		</div>

		<div class="col-sm-4">
			
			<div class="block">
				
				<div class="block_quote">
				
				<blockquote>
					<h3><?php echo $block_five ;?></h3>
					<footer><?php echo $blockFooter_five ;?></footer>
				</blockquote>

 			</div>

 			<div class="block_image">
 				
 				<img src="<?php echo $flipperImg_five['url'] ;?>" alt="<?php echo $flipperImg_five['alt'] ;?>" title="<?php echo $flipperImg_five['title'] ;?>" >

 			</div>
				

			</div>
			

		</div>

		<div class="col-sm-4">
			
			<div class="block">
			
			<div class="block_quote block_quote--bg" title="<?php $flipperImg_six['title'];?>" style="background-image: url('<?php echo $flipperImg_six['url'] ;?>')">
				
				<blockquote>
					<h3><?php echo $block_headerSix ;?></h3>
					<footer><?php echo $blockFooter_six ;?></footer>
				</blockquote>

 			</div>

			</div>

		</div>

	</div>

</div>
<a id="footer"><a>

<div class="clients-footer" id="main-footer">

	<?php get_footer(); ?>

</div>