function addPage(thePage) {
    document.getElementById("main-container").innerHTML = "";

    $("#main-container").load(thePage + ".html");

    window.scrollTo(0,document.body.scrollHeight + 1200);
}


document.getElementById("go-up").onclick = function() {
    window.scrollTo(0,0);
};