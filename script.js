document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Add task to list
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task");
      return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");
    listItem.appendChild(removeButton);

    taskList.appendChild(listItem);

    taskInput.value = "";

    removeButton.addEventListener("click", removeTask)

    //Remove task from list
    function removeTask() {
      taskList.removeChild(listItem);
    }
  }

  addButton.addEventListener("click", addTask);

  // Press enter key to add task to list
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }

    return;
  });

  // Fetch data once HTML is loaded
  document.addEventListener("DOMContentLoaded", addTask);
});
