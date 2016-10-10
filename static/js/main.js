/**
 * Created by yuhaoliu on 8/10/2016.
 */
$(function () {
    var items = $('.slide-item').toArray();
    var timer;
    var nowIndex;

    $('ul.navbar-nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    })

    //start sliding
    recurse(0);

    function recurse(counter) {
        // get the colour
        var duration = 5000;
        var item = items[counter];
        nowIndex = counter;
        // animate it
        $(item).addClass('active');

        if($(item).find('#bgvid').length){
            duration = $(item).find('#bgvid').get(0).duration;
            alert(duration);
            duration = duration * 1000;
        }
        // run it again for the next number
        timer = setTimeout(function() {
            $(item).removeClass("active");
            delete items[counter];
            items.push(item);
            recurse(counter + 1);
        }, duration);
        // start it for the first number.
    }

    function moveToNext() {
        clearTimeout(timer);
        var nowItem = items[nowIndex];

        $(nowItem).removeClass("active");
        delete nowItem;
        items.push(nowItem);

        recurse(nowIndex + 1);
    }

    function moveToPrevious() {
        clearTimeout(timer);
        var nowItem = items[nowIndex];

        $(nowItem).removeClass("active");
        delete nowItem;
        items.push(nowItem);
        var new_index = (items.length - 2) < 0 ? (items.length - 2):0;
        recurse(new_index);
    }
})




