import { createTask } from "../models/task.js";

let allTasks = [];
let currentProject = "default";
function addTask(title, details, dueDate, project) {
  let newTask = createTask(title, details, dueDate, false, false, project);
  allTasks.push(newTask);
}
function getTasks(project) {
  return allTasks;
}

export { addTask, getTasks };
