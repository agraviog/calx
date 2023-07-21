<?php
/**
* Template Name: Homepage
**/

// Code to display Page goes here...
$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;


Timber::render('index.twig', $context );
