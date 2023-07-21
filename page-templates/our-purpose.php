<?php
/**
* Template Name: Our Purpose
**/

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;

Timber::render('our-purpose.twig', $context );
