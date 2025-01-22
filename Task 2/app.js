var display = document.getElementById("display")
var buttons = document.getElementsByClassName(".button")
function answer() {
  let equals = eval(display.value)
  display.value = equals;
}
function inputValue(input) {
  display.value += input
}
function clearInput() {
  display.value = ""
}
function backspace() {
  display.value = display.value.slice(0, -1)
}