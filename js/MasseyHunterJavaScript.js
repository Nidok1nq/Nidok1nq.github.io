var currentView = "About";

function changeSidebar() {
    var i;
    var currentSidebars = document.getElementsByClassName("sidebar");
    for (i = 0; i <currentSidebars.length; i++) {
        currentSidebars[i].style.color = "rgb(218, 218, 218)";
    }
    document.getElementById(currentView + "Sidebar").style.color = "rgb(53, 120, 229)";
    console.log(currentView + "Sidebar");
}

function changeView(view) {
    var i;
    var currentViews = document.getElementsByClassName("view")
    for (i = 0; i <currentViews.length; i++) {
        currentViews[i].style.display = "none";
    }
    document.getElementById(view).style.display = "block";
    currentView = view;
    changeSidebar();
}

function openWebpage(form) {
    if (form == "lua") {
        window.open("https://www.lua.org/");
    }
    if (form == "roblox") {
        window.open("https://create.roblox.com/");
    }
    if (form == "prism") {
        window.open("https://prismjs.com/");
    }
}

changeSidebar();