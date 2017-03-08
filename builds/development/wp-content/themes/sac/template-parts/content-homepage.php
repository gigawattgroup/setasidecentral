<?php
/**
 * Template part for displaying page content in /template-pages/home.php
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Set_Aside_Central
 */

?>

<svg class="hidden">
	<defs>
		<symbol id="icon-cross" viewBox="0 0 24 24">
			<title>cross</title>
			<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
		</symbol>
	</defs>
</svg>


	<?php

	// check if the repeater field has rows of data
	if( have_rows('home-carousel') ): ?>

		<div class="section-carousel owl-carousel owl-theme">

	<?php
	 	// loop through the rows of data
	    while ( have_rows('home-carousel') ) : the_row();

					// vars
					$slide_image = get_sub_field('slide_image');
					$slide_content = get_sub_field('slide_content');
					$slide_btn_display = get_sub_field('slide_button');
					$slide_btn_text = get_sub_field('slide_button_text');
					$slide_btn_link = '#';
					$slide_btn_class = '';

					if (get_sub_field('slide_button_url') || get_sub_field('slide_button_page')) {
						$slide_btn_link = get_sub_field('slide_button_url');
					}

					if (get_sub_field('slide_button_modal')) {
						$slide_btn_class = 'btn-modal';
					}


	?>
					<div class="owl-lazy" data-src="<?php echo $slide_image['url']; ?>">
						<div class="slide-caption">
							<div class="slide-border">
								<div class="slide-header"><i class="fa fa-star" aria-hidden="true"></i></div>

								<?php echo $slide_content; ?>

								<?php if($slide_btn_display): ?>
									<a class="btn btn-home <?php echo $slide_btn_class; ?>" href="<?php echo $slide_btn_link; ?>"><?php echo $slide_btn_text; ?></a>
								<?php endif; ?>
							</div>
						</div>
					</div><!-- .slide -->

<?php
	    endwhile; ?>

			</div><!-- .section-carousel -->

<?php
	else :

	    // no rows found

	endif;

	?>



<?php
	// about section vars
	$about_image = get_field('about_bg_image');
	$about_title = get_field('about_title');
	$about_content = get_field('about_content');
?>


<?php if( !empty($about_title) || !empty($about_content) ): ?>

<div class="section-about">
	<div class="bcg" style="background-image:url('<?php echo $about_image['url']; ?>')"></div>
	<div class="container">
		<h2 class="entry-title"><?php echo $about_title; ?></h2>
		<div id="section-about-content" class="entry-content">
			<?php echo $about_content; ?>
		</div>
	</div>
</div><!-- .section-about -->

<?php endif; ?>


<?php
	// map section vars
	$map_bg_image = get_field('map_bg_image');
	$map_bg_video = get_field('map_bg_video');
	$map_top_content = get_field('map_top_content');
	$map_boxed_content = get_field('map_boxed_content');
	$map_image = get_field('map_content_image');
?>

<?php if( !empty($map_top_content) || !empty($map_boxed_content) ): ?>

<div class="section-map" style="background-image:url('<?php echo $map_bg_image['url']; ?>')">
	<?php if( !empty($map_bg_video) ): ?>
		<video class="video-bg" autoplay loop="true" width="960" height="540" poster="<?php echo $map_bg_image['url']; ?>">
	    <source type="video/mp4" src="<?php echo $map_bg_video['url']; ?>">
	  </video>
	<?php endif; ?>
	<div class="overlay"></div>
	<div class="container">
		<h2 class="entry-title"><?php echo $map_top_content; ?></h2>
		<div class="entry-map"><img src="<?php echo $map_image['url']; ?>" alt="<?php echo $map_image['alt']; ?>"></div>
		<div id="section-map-content" class="entry-container">
				<div class="bcg"></div>
				<div class="entry-content">
					<?php echo $map_boxed_content; ?>
				</div>
		</div>
	</div>
</div><!-- .section-map -->

<?php endif; ?>

<?php
	// hubzones section vars
	$hubzone_image = get_field('hubzone_image');
	$hubzone_title = get_field('hubzone_title');
	$hubzone_content = get_field('hubzone_content');
?>


<?php if( !empty($hubzone_title) || !empty($hubzone_content) ): ?>

<div class="section-hubzones">
	<div class="container">
		<div class="entry-content equalheights">
				<h2 class="entry-title"><?php echo $hubzone_title; ?></h2>
				<?php echo $hubzone_content; ?>
		</div>
	</div>
	<div class="entry-image equalheights">
		<div class="bcg" style="background-image:url('<?php echo $hubzone_image['url']; ?>')"></div>
	</div>
</div><!-- .section-hubzones -->

<?php endif; ?>

<?php

// check if the repeater field has rows of data
if( have_rows('more_links') ): ?>
	<div class="section-more">
<?php
 	// loop through the rows of data
    while ( have_rows('more_links') ) : the_row();

				// vars
				$links_image = get_sub_field('link_image');
				$links_title = get_sub_field('link_title');
				$links_url = get_sub_field('link_url');
?>

				<div class="entry-link">
					<a href="<?php echo $links_url; ?>">
						<img src="<?php echo $links_image['url']; ?>" alt="<?php echo $links_image['alt']; ?>">
						<h2><?php echo $links_title; ?></h2>
					</a>
				</div>

<?php
    endwhile;
?>
	</div><!-- .section-more -->
<?php
else :

    // no rows found

endif;

?>


<?php
if( have_rows('home-carousel') ):

		while ( have_rows('home-carousel') ) : the_row();

		$post_object = get_sub_field('slide_button_modal');

		if( $post_object ):

			// override $post
			$post = $post_object;
			setup_postdata( $post );
?>

<div id="post-<?php the_ID(); ?>" <?php post_class(array('modal')); ?>>
	<button id="btn-modal-close" class="btn btn--modal-close" aria-label="Close modal form"><svg class="icon icon--cross"><use xlink:href="#icon-cross"></use></svg></button>
	<div class="entry-content">

		<?php the_content(); ?>

	</div><!-- .entry-content -->
</div><!-- /modal -->

<?php
		wp_reset_postdata(); // IMPORTANT
 		endif;

		endwhile;

endif; ?>


<!--<h2>Find Out How</h2>
<p>Sign up to receive updates about the Set Aside Central App!</p>
<form>
	<div class="form-group">
		<label for="exampleInputEmail1">Name</label>
		<input type="text" class="form-control" id="inputName" placeholder="Name">
	</div>
	<div class="form-group">
		<label for="inputEmail1">Email</label>
		<input type="email" class="form-control" id="inputEmail" placeholder="Email">
	</div>

	<button type="submit" class="btn-submit">Sign up</button>
	<a href="#" class="btn-cancel">Cancel</a>
</form>-->
