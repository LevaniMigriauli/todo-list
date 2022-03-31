"use strict";

const listContainer = document.getElementById("todo-list");
const input = document.getElementById("input");
const btnAdd = document.getElementById("button-add");
const btnDelete = document.querySelector("todo-list__task-item::after");

// const btnDelete = document.createElement("button");
// const btnDel = (btnDelete.innerText = "delete");

const taskList = [];
console.log(taskList);

btnAdd.addEventListener("click", function () {
  //   document.body.append(document.createElement("li"));
  //   let task = listContainer.append(document.createElement("li"));
  taskList.push(input.value);
  // console.log(input.value);
  const task = document.createElement("li");
  task.classList.add("todo-list__task-item");
  for (let l = 0; l < taskList.length; l++) {
    listContainer.appendChild(task).textContent = taskList[l];
    // listContainer.appendChild(task).textContent = "task";
  }
});

// btnDelete.addEventListener("click", function (e) {
//   taskList.pop(e);
//   // for (let l = 0; l < taskList.length; l++) {}
//   console.log(e);
//   console.log(taskList);
// });

console.log(btnDelete);
