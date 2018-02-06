/*
task is responsible for creating a single task object
*/
const Task = (() => {
  let id = 0
  let tasks = []
  return class Task {
    constructor(listId, description, priority) {
      this.id = ++id
      this.description = description
      this.priority = priority
      this.listId = listId
      tasks.push(this)
      //your code here
    }
    static showTasks(){
      return tasks
    }
  }

})()
