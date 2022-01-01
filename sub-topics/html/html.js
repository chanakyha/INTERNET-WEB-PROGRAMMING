function addPage(thePage) {
    document.getElementById("main-container").innerHTML = "";

    $("#main-container").load(thePage + ".html");
    document.title = "HTML | " + (thePage.toUpperCase().replaceAll("-"," "));

    window.scrollTo(0,document.body.scrollHeight);
}


document.getElementById("go-up").onclick = function() {
    window.scrollTo(0,0);
};