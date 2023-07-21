<?php
if ( ! function_exists( 'update_assetPath' ) ) :
	function update_assetPath( $filename ) {
		$filename_split = explode( '.', $filename );
		$dir            = end( $filename_split );
		$manifest_path  = dirname( dirname( __FILE__ ) ) . '/dist/assets/' . $dir . '/rev-manifest.json';

		if ( file_exists( $manifest_path ) ) {
			$manifest = json_decode( file_get_contents( $manifest_path ), true );
		} else {
			$manifest = array();
		}

		if ( array_key_exists( $filename, $manifest ) ) {
			return $manifest[ $filename ];
		}
		return $filename;
	}
endif;


if ( ! function_exists( 'foundationpress_scripts' ) ) :
	function foundationpress_scripts() {
		// Enqueue the main Stylesheet.
		wp_enqueue_style('css', get_stylesheet_directory_uri() . '/dist/assets/css/' . update_assetPath( 'app.css' ), array(), '1.0.0', 'all');

		wp_enqueue_script('scripts', get_stylesheet_directory_uri() . '/dist/assets/js/' . update_assetPath( 'app.js' ), array(), '1.0.0', true);
		wp_localize_script('scripts', 'ajaxURL', admin_url( 'admin-ajax.php' ));
		wp_localize_script('scripts', 'ajaxAPIURL', get_stylesheet_directory_uri().'/static/api.php');

		// Removes css
		wp_dequeue_style('wp-block-library');
		wp_deregister_script('wp-embed');
	}
	add_action( 'wp_enqueue_scripts', 'foundationpress_scripts');
endif;
