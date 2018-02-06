/*
list is responsible for creating a single list component
*/


const List = (() => {
  let id = 0
  let lists = []
  return class List {
    constructor(title) {
      this.id = ++id
      this.title = title
      lists.push(this)
      //your code here
      // NOTE: How can we use the private id variable to auto increment list ids🤔?
    }
   static showLists(){
     return lists
   }
  }

})()
