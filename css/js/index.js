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
const GITHUB_URL = 'https://api.github.com/users/JewelBearer/repos';
fetch(GITHUB_URL)
.then(response => {
    if (!response.ok) {
            throw new Error(`GitHub API returned status: ${response.status}`);
        }
        return response.json();
    })
    .then(repositories => {
    console.log('GitHub Repositories:', repositories);
// DOM Selection to find the list elements
        const projectSection = document.getElementById('Projects');
        const projectList = projectSection.querySelector('ul');

        // Loop over the array to create list items for each repository
        for (let i = 0; i < repositories.length; i++) {
            const repo = repositories[i];
            
            // Create a new list item (li) element
            const project = document.createElement('li');
            
            // Set the inner text to the repository's name property
            project.innerText = repo.name;
            
            // Append the new project element to the list
            projectList.appendChild(project);
        }
    })
     .catch(error => {
        console.error('Error fetching GitHub repos:', error.message);
        // Display a message to the user if the section is empty (optional but good practice)
        const projectSection = document.getElementById('Projects');
        projectSection.innerHTML += `<p style="color:red;">Error loading projects. Please check the console.</p>`;
    });