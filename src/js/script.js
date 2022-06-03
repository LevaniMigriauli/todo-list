"use strict";

const taskList = document.querySelector(".task-list");
const btnAdd = document.querySelector(".btn-add");
const input = document.querySelector(".task-input");

btnAdd.addEventListener("click", function () {
  const taskItem = document.createElement("li");
  const taskContent = input.value;
  console.log(taskContent);
  taskList.appendChild(taskItem).textContent = taskContent;
});
