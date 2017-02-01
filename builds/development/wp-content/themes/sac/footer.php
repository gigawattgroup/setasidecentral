<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Set_Aside_Centeral
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="container">
			<?php wp_nav_menu( array( 'theme_location' => 'footer', 'menu_id' => 'footer-menu' ) ); ?>
			<div class="site-info">
				<a class="copyright" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php printf( esc_html__( 'Copyright &copy; %d %s', 'sac' ), date("Y"), 'Set Aside Central' ); ?></a>
			</div><!-- .site-info -->
		</div><!-- .container -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

<!-- ** DEVELOPMENT ONLY = REMOVE FOR PRODUCTION ** -->
<script src="//localhost:35729/livereload.js"></script>
</body>
</html>
