var postWidth = 900;

$(document).ready(function() {
    postCounter = 0;
    if (postWidth < $(window).width()) {
        $(".post-item-wrapper").each(function() {
            postCounter++;
            if (postCounter % 3 == 1) {
                $(this).css('margin-left', '0');
                
            } else if (postCounter % 3 == 0) {
                $(this).css('margin-right', '0');
                
            }
        });
        if (postCounter % 3 != 0) {
            if (postCounter % 3 == 1) {
                $('#post-item-sleeve-target').append('<div class="post-fill"></div>');
                $('#post-item-sleeve-target').append('<div class="post-fill"></div>');
            } else if (postCounter % 3 == 2) {
                $('#post-item-sleeve-target').append('<div class="post-fill"></div>');
            }
        }
    } else {
        $(".post-item-wrapper").each(function() {
            $(this).css('margin-right', '');
            $(this).css('margin-left', '');
        });
    }
});

$(window).resize(function() {
    postCounter = 0;
    if (postWidth < $(window).width()) {
        $(".post-item-wrapper").each(function() {
            postCounter++;
            if (postCounter % 3 == 1) {
                $(this).css('margin-left', '0');
                
            } else if (postCounter % 3 == 0) {
                $(this).css('margin-right', '0');
                
            }
        });
        if (postCounter % 3 != 0) {
            if (postCounter % 3 == 1) {
                $('#post-item-sleeve-target').append('<div class="post-fill"></div>');
                $('#post-item-sleeve-target').append('<div class="post-fill"></div>');
            } else if (postCounter % 3 == 2) {
                $('#post-item-sleeve-target').append('<div class="post-fill"></div>');
            }
        }
    } else {
        $(".post-item-wrapper").each(function() {
            $(this).css('margin-right', '');
            $(this).css('margin-left', '');
        });
    }
});