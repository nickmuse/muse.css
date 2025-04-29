function openTab(evt, contentId) {
    var _tabcontent = document.getElementsByClassName("tab_content");
    for (var i = 0; i < _tabcontent.length; i++) {
        _tabcontent[i].style.display = "none";
    }
    var _tablinks = document.getElementsByClassName("tab_link");
    for (var i = 0; i < _tablinks.length; i++) {
      _tablinks[i].className = _tablinks[i].className.replace(" active", "");
    }
    document.getElementById(contentId).style.display = "block";
    evt.currentTarget.className += " active";
}
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.tab_link').click(); // simulate a click on the first tab
});