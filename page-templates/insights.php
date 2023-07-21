<?php
/**
* Template Name: Insights
**/

global $paged;
if (!isset($paged) || !$paged){
    $paged = 1;
}

$context = Timber::context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;


$context['selected_category'] = get_query_var('category');
$context['sort_by'] = get_query_var('sort_by');

if ($context['selected_category'] == 'all' || $context['selected_category'] == '' || $context['selected_category'] == null) {
    $category = '';
} else {
    $category = get_category_by_slug($context['selected_category'])->term_id;
}

$insights = [
    'posts_per_page' => 10,
    'post_type' => 'insight',
    'category' => $category,
    'order_by' => 'date',
    'order'    => $context['sort_by'],
    'paged'    => $paged
];


$context['articles'] = new Timber\PostQuery($insights);


$categories = array(
    'taxonomy' => 'category',
    'orderby'    => 'ID',
    'order'      => 'ASC',
);

$context['filter'] = Timber::get_terms($categories);

Timber::render('insights.twig', $context );
