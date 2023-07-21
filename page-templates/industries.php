<?php
/**
* Template Name: Industries we serve
**/

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;


Timber::render('industries.twig', $context );
