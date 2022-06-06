"use strict";

const taskList = document.querySelector(".task-list");
const btnAdd = document.querySelector(".btn-add");
const input = document.querySelector(".task-input");

btnAdd.addEventListener("click", function () {
  const taskItem = document.createElement("li");
  const taskContent = input.value;
  taskList.appendChild(taskItem).textContent = taskContent;
  taskItem.classList.add("task-item");

  // Add Edit & Delete buttons
  const btnEdit = document.createElement("button");
  btnEdit.classList.add("btn");
  taskItem.appendChild(btnEdit).classList.add("button-edit");

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btn");
  taskItem.appendChild(btnDelete).classList.add("button-delete");
  // taskItem.appendChild()
  // taskItem.classList.add("button-edit");
  // taskItem.classList.add("button-delete");

  btnEdit.addEventListener("click", function () {
    const taskText = this.parentNode.textContent;
    console.log(taskText);
    // this.parentNode.parentElement.removeChild(taskItem);
    this.parentNode.innerHTML = "";
    const taskEditInput = document.createElement("input");
    taskEditInput.classList.add("btn");
    taskItem.appendChild(taskEditInput).classList.add("button-submit");
    taskEditInput.innerText = taskText;
    // console.log(this.parentElement);

    // taskItem.classList.add("btn");
    // this.parentNode.classList.add("button-submit");
  });
});

// const btnEdit = document.querySelector(".button-edit");
// const btnEditAfter = window.getComputedStyle(btnEdit, "::after");
// const content = btnEditAfter["content"];

// window.getComputedStyle(document.querySelector("button-edit"), ":after");

// if (btnEdit.matches(":after"))
//   btnEdit.addEventListener("click", function () {
//     console.log(this);
//   });
