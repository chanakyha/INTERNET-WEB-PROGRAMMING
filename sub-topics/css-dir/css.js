function addPage(thePage) {
    document.title = "CSS | " + (thePage.toUpperCase().replaceAll("-"," "));

    document.getElementById(thePage.toUpperCase()).scrollIntoView();
}


document.getElementById("go-up").onclick = function() {
    window.scrollTo(0,0);
};