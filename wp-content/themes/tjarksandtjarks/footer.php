<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package tjarksandtjarks
 */

?>

  <!-- MODAL -->

  <div class="modal fade" id="noodles-modal" tabindex="-1" role="dialog" aria-labelledby="videoModal" aria-hidden="true">

    <div class="modal-dialog">

      <div class="modal-content">

          <div class="modal-body">

              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>

              <div>

                  <iframe style="max-width: 100%;" id="noodles-video" src="https://player.vimeo.com/video/202776948" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

            </div>

          </div>

      </div>

    </div>

  </div>


  <!-- FOOTER -->
      
  <div class="footer" >
    
    <div class="container">
      
      <div class="row">

        <div class="col-md-3">

          <div id="footer-one">
            
            <h3>Tjarks & Tjarks Design Group</h3>

            

           <div class="panel-group" id="accordion">
              <div class="panel panel-default">
                <div class="panel-heading">
                 <h4 data-toggle="collapse" data-parent="#accordion" href="#collapse1" class="panel-title expand">
                     <div class="right-arrow pull-left">
                       <div id="menu-icon" class="menu-icon-container">

                          <div class="address-closeOne">

                            <a id="js-officeOne" class="mobile-menu-toggle js-toggle-addressOne hamburger-menu" href="#">
                              <span class="menu-item rotate"></span>
                              <span class="menu-item"></span>

                            </a>
                          
                        </div>

                      </div>

                     </div>
                    <a id="uk-office" href="#">UK Office</a>
                  </h4>
                </div>
                <div id="collapse1" class="panel-collapse collapse">
                  <div class="panel-body">
                    
                    <address>
                        <span id="company-id">Tjarks and Tjarks Design Ltd</span><br>
                    NWS House,<br>
                    1 High Street,<br>
                    Purley, Surrey, CR8 2AF<br>
                        <a href="tel:+442086455900" id="company-tel">+44 (0)20 8645 5900</a>
                    </address> 

                  </div>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 data-toggle="collapse" data-parent="#accordion" href="#collapse2" class="panel-title expand">
                      <div class="right-arrow pull-left">

                        <div id="menu-icon" class="menu-icon-container">

                            <div class="address-closeTwo">

                              <a id="js-officeTwo" class="mobile-menu-toggle js-toggle-addressTwo hamburger-menu" href="#">
                                <span class="menu-item rotate"></span>
                                <span class="menu-item"></span>

                              </a>
                            
                          </div>

                        </div>

                      </div>
                    <a id="us-office" href="#">US Office</a>
                  </h4>
                </div>
                <div id="collapse2" class="panel-collapse collapse">
                  <div class="panel-body">
                    
                    <address>
                        <span id="company-id">Tjarks and Tjarks Design LLC</span><br>
                   111 West Jackson Boulevard<br>
                   Suite 1700<br>
                   Chicago, IL 60604<br>
                        <a href="tel:+13124832100" id="company-tel">+1 (0)312-675-6143</a>
                        <a href="tel:+17738002782" id="company-tel">+1 (0)773 800 2782</a>
                    </address> 

                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>

        <div class="col-md-3">
            
            <div id="footer-two">

              <h3>New Business Enquiries</h3>

                <?php if(ICL_LANGUAGE_CODE == en) :?> 
                  <p>Please <a id="enquiries-link" href="<?php bloginfo('url');?>/contact/">click here</a> to speak with a member of our team.</p>
                <?php endif ;?>

                <?php if(ICL_LANGUAGE_CODE == de) :?> 
                  <p>Please <a id="enquiries-link" href="<?php bloginfo('url');?>/kontakt/">click here</a>to speak with a member of our team.</p>
                <?php endif ;?>

            </div>

          </div>


        <div class="col-md-3">
            
            <div id="footer-three">

              <h3>Client Downloads</h3> 

              <?php if(ICL_LANGUAGE_CODE == en) :?>
                <p>Please <a id="enquiries-link" href="<?php bloginfo('url');?>/downloads">log in here</a> to access our secure client area.</p>
              <?php endif ;?>

              <?php if(ICL_LANGUAGE_CODE == de) :?>
                <p>Please <a id="enquiries-link" href="<?php bloginfo('url');?>/downloads-de/">log in here</a> to access our secure client area.</p>
              <?php endif ;?>



            </div>

        </div>


        
          <div class="col-md-3">
            
            <div id="footer-four">

              <div class="social-icons">
                
                <h3>Connect</h3>

                <a href="mailto:mail@tjarksandtjarks.com">
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                </a>

                <a href="https://www.instagram.com/tjarksandtjarks/" target="_blank">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>

                <a href="" target="_blank">
                  <i class="fa fa-google-plus" aria-hidden="true"></i>
                </a>

                <a href="https://www.linkedin.com/company/tjarks-and-tjarks-design-ltd" target="_blank">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
            
              </div>
                  
            </div>
            
        </div>

      </div>
      
      <?php if(ICL_LANGUAGE_CODE == en) : ?>
      <p id="sitelang">Site Language: <a style="color: #f35c05" href="<?php echo get_site_url();?>/en">English</a> | <a href="<?php echo get_site_url();?>/de">Deutsch</a></p>
      <?php endif ;?>

      <?php if(ICL_LANGUAGE_CODE == de) : ?>
      <p id="sitelang">Site Language: <a href="<?php echo get_site_url();?>/en">English</a> | <a style="color: #f35c05" href="<?php echo get_site_url();?>/de">Deutsch</a></p>
      <?php endif ;?>

      <p id="rightsReserved"> &copy;<?php echo date("Y");?> Tjarks & Tjarks Design Ltd. All Rights Reserved</p>

    </div>

</div>

 <script src="https://use.typekit.net/ajk6gxq.js"></script>
 <script>try{Typekit.load({ async: true });}catch(e){}</script>

 <script src="https://use.typekit.net/ajk6gxq.js"></script>
 <script>try{Typekit.load({ async: true });}catch(e){}</script>

<!-- FONT AWESOME  -->
  
<script src="https://use.fontawesome.com/eba36e1993.js"></script>

<!-- VIMEO PLAY/ STOP SCRIPT -->

<script src="http://a.vimeocdn.com/js/froogaloop2.min.js"></script>
<?php wp_footer(); ?>
<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
  <script>
      (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
      function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
      e=o.createElement(i);r=o.getElementsByTagName(i)[0];
      e.src='//www.google-analytics.com/analytics.js';
      r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
      ga('create','UA-XXXXX-X','auto');ga('send','pageview');
  </script>



</body>

</html>
