import { addTask, getTasks } from "../controller/taskController";

const sectionTitle = document.createElement("div");
sectionTitle.classList.add("title");
sectionTitle.innerHTML = "All Tasks";
const mainContainer = document.getElementById("task-container");
mainContainer.appendChild(sectionTitle);
const taskContainer = document.createElement("div");
mainContainer.appendChild(taskContainer);

function setTitle(title) {
  addTask("La mancha", "Pelicula de accion", "20202020", "a");
  sectionTitle.innerHTML = title;
  renderTasks();
}

function createTaskElement(task) {
  const taskElement = document.createElement("div");
  taskElement.className = "task";

  const taskChecked = document.createElement("input");
  taskChecked.type = "checkbox";
  taskChecked.className = "task-checked";
  taskElement.appendChild(taskChecked);

  const taskText = document.createElement("div");
  taskText.className = "task-text";

  const taskTitle = document.createElement("div");
  taskTitle.className = "task-title";
  taskTitle.textContent = task.title;
  taskText.appendChild(taskTitle);

  const taskDetails = document.createElement("div");
  taskDetails.className = "task-details";
  taskDetails.textContent = task.details;
  taskText.appendChild(taskDetails);

  taskElement.appendChild(taskText);

  const right = document.createElement("div");
  right.className = "right";

  const date = document.createElement("div");
  date.className = "date";
  date.textContent = task.dueDate;
  right.appendChild(date);

  const star = document.createElement("i");
  star.className = "fa fa-star";
  right.appendChild(star);

  const options = document.createElement("i");
  options.className = "fa fa-ellipsis-vertical options";
  right.appendChild(options);

  taskElement.appendChild(right);

  return taskElement;
}

function renderTasks() {
  taskContainer.appendChild(createTaskElement(getTasks()[0]));
}

export { setTitle };
