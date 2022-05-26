const calendarContainer = $(".container");
const today = moment().format('dddd, MMMM Do'); // assign today's date to a variable
const now = moment().format('h.mmss A'); // the current time

$("#currentDay").text(today); // Assign today's date to the currentDay ID


function addTimeBlocks () {
    const workdayHours = ['7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
    
    // Add hourBlock divs the the page based off of the workdayHours array
    for (let i = 0; i < workdayHours.length; i++) {
        let timeTag = '<div class="input-group-prepend"><span class="input-group-text bg-light" id="inputGroup-sizing-lg">' + workdayHours[i] + '</span></div>';
        let inputText = "<input type='text' class='form-control events' placeholder='Todo' aria-label='todo' aria-describedby='button-addon2'>";
        let saveButton = '<div class="input-group-append"><button class="btn btn-outline-secondary bg-info button-color" type="button" id="button-addon2">Save</button></div>';
        let hourBlock = '<div class="input-group input-group-lg d-flex bd-highlight bg-gradient-info">' + timeTag + inputText + saveButton + '</div>';
        
        calendarContainer.append(hourBlock);
        
    }
}

addTimeBlocks();

const hourTag = $(".input-group-text"); // Select all timeTag elements
const updateBlock = $(".events"); // Select add calendar event blocks

function colorEvents() {

    for (let i = 0; i < hourTag.length; i++) {
        // extract the time value from the hourTag HTML element and assign to a variable
        let timeString = hourTag[i].innerHTML.split(" ");
        let eventTime = parseInt(timeString[0]); // The time value from HTML element as an int
        
        // extract the hour from the current time string and assign to a variable
        let currentTimeStr = now.split(" ");
        let currentTime =  parseFloat(currentTimeStr[0]); // Full current time as a float
        let currentHrStr = currentTimeStr[0].split("."); 
        let currentHour = parseInt(currentHrStr[0]); // The hour of the current time as an int
        
        // Add class styling to event block depending on past, present, future time 
        if ((currentTime > eventTime) && (currentTimeStr[1] === timeString[1]) && (currentHour === eventTime)) {
            updateBlock.eq(i).addClass('current-hour');
        } else if ((currentTime > eventTime) && (currentTimeStr[1] === timeString[1]) && (currentHour != eventTime)) {
            updateBlock.eq(i).addClass('hour-passed');
        } else {
            updateBlock.eq(i).addClass('future-hour');
        }
    }
}
colorEvents();