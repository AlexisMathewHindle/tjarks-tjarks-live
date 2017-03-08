
<?php
/*
Template Name: Blog Posts
*/

?>

<?php get_header(); 


/*

	Advanced Custom Fields 
*/

	$news_header				= get_field('news_header');

	$project_category_title 	= get_field('category_title');
	$project_subtitle			= get_field('project_subtitle');
	
	$projectImg_one				= get_field('projectImg_one');
	$projectImg_two				= get_field('projectImg_two');
	$project_three				= get_field('project_three');
?>



    <?php query_posts('post_type=post&post_status=publish&posts_per_page=10&paged='. get_query_var('paged')); ?>

	<?php if( have_posts() ): ?>

    <?php while( have_posts() ): the_post(); 

    	  $url = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );
    	  $title_attribute = the_title_attribute( array( 'echo' => FALSE ) );
    ?>
	
    <div class="page-content">
     
	<a href="<?php the_permalink(); ?>">
		<div class="container-news">
			
			<div class="row" style="background: #f2f2f2; margin: 0;">
					
					<div class="carousel-inner">

						<?php echo '<img src="'. $url .'"' ;?>'> 
					
			  		</div>

				<div class="">
				<div class="row" style=" margin-right: 0; margin-left: 0">
				<div class="news-content">
					<div class="row" style=" margin-right: 0; margin-left: 0">
						<div class="col-md-1" id="category-title">
							<div class="news-details">

								<?php
								// heres just the name and permalink:
								foreach((get_the_category()) as $category) {
									$category->category_nicename . ' ';
									get_category_link($category->cat_ID);
								}
								?>

								<h3><?php echo get_field('category_title'); ?></h3>
								<h4><span id="news-date"><?php echo get_the_date(); ?></span></h4>
							</div>
						</div>
						<div class="col-md-3"><div id="news-line"></div></div>
						<div class="col-md-8">


							<div class="news-description">

								<h2><?php the_title();?></h2>

								<?php the_excerpt(__('Continue reading »','example')); ?>

							</div>

						</div>
						</div>
					</div>

				</div>

			</div>

		</div>
	</a>

        <?php endwhile; ?>

		<div class="navigation">
			<span class="newer"><?php previous_posts_link(__('« Newer','example')) ?></span> <span class="older"><?php next_posts_link(__('Older »','example')) ?></span>
		</div><!-- /.navigation -->

	<?php else: ?>

		<div id="post-404" class="noposts">

		    <p><?php _e('None found.','example'); ?></p>

	    </div><!-- /#post-404 -->

	<?php endif; wp_reset_query(); ?>

	</div><!-- /#content -->

<a id="footer"></a>

<div class="contact-footer" id="main-footer">
	
	<?php get_footer(); ?>

</div>
