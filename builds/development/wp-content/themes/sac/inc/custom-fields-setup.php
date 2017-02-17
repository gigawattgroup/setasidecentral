<?php
/**
 * ACF Setup: Removes plugin and inserts it into theme
 *
 * @package Set_Aside_Central
 */


 add_filter('acf/settings/path', 'my_acf_settings_path');

 function my_acf_settings_path( $path ) {

     // update path
     $path = get_stylesheet_directory() . '/acf/';

     // return
     return $path;

 }

 add_filter('acf/settings/dir', 'my_acf_settings_dir');

 function my_acf_settings_dir( $dir ) {

     // update path
     $dir = get_stylesheet_directory_uri() . '/acf/';

     // return
     return $dir;

 }

 /*add_filter('acf/settings/show_admin', '__return_false');

 add_filter('acf/settings/show_admin', 'my_acf_show_admin');

 function my_acf_show_admin( $show ) {

     return current_user_can('manage_options');

 }*/


 include_once( get_stylesheet_directory() . '/acf/acf.php' );

 function custom_menu_page_removing() {
     remove_menu_page( 'edit.php?post_type=acf-field-group' );
 }
 add_action( 'admin_menu', 'custom_menu_page_removing' );
