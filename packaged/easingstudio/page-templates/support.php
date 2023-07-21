<?php
/**
* Template Name: Support
* Template Post Type: services
**/

// Code to display Page goes here...
$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;


Timber::render('single-support.twig', $context );
