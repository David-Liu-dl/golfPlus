/**
 * Created by yuhaoliu on 8/10/2016.
 */
$(function () {
    $('.carousel').carousel();

    $('ul.navbar-nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    })

    var $myCarousel = $('#carousel-example-generic');

// Initialize carousel
    $myCarousel.carousel();

    function doAnimations(elems) {
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function () {

            var $this = $(this),
                $animationType = $this.data('animation');

            // Add animate.css classes to
            // the elements to be animated
            // Remove animate.css classes
            // once the animation event has ended
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }

// Select the elements to be animated
// in the first slide on page load
    var $firstAnimatingElems = $myCarousel.find('.item:first')
        .find('[data-animation ^= "animated"]');

// Apply the animation using our function
    doAnimations($firstAnimatingElems);

// Pause the carousel
    $myCarousel.carousel('pause');

// Attach our doAnimations() function to the
// carousel's slide.bs.carousel event
    $myCarousel.on('slide.bs.carousel', function (e) {
        // Select the elements to be animated inside the active slide
        var $animatingElems = $(e.relatedTarget)
            .find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });

})
