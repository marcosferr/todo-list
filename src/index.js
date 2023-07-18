import "./styles/reset.css";
import "./styles/styles.css";
import toggle from "./view/toggleGroup.js";
import {
  setTitle,
  addProjectInput,
  closeAddProject,
} from "./view/viewController";
toggle.init(".toggle-group");
// import json from './data.json5';

//Slider logic
// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme

function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("slider").checked = false;
  } else {
    setTheme("theme-light");
    document.getElementById("slider").checked = true;
  }
})();

document.getElementById("slider").addEventListener("click", () => {
  toggleTheme();
});

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open-sidebar");
}
document.getElementById("menu-btn").addEventListener("click", () => {
  toggleSidebar();
});
document.getElementById("add-project-btn").addEventListener("click", () => {
  addProjectInput();
});
document.getElementById("add-project-btn").addEventListener("click", () => {
  addProjectInput();
});
document.getElementById("add-project-btn").addEventListener("click", () => {
  addProjectInput();
});

setTitle("All Tasks");
toggle.init();
