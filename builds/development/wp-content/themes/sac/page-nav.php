<?php
/**
 * The in-page navigation
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Set_Aside_Central
 */

?>

 <nav class="page-navigation">
	 <div class="container">
		<?php if ( is_page_template( array('template-pages/about.php') ) ) : ?>
	 	<?php wp_nav_menu( array( 'theme_location' => 'about', 'menu_id' => 'page-menu' ) ); ?>
		<?php elseif ( is_page_template( array('template-pages/learn.php') ) ) : ?>
	 	<?php wp_nav_menu( array( 'theme_location' => 'learn', 'menu_id' => 'page-menu' ) ); ?>
		<?php endif; ?>
	</div><!-- .container -->
 </nav><!-- .section-nav -->
