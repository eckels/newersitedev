var postWidth = 900;

$(document).ready(function() {
    postCounter = 0;
    if (postWidth < $(window).width()) {
        $(".work-item-wrapper").each(function() {
            postCounter++;
            if (postCounter % 3 == 1) {
                $(this).css('margin-left', '0');
                
            } else if (postCounter % 3 == 0) {
                $(this).css('margin-right', '0');
                
            }
        });
        if (postCounter % 3 != 0) {
            if (postCounter % 3 == 1) {
                $('#work-item-sleeve-target').append('<div class="post-fill"></div>');
                $('#work-item-sleeve-target').append('<div class="post-fill"></div>');
            } else if (postCounter % 3 == 2) {
                $('#work-item-sleeve-target').append('<div class="post-fill"></div>');
            }
        }
    } else {
        $(".work-item-wrapper").each(function() {
            $(this).css('margin-right', '');
            $(this).css('margin-left', '');
        });
    }
});

$(window).resize(function() {
    postCounter = 0;
    if (postWidth < $(window).width()) {
        $(".work-item-wrapper").each(function() {
            postCounter++;
            if (postCounter % 3 == 1) {
                $(this).css('margin-left', '0');
                
            } else if (postCounter % 3 == 0) {
                $(this).css('margin-right', '0');
                
            }
        });
        if (postCounter % 3 != 0) {
            if (postCounter % 3 == 1) {
                $('#work-item-sleeve-target').append('<div class="post-fill"></div>');
                $('#work-item-sleeve-target').append('<div class="post-fill"></div>');
            } else if (postCounter % 3 == 2) {
                $('#work-item-sleeve-target').append('<div class="post-fill"></div>');
            }
        }
    } else {
        $(".work-item-wrapper").each(function() {
            $(this).css('margin-right', '');
            $(this).css('margin-left', '');
        });
    }
});