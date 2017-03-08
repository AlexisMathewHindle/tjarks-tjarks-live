<?php
/*
	Template Name: 4th Project Page
*/
get_header(); ?>

<?php

/*
	ADVANCED CUSTOM FIELDS VARIABLES  
*/
	$projectSlider_one		= get_field('projectSlider_one');

	$project_title			= get_field('project_title');

	$project_contentOne		= get_field('project_contentOne');
	$project_contentTwo		= get_field('project_contentTwo');

	$project_leftImgOne		= get_field('project_leftImgOne');
	$project_leftImgTwo		= get_field('project_leftImgTwo');

	$project_rightImgOne	= get_field('project_rightImgOne');
	$project_rightImgTwo	= get_field('project_rightImgTwo');

	$project_fullOne		= get_field('project_fullOne');
	$project_fullTwo		= get_field('project_fullTwo');
	$project_fullThree		= get_field('project_fullThree');

	$project_highOne		= get_field('project_highOne');
	$project_highTwo		= get_field('project_highTwo');

?>
<!-- PROJECT TEMPLATE 4 -->
<div class="page-content">
	
	<div class="container">
		
		<div class="row">
			
			<div class="col-md-12">
				
				<div class="hero-scroll">

					<div class="heroProject">
	    
		              <div id="projectCarousel" class="carousel fade" data-ride="carousel">

		                    <ol class="carousel-indicators">
		                      <li data-target="carousel-projectOne" data-slide-to="0" class="active"></li>
		                    </ol>

		                    <!-- Carousel items -->
		                    <div class="carousel-inner">

		                      <img src="<?php echo get_template_directory_uri();?>/assets/img/transparent.png">

		                      <div class="active item" id="carousel-aboutOne" title="'<?php echo $projectSlider_one['title'] ; ?>" style="background-image:url('<?php echo $projectSlider_one['url'] ; ?>')"></div>

		                    </div>

		              </div> 

		            </div>
					
				</div>

			</div>

		</div>


		<div class="row">
			
			<div class="col-md-12">
				
				<div class="project-about text-row">
					
					<h1><?php echo $project_title ; ?></h1>

					<div class="text-row-split">
						
						<?php echo $project_contentOne ; ?>

					</div>
					
				</div>

			</div>

		</div>


		<div class="row">

			<?php if(get_field('project_leftImgOne') ) :?>
			
			<div class="col-md-6">
				
				<div class="project-split">
					
					<img src="<?php echo $project_leftImgOne['url'];?>" alt="<?php echo $project_leftImgOne['alt'];?>" title="<?php echo $project_leftImgOne['title'];?>">

				</div>
				
			</div>

			<div class="col-md-6">
				
				<div class="project-split">
					
					<img src="<?php echo $project_rightImgOne['url'];?>" alt="<?php echo $project_rightImgOne['alt'];?>" title="<?php echo $project_rightImgOne['title'];?>">
					
				</div>

			</div>

			<?php endif ;?>

		</div>


		<div class="row">
			
			<?php if(get_field('project_fullOne')) : ?>

			<div class="col-md-12">

				<div class="project-fullLow">
					
					<img src="<?php echo $project_fullOne['url'];?>" alt="<?php echo $project_fullOne['alt'];?>" title="<?php echo $project_fullOne['title'];?>">

				</div>
				
			</div>
			
			<?php endif ;?>

		</div>

		<div class="row">
			
			<?php if(get_field('project_fullTwo')) : ?>

			<div class="col-md-12">

				<div class="project-fullLow">
					
					<img src="<?php echo $project_fullTwo['url'];?>" alt="<?php echo $project_fullTwo['alt'];?>" title="<?php echo $project_fullTwo['title'];?>">

				</div>
				
			</div>
	
			<?php endif ;?>

		</div>


		<div class="row">

			<?php if(get_field('project_leftImgTwo')) : ?>
			
			<div class="col-md-6">
				
				<div class="project-split">
					
					<img src="<?php echo $project_leftImgTwo['url'];?>" alt="<?php echo $project_leftImgTwo['alt'];?>" title="<?php echo $project_leftImgTwo['title'];?>">

				</div>
				
			</div>

			<div class="col-md-6">
				
				<div class="project-split">
					
					<img src="<?php echo $project_rightImgTwo['url'];?>" alt="<?php echo $project_rightImgTwo['alt'];?>" title="<?php echo $project_rightImgTwo['title'];?>">
					
				</div>

			</div>

			<?php endif ;?>

		</div>


		<div class="row">

			<?php if(get_field('project_fullThree')) : ?>
			
			<div class="col-md-12">

				<div class="project-fullLow">
					
					<img src="<?php echo $project_fullThree['url'];?>" alt="<?php echo $project_fullThree['alt'];?>"  title="<?php echo $project_fullThree['title'];?>">

				</div>
				
			</div>

			<?php endif ;?>

		</div>


		<div class="row">

			<?php if(get_field('project_contentTwo')) : ?>
			
			<div class="col-md-12">
				
				<div class="project-about text-row-copy">

					<p><?php echo $project_contentTwo ; ?></p>

				</div>

			</div>

			<?php endif ;?>

		</div>


		<div class="row">

			<?php if(get_field('project_highOne')) : ?>
			
			<div class="col-md-12">

				<div class="project-fullHigh">
					
					 <img src="<?php echo $project_highOne['url'];?>" alt="<?php echo $project_highOne['alt'];?>" title="<?php echo $project_highOne['title'];?>"style="width: 100%; height: auto">

				</div>
				
			</div>

			<?php endif ;?>

		</div>


		<div class="row">

			<?php if(get_field('project_highTwo')) : ?>
			
			<div class="col-md-12">

				<div class="project-fullHigh">
					
					 <img src="<?php echo $project_highTwo['url'];?>" alt="<?php echo $project_highTwo['alt'];?>" title="<?php echo $project_highTwo['url'];?>" style="width: 100%; height: auto">

				</div>
				
			</div>

			<?php endif ;?>

		</div>

		<div class="row">

			<div class="col-xs-6">


				<?php 
					if( get_adjacent_post(false, '', true) ) { 
	                    previous_post_link('%link', '<div class="other-workBtn"><img src="'.get_template_directory_uri().'/assets/img/back.png" /><p>Previous</p></div>');
	                } else { 
	                    $first = new WP_Query('posts_per_page=1&order=DESC&post_type=work'); $first->the_post();
	                        echo '<a href="' . get_permalink() . '"><div class="other-workBtn"><img src="'. get_template_directory_uri() .'/assets/img/back.png"><p>Previous</p></div></a>';
	                    wp_reset_query();
	                }; 

				?>
							

			</div>

			<div class="col-xs-6">

				

				<?php 
					
					 if( get_adjacent_post(false, '', false) ) { 
		                    next_post_link('%link', '<div class="other-workBtn"><p>Next</p><img src="'.get_template_directory_uri().'/assets/img/forward.png" /></div>');
		                } else { 
		                    $last = new WP_Query('posts_per_page=1&order=ASC&post_type=work'); $last->the_post();
		                        echo '<a href="' . get_permalink() . '"><div class="other-workBtn"><p>Next</p><img src="'. get_template_directory_uri() .'/assets/img/forward.png"></div></a>';
		                    wp_reset_query();
	                }; 
				?>
					
				
				
			</div>

		</div>


	</div>

</div>

<a id="footer"></a>

<div class="project-footer" id="main-footer">
	<?php get_footer() ; ?>
</div>