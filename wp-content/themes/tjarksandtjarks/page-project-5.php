<?php
/*
	Template Name: 5th Project Page
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

$project_fullOne		= get_field('project_fullOne');
$project_fullTwo		= get_field('project_fullTwo');
$project_fullThree		= get_field('project_fullThree');
$project_fullFour		= get_field('project_fullFour');
$project_fullFive		= get_field('project_fullFive');
$project_fullSix		= get_field('project_fullSix');
$project_fullSeven		= get_field('project_fullSeven');
$project_fullEight		= get_field('project_fullEight');
$project_fullNine		= get_field('project_fullNine');
$project_fullTen		= get_field('project_fullTen');

$project_leftImgOne		= get_field('project_leftImgOne');

$project_rightImgOne	= get_field('project_rightImgOne');

?>
<!-- PROJECT TEMPLATE 5 -->
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

			<?php if(get_field('project_fullOne') ) : ?>
			
			<div class="col-md-12">

				<div class="project-fullLow">
					
					<img src="<?php echo $project_fullOne['url'];?>" alt="<?php echo $project_fullOne['alt'];?>" title="<?php echo $project_fullOne['title'];?>">

				</div>
				
			</div>

			<?php endif ;?>

		</div>


		<div class="row">

			<?php if(get_field('project_leftImgOne') ) : ?>
			
			<div class="col-md-6">
				
				<div class="project-split">
					
					<img src="<?php echo $project_leftImgOne['url'];?>" alt="<?php echo $project_leftImgOne['alt'];?>" title="<?php echo $project_leftImgOne['title'];?>">					
				
				</div>
				
			</div>

			<?php endif ;?>

			<?php if(get_field('project_rightImgOne') ) : ?>

			<div class="col-md-6">
				
				<div class="project-split">
					
					<img src="<?php echo $project_rightImgOne['url'];?>" alt="<?php echo $project_rightImgOne['alt'];?>" title="<?php echo $project_rightImgOne['title'];?>">
					
				</div>

			</div>

			<?php endif ;?>

		</div>


		<div class="row">

			<?php if(get_field('project_fullTwo') ) : ?>
			
			<div class="col-md-12">

				<div class="project-fullLow">
					
					<img src="<?php echo $project_fullTwo['url'];?>" alt="<?php echo $project_fullTwo['alt'];?>" title="<?php echo $project_fullTwo['title'];?>">

				</div>
				
			</div>

			<?php endif ;?>

		</div>


		<div class="row">

			<?php if(get_field('project_fullThree') ) : ?>
			
			<div class="col-md-12">

				<div class="project-fullLow">
					
					<img src="<?php echo $project_fullThree['url'];?>" alt="<?php echo $project_fullThree['alt'];?>" title="<?php echo $project_fullThree['title'];?>">

				</div>
				
			</div>

			<?php endif ;?>

		</div>


		<div class="row">

			<?php if(get_field('project_fullFour') ) : ?>
			
			<div class="col-md-12">

				<div class="project-fullLow">
					
					<img src="<?php echo $project_fullFour['url'];?>" alt="<?php echo $project_fullFour['alt'];?>" title="<?php echo $project_fullFour['title'];?>">

				</div>
				
			</div>

			<?php endif ;?>

		</div>


		<div class="row">

			<?php if(get_field('project_contentTwo') ) : ?>
			
			<div class="col-md-12">
				
				<div class="project-about text-row-copy">

					<?php echo $project_contentTwo ; ?>

				</div>

			</div>

			<?php endif ;?>

		</div>


		<div class="row">

			<?php if(get_field('project_fullFive') ) : ?>
			
			<div class="col-md-12">

				<div class="project-fullLow">
					
					<img src="<?php echo $project_fullFive['url'];?>" alt="<?php echo $project_fullFive['alt'];?>" title="<?php echo $project_fullFive['title'];?>">

				</div>
				
			</div>

			<?php endif ;?>

		</div>

		<div class="row">

			<?php if(get_field('project_fullSix') ) : ?>
			
			<div class="col-md-12">

				<div class="project-fullLow">
					
					<img src="<?php echo $project_fullSix['url'];?>" alt="<?php echo $project_fullSix['alt'];?>" title="<?php echo $project_fullSix['title'];?>">

				</div>
				
			</div>

			<?php endif ;?>

		</div>


		<div class="row">

			<?php if(get_field('project_fullSeven') ) : ?>
			
			<div class="col-md-12">

				<div class="project-fullLow">
					
					<img src="<?php echo $project_fullSeven['url'];?>" alt="<?php echo $project_fullSeven['alt'];?>" title="<?php echo $project_fullSeven['title'];?>">

				</div>
				
			</div>

			<?php endif ;?>

		</div>

		<div class="row">

			<?php if(get_field('project_fullEight') ) : ?>
			
			<div class="col-md-12">

				<div class="project-fullLow">
					
					<img src="<?php echo $project_fullEight['url'];?>" alt="<?php echo $project_fullEight['alt'];?>" titlet="<?php echo $project_fullEight['title'];?>">

				</div>
				
			</div>

			<?php endif ;?>

		</div>


		<div class="row">	

			<?php if(get_field('project_fullNine') ) : ?>
			
			<div class="col-md-12">

				<div class="project-fullLow">
					
					<img src="<?php echo $project_fullNine['url'];?>" alt="<?php echo $project_fullNine['alt'];?>" title="<?php echo $project_fullNine['title'];?>">

				</div>
				
			</div>

			<?php endif ;?>

		</div>


		<div class="row">

			<?php if(get_field('project_fullNine') ) : ?>
			
			<div class="col-md-12">

				<div class="project-fullLow">
					
					<img src="<?php echo $project_fullTen['url'];?>" alt="<?php echo $project_fullTen['alt'];?>" title="<?php echo $project_fullTen['title'];?>">

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
	                        echo '<a href="' . get_permalink() . '"><img src="'. get_template_directory_uri() .'/assets/img/back.png"><div class="other-workBtn"><p>Previous</p></div></a>';
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