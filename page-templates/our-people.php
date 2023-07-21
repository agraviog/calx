<?php
/**
* Template Name: Our People
**/

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;

Timber::render('our-people.twig', $context );
