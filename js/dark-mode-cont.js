var stylesheet = document.getElementById('dark-stylesheet').rel;

if (stylesheet === 'stylesheet') {
    document.getElementById('darkmode-slider').checked = true;
}

document.body.style.transition = "background-color 0.25s, color 0.15s";