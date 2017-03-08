<?php
/**
 * Template part for displaying page content in page-header.php
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
	$featured_position = get_field('featured_position');
?>


<?php if( !empty($featured_title) || !empty($featured_content) ): ?>

<div class="section-featured">
	<div class="bcg <?php echo $featured_position; ?>" style="background-image:url('<?php echo $featured_image['url']; ?>')"></div>
	<div class="container">
		<h1><?php echo $featured_title; ?></h1>
		<?php echo $featured_content; ?>
	</div><!-- .container -->
</div><!-- .section-featured -->

<?php endif; ?>

<div class="container">

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="entry-content">
		<?php
			the_content();

			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'sac' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->

	<?php if ( get_edit_post_link() ) : ?>
		<footer class="entry-footer">
			<?php
				edit_post_link(
					sprintf(
						/* translators: %s: Name of current post */
						esc_html__( 'Edit %s', 'sac' ),
						the_title( '<span class="screen-reader-text">"', '"</span>', false )
					),
					'<span class="edit-link">',
					'</span>'
				);
			?>
		</footer><!-- .entry-footer -->
	<?php endif; ?>
</article><!-- #post-## -->


</div><!-- .container -->
