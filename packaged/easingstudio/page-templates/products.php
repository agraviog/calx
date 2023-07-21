<?php
/**
* Template Name: Products
**/

// Code to display Page goes here...
$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;


$products = [
    'post_type' => 'products',
    'numberposts' => -1
];


$context['products'] = Timber::get_posts($products);
Timber::render('products.twig', $context );
