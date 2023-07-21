<?php
/* */
function add_to_context($context) {
    $context['languagelist'] = apply_filters( 'wpml_active_languages', NULL, 'orderby=id&order=desc' );

    $context['linkedin'] = 'https://linkedin.com/company/calx-consulting';

    return $context;
}

add_filter('timber_context', 'add_to_context');
