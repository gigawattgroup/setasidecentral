<?php
/**
 * Template Name: Homepage
 *
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Set_Aside_Central
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php
			while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content', 'homepage' );

			endwhile; // End of the loop.
			?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
