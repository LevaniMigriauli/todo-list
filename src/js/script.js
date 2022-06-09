"use strict";

const taskList = document.querySelector(".task-list"); //UL
const btnAdd = document.querySelector(".btn-add");
const input = document.querySelector(".task-input");

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Enter") {
//     const taskItem = document.createElement("li"); //აქვე რატომ ვერ წაიღებს - .classList.add("task-item");
//     taskItem.classList.add("task-item");
//     const taskContent = input.value;
//     taskList.appendChild(taskItem).textContent = taskContent;
//   }
// });

btnAdd.addEventListener("click", function () {
  const taskItem = document.createElement("li"); //აქვე რატომ ვერ წაიღებს - .classList.add("task-item");
  taskItem.classList.add("task-item");
  const taskContent = input.value;
  taskList.appendChild(taskItem).textContent = taskContent;

  /* Add Edit & Delete buttons */
  const btnEdit = document.createElement("button");
  btnEdit.classList.add("btn");
  taskItem.appendChild(btnEdit).classList.add("button-edit");

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btn");
  taskItem.appendChild(btnDelete).classList.add("button-delete");
  // taskItem.appendChild()
  // taskItem.classList.add("button-edit");
  // taskItem.classList.add("button-delete");

  /* Add functionality of edit & delete buttons */
  btnDelete.addEventListener("click", function () {
    // console.log(this.parentElement.parentNode.removeChild);
    this.parentElement.parentNode.removeChild(this.parentNode /* taskItem? */);
    // this.parentElement.parentNode.innerHTML = "";
  });

  btnEdit.addEventListener("click", function () {
    const taskText = this.parentNode.textContent;
    // this.parentNode.parentElement.removeChild(taskItem);
    this.parentNode.innerHTML = "";
    const taskEditInput = document.createElement("input");
    taskItem.appendChild(taskEditInput).value = taskText;

    // Add SUBMIT button
    const btnSubmit = document.createElement("button");
    btnSubmit.classList.add("btn");
    taskItem.appendChild(btnSubmit).classList.add("button-submit");
    /* add SUBMIT button functionality */
    btnSubmit.addEventListener("click", function () {
      const taskTextEdited = this.previousSibling.value;
      // this.parentNode.removeChild(taskItem.firstChild);
      // this.parentNode.removeChild(taskItem.lastChild);
      // ზედა ვერსიაც მუშაობს
      this.parentNode.innerHTML = "";
      console.log(this.parentElement);
      console.log(btnDelete, btnEdit);
      taskItem.textContent = taskTextEdited;
      taskItem.appendChild(btnEdit);
      taskItem.appendChild(btnDelete);
      // this.parentElement.appendChild(btnEdit);
      // this.parentElement.appendChild(btnDelete);
      // this.parentNode.textContent = taskTextEdited;

      // this.parentNode.appendChild(taskItem).classList.add("button-delete");
      // this.parentNode.appendChild.input.value = taskTextEdited;
      // taskItem.appendChild(btnEdit).classList.add("button-edit");
    });
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
