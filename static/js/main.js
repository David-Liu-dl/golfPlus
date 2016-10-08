/**
 * Created by yuhaoliu on 8/10/2016.
 */
$(function () {
    headerMenuToggle();
    }
)

function headerMenuToggle() {
    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });
}
