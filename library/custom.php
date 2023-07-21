<?php


	function InsightsTab() {
		$labels = array(
			"name" => "Insights",
			"singular_name" => "Insight",
			"menu_name"  => "Insights",
			"add_new"  => "Add new Insight",
			"add_new_item"  => "Add new Insight",
		);

		$args = array(
			"labels" => $labels,
			'menu_icon' => 'dashicons-open-folder',
			"description" => "",
			"public" => true,
			"publicly_queryable" => true,
			"show_ui" => true,
			"delete_with_user" => false,
			"show_in_rest" => false,
			"rest_base" => "",
			"rest_controller_class" => "WP_REST_Posts_Controller",
			'taxonomies'  => array( 'category' ),
			"has_archive" => false,
			"show_in_menu" => true,
			"show_in_nav_menus" => true,
			"exclude_from_search" => false,
			"capability_type" => "post",
			"map_meta_cap" => true,
			"hierarchical" => true,
			"query_var" => true,
			"publicly_queryable" => true,
			"supports" => array( "title", "editor", "custom-fields", "revisions")
		);

		register_post_type( "insight", $args );
		flush_rewrite_rules();
	}
	add_action( 'init', 'InsightsTab' );



	function post_remove () {
		remove_menu_page('edit.php');
	}
	add_action('admin_menu', 'post_remove');



	function my_login_logo() { ?>
		<style type="text/css">
		#login h1 a, .login h1 a {
			background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/calxlogo@2x.png');
			height:40px;
			width:200px;
			position: relative;
			background-size: 130px 30px;
			background-repeat: no-repeat;
			margin-bottom: 20px;
			padding-bottom: 10px;
		}

		.login h1 a:before {
			content: 'Private Area';
			position: absolute;
			right: 0;
			text-align: center;
			left: 0;
			font-size: 20px;
			color: red;
			z-index: 2;
			text-indent: 0;
			letter-spacing: 1px;
			color: #002239;
			font-size: 10px;
			text-transform: uppercase;
			bottom: 0;

		}

	</style>
	<?php }
	add_action( 'login_enqueue_scripts', 'my_login_logo' );

	// changing the logo link from wordpress.org to your site
	function mb_login_url() {  return home_url(); }
	add_filter( 'login_headerurl', 'mb_login_url' );

	function PREFIX_add_query_vars($aVars) {
		$aVars[] = "category";
		$aVars[] = "sort_by";

		return $aVars;
	}

	// hook PREFIX_add_query_vars function into query_vars
	add_filter('query_vars', 'PREFIX_add_query_vars');


	Routes::map('insights/page/:pg', function($params){
        //make a custom query based on incoming path and run it...
        $query = 'posts_per_page=6&post_id=22&paged='.intval($params['pg']);

        //load up a template which will use that query
        Routes::load('page-templates/insights.php', null, $query);
    });
