function uppercase() {
    var inputTxt = document.getElementById("inputText").value
    var outputTxt = document.getElementById("outputText")
    outputTxt.value = inputTxt.toUpperCase()
    console.log(outputTxt.value);
}
function lowercase() {
    var inputTxt = document.getElementById("inputText").value
    var outputTxt = document.getElementById("outputText")
    outputTxt.value = inputTxt.toLowerCase()
    console.log(outputTxt.value);
}
function changeColor() {
    var outputTxt = document.getElementById("outputText")
    var color = document.getElementById("colorPicker").value
    outputTxt.style.color = color
    console.log(color);
}