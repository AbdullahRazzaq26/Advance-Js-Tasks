var img1 = document.getElementById("img1")
var img2 = document.getElementById("img2")
var img3 = document.getElementById("img3")

var indexNumber = 1;


function next() {
    indexNumber = (indexNumber % 3) + 1;



    if (indexNumber === 1) {
        img1.style.display = "block";
        img2.style.display = "none";
        img3.style.display = "none";
    }

    else if (indexNumber === 2) {
        img1.style.display = "none";
        img2.style.display = "block";
        img3.style.display = "none";
    }
    else if (indexNumber === 3) {
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "block";
    }
    else if (indexNumber > 3) {
        indexNumber = 1;
    }

    console.log(indexNumber);
    
    }
    function previous() {
        indexNumber = indexNumber - 1;


        if (indexNumber === 1) {
            img1.style.display = "block";
            img2.style.display = "none";
            img3.style.display = "none";
        }
    
        else if (indexNumber === 2) {
            img1.style.display = "none";
            img2.style.display = "block";
            img3.style.display = "none";
        }
        else if (indexNumber === 3) {
            img1.style.display = "none";
            img2.style.display = "none";
            img3.style.display = "block";
        }
        else if (indexNumber < 1) {
            indexNumber = 3;
        }

    console.log(indexNumber);

    }