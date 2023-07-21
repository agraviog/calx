<?php
/**
 * The Template for displaying all single posts
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context         = Timber::context();
$timber_post     = Timber::query_post();
$context['post'] = $timber_post;

if ($timber_post->slug == 'support') {
	if ($context['site']->language == 'fr-FR') {
		$context['mailto'] = "mailto:info@adom-smarthome.com?subject=Je%20suis%20int%C3%A9ress%C3%A9%20par%20les%20plans%20d'accompagnement&body=Bonjour%2C%0D%0A%0D%0AJ'aimerais%20avoir%20plus%20d'informations%20au%20sujet%20des%20plans%20d'accompagnement.";
	} else {
		$context['mailto'] = "mailto:info@adom-smarthome.com?subject=I'm%20interested%20to%20learn%20about%20your%20support%20plans&body=Hi%2C%0D%0A%0D%0AI%20would%20like%20to%20get%20more%20information%20about%20your%20support%20plans.";

	}
}

if ( post_password_required( $timber_post->ID ) ) {
	Timber::render( 'single-password.twig', $context );
} else {
	Timber::render( array( 'single-' . $timber_post->ID . '.twig', 'single-' . $timber_post->slug . '.twig', 'single-' . $timber_post->post_type . '.twig',  'single.twig' ), $context );
}
