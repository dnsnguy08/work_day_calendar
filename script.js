const calendarContainer =$(".container");
const today = moment().format('dddd, MMMM Do');
const hourEl = $(".input-group");
// , YYYY, h:mm:ss a');
$("#currentDay").text(today);

// $(".list-group-item").prepend('hello');

function addTimeBlocks () {
    const workdayHours = ['7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
    for (let i = 0; i < workdayHours.length; i++) {
        let timeTag = '<div class="input-group-prepend"><span class="input-group-text bg-light" id="inputGroup-sizing-lg">' + workdayHours[i] + '</span></div>';
        let inputText = "<input type='text' class='form-control bg-info' placeholder='Recipient's username' aria-label='Recipient's username' aria-describedby='button-addon2'>";
        let saveButton = '<div class="input-group-append"><button class="btn btn-outline-secondary bg-success" type="button" id="button-addon2">Button</button></div>';
        let hourBlock = '<div class="input-group input-group-lg d-flex bd-highlight bg-gradient-info">' + timeTag + inputText + saveButton + '</div>';
        
        calendarContainer.append(hourBlock);
        
    }
}

addTimeBlocks();
