import "./styles/styles.css";
// import json from './data.json5';
//on start up checked wheather its on light mode or dark mode
const checkbox = document.getElementById("checkbox");
if (checkbox.checked === true) {
  document.body.classList.add("light");
} else {
  document.body.classList.remove("light");
}

//event listener for every time the dark mode toggle change
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("light");
});
