var arr = [
    "Ali", "Ahmed", "Areeba", "Ayan", "Amna",
    "Bilal", "Bushra", "Bakhtawar", "Basit", "Beenish",
    "Christopher", "Caroline", "Claire", "Caleb", "Chloe",
    "Daniyal", "Dua", "Danish", "Dania", "David",
    "Ehsan", "Emma", "Emily", "Elias", "Emaan",
    "Faizan", "Fatima", "Farah", "Fawad", "Fiza",
    "Ghulam", "Ghazala", "Gabriel", "Grace", "George",
    "Hamza", "Hania", "Hassan", "Hina", "Hoorain",
    "Ibrahim", "Iqra", "Irfan", "Imran", "Isla",
    "Junaid", "Javeria", "James", "Jasmine", "Jacob",
    "Kashif", "Komal", "Khadija", "Kevin", "Kiran",
    "Laila", "Laiba", "Liam", "Layla", "Leo",
    "Muneeb", "Maryam", "Mehreen", "Mansoor", "Maira",
    "Nimra", "Nida", "Noman", "Noor", "Nathan",
    "Omar", "Olivia", "Owais", "Oscar", "Opal",
    "Palwasha", "Peter", "Parveen", "Perry", "Paul",
    "Qasim", "Quratulain", "Qasim", "Quincy", "Qamar",
    "Rizwan", "Rania", "Rehan", "Rachel", "Rameen",
    "Saad", "Sara", "Sana", "Sufyan", "Sameer",
    "Tariq", "Tania", "Tahir", "Talia", "Thomas",
    "Umer", "Urooj", "Usman", "Uzma", "Umair",
    "Vicky", "Victor", "Victoria", "Violet", "Vince",
    "Waleed", "Warda", "Waqar", "Walter", "Wania",
    "Xander", "Xara", "Xenia", "Xavier", "Ximena",
    "Yasir", "Yusra", "Yusuf", "Yasmeen", "Yasir",
    "Zain", "Zara", "Zoha", "Zubair", "Zeeshan"
];


function findallNames() {
    var letter = document.getElementById("letterInput").value.toUpperCase();
    var result = ""; 

    if (letter === "") {
        result = "Please enter a letter.";
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][0].toUpperCase() === letter) {
                result += arr[i] + ", ";
            }
        }
    }

    document.getElementById("result").innerText = result;
}


function findNames() {
    var letter = document.getElementById("letterInput").value.toUpperCase();
    arr2 = []
    var random = Math.floor(Math.random() * 4);
    var name = ""; 

    if (letter === "") {
        result = "Please enter a letter.";
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][0].toUpperCase() === letter) {
                arr2.push(arr[i])
            }
        }

        console.log(arr2);
        console.log(random)
        name = arr2[random];
        console.log(name);
        
        
        
    }

    document.getElementById("result").innerText = name;
}