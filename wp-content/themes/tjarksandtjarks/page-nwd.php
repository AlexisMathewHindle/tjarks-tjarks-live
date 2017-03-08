<?php
/*
	Template Name: NWD Guidelines Page
*/

get_header();?>

<?php 
	
/*
	ADVANCED CUSTOM FIELDS 		
*/

	$nwdMain_img			= get_field('nwdMain_img');
	$titleNwd 				= get_field('titleNwd');
	$nwdContent				= get_field('nwdContent');

	$downloadFile_one		= get_field('downloadFile_one');
	$language_one 			= get_field('language_one');
	$languageContent_one	= get_field('languageContent_one');


	$downloadFile_two		= get_field('downloadFile_two');
	$language_two 			= get_field('language_two');
	$languageContent_two	= get_field('languageContent_two');

	$downloadFile_three		= get_field('downloadFile_three');
	$language_three			= get_field('language_three');
	$languageContent_three	= get_field('languageContent_three');

	$downloadFile_four		= get_field('downloadFile_four');
	$language_four			= get_field('language_four');
	$languageContent_four	= get_field('languageContent_four');

;?>

<?php the_content() ;?>

<div class="page-content">

	<div class="container">
		
		<div class="row" id="download-intro">
			
			<div class="text-row corporate-header">
				
				<div class="corporate-img">
					
					<img src="<?php echo $nwdMain_img ;?>" alt="Aldi Logo" title="Aldi Logo"/>

				</div>

				<div class="corporate-title">
				
					<h1 class="text-center"><?php echo $titleNwd ;?></h1>
					<p class="text-center"><?php echo $nwdContent ;?></p>

				</div>

			</div>

		</div>

<div class="text-row" id="download-row">
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

		<div class="row corporate-guidelines">

			<div class="col-md-1"></div>

			<div class="col-md-10">
				
				<hr>
				
				<a href="<?php echo $downloadFile_two ;?>" download>

					<div class="fileDownload-img">

						<i class="fa fa-file-archive-o" aria-hidden="true"></i>

					</div>

					<div class="fileDownload-content">
						
						<h2><?php echo $language_two ;?></h2>
						<p><?php echo $languageContent_two ;?></p>

					</div>

				</a>
				
				<hr>

			</div>

		</div>


		<div class="row corporate-guidelines">

			<div class="col-md-1"></div>

			<div class="col-md-10">
				
				<hr>

				<a href="<?php echo $downloadFile_three ;?>" download>

					<div class="fileDownload-img">

						<i class="fa fa-file-archive-o" aria-hidden="true"></i>

					</div>

					<div class="fileDownload-content">
						
						<h2><?php echo $language_three ;?></h2>
						<p><?php echo $languageContent_three ;?></p>

					</div>

				</a>
				
				<hr>

			</div>

		</div>

		<div class="row corporate-guidelines">

			<div class="col-md-1"></div>

			<div class="col-md-10">
				
				<hr>

				<a href="<?php echo $downloadFile_four ; ?>" download>

					<div class="fileDownload-img">

						<i class="fa fa-file-archive-o" aria-hidden="true"></i>

					</div>

					<div class="fileDownload-content">
						
						<h2><?php echo $language_four ;?></h2>
						<p><?php echo $languageContent_four ;?></p>

					</div>

				</a>
				
				<hr>

			</div>

		</div>
</div>
	</div>


	<a id="footer"></a>

	<div class="contact-footer" id="main-footer">
		
		<?php get_footer();?>

	</div>
