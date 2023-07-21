<?php
/**
* Template Name: Locations
**/

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;

Timber::render('locations.twig', $context );
