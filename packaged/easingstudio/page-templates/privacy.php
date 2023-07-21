<?php
/**
 * Template Name: Privacy
 * Description: Custom template for Visits Page
 */

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;


Timber::render('privacy.twig', $context);
