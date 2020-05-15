var postWidth = 900;

function setWorkFills() {
    var fills = document.getElementsByClassName('work-fill');
    while (fills[0]) {
        fills[0].parentNode.removeChild(fills[0]);
    }
    var postCount = 0;
    var postItem = document.getElementsByClassName('work-item-wrapper');
    for (var i = 0; i < postItem.length; i++) {
        postCount++;
        if (postWidth < window.innerWidth) {
            if (postCount % 3 == 1) {
                postItem[i].style.marginLeft = '0px';
            } else if (postCount % 3 == 0) {
                postItem[i].style.marginRight = '0px';
            }
        } else {
            postItem[i].style.marginLeft = '';
            postItem[i].style.marginRight = '';
        }
        if (postCount % 3 != 0) {
            let fill = document.createElement('div');
            fill.setAttribute('class', 'work-fill');
            if (postCount % 3 == 1) {
                document.getElementById('work-item-sleeve-target').appendChild(fill);
                document.getElementById('work-item-sleeve-target').appendChild(fill);
            } else if (postCount % 3 == 2) {
                document.getElementById('work-item-sleeve-target').appendChild(fill);
            }
        }
    }
}

window.addEventListener("resize", setWorkFills);

setWorkFills();