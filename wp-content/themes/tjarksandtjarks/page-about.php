<?php
/*
	Template Name: About Page
*/
get_header(); ?>

<?php
/*
	ADVANCED CUSTOM FIELDS VARIABLES  
*/

	$hero_image					= get_field('hero_image');

	$about_title				= get_field('about_title');
	$about_content_para_one		= get_field('about_content_para_one');

	$aboutSlider_one			= get_field('aboutSlider_one');
	$aboutSlider_two			= get_field('aboutSlider_two');
	$aboutSlider_three			= get_field('aboutSlider_three');
	$aboutSlider_four			= get_field('aboutSlider_four');
	$aboutSlider_five			= get_field('aboutSlider_five');
	$aboutSlider_six			= get_field('aboutSlider_six');
	$aboutSlider_seven			= get_field('aboutSlider_seven');
	$aboutSlider_eight			= get_field('aboutSlider_eight');
	$aboutSlider_nine			= get_field('aboutSlider_nine');
	$aboutSlider_ten			= get_field('aboutSlider_ten');


	$about_senior_title 		= get_field('about_senior_title');
	$about_senior_content		= get_field('about_senior_content');

	$left_aboutOne				= get_field('left_aboutOne');
	$right_aboutOne				= get_field('right_aboutOne');
	$right_aboutTwo				= get_field('right_aboutTwo');

	$department_title			= get_field('department_title');
	$department_imgOne			= get_field('department_imgOne');
	$department_titleOne		= get_field('department_titleOne');
	$department_contentOne		= get_field('department_contentOne');

	$department_imgTwo 			= get_field('department_imgTwo');
	$department_titleTwo		= get_field('department_titleTwo');
	$department_contentTwo		= get_field('department_contentTwo');

	$department_imgThree		= get_field('department_imgThree');
	$department_titleThree		= get_field('department_titleThree');
	$department_contentThree	= get_field('department_contentThree');

	$department_imgFour			= get_field('department_imgFour');
	$department_titleFour		= get_field('department_titleFour');
	$department_contentFour		= get_field('department_contentFour');

	$department_imgFive			= get_field('department_imgFive');
	$department_titleFive		= get_field('department_titleFive');
	$department_contentFive		= get_field('department_contentFive');

	$department_imgSix			= get_field('department_imgSix');
	$department_titleSix		= get_field('department_titleSix');
	$department_contentSix		= get_field('department_contentSix');

	$department_imgSeven		= get_field('department_imgSeven');
	$department_titleSeven		= get_field('department_titleSeven');
	$department_contentSeven	= get_field('department_contentSeven');

	$department_imgEight		= get_field('department_imgEight');
	$department_titleEight		= get_field('department_titleEight');
	$department_contentEight	= get_field('department_contentEight');

	$department_imgNine			= get_field('department_imgNine');
	$department_titleNine		= get_field('department_titleNine');
	$department_contentNine		= get_field('department_contentNine');

	$department_imgTen			= get_field('department_imgTen');
	$department_titleTen		= get_field('department_titleTen');
	$department_contentTen		= get_field('department_contentTen');

	$department_imgEleven		= get_field('department_imgEleven');
	$department_titleEleven		= get_field('department_titleEleven');
	$department_contentEleven		= get_field('department_contentEleven');

;?>

<div class="page-content">

<?php 


if(ICL_LANGUAGE_CODE == de) {

;?> 

	<style type="text/css">
		#company-sections p {
			font-size: 14px !important;
		}
	</style>

<?php } ;?>
	
	



<div class="container">
	
	<div class="row">
		
		<div class="col-md-12">

			<div class="hero-scroll">
			
				<div class="heroAbout">
					
					<div id="aboutCarousel" class="carousel fade" data-ride="carousel">

			              <ol class="carousel-indicators">
			                <li data-target="carousel-aboutOne" data-slide-to="0" class="active"></li>
			              </ol>

			              <!-- Carousel items -->
			              <div class="carousel-inner">
			              
			              	<img src="<?php echo get_template_directory_uri();?>/assets/img/transparent.png" alt="">

			                <div class="active item" id="carousel-aboutOne" title="<?php echo $hero_image['title'];?>" style="background-image: url('<?php echo $hero_image['url'] ?>')"></div>

			              </div>

					</div>

            	</div>

			</div>

		</div>
	</div>
</div>

<!-- ABOUT FIRST CONTAINER -->

<div class="container">
	
	<div class="row">
		
		<div class="section-one">

			<div class="col-md-12">
				
				<div id="about-section-two" class="text-row">
					
					<div class="row">
						
						<div id="trigger-aboutTitle"></div>
						<div class="about-title">

							<?php 


							if(ICL_LANGUAGE_CODE == en) {

							;?>

								<h1 class="text-center">We are <span class="textChangeAbout"></span></h1>

							<?php }else{ ;?>
								
								<h1 class="text-center">Wir sind <span class="textChangeAbout"></span></h1>

							<?php } ;?>
						</div>
						
						<div id="trigger-aboutContent"></div>
						<div class="text-row-split about-content">
							
							<div class="col-xs-12">
							
								<p class="senior-contentOne"><?php echo $about_content_para_one	; ?></p>

							</div>

						</div>

					</div>

					<div class="row">
<!-- 
						<hr>
 -->
						<div class="counter">

							<div class="col-xs-12 col-sm-3 col-md-3">
							
							<?php 


							if(ICL_LANGUAGE_CODE == en) {

							;?>

								<div id="infoNum">
									<span class="count counting-1">1</span>
									<h2>Office Dog</h2>
								</div>
							
							<?php }else{ ;?>

								<div id="infoNum">
									<span class="count counting-1">1</span>
									<h2>Bürohund</h2>
								</div>

							<?php } ;?>
							

							
							</div>

							<div class="col-xs-12 col-sm-3  col-md-3">
								
								<?php 


								if(ICL_LANGUAGE_CODE == en) {

								;?>
									<div id="infoNum">
										<span class="count counting-2">25</span>
										<h2>Years of Design</h2>
									</div>
								
								<?php }else{ ;?>

									<div id="infoNum">
										<span class="count counting-2">25</span>
										<h2>Jahre Design</h2>
									</div>
								
								<?php } ;?>

							</div>

							<div class="col-xs-12 col-sm-3  col-md-3">
								
								<?php 


								if(ICL_LANGUAGE_CODE == en) {

								;?>

									<div id="infoNum">
										<span class="count counting-3">300</span>
										<h2>Brands Created</h2>
									</div>

								<?php }else{ ;?>

									<div id="infoNum">
										<span class="count counting-3">300</span>
										<h2>Marken entwickelt</h2>
									</div>
								
								<?php } ;?>

							</div>

							<div class="col-xs-12 col-sm-3  col-md-3">
								
								<?php 

								if(ICL_LANGUAGE_CODE == en) {

								;?>

									<div id="infoNum">
										<span class="count counting-4">5000</span>
										<h2>SKUs per year</h2>
									</div>
								
								<?php }else{ ;?>

									<div id="infoNum">
										<span class="count counting-4">5000</span>
										<h2>Lagereinheiten pro Jahr</h2>
									</div>

								<?php } ;?>	
							</div>	

						</div>

					</div>

				</div>


			</div>

		</div>

	</div>

</div>

<!-- ABOUT SECOND CONTAINER -->

<div class="container">

	<div class="row">

		<div class="section-twoAbout">
			<div id="trigger-imgOne"></div>
			<div class="col-sm-6">

				<div class="left-container" id="left-aboutOne">
		
					
					<img src="<?php echo $left_aboutOne['url']; ?>" alt="<?php echo $left_aboutOne['alt']; ?>" title="<?php echo $left_aboutOne['title'];?>" />

				</div>

			</div>

			<div class="col-sm-6">

				<div class="right-containerOne" id="right-aboutOne">

					<img src="<?php echo $right_aboutOne['url'] ; ?>" alt="<?php echo $right_aboutOne['alt'];?>" title="<?php echo $right_aboutOne['title'];?>">
				</div>

				<div class="right-containerTwo" id="right-aboutTwo">

					<img src="<?php echo $right_aboutTwo['url'] ; ?>" alt="<?php echo $right_aboutTwo['alt'];?>" title="<?php echo $right_aboutTwo['title'];?>">

				</div>

			</div>

		</div>

	</div>

</div>


<div id="management-container" class="container">
	<div class="management-title">

		<?php 

			if(ICL_LANGUAGE_CODE == en) {

			;?>
		
				<h1 class="text-center">Our Team & Departments</h1>

			<?php }else{ ;?>
				
				<h1 class="text-center">Unser Team & unsere Abteilungen</h1>

		<?php } ;?>	

	</div>

	<div class="management-team-container">

	<div class="row">
		
		<div class="seniorSlider-container">

			<div id="trigger-mainContent"></div>
			
			<div class="seniorSlider">
				
				<div>
					<h3 class="management-team-title">Haye Tjarks</h3>
					<img src="<?php echo $aboutSlider_one['url'] ; ?>" alt="<?php echo $aboutSlider_one['alt'];?>" title="<?php echo $aboutSlider_one['title'];?>" />
				</div>

				<div>
					<h3 class="management-team-title">Nadine Tjarks</h3>
					<img src="<?php echo $aboutSlider_two['url']; ?>" alt="<?php echo $aboutSlider_two['alt'];?>" title="<?php echo $aboutSlider_two['title'];?>" />
				</div>

				<div>
					<h3 class="management-team-title">Steen Tjarks</h3>
					<img src="<?php echo $aboutSlider_three['url'] ; ?>" alt="<?php echo $aboutSlider_three['alt'] ;?>" title="<?php echo $aboutSlider_three['title'];?>" />
				</div>

				<div>
					<h3 class="management-team-title">René Du Toit</h3>
					<img src="<?php echo $aboutSlider_four['url']; ?>" alt="<?php echo $aboutSlider_four['alt'];?>" title="<?php echo $aboutSlider_four['title'];?>"/>
				</div>

				<div>
					<h3 class="management-team-title">Nico Tjarks</h3>
					<img src="<?php echo $aboutSlider_five['url'];?>" alt="<?php echo $aboutSlider_five['alt'];?>" title="<?php echo $aboutSlider_five['title'];?>" />
				</div>

				<div>
					<h3 class="management-team-title">George Harding</h3>
					<img src="<?php echo $aboutSlider_six['url'];?>" alt="<?php echo $aboutSlider_six['alt'];?>" title="<?php echo $aboutSlider_six['title'];?>" />
				</div>

				<div>
					<h3 class="management-team-title">Paul Mankerty</h3>
					<img src="<?php echo $aboutSlider_seven['url'];?>" alt="<?php echo $aboutSlider_seven['alt'];?>" title="<?php echo $aboutSlider_seven['title'];?>" />
				</div>

				<div>
					<h3 class="management-team-title">Ilinka Skepeneit</h3>
					<img src="<?php echo $aboutSlider_eight['url'];?>" alt="<?php echo $aboutSlider_eight['alt'];?>" title="<?php echo $aboutSlider_eight['title'];?>" />
				</div>

				<div>
					<h3 class="management-team-title">Natiska Tjarks</h3>
					<img src="<?php echo $aboutSlider_nine['url'];?>" alt="<?php echo $aboutSlider_nine['alt'];?>" title="<?php echo $aboutSlider_nine['title'];?>"/>
				</div>

				<div>
					<h3 class="management-team-title">Noodles</h3>
					<img src="<?php echo $aboutSlider_ten['url'];?>" alt="<?php echo $aboutSlider_ten['alt'];?>" title="<?php echo $aboutSlider_ten['title'];?>" />
				</div>

			</div>

			<div class="seniorSliderContent">
				
				<div>

					<div class="sliderContent">
						
						<h3>Haye Tjarks</h3>

						 <?php 

			                if(ICL_LANGUAGE_CODE == en) {

			              ;?>

			              	<h4>Founder / Managing Director</h4>
							<p>Haye started his career 30 years ago, servicing clients as a student. This extensive experience has given him unparalleled knowledge of the entire design process. His meticulous attention to detail has led to a 20+ year retention of the ALDI group. He loves a challenge and thrives on helping clients achieve their objectives. In addition, he is a keen cyclist, football player and DIYer.</p>

						<?php }else{ ;?>

							<h4>Gründer / Geschäftsführer</h4>
							<p>Haye begann seine Karriere vor 30 Jahren, als er als Student Kunden betreute. Durch diese langjährige Erfahrung konnte er sich ausgezeichnete Kenntnisse über den gesamten Designprozess aneignen. Seine ausgeprägte Liebe zum Detail hat zu einer über 20-jährigen Zusammenarbeit mit der ALDI-Gruppe geführt. Er liebt die Herausforderung und geht darin auf, Kunden beim erreichen ihrer Designziele zu unterstützen. Außerdem ist er ein begeisterter Radfahrer, Fußballspieler und Heimwerker.</p>
						
						<?php } ;?>

					</div>
					
				</div>

				<div>
					
					<div class="sliderContent">
						
						<h3>Nadine Tjarks</h3>

						<?php 

			                if(ICL_LANGUAGE_CODE == en) {

			              ;?>

			              	<h4>Founder / Managing Director</h4>
								<p>Nadine’s passion lies in International Marketing. She has spent the last 26 years developing brands for retailers and has successfully increased clients’ sales through both packaging and retail design. The success of Tjarks and Tjarks has been driven by her enthusiasm and passion as a Creative Director. She loves to maintain a healthy, mindful, yogic lifestyle.</p>

							<?php }else{ ;?>

							<h4>Gründerin / Geschäftsführerin</h4>
							<p>Nadines Leidenschaft liegt im internationalen Marketing. In den letzten 26 Jahre hat sie Marken für den Einzelhandel entwickelt und konnte den Umsatz der Kunden sowohl durch Verpackungs- als auch durch Einzelhandelsdesigns erfolgreich steigern. Mit ihrer Begeisterung und Leidenschaft als Kreativchef hat sie den Erfolg von Tjarks und Tjarks vorangetrieben. Sie liebt es, einen gesunden, bewussten, yogischen Lebensstil zu pflegen.</p>
						
						<?php } ;?>

					</div>

				</div>

				<div>
					
					<div class="sliderContent">
						
						<h3>Steen Tjarks</h3>

						<?php 

			                if(ICL_LANGUAGE_CODE == en) {

			              ;?>

							<h4>Vice President / US Director</h4>
							<p>Steen’s background is in consumer behaviour and pricing strategy. He has extensive experience in helping businesses like Lego and Penguin Books realise the full extent of their marketing efforts. In his role as the VP of the Chicago office, he also brings his expertise to the US market. He loves fitness, gaming and Star Wars. </p>
						
						<?php }else{ ;?>

							<h4>Stellvertretender Firmenchef / US-Geschäftsführer</h4>
							<p>Steens Hintergrund liegt im Konsumentenverhalten und in der Preisstrategie. Er hat viel Erfahrung darin, Unternehmen wie Lego und Penguin Books zu unterstützen, das volle Ausmaß ihrer Marketingbemühungen umzusetzten. In seiner Rolle als stellvertretender Chef des Chicagoer Büros bringt er sein Fachwissen auch auf dem US-Markt ein. Er mag Fitness, Gaming und Star Wars.</p>
						
						<?php } ;?>

					</div>

				</div>

				<div>
					
					<div class="sliderContent">
						
						<h3>René du Toit</h3>

						<?php 

			                if(ICL_LANGUAGE_CODE == en) {

			              ;?>

			              	<h4>Creative Director</h4>
								<p>René has over 20 years’ experience managing and directing design for three of the UK's most iconic retailers - John Lewis, Marks & Spencer and Tesco International. She has a passion for design excellence and its translation across global markets through packaging, POS, promotional materials and marketing campaigns. She enjoys travelling, movies and painting.</p>

							<?php }else{ ;?>

							<h4>Kreativchefin</h4>
							<p>René hat über 20 Jahre Erfahrung in der Designleitung und -betreuung für drei der bekanntesten Einzelhändler Großbritanniens – John Lewis, Marks & Spencer und Tesco International. Sie hat eine Leidenschaft für herausragendes Design und dessen Übertragung in globale Märkte durch Verpackung, POS, Werbematerialien und Marketingkampagnen. Ihre Hobbys sind Reisen, Kino und Malen. 
</p>
						
						<?php } ;?>

					</div>

				</div>

				<div>
					
					<div class="sliderContent">
						
						<h3>Nico Tjarks</h3>

						<?php 

			                if(ICL_LANGUAGE_CODE == en) {

			              ;?>
						
							<h4>Creative Director</h4>
							<p>Nico is a highly versatile and passionate creative. He trained as an Industrial Designer and in 2010 had the honour of presenting his work to HRH The Duke of York. At 20, he launched his own creative agency with clients such as Selfridges, Jim Beam and Betfair. As a Creative Director at Tjarks and Tjarks, he drives the agency’s creativity with flair. He loves Star Wars, art and food. </p>
						
						<?php }else{ ;?>

							<h4>Kreativchef</h4>
							<p>Nico ist ein sehr vielseitiger und leidenschaftlicher kreativer Kopf. Er machte eine Ausbildung als Industriedesigner und hatte 2010 die Ehre, seine Arbeit dem HRH The Duke of York zu präsentieren. Mit 20 Jahren gründete er seine eigene Kreativagentur mit Kunden wie Selfridges, Jim Beam und Betfair. Als Kreativchef bei Tjarks and Tjarks lenkt er die Kreativität der Agentur mit viel Gespür. Er liebt Star Wars, Kunst und Essen.</p>

						<?php } ;?>

					</div>

				</div>

				<div>
					
					<div class="sliderContent">
						
						<h3>George Harding</h3>

						<?php 

			                if(ICL_LANGUAGE_CODE == en) {

			              ;?>
						
							<h4>Creative Director / Associate</h4>
								<p>George is a highly accomplished creative with a background in graphic design. Following two years running his own agency and winning a variety of international clients, including HSBC and Topshop, he joined Tjarks and Tjarks. As a Creative Director and devoted designer, his passion and enthusiasm drive the design team’s creativity. He enjoys sport, travel and illustration.</p>

							<?php }else{ ;?>

							<h4>Kreativchef / Mitarbeiter</h4>
							<p>George ist ausgesprochen kreativ und  verfügt über Kenntnisse und Erfahrung im Bereich Grafikdesign. Nachdem er zwei Jahre lang seine eigene Agentur aufgebaut und verschiedene internationale Kunden, darunter HSBC und Topshop, gewonnen hatte, kam er zu Tjarks and Tjarks. Als Kreativchef und hingebungsvoller Designer steigern seine Leidenschaft und sein Enthusiasmus die Kreativität des Designteams. Er mag Sport, Reisen und Illustration.</p>

						<?php } ;?>

					</div>

				</div>

				<div>
					
					<div class="sliderContent">
						
						<h3>Paul Mankerty</h3>

						<?php 

			                if(ICL_LANGUAGE_CODE == en) {

			              ;?>

							<h4>Artwork Production Manager</h4>
								<p>Paul has over 30 years’ experience in artwork and print. He has attended press passes and been central to global proofing for Unilever and Arla. In addition, he has overseen colour work at European repro partners for Nestlé Purina. His role includes ensuring print files are prepared for the correct printing technology. He has a passion for classic cars, squash and motorbikes. </p>

							<?php }else{ ;?>

							<h4>Druckvorlagenfertigungsmanager</h4>
							<p>Paul hat über 30 Jahre Erfahrung mit Druckvorlagen und Druck. Er hat an Pressekursen teilgenommen und war für das globale Proofing für Unilever und Arla zuständig. Außerdem hat er die Farbarbeit bei europäischen Repro-Partnern für Nestlé Purina überwacht. Zu seinen Aufgaben gehört es, sicherzustellen, dass Druckdateien für die richtige Drucktechnologie vorbereitet werden. Er hat eine Leidenschaft für klassische Autos, Squash und Motorräder.</p>

						<?php } ;?>

					</div>

				</div>

				<div>
					
					<div class="sliderContent">
						
						<h3>Ilinka Skepeneit</h3>
						
						<?php 

			                if(ICL_LANGUAGE_CODE == en) {

			              ;?>

							<h4>Account & QC Director / Associate</h4>
							<p>Ilinka joined Tjarks and Tjarks almost ten years ago after completing a design degree and is highly regarded for her dedication to client services. She is precise and meticulous, making her valued by both colleagues and clients alike. Her outstanding work ethic and reliability have been key to her success. She loves sailing, good food and is a proud new Mum.</p>

						<?php }else{ ;?>

							<h4>Leiterin Account & Qualitätssicherung</h4>
							<p>Ilinka kam vor fast zehn Jahren nach Abschluss eines Design-Studiums zu Tjarks and Tjarks und wird hoch angesehen für ihre Hingabe an den Kundenservice. Sie ist präzise und äußerst sorgfältig und wird daher von Kollegen und Kunden gleichermaßen geschätzt. Ihre herausragende Arbeitsmoral und Zuverlässigkeit waren die Schlüssel zu ihrem Erfolg. Sie liebt Segeln und gutes Essen und ist eine stolze frischgebackene Mama.</p>

						<?php } ;?>


					</div>

				</div>

				<div>
					
					<div class="sliderContent">
						
						<h3>Natiska Tjarks</h3>

						<?php 

			                if(ICL_LANGUAGE_CODE == en) {

			              ;?>

							<h4>Director</h4>
								<p>Natiska brings her expertise to the agency part time whilst completing her management degree.  Her natural flair for business, coupled with her immense self-discipline enable her to have varied involvement, ranging from design to finance.  She provides a fresh, new outlook for our social media and social responsibility activities. She enjoys travelling, sport and fashion.</p>

							<?php }else{ ;?>

							<h4>Leiterin</h4>
							<p>Natiska bringt ihr Fachwissen bei der Agentur in Teilzeit ein und studiert gleichzeitig Management. Ihr natürliches Gespür fürs Geschäft zusammen mit ihrer Selbstdisziplin ermöglichen es ihr, sich auf verschiedene Weise einzubringen, vom Design bis zu den Finanzen. Sie bietet eine frische, neue Perspektive für unsere Social-Media-Aktivitäten und die soziale Verantwortung. Sie mag Reisen, Sport und Mode.</p>
						
						<?php } ;?>

					</div>

				</div>

				<div>
					
					<div class="sliderContent">
						
						<h3>Noodles</h3>

						<?php 

			                if(ICL_LANGUAGE_CODE == en) {

			              ;?>

			              	<h4>Health & Wellbeing Manager</h4>
							<p>Noodles is the dedicated Office Wellbeing Manager, responsible for ensuring employee morale, creativity and the all-important ‘work life balance’. Her experience lies in ball chasing, sleeping and eating. When she is not engaging in long office wanders, her curiosity and intellect are used to help direct design work. She loves treats, cuddles, walks and playing ball.</p>

						<?php }else{ ;?>

							<h4>Gesundheits- & Wohlfühlmanager</h4>
							<p>Noodles ist der engagierte Büro-Wohlfühlmanger und verantwortlich für die Wahrung der Mitarbeitermoral, der Kreativität und der so wichtigen Work-Life-Balance. Ihre Erfahrung liegt in der Jagd, im Schlafen und im Essen. Wenn sie nicht gerade mit langen Bürowanderungen beschäftigt ist, helfen ihre Neugier und ihr Intellekt bei Gestaltungsarbeiten. Sie liebt Leckereien, Kuscheln, Spaziergänge und Ballspiele.</p>

						<?php } ;?>

					</div>

				</div>

			</div>
	

		</div>

	</div>

	</div>
</div>


<!-- ABOUT FOURTH CONTAINER -->


<div id="company-sections" class="container">

	<div class="row">

		<div class="headshot-container">

			<div id="trigger-headshotOne"></div>

			<div class="col-sm-6 ">
			
				<div class="headshot-photo" id="teamShotOne">
					
					<img src="<?php echo $department_imgOne['url'] ;?>" alt="<?php echo $department_imgOne['alt'];?>" title="<?php echo $department_imgOne['title'];?>">

				</div>

			</div>

			<div class="col-sm-6">
				
				<div class="headshot-content" id="teamShotTwo">
					
					<h2 class="department-title"><?php echo $department_titleOne ; ?></h2>

					<p><?php echo $department_contentOne ; ?></p>

				</div>
			</div>

		</div>

	</div>

	<div class="row">

		<div class="headshot-container">

			<div id="trigger-headshotTwo"></div>

			<div class="col-sm-6 col-sm-push-6">

				<div class="headshot-photo" id="teamShotThree">
					
					<img src="<?php echo $department_imgTwo['url'] ;?>" alt="<?php echo $department_imgTwo['alt'];?>" title="<?php echo $department_imgTwo['title'];?>">

				</div>

			</div>

			<div class="col-sm-6 col-sm-pull-6">
			
				<div class="headshot-content" id="teamShotFour">
				
					<h2 class="department-title"><?php echo $department_titleTwo ; ?></h2>

					<p><?php echo $department_contentTwo ; ?></p>

				</div>

			</div>

		</div>

	</div>

	<div class="row">

		<div class="headshot-container">

			<div id="trigger-headshotThree"></div>

			<div class="col-sm-6">
			
				<div class="headshot-photo" id="teamShotFive">
					
					<img src="<?php echo $department_imgThree['url'] ;?>" alt="<?php echo $department_imgThree['alt'] ;?>" title="<?php echo $department_imgThree['title'] ;?>">

				</div>

			</div>

			<div class="col-sm-6">
				
				<div class="headshot-content" id="teamShotSix">
				
					<h2 class="department-title"><?php echo $department_titleThree ; ?></h2>

					<p><?php echo $department_contentThree ; ?></p>

				</div>

			</div>

		</div>

	</div>


	<div class="row">

		<div class="headshot-container">

			<div id="trigger-headshotFour"></div>

			<div class="col-sm-6 col-sm-push-6">

				<div class="headshot-photo" id="teamShotSeven">
						
					<img src="<?php echo $department_imgFour['url'] ; ?>" alt="<?php echo $department_imgFour['alt'];?>" title="<?php echo $department_imgFour['title'];?>">

				</div>

			</div>

			<div class="col-sm-6 col-sm-pull-6">
			
				<div class="headshot-content" id="teamShotEight">
				
					<h2 class="department-title"><?php echo $department_titleFour ; ?></h2>

					<p><?php echo $department_contentFour ; ?></p>

				</div>

			</div>

		</div>

	</div>

	<div class="row">

		<div class="headshot-container">

			<div id="trigger-headshotFive"></div>

			<div class="col-sm-6">
			
				<div class="headshot-photo" id="teamShotNine">
					
					<img src="<?php echo $department_imgFive['url'] ; ?>" alt="<?php echo $department_imgFive['alt'];?>" title="<?php echo $department_imgFive['title'];?>">

				</div>

			</div>

			<div class="col-sm-6">
				
				<div class="headshot-content" id="teamShotTen">
				
					<h2 class="department-title"><?php echo $department_titleFive ; ?></h2>

					<p><?php echo $department_contentFive ; ?></p>

				</div>

			</div>

		</div>

	</div>

	<div class="row">

		<div class="headshot-container">

			<div id="trigger-headshotSix"></div>

			<div class="col-sm-6 col-sm-push-6">

				<div class="headshot-photo" id="teamShotEleven">
						
					<img src="<?php echo $department_imgSix['url'] ; ?>" alt="<?php echo $department_imgSix['alt'];?>" title="<?php echo $department_imgSix['title'];?>">

				</div>

			</div>

			<div class="col-sm-6 col-sm-pull-6">
			
				<div class="headshot-content" id="teamShotTwelve">
				
					<h2 class="department-title"><?php echo $department_titleSix ; ?></h2>

					<p><?php echo $department_contentSix ; ?></p>

				</div>

			</div>

		</div>

	</div>

	<div class="row">

		<div class="headshot-container">

			<div id="trigger-headshotSeven"></div>

			<div class="col-sm-6">
			
				<div class="headshot-photo" id="teamShotThirteen">
					
					<img src="<?php echo $department_imgSeven['url'] ; ?>" alt="<?php echo $department_imgSeven['alt'];?>" title="<?php echo $department_imgSeven['title'];?>">

				</div>

			</div>

			<div class="col-sm-6">
				
				<div class="headshot-content" id="teamShotFourteen">
				
					<h2 class="department-title"><?php echo $department_titleSeven ; ?></h2>

					<p><?php echo $department_contentSeven ; ?></p>

				</div>

			</div>

		</div>

	</div>

	<div class="row">

		<div class="headshot-container">

			<div id="trigger-headshotEight"></div>

			<div class="col-sm-6 col-sm-push-6">

				<div class="headshot-photo" id="teamShotFifteen">
						
					<img src="<?php echo $department_imgEight['url'] ; ?>" alt="<?php echo $department_imgEight['alt'];?>" title="<?php echo $department_imgEight['title'];?>">

				</div>

			</div>

			<div class="col-sm-6 col-sm-pull-6">
			
				<div class="headshot-content" id="teamShotSixteen">
				
					<h2 class="department-title"><?php echo $department_titleEight ; ?></h2>

					<p><?php echo $department_contentEight ; ?></p>

				</div>

			</div>

		</div>

	</div>


	<div class="row">

		<div class="headshot-container">

			<div id="trigger-headshotNine"></div>

			<div class="col-sm-6">

				<div class="headshot-photo" id="teamShotSeventeen">

					<img src="<?php echo $department_imgTen['url'] ; ?>" alt="<?php echo $department_imgTen['alt'];?>" title="<?php echo $department_imgTen['title'];?>">

				</div>

			</div>

			<div class="col-sm-6">

				<div class="headshot-content" id="teamShotEighteen">

					<h2 class="department-title"><?php echo $department_titleTen ; ?></h2>

					<p><?php echo $department_contentTen ; ?></p>

				</div>

			</div>

		</div>

	</div>

	<div class="row">

		<div class="headshot-container">

			<div id="trigger-headshotTen"></div>

			<div class="col-sm-6 col-sm-push-6">

				<div class="headshot-photo" id="teamShotNineteen">
						
					<img src="<?php echo $department_imgEleven['url'] ; ?>" alt="<?php echo $department_imgEleven['alt'];?>" title="<?php echo $department_imgEleven['title'];?>">

				</div>

			</div>

			<div class="col-sm-6 col-sm-pull-6">
			
				<div class="headshot-content" id="teamShotTwenty">
				
					<h2 class="department-title"><?php echo $department_titleEleven ; ?></h2>

					<p><?php echo $department_contentEleven ; ?></p>

				</div>

			</div>

		</div>

	</div>

	<div id="meet-the-team-row" class="row">
		
		<div class="col-md-12">
			
			<div class="totalTeam">
				
				<?php 

					if(ICL_LANGUAGE_CODE == en) {

				;?>

					<a href="<?php echo get_post_type_archive_link( 'team' ); ?>"><button class="about-btn">Meet our full team...</button></a>

				<?php }else{ ;?>

					<a href="<?php echo get_post_type_archive_link( 'team' ); ?>"><button class="about-btn">
Lernen Sie das ganze Team kennen...</button></a>


				<?php } ;?>	
				
			</div>
		</div>
	</div>

	
	<a id="footer"></a>

</div>
<div id="trigger-aboutFooter"></div>

<div class="about-footer" id="main-footer">

	<?php get_footer() ; ?>

</div>
