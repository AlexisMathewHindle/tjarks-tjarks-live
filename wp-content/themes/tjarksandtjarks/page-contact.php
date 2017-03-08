<?php
/*
	Template Name: Contact Page
*/

get_header();?>

<?php 
	
/* 
ADVANCED CUSTOM FIELDS 
*/

$contact_title 			= get_field('contact_title');
$form_title				= get_field('form_title');
$jobBoard_img			= get_field('jobBoard_img');
$jobBoard_titlte		= get_field('jobBoard_titlte');
$jobBoard_content		= get_field('jobBoard_content');
$jobBoard_btn			= get_field('jobBoard_btn');

$positions_title 		= get_field('positions_title');

$roleOne_title			= get_field('roleOne_title');
$roleOne_content		= get_field('roleOne_content');
$roleOne_application	= get_field('roleOne_application');

$roleTwo_title			= get_field('roleTwo_title');
$roleTwo_content		= get_field('roleTwo_content');
$roleTwo_application	= get_field('roleTwo_application');

$roleThree_title		= get_field('roleThree_title');
$roleThree_content		= get_field('roleThree_content');
$roleThree_application	= get_field('roleThree_application');

$roleFour_title			= get_field('roleFour_title');
$roleFour_content		= get_field('roleFour_content');
$roleFour_application	= get_field('roleFour_application');


$roleFive_title			= get_field('roleFive_title');
$roleFive_content		= get_field('roleFive_content');
$roleFive_application	= get_field('roleFive_application');



;?>

<div class="page-content">

<div class="container">
	
	<div class="row">
		
		<div class="col-md-2"></div>

		<div class="col-md-8">
			
			<div class="contact-title">
				
				<h1 class="text-center"><?php echo $contact_title ;?></h1>

				<!-- <a href="#" class="outline"><?php echo $contact_title ;?></a></p> -->
			</div>

		</div>

	</div>

	<div class="row">

		<div class="contact-form">		
			
			<?php 

              if(ICL_LANGUAGE_CODE == en) {

            ;?>

			<?php echo do_shortcode( '[contact-form-7 id="151" title="Main Contact Form"]' ); ?>

			<?php }else{ ;?>

			<?php echo do_shortcode( '[contact-form-7 id="1349" title="German Contact Form"]' ); ?>

			<?php } ;?>

		</div>

	</div>
</div>

<div class="container" id="available-jobs-container">
	<div class="row">

		<div class="col-md-12">
			
			<div class="text-row jobBoard-content">
				<div class="career-sign-up">
				<h2><?php echo $jobBoard_titlte; ?></h2>

				<p><?php echo $jobBoard_content; ?></p>

				<a href="mailto:careers@tjarksandtjarks.com."><button><?php echo $jobBoard_btn ;?></button></a>
			</div>
				</div>
		</div>

	</div>

	<div class="row">
		
		<div class="positions">
			
			<h2 class="text-center"><?php echo $positions_title ;?></h2>
					</div>
			<div class="position-row">
			<div class="col-md-4" id="positions-1">
				
				<hr id="roles">

				<h4 id="roleOne" class="js-active-jobs"><?php echo $roleOne_title ;?></h4>

				<h4 id="roleTwo"><?php echo $roleTwo_title ;?></h4>

				<h4 id="roleThree"><?php echo $roleThree_title ;?></h4>

				<h4 id="roleFour"><?php echo $roleFour_title ;?></h4>

				<h4 id="roleFive"><?php echo $roleFive_title ;?></h4>

			</div>


			<div class="col-md-8" id="positions-2">
				
				<hr id="roleDes">

				<?php if(get_field('roleOne_title') ) :?>

				<div class="role-one js-active-job">
					
					<h3><?php echo $roleOne_title ;?></h3>
					<p><?php echo $roleOne_content ;?></p>
					<p class="job-para-2"><?php echo $roleOne_application ;?></a></p>
				</div>

				<?php endif ;?>

				<?php if(get_field('roleTwo_title') ) :?>

				<div class="role-two">
					
					<h3><?php echo $roleTwo_title ;?></h3>
					<p><?php echo $roleTwo_content ;?></p>
					<p class="job-para-2"><?php echo $roleTwo_application ;?></a></p>

				</div>

				<?php endif ;?>

				<?php if(get_field('roleThree_title') ) :?>

				<div class="role-three">
					
					<h3><?php echo $roleThree_title ;?></h3>
					<p><?php echo $roleThree_content ;?></p>
					<p class="job-para-2"><?php echo $roleThree_application ;?></a></p>

				</div>

				<?php endif ;?>

				<?php if(get_field('roleFour_title') ) :?>

				<div class="role-four">
					
					<h3><?php echo $roleFour_title ;?></h3>
					<p><?php echo $roleFour_content ;?></p>
					<p class="job-para-2"><?php echo $roleFour_application ;?></a></p>

				</div>

				<?php endif ;?>

				<?php if(get_field('roleFive_title') ) :?>

				<div class="role-five">
					
					<h3><?php echo $roleFive_title ;?></h3>
					<p><?php echo $roleFive_content ;?></p>
					<p class="job-para-2"><?php echo $roleFive_application ;?></a></p>

				</div>

				<?php endif ;?>
				
			</div>
			</div>
		</div>
	</div>


</div>

<a id="footer"></a>

<div class="contact-footer" id="main-footer">

	<?php get_footer(); ?>	

</div>
