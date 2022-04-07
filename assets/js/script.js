// ------------------------------------------------------------
// Sets the date and time
var time = document.querySelector("#timeNow");
var timeNow = moment().format("dddd, MMMM Do YYYY h:mm:ss a")
time.textContent = timeNow;
var update = function(){
    time.innerHTML = moment().format("dddd, MMMM Do YYYY [at] h:mm:ss a")
}
setInterval(update, 1000);
// ------------------------------------------------------------

$(document).ready(function(){
    // When the save icon is clicked, it initiates the below to store the comments of a section into local storage
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".information").val()
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    })

// Selects elements with a class of row
const info = document.getElementsByClassName("row");
let currentHour = moment().format('H');
// console.log(currentHour);

Array.from(info).forEach(row => {
  let infoString = row.id
//   If the infoString contains a valid integer, it executes below to retrieve an integer value for each row to then check against in the below if statements
  if (infoString) {
    rowHour = parseInt(infoString);
    console.log(infoString);
  }

  // Add function to compare current time to the hour-block sections to assign colors
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    // If the current hour is the same hour as the row, that row will be styled red
    if (currentHour === rowHour) {
      $(".information").addClass("present");
    } 
    // Else, if the current time is less than or "before" the row hour, it styles it green
    else if ((currentHour < rowHour)) {
        $(".information").addClass("future");
    } 
    // Else, it'll check to see if the current hour is greater than the row hour, if so it'll style it grey
    else if ((currentHour > rowHour)) {
        $(".information").addClass("past");
    } 
  }
});
}) 

// Retrieves local storage information upon page reload
$("#9 .information").val(localStorage.getItem("9"))
$("#10 .information").val(localStorage.getItem("10"))
$("#11 .information").val(localStorage.getItem("11"))
$("#12 .information").val(localStorage.getItem("12"))
$("#13 .information").val(localStorage.getItem("13"))
$("#14 .information").val(localStorage.getItem("14"))
$("#15 .information").val(localStorage.getItem("15"))




