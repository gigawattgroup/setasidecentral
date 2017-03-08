<?php
/**
 * Custom Post Types and Taxonomies for this theme.
 *
 *
 * @package Set_Aside_Central
 */

 function sac_custom_posttypes() {

    // Testimonials post type
    $labels = array(
        'name'               => 'Modals',
        'singular_name'      => 'Modal',
        'menu_name'          => 'Modals',
        'name_admin_bar'     => 'Modal',
        'add_new'            => 'Add New',
        'add_new_item'       => 'Add New Modal',
        'new_item'           => 'New Modal',
        'edit_item'          => 'Edit Modal',
        'view_item'          => 'View Modal',
        'all_items'          => 'All Modals',
        'search_items'       => 'Search Modals',
        'parent_item_colon'  => 'Parent Modals:',
        'not_found'          => 'No modals found.',
        'not_found_in_trash' => 'No modals found in Trash.',
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'menu_icon'          => 'dashicons-admin-page',
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'modals' ),
        'capability_type'    => 'page',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'supports'           => array( 'title', 'editor', 'thumbnail', 'revisions' )
    );
    register_post_type( 'modal', $args );
}
add_action( 'init', 'sac_custom_posttypes' );

/**
 * Flush rewrite rules to add "review" as a permalink slug
 */
function sac_rewrite_flush() {
    sac_custom_posttypes();
    flush_rewrite_rules();
}
register_activation_hook( __FILE__, 'sac_rewrite_flush' );


/**
 * Custom Taxonomies
 */
/*function sac_custom_taxonomies() {
	register_taxonomy(
		'testimonial-categories',
		'testimonial',
		array(
			'label' => __( 'Testimonial Categories' ),
			'rewrite' => array( 'slug' => 'testimonial-categories' ),
			'hierarchical' => true,
		)
	);

	register_taxonomy(
		'news-categories',
		'news',
		array(
			'label' => __( 'News Categories' ),
			'rewrite' => array( 'slug' => 'news-categories' ),
			'hierarchical' => true,
		)
	);

	register_taxonomy(
		'staff-categories',
		'staff',
		array(
			'label' => __( 'Staff Categories' ),
			'rewrite' => array( 'slug' => 'staff-categories' ),
			'hierarchical' => true,
		)
	);

    register_taxonomy(
		'job-categories',
		'career',
		array(
			'label' => __( 'Job Categories' ),
			'rewrite' => array( 'slug' => 'job-categories' ),
			'hierarchical' => true,
		)
	);

}

add_action( 'init', 'sac_custom_taxonomies' );*/
