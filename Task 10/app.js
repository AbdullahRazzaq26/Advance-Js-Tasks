var studentId = document.getElementById("id");
var studentName = document.getElementById("name");
var studentEmail = document.getElementById("email");
var button = document.getElementById("add");
var tableDiv = document.getElementById("table");
var male = document.getElementById("male");
var female = document.getElementById("female");
var checkboxes = document.querySelectorAll("input[type='checkbox']");
var studentDetails = [];
var table = document.createElement("table");
tableDiv.appendChild(table);
table.innerHTML = `<thead><tr><th>Id</th><th>Gender</th><th>Name</th><th>Email</th><th>Courses</th></tr></thead>`;
table.style.display = "none";

function add() {
    var gender;

    if (male.checked) {
        gender = "Male";
    } else if (female.checked) {
        gender = "Female";
    } else {
        gender = "Not specified";
    }

    var checkedValues = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkedValues.push(checkboxes[i].value);
        }
    }

    if (studentName.value === "" || studentEmail.value === "" || studentId.value === "" || gender === "" || checkedValues.length === 0) {
        alert("Fill All The Fields");
    } else {
        var newStudent = {
            Name: studentName.value,
            Email: studentEmail.value,
            Id: studentId.value,
            Gender: gender,
            Courses: checkedValues.join(" , ") 
        };

        studentDetails.push(newStudent);
        console.log(studentDetails);

        table.style.display = "block";
        table.innerHTML += `<tbody><tr><td>${newStudent.Id}</td><td>${newStudent.Gender}</td><td>${newStudent.Name}</td><td>${newStudent.Email}</td><td>${newStudent.Courses}</td></tr></tbody>`;
    }
}
