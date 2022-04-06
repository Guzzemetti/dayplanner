// Sets the date and time
var time = document.querySelector("#timeNow");
var timeNow = moment().format("dddd, MMMM Do YYYY h:mm:ss a")
time.textContent = timeNow;
var update = function(){
    time.innerHTML = moment().format("dddd, MMMM Do YYYY [at] h:mm:ss a")
}
setInterval(update, 1000);
// -----------------------------
