<?php
/*
	Template Name: New Home Page
*/
get_header(); ?>
<?php if (is_front_page()) echo
   '<style type="text/css" title="text/css">.menu-item-5 a
     {color: #f35c05 !important;}</style>'
;?>



<?php
/*
  ADVANCED CUSTOM FIELDS VARIABLES  
*/

  $video_link           = get_field('video_link');


  $homeslider_one       = get_field('homeslider_one');
  $homeslider_two       = get_field('homeslider_two');
  $homeslider_three     = get_field('homeslider_three');
  $homeslider_four      = get_field('homeslider_four');
  $homeslider_five      = get_field('homeslider_five');
  $homeslider_six       = get_field('homeslider_six');
  $homeslider_seven     = get_field('homeslider_seven');


  $first_link           = get_field('first_link');
  $first_image          = get_field('first_image');
  $first_title          = get_field('first_title');
  $first_subtitle       = get_field('first_subtitle');

  $second_link          = get_field('second_link');
  $second_image         = get_field('second_image');
  $second_title         = get_field('second_title');
  $second_subtitle      = get_field('second_subtitle');

  $third_link           = get_field('third_link');
  $third_image          = get_field('third_image');
  $third_title          = get_field('third_title');
  $third_subtitle       = get_field('third_subtitle');

  $fourth_link          = get_field('fourth_link');
  $fourth_image         = get_field('fourth_image'); 
  $fourth_title         = get_field('fourth_title');
  $fourth_subtitle      = get_field('fourth_subtitle');

  $five_link            = get_field('five_link');
  $five_image           = get_field('five_image');
  $five_title           = get_field('five_title');
  $five_subtitle        = get_field('five_subtitle');

  $home_content_para_one= get_field('home_content_para_one');

  $sixth_link           = get_field('sixth_link');
  $sixth_image          = get_field('sixth_image');
  $sixth_title          = get_field('sixth_title');
  $sixth_subtitle       = get_field('sixth_subtitle');

  $seventh_link         = get_field('seventh_link');
  $seventh_image        = get_field('seventh_image');
  $seventh_title        = get_field('seventh_title');
  $seventh_subtitle     = get_field('seventh_subtitle');



  $project_subtitle     =get_field('project_subtitle');


?>

 <div class="page-content">
      <!-- HERO CONTAINER -->
  <div class="container">

    <div class="row">
          
      <div class="col-md-12">
        <!-- home-hero -->
        <div class="hero-scroll ">



          <div id="menu-icon" class="menu-icon-container ">

            <div class="video-close">

              <a class="mobile-menu-toggle js-toggle-video hamburger-menu" href="#">
                <span class="menu-item rotate"></span>
                <span class="menu-item"></span>

              </a>
                    
            </div>

          </div>


          <div class="video-container">
           
           <div class="video_iframe">

             <iframe class="main_iframe" src="https://player.vimeo.com/video/203818797" width="950" height="405" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

            
              <a href="#" id="iframe-modal" data-toggle="modal" data-target="#header-modal" >

                  <div class="video_image-new"></div>

              </a>
          

           </div>
            
          </div>

          <div id="heroCarousel" class="carousel fade" data-ride="carousel" data-interval="3500">

            <ol class="carousel-indicators">

              <li data-target="heroCarousel" data-slide-to="0" class="active"></li>


               <?php if( get_field('homeslider_two') ): ?>

                <li data-target="heroCarousel" data-slide-to="1"></li>
            
              <?php endif; ?>

              <?php if( get_field('homeslider_three') ): ?>

                <li data-target="heroCarousel" data-slide-to="2"></li>
            
              <?php endif; ?>
                        
              <?php if( get_field('homeslider_four') ): ?>

                <li data-target="heroCarousel" data-slide-to="3"></li>
            
              <?php endif; ?>
                       
              <?php if( get_field('homeslider_five') ): ?>

                <li data-target="heroCarousel" data-slide-to="4"></li>
            
              <?php endif; ?>

              <?php if( get_field('homeslider_six') ): ?>

                <li data-target="heroCarousel" data-slide-to="4"></li>
            
              <?php endif; ?>

              <?php if( get_field('homeslider_seven') ): ?>

                <li data-target="heroCarousel" data-slide-to="4"></li>
            
              <?php endif; ?>

            </ol>
            
            

            <!-- Carousel items -->
            <div class="carousel-inner">

              <img src="<?php echo get_template_directory_uri();?>/assets/img/transparent.png" alt="">

              <?php if( get_field('homeslider_one') ): ?> 

                <div class="active item" id="carousel-img--one" title="<?php echo $homeslider_one['title'];?>" style="background-image: url('<?php echo $homeslider_one['url']; ?>')"></div>
             
              
              <?php endif; ?> 

            

              <?php if( get_field('homeslider_two') ): ?> 

              <div class="item" id="carousel-img--two" title="<?php echo $homeslider_two['title'];?>" style="background-image: url('<?php echo $homeslider_two['url']; ?>')"></div>
          
               <?php endif; ?> 
      

             <?php if( get_field('homeslider_three') ): ?>

              <div class="item" id="carousel-img--two" title="<?php echo $homeslider_three['title'];?>" style="background-image: url('<?php echo $homeslider_three['url']; ?>')"></div>
          
             <?php endif; ?>

            <?php if( get_field('homeslider_four') ): ?>

              <div class="item" id="carousel-img--two" title="<?php echo $homeslider_four['title'];?>" style="background-image: url('<?php echo $homeslider_four['url']; ?>')"></div>
          
            <?php endif; ?>

            <?php if( get_field('homeslider_five') ): ?>

              <div class="item" id="carousel-img--two" title="<?php echo $homeslider_five['title'];?>" style="background-image: url('<?php echo $homeslider_five['url']; ?>')"></div>
          
            <?php endif; ?>
           

            </div>

          </div>
              
        </div>

      </div>

    </div>
        
  </div><!-- END OF CONTAINER -->

  <!-- MOBILE ONLY CONTENT -->

  <div class="container videoplayer-top" id="mobile-content">
    
    <div class="row">

      <div class="col-md-12">
        <div id="home-section-two" class="text-row">


          <?php

          if(ICL_LANGUAGE_CODE == en) {

            ;?>

            <!-- <h1 class="text-center">We are Tjarks and Tjarks, a London based <span class="textChange"></span>agency.</h1> -->

            <h1 class="text-center">We are Tjarks and Tjarks, a London based creative agency.</h1>

          <?php }else{ ;?>

            <!-- <h1 class="text-center">Wir sind Tjarks und Tjarks, eine in London ansässige <span class="textChange"></span>agentur.</h1> -->

            <h1 class="text-center">Wir sind Tjarks und Tjarks, eine internationale Kreativagentur.</h1>

          <?php } ;?>

          <div class="text-row-split">

            <div class="col-xs-12">

              <?php echo $home_content_para_one ; ?>

            </div>

          </div>

        </div>
      </div>

    </div>

  </div><!-- END OF MOBILE CONTAINER -->

      
  <!-- SECTION ONE -->

  <!-- MODAL FOR HEADER VIDEO < 767PX -->

    <div class="modal fade" id="header-modal" tabindex="-1" role="dialog" aria-labelledby="videoModal" aria-hidden="true">

      <div class="modal-dialog">

        <div class="modal-content">

            <div class="modal-body">

                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>

                <div>
                    <iframe style="max-width: 100%;" id="noodles-video" src="https://player.vimeo.com/video/203818797" width="950" height="405" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

              </div>

            </div>

        </div>

      </div>

    </div>
  
  <!-- END OF HEADER MODAL < 767PX -->


  <div class="container">
        
    <div class="row">
          
      <div class="section-one videoplayer-top" id="section-one">
            
        <div class="col-xs-12 col-sm-6" id="left-container">

          <a href="<?php echo $first_link;?>">

            <div id="trigger-oneLeft"></div>
          
            <div class="leftSide_One">
              
              <img src="<?php echo $first_image['url'] ; ?>" alt="<?php echo $first_image['alt'] ; ?>" title="<?php echo $first_image['title'] ; ?>">

              <div class="overlay">
                
                <div class="left-content">

                  <div class="overbox">

                    <div class="text-overbox">
                      
                      <div class="title overtext"> 

                        <h2><?php echo $first_title ; ?></h2>

                      </div>

                      <div class="tagline overtext"> 

                        <p><?php echo $first_subtitle; ?></p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </a>

          <a href="<?php echo $second_link ;?>">

            <div class="leftSide_Two">
                  
              <img src="<?php echo $second_image['url'] ; ?>" alt="<?php echo $second_image['alt'] ; ?>" title="<?php echo $second_image['title'] ; ?>">

                <div class="overlay">
                    
                  <div class="left-content">

                    <div class="overbox">

                      <div class="text-overbox">
                        
                        <div class="title overtext"> 

                          <h2><?php echo $second_title ; ?></h2>

                        </div>

                        <div class="tagline overtext"> 

                          <p><?php echo $second_subtitle; ?></p>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

            </div>

          </a>

        </div>

        <div class="col-xs-12 col-sm-6" id="right-container">

          <a href="<?php echo $third_link ;?>">
          
            <div class="rightSide_One">
              
              <img src="<?php echo $third_image['url'] ; ?>" alt="<?php echo $third_image['alt'] ; ?>" title="<?php echo $third_image['title'] ; ?>"> 

              <div class="overlay">
                
                <div class="right-content">

                  <div class="overbox">

                    <div class="text-overbox">
                      
                      <div class="title overtext"> 

                        <h2><?php echo $third_title ; ?></h2>

                      </div>

                      <div class="tagline overtext"> 

                        <p><?php echo $third_subtitle; ?></p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </a>
          
            <div class="rightSide_Two">
              
              <a href="<?php echo $fourth_link ;?>">

                <div class="rightSide_Two--top">
                  
                  <img src="<?php echo $fourth_image['url'] ; ?>" alt="<?php echo $fourth_image['alt'] ; ?>" title="<?php echo $fourth_image['title'] ; ?>">

                  <div class="overlay">
                  
                    <div class="right-content">

                      <div class="overbox">

                        <div class="text-overbox">
                          
                          <div class="title overtext"> 

                            <h2><?php echo $fourth_title ; ?></h2>

                          </div>

                          <div class="tagline overtext"> 

                            <p><?php echo $fourth_subtitle; ?></p>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </a>

              <a href="<?php echo $five_link ;?>">
                
                <div class="rightSide_Two--bottom">
                  
                  <img src="<?php echo $five_image['url'] ; ?>" alt="<?php echo $five_image['alt'] ; ?>" title="<?php echo $five_image['title'] ; ?>">

                  <div class="overlay">
                  
                    <div class="right-content">

                      <div class="overbox">

                        <div class="text-overbox">
                          
                          <div class="title overtext"> 

                            <h2><?php echo $five_title ; ?></h2>

                          </div>

                          <div class="tagline overtext"> 

                            <p><?php echo $five_subtitle; ?></p>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </a>

            </div>

        </div>

      </div>

    </div>

  </div>
  
  <!-- SECTION TWO -->
  <div class="main-content">

    <div class="container">
    
      <div class="row">
        
        <div class="col-md-12">
          <div id="trigger-homeTitle"></div>
          <div id="home-section-two" class="text-row">

               <?php

          if(ICL_LANGUAGE_CODE == en) {

            ;?>

            <h1 class="text-center">We are Tjarks and Tjarks, a London based <span class="textChange"></span>agency.</h1>

            <!-- <h1 class="text-center">We are Tjarks and Tjarks, a London based creative agency.</h1> -->

          <?php }else{ ;?>

            <h1 class="text-center">Wir sind Tjarks und Tjarks, eine internationale <span class="textChange"></span>agentur.</h1>

           <!--  <h1 class="text-center">Wir sind Tjarks und Tjarks, eine in London ansässige kreativ agentur.</h1> -->

          <?php } ;?>
              
              <!-- <h1 class="text-center">We are Tjarks and Tjarks, a London based <span class="textChange"></span>agency.</h1> -->

          
            <div class="text-row-split">
            
              <div class="col-xs-12">

                <?php echo $home_content_para_one ; ?>

              </div>

            </div>
            
          </div>

        </div>

      </div>

    </div>
    
  </div>

  <!-- SECTION THREE -->

  <div class="container" style="margin-top: -5px;">
    
    <div class="row">

      <div class="section-three">
      
        <div class="col-xs-12 col-sm-6 col-md-push-6" id="left-container">

          <div id="trigger-threeImgOne"></div>
          
          <a href="<?php echo $sixth_link ;?>">

            <div class="left-container" id="leftSide-One">

              <img src="<?php echo $sixth_image['url'] ; ?>" class="img-responsive" atl="<?php echo $sixth_image['alt'];?>" title="<?php echo $sixth_image['title'];?>">

                <img style="position: absolute; top: 0; left: 0;" id="aldiImage" src="http://geni-packaging.com/wordpress/wp-content/uploads/2016/12/25-Year-Aldi-Nord-Design-Agency-Tjarks-and-Tjarks-Design-2.jpg" alt="image test" />


                <div class="overlay">
                
                  <div class="left-content">

                    <div class="overbox">

                      <div class="text-overbox">
                        
                        <div class="title overtext"> 

                          <h2><?php echo $sixth_title ; ?></h2>

                        </div>

                        <div class="tagline overtext"> 

                          <p><?php echo $sixth_subtitle; ?></p>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

            </div>

          </a>

        </div>

        <div class="col-xs-12 col-sm-6 col-md-6 col-md-pull-6" id="right-container">

          <?php
            query_posts(array(
              'post_type' => 'post',
              'lang' => 'en',
              'showposts' => 1,)
            );
              while ( have_posts() ) : the_post();

             
          ?>
          
          <div class="right-container">

            <?php 

             if(ICL_LANGUAGE_CODE == en):?>

          <a href="<?php the_permalink(); ?>">

              <div class="right-container--one" id="rightSide-One">

                <?php the_post_thumbnail(); ?>

                <div class="overlay">
                    
                  <div class="right-content">

                      <div class="overbox">
                        
                          <div class="text-overbox">

                              <div class="title overtext">

                                  <h2><?php the_title(); ?></h2>

                              </div>

                              <div class="tagline overtext">

                                  <p><?php echo get_field('project_subtitle') ; ?></p>

                              </div>

                          </div>

                      </div>

                  </div>

                </div>

              </div>

            </a>
            <?php endif; ?>

            <?php

            if(ICL_LANGUAGE_CODE == de):?>

               <a href="<?php echo bloginfo('url'); ?>/portfolio">

               <div class="right-container--one" id="rightSide-One">

                <img src="/wordpress/wp-content/themes/tjarksandtjarks/assets/img/Work-Portfolio-Tjarks-And-Tjarks-Design-London-&-Chicago.jpg"/>

                <div class="overlay">
                    
                  <div class="right-content">

                      <div class="overbox">
                        
                          <div class="text-overbox">

                              <div class="title overtext">

                                  <h2>Unsere Projekte</h2>

                              </div>

                              <div class="tagline overtext">

                                  <p>Eine kleine Auswahl…</p>

                              </div>

                          </div>

                      </div>

                  </div>

                </div>

              </div>

            </a>
            <?php endif; ?>


            <?php endwhile; ?>            
            
            

            <a href="#" id="video-modal" data-toggle="modal" data-target="#noodles-modal" >

              <div class="right-container--two" id="rightSide-Two">

               <img src="<?php echo $seventh_image['url'] ; ?>" class="img-responsive" alt="<?php echo $seventh_image['alt'];?>" title="<?php echo $seventh_image['title'];?>"/>
                
                <div class="overlay" onclick="">
                    
                    <div class="right-content">
                      
                      <div class="overbox">
                        
                          <div class="text-overbox">

                              <div class="title overtext">

                                  <h2><?php echo $seventh_title ; ?></h2>

                              </div>

                              <div class="tagline overtext">

                                  <p><?php echo $seventh_subtitle ; ?></p>

                              </div>

                            </div>

                        </div>

                      </div>

                  </div>

                </div>

              </a>

          </div>

        </div>

      </div>

    </div>

  </div>
        

     
  <a id="footer"></a>
    
  <div class="home-footer" id="main-footer">
  	<?php get_footer(); ?>
  </div>

</div><!-- END OF PAGE CONTENT ??? -->