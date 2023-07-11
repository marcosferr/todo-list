let current = null;
let sections = null;

function select(event) {
  current ? current.classList.remove("active") : null;
  current = event.target;
  event.target.classList.add("active");
}

function init(group) {
  sections = document.querySelectorAll(group);
  sections.forEach((section) => {
    section.addEventListener("click", select);
  });
}

export default { init };
