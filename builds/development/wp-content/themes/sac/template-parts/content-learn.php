<?php
/**
 * Template part for displaying page content in /template-pages/learn.php
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Set_Aside_Central
 */

?>

<?php
	// featured section vars
	$featured_image = get_field('featured_image');
	$featured_title = get_field('featured_title');
	$featured_content = get_field('featured_content');
?>


<?php if( !empty($featured_title) || !empty($featured_content) ): ?>

<div class="section-featured">
	<div class="bcg" style="background-image:url('<?php echo $featured_image['url']; ?>')"></div>
	<div class="container">
		<h1><?php echo $featured_title; ?></h1>
		<?php echo $featured_content; ?>
	</div><!-- .container -->
</div><!-- .section-featured -->

<?php endif; ?>

<?php locate_template( 'page-nav.php', true ) ?>

<?php
	// set asides section vars
	$setasides_image = get_field('setasides_image');
	$setasides_title = get_field('setasides_title');
	$setasides_content = get_field('setasides_content');
?>

<?php if( !empty($setasides_title) || !empty($setasides_content) ): ?>

<div class="section-setasides" id="what-are-set-asides">
	<div class="container">
		<div class="entry-content">
				<h2 class="entry-title"><?php echo $setasides_title; ?></h2>
				<?php echo $setasides_content; ?>
		</div>
	</div>
	<div class="entry-image">
		<div class="bcg" style="background-image:url('<?php echo $setasides_image['url']; ?>')"></div>
	</div>
</div><!-- .section-setasides -->

<?php endif; ?>

<?php
	// HUBZones section vars
	$hubzones_image = get_field('hubzones_image');
	$hubzones_title = get_field('hubzones_title');
	$hubzones_content = get_field('hubzones_content');
?>

<?php if( !empty($hubzones_title) || !empty($hubzones_content) ): ?>

<div class="section-hubzones" id="what-are-hubzones">
	<div class="entry-image">
		<div class="bcg" style="background-image:url('<?php echo $hubzones_image['url']; ?>')"></div>
	</div>
	<div class="container">
		<div class="entry-content">
				<h2 class="entry-title"><?php echo $hubzones_title; ?></h2>
				<?php echo $hubzones_content; ?>
		</div>
	</div>
</div><!-- .section-hubzones -->

<?php endif; ?>


<?php

// check if the repeater field has rows of data
if( have_rows('eligibility_list') ):

	// section vars
	$eligibility_image = get_field('eligibility_image');
	$eligibility_video = get_field('eligibility_video');
	$eligibility_title = get_field('eligibility_title');
	$el_count = 0;

?>

<div id="confirm-eligibility" class="section-eligibility" style="background-image:url('<?php echo $eligibility_image['url']; ?>')">
	<video class="video-bg" autoplay loop="true" width="960" height="540" poster="<?php echo $eligibility_image['url']; ?>">
    <source type="video/mp4" src="<?php echo $eligibility_video['url']; ?>">
  </video>
	<div class="overlay"></div>
	<div class="container">
		<h2 class="entry-title">How to Confirm Your HUBZone Eligibility</h2>
		<ul class="items">

<?php
		// loop through the rows of data
    while ( have_rows('eligibility_list') ) : the_row();

		// vars
		$eligibility_content = get_sub_field('eligibility_content');
		$eligibility_text = get_sub_field('eligibility_text');
		$eligibility_link = get_sub_field('eligibility_url');
		$el_count++;
?>

		<li>
			<div class="container-border">
				<div class="entry-content">
					<div class="content-order"><?php echo $el_count; ?></div>
					<div class="content-desc"><?php echo $eligibility_content; ?></div>
					<div class="content-link"><a class="btn btn-blue" href="<?php echo $eligibility_link; ?>"><?php echo $eligibility_text; ?></a></div>
				</div><!-- .entry-content -->
			</div><!-- .container-border -->
		</li>

<?php
    endwhile;
?>

		</ul>

	</div><!-- .container -->
</div><!-- .section-eligibility -->

<?php
else :

    // no rows found

endif;

?>



<?php

// check if the repeater field has rows of data
if( have_rows('getcert_list') ):

	// section vars
	$getcert_title = get_field('getcert_title');
	$cert_count = 0;

?>

<div id="getting-certified" class="section-getcert">
	<div class="container">
		<h2 class="entry-title">How to Get Certified</h2>
		<ul class="items">

<?php
 	// loop through the rows of data
    while ( have_rows('getcert_list') ) : the_row();

				// vars
				$getcert_content = get_sub_field('getcert_content');
				$getcert_text = get_sub_field('getcert_text');
				$getcert_link = get_sub_field('getcert_url');
				$cert_count++;
?>

		<li>
			<div class="container-border">
				<div class="entry-content">
					<div class="content-order"><?php echo $cert_count; ?></div>
					<div class="content-desc"><?php echo $getcert_content; ?></div>
					<div class="content-link"><a class="btn btn-blue" href="<?php echo $getcert_link; ?>"><?php echo $getcert_text; ?></a></div>
				</div><!-- .entry-content -->
			</div><!-- .container-border -->
		</li>

<?php
    endwhile;
?>

</ul>

</div><!-- .container -->
</div><!-- .section-eligibility -->


<?php

else :

    // no rows found

endif;

?>




<?php
	// registration section vars
	$registration_image = get_field('registration_image');
	$registration_title = get_field('registration_title');
	$registration_content = get_field('registration_content');
?>

<?php if( !empty($registration_title) || !empty($registration_content) ): ?>

<div id="items-for-registration" class="section-registration">
	<div class="bcg" style="background-image:url('<?php echo $registration_image['url']; ?>')"></div>
	<div class="overlay"></div>
	<div class="container">
			<div class="entry-content">
				<h2 class="entry-title"><?php echo $registration_title; ?></h2>
				<?php echo $registration_content; ?>
			</div>
	</div><!-- .container -->
</div><!-- .section-registration -->

<?php endif; ?>
