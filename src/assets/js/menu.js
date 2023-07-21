import ScrollToPlugin from "gsap/umd/ScrollToPlugin";

class Menu {
    constructor() {
        this.menu();
    }

    //* Custom Menu
    menu() {
        var $body        = $("body"),
            $html        = $("html"),
            $window      = $(window);

        var tlMenu = new TimelineMax({paused:true}),
            splitMenuText = new SplitText('.menu--about-us', {type:"chars, words"}),
            menuTextChars = splitMenuText.chars;

            tlMenu
                .to("header", 0.4, {backgroundColor:'rgba(255,255,255,0)'}, 0)
                .fromTo("menu", 1, {height:0}, {height:'100%', ease: Power2.easeInOut}, 0)
                .fromTo(".logo", 0.4, {color:'#292929'}, {color:'#ffffff', ease: Power2.easeInOut}, 0)
                .fromTo(".icon-cross", 0.6, {rotation:0, scale:0}, {rotation: 360, scale:1, ease: Power2.easeInOut}, 0)
                .fromTo(".menu--item", 0.4, { autoAlpha:0 },{autoAlpha:1, ease:Power2.easeInOut}, 0)
                .to(".icon-menu", 0.6, {scale:0, ease: Power2.easeInOut}, 0)
                .staggerFrom(".primary--menu .menu--item > a", 0.8, {autoAlpha:0, y: '-=20', color: 'rgba(255,255,255, 0.1)', ease:Power2.easeInOut}, 0.2, '-=0.6')
                .fromTo('.menu--about-us', 0.6,{autoAlpha:0}, {autoAlpha:1, ease: Power2.easeInOut},'-=0.5')
                .fromTo(".menu--right-side", 0.6, {autoAlpha:0}, {autoAlpha:1, ease: Power1.easeInOut}, 2);


        var typeShortText = new TimelineMax({paused:true}).staggerFromTo(menuTextChars, 0.2, {color: 'rgba(255,255,255,0)'}, { color: 'rgba(255,255,255,0.3)', ease: Power2.easeInOut}, 0.031, '1.5');

        // // // //**** Clicking stuff
        var tlCloseMenu = new TimelineMax({
            paused:true,
            onComplete: function(){
                $('.circle-cursor').removeClass('light');
                $('.menu-hover--submenu').removeClass('active opacity');
                TweenMax.set('.secondary--menu', {display:'none', autoAlpha:0, ease:Power1.easeInOut});
            }});

            tlCloseMenu.to(".menu--right-side, .secondary--menu, .menu--item, .menu--about-us", 0.6, {autoAlpha:0, ease:Power1.easeInOut}, 0)
                        .to(".icon-cross", 0.6, {scale:0, ease: Power2.easeInOut}, 0.4)
                        .to(".icon-menu", 0.6, {scale:1, ease: Power2.easeInOut}, 0.4)
                        .to(".logo", 0.6, {color:'#292929', ease: Power2.easeInOut}, 0.4)
                        .to("menu", 1, {height:0, ease: Power2.easeInOut}, 0.2)
                        .to("header", 0.4, {backgroundColor:'rgba(255,255,255,1)'}, 1);



        $('.nav_burguer').on('click', function(){
            $(this).toggleClass('open');
            $html.toggleClass('no-scroll');

            if ($(this).hasClass('open')) {
                // $("html, body").animate({scrollTop: 0}, 200);
                $('.circle-cursor').addClass('light');
                tlMenu.restart().timeScale(1.4);
                if (typeShortText) {
                    typeShortText.play();
                }

                var current = $window.scrollTop();
                $window.scroll(function() {
                    $window.scrollTop(current);
                });


            } else {
                typeShortText = false;
                tlCloseMenu.restart().timeScale(2);

                $window.off('scroll');
            }
        });



        // **** Submenu
        $(".menu-hover--submenu").on("click", function(e){
            var el = $(this);
            var submenu = $(this).attr('data-submenu');

            TweenMax.set('.secondary--menu', {display:'none', autoAlpha:0, ease:Power1.easeInOut});

            // Desktop
            if ($body.hasClass('desktop')) {
                $('.menu-hover--submenu').addClass('opacity');
                $('.menu-hover--submenu').removeClass('active');
                el.addClass('active');

                if (el.hasClass('active')) {
                    TweenMax.fromTo(submenu, 0.3, {autoAlpha:0, display:'none', height:0}, {display:'block', autoAlpha:1, ease:Power2.easeInOut});
                    TweenMax.staggerFrom(submenu +' li', 0.5, {y:20, autoAlpha:0, ease:Power2.easeInOut}, 0.1, 0);
                    el.addClass('active');
                }

                e.preventDefault();
            }

            // Mobile
            if ($body.hasClass('mobile')) {
                var ul = el.parent('li').find('.primary--menu--children');

                if ($(this).hasClass('active')) {
                    $(".menu-hover--submenu").removeClass('active');
                    TweenMax.set('.primary--menu--children', {autoAlpha:0,height:0, ease:Power1.easeInOut});

                } else {
                    $(this).addClass('active');
                    TweenMax.set('.primary--menu--children', {autoAlpha:0,height:0, ease:Power1.easeInOut});

                    var tlSubMenuMobile = new TimelineMax();
                        tlSubMenuMobile.fromTo(ul, 0.6, {height: '0', autoAlpha:0}, {autoAlpha:1, height: 'auto', ease:Power1.easeInOut}, 0)
                                        .staggerFrom(ul.find('li'), 0.4, {autoAlpha:0, y:'14', ease:Power1.easeInOut}, 0.2, 0);
                }



                e.preventDefault();
            }
        });

    }
}

export default Menu;
