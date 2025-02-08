var studentId = document.getElementById("id")
var studentName = document.getElementById("name")
var studentEmail = document.getElementById("email")
var button = document.getElementById("add")
var tableDiv = document.getElementById("table")
var studentDetails = []
var table = document.createElement("table")
tableDiv.appendChild(table)
table.innerHTML = `<thead><tr><th>Id</th><th>Name</th><th>Email</th></tr></thead>`
table.style.display = "none"
function add() {
    var newStudent = {
        Name: studentName.value,
        Email: studentEmail.value,
        Id: studentId.value,
    }
    studentDetails.push(newStudent)
    console.log(studentDetails);
    table.style.display = "block"
    table.innerHTML += `<tbody><tr><td>${newStudent.Id}</td><td>${newStudent.Name}</</td><td>${newStudent.Email}</td></tr></tbody>`
}