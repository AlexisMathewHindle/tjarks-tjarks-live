<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package tjarksandtjarks
 */

get_header(); ?>


<div class="page-content">
		<!--start-content-->
		<div class="content">
			<!--start-logo-->
			<div class="logo">
				<h1><a href="#"><img src="<?php echo get_template_directory_urI();?>/assets/icons/404-logo.png"/></a></h1>
				<span><img src="<?php echo get_template_directory_uri();?>/assets/icons/404-warning.png"/>Oops! The Page you requested was not found!</span>
				<h3>You can go to <a href="<?php echo bloginfo('url');?>">home</a> page or search below</h3>
			</div>
			<!--end-logo-->
<!---728x90-->
			<!--start-search-bar-section-->
			<ul>
<!-- <?php wp_list_pages( array( 'title_li' => '' ) ); ?> -->
</ul>
			<div class="buttom">
				<div class="seach_bar">
					<p></p>
					<!--start-sear-box-->
					<div class="search_box">
					<!-- <form>
					   <input type="text" value="Search" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search';}"><input type="submit" value="">
				    </form> -->
				    <?php get_search_form(); ?>
					 </div>
				</div>
			</div>
			<!--end-sear-bar-->
		</div>

</div>

<a id="footer"></a>

<div class="project-footer" id="main-footer">
	<?php get_footer(); ?>
</div>
