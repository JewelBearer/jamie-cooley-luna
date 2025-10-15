console.log("Hello, World!");
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.createElement("footer");
const body = document.querySelector("body");
body.appendChild(footer);
const copyright = document.createElement("p");
copyright.innerHTML = `&copy; Jamie S. Cooley ${thisYear}`;
footer.appendChild(copyright);
const skills = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Git/GitHub",
    "Responsive Design (Flexbox & Grid)",
    "Data Engineering",
    "Node.js (Self-Study)",
    "Algorithms"
];
const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
