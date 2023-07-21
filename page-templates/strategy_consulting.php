<?php
/**
* Template Name: Strategy Consulting
**/

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;

Timber::render('strategy_consulting.twig', $context );
