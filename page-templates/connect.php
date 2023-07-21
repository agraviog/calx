<?php
/**
* Template Name: Connect with us
**/

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;

Timber::render('connect.twig', $context );
