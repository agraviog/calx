import Swiper, { Autoplay, Scrollbar, A11y, Navigation } from 'swiper';
import ScrollMagic from 'ScrollMagic';
require('./SplitText.min.js');
import 'debug.addIndicators';

class Animations {
    constructor() {
        var bodyClasses = $('body').attr('class').split(' ');

        for (var i = 0; i < bodyClasses.length; i++) {
            switch(bodyClasses[i]) {
                case 'page-template-homepage':
                    this.cookiesWarn();
                    this.header();
                    this.homepage();
                    this.writeText();
                    this.revealGalleryImages();
                    this.videoSaudi();
                    this.revealInsightsThumbs();
                    break;

                case 'page-template-project_management':
                case 'page-template-strategy_consulting':
                    this.cookiesWarn();
                    this.writeText();
                    this.justFadeIn();
                    this.showIMG();
                    this.header();
                    break;

                case 'page-template-industries':
                case 'page-template-proudly-saudi':
                case 'page-template-our-people':
                    this.cookiesWarn();
                    this.writeText();
                    this.justFadeIn();
                    this.showIMG();
                    this.header();
                break;


                case 'page-template-academy':
                case 'page-template-careers':
                    this.cookiesWarn();
                    this.writeText();
                    this.justFadeIn();
                    this.showIMG();
                    this.header();
                    this.fadeForm();

                break;

                case 'page-template-our-purpose':
                    this.cookiesWarn();
                    this.writeText();
                    this.justFadeIn();
                    this.showIMG();
                    this.header();
                    this.enableValuesSwiper();
                break;

                case 'page-template-connect':
                    this.cookiesWarn();
                    this.writeText();
                    this.justFadeIn();
                    this.showIMG();
                    this.header();
                    this.fadeForm();
                break;

                case 'page-template-locations':
                    this.cookiesWarn();
                    this.writeText();
                    this.header();
                break;

                case 'miscellaneous':
                    this.cookiesWarn();
                    this.writeText();
                    this.header();
                break;

                case 'page-template-product':
                    this.cookiesWarn();
                    this.header();
                    this.writeText();
                    this.justFadeIn();
                    this.showIMG();

                    this.enableSwiper();
                    this.fadeForm();

                break;
            }
        }
    }

    //* Cookies
    cookiesWarn() {
        if(window.sessionStorage["_cookies"] == undefined || window.sessionStorage["_cookies"] == 'undefined' || window.sessionStorage["_cookies"] == null || window.sessionStorage["_cookies"] !== 'valid') {
            var tlCookies = new TimelineMax({paused: true});
                tlCookies.from(".cookies", 0.6, {autoAlpha:0, ease: Power1.easeInOut}, 0);

            // Clicks Cross Icon
            tlCookies.play();
            // Clicks Cross Icon
            $('.cookies--accept').on('click', function(){
                tlCookies.reverse().timeScale(1.5);
                window.sessionStorage["_cookies"] = 'valid';
            });
        } else {
            // Hide this box
            TweenMax.set(".cookies", {autoAlpha:0});
        }
    }

    //* Custom Animations
    homepage(){
        const controller   = new ScrollMagic.Controller();

        var tlAnimatePath = new TimelineMax({
            paused: true
        });
            tlAnimatePath.from(".middleimage", 2, {y: 20, opacity: 0, ease: Power3.easeInOut}, 0);

        var sceneHomePicture = new ScrollMagic.Scene({
            triggerElement: '.js-revealIMG',
            triggerHook: '1'
        })
        .on('enter', function(e){
            tlAnimatePath.play();
        })
        // .addIndicators()
        .addTo(controller);
    }

    header() {

        // Header Animations
        var tlIntroHeader = new TimelineMax(),
            splitText = new SplitText('.intro--text', {type:"chars, words"}),
            textChars = splitText.chars,
            splitHeading = new SplitText('.intro--title', {type:"chars, words"}),
            headingChars = splitHeading.chars;

        tlIntroHeader.staggerFrom(textChars, 0.2, { color: '#D6D6D6', zIndex:0, ease: Power2.easeInOut}, 0.031, 0.1)
                    .staggerFrom(headingChars, 0.8, {autoAlpha:0, zIndex:0, ease: Power2.easeInOut}, 0.05, 0.2)
                    .from('.slideUp', 0.8, {autoAlpha:0, ease: Power1.easeInOut}, 0.6)
                    .to('.panel', 0.7,{ scaleY:0, transformOrigin: '0% 100%', ease: Power1.easeInOut}, 0.6)
                    .from('.intro--picture', 1.6, {scale:1.3, y: -100, zIndex:0, ease: Power1.easeInOut}, 0.6)
                    .from('.panel--left', 0.7,{ scaleX:1, transformOrigin: '0% 0%', ease: Power1.easeInOut}, 0.1);

    }

    writeText() {
        var controller = new ScrollMagic.Controller();
        var typedContainer = $('.js-typed-text');

        typedContainer.each(function (index, elem) {
            var child = $(elem).find('.letters');
            var em = $(elem).find('em');
            var cta = $(elem).find('.moveitUp');
            var tlTyped = new TimelineMax({paused: true}),
                splitType = new SplitText(child, {type:"chars, words"}),
                splitTypeChar = splitType.chars;

            tlTyped
                .staggerFrom(em, 0.4, {y: 20, autoAlpha:0, ease: Power1.easeInOut},0.1, 0)
                .staggerFrom(splitTypeChar, 0.10, {color:'rgba(0,0,0,0.1)', ease: Power1.easeInOut}, 0.016, 0)
                .staggerFrom(cta, 0.4, {y: 20, autoAlpha:0, ease: Power1.easeInOut},0.1, 0.3);

            var sceneTyped = new ScrollMagic.Scene({
                triggerElement: elem,
                triggerHook: '0.95'
            })
            .on('enter', function(e){
                tlTyped.play();
            })
            // .addIndicators()
            .addTo(controller);
        });
    }


    justFadeIn() {
        var controller = new ScrollMagic.Controller();
        var typedContainer = $('.fade-trigger');

        typedContainer.each(function (index, elem) {
            var fade = $(elem).find('.fadeIn');
            var tlFade = new TimelineMax({paused: true});

            tlFade.staggerFrom(fade, 0.7, {opacity: 0.06, ease: Power1.easeInOut}, 0.2, 0.1);

            var sceneTyped = new ScrollMagic.Scene({
                triggerElement: elem,
                triggerHook: '0.95'
            })
            .on('enter', function(e){
                tlFade.play();
            })
            // .addIndicators()
            .addTo(controller);
        });
    }


    revealGalleryImages() {
        var controller = new ScrollMagic.Controller();
        var typedContainer = $('.s-homepage--reveal-cortains');

        typedContainer.each(function (index, elem) {
            var cortains = $(elem).find('.cortain'),
                texts = $(elem).find('.fadeIn'),
                tlRevealIMG = new TimelineMax({paused: true});

                tlRevealIMG.staggerTo(cortains, 0.8, {scaleY:0, transformOrigin:'100% 100%', ease: Power1.easeInOut}, 0.3, 0)
                           .staggerFrom(texts, 0.8, {opacity:0, ease: Power1.easeInOut}, 0.3, 0);

            var sceneRevealIMGs = new ScrollMagic.Scene({
                triggerElement: elem,
                triggerHook: '1'
            })
            .on('enter', function(e){
                tlRevealIMG.play();
            })
            // .addIndicators()
            .addTo(controller);
        });
    }


    revealInsightsThumbs() {
        var controller = new ScrollMagic.Controller(),
            tlInsightsThumbs = new TimelineMax({paused: true});

            tlInsightsThumbs.staggerFrom('.s-homepage--insights .insight--row', 0.8, {y:'+=20', autoAlpha:0, ease: Power1.easeInOut}, 0.3, 0);

        var sceneInsightsRows = new ScrollMagic.Scene({
            triggerElement: '.s-homepage--insights',
            triggerHook: '1'
        })
        .on('enter', function(e){
            tlInsightsThumbs.play();
        })
        // .addIndicators()
        .addTo(controller);
    }

    showIMG() {
        var controller = new ScrollMagic.Controller();
        var showIMG = $('.showIMG--triger');

        showIMG.each(function (index, elem) {
            var cortainLeft = $(elem).find('.cortains--left'),
                cortainRight = $(elem).find('.cortains--right'),
                tlshowIMG = new TimelineMax({paused: true});

                tlshowIMG.from(cortainLeft, 0.9, {scaleY:1, transformOrigin:'bottom center', ease: Power2.easeInOut}, 0.3)
                        .from(cortainRight, 0.8, {scaleY:1, transformOrigin:'top center', ease: Power1.easeInOut}, 0.3)

            var sceneShowIMG = new ScrollMagic.Scene({
                triggerElement: elem,
                triggerHook: '1'
            })
            .on('enter', function(e){
                tlshowIMG.play();
            })
            // .addIndicators()
            .addTo(controller);
        });
    }



    videoSaudi() {
        var controller = new ScrollMagic.Controller();
        function updateSRC() {
            //Adds Video Src
            var $window = $(window),
                $video =  $('.saudi--video'),
                $mobile = $video.attr('data-mobile-src'),
                $desktop = $video.attr('data-desktop-src');

            if ($window.width() > 768) {
                $video.attr('src', $desktop);
            } else {
                $video.attr('src', $mobile);
            }
        }

        var tlVideo = new TimelineMax({paused: true}),
            $videoParent =  '.videoContainer',
            child = $($videoParent).find('em'),
            cortainLeft = $($videoParent).find('.cortains--left'),
            cortainRight = $($videoParent).find('.cortains--right'),
            splitvideoType = new SplitText(child, {type:"chars, words"}),
            splitTypeCharVideo = splitvideoType.chars;

        tlVideo.from(cortainLeft, 0.7, {scaleY:1, transformOrigin:'bottom center', ease: Power1.easeInOut}, 0.3)
                .from(cortainRight, 0.8, {scaleY:1, transformOrigin:'top center', ease: Power2.easeInOut}, 0.2)
                .staggerFrom(splitTypeCharVideo, 0.7, {color:'rgba(255,255,255,0)', ease: Power2.easeInOut}, 0.071, '-=0.1');

        var sceneVideo = new ScrollMagic.Scene({
            triggerElement: $videoParent,
            triggerHook: '0.95'
            // tweenChanges: true
        })
        .on('enter', function(e){
            updateSRC();
            tlVideo.play();
        })
        // .addIndicators()
        .addTo(controller);

    }

    enableSwiper() {

        //Swiper
        Swiper.use([Autoplay, Scrollbar]);
        // const swiper = new Swiper('.swiper-container', {
        //     direction: 'horizontal',
        //     slidesPerView: 3,
        //     initialSlide: 0,
        //     freeMode: true,
        //     loop: false,
        //     speed: 5000,
        //     autoplay: {delay: 0},
        //     scrollbar: {
        //       container: '.swiper-scrollbar',
        //       hide: false,
        //       draggable: true,
        //       snapOnRelease: true
        //     }
        // });


        const swiper = new Swiper(".x-slider", {
            freeMode: true,
            speed: 5000,
            // autoplay: {delay: 0,disableOnInteraction: false},
            scrollbar: {
              el: ".swiper-scrollbar",
              hide: false,
            },
            mousewheel: true,
            breakpoints: {
              300: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 30
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 40
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 50
              }
            }
          });

        // $(".x-slider")[0].swiper.autoplay.stop();
        // $(".swiper-container").each(function(elem, target){
        //     var swp = target.swiper;
        //     $(this).hover(function() {
        //         swp.autoplay.stop();
        //     }, function() {
        //         swp.autoplay.start();
        //     });
        // });



        var controller = new ScrollMagic.Controller(),
            $container = '.swiper-container';

        var tlVideo = new TimelineMax({paused: true});
            tlVideo.staggerFrom('.swiper--inner', 0.6, {opacity:0, xPercent:60, ease: Power1.easeInOut}, 0.2, 0);

        var sceneSwiper = new ScrollMagic.Scene({
            triggerElement: $container,
            triggerHook: '1',
            reverse: true
        })
        .on('enter', function(e){
            tlVideo.restart();

        })
        .on('leave', function(e){
            tlVideo.reverse();

        })
        // .addIndicators()
        .addTo(controller);
    }


    enableValuesSwiper() {
        Swiper.use([Autoplay, Navigation]);

        const swiper = new Swiper(".x-slider", {
            freeMode: false,
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
              },
            speed: 1000,
            breakpoints: {
              300: {
                slidesPerView: 1.2,
                spaceBetween: 20
              },
              480: {
                slidesPerView: 1.2,
                spaceBetween: 30
              },
              640: {
                slidesPerView: 2.3,
                spaceBetween: 40
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 40
              },
              1200: {
                slidesPerView: 4.2,
                spaceBetween: 20
              }
            }
          });

    }


    fadeForm() {
        var controller = new ScrollMagic.Controller(),
            fadeForm = '.fadeForm';

        var tlForm = new TimelineMax({paused: true});
            tlForm.staggerFrom('.moveUp', 0.8, {y:'+=20', autoAlpha:0, ease: Power1.easeInOut}, 0.3, 0.3);

        var sceneForm = new ScrollMagic.Scene({
            triggerElement: fadeForm,
            triggerHook: '1'
        })
        .on('enter', function(e){
            tlForm.play();
        })
        // .addIndicators()
        .addTo(controller);
    }
}

export default Animations;
