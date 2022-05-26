const calendarContainer = $(".container");
const today = moment().format('dddd, MMMM Do');
const currentTime = moment().format('h.mm.ss A');

$("#currentDay").text(today);


function addTimeBlocks () {
    const workdayHours = ['7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
    for (let i = 0; i < workdayHours.length; i++) {
        let timeTag = '<div class="input-group-prepend"><span class="input-group-text bg-light" id="inputGroup-sizing-lg">' + workdayHours[i] + '</span></div>';
        let inputText = "<input type='text' class='form-control events' placeholder='Todo' aria-label='todo' aria-describedby='button-addon2'>";
        let saveButton = '<div class="input-group-append"><button class="btn btn-outline-secondary bg-success" type="button" id="button-addon2">Button</button></div>';
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
        if ((parseFloat(currentTimeStr[0]) > parseInt(timeString[0])) && (currentTimeStr[1] === timeString[1])) {

        updateBlock.eq(i).addClass('current-hour');
        }
        // if ((parseFloat(currentTimeStr[0]) > parseInt(timeString[0])) && (currentTimeStr[1] === timeString[1])) {
        //     updateBlock[i].addClass('current-hour');
        // }
        // // console.log(hourTag[i].textContent);
        // else if (parseFloat(currentTimeStr[0]) > parseInt(timeString[0])){
        //     updateBlock[i].addClass('hour-passed');
        // } else {
        //     updateBlock[i].addClass('future-hour');
        // }

    }
}
colorEvents();