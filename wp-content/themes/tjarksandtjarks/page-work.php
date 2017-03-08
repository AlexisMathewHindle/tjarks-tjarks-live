<?php

/*
	
	Template Name: Works Page
*/

get_header(); ?>

<?php 

/*
	ADVANCED CUSTOM FIELDS 
*/

	$workSlider_imgOne		= get_field('workSlider_imgOne');
	$workSlider_imgTwo		= get_field('workSlider_imgTwo');
	$workSlider_imgThree	= get_field('workSlider_imgThree');
	$workSlider_imgFour		= get_field('workSlider_imgFour');
	$workSlider_imgFive		= get_field('workSlider_imgFive');

	$workTitle				= get_field('workTitle');
	$workContent			= get_field('workContent');

	$classVariable_one 		= get_field('classVariable_one');
	$catVariable_one		= get_field('catVariable_one');
	$projectOne_img			= get_field('projectOne_img');
	$projectOne_link		= get_field('projectOne_link');
	$projectOne_title		= get_field('projectOne_title');
	$projectOne_subtitle 	= get_field('projectOne_subtitle');

	$classVariable_two 		= get_field('classVariable_two');
	$catVariable_two		= get_field('catVariable_two');
	$projectTwo_img			= get_field('projectTwo_img');
	$projectTwo_link		= get_field('projectTwo_link');
	$projectTwo_title		= get_field('projectTwo_title');
	$projectTwo_subtitle 	= get_field('projectTwo_subtitle');

	$classVariable_three 	= get_field('classVariable_three');
	$catVariable_three		= get_field('catVariable_three');
	$projectThree_img		= get_field('projectThree_img');
	$projectThree_link		= get_field('projectThree_link');
	$projectThree_title		= get_field('projectThree_title');
	$projectThree_subtitle 	= get_field('projectThree_subtitle');

	$classVariable_four	 	= get_field('classVariable_four');
	$catVariable_four		= get_field('catVariable_four');
	$projectFour_img		= get_field('projectFour_img');
	$projectFour_link		= get_field('projectFour_link');
	$projectFour_title		= get_field('projectFour_title');
	$projectFour_subtitle 	= get_field('projectFour_subtitle');

	$classVariable_five	 	= get_field('classVariable_five');
	$catVariable_five		= get_field('catVariable_five');
	$projectFive_img		= get_field('projectFive_img');
	$projectFive_link		= get_field('projectFive_link');
	$projectFive_title		= get_field('projectFive_title');
	$projectFive_subtitle 	= get_field('projectFive_subtitle');

	$classVariable_six	 	= get_field('classVariable_six');
	$catVariable_six		= get_field('catVariable_six');
	$projectSix_img			= get_field('projectSix_img');
	$projectSix_link		= get_field('projectSix_link');
	$projectSix_title		= get_field('projectSix_title');
	$projectSix_subtitle 	= get_field('projectSix_subtitle');

	$classVariable_seven	= get_field('classVariable_seven');
	$catVariable_seven		= get_field('catVariable_seven');
	$projectSeven_img		= get_field('projectSeven_img');
	$projectSeven_link		= get_field('projectSeven_link');
	$projectSeven_title		= get_field('projectSeven_title');
	$projectSeven_subtitle 	= get_field('projectSeven_subtitle');

	$classVariable_eight	= get_field('classVariable_eight');
	$catVariable_eight		= get_field('catVariable_eight');
	$projectEight_img		= get_field('projectEight_img');
	$projectEight_link		= get_field('projectEight_link');
	$projectEight_title		= get_field('projectEight_title');
	$projectEight_subtitle 	= get_field('projectEight_subtitle');
;?>



<!-- HERO WORK CONTAINER  -->

<div class="container">
	
	<div class="row">
		
		<div class="col-md-12">
			
			<div class="hero-scroll">
				

	          <div id="workCarousel" class="carousel fade" data-ride="carousel">
	              <ol class="carousel-indicators">
	                <li data-target="carousel-workOne" data-slide-to="0" class="active"></li>
	                <li data-target="carousel-workTwo" data-slide-to="1"></li>
	                <li data-target="carousel-workThree" data-slide-to="2"></li>
	                <li data-target="carousel-workFour" data-slide-to="3"></li>
	                <li data-target="carousel-workFive" data-slide-to="4"></li>
	              </ol>

	              <!-- Carousel items -->
	              <div class="carousel-inner">
	                <div class="active item" id="carousel-workOne" title="<?php echo $workSlider_imgOne['title'];?>" style="background-image: url('<?php echo $workSlider_imgOne['url'] ;?>')"></div>

	                <div class="item" id="carousel-workTwo" title="<?php echo $workSlider_imgTwo['title'];?>" style="background-image: url('<?php echo $workSlider_imgTwo['url'] ;?>')"></div>

	                <div class="item" id="carousel-workThree" title="<?php echo $workSlider_imgThree['title'];?>" style="background-image: url('<?php echo $workSlider_imgThree['url'] ;?>')"></div>

	                <div class="item" id="carousel-workFour" title="<?php echo $workSlider_imgFour['title'];?>" style="background-image: url('<?php echo $workSlider_imgFour['url'] ;?>')"></div>

	                <div class="item" id="carousel-workFive" title="<?php echo $workSlider_imgFive['title'];?>" style="background-image: url('<?php echo $workSlider_imgFive['url'] ;?>')"></div>

	              </div>

	            </div>

			</div>

		</div>

	</div>

</div>

<!-- WORK CONTENT CONTAINER -->

<div class="container">
	
	<div class="row">
		
		<div class="work-one section-one">

			<div class="col-md-12" id="work">

				<div class="work-about">
					
					<h1 class="text-center"><?php echo $workTitle ;?></h1>

					<p><?php echo $workContent ;?></p>

					
				</div>

			</div>

		</div>

	</div>

</div>

<div class="container">

		<div class="button-group filters-button-group">

    <div class="row">

			  <div class="col-sm-3">
			  	<button class="button is-checked" id="all-button" data-filter="*">Show All</button>
			  </div>	
			  
			  <div class="col-sm-3">
			  	<button class="button" id="packaging" data-filter=".packaging">Packaging</button>
			  </div>

      <div class="col-sm-3">
        <button class="button" id="artwork" data-filter=".artwork">Artwork</button>
      </div>

      <div class="col-sm-3">
        <button class="button" id="webDesign" data-filter=".webDesign">Website Design</button>
      </div>

  </div>

  <div class="row">
			  
			  <div class="col-sm-3">
			  	<button class="button" id="branding" data-filter=".branding">Branding</button>
			  </div>
			  
			  <div class="col-sm-3">
			  	<button class="button" id="retail" data-filter=".retail">3D & Retail</button>
			  </div>

      <div class="col-sm-3">
        <button class="button" id="style" data-filter=".style">Style Guides</button>
      </div>
			  
			  <div class="col-sm-3">
			  	<button class="button" id="advertising" data-filter=".advertising">Advertising</button>
			  </div>
			  
			</div>

	</div>

</div>


<div class="container">

  <div class="row grid gridWork">

       <div class="col-sm-6 col-md-4 <?php echo $classVariable_one ;?>" data-category="<?php $catVariable_one ;?>">

           <div class="overlay">

              <a class="gallery-image-a">
                <img src="<?php echo $projectOne_img ;?>" alt="Tjarks and Tjarks" title="Tjarks and Tjarks">
             </a>
                  
              <div class="project-content">
				
	           <a href="<?php echo $projectOne_link ;?>">

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2><?php echo $projectOne_title ;?></h2>

                          </div>

                          <div class="tagline overtext">

                              <p><?php echo $projectOne_subtitle ;?></p>

                          </div>

                      </div>

                  </div>

	         </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 <?php echo $classVariable_two ;?>" data-category="<?php $catVariable_two ;?>">

           <div class="overlay">

              <a class="gallery-image-a">
                <img src="<?php echo $projectTwo_img ;?>" alt="Tjarks and Tjarks" title="Tjarks and Tjarks">
              </a>
                  
              <div class="project-content">
				
				         <a href="<?php echo $projectTwo_link ;?>">

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2><?php echo $projectTwo_title ;?></h2>

                          </div>

                          <div class="tagline overtext">

                              <p><?php echo $projectTwo_subtitle ;?></p>

                          </div>

                      </div>

                  </div>

				         </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 <?php echo $classVariable_three ;?>" data-category="<?php $catVariable_three ;?>">

           <div class="overlay">

              <a class="gallery-image-a">
                <img src="<?php echo $projectThree_img ;?>" alt="Tjarks and Tjarks" title="Tjarks and Tjarks">
               </a>
                  
              <div class="project-content">
				
		         <a href="<?php echo $projectThree_link ;?>">

	                  <div class="overbox">
	                    
	                      <div class="text-overbox">

	                          <div class="title overtext">

	                              <h2><?php echo $projectThree_title ;?></h2>

	                          </div>

	                          <div class="tagline overtext">

	                              <p><?php echo $projectThree_subtitle ;?></p>

	                          </div>

	                      </div>

	                  </div>

		         </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 <?php echo $classVariable_four ;?>" data-category="<?php $catVariable_four ;?>">

           <div class="overlay">

              <a class="gallery-image-a">
                <img src="<?php echo $projectFour_img ;?>" alt="Tjarks and Tjarks" title="Tjarks and Tjarks">
               </a>
                  
              <div class="project-content">
				
		            <a href="<?php echo $projectFour_link ;?>">

	                    <div class="overbox">
	                      
	                        <div class="text-overbox">

	                            <div class="title overtext">

	                                <h2><?php echo $projectFour_title ;?></h2>

	                            </div>

	                            <div class="tagline overtext">

	                                <p><?php echo $projectFour_subtitle ;?></p>

	                            </div>

	                        </div>

	                    </div>

					</a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 <?php echo $classVariable_five ;?>" data-category="<?php echo $catVariable_five ;?>">

           <div class="overlay">

              <a class="gallery-image-a">
                <img src="<?php echo $projectFive_img ;?>" alt="Tjarks and Tjarks" title="Tjarks and Tjarks">
               </a>
                  
              <div class="project-content">

	              	<a href="<?php echo $projectFive_link ;?>">

	                  <div class="overbox">
	                    
	                      <div class="text-overbox">

	                          <div class="title overtext">

	                              <h2><?php echo $projectFive_title ;?></h2>

	                          </div>

	                          <div class="tagline overtext">

	                              <p><?php echo $projectFive_subtitle ;?></p>

	                          </div>

	                      </div>

	                  </div>

		           </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 <?php echo $classVariable_six ;?>" data-category="<?php echo $catVariable_six ;?>">

           <div class="overlay">

              <a class="gallery-image-a">
                <img src="<?php echo $projectSix_img ;?>" alt="Tjarks and Tjarks" title="Tjarks and Tjarks">
               </a>
                  
              <div class="project-content">
				
		           <a href="<?php echo $projectSix_link ;?>">

	                  <div class="overbox">
	                    
	                      <div class="text-overbox">

	                          <div class="title overtext">

	                              <h2><?php echo $projectSix_title ;?></h2>

	                          </div>

	                          <div class="tagline overtext">

	                              <p><?php echo $projectSix_subtitle ;?></p>

	                          </div>

	                      </div>

	                  </div>

		           </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4  <?php echo $classVariable_seven ;?>" data-category="<?php echo $catVariable_seven ;?>">

           <div class="overlay">

              <a class="gallery-image-a">
                <img src="<?php echo $projectSeven_img ;?>" alt="Tjarks and Tjarks" title="Tjarks and Tjarks">
               </a>
                  
              <div class="project-content">
				
		           <a href="<?php echo $projectSeven_link ;?>">

	                  <div class="overbox">
	                    
	                      <div class="text-overbox">

	                          <div class="title overtext">

	                              <h2><?php echo $projectSeven_title ;?></h2>

	                          </div>

	                          <div class="tagline overtext">

	                              <p><?php echo $projectSeven_subtitle ;?></p>

	                          </div>

	                      </div>

	                  </div>

		         	</a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 <?php echo $classVariable_eight ;?>" data-category="<?php echo $catVariable_eight ;?>">

           <div class="overlay">

               <a class="gallery-image-a">
                <img src="<?php echo $projectEight_img ;?>" alt="Tjarks and Tjarks" title="Tjarks and Tjarks">
               </a>
                  
              <div class="project-content">
				
		           <a href="<?php echo $projectEight_title ;?>">

	                  <div class="overbox">
	                    
	                      <div class="text-overbox">

	                          <div class="title overtext">

	                              <h2><?php echo $projectEight_title ;?></h2>

	                          </div>

	                          <div class="tagline overtext">

	                              <p><?php echo $projectEight_subtitle ;?></p>

	                          </div>

	                      </div>

	                  </div>

		           </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 webDesign" data-category="webDesign">

           <div class="overlay">

              <a class="gallery-image-a">
                <img src="assets/img/Viboo-&-Organiko-Packaging-Design-GENI-Design-Home.png" alt="" title="">
               </a>
                  
              <div class="project-content">
				
				         <a href="project.php">

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2>Chicanos</h2>

                          </div>

                          <div class="tagline overtext">

                              <p>Branding, Packaging</p>

                          </div>

                      </div>

                  </div>
				
				         </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 retail" data-category="retail">

           <div class="overlay">
              
              <a class="gallery-image-a">
                <img src="assets/img/Viboo-&-Organiko-Packaging-Design-GENI-Design-Home.png" alt="" title="">
               </a>

              <div class="project-content">
				
				           <a href="project.php">

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2>James Carpets</h2>

                          </div>

                          <div class="tagline overtext">

                              <p>Branding, Packaging</p>

                          </div>

                      </div>

                  </div>

				           </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 artwork" data-category="artwork">

           <div class="overlay">

               <a class="gallery-image-a">
                <img src="assets/img/Viboo-&-Organiko-Packaging-Design-GENI-Design-Home.png" alt="" title="">
               </a>
                  
              <div class="project-content">
				
				             <a href="project.php">

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2>EDM LDN</h2>

                          </div>

                          <div class="tagline overtext">

                              <p>Branding, Packaging</p>

                          </div>

                      </div>

                  </div>

				         </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 artwork" data-category="artwork">

           <div class="overlay">

               <a class="gallery-image-a">
                <img src="assets/img/Viboo-&-Organiko-Packaging-Design-GENI-Design-Home.png" alt="" title="">
               </a>
                  
              <div class="project-content">

				           <a href="project.php">

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2>Fair Juices</h2>

                          </div>

                          <div class="tagline overtext">

                              <p>Branding, Packaging</p>

                          </div>

                      </div>

                  </div>

				           </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 style" data-category="style">

           <div class="overlay">

              <a class="gallery-image-a">
                <img src="assets/img/Viboo-&-Organiko-Packaging-Design-GENI-Design-Home.png" alt="" title="">
               </a>
                  
              <div class="project-content">
				
				           <a href="project.php">

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2>Sketches</h2>

                          </div>

                          <div class="tagline overtext">

                              <p>Branding, Packaging</p>

                          </div>

                      </div>

                  </div>

				           </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 retail" data-category="retail">

           <div class="overlay">

              <a class="gallery-image-a">
              <img src="assets/img/Viboo-&-Organiko-Packaging-Design-GENI-Design-Home.png" alt="" title="">
             </a>
                  
              <div class="project-content">
				
				         <a href="project.php">

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2>3D Visualisation</h2>

                          </div>

                          <div class="tagline overtext">

                              <p>Branding, Packaging</p>

                          </div>

                      </div>

                  </div>

				         </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 advertising" data-category="advertising">

           <div class="overlay">

              <a class="gallery-image-a">
                <img src="assets/img/Viboo-&-Organiko-Packaging-Design-GENI-Design-Home.png" alt="" title="">
               </a>
                  
              <div class="project-content">

				         <a href="project.php">

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2>Betfair</h2>

                          </div>

                          <div class="tagline overtext">

                              <p>Branding, Packaging</p>

                          </div>

                      </div>

                  </div>

				         </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 retail" data-category="retail">

           <div class="overlay">
              
               <a class="gallery-image-a">
                <img src="assets/img/Viboo-&-Organiko-Packaging-Design-GENI-Design-Home.png" alt="" title="">
               </a>

              <div class="project-content">

				           <a href="project.php">

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2>Hopps & Woolf</h2>

                          </div>

                          <div class="tagline overtext">

                              <p>Branding, Packaging</p>

                          </div>

                      </div>

                  </div>

				           </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 branding" data-category="branding">

           <div class="overlay">

              <a class="gallery-image-a">
                <img src="assets/img/Viboo-&-Organiko-Packaging-Design-GENI-Design-Home.png" alt="" title="">
               </a>
                  
              <div class="project-content">

				         <a href="project.php">

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2>Sharpie</h2>

                          </div>

                          <div class="tagline overtext">

                              <p>Branding, Packaging</p>

                          </div>

                      </div>

                  </div>

				         </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 artwork" data-category="artwork">

           <div class="overlay">

              <a class="gallery-image-a">
                <img src="assets/img/Viboo-&-Organiko-Packaging-Design-GENI-Design-Home.png" alt="" title="">
               </a>
                  
              <div class="project-content">
				
				           <a href="project.php">

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2>Meats</h2>

                          </div>

                          <div class="tagline overtext">

                              <p>Branding, Packaging</p>

                          </div>

                      </div>

                  </div>

				           </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 retail" data-category="retail">

           <div class="overlay">

               <a class="gallery-image-a">
                <img src="assets/img/Viboo-&-Organiko-Packaging-Design-GENI-Design-Home.png" alt="" title="">
               </a>
                  
              <div class="project-content">
				
				           <a href="project.php">

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2>Hudson & Hudson</h2>

                          </div>

                          <div class="tagline overtext">

                              <p>Branding, Packaging</p>

                          </div>

                      </div>

                  </div>

				           </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 advertising" data-category="advertising">

           <div class="overlay">
              
              <a class="gallery-image-a">
                <img src="assets/img/Viboo-&-Organiko-Packaging-Design-GENI-Design-Home.png" alt="" title="">
               </a>

              <div class="project-content">

              	<a href="project.php">

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2>Hopps & Woolf</h2>

                          </div>

                          <div class="tagline overtext">

                              <p>Branding, Packaging</p>

                          </div>

                      </div>

                  </div>

				           </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 retail" data-category="retail">

           <div class="overlay">

              <a class="gallery-image-a">
                <img src="assets/img/Viboo-&-Organiko-Packaging-Design-GENI-Design-Home.png" alt="" title="">
               </a>
                  
              <div class="project-content">
				
				           <a href="project.php">

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2>Meats</h2>

                          </div>

                          <div class="tagline overtext">

                              <p>Branding, Packaging</p>

                          </div>

                      </div>

                  </div>

				         </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 branding" data-category="branding">
           
           <div class="overlay">
              
              <a class="gallery-image-a">
                <img src="assets/img/Viboo-&-Organiko-Packaging-Design-GENI-Design-Home.png" alt="" title="">
               </a>


              <div class="project-content">

				           <a href="project.php">

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2>Not sure</h2>

                          </div>

                          <div class="tagline overtext">

                              <p>Branding, Packaging</p>

                          </div>

                      </div>

                  </div>

				           </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 branding" data-category="branding">

           <div class="overlay">

              <a class="gallery-image-a">
                <img src="assets/img/Viboo-&-Organiko-Packaging-Design-GENI-Design-Home.png" alt="" title="">
               </a>
                  
              <div class="project-content">
				
				           <a href="project.php">

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2>Excel</h2>

                          </div>

                          <div class="tagline overtext">

                              <p>Branding, Packaging</p>

                          </div>

                      </div>

                  </div>

				           </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 webDesign" data-category="webDesign">

           <div class="overlay">
              
              <a class="gallery-image-a">
                <img src="assets/img/Viboo-&-Organiko-Packaging-Design-GENI-Design-Home.png" alt="" title="">
               </a>

              <div class="project-content">

				           <a href="project.php">

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2>Interior</h2>

                          </div>

                          <div class="tagline overtext">

                              <p>Branding, Packaging</p>

                          </div>

                      </div>

                  </div>

				         </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 advertising" data-category="advertising">

           <div class="overlay">

              <a class="gallery-image-a">
                <img src="assets/img/Viboo-&-Organiko-Packaging-Design-GENI-Design-Home.png" alt="" title="">
               </a>
                  
              <div class="project-content">

				           <a href="project.php">	

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2>Kitchen</h2>

                          </div>

                          <div class="tagline overtext">

                              <p>Branding, Packaging</p>

                          </div>

                      </div>

                  </div>
				
				         </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 retail" data-category="retail">

           <div class="overlay">

            <a class="gallery-image-a">
              <img src="assets/img/Viboo-&-Organiko-Packaging-Design-GENI-Design-Home.png" alt="" title="">
            </a>
                  
              <div class="project-content">

				       <a href="project.php">

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2>My Meat</h2>

                          </div>

                          <div class="tagline overtext">

                              <p>Branding, Packaging</p>

                          </div>

                      </div>

                  </div>

				         </a>

              </div>

            </div>
       </div>

       <div class="col-sm-6 col-md-4 packaging" data-category="packaging">

           <div class="overlay">

              <a class="gallery-image-a">
                <img src="assets/img/Viboo-&-Organiko-Packaging-Design-GENI-Design-Home.png" alt="" title="">
               </a>
                  
              <div class="project-content">

				           <a href="project.php">

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2>Nella</h2>

                          </div>

                          <div class="tagline overtext">

                              <p>Branding, Packaging</p>

                          </div>

                      </div>

                  </div>

				           </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 branding" data-category="branding">

           <div class="overlay">

              <a class="gallery-image-a">
                <img src="assets/img/Viboo-&-Organiko-Packaging-Design-GENI-Design-Home.png" alt="" title="">
               </a>
                  
              <div class="project-content">

				           <a href="project.php">

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2>3D Visualisation</h2>

                          </div>

                          <div class="tagline overtext">

                              <p>Branding, Packaging</p>

                          </div>

                      </div>

                  </div>	

				           </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 packaging" data-category="packaging">

           <div class="overlay">

               <a class="gallery-image-a">
                <img src="assets/img/Viboo-&-Organiko-Packaging-Design-GENI-Design-Home.png" alt="" title="">
               </a>
                  
              <div class="project-content">

				           <a href="project.php">

                  <div class="overbox">
                    
                      <div class="text-overbox">

                          <div class="title overtext">

                              <h2>Hopps & Woolf</h2>

                          </div>

                          <div class="tagline overtext">

                              <p>Branding, Packaging</p>

                          </div>

                      </div>

                  </div>

				         </a>

              </div>

            </div>

       </div>

       <div class="col-sm-6 col-md-4 branding" data-category="branding">

           <div class="overlay">

              <a class="gallery-image-a">
                <img src="assets/img/Viboo-&-Organiko-Packaging-Design-GENI-Design-Home.png" alt="" title="">
               </a>
                  
              <div class="project-content">
				
		           <a href="project.php">

                      <div class="overbox">
                        
                          <div class="text-overbox">

                              <div class="title overtext">

                                  <h2>Random</h2>

                              </div>

                              <div class="tagline overtext">

                                  <p>Branding, Packaging</p>

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

<div class="work-footer" id="main-footer">

	<?php get_footer() ; ?>

</div>
