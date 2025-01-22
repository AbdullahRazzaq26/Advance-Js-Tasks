function create() {
    var input = document.getElementById("name")
    var input2 = document.getElementById("description")
    var description = input2.value
    console.log(description);
    var name = input.value
    var cards = document.getElementById("cards")
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)
    var color = "rgb(" + r + "," + g + "," + b + ")"

    console.log(cards);



    var card = document.createElement("div")
    card.className = "card"
    card.innerHTML = "<button>X</button><h1>" + name + "</h1> <p>" + description + "</p>"
    card.style.backgroundColor = color
    cards.appendChild(card)
    // input.value = "";
    // input2.value = "";

    var closeButton = card.querySelector("button");
    closeButton.addEventListener("click", function () {
        card.remove();
    });




}