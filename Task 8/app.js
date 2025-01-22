var email = document.getElementById("email")
var password = document.getElementById("password")

function login() {
    var isvalid = true



    if (email.value == "" || password.value == "") {
        alert("Please fill in all fields");
    }


    if (!email.value.includes("@")) {
        email.style.border = "3px solid red"
        isvalid = false
    } else {
        email.style.border = "3px solid green"
    }
    if (password.value.length < 8) {
        password.style.border = "3px solid red"
        isvalid = false

    } else {
        password.style.border = "3px solid green"
    }


    if (isvalid == true) {
        var popup = document.createElement("div")
        var loginForm = document.getElementById("form");
        popup.innerHTML = "<button>X</button><h1>LOGIN SUCCESSFUL!</h1>"

        popup.className= "popup"
        loginForm.appendChild(popup)

    }

    var closeButton = popup.querySelector("button");
    closeButton.addEventListener("click", function () {
        popup.remove();
    });


}
