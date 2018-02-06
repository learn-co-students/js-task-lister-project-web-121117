/*
list is responsible for creating a single list component
*/
const listsArr = []

const List = (() => {
  let id = 0
  return class List {
    constructor(title) {
      //your code here
      // Note: How can we use the private id variable to auto increment list ids?
      //title, id, has many tasks
      this.title = title
      this.id = ++id
      listsArr.push(this)
    }

    tasks() {
      return tasksArr.filter(t => t.listId === this.id)
    }
  }

})()
