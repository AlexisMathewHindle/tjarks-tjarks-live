<?php
/*
	Template Name: Download Page
*/

get_header();?>

<?php 

/*
	ADVANCED CUSTOM FIELDS
*/

	$downloadTitle 		= get_field('downloadTitle');
	$downloadImg_one	= get_field('downloadImg_one');
	$downloadImg_two	= get_field('downloadImg_two');

	$guidesTitle_one	= get_field('guidesTitle_one');
	$guidesContent_one	= get_field('guidesContent_one');

	$guidesTitle_two	= get_field('guidesTitle_two');
	$guidesContent_two	= get_field('guidesContent_two');

?>

<div class="page-content">

	<div class="container">

		<div class="row">

			<div class="team-one section-one">

				<div class="col-md-12" id="downloads">

					<div class="text-row">

								<h1 class="text-center"><?php echo $downloadTitle ;?></h1>

							<?php

							if(ICL_LANGUAGE_CODE == en) : ?>

							<div class="text-row-split">
								<p class="p-large">Please enter your password in the relevant box below to download the guidelines you require. Should you have a password query, please contact Hofer directly. Should you require any other assistance, please send an email to <a style="color: #f35c05; text-decoration: none;"href="mailo:styleguides@tjarksandtjarks.com">styleguides@tjarksandtjarks.com</a></p>
							</div>

							<? endif ;?>

							<?php if(ICL_LANGUAGE_CODE == de) : ?>

							<div class="text-row-split">
								<p class="p-large">Willkommen in unserem Kunden-Downloadbereich
 
Bitte geben Sie Ihr Passwort in das entsprechende Feld unten ein, um die gewünschten Richtlinien herunterzuladen.
 
Sollten Sie eine Passwortabfrage haben, wenden Sie sich bitte direkt an Hofer. Sollten Sie weitere Hilfe benötigen, senden Sie bitte eine E-Mail an <a style="color: #f35c05; text-decoration: none;"href="mailto:styleguides@tjarksandtjarks.com">styleguides@tjarksandtjarks.com</a></p>
							</div>

							<? endif ;?>
					</div>

				</div>

			</div>

		</div>

	</div>


	<div class="container">
		
		<div class="row">

			<div class="col-md-6">

				<div class="text-row" id="login-1">
				<div class="guidelinesImg-container hofer-left">
					
					<div class="guidelines-img">
					
						<img src="<?php echo $downloadImg_one;?>" alt="Hofer Logo" title="Hofer Logo"/>

					</div>

				</div>
				
				<div class="guidelinesContent-container hofer-right">

					<div class="guidelines-content">
						
						<h2><?php echo $guidesTitle_one ;?></h2>

						<p><?php echo $guidesContent_one ;?></p>

						<?php echo do_shortcode("[smartpwpages label=\"\" ID=\"pw-download\"]"); ?>

					</div>
					
				</div>
					</div>
				

			</div>

			<div class="col-md-6">

				<div class="text-row" id="login-2">
					<div class="guidelinesImg-container hofer-left">

						<div class="guidelines-img">

							<img src="<?php echo $downloadImg_two;?>" alt="Aldi Logo" title="Aldi Logo"/>

						</div>

					</div>

					<div class="guidelinesContent-container hofer-right">

						<div class="guidelines-content">

							<h2><?php echo $guidesTitle_two ;?></h2>

							<p><?php echo $guidesContent_two ;?></p>



							<?php echo do_shortcode("[smartpwpages label=\"\" ID=\"pw-download\"]"); ?>


						</div>

					</div>
				</div>


			</div>

		</div>


	</div>

	<a id="footer"><a>

	<div class="contact-footer" id="main-footer">
		
		<?php get_footer(); ?>
	</div>


	





