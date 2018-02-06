document.addEventListener('DOMContentLoaded', () => {
  console.log("The DOM content has loaded");

  document.getElementById('create-list-form').addEventListener('submit', createList)
  document.getElementById('create-task-form').addEventListener('submit', createTask)

});

function deleteList(e){
  const listElement = document.getElementById(`list${e.dataset.id}`)
  listElement.remove()

  const optionElement = document.getElementById(`option${e.dataset.id}`)
  optionElement.remove()
}

function createList(e) {
  e.preventDefault()
  const listTitle = document.getElementById('new-list-title').value
  const newList = new List(listTitle)

  const listDiv = document.createElement('div')
  listDiv.className = 'list'
  listDiv.id = "list" + newList.id
  listDiv.innerHTML = `<h2><button data-id="${newList.id}" class="delete-list" onclick="deleteList(this)" >X</button>${newList.title}</h2><ul></ul>`
  document.getElementById('lists').append(listDiv)
  document.getElementById('new-list-title').value = ""

  const parentList = document.getElementById('parent-list')
  const selectElement = document.createElement("option")
  selectElement.id = "option" + newList.id
  selectElement.setAttribute('data-id', `${newList.id}`)
  selectElement.textContent = newList.title
  parentList.append(selectElement)
}

function createTask(e){
  e.preventDefault()

  const taskDesc = document.getElementById('new-task-description').value
  const taskPriority = document.getElementById('new-task-priority').value

  const optionsIndex = document.getElementById('parent-list').options.selectedIndex
  const listId = document.getElementById('parent-list').options[optionsIndex].attributes[1].value

  const newTask = document.createElement('li')
  newTask.innerHTML = `Task: ${taskDesc}</br>Priority: ${taskPriority}`

  const list = document.getElementById(`list${listId}`)
  list.append(newTask)
}
