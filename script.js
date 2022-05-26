const calendarContainer = $(".container");
const today = moment().format('dddd, MMMM Do');
const currentTime = moment().format('h.mm.ss A');

$("#currentDay").text(today);


function addTimeBlocks () {
    const workdayHours = ['7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
    for (let i = 0; i < workdayHours.length; i++) {
        let timeTag = '<div class="input-group-prepend"><span class="input-group-text bg-light" id="inputGroup-sizing-lg">' + workdayHours[i] + '</span></div>';
        let inputText = "<input type='text' class='form-control events' placeholder='Todo' aria-label='todo' aria-describedby='button-addon2'>";
        let saveButton = '<div class="input-group-append"><button class="btn btn-outline-secondary bg-info button-color" type="button" id="button-addon2">Save</button></div>';
        let hourBlock = '<div class="input-group input-group-lg d-flex bd-highlight bg-gradient-info">' + timeTag + inputText + saveButton + '</div>';
        
        calendarContainer.append(hourBlock);
        
    }
}

addTimeBlocks();

const hourTag = $(".input-group-text");

const updateBlock = $(".events");
// console.log(updateBlock[0]);


function colorEvents() {

    for (let i = 0; i < hourTag.length; i++) {

        let timeString = hourTag[i].innerHTML.split(" ");
        let currentTimeStr = currentTime.split(" ");
        let currentHour = currentTimeStr[0].split(".");
        // console.log(currentHour[0]);
        if ((parseFloat(currentTimeStr[0]) > parseInt(timeString[0])) && (currentTimeStr[1] === timeString[1]) && (parseInt(currentHour[0]) === parseInt(timeString[0]))) {
            updateBlock.eq(i).addClass('current-hour');
        } else if (parseFloat(currentTimeStr[0]) > parseInt(timeString[0]) && (currentTimeStr[1] === timeString[1]) && (parseInt(currentHour[0]) != parseInt(timeString[0]))) {
            updateBlock.eq(i).addClass('hour-passed');
        } else {
            updateBlock.eq(i).addClass('future-hour');
        }
    }
}
colorEvents();