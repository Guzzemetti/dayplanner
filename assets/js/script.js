// Variables to select the hour block sections
var nine = document.querySelector("#hour-nine")
var ten = document.querySelector("#hour-ten")
var eleven = document.querySelector("#hour-eleven")
var twelve = document.querySelector("#hour-twelve")
var one = document.querySelector("#hour-one")
var two = document.querySelector("#hour-two")
var three = document.querySelector("#hour-three")
var four = document.querySelector("#hour-four")
var five = document.querySelector("#hour-five")
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
