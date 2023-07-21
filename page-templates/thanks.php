<?php
/**
* Template Name: Thank You
**/

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;

Timber::render('thanks.twig', $context );
