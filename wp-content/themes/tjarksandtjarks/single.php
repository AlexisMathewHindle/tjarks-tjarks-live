<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package tjarksandtjarks
 */

get_header(); ?>


<?php

/*
	Advanced Custom Fields 
*/

	$news_header		= get_field('news_header');
	
	$projectImg_one		= get_field('projectImg_one');
	$projectImg_two		= get_field('projectImg_two');
	$project_three		= get_field('project_three');
	$projectImg_four    = get_field('projectImg_four');
	$projectImg_five    = get_field('projectImg_five');
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main" id="test">

		<?php
		while ( have_posts() ) : the_post();

		 $url = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );
		 $title_attribute = the_title_attribute( array( 'echo' => FALSE ) );

		?>

		<div class="container">

		  	<div class="row" style="background: #f2f2f2;">

		  		<div class="carousel-inner">

					<!-- <?php echo '<img src="'. $url .'"' ;?>'/> -->
					<img src="<?php echo $news_header['url'];?>" alt="<?php echo $news_header['alt'];?>">
					
		  		</div>
		  		

				<div class="news-content">
					<div class="row" style="margin-right: 0; margin-left: 0">
						<div class="col-md-1"></div>

						<div class="col-md-10">

							<div class="news-details-single">

								<?php
								// heres just the name and permalink:
								foreach((get_the_category()) as $category) {
									$category->category_nicename . ' ';
									get_category_link($category->cat_ID);
								}
								?>

								<h3><?php echo $category->category_nicename . ''; ?></h3>
								<h4><span id="news-date-single"><?php echo get_the_date(); ?></span></h4>

							</div>

							<div class="news-description">

								<h2 class="text-center"><?php the_title();?></h2>

								<?php the_content(__('Continue reading »','example')); ?>

								<img src="<?php echo get_template_directory_uri();?>/assets/img/noodles_sig.png" alt="Noodles Signature">

							</div>


						</div>
					</div>

				</div>

		  	</div>

		  	<div class="row">
	  		
		  		<?php if(get_field('projectImg_one')) : ?>
			  		<div class="col-sm-6">

			  			<div class="newsImg">
							
							<img src="<?php echo get_field('projectImg_one')['url'] ;?>" alt="<?php echo get_field('projectImg_one')['alt'] ;?>" title="<?php echo get_field('projectImg_one')['title'] ;?>">

			  			</div>
			  			
			  		</div>
		  		<?php endif ;?>


				<?php if(get_field('projectImg_two')) : ?>
		  		<div class="col-sm-6">
		  			
		  			<div class="newsImg">

		  				<img src="<?php echo get_field('projectImg_two')['url'] ;?>" alt="<?php echo get_field('projectImg_two')['alt'] ;?>" title="<?php echo get_field('projectImg_two')['title'] ;?>">
		  				
		  			</div>

		  		</div>
		  		<?php endif ;?>
			
				<!-- <?php if(get_field('project_three')) : ?>
		  		<div class="col-sm-4">
		  			
		  			<div class="newsImg">

		  				<img src="<?php echo get_field('project_three')['url'] ;?>" alt="<?php echo get_field('project_three')['alt'] ;?>" title="<?php echo get_field('project_three')['title'] ;?>">
		  				
		  			</div>

		  		</div>
		  		<?php endif ;?> -->
	  		
	  		</div>

	  		<div class="row">

	  			<?php if(get_field('projectImg_four')) : ?>
	  			
	  			<div class="col-md-12">
	  				
	  				<div class="newsImg">

		  				<img src="<?php echo get_field('projectImg_four')['url'] ;?>" alt="<?php echo get_field('projectImg_four')['alt'] ;?>" title="<?php echo get_field('pprojectImg_four')['title'] ;?>">
		  				
		  			</div>

	  			</div>

	  			<?php endif ;?>
	  		</div>

	  		<div class="row">

	  			<?php if(get_field('projectImg_five')) : ?>
	  			
	  			<div class="col-md-12">
	  				
	  				<div class="newsImg">

		  				<img src="<?php echo get_field('projectImg_five')['url'] ;?>" alt="<?php echo get_field('projectImg_five')['alt'] ;?>" title="<?php echo get_field('pprojectImg_five')['title'] ;?>">
		  				
		  			</div>

	  			</div>

	  			<?php endif ;?>
	  		</div>


			<div id="meet-the-team-row" class="row">

				<div class="col-md-12">

					<div class="totalTeam">

						<?php

						if(ICL_LANGUAGE_CODE == en) {

							;?>

							<a href="<?php bloginfo('url');?>/news"><button class="about-btn">Back to News...</button></a>

						<?php }else{ ;?>

							<a href="<?php bloginfo('url');?>/news"><button class="about-btn">Lernen Sie unser gesamtes Team kennen...</button></a>


						<?php } ;?>

					</div>
				</div>
			</div>

		</div>

		<?php

			// get_template_part( 'template-parts/content', get_post_format() );

			// the_post_navigation();

			// // If comments are open or we have at least one comment, load up the comment template.
			// if ( comments_open() || get_comments_number() ) :
			// 	comments_template();
			// endif;

		endwhile; // End of the loop.
		?>

		</main><!-- #main -->
	</div><!-- #primary -->


<a id="footer"></a>


<div class="contact-footer" id="main-footer">

<?php

get_footer(); ?>
	
</div>


