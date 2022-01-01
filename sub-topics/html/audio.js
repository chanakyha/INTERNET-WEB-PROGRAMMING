document.getElementById("load-page-1").onclick = function() {
    document.getElementById("card-1").innerHTML = `<h4>Example: Without Audio</h4>
        <img src="../../img//html/audio-2.png">
        <div class="card-body">
        <audio controls autoplay muted>
            <source src="horse.ogg" type="audio/ogg">
            <source src="https://www.w3schools.com/html/horse.ogg" type="audio/mpeg">
        </audio>
        </div>`;
}

document.getElementById("load-page-2").onclick = function() {
    
    document.getElementById("card-2").innerHTML = `<h4>Example: With Audio</h4>
    <img src="../../img//html/audio-1.png">
    <div class="card-body">
      <audio controls autoplay>
        <source src="horse.ogg" type="audio/ogg">
        <source src="https://www.w3schools.com/html/horse.ogg" type="audio/mpeg">
      </audio>
    </div>`;

}