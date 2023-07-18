import {
  addTask,
  getTasks,
  addProject,
  getProjects,
} from "../controller/taskController";

const sectionTitle = document.createElement("div");
sectionTitle.classList.add("title");
sectionTitle.innerHTML = "All Tasks";
const mainContainer = document.getElementById("task-container");
mainContainer.appendChild(sectionTitle);
const taskContainer = document.createElement("div");
mainContainer.appendChild(taskContainer);
const addProjectContainer = document.querySelector("#add-project-container");

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

function createNewProjectComponent() {
  // Crear elementos
  const newProjectDiv = document.createElement("div");
  const inputDiv = document.createElement("div");
  const icon = document.createElement("i");
  const input = document.createElement("input");
  const buttonGroup = document.createElement("div");
  const addButton = document.createElement("div");
  const cancelButton = document.createElement("div");

  // Establecer clases
  newProjectDiv.className = "new-project";
  inputDiv.className = "input-new-project";
  icon.className = "fa-solid fa-hashtag";
  buttonGroup.className = "button-group";
  addButton.className = "btn btn-primary";
  addButton.addEventListener("click", () => {
    newProject(input.value);
  });
  cancelButton.className = "btn danger";
  cancelButton.id = "cancel-btn";
  cancelButton.addEventListener("click", () => {
    closeAddProject();
  });
  // Establecer atributos
  input.placeholder = "Enter Project Name";

  // Establecer contenido de texto
  addButton.textContent = "Add";
  cancelButton.textContent = "Cancel";

  // Agregar elementos hijos a sus padres correspondientes
  inputDiv.appendChild(icon);
  inputDiv.appendChild(input);
  buttonGroup.appendChild(addButton);
  buttonGroup.appendChild(cancelButton);
  newProjectDiv.appendChild(inputDiv);
  newProjectDiv.appendChild(buttonGroup);

  // Devolver el elemento completo
  return newProjectDiv;
}
function newProject(project) {
  addProject(project);
  renderProjects();
  closeAddProject();
}
function addProjectInput() {
  if (addProjectContainer.childElementCount == 0) {
    const newProjectComponent = createNewProjectComponent();
    addProjectContainer.appendChild(newProjectComponent);
  }
}
function closeAddProject() {
  addProjectContainer.innerHTML = "";
}

function createProject(nombre) {
  // Crear el elemento contenedor principal
  const project = document.createElement("div");
  project.classList.add("project", "toggle-group");

  // Crear el icono de hashtag
  const hashtagIcon = document.createElement("i");
  hashtagIcon.classList.add("fa-solid", "fa-hashtag");

  // Crear el texto "Project"
  const projectText = document.createElement("div");
  projectText.textContent = nombre;

  // Crear el icono de opciones
  const optionsIcon = document.createElement("i");
  optionsIcon.classList.add("fa-solid", "fa-ellipsis-vertical", "options");

  // Añadir los elementos al contenedor principal
  project.appendChild(hashtagIcon);
  project.appendChild(projectText);
  project.appendChild(optionsIcon);

  return project;
}
function renderProjects() {
  const projectContainer = document.getElementById("project-container");
  projectContainer.innerHTML = "";
  let projects = getProjects();
  for (let project in projects) {
    projectContainer.appendChild(createProject(projects[project]));
  }
}

export { setTitle, addProjectInput, closeAddProject, renderProjects };
