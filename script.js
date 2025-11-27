document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Store tasks
  let tasks = [];

  // Load stored tasks
  function loadTasks() {
    try {
      const parsed = JSON.parse(localStorage.getItem("tasks"));

      if (Array.isArray(parsed)) {
        tasks = parsed;
        tasks.forEach((task) => createTask(task));
      }
    } catch (error) {
      console.error("Failed to fetch data");
    }
  }

  // Create tasks
  function createTask(taskText) {
    if (taskText === "") return;

    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    removeButton.addEventListener("click", function () {
      taskList.removeChild(listItem);

      tasks = tasks.filter(task => task !== taskText);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
  }

  // Add task to list
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task");
      return;
    }

    tasks.push(taskText);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    createTask(taskText);

    taskInput.value = "";
  }

  loadTasks();

  addButton.addEventListener("click", addTask);

  // Press enter key to add task to list
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") addTask();
  });
});
