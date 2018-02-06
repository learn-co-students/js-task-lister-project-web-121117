document.addEventListener('DOMContentLoaded', () => {
  console.log("The DOM content has loaded");
  // your code here ....
  let store = { lists: [], tasks: []}

  // let submitButtons = document.querySelectorAll('input[type="submit"]')
  // submitButtons.forEach(function(event){
  //   event.preventDefault();

// let submitForms =  document.querySelectorAll("form")
//   submitForms.forEach(function(form) {
//     form.addEventListener("submit", function(event){
//       event.preventDefault();
//       console.log("added event listener")
//     })
//   })

let createListForm =  document.getElementById("create-list-form")
    createListForm.addEventListener("submit", function(event){
      event.preventDefault();
      //console.log(event)
      let listTitle = event.target[0].value
      //console.log(listTitle)
      let newList = new List(listTitle)
      // console.log(List.showLists())
      const selectList = document.getElementById("parent-list")
      const newOption = document.createElement('option')

      const lists = List.showLists()
      const listItem = lists[lists.length - 1]


      // console.log(listItem)

      newOption.setAttribute('id', listTitle)
      // console.log(newOption)

      newOption.text = listItem.title
      newOption.value = listItem.id
      selectList.appendChild(newOption)

      const listsSection = document.getElementById('lists')
      const listDiv = document.createElement('div')
      const listHeader = document.createElement('h3')
      const listOl = document.createElement('ol')
      listOl.id = "list-" + listItem.id + "-ol"
      listHeader.innerText = listTitle
      listDiv.appendChild(listHeader)
      listDiv.appendChild(listOl)
      listDiv.id = "list-" + listItem.id
      listsSection.appendChild(listDiv)
      // console.log(newOption.text)
      // console.log(newOption.value)
      const newListTitleInput = document.getElementById('new-list-title')
      newListTitleInput.value = ""
  })

let createTaskForm =  document.getElementById("create-task-form")
    createTaskForm.addEventListener("submit", function(event){
      event.preventDefault();
      console.log(event)
      let taskListId = event.target[0].value
      let taskDescription = event.target[1].value
      let taskPriority = event.target[2].value
      //console.log(taskTitle)
      let newTask = new Task(taskListId, taskDescription, taskPriority)
      // console.log(List.showLists())

      const tasks = Task.showTasks()
      const taskItem = tasks[tasks.length - 1]
      // console.log(taskItem)

      const newTaskLi = document.createElement('li')
      newTaskLi.id = "task-" + taskItem.id

      const newTaskDescription = document.createElement('p')
      newTaskDescription.innerText = taskItem.description
      newTaskLi.appendChild(newTaskDescription)

      const newTaskPriority = document.createElement('em')
      newTaskPriority.innerText = "Priority: " + taskItem.priority
      newTaskLi.appendChild(newTaskPriority)

      const newTaskListId = "list-" + taskItem.listId + "-ol"
      const newTaskListOl = document.getElementById(newTaskListId)
      newTaskListOl.appendChild(newTaskLi)


  })



//  })

});
