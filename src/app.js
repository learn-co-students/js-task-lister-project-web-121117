class App {
  static init() {
    let taskForm = document.getElementById("create-task-form");
    taskForm.style.opacity = 0;

    let newList = document.getElementById("create-list-form");
    newList.addEventListener("submit", App.createList);

    let newTask = document.getElementById("create-task-form");
    newTask.addEventListener("submit", App.createTask);

    let section = document.getElementById("lists");
    section.addEventListener("click", App.deleteTask);
  }

  static createList() {
    event.preventDefault();
    let taskForm = document.getElementById("create-task-form");
    taskForm.style.opacity = 1;

    let listInput = document.getElementById("new-list-title").value;
    let newList = new List(listInput);
    let lists = document.getElementById("lists");
    let box = document.createElement("div");
    box.id = newList.id;
    let option = document.createElement("option");
    let h2 = document.createElement("h2");
    let button = document.createElement("button");
    button.innerHTML = "X";
    h2.append();
    h2.append(button);
    h2.append(listInput);
    box.append(h2);
    lists.append(box);
    let unordered = document.createElement("ul");
    lists.append(unordered);

    let select = document.getElementById("parent-list");
    option.innerText = newList.title;
    select.append(option);
  }

  static createTask() {
    event.preventDefault();
    let newDesc = document.getElementById("new-task-description").value;
    let newPri = document.getElementById("new-task-priority").value;
    let newTask = new Task(newDesc, newPri);
    let li = document.createElement("li");
    li.append(`Task: ${newDesc}`);
    li.append(`Priority: ${newPri}`);
    let index = document.getElementById("parent-list").selectedIndex + 1;
    let div = document.getElementById(index);
    div.append(li);
  }

  static deleteTask() {
    event.target.parentElement.parentElement.remove();
  }
}
