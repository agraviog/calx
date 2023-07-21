<?php
/**
* Template Name: Miscellaneous
**/

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;

Timber::render('miscellaneous.twig', $context );
