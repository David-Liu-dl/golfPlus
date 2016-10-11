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

    $('#btn-left').unbind("click").click(function () {
        moveToPrevious();
    });
    $('#btn-right').unbind("click").click(function () {
        moveToNext();
    });


    // check if video is loaded
    function checkVideoLoaded(){
        setTimeout(function () {
            if ( $('#bgvid').get(0).readyState === 4 ) {
                //start sliding
                recurse(0);
            }else {
                checkVideoLoaded();
            }
    },200)};

    checkVideoLoaded();

    function recurse(counter) {
        console.log(counter);
        // get the colour
        var duration = 10000;
        var item = items[counter];
        nowIndex = counter;
        // animate it
        $(item).addClass('active');

        if($(item).find('#bgvid').length){
            duration = $(item).find('#bgvid').get(0).duration;
            duration = duration * 1000;
        }
        // run it again for the next number
        timer = setTimeout(function() {
            // console.log(timer + " : old timer");
            $(item).removeClass("active");
            var nextIndex = nowIndex + 1;
            nextIndex = nextIndex > (items.length - 1)? 0 : nextIndex;
            recurse(nextIndex);
        }, duration);
        // start it for the first number.
    }

    function moveToNext() {
        if(timer){
            clearTimeout(timer);
            timer = null;
        }
        var nowItem = items[nowIndex];

        $(nowItem).removeClass("active");

        var nextIndex = nowIndex + 1;
        nextIndex = nextIndex > (items.length - 1)? 0 : nextIndex;

        recurse(nextIndex);
    }

    function moveToPrevious() {
        if(timer){
            clearTimeout(timer);
            timer = null;
        }
        var nowItem = items[nowIndex];
        $(nowItem).removeClass("active");

        var nextIndex = nowIndex - 1;
        nextIndex = nextIndex < 0 ? (items.length - 1) : nextIndex;

        recurse(nextIndex);
    }
})




