/**
 * Created by yuhaoliu on 8/10/2016.
 */
$(function () {
    var items = $('.slide-item').toArray();

    (function recurse(counter) {
        // get the colour
        var item = items[counter];
        // animate it
        $(item).addClass('active');
        // delete the value to save memory
        console.log(item)
        // add the value at the end of the array

        // run it again for the next number
        setTimeout(function() {
            $(item).removeClass("active");
            console.log(item);

            delete items[counter];
            items.push(item);
            recurse(counter + 1);
        }, 5000);
// start it for the first number.
    })(0);


    $('ul.navbar-nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    })


})
