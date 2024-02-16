function changeView(view) {
    var i;
    var currentViews = document.getElementsByClassName("view")
    for (i = 0; i <currentViews.length; i++) {
        currentViews[i].style.display = "none";
    }
    document.getElementById(view).style.display = "block";
}