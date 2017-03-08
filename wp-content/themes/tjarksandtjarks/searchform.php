<form role="search" method="get" class="searchform group" action="<?php echo home_url( '/' ); ?>">
	 <label>
	 <input type="image" class="search-img" alt="Submit search query"
	 src="<?php echo get_template_directory_uri(); ?>/assets/icons/search.png">

	 <input type="search" class="search-field"
	 placeholder="<?php echo esc_attr_x( 'Search', 'placeholder' ) ?>"
	 value="<?php echo get_search_query() ?>" name="s"
	 title="<?php echo esc_attr_x( 'Search for:', 'label' ) ?>" />
	 </label>
 
</form>

