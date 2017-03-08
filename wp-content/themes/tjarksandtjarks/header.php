<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package tjarksandtjarks
 */

?>


<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Tjarks and Tjarks specialise in design, artwork, digital illustration, web development, 3D visuals and consumer strategy">
<meta property="og:title" content="Tjarks and Tjarks is an international design agency"/>
<meta property="og:description" content="We have 25 years experience in creating highly innovative design"/>
<meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/assets/img/tjarks_logo_tile_image.png" />
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
  
<!-- CONCAT CSS -->
<link href="<?php bloginfo('stylesheet_directory'); ?>/assets/css/editable.css" rel="stylesheet" type="text/css" >  

<link href="<?php bloginfo('stylesheet_directory'); ?>/assets/css/app.css" rel="stylesheet" type="text/css" >  

<?php wp_head(); ?>

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body <?php body_class(); ?>>

<div id="outdated-browser">
  <div id="outdated-content">
     <h4 class="text-center">Your browser is out-of-date! Please update your browser to view this website correctly.</h4>
     <p class="last"><a href="#" id="btnCloseUpdateBrowser" title="Close">&times;</a></p>
  </div>
</div>

<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'tjarksandtjarks' ); ?></a>


	  <div class="page-wrap" id="page-top">
      
	      <div class="aside-container">
                  
        <div class="projects-menu">

           <div class="container">
        
            <ul class="mobileMenu-nav">

              <?php 

                if(ICL_LANGUAGE_CODE == en) {

              ;?>

              <li class="<?php echo $_SERVER['REQUEST_URI'] ==  '/' ?  'active' : ''  ?>">
                <a href="<?php bloginfo('url');?>">Home</a>
              </li>
              <li class="<?php echo $_SERVER['REQUEST_URI'] ==  '/en/about/' ?  'active' : ''  ?>">
                <a href="<?php bloginfo('url');?>/about">About</a>
              </li>
              <li class="<?php echo $_SERVER['REQUEST_URI'] ==  '/en/work/' ?  'active' : ''  ?>">
                <a href="<?php echo bloginfo('url');?>/work">Work</a>
              </li>
              <li class="<?php echo $_SERVER['REQUEST_URI'] ==  '/en/services/' ?  'active' : ''  ?>">
                <a href="<?php echo bloginfo('url');?>/services">Services</a>
              </li>
              <li class="<?php echo $_SERVER['REQUEST_URI'] ==  '/en/clients/' ?  'active' : ''  ?>">
                <a href="<?php echo bloginfo('url');?>/clients">Clients</a>
              </li>
              <li class="<?php echo $_SERVER['REQUEST_URI'] ==  '/en/blog/' ?  'active' : ''  ?>">
                <a href="<?php echo bloginfo('url');?>/news">News</a>
              </li>
              <li class="<?php echo $_SERVER['REQUEST_URI'] ==  '/en/contact/' ?  'active' : ''  ?>">
                <a href="<?php echo bloginfo('url');?>/contact">Contact</a>
              </li>

              <?php }else{ ;?>

              <li class="<?php echo $_SERVER['REQUEST_URI'] ==  '/de/' ?  'active' : ''  ?>">
                <a href="<?php bloginfo('url');?>">Home</a>
              </li>
              <li class="<?php echo $_SERVER['REQUEST_URI'] ==  '/de/about/' ?  'active' : ''  ?>">
                <a href="<?php bloginfo('url');?>/ueberuns">Über uns</a>
              </li>
              <li class="<?php echo $_SERVER['REQUEST_URI'] ==  '/de/work/' ?  'active' : ''  ?>">
                <a href="<?php echo bloginfo('url');?>/portfolio">Projekte</a>
              </li>
              <li class="<?php echo $_SERVER['REQUEST_URI'] ==  '/de/services/' ?  'active' : ''  ?>">
                <a href="<?php echo bloginfo('url');?>/services-de">Dienstleistungen</a>
              </li>
              <li class="<?php echo $_SERVER['REQUEST_URI'] ==  '/de/clients/' ?  'active' : ''  ?>">
                <a href="<?php echo bloginfo('url');?>/Kunden">Kunden</a>
              </li>
              <li class="<?php echo $_SERVER['REQUEST_URI'] ==  '/de/contact/' ?  'active' : ''  ?>">
                <a href="<?php echo bloginfo('url');?>/kontakt">Kontakt</a>
              </li>

              <?php } ;?>

            </ul>

            <ul class="flags">
              <?php pll_the_languages(array(
                'show_names'=>1)
              ); ?>
            </ul>

          </div>

          <h2 class="text-center">Latest Projects</h2>
                
          <?php
            
            $args = array( 
                'posts_per_page' =>5,
                'post_type' => 'work', 
                'orderby' => 'date',
                'order' => 'DESC'
            );

             $categories = get_the_category();
              $cats = '';
              foreach( $categories as $category ) {
                  $cats .= ' ' . $category->name;
              }
        

            $postslist = get_posts( $args );
            foreach ( $postslist as $post ) :
              setup_postdata( $post ); ?> 
              
              <a href="<?php echo get_permalink() ;?>">
              <div class='col-md-3' id="left-container">
                <div class="mobile-container" id="leftSide">
                  <?php the_post_thumbnail(); ?>
                  <div class="overlay">
                    <div class="left-content">
                      <div class="overbox">
                        <div class="text-overbox">
                          <div class="title overtext">
                            <h2><?php echo get_field('project_title'); ?></h2>
                          </div>
                          <div class="tagline overtext">
                            <p><?php echo get_field('project_sub_title'); ?></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </a>
            <?php
            endforeach; 
            wp_reset_postdata();
          ?>
         
          <div class="all-workBtn">
            
            <a href="<?php bloginfo('url');?>/work">Click Here to see all our work</a>

          </div>    
        </div>

      </div>

      <div class="header-top">
          
          <a href="<?php bloginfo('url');?>">

            <div class="mainLogo">

                <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/Tjarks-and-Tjarks-Logo-New.svg" alt="Tjarks & Tjarks Logo" title="Tjarks & Tjarks Logo">

            </div>

          </a>

          <div id="menu-icon" class="menu-icon-container">

            <div class="menu-icon">

              <a class="mobile-menu-toggle js-toggle-menu hamburger-menu" href="#">
                <span class="menu-item rotate"></span>
                <span class="menu-item"></span>

              </a>
            
          </div>

        </div>

        <?php 

        	wp_nav_menu( array(

        		'theme_location'	=> 'primary',
        		'container'			=> 'nav',
        		'container_class'	=> 'navbar',
        		'menu_class'		=> 'menu',
        		'menu_id'			=> 'geniNav'
        	) );

        ;?>


      </div>
