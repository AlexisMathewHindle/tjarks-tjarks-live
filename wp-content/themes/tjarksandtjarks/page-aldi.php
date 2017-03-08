<?php 
/*
	Template Name: Aldi 25 Years
*/

get_header(); 

/* ADVANCED CUSTOM FIELDS */

$heroAldi_bg	= get_field('heroAldi_bg');
$aldiTitle		= get_field('aldiTitle');
$aldiContent	= get_field('aldiContent');
?>

<div class="page-content">

	<!-- HERO CONTAINER -->

	<div class="container" style="padding-right: 0; padding-left: 0; overflow:hidden;">
	
		<div class="row">
			
			<div class="col-md-12">
				
				<div class="hero-scroll" style="z-index: -1000;">
					

				<div id="workCarousel" class="carousel fade" data-ride="carousel" data-interval="3000">
					<ol class="carousel-indicators">
						<li data-target="carousel-workOne" data-slide-to="0" class="active"></li>
						<li data-target="carousel-workTwo" data-slide-to="1"></li>
						<li data-target="carousel-workThree" data-slide-to="2"></li>
						<li data-target="carousel-workFour" data-slide-to="3"></li>
						<li data-target="carousel-workFive" data-slide-to="4"></li>
					</ol>

					<!-- Carousel items -->
					<div class="carousel-inner">

						<img src="<?php echo get_template_directory_uri();?>/assets/img/transparent.png" alt="">
						
						

							<div class="active item" id="carousel-workOne" title="<?php echo $workSlider_imgOne['title'];?>" style="background-image: url('http://geni-packaging.com/wordpress/wp-content/uploads/2017/01/25-years-aldi-profile.png')">    
							</div>

					

						

							<div class="item" id="carousel-workTwo" title="<?php echo $workSlider_imgTwo['title'];?>" style="background-image: url('http://geni-packaging.com/wordpress/wp-content/uploads/2017/03/25-Year-Aldi-Nord-Design-Agency-Tjarks-and-Tjarks-Design-Feature.jpg')">
							</div>

					

					</div>

				</div>

			</div>

		</div>

	</div>

	</div>

	<!-- ALDI CONTENT CONTAINER -->

	<div class="container">
		
		<div class="row">

			<div class="section-one" id="25-years-intro">
			
				<div class="col-md-12 about" id="about">
					
					<div class="clients-about text-row">
						
						<h1 class="text-center"><?php echo $aldiTitle ;?></h1>
						
						<div class="text-row-split">
							<p><span id="aldi-list">A historical journey covering their first ever brand guideline, hundreds of brands, thousands of designs and tens of thousands of artworks...</span></p>
							<br>
							<br>
							<p><?php echo $aldiContent ;?></p>
						</div>

					</div>

				</div>

			</div>

		</div>

	</div>

	<div class='container' id="logos">
		<div class="clients-logo child-logo">
			<div class="row">
				<?php 
					$dirPath = get_template_directory() . '/assets/aldi/' ;
					$dirUri = get_template_directory_uri() . '/assets/aldi/';

					$images = preg_grep('/^([^.])/', scandir( $dirPath ));

					
					foreach( $images as $image ):
					    echo "<img src='" . $dirUri . $image ."' />";
					endforeach;

				?>

			</div>
		</div>
	</div>
	<a id="footer"></a>

	<div class="home-footer" id="main-footer">
		<?php get_footer(); ?>
	</div>

</div><!-- END OF PAGE CONTENT ??? -->
