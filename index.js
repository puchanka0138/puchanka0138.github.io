$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
  $('.example-popover').popover({
    container: 'body'
  })
  })

let switchMode = $("#SwitchMode");
switchMode.click(function switchTheme(){
  let theme = $("#theme")

  if(theme.attr("href") == "style.css") {
  theme.attr("href") = "darkStyle.css"
}
})

$("#input0").keypress(function yes() {
  $("#input0").css("background-color", "#e1f5c1")
})

$("#input1").keypress(function yes() {
  $("#input1").css("background-color", "#e1f5c1")
})

$("#input2").keypress(function yes() {
  $("#input2").css("background-color", "#e1f5c1")
})

$("#input3").keypress(function yes() {
  $("#input3").css("background-color", "#e1f5c1")
})

$("#input").keypress(function yes() {
  $("#input").css("background-color", "#e1f5c1")
})


$("#submit").click(function() {
  var error = new Audio("sounds/mistake.mp3")
  error.play()
})


var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
