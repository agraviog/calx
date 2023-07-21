// import { Modal, Collapse } from 'bootstrap/dist/js/bootstrap.bundle.js';
"use strict"
var $ = require('jquery');
var imagesLoaded = require('imagesloaded');
imagesLoaded.makeJQueryPlugin($);

import {TweenMax, TimelineMax} from 'gsap';
require('./SplitText.min.js');

var viewportUnitsBuggyfill = require('viewport-units-buggyfill');
var svg4everybody = require('svg4everybody/dist/svg4everybody.min');
// require('paroller.js');

// Partials
import Cursor from "./cursor";
import Animations from "./animations";
import Menu from "./menu";
import Parallax from "./parallax.js";

$('document').ready(() => {
    // Sets global vars
    var $window = $(window),
        $body = $("body"),
        $html = $("html"),
        $loadingPage = $("#ghost-layer"),
        wH = $window.height();


    function onPageLoad() {
        $('main').imagesLoaded(function($images, $proper, $broken) {
            $(this).imagesLoaded().always(function() {
                TweenMax.to($loadingPage, 0.6, {
                    autoAlpha: 0,
                    ease: Power2.easeInOut,
                    onComplete: function(){
                        $("html,body").removeClass("no-scroll");
                        $body.removeClass("page-loading");
                    }
                });

                const animations = new Animations();
                const menu = new Menu();
                const parallax = new Parallax();

                // Polyfills
                svg4everybody({ polyfill: true });
                viewportUnitsBuggyfill.init({force: true});

            });
        });
    }


    function isMobile() {
        if ($window.width() < 768) {
            $body.removeClass('desktop');
            $body.addClass('mobile');
        } else {
            const cursor = new Cursor();
            $body.addClass('desktop');
            $body.removeClass('mobile');
        }
    }

    // Intilizares
    onPageLoad();
    isMobile();


    // onResize
    $window.on('resize', isMobile);
});
