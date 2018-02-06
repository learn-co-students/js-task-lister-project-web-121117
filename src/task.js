/*
task is responsible for creating a single task object
*/
const tasksArr = []

const Task = (() => {
  let id = 0
  return class Task {
    constructor(description, priority, listId) {
      //your code here
      //belongs to list, has description and Priority
      this.description = description
      this.priority = priority
      this.id = ++id
      this.listId = listId
      tasksArr.push(this)
    }

    list() {
      return listsArr.find(l => (l.id === this.listId) )
    }
  }

})()
