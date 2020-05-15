var workWidth = 500;
var postWidth = 500;

function setWorkHeight() {
    var workItems = document.getElementsByClassName('work-desc');
    var workMaxHeight = workItems[0].offsetHeight;
    for (var i = 0; i < workItems.length; i++) {
        workItems[i].style.height = '';
        var currHeight = workItems[i].offsetHeight;
        if (workMaxHeight < currHeight) {
            workMaxHeight = currHeight;
        }
    }
    for (var i = 0; i < workItems.length; i++) {
        if (window.innerWidth > workWidth) {
            workItems[i].style.height = workMaxHeight + 'px';
        } else {
            workItems[i].style.height = 'auto';
        }
    }
}

function setPostHeight() {
    var postItems = document.getElementsByClassName('post-target');
    var postMaxHeight = postItems[0].offsetHeight;
    for (var i = 0; i < postItems.length; i++) {
        postItems[i].style.height = '';
        var currHeight = postItems[i].offsetHeight;
        if (postMaxHeight < currHeight) {
            postMaxHeight = currHeight;
        }        
    }
    for (var i = 0; i < postItems.length; i++) {
        if (window.innerWidth > postWidth) {
            postItems[i].style.height = postMaxHeight + 'px';
        } else {
            postItems[i].style.height = 'auto';
        }
    }
}

function setCardHeights() {
    setWorkHeight();
    setPostHeight();
}

window.addEventListener("resize", setCardHeights);

setCardHeights();