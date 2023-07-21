<?php
	function servicesTab() {
		$labels = array(
			"name" => "Services",
			"singular_name" => "Service",
			"menu_name"  => "Service",
			"add_new"  => "Add Services",
			"add_new_item"  => "Add New Service",
		);

		$args = array(
			"labels" => $labels,
			'menu_icon' => 'dashicons-clipboard',
			"description" => "",
			"public" => true,
			"publicly_queryable" => true,
			"show_ui" => true,
			"delete_with_user" => false,
			"show_in_rest" => false,
			"rest_base" => "",
			"rest_controller_class" => "WP_REST_Posts_Controller",
			"has_archive" => false,
			"show_in_menu" => true,
			"show_in_nav_menus" => true,
			"exclude_from_search" => false,
			"capability_type" => "post",
			"map_meta_cap" => true,
			"hierarchical" => false,
			"rewrite" => true,
			"query_var" => true,
			"publicly_queryable" => true,
			"supports" => array( "title", "editor", "custom-fields", "revisions", "author")
		);

		register_post_type( "services", $args );
		flush_rewrite_rules();
	}
	add_action( 'init', 'servicesTab' );


	function productsTab() {
		$labels = array(
			"name" => "Products",
			"singular_name" => "Product",
			"menu_name"  => "Products",
			"add_new"  => "Add new Product",
			"add_new_item"  => "Add new Product",
		);

		$args = array(
			"labels" => $labels,
			'menu_icon' => 'dashicons-shield-alt',
			"description" => "",
			"public" => true,
			"publicly_queryable" => true,
			"show_ui" => true,
			"delete_with_user" => false,
			"show_in_rest" => false,
			"rest_base" => "",
			"rest_controller_class" => "WP_REST_Posts_Controller",
			"has_archive" => false,
			"show_in_menu" => true,
			"show_in_nav_menus" => true,
			"exclude_from_search" => false,
			"capability_type" => "post",
			"map_meta_cap" => true,
			"hierarchical" => true,
			"query_var" => true,
			"publicly_queryable" => true,
			"supports" => array( "title", "editor", "custom-fields", "revisions", "author")
		);

		register_post_type( "products", $args );
		flush_rewrite_rules();
	}
	add_action( 'init', 'productsTab' );



	function projectsTab() {
		$labels = array(
			"name" => "Projects",
			"singular_name" => "Project",
			"menu_name"  => "Projects",
			"add_new"  => "Add Projects",
			"add_new_item"  => "Add new Project",
		);

		$args = array(
			"labels" => $labels,
			'menu_icon' => 'dashicons-portfolio',
			"description" => "",
			"public" => true,
			"publicly_queryable" => true,
			"show_ui" => true,
			"delete_with_user" => false,
			"show_in_rest" => false,
			"rest_base" => "",
			"rest_controller_class" => "WP_REST_Posts_Controller",
			"has_archive" => false,
			"show_in_menu" => true,
			"show_in_nav_menus" => true,
			"exclude_from_search" => false,
			"capability_type" => "post",
			"map_meta_cap" => true,
			"hierarchical" => false,
			"rewrite" => true,
			"query_var" => true,
			'taxonomies'  => array('category'),
			"publicly_queryable" => true,
			"supports" => array( "title", "editor", "custom-fields", "revisions", "author")
		);

		register_post_type( "projects", $args );
		flush_rewrite_rules();
	}
	add_action( 'init', 'projectsTab' );





	function custom_post_force_sort_By($query) {
		if($query->is_admin) {
			if ($query->get('post_type') == 'particulares' || $query->get('post_type') == 'empresas' || $query->get('post_type') == 'protocolos')
				{
				  $query->set('orderby', 'created_at');
				  $query->set('order', 'ASC');
				}
			}
			return $query;
		}
	add_filter('pre_get_posts', 'custom_post_force_sort_By');



	function post_remove () {
		remove_menu_page('edit.php');
	}
	add_action('admin_menu', 'post_remove');
