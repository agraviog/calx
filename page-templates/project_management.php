<?php
/**
* Template Name: Project Management Consulting 
**/

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;

Timber::render('project_management.twig', $context );
