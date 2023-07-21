<?php
/**
* Template Name: Services
**/

// Code to display Page goes here...
$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;


$solutions = [
    'post_type' => 'services',
    'numberposts' => -1
];

$context['services'] = Timber::get_posts($solutions);
Timber::render('services.twig', $context );
