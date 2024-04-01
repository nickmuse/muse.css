var checkbox = document.querySelector("input[name=toggle_dark]");
checkbox.addEventListener(
    'change',
    function() {
        var element = document.body;
        if (this.checked) {
            localStorage.setItem('darkModeEnabled', true);
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            localStorage.setItem('darkModeEnabled', false);
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }
);
if (localStorage.getItem('darkModeEnabled') == 'true') {
    checkbox.checked = true;
    document.documentElement.setAttribute('data-theme', 'dark');
};