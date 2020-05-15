if (document.documentElement.getAttribute('data-theme') === "dark") {
    setDarkItems();
    document.getElementById('darkmode-slider').checked = true;
} else {
    setLightItems();
}