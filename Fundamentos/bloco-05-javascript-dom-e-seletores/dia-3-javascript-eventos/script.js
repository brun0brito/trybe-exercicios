function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createDaysOfDecember () {
  const containerDays = document.getElementById('days');

  for (let index = 0; index < decemberDaysList.length; index += 1){
    let listItem = decemberDaysList[index];
    let daysList = document.createElement('li');
    daysList.innerText = listItem
    containerDays.appendChild(daysList);
    

    if (listItem === 24 || listItem === 31 ){
      daysList.className = 'day holiday';
      containerDays.appendChild(daysList);

    } else if (listItem === 25){
      daysList.className = 'day holiday friday';
      containerDays.appendChild(daysList);

    } else if (listItem === 4 || listItem === 11 || listItem === 18){
      daysList.className = 'day friday';
      containerDays.appendChild(daysList);
    } else {
      daysList.className = 'day';
      containerDays.appendChild(daysList);
    }
  } 
}
createDaysOfDecember();


function createButtonHoliday(buttonName){
  const buttonContainer = document.querySelector('.buttons-container');
  let holiday = document.createElement('button');
  let buttonId = 'btn-holiday'

  holiday.innerText = buttonName;
  holiday.id = buttonId;
  
  buttonContainer.appendChild(holiday);

}
createButtonHoliday('Feraidos');

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  });
}
displayHolidays();

function createButtonFriday(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let buttonFriday = document.createElement('button');
  let buttonFridayId = 'btn-friday';

  buttonFriday.innerText = buttonName;
  buttonFriday.id = buttonFridayId;

  buttonContainer.appendChild(buttonFriday);
}
createButtonFriday('Sexta-feira');


function displayFriday(arrfriday){
  let getFridayButton = document.querySelector('#btn-friday');
  let getFriday = document.getElementsByClassName('friday');
  let fridayText = 'SEXTOU';

 getFridayButton.addEventListener('click', function(){
  for (let index = 0; index < getFriday.length; index += 1) {
    if (getFriday[index].innerText !== fridayText ){
      getFriday[index].innerHTML = fridayText;
    } else {
      getFriday[index].innerHTML = arrfriday[index];
    }
  }
 })
}
let decemberFridays = [4, 11, 18, 25];
displayFriday(decemberFridays);

function mouseOver(){
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '40px';
    event.target.style.fontWeight = '800';

  });
}

function mouseOut(){
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';

  });
}

mouseOver();
mouseOut();

function tasksSpan(str) {
  let myTasks = document.querySelector('.my-tasks');
  let addTasks = document.createElement('span');
  let tasksText = str;

  addTasks.innerHTML = tasksText;
  myTasks.appendChild(addTasks);
}
tasksSpan('Cozinhar');

function subtitleColorTask(color){
  let myTasks = document.querySelector('.my-tasks');
  let divTasks = document.createElement('div');
  let tasksColor = color;

  divTasks.className = 'task'
  divTasks.style.backgroundColor = tasksColor;
  myTasks.appendChild(divTasks);
}

subtitleColorTask('green');

function taskClass(){
  let selectedtask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedtask.length === 0){
      event.target.className = 'task selected';
    }else {
      event.target.className = 'task'
    }
  });
}
 
taskClass();