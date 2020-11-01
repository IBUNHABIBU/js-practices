// select the element 
const clear = document.querySelector('.clear');
const dateElement = document.getElementById('date');
const list = document.getElementById('list');
const inpute = document.querySelector('inpute');

const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-check-thin';
const LINE_THROUGH = "line-through";

const today = new Date();
const options = { weekday: "long", month: "short", day: "numeric" }
dateElement.innerHTML = today.toLocaleString("en-us", options);

function addToDo(toDo){
  const item = `
  <li class="item">
           <i class="fa fa-circle co" job="complete" id ="0"></i>
          <p class="completed">${toDo}</p>
          <i class="fa fa-trash de"></i> 
        </li>
  `;
  const position = "beforeend";
  list.insertAdjacentHTML(position, item);
  
}
document.addEventListener('keyup', function(event){
  if(event.keyCode  == 13){
    const toDo = input.value;
    if(toDo){
      addToDo(toDo);
    }
    input.value = '';
  }
})
