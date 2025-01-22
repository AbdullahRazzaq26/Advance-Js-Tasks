let input = document.getElementById("input")

function add() {

    
    let text = input.value
    let create = document.createElement("li")
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");



    editButton.textContent = "Edit";
    deleteButton.textContent = "Delete";
    create.textContent = text
    input.value = ""



    editButton.classList.add("button")
    deleteButton.classList.add("button")



    deleteButton.addEventListener("click", function() {
        create.remove();
        deleteButton.remove()
        editButton.remove()

    });



    editButton.addEventListener("click", function() {
        let newText = prompt("Edit the text:", create.textContent);
        if (newText) {
            create.textContent = newText;
        }
    });




    if (create.textContent == "") {
        alert("Enter Text")
    } else {
        document.getElementById("list").appendChild(create)
        document.getElementById("list").appendChild(editButton)
        document.getElementById("list").appendChild(deleteButton)
    }
}