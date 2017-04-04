$(document).ready(function () {
    $('.myFirst').owlCarousel({
        loop: true,
        nav: true,
        items: 5,
        margin: 30,
        dots: false,
        navText: ["<span class='icon-left'></span>", "<span class='icon-right'></span>"], /*поменять иконки с лева на право*/
        slideBy: 3,
    });
    var owl = $('.carouselEvents');
    owl.owlCarousel({
        margin: 10,

    })
    owl.on("changed.owl.carousel", function (event) {
        console.log("что то произошло");
    });
    $(".left").click(function(){
        console.log("лево");
        owl.trigger("prev.owl.carousel")
    })
    $(".right").click(function(){
        console.log("право")
        owl.trigger("next.owl.carousel")
    })
    $( "#tabs" ).tabs();
    $( "#number" )
        .selectmenu()
        .selectmenu( "menuWidget" )
        .addClass( "overflow" );
    $( function() {
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 1000,
            values: [ 75, 300 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
            " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    } );
});
