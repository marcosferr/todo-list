import "./styles/reset.css";
import "./styles/styles.css";
import toggle from "./toggleFilters.js";
// import json from './data.json5';

const sectionTitle = document.createElement("div");
sectionTitle.classList.add("title");
sectionTitle.innerHTML = "All Tasks";
const taskContainer = document.getElementById("task-container");
taskContainer.appendChild(sectionTitle);
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

toggle.init();
