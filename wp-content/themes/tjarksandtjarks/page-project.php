<?php
/*
	Template Name: 1st Project Page
*/
get_header(); ?>

<?php

/*
	ADVANCED CUSTOM FIELDS VARIABLES  
*/
	$projectSlider_one		= get_field('projectSlider_one');

	$project_title			= get_field('project_title');
	$project_content		= get_field('project_content');	

	$project_leftImgOne		= get_field('project_leftImgOne');
	// $project_leftTitle      = get_field('project_leftTitle');
	// $project_leftSubTitle	= get_field('project_leftSubTitle');
	$project_rightImgOne	= get_field('project_rightImgOne');
	$project_rightImgTwo	= get_field('project_rightImgTwo');

	$project_fullImg		= get_field('project_fullImg');
	
;?>
<!-- PROJECT TEMPLATE ONE -->
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

		                     <img src="<?php echo get_template_directory_uri();?>/assets/img/transparent.png" alt="">

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
						
						<?php echo $project_content ; ?>

					</div>

					

				</div>
			</div>
		</div>

	</div>

    <div class="container">
    
    	<div class="row">

     		<div class="section-one">

     			<?php if(get_field('project_leftImgOne') ) : ?>
        
	            <div class="col-xs-12 col-sm-6" id="left-container">
	              
	              <div class="left-container" id="leftSide">
	                <img src="<?php echo $project_leftImgOne['url']; ?>" class="img-responsive" alt="<?php echo $project_leftImgOne['alt']; ?>" title="<?php echo $project_leftImgOne['title']; ?>">

	              </div>

        		</div>

        		<?php endif ;?>

       			<div class="col-xs-12 col-sm-6" id="right-container">
          
          			<div class="right-container">

          			<?php if(get_field('project_rightImgOne') ) : ?>
            
            			<div class="right-container--one" id="rightSide-one">

             				<img src="<?php echo $project_rightImgOne['url'] ; ?>" class="img-responsive" alt="<?php echo $project_rightImgOne['alt'];?>" title="<?php echo $project_rightImgOne['title'];?>">
            			</div>

            		<?php endif ;?>

            		<?php if(get_field('project_rightImgTwo') ) : ?>

            			<div class="right-container--two" id="rightSide-two">

            				<img src="<?php echo $project_rightImgTwo['url'];?>" class="img-responsive" alt="<?php echo $project_rightImgTwo['alt'];?>" title="<?php echo $project_rightImgTwo['title'];?>"/>

              		<?php endif ;?>
      
            			</div>

          			</div>

        		</div>

      		</div>

    	</div>

  	</div>

  	<div class="container">
  		
  		<div class="row">

  		<?php if(get_field('project_fullImg') ) : ?>
  			
  			<div class="col-md-12">
  				
  				<div class="projectFull" title="<?php echo $project_fullImg['title'];?>" style="background-image: url('<?php echo $project_fullImg['url'] ; ?>')"></div>
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

<a id="footer"></a>

<div class="project-footer" id="main-footer">
	<?php get_footer() ; ?>
</div>