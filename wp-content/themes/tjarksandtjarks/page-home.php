<?php
/*
	Template Name: Home Page
*/
get_header(); ?>



<?php
/*
	ADVANCED CUSTOM FIELDS VARIABLES  
*/

	$video_link 			    = get_field('video_link');

	$homeslider_one			  = get_field('homeslider_one');
	$homeslider_two			  = get_field('homeslider_two');
	$homeslider_three		  = get_field('homeslider_three');
	$homeslider_four		  = get_field('homeslider_four');
	$homeslider_five		  = get_field('homeslider_five');


  $first_link           = get_field('first_link');
  $second_link          = get_field('second_link');
  $third_link           = get_field('third_link');

	$first_image 			    = get_field('first_image');
	$first_title			    = get_field('first_title');
	$first_subtitle		    = get_field('first_subtitle');

	$second_image			    = get_field('second_image');
	$second_title			    = get_field('second_title');
	$second_subtitle		  = get_field('second_subtitle');

	$third_image			    = get_field('third_image');
	$third_title			    = get_field('third_title');
	$third_subtitle		    = get_field('third_subtitle'); 


	// $home_title				= get_field('home_title');
	$home_content_para_one= get_field('home_content_para_one');
	// $home_content_para_two	= get_field('home_content_para_two');

	$fourth_image			    = get_field('fourth_image'); 
	$fourth_title			    = get_field('fourth_title');
	$fourth_subtitle		  = get_field('fourth_subtitle');

	$five_image				    = get_field('five_image');
	$five_title				    = get_field('five_title');
	$five_subtitle			  = get_field('five_subtitle');

	$sixth_image			    = get_field('sixth_image');
	$sixth_title			    = get_field('sixth_title');
	$sixth_subtitle			  = get_field('sixth_subtitle');
;?>


 <div class="page-content">
      <!-- HERO CONTAINER -->

      <div class="container">

        <div class="row">
          
          <div class="col-md-12">

            <div class="hero-scroll home-hero">

               <div id="menu-icon" class="menu-icon-container ">

                    <div class="video-close">

                      <a class="mobile-menu-toggle js-toggle-video hamburger-menu" href="#">
                        <span class="menu-item rotate"></span>
                        <span class="menu-item"></span>

                      </a>
                    
                  </div>

                </div>

              <div class="video-container">
          
                <video id="videoplayer" class="videoplayer">
                  <source src="<?php echo $video_link ; ?>">
                </video>

                <div class="control">
                  <i class="fa fa-play-circle" aria-hidden="true"></i>
                </div>

              </div>

              <div id="heroCarousel" class="carousel fade" data-ride="carousel">

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

                </ol>
  
                <!-- Carousel items -->
                <div class="carousel-inner">

                  <img src="<?php echo get_template_directory_uri();?>/assets/img/transparent.png" alt="">

                  
                  <div class="active item" id="carousel-img--one" title="<?php echo $homeslider_one['title'];?>" style="background-image: url('<?php echo $homeslider_one['url']; ?>')"></div>

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
        
      </div>


      <!-- FIRST SECTION -->


      <!-- MOBILE ONLY CONTENT -->

      <div class="container" id="mobile-content">
        
        <div class="row">
          
          <div class="col-md-12">
            
            <div class="mobile-content">
                  
                <?php 

                  if(ICL_LANGUAGE_CODE == en) {

                ;?>

                  <h1 class="text-center">We are Tjarks and Tjarks, a London based <span class="textChange"></span>agency.</h1>
                
                <?php }else{ ;?>

                  <h1 class="text-center">Wir sind Tjarks und Tjarks, eine in London ansässige <span class="textChange"></span>agentur.</h1>

                <?php } ;?>

                <?php echo $home_content_para_one ; ?>

            </div>

          </div>

        </div>

      </div>


      <!-- SECTION ONE MAIN -->

      <div class="container">
        
        <div class="row">

          <div class="section-one videoplayer-top" id="section-one">
          
            <div class="col-xs-12 col-sm-6" id="left-container">
              

              <a href="<?php echo $first_link;?>">
                
              
                <div class="left-container" id="leftSide">

                  <img src="<?php echo $first_image['url'];?>" class="img-responsive" alt="<?php echo $first_image['alt'];?>" title="<?php echo $first_image['title'] ;?>">
  					
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

            </div>

            <div class="col-xs-12 col-sm-6" id="right-container">
                
              <div class="right-container">

                <a href="<?php echo $second_link;?>">

                  <div class="right-container--one" id="rightSide-one">

                    <img src="<?php echo $second_image['url'] ; ?>" class="img-responsive" alt="<?php echo $second_image['alt'];?>" title="<?php echo $second_image['title'];?>"/>
                    
                      <div class="overlay">
                        
                        <div class="right-content">

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

                <a href="<?php echo $third_link;?>">

                  <div class="right-container--two" id="rightSide-two">

                    <img src="<?php echo $third_image['url']; ?>" class="img-responsive" alt="<?php echo $third_image['alt'];?>" title="<?php echo $third_image['title'];?>"/>
                    
                    <div class="overlay" onclick="">
                        
                        <div class="right-content">
                          
                          <div class="overbox">
                            
                              <div class="text-overbox">

                                  <div class="title overtext">

                                      <h2><?php echo $third_title ; ?></h2>

                                  </div>

                                  <div class="tagline overtext">

                                      <p><?php echo $third_subtitle ; ?></p>

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
            <div class="section-two">
                
                <h1 class="text-center">We are Tjarks and Tjarks, a London based <span class="textChange"></span>agency.</h1>

            
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

      <div class="container">
        
        <div class="row">

          <div class="section-three" style="margin-top: 25px;">
          
            <div class="col-xs-12 col-sm-6 col-md-push-6" id="left-container">

              <div id="trigger-threeImgOne"></div>
              
              <div class="left-container" id="leftSide-One">

                <img src="<?php echo $fourth_image['url'] ; ?>" class="img-responsive" atl="<?php echo $fourth_image['alt'];?>" title="<?php echo $fourth_image['title'];?>">

                  <div class="overlay">
                  
                    <div class="left-content">

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

            </div>

            <div class="col-xs-12 col-sm-6 col-md-6 col-md-pull-6" id="right-container">
              
              <div class="right-container">
                
                <div class="right-container--one" id="rightSide-One">

                  <img src="<?php echo $five_image['url'] ; ?>" class="img-responsive" alt="<?php echo $five_image['alt'];?>" title="<?php echo $five_image['title'];?>"/>
                  
                    <div class="overlay">
                      
                      <div class="right-content">

                          <div class="overbox">
                            
                              <div class="text-overbox">

                                  <div class="title overtext">

                                      <h2><?php echo $five_title ; ?></h2>

                                  </div>

                                  <div class="tagline overtext">

                                      <p><?php echo $five_subtitle ; ?></p>

                                  </div>

                              </div>

                          </div>

                      </div>

                    </div>

                </div>
                

                <a href="#" id="video-modal" data-toggle="modal" data-target="#noodles-modal" data-theVideo="http://tjarksandtjarks.com/wp-content/themes/tjarksandtjarks/assets/video/Tjarks-and-Tjarks-Introduction.mp4">

                  <div class="right-container--two" id="rightSide-Two">

                   <img src="<?php echo $sixth_image['url'] ; ?>" class="img-responsive" alt="<?php echo $sixth_image['alt'];?>" title="<?php echo $sixth_image['title'];?>"/>
                    
                    <div class="overlay" onclick="">
                        
                        <div class="right-content">
                          
                          <div class="overbox">
                            
                              <div class="text-overbox">

                                  <div class="title overtext">

                                      <h2><?php echo $sixth_title ; ?></h2>

                                  </div>

                                  <div class="tagline overtext">

                                      <p><?php echo $sixth_subtitle ; ?></p>

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
      
      
        
         <div class="modal fade" id="noodles-modal" tabindex="-1" role="dialog" aria-labelledby="videoModal" aria-hidden="true">

            <!-- <div class="vertical-alignment-helper"> -->

                <div class="modal-dialog">

                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <div>
                                <iframe width="100%" height="350" src="" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>

            <!-- </div> -->

          </div>
     


    <a id="footer"></a>
      
  </div><!-- PAGE WRAP - DO NOT DELETE -->


<div class="home-footer" id="main-footer">
	<?php get_footer(); ?>
</div>
