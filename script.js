const calendarContainer =$(".container");
const today = moment().format('dddd, MMMM Do');
const hourEl = $(".input-group");
// , YYYY, h:mm:ss a');
$("#currentDay").text(today);

// $(".list-group-item").prepend('hello');

function addTimeBlocks () {
    const workdayHours = [7, 8, 9 ,10, 11, 12, 1, 2 ,3 ,4, 5, 6, 7, 8];
    for (let i = 0; i < workdayHours.length; i++) {
        let timeTag = '<div class="input-group-prepend"><span class="input-group-text bg-light" id="inputGroup-sizing-lg">Time</span></div>';
        let inputText = "<input type='text' class='form-control bg-info' placeholder='Recipient's username' aria-label='Recipient's username' aria-describedby='button-addon2'>";
        let saveButton = '<div class="input-group-append"><button class="btn btn-outline-secondary bg-success" type="button" id="button-addon2">Button</button></div>';
        let hourBlock = '<div class="input-group mb-3 input-group-lg d-flex p-2 bd-highlight bg-gradient-info">' + timeTag + inputText + saveButton + '</div>';
        
        calendarContainer.append(hourBlock);
        
    }
}

addTimeBlocks();
