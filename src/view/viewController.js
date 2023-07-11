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
function renderTasks() {
  taskContainer.innerHTML = getTasks()[0].title;
}

export { setTitle };
