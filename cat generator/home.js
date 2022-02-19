function generateCat(){
    var image = document.createElement("img");
    var div = document.getElementById("flx")
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif"
    div.appendChild(image);
}