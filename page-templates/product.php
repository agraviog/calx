<?php
/**
* Template Name: Product Detail
**/

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;


if ($context['post']->slug == 'project-plus') {
    $context['scheme'] = 'electric';
    $context['logo'] = [
        'id' => 'projectplus',
        'viewbox' => '0 0 377.774 85.999'
    ];
    $context['icon'] = [
        'id' => 'projectplusicon',
        'viewbox' => '0 0 34.012 34.007'
    ];
    $context['next_project'] = [
        'id' => '43',
        'name' => 'WinX'
    ];
}

if ($context['post']->slug == 'winx') {
    $context['scheme'] = 'lion';
    $context['logo'] = [
        'id' => 'winx',
        'viewbox' => '0 0 228.73 68.483'
    ];
    $context['icon'] = [
        'id' => 'winxicon',
        'viewbox' => '0 0 32.522 35.008'
    ];
    $context['next_project'] = [
        'id' => '45',
        'name' => 'Genius'
    ];
}


if ($context['post']->slug == 'genius') {
    $context['scheme'] = 'water';
    $context['logo'] = [
        'id' => 'genius',
        'viewbox' => '0 0 348.891 88.912'
    ];
    $context['icon'] = [
        'id' => 'geniusicon',
        'viewbox' => '0 0 34.003 34.007'
    ];
    $context['next_project'] = [
        'id' => '41',
        'name' => 'Project+'
    ];
}

Timber::render('product-detail.twig', $context );
