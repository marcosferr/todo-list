const sections = document.querySelectorAll(".report");
let current = null;
function select(event) {
  current ? current.classList.remove("active") : null;
  current = event.target;
  event.target.classList.add("active");
}

function init() {
  sections.forEach((section) => {
    section.addEventListener("click", select);
  });
}

init();
export default { init };
