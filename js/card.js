var maxHeightWork = 0;
var maxHeightPost = 0;
var maxHeightNonprofit = 0;

var workWidth = 500;
var postWidth = 500;
var nonprofitWidth = 360;

$(document).ready(function() {
    $(".work-desc").each(function() {
        var temp = $(this).height();
        if (maxHeightWork < temp) {
            maxHeightWork = temp;
        }
    });
    if ($(window).width() > workWidth) {
        $('.work-desc').css('height', maxHeightWork);
    }
    $(".post-target").each(function() {
        var temp = $(this).height();
        if (maxHeightPost < temp) {
            maxHeightPost = temp;
        }
    });
    if ($(window).width() > postWidth) {
        $('.post-target').css('height', maxHeightPost);
    }
    $(".nonprofit-target").each(function() {
        var temp = $(this).height();
        if (maxHeightNonprofit < temp) {
            maxHeightNonprofit = temp;
        }
    });
    if ($(window).width() > nonprofitWidth) {
        $('.nonprofit-target').css('height', maxHeightNonprofit);
    }
    $(window).resize(function() {
        $('.work-desc').css('height', 'auto');
        $('.post-target').css('height', 'auto');
        $('.nonprofit-target').css('height', 'auto');
        $(".work-desc").each(function() {
            var temp = $(this).height();
            if (maxHeightWork < temp) {
                maxHeightWork = temp;
            }
        });
        if ($(window).width() > workWidth) {
            $('.work-desc').css('height', maxHeightWork);
        }
        $(".post-target").each(function() {
            var temp = $(this).height();
            if (maxHeightPost < temp) {
                maxHeightPost = temp;
            }
        });
        if ($(window).width() > postWidth) {
            $('.post-target').css('height', maxHeightPost);
        }
        $(".nonprofit-target").each(function() {
            var temp = $(this).height();
            if (maxHeightNonprofit < temp) {
                maxHeightNonprofit = temp;
            }
        });
        if ($(window).width() > nonprofitWidth) {
            $('.nonprofit-target').css('height', maxHeightNonprofit);
        }
    });
});

$(".work-desc").each(function() {
    var temp = $(this).height();
    if (maxHeightWork < temp) {
        maxHeightWork = temp;
    }
});
if ($(window).width() > workWidth) {
    $('.work-desc').css('height', maxHeightWork);
}

$(".post-target").each(function() {
    var temp = $(this).height();
    if (maxHeightPost < temp) {
        maxHeightPost = temp;
    }
});
if ($(window).width() > postWidth) {
    $('.post-target').css('height', maxHeightPost);
}

$(".nonprofit-target").each(function() {
    var temp = $(this).height();
    if (maxHeightNonprofit < temp) {
        maxHeightNonprofit = temp;
    }
});
if ($(window).width() > nonprofitWidth) {
    $('.nonprofit-target').css('height', maxHeightNonprofit);
}