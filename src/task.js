/*
task is responsible for creating a single task object
*/
const Task = (() => {
  let id = 1;
  return class Task {
    constructor(description, priority) {
      this.id = id++;
      this.description = description;
      this.priority = priority;
    }

    render() {
      let list = document.createElement("li");
      list.append(`Task: ${this.description}`);
      list.append(`Priority: ${this.priority}`);
      let unordered = document.createElement("ul");
      unordered.append(list);
      lists.append(unordered);
    }
  };
})();

// jack was here
