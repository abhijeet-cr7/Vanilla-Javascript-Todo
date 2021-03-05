document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
function handleSubmitForm(e){
    e.preventDefault();
    let input = document.querySelector('input');
    if(input.value != '')
    {
        addTodo(input.value);
        input.value = '';
    }  
}
function handleClickDeleteOrCheck(e)
{
    if(e.target.name == 'checkButton')
    checkTodo(e);

    if(e.target.name=='deleteButton')
    deleteTodo(e);
}
function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<span class="todo-item"><b><i>${todo}</i></b></span>
                    <button name="checkButton" class="check-style"><i class="fas fa-check-square fa-xs"></i></button>
                    <button name="deleteButton" class="delete-style"><i class="fas fa-trash fa-xs"></i></button>`
    li.classList.add('todo-list-item');
    ul.appendChild(li);
                }
            
function checkTodo(e){
    let item = e.target.parentNode;
    // console.log(e.target.parentNode);y 
    if(item.style.textDecoration == 'line-through')
    item.style.textDecoration = 'none';
    else
    item.style.textDecoration = 'line-through';
}
function deleteTodo(e){
    let item = e.target.parentNode;
    item.remove();
}                