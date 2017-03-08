<?php
/**
 * tjarksandtjarks functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package tjarksandtjarks
 */

if ( ! function_exists( 'tjarksandtjarks_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function tjarksandtjarks_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on tjarksandtjarks, use a find and replace
	 * to change 'tjarksandtjarks' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'tjarksandtjarks', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary', 'tjarksandtjarks' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'tjarksandtjarks_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
}
endif;
add_action( 'after_setup_theme', 'tjarksandtjarks_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function tjarksandtjarks_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'tjarksandtjarks_content_width', 640 );
}
add_action( 'after_setup_theme', 'tjarksandtjarks_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function tjarksandtjarks_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'tjarksandtjarks' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'tjarksandtjarks' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'tjarksandtjarks_widgets_init' );

/**
 * Enqueue scripts and styles.
 */



function tjarksandtjarks_scripts() {
	wp_enqueue_style( 'tjarksandtjarks-style', get_stylesheet_uri() );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'tjarksandtjarks_scripts' );


// Register Script
function custom_scripts() {

	// wp_deregister_script( 'jquery' );
	// wp_register_script( 'jquery', '//code.jquery.com/jquery-1.12.4.min.js', false, '1.12.4', true );
	// wp_enqueue_script( 'jquery' );

	// wp_deregister_script( 'jquery-ui' );
	// wp_register_script( 'jquery-ui', '//code.jquery.com/ui/1.12.0/jquery-ui.js', array( 'jquery' ), '1.2', true );
	// wp_enqueue_script( 'jquery-ui' );

	// wp_deregister_script( 'jquery-migrate' );
	// wp_register_script( 'jquery-migrate', '//code.jquery.com/jquery-migrate-1.2.1.min.js', array( 'jquery' ), '1.2.1', true );
	// wp_enqueue_script( 'jquery-migrate' );

	// wp_deregister_script( 'bootstrap' );
	// wp_register_script( 'bootstrap', '//geni-packaging.com/wordpress/wp-content/themes/tjarksandtjarks/assets/js/bootstrap.min.js', array( 'jquery' ), '1.0', true );
	// wp_enqueue_script( 'bootstrap' );

	// wp_deregister_script( 'isotope' );
	// wp_register_script( 'isotope', 'http://geni-packaging.com/wordpress/wp-content/themes/tjarksandtjarks/assets/js/isotope.pkgd.min.js', array( 'jquery' ), '1.0', true );
	// wp_enqueue_script( 'isotope' );

	// wp_deregister_script( 'ScrollMagic' );
	// wp_register_script( 'ScrollMagic', '//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.3/ScrollMagic.js', array( 'jquery' ), '1.0', true );
	// wp_enqueue_script( 'ScrollMagic' );

	// wp_deregister_script( 'velocity' );
	// wp_register_script( 'velocity', '/wp-content/themes/tjarksandtjarks/assets/js/velocity.js', array( 'jquery' ), '1.0', true );
	// wp_enqueue_script( 'velocity' );

	// wp_deregister_script( 'velocity-ui' );
	// wp_register_script( 'velocity-ui', 'wp-content/themes/tjarksandtjarks/assets/js/velocity.ui.js', array( 'jquery' ), '1.0', true );
	// wp_enqueue_script( 'velocity-ui' );

	// wp_deregister_script( 'slick' );
	// wp_register_script( 'slick', '/wp-content/themes/tjarksandtjarks/assets/js/slick.min.js', array( 'jquery' ), '1.0', true );
	// wp_enqueue_script( 'slick' );

	wp_deregister_script( 'app' );
	wp_register_script( 'app', '/wp-content/themes/tjarksandtjarks/assets/js/app-live.js', array( 'jquery' ), '1.0', true );
	wp_enqueue_script( 'app' );

	// wp_deregister_script( 'main' );
	// wp_register_script( 'main', '//geni-packaging.com/wordpress/wp-content/themes/tjarksandtjarks/assets/js/script.js', array( 'jquery' ), '1.0', true );
	// wp_enqueue_script( 'main' );
	
}
add_action( 'wp_enqueue_scripts', 'custom_scripts' );



/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';


// 

/**********************************************************
            Works custom post type.
***********************************************************/
function geni_work_cpt() {

	$labels = array(
		'name'                  => _x( 'Work', 'Post Type Name', 'text_domain' ),
		'singular_name'         => _x( 'work', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'Work', 'text_domain' ),
		'name_admin_bar'        => __( 'work', 'text_domain' ),
		'archives'              => __( 'Our work', 'text_domain' ),
		'attributes'            => __( 'work Attributes', 'text_domain' ),
		'all_items'             => __( 'Work Items', 'text_domain' ),
		'add_new_item'          => __( 'Add New work item', 'text_domain' ),
		'add_new'               => __( 'Add New', 'text_domain' ),
		'new_item'              => __( 'New work item', 'text_domain' ),
		'edit_item'             => __( 'Edit work item', 'text_domain' ),
		'update_item'           => __( 'Update work item', 'text_domain' ),
		'view_item'             => __( 'View work item', 'text_domain' ),
		'view_items'            => __( 'View works', 'text_domain' ),
		'search_items'          => __( 'Search works', 'text_domain' ),
		'not_found'             => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
		'featured_image'        => __( 'Main work Image', 'text_domain' ),
		'set_featured_image'    => __( 'Set work image', 'text_domain' ),
		'remove_featured_image' => __( 'Remove work image', 'text_domain' ),
		'use_featured_image'    => __( 'Use as work image', 'text_domain' ),
		'insert_into_item'      => __( 'Insert into item', 'text_domain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this item', 'text_domain' ),
		'items_list'            => __( 'works list', 'text_domain' ),
		'items_list_navigation' => __( 'works list navigation', 'text_domain' ),
		'filter_items_list'     => __( 'Filter works list', 'text_domain' ),
	);
	$args = array(
		'label'                 => __( 'work', 'text_domain' ),
		'description'           => __( 'work post type', 'text_domain' ),  
		'labels'                => $labels,
		'supports'              => array( 'thumbnail', 'title', 'editor', 'custom-fields', 'page-attributes'),
		'taxonomies'            => array( 'category' ),
        'menu_icon'             => 'dashicons-hammer',
		'hierarchical'          => true,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => false,		
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
	);
	register_post_type( 'work', $args );

}
add_action( 'init', 'geni_work_cpt', 0 );

/**********************************************************
            Team custom post type.
***********************************************************/
function themes_taxonomy() {  
    register_taxonomy(  
        'team_members',  //The name of the taxonomy. Name should be in slug form (must not contain capital letters or spaces). 
        'team',        //post type name
        array(  
            'hierarchical' => true,  
            'label' => 'Team Categories',  //Display name
            'query_var' => true,
            'rewrite' => array(
                'slug' => 'themes', // This controls the base slug that will display before each term
                'with_front' => false // Don't display the category base before 
            )
        )  
    );  
}  
add_action( 'init', 'themes_taxonomy');

function geni_team_cpt() {

	$labels = array(
		'name'                  => _x( 'Team', 'Post Type Name', 'text_domain' ),
		'singular_name'         => _x( 'team', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'Team', 'text_domain' ),
		'name_admin_bar'        => __( 'team', 'text_domain' ),
		'archives'              => __( 'Our team', 'text_domain' ),
		'attributes'            => __( 'team Attributes', 'text_domain' ),
		'all_items'             => __( 'Team Members', 'text_domain' ),
		'add_new_item'          => __( 'Add New team item', 'text_domain' ),
		'add_new'               => __( 'Add New Member', 'text_domain' ),
		'new_item'              => __( 'New team item', 'text_domain' ),
		'edit_item'             => __( 'Edit team item', 'text_domain' ),
		'update_item'           => __( 'Update team item', 'text_domain' ),
		'view_item'             => __( 'View team item', 'text_domain' ),
		'view_items'            => __( 'View teams', 'text_domain' ),
		'search_items'          => __( 'Search teams', 'text_domain' ),
		'not_found'             => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
		'featured_image'        => __( 'Main team Image', 'text_domain' ),
		'set_featured_image'    => __( 'Set team image', 'text_domain' ),
		'remove_featured_image' => __( 'Remove team image', 'text_domain' ),
		'use_featured_image'    => __( 'Use as team image', 'text_domain' ),
		'insert_into_item'      => __( 'Insert into item', 'text_domain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this item', 'text_domain' ),
		'items_list'            => __( 'teams list', 'text_domain' ),
		'items_list_navigation' => __( 'teams list navigation', 'text_domain' ),
		'filter_items_list'     => __( 'Filter teams list', 'text_domain' ),
	);
	$args = array(
		'label'                 => __( 'team', 'text_domain' ),
		'description'           => __( 'team post type', 'text_domain' ),  
		'labels'                => $labels,
		'supports'              => array( 'thumbnail', 'title', 'page-attributes', 'editor', 'custom-fields'),
        'menu_icon'             => 'dashicons-groups',
		'hierarchical'          => true,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 6,
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,		
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
        'taxonomies'            => array( 'team_members' )
	);
	register_post_type( 'team', $args );

}
add_action( 'init', 'geni_team_cpt', 0 );


// REMOVE WP EMOJI
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );


function my_deregister_scripts(){
 wp_dequeue_script( 'wp-embed' );
}
add_action( 'wp_footer', 'my_deregister_scripts' );
