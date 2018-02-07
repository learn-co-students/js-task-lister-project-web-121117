/*
list is responsible for creating a single list component
*/
const List = (() => {
  let id = 1;
  return class List {
    constructor(title) {
      this.id = id++;
      this.title = title;
    }

    render() {
      const listItem = document.getElementById("new-list-title");
      let item = listItem.value;
      let head = document.createElement("h1");
      let option = document.createElement("option");
      let div = document.createElement("div");
      let button = document.createElement("button");
      let unordered = document.createElement("ul");

      button.innerHTML = "X";

      head.append(button);
      head.append(item);
      option.append(head);

      div.append(head);
      lists.append(div);
      lists.append(unordered);

      const taskSelect = document.getElementById("parent-list");
      option.setAttribute("data-id", `${this.id}`);
      option.text = `${this.title}`;
      taskSelect.append(option);
    }
  };
})();
