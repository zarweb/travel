jQuery(document).ready(function( $ ) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    new WOW().init();

    // $('.owl-carousel').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:false,
    //     dots:false,
    //     autoplay: true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
    //         1000:{
    //             items:5
    //         }
    //     }
    // });


    // $('select').selectpicker();

});
