var imgs = document.getElementsByClassName("imgs")
var container = document.getElementById("container");


function popup() {

    var existingPopup = document.querySelector(".popup");
    if (existingPopup) {
        existingPopup.remove();
    }

    var imgs = event.target;
    var src = imgs.src;
    console.log(src);
    var popup = document.createElement("div")
    popup.className = "popup";
    popup.innerHTML = "<button>X</button> <h1>This Is The Image</h1><img src='" + src + "'></img>";
    document.body.appendChild(popup);

    var closeBtn = popup.querySelector("button");
    closeBtn.addEventListener("click", function(){
        popup.remove();
        });
}
