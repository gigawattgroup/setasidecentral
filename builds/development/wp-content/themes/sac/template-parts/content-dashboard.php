<?php
/**
 * Template part for displaying page content in /template-pages/dashboard.php
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
	// about section vars
	$about_image = get_field('about_bg_image');
	$about_title = get_field('about_title');
	$about_content = get_field('about_content');
?>


<?php if( !empty($about_title) || !empty($about_content) ): ?>

<div class="section-mission" id="mission">
	<div class="bcg" style="background-image:url('<?php echo $about_image['url']; ?>')"></div>
	<div class="container">
		<h2 class="entry-title"><?php echo $about_title; ?></h2>
		<div id="mission-statement" class="container-border">
			<div class="entry-content">
				<?php echo $about_content; ?>
			</div>
		</div>
	</div><!-- .container -->
	</div>
</div><!-- .section-mission -->

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

<div id="product-features" class="section-product-features" style="background-image:url('<?php echo $eligibility_image['url']; ?>')">
	<video class="video-bg" autoplay loop="true" width="960" height="540" poster="<?php echo $eligibility_image['url']; ?>">
    <source type="video/mp4" src="<?php echo $eligibility_video['url']; ?>">
  </video>
	<div class="overlay"></div>
	<div class="container">
		<h2 class="entry-title"><?php echo $eligibility_title; ?></h2>
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
					<div class="content-link">
						<?php if( $eligibility_link ): ?>
						<a class="btn btn-blue" href="<?php echo $eligibility_link; ?>"><?php echo $eligibility_text; ?></a>
						<?php endif; ?>
					</div>
				</div><!-- .entry-content -->
			</div><!-- .container-border -->
		</li>

<?php
    endwhile;
?>

		</ul>

	</div><!-- .container -->
</div><!-- .section-eligibility -->


<?php endif; ?>
