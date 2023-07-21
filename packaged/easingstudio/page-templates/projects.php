<?php
/**
* Template Name: Projects
**/

// Code to display Page goes here...
$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;


$context['categories'] = Timber::get_terms('categories', array('orderby' => 'ID'));


$projects = [
    'post_type' => 'projects',
    'numberposts' => -1
];
$context['projects'] = Timber::get_posts($projects);


Timber::render('projects.twig', $context );
