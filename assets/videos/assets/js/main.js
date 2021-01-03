$(document).ready(function() {

    $('#toggleNav').on('click', function() {

        $('.nav').toggleClass('navShow');

        $(this).toggleClass('toggleNav');

    });

    $('.mainNavigationLink').on('click', () => {

        $('.nav').toggleClass('navShow');

        $("#toggleNav").toggleClass('toggleNav');

    });

    setTimeout(showMainRobotGuide, 500);

    // Udaljenost elemenata od vrha stranice

    let projectsHeading = $(".projects__heading").offset().top;

    let skillsHeading = $(".skills__heading").offset().top;

    let checkMeOutMainButton = $(".main__link").offset().top;

    //////

    $(window).on('scroll', function() {

        // Trenutna koordinata na stranici

        let scroll = $(window).scrollTop();


        if(scroll >= projectsHeading - 50) {

            $('.projects .robotGuide__robotTranslator').css({

                'animation' : 'translateRobotGuideRightSide 9s',
                'animation-delay' : '.1s',
                'animation-fill-mode' : 'forwards'

            });

            $('.projects .robotGuide__first-circle').css({

                'animation' : 'showCirclesAndMessageBoxes 2s',
                'animation-delay' : '.8s',
                'animation-fill-mode' : 'forwards'

            });

            $('.projects .robotGuide__second-circle').css({

                'animation' : 'showCirclesAndMessageBoxes 2s',
                'animation-delay' : '1.2s',
                'animation-fill-mode' : 'forwards'

            });

            $('.projects .robotGuide__message-box').css({

                'animation' : 'showCirclesAndMessageBoxes 2s',
                'animation-delay' : '1.6s',
                'animation-fill-mode' : 'forwards'

            });

            setTimeout(() => {

                $('.projects .robotGuide__message-box').hide();

            }, 5700);

            setTimeout(() => {

                $('.projects .robotGuide__second-circle').hide();

            }, 6000);

            setTimeout(() => {

                $('.projects .robotGuide__first-circle').hide();

            }, 6300);

        }

        if(scroll >= skillsHeading - 200){

            $("#htmlMoverAnimation").css('left', '0%');

        }

        if(scroll >= checkMeOutMainButton - 100){

            $(".main__link").addClass('main__link__hide');

            $("#goTop").css("right", "1.5%");

        }

        else{

            $(".main__link").removeClass('main__link__hide');

            $("#goTop").css("right", "-20%");

        }

    });

});


function showMainRobotGuide() {

    $('.main .robotGuide__robotTranslator').css({

        'animation' : 'translateRobotGuideLeftSide 9s',
        'animation-delay' : '.1s',
        'animation-fill-mode' : 'forwards'

    });

    $('.main .robotGuide__first-circle').css({

        'animation' : 'showCirclesAndMessageBoxes 2s',
        'animation-delay' : '.8s',
        'animation-fill-mode' : 'forwards'

    });

    $('.main .robotGuide__second-circle').css({

        'animation' : 'showCirclesAndMessageBoxes 2s',
        'animation-delay' : '1.2s',
        'animation-fill-mode' : 'forwards'

    });

    $('.main .robotGuide__message-box').css({

        'animation' : 'showCirclesAndMessageBoxes 2s',
        'animation-delay' : '1.6s',
        'animation-fill-mode' : 'forwards'

    });

    setTimeout(() => {

        $('.main .robotGuide__message-box').hide();

    }, 5700);

    setTimeout(() => {

        $('.main .robotGuide__second-circle').hide();

    }, 6000);

    setTimeout(() => {

        $('.main .robotGuide__first-circle').hide();

    }, 6300);

}