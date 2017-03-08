<?php
/*
Template Name: New works page
*/
get_header(); 

    // Variables for slider
    $workSlider_imgOne		= get_field('workSlider_imgOne');
    $workSlider_imgTwo		= get_field('workSlider_imgTwo');
    $workSlider_imgThree	= get_field('workSlider_imgThree');
    $workSlider_imgFour		= get_field('workSlider_imgFour');
    $workSlider_imgFive		= get_field('workSlider_imgFive');
    $workSlider_imgSix      = get_field('workSlider_imgSix');
    $workSlider_imgSeven    = get_field('workSlider_imgSeven');
?>

<div class="page-content">

<div class="container" style="padding-right: 0; padding-left: 0; overflow:hidden;">
	
	<div class="row">
		
		<div class="col-md-12">
			
			<div class="hero-scroll">
				

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
                    
                    <?php if(get_field('workSlider_imgOne') ) : ?>

                        <div class="active item" id="carousel-workOne" title="<?php echo $workSlider_imgOne['title'];?>" style="background-image: url('<?php echo $workSlider_imgOne['url'] ;?>')">    
                        </div>

                    <?php endif ;?>

                     <?php if(get_field('workSlider_imgTwo') ) : ?>

                        <div class="item" id="carousel-workTwo" title="<?php echo $workSlider_imgTwo['title'];?>" style="background-image: url('<?php echo $workSlider_imgTwo['url'] ;?>')">
                        </div>

                    <?php endif ;?>

                    <?php if(get_field('workSlider_imgThree') ) : ?>

                        <div class="item" id="carousel-workThree" title="<?php echo $workSlider_imgThree['title'];?>" style="background-image: url('<?php echo $workSlider_imgThree['url'] ;?>')">
                        </div>
                    
                    <?php endif ;?>

                    
                    <?php if(get_field('workSlider_imgFour') ) : ?>

                        <div class="item" id="carousel-workFour" title="<?php echo $workSlider_imgFour['title'];?>" style="background-image: url('<?php echo $workSlider_imgFour['url'] ;?>')">
                        </div>

                    <?php endif ;?>
                    
                    <?php if(get_field('workSlider_imgFive') ) : ?>

                    <div class="item" id="carousel-workFive" title="<?php echo $workSlider_imgFive['title'];?>" style="background-image: url('<?php echo $workSlider_imgFive['url'] ;?>')"></div>

                    </div>

                    <?php endif ;?>

                    <?php if(get_field('workSlider_imgSix') ) : ?>

                    <div class="item" id="carousel-workSix" title="<?php echo $workSlider_imgSix['title'];?>" style="background-image: url('<?php echo $workSlider_imgSix['url'] ;?>')"></div>

                    </div>

                    <?php endif ;?>

                    <?php if(get_field('workSlider_imgSeven') ) : ?>

                    <div class="item" id="carousel-workSeven" title="<?php echo $workSlider_imgSeven['title'];?>" style="background-image: url('<?php echo $workSlider_imgSeven['url'] ;?>')"></div>

                    </div>

                    <?php endif ;?>

	            </div>

			</div>

		</div>

	</div>

</div>
<div class="container">
	
	<div class="row">
		
		<div class="work-one section-one">

			<div class="col-md-12" id="work">

				<div id="work-intro" class="text-row">
					
                    <?php if ( have_posts() ) : ?>
                    
                        <?php while ( have_posts() ) : the_post(); ?>

                            <h1 class="text-center"><?php echo get_the_title(); ?></h1>


                    <div class="text-row-split">
                            <?php the_content(); ?>
                            </div>
                            
                        <?php endwhile; ?>
                            
                    <?php endif; ?>

				</div>

			</div>

		</div>

	</div>

</div>

<?php 
//******************** Work script *******************************\\ 
?>
<div class="container" style="background: #f9f9f9; padding-left: 0; padding-right: 0;">
    
    <div id="work-filter-menu" class="secondary-menu">
    <div class="button-group filters-button-group">
        <div class="row">

            <div class="work-buttons">
                <button class="active button is-checked" id="all-button" data-filter="*">Show All</button>
            </div>
            
            <?php

            // Get an array of the work cpt categories
            $terms = get_terms('category', array( 'post_type' => 'work', 'hide_empty' => false ) );

            // $array_length = terms array length minus the 2 uncategorised cats.
            $array_length = ( count($terms) - 2 );

            // Set the iterator
            $i = 1;

            // Loop the categories array
            foreach ( $terms as $term ) {
                if( $term->name != 'Uncategorized'){

                    ?>
                    <div class="work-buttons">
                        <button class="button" id="<?php echo $term->slug; ?>" data-filter=".<?php echo $term->name; ?>"><?php echo $term->name; ?></button>
                    </div>
                    <?php
                    // Do the sums to split the rows every 4 
                    // $i_divided = ( $i / 8 );
                    // if( floor($i_divided) == $i_divided && $array_length != $i  ){
                    //    echo '</row><row>';
                    // }
                    // if( $array_length == $i ){
                    //     echo '</row>';
                    // }
                    // $i ++;
                }
            }
            ?>
        </div>

    </div>

</div>

</div>


<div id="work-grid-container" class="container">
    <div class="grid gridWork">
    <?php
    // Query args for work cpt query
    $args = array( 
        'post_type' => 'work', 
        'posts_per_page' => -1,
        'orderby' => 'menu_order',
        'order' => 'ASC'
    );
    
    // Query the args
    $loop_work = new WP_Query( $args );
    
    // Set iterator
    $i = 1;
    
    // Count posts in cpt query
    $array_length = $loop_work->post_count;
    
    // Work cpt loop
    while ( $loop_work->have_posts() ) : $loop_work->the_post(); 
    
        // Get the current items terms
        $categories = get_the_category();
        $cats = '';
        foreach( $categories as $category ) {
            $cats .= ' ' . $category->slug;
        }
        ?>
        <div class="col-sm-6 col-md-4 <?php echo $cats ;?>" data-category="">

           <div class="overlay">

                <div class="project-content">

                    <a class="gallery-image-a">
                        <?php the_post_thumbnail( 'full' );?>
                    </a>

                    <a href="<?php the_permalink(); ?>">

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

                    </a>

                </div>

            </div>

        </div>

    <?php endwhile; ?>

    </div>

</div>



<a id="footer"></a>

<div class="work-footer" id="main-footer">

	<?php get_footer() ; ?>

</div>
