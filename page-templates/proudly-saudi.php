<?php
/**
* Template Name: Proudly Saudi
**/

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;

Timber::render('proudly-saudi.twig', $context );
