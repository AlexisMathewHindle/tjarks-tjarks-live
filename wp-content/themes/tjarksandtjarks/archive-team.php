<?php
/*
Template Name: Team page
*/
get_header(); 


?>

<style>

  .gridTeam .overbox {
    top: 0 !important;
  }
</style>



<div class="page-content">
  

  <div class="container">
  		
  	<div class="row" >

          <div class="col-md-12">

              <div class="hero-scroll">

                  <div class="hero-team">
                    
                    <div id="aboutCarousel" class="carousel fade" data-ride="carousel">

                        <ol class="carousel-indicators">
                          <li data-target="carousel-aboutOne" data-slide-to="0" class="active"></li>
                        </ol>

                        <!-- Carousel items -->
                        <div class="carousel-inner">
                        
                          <img src="<?php echo get_template_directory_uri();?>/assets/img/transparent.png" alt="">

                          <div class="active item" id="carousel-aboutOne" style="background-image: url('<?php echo site_url();?>/wp-content/themes/tjarksandtjarks/assets/img/Artworkers-Tjarks-and-Tjarks-Design-Packaging-Branding-&-Artwork-Specailists-London-&-Chicago-5.jpg')"></div>

                        </div>

                    </div>

                  </div>

              </div>

          </div>

      </div>

  </div>

  <div class="container">

		<div class="row">
  			
			<div class="team-one section-one">

				<div class="col-md-12" id="work">

					<div class="text-row">
  						
            <?php 

              if(ICL_LANGUAGE_CODE == en) {

            ;?>

  						<h1 class="text-center">Our Team</h1>

              <div class="text-row-split">

    						<p class="p-large">We are very proud of our wonderful and friendly staff that make up our international team. Originating from the UK, Germany, Austria, France, Romania, Poland, South Africa and the USA, we welcome creative talent from around the globe. This allows us to offer our clients a unique international design service.</p>

              </div>

            
            <?php }else{ ;?>


              <h1 class="text-center">Unser Team</h1>

                <div class="text-row-split">

                  <p class="text-center">Wir sind sehr stolz auf unsere wunderbaren freundlichen Mitarbeiter, die unser internationales Team bilden. Sie kommen aus Großbritannien, Deutschland, Österreich, Frankreich, Rumänien, Polen, Südafrika und den USA – wir haben gerne kreative Talente aus der ganzen Welt in unserem Team. So können wir unseren Kunden einzigartige internationale Design-Dienstleistungen bieten.</p>
                  
                </div>
             <!--  <p class="text-center">We love what we do and we think you will, too.</p> -->


            <?php } ;?>
              
				  </div>

			  </div>

		  </div>

	  </div>

	</div>
  
  <div class="container" style="background-color: #f9f9f9;">

    <div class="row">

      <div class="secondary-menu team-menu">

      <div class="button-group filters-button-group" style="
    padding: 60px 25px 33px;">
        <div class="row">

          <div class="team-buttons">
            <button class="active button is-checked" id="all-button" data-filter="*">Show All</button>
          </div>
              
            <?php

            // Get an array of the work cpt categories
            $terms = get_terms('team_members', array( 'post_type' => 'work', 'hide_empty' => false ) );
            
            // Loop the categories array
            foreach ( $terms as $term ) {

                if( $term->name != 'Uncategorized' ){
                    ?>
                    <div class="team-buttons">
                        <button class="button" id="<?php echo $term->slug; ?>" data-filter=".<?php echo $term->name; ?>"><?php echo $term->name; ?></button>
                    </div>
                <?php
                }
            }


            ?>

        </div>
          
      </div>

    </div>

  </div>
      
    </div>
    
  

  <div class="container">

    <div class="grid-resize row">
      
      <div class="grid-wrap" style="background: #f5f5f5;">
        <!-- removed row class -->
        <div class="grid gridTeam">
           <?php
            $args = array( 
                'post_type' => 'team', 
                'posts_per_page' => -1,
                'orderby' => 'menu_order',
                'order' => 'ASC'
            );

            // Query the args
            $loop_work = new WP_Query( $args );
            // Team cpt loop
            while ( $loop_work->have_posts() ) : $loop_work->the_post(); 
            
           // Get the current items terms
            $categories = get_the_terms( get_the_ID(), 'team_members' );
            $cats = '';
            foreach( $categories as $category ) {
                $cats .= ' ' . $category->slug;
            }
            ?>
            <!-- replace -- col-xs-4 col-sm-3 col-md-2  -->
                
          <div class="col-xs-6 col-sm-3 col-md-2 <?php echo $cats; ?>" data-category="">

            <div class="overlay"> 

               <a class="gallery-image-a" >
                  <?php the_post_thumbnail( 'medium' ); ?>
               </a>
                          
              <div class="team-content">

                <div class="overbox">
                          
                  <div class="text-overbox">

                    <div class="title overtext">

                        <h2><?php echo get_the_title(); ?></h2>

                    </div>

                    <div class="tagline overtext">

                        <p><?php echo get_field('team_sub_heading'); ?></p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div> 

          <?php endwhile; ?>

        </div>
            
      </div>
    	  
    </div>

  </div>

  <a id="footer"></a>

  <div class="work-footer" id="main-footer">

  	<?php get_footer() ; ?>

  </div>
