const calendarContainer = $(".container");
const today = moment().format('dddd, MMMM Do'); // assign today's date to a variable
const now = moment().format('h.mmss A'); // the current time
const saveBtn = $(".btn");
const inputText = $(".form-control");

const todos = [];

$("#currentDay").text(today); // Assign today's date to the currentDay ID

// Function for adding time blocks to the calendar page
function addTimeBlocks () {
    const workdayHours = ['7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
    
    // Add hourBlock divs to the page based off of the workdayHours array
    for (let i = 0; i < workdayHours.length; i++) {
        let timeTag = '<div class="input-group-prepend"><span class="input-group-text bg-light" id="inputGroup-sizing-lg">' + workdayHours[i] + '</span></div>';
        let inputText = "<input type='text' class='form-control events' placeholder='' aria-label='todo' aria-describedby='button-addon2'>";
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
        let timeString = hourTag[i].innerHTML.split(" ");
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
        } else {
            updateBlock.eq(i).addClass('hour-passed');
            updateBlock.eq(i).attr("placeholder", "Event has already happened");
        }
    }
}

colorEvents();


$(".btn").on("click", function(){
    let userInput = $(this).parent('.input-group-append').siblings(".form-control").val();
    todos.push(userInput);
    console.log(userInput);
    localStorage.setItem('todos', JSON.stringify(todos));
});

// function renderTodos() {
//     // Clear todoList element and update todoCountSpan
//     inputText.innerHTML = "";
//     todoCountSpan.textContent = todos.length;
  
//     // Render a new li for each todo
//     for (var i = 0; i < todos.length; i++) {
//       var todo = todos[i];
  
//       var li = document.createElement("li");
//       li.textContent = todo;
//       li.setAttribute("data-index", i);
  
//       var button = document.createElement("button");
//       button.textContent = "Complete ✔️";
  
//       li.appendChild(button);
//       todoList.appendChild(li);
//     }
//   }




















// $(document).on('click','.btn', function(event) {
//     event.preventDefault();
//     // console.log('wwwwww');
//     var todo = $(".form-control").val();
//     console.log(todo);
//     // var todo = {
//     //     hour: $(document).val(hourTag),
//     //     task: inputText.value
//     // };
//     // localStorage.setItem('todos', 'hey');

// });
