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
let currentHour = parseInt(moment().format('H'));
// console.log(currentHour);

// console.log(Array.from(info));
// targets each row and checks their assignment against the current time to see what style they should use
Array.from(info).forEach(row => {
  let rowId = row.id
  // console.log(row.id);
//   If the infoString contains a valid integer, it executes below to retrieve an integer value for each row to then check against in the below if statements
  if (rowId) {
    rowHour = parseInt(rowId);
    console.log(rowId);

  // Add function to compare current time to the hour-block sections to assign colors
    // Compares row id to current hour and sets color accordingly
    // If the current hour is the same hour as the row, that row will be styled red
    if (currentHour > rowHour) {
      $(".information").addClass("past");
    } 
    // Else, if the current time is less than or "before" the row hour, it styles it green
    else if (currentHour < rowHour) {
        $(".information").addClass("future");
    } 
    // Else, it'll check to see if the current hour is greater than the row hour, if so it'll style it grey
    else {
        $(".information").addClass("present");
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
$("#16 .information").val(localStorage.getItem("16"))
$("#17 .information").val(localStorage.getItem("17"))



// for (let i = 9; i <18; i++){
//   element = document.getElementById(`$[i]`)
//   i < currentHour ?? element.addClass("past");
//   i > currentHour ?? element.addClass("future");
//   element.addClass("present");

// }