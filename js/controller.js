
function onInit() {
    renderTodos()
}

function renderTodos() {

    const todos = getTodosForDisplay()
    const strHTMLs = todos.map(todo => `
    <li class="${(todo.isDone) ? "done" : ""}"
         onclick="onToggleTodo('${todo.id}')">
         ${todo.txt}
        <button onclick="onRemoveTodo(event,'${todo.id}')">x</button> 
    </li>` )

    document.querySelector('.todo-list').innerHTML = strHTMLs.join('')

    document.querySelector('.total-todos').innerText = getTotalTodos()
    document.querySelector('.active-todos').innerText = getActiveTodos()
    document.querySelector('.done-todos').innerText = getDoneTodos()
}

function onAddTodo(ev) {
    ev.preventDefault()
    const elTxt = document.querySelector('input[name="todo-txt"]')
    const importance = document.querySelector('.importance').value
    const txt = elTxt.value
    if(!txt) return
    addTodo(txt, importance)
    elTxt.value = ''
    renderTodos()

}

function onRemoveTodo(ev, todoId) {
    ev.stopPropagation()
    if(!confirm()) return
    removeTodo(todoId)
    renderTodos()
}

function onToggleTodo(todoId) {
    toggleTodo(todoId)
    renderTodos()
}

function onSetFilter(filterBy) {
    setFilter(filterBy)
    renderTodos()
}

function onSort(sortBy){
    sort(sortBy)
    renderTodos()
}

