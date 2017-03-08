<?php
/*
	Template Name: Logo Guidelines
*/

get_header();?>

<?php the_content() ;?>


<?php
	
/*
	ADVANCED CUSTOM FIELDS 		
*/

	$corporateMain_img		= get_field('corporateMain_img');
	$titleCorporate			= get_field('titleCorporate');
	$corporateContent		= get_field('corporateContent');

	$downloadFile_one		= get_field('downloadFile_one');
	$language_one 			= get_field('language_one');
	$languageContent_one	= get_field('languageContent_one');


	

;?>

<?php the_content() ;?>

<div class="page-content">

	<div class="container">
		
		<div class="row">
			
			<div class="text-row corporate-header">
				
				<div class="corporate-img">
					
					<img src="<?php echo $corporateMain_img ;?>" alt="Aldi Logo" title="Aldi Logo"/>

				</div>

				<div class="corporate-title">
				
					<h1 class="text-center"><?php echo $titleCorporate ;?></h1>
					<p class="text-center"><?php echo $corporateContent ;?></p>

				</div>

			</div>

		</div>
		
		<div class="row corporate-guidelines">

			<div class="col-md-1"></div>

			<div class="col-md-10">
				
				<hr>
				
				<a href="<?php echo $downloadFile_one; ?>" download>

					<div class="fileDownload-img">

						<i class="fa fa-file-archive-o" aria-hidden="true"></i>

					</div>

					<div class="fileDownload-content">
						
						<h2><?php echo $language_one ;?></h2>
						<p><?php echo $languageContent_one ;?></p>

					</div>

				</a>
				
				<hr>

			</div>

		</div>

	</div>


	<a id="footer"></a>

	<div class="contact-footer" id="main-footer">
		
		<?php get_footer();?>

	</div>

	<a id="footer"></a>

	<div class="contact-footer" id="main-footer">
		
		<?php get_footer();?>

	</div>