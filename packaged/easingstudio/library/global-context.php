<?php
/* */
function add_to_context($context) {
    $context['languagelist'] = apply_filters( 'wpml_active_languages', NULL, 'orderby=id&order=desc' );

    if ($context['site']->language == 'fr-FR') {
        $context['colors'] = 'quebec';
        $context['newsletterID'] = 'https://adomcreation.us7.list-manage.com/subscribe/post?u=6fd3d3a55efa51593a710eb82&amp;id=02259ec937';
    } else {
        $context['colors'] = 'florida';
        $context['newsletterID'] = 'https://adomcreation.us7.list-manage.com/subscribe/post?u=6fd3d3a55efa51593a710eb82&amp;id=51a1378cea';
    }

    $context['quebec'] = [
        'phone' => '(514) 316-2366',
        'address' => '275 Avenue Liberté<br>Candiac, Quebec<br>J5R 3X8'
    ];

    $context['florida'] = [
        'phone' => '(964) 666-9360',
        'address' => 'Fort Lauderdale,<br>Florida 33308'
    ];

    $context['facebook']  = 'https://facebook.com/adomsmarthome';
    $context['instagram'] = 'https://instagram.com/adom_smarthome';
    $context['linkedin']  = 'https://linkedin.com/company/adomsmarthome';
    $context['pinterest']  = '#';

    $products = [
        'post_type' => 'products',
        'numberposts' => 4
    ];

    $context['products'] = Timber::get_posts($products);

    return $context;
}

add_filter('timber_context', 'add_to_context');
