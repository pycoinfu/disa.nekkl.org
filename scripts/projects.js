const projectElements = document.getElementsByClassName("project");
const projectDescriptionElements = document.getElementsByClassName("project-desc");
const projectDecsriptions = {
    "pygame-platformer": "E",
    "pgfs": "I am one of the contributors for the Pygame Guide for Sneks: \
            a guide for the Pygame library, that lets you make games with Python.",
    "dave's-anniversary": "I am one of the contributors for Dave's Anniversary, \
            a game created for the Pygame Community Summer Jam 2022."
}

for (let i = 0; i < projectElements.length; i++) {
    element = projectElements[i]
    id = projectElements[i].id;

    element.addEventListener("mouseover", () => {
        projectDescriptionElements[i].textContent = projectDecsriptions[id];
    })
    element.addEventListener("mouseout", () => {
        projectDescriptionElements[i].textContent = "";
    })
}