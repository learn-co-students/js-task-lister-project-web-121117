document.addEventListener("DOMContentLoaded", () => {
  console.log("The DOM content has loaded");

  const task = document.getElementById("create-task-form");
  task.style.opacity = 0;

  const listItem = document.getElementById("new-list-title");
  const createItem = document.getElementById("create-list-form");
  const descriptionItem = document.getElementById("new-task-description");
  const priorityItem = document.getElementById("new-task-priority");
  const taskSelect = document.getElementById("parent-list");
  const lists = document.getElementById("lists");

  task.addEventListener("submit", function(event) {
    event.preventDefault();
    let newTask = new Task(descriptionItem.value, priorityItem.value);
    newTask.render();
  });

  createItem.addEventListener("submit", function(event) {
    event.preventDefault();
    task.style.opacity = 1;
    let newList = new List(listItem.value);
    newList.render();
    listItem.value = "";
  });
});
