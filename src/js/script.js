"use strict";

const taskList = document.querySelector(".task-list");
const btnAdd = document.querySelector(".btn-add");
const input = document.querySelector(".task-input");

btnAdd.addEventListener("click", function () {
  const taskItem = document.createElement("li");
  const taskContent = input.value;
  taskList.appendChild(taskItem).textContent = taskContent;
  taskItem.classList.add("button-edit");
  taskItem.classList.add("button-delete");
  taskItem.classList.add("task-item");
});

const btnEdit = document.querySelector;
