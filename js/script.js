jQuery(function () {
        'use strict';
        /*===========================================
        Banner Slider Part Start
        ===========================================*/

        $('.banner_slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
                speed: 1500,
                arrows: true,
                prevArrow: '<i class="fas fa-chevron-left slider_arrow_lef"></i>',
                nextArrow: '<i class="fas fa-chevron-right slider_arrow_rig"></i>',
        });

        /*===========================================
                Banner Slider Part End
        ===========================================*/


        /*===========================================
                Countdown Part Start
        ===========================================*/


        $('.count_down').countdown('2022/01/01', function (event) {
                $(this).html(event.strftime('%D Days, %H:%M:%S'));
        });


        /*===========================================
                Countdown Part End
        ===========================================*/



        /*===========================================
                Size Btn Start
        ===========================================*/
        $('.zoom_extra_large').on('click', function () {
                $('.price1').slideToggle(400);
        });

        $('.zoom_large').on('click', function () {
                $('.price2').slideToggle(400);
        });

        $('.zoom_medium').on('click', function () {
                $('.price3').slideToggle(400);
        });

        $('.zoom_smal').on('click', function () {
                $('.price4').slideToggle(400);
        });





        $('button').on('click', function () {
                $('.size_button').addClass('.active');
        });
        /*===========================================
                Size Btn End
        ===========================================*/


        /*===========================================
                Card add Btn Start
        ===========================================*/

        $('#handleCounter').handleCounter({
                minimum: 1,
                maximize: null,
        })

        /*===========================================
                Card add Btn End
        ===========================================*/



        /*===========================================
                Daily Offer Left Slider Start
        ===========================================*/
        $('.zoom_part_left_all_container').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                nextArrow:'<i class="fas fa-angle-right zoom_arrow_left_right"></i>',
                prevArrow:'<i class="fas fa-angle-left zoom_arrow_left_left"></i>',
        });


        /*===========================================
                Daily Offer Left Slider End
        ===========================================*/


        /*===========================================
                Daily Offer Right Slider Start
        ===========================================*/

        $('.zoom_part_right_all_container').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed:3000,
                speed: 1500,
                nextArrow:'<i class="fas fa-angle-right zoom_arrow_left_right"></i>',
                prevArrow:'<i class="fas fa-angle-left zoom_arrow_left_left"></i>',
        });

        /*===========================================
                Daily Offer Right Slider End
        ===========================================*/





});