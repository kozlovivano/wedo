$(document).ready(function(){
    $('#showMoreLess').on('click', function () {
        var text=$('#showMoreLess').text();
        if(text === "Montrer plus"){
            $(this).html('Montrer moins');
        } else{
            $(this).text('Montrer plus');
        }
    });
});

$(function(){
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 100,
        asNavFor: '#slider'
    });

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",
        start: function(slider){
            $('body').removeClass('loading');
        }
    });

    $(".custom-flex-nav-prev").click(function() {
        $(".flex-prev").click();
    });

    $(".custom-flex-nav-next").click(function() {
        $(".flex-next").click();
    });
});