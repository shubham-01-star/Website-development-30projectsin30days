const todoinput = document.getElementById('todoinput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');


addBtn.addEventListener('click',addTodo);

function addTodo(){
    const todoText = todoinput.value;
  
    const listItem = document.createElement('li');
    listItem.innerHTML = todoText;

    todoList.appendChild(listItem);
    todoinput.value = '';

   

}