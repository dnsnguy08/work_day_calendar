// Select all required elements and assign to variables
const calendarContainer = $(".container");
const today = moment().format('dddd, MMMM Do'); // assign today's date to a variable
const now = moment().format('h.mmss A'); // the current time
const saveBtn = $(".btn");
const inputText = $(".form-control");

$("#currentDay").text(today); // Assign today's date to the currentDay ID

// Function for adding time blocks to the calendar page
function addTimeBlocks () {
    const workdayHours = ['7-AM', '8-AM', '9-AM', '10-AM', '11-AM', '12-PM', '1-PM', '2-PM', '3-PM', '4-PM', '5-PM', '6-PM', '7-PM', '8-PM'];
    
    // Add hourBlock divs to the page based off of the workdayHours array
    for (let i = 0; i < workdayHours.length; i++) {
        let timeTag = '<div class="input-group-prepend"><span class="input-group-text bg-light">' + workdayHours[i] + '</span></div>';
        let inputText = "<textarea type='text' class='form-control events' id='w" + workdayHours[i] + "' placeholder='' aria-label='todo' aria-describedby='button-addon2'/>";
        let saveButton = '<div class="input-group-append"><button class="btn btn-outline-secondary bg-info button-color" type="button" id="button-addon2">Save</button></div>';
        let hourBlock = '<div class="input-group input-group-lg d-flex bd-highlight bg-gradient-info">' + timeTag + inputText + saveButton + '</div>';
        
        calendarContainer.append(hourBlock);
        
    }

}

addTimeBlocks();

const hourTag = $(".input-group-text"); // Select all timeTag elements
const updateBlock = $(".events"); // Select all calendar event blocks

// Function for updating the time block colors based on past, present, and future events
function colorEvents() {

    for (let i = 0; i < hourTag.length; i++) {
        // extract the time value from the hourTag HTML element and assign to a variable
        let timeString = hourTag[i].innerHTML.split("-");
        let eventTime = parseInt(timeString[0]); // The time value from HTML element as an int
        
        // extract the hour from the current time string and assign to a variable
        let currentTimeStr = now.split(" ");
        let currentTime =  parseFloat(currentTimeStr[0]); // Full current time as a float
        let currentHrStr = currentTimeStr[0].split("."); 
        let currentHour = parseInt(currentHrStr[0]); // The hour of the current time as an int
        
        // Add class styling to event block depending on past, present, future time
        if (currentHour >= 1 && (currentTime > eventTime) && (currentTimeStr[1] === timeString[1]) && (currentHour === eventTime)) {
            updateBlock.eq(i).addClass('current-hour');
            updateBlock.eq(i).attr("placeholder", "Current Hour");
        } else if (currentHour >= 1 && eventTime === 12 && currentTimeStr[1] === timeString[1]) {
            updateBlock.eq(i).addClass('hour-passed');
            updateBlock.eq(i).attr("placeholder", "Event has already happened");
        } else if (currentHour < eventTime && (currentTimeStr[1] === timeString[1])) {
            updateBlock.eq(i).addClass('future-hour');
        } else if (currentHour < eventTime && eventTime === 12 && (currentTimeStr[1] != timeString[1])) {
            updateBlock.eq(i).addClass('future-hour');
        } else if (currentHour > eventTime && (currentTimeStr[1] != timeString[1])) {
            updateBlock.eq(i).addClass('future-hour');
        } else {
            updateBlock.eq(i).addClass('hour-passed');
            updateBlock.eq(i).attr("placeholder", "Event has already happened");
        }
    }
}

colorEvents();

// Function for grabbing all values in localStorage and assigning to element IDs
function init() {
    $("#w7-AM").val(JSON.parse(localStorage.getItem("w7-AM")));

    $("#w8-AM").val(JSON.parse(localStorage.getItem("w8-AM")));
    
    $("#w9-AM").val(JSON.parse(localStorage.getItem("w9-AM")));
    
    $("#w10-AM").val(JSON.parse(localStorage.getItem("w10-AM")));
    
    $("#w11-AM").val(JSON.parse(localStorage.getItem("w11-AM")));
    
    $("#w12-PM").val(JSON.parse(localStorage.getItem("w12-PM")));
    
    $("#w1-PM").val(JSON.parse(localStorage.getItem("w1-PM")));
    
    $("#w2-PM").val(JSON.parse(localStorage.getItem("w2-PM")));
    
    $("#w3-PM").val(JSON.parse(localStorage.getItem("w3-PM")));
   
    $("#w4-PM").val(JSON.parse(localStorage.getItem("w4-PM")));
    
    $("#w5-PM").val(JSON.parse(localStorage.getItem("w5-PM")));
    
    $("#w6-PM").val(JSON.parse(localStorage.getItem("w6-PM")));
    
    $("#w7-PM").val(JSON.parse(localStorage.getItem("w7-PM")));
    
    $("#w8-PM").val(JSON.parse(localStorage.getItem("w8-PM")));
}

$(".btn").on("click", function(){ // Save input value upon clicking the `Save` button 
    let userInput = $(this).parent('.input-group-append').siblings(".form-control").val();
    let hourSpan = 'w' + $(this).parent('.input-group-append').siblings(".input-group-prepend").children('span').text()

    localStorage.setItem(hourSpan, JSON.stringify(userInput));
});

// Clear all calendar events when 'Clear Calendar' button is clicked
$("#clearCal").on("click", function(){
    localStorage.clear();
    init()
});

// Init the page with todos saved in localStorage
$(document).ready(function () {
    init();
});
