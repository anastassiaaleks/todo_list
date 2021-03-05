const todoInput=document.querySelector('.todo-input')
const todoButton=document.querySelector('.todo-button')
const todoList=document.querySelector('.todo-list')
const todoClear=document.querySelector('.clear-btn')

todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
todoClear.addEventListener('click', clearAll)

function addTodo(event) {
    event.preventDefault()
    const todoDiv=document.createElement('div')
    todoDiv.classList.add('todo')
    const newTodo=document.createElement('li')

    if(todoInput.value!==''){
        newTodo.innerHTML=todoInput.value
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo)

        const completedButtom=document.createElement('button')
        completedButtom.innerHTML='<i class="fas fa-check"></i>'
        completedButtom.classList.add('complete-btn')
        todoDiv.appendChild(completedButtom)

        const trashButtom=document.createElement('button')
        trashButtom.innerHTML='<i class="fas fa-trash"></i>'
        trashButtom.classList.add('trash-btn')
        todoDiv.appendChild(trashButtom)

        todoList.appendChild(todoDiv)

        todoInput.value=''
    }
    
   
}

function deleteCheck(e){
    const item=e.target
    if(item.classList[0]==='trash-btn'){
        const todo=item.parentElement
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function(){
            todo.remove()
        })
    }

    if(item.classList[0]==='complete-btn'){
        const todo=item.parentElement
        todo.classList.toggle('completed')
    }
}

function clearAll(){
    todoList.innerHTML=''
}