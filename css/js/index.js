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
    const skill = document.createElement("li"); 
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
const messageForm = document.forms.leave_message;
messageForm.addEventListener('submit', (event) => {
event.preventDefault();
const usersName = event.target.usersName.value;
const usersEmail = event.target.usersEmail.value;
const usersMessage = event.target.usersMessage.value;
const messageSection = document.querySelector('#messages');
const messageList = messageSection.querySelector('ul');
const newMessage = document.createElement('li');
newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a>
        <span>${usersMessage}</span>
    `;
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', (event) => {
        // DOM Traversal: find the button's parent (the <li> entry)
        const entry = event.target.parentNode; 
        entry.remove(); // Remove the entire list item from the DOM
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
   event.target.reset();
});