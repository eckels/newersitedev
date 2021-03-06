var currTime = new Date();
var currHour = currTime.getHours();

var lastUpdated = localStorage.getItem('evane_site_last_updated');
var currSiteMode = localStorage.getItem('evane_site_mode');

if (lastUpdated === null || currSiteMode === null) {
    hourDiff = 100;
} else {
    var lastUpdatedObj = new Date(lastUpdated);
    var hourDiff = Math.abs(currTime - lastUpdated) / 36e5;
}

if (hourDiff >= 6) {
    if (currHour >= 20 || currHour < 6) {
        setDark(currTime, false);
    }
    
    if (currHour < 20 && currHour >= 6) {
        setLight(currTime, false);
    }
} else {
    if (currSiteMode === 'dark') {
        setDark(currTime, false);
    } else {
        setLight(currTime, false);
    }
}

function changeTheme() {
    var curr_time = new Date();
    var darkmode = document.getElementById('darkmode-slider').checked;
    if (darkmode) {
        setDark(curr_time, true);
    } else {
        setLight(curr_time, true);
    }
}

function setLight(time, meta) {
    localStorage.setItem('evane_site_mode', 'light');
    document.documentElement.removeAttribute('data-theme');
    setLightItems();
    if (meta) {
        document.getElementById('darkmode-slider').checked = false;
        localStorage.setItem('evane_site_last_updated', time);
    }
}

function setDark(time, meta) {
    localStorage.setItem('evane_site_mode', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    setDarkItems();
    if (meta) {
        document.getElementById('darkmode-slider').checked = true;
        localStorage.setItem('evane_site_last_updated', time);
    }
}

function showDarkModeItems() {
    var items = document.getElementsByClassName('dark-mode');
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = "";
    }
}

function hideDarkModeItems() {
    var items = document.getElementsByClassName('dark-mode');
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }
}

function showLightModeItems() {
    var items = document.getElementsByClassName('light-mode');
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = "";
    }
}

function hideLightModeItems() {
    var items = document.getElementsByClassName('light-mode');
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }
}

function setDarkItems() {
    hideLightModeItems();
    showDarkModeItems();
}

function setLightItems() {
    hideDarkModeItems();
    showLightModeItems();
}