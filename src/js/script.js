"use strict";

const taskList = document.querySelector(".task-list"); //UL
const btnAdd = document.querySelector(".btn-add");
const input = document.querySelector(".task-input");

const taskAdd = function () {
  const taskItem = document.createElement("li"); //აქვე რატომ ვერ წაიღებს - .classList.add("task-item"); ჯერ append რადგან არ გაგვიკეთებია?
  taskItem.classList.add("task-item");
  const taskContent = input.value;
  taskItem.textContent = taskContent;

  taskList.appendChild(taskItem);

  /* Add Edit & Delete buttons */
  const btnEdit = document.createElement("button");
  btnEdit.classList.add("btn", "button-edit");
  taskItem.appendChild(btnEdit);

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btn", "button-delete");
  taskItem.appendChild(btnDelete);

  /* INPUT-ის გასუფთავება ახალი თასქისთვის */
  input.value = "";

  /* Add functionality of edit & delete buttons */
  const taskDelete = function () {
    this.parentElement.parentNode.removeChild(this.parentNode /* taskItem? */);
    // this.parentElement.parentNode.innerHTML = "";
  };
  btnDelete.addEventListener("click", taskDelete);

  const taskEdit = function () {
    const taskText = this.parentNode.textContent;
    // this.parentNode.parentElement.removeChild(taskItem);
    this.parentNode.innerHTML = "";
    const taskEditInput = document.createElement("input");
    taskItem.appendChild(taskEditInput).value = taskText;
    taskItem.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        // editInputs-ზე დავამატო
        taskSubmit();
      }
    });

    // Add SUBMIT button
    const btnSubmit = document.createElement("button");
    btnSubmit.classList.add("btn", "button-submit");
    taskItem.appendChild(btnSubmit);
    /* add SUBMIT button functionality */
    const taskSubmit = function () {
      const taskTextEdited = this.previousSibling.value;
      this.parentNode.innerHTML = "";
      taskItem.textContent = taskTextEdited;
      taskItem.appendChild(btnEdit);
      taskItem.appendChild(btnDelete);
    };
    btnSubmit.addEventListener("click", taskSubmit);
    // btnSubmit.addEventListener("keydown", function (e) {
    //   if (e.key === "Enter" || e.key === "Escape") taskSubmit(); // აქ როგორ დავამატო ენთერ & ესქეიფზე დასაბმითება ისე რომ დაბლა add-ზე არ იმუშაოს global event არ უნდა იყოს
    // });
  };
  btnEdit.addEventListener("click", taskEdit);
};
btnAdd.addEventListener("click", taskAdd);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") taskAdd();
});
// const btnEdit = document.querySelector(".button-edit");
// const btnEditAfter = window.getComputedStyle(btnEdit, "::after");
// const content = btnEditAfter["content"];

// window.getComputedStyle(document.querySelector("button-edit"), ":after");

// if (btnEdit.matches(":after"))
//   btnEdit.addEventListener("click", function () {
//     console.log(this);
//   });

// local storage დარეფრეშებისას რომ შეინახოს
