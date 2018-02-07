document.addEventListener('DOMContentLoaded', () => {
  console.log("The DOM content has loaded");

  const createListForm = document.getElementById('create-list-form')
  const createTaskForm = document.getElementById('create-task-form')

  createListForm.addEventListener('submit',function(event){
    event.preventDefault();
    let listTitle = document.getElementById('new-list-title').value;
    let parentList = document.getElementById('parent-list')
    if(listTitle !== ''){
      let newList = new List(listTitle)
      let taskForm = document.getElementById('create-task-form')
      taskForm.style.display = "block"
      const opt = document.createElement('option')
      opt.setAttribute('value',listTitle)
      opt.setAttribute('list-id', newList.id)
      opt.innerText = listTitle
      parentList.append(opt)

      let newTaskDiv = document.createElement('div')
      let h2 = document.createElement('h2')
      let deleteButton = document.createElement('button')
      deleteButton.setAttribute('class','delete-list')
      deleteButton.innerText = 'X'
      h2.append(deleteButton)
      h2.append(listTitle)
      newTaskDiv.setAttribute('class', 'list')
      newTaskDiv.setAttribute('list-id', newList.id)
      newTaskDiv.append(h2)
      newTaskDiv.append(document.createElement('ul'))
      document.getElementById('lists').append(newTaskDiv)
      document.getElementById('lists')

      document.querySelectorAll('.delete-list').forEach(list=>list.addEventListener('click',function(el){
        document.querySelector(`option[list-id="${this.parentNode.parentNode.getAttribute('list-id')}"]`).remove()
    	  this.parentNode.parentNode.remove()
      }))

    }
  })

  createTaskForm.addEventListener('submit', function(event){
    event.preventDefault()
    let listTitle = document.getElementById('parent-list').value
    let taskDesc = document.getElementById('new-task-description').value
    let priority = document.getElementById('new-task-priority').value

    let selectOption = document.getElementById('parent-list').options.selectedIndex

    if (taskDesc !== '') {
      if (priority === '') {
        priority='low'
      }
      let newTask = new Task(taskDesc, priority)

      console.log(newTask);

      const selectedUl = document.querySelector(`div[list-id='${selectOption + 1}'] ul`)

      let li = document.createElement('li')
      li.innerHTML = `Description: ${newTask.description}<br>Priority: ${newTask.priority}`
      selectedUl.append(li)
      document.getElementById('new-task-description').value = ''
      document.getElementById('new-task-priority').value = ''
    }
  })
});
