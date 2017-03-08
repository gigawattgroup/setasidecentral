<?php
/**
 * Template part for displaying popups
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Set_Aside_Central
 */

?>

<div id="post-<?php the_ID(); ?>" <?php post_class(array('modal')); ?>>
	<button id="btn-modal-close" class="btn btn--modal-close" aria-label="Close modal form"><svg class="icon icon--cross"><use xlink:href="#icon-cross"></use></svg></button>
	<div class="entry-content">
		<?php
			the_content();
		?>
	</div><!-- .entry-content -->
	<footer class="entry-footer">
		<?php sac_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</div><!-- /search -->
