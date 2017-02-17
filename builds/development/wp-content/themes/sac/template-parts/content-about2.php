<?php
/**
 * Template part for displaying page content in /template-pages/about.php
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


<?php if( !empty($featured_title) && !empty($featured_content) ): ?>

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
	// who section vars
	$who_image = get_field('who_image');
	$who_title = get_field('who_title');
	$who_content = get_field('who_content');
?>

<?php if( !empty($who_title) && !empty($who_content) ): ?>

<div id="who-we-are" class="section-who">
	<div class="bcg" style="background-image:url('<?php echo $featured_image['url']; ?>')"></div>
	<div class="container">
			<div class="entry-content">
				<h2 class="entry-title"><?php echo $who_title; ?></h2>
				<?php echo $who_content; ?>
			</div>
	</div><!-- .container -->
</div><!-- .section-who -->

<?php endif; ?>


<?php
	// why section vars
	$why_image = get_field('why_image');
	$why_video = get_field('why_video');
	$why_title = get_field('why_title');
	$why_content = get_field('why_content');
?>

<?php if( !empty($who_title) && !empty($who_content) ): ?>

<div id="why-us" class="section-why" style="background-image:url('<?php echo $why_image['url']; ?>')">
	<video class="video-bg" autoplay loop="true" width="960" height="540" poster="<?php echo $why_image['url']; ?>">
    <source type="video/mp4" src="<?php echo $why_video['url']; ?>">
  </video>
	<div class="overlay"></div>
	<div class="container">
		<h2 class="entry-title"><?php echo $why_title; ?></h2>
		<div class="container-border">
			<div class="entry-content">
				<?php echo $why_content; ?>
			</div>
		</div>
	</div><!-- .container -->
</div><!-- .section-why -->

<?php endif; ?>
