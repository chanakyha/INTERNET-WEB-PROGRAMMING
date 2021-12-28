function addPage(thePage) {
    
    document.getElementById("main-container").innerHTML = "";

    $("#main-container").load(thePage+".html");
    

}