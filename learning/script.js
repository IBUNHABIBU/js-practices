let tasker = {
  selectedElement: function (){
    this.taskInput = document.getElementById('input-task');
    this.taskList = document.getElementById('tasks');
    this.taskListChildren = this.taskList.children;
    this.addButton = document.getElementById('add-task-btn');
    this.errorMessage = document.getElementById('error');
  },
  buildTask: function(){
    let taskListItem, taskCheckBox, taskValue, taskButton, taskTrash;
    taskListItem = document.createElement('li');
    taskListItem.setAttribute('class', 'task');
    taskCheckBox = document.createElement('input');
    taskCheckBox.setAttribute('type','checkbox');
    taskValue = document.createTextNode(this.taskInput.value);
    taskButton = document.createElement('button');
    taskTrash = document.createElement('i');
    taskTrash.setAttribute('class','fa fa-trash');
    taskButton.appendChild(taskTrash);
    taskListItem.appendChild(taskCheckBox);
    taskListItem.appendChild(taskValue);
    taskListItem.appendChild(taskButton);
    this.taskList.appendChild(taskListItem);
  }, 
  error: function(){
    this.errorMessage.style.display = 'block';
  },
  addTask: function() {
    let taskValue = this.taskInput.value;
    this.errorMessage.style.display = 'none';
    if(taskValue === ''){
      this.error();
    } else {
      this.buildTask();
      this.taskInput.value = '';
    }
  }, 
  enterKey: function(e){
    if(e.keyCode === 13 ){
      this.addTask();
    }
  }
}