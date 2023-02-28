const projectElements = document.querySelectorAll("img");
const projectDescriptionElements = document.getElementsByClassName("project-desc");
const projectDecsriptions = {
    "pygame-platformer": "A platformer game I've been working on",
    "pgfs": "I am one of the contributors for the Pygame Guide for Sneks: \
            a guide for the Pygame library, that lets you make games with Python.",
    "dave's-anniversary": "I am one of the contributors for Dave's Anniversary, \
            a game created for the Pygame Community Summer Jam 2022."
}

function animateDescription(element) {
    splitText = projectDecsriptions[element.id].split("");

    for (let i = 0; i < splitText.length; i++) {
        element.innerHTML += `<span>${splitText[i]}</span>`
    }

    let char = 0;
    let timer = setInterval(() => {
        const span = element.querySelectorAll("span")[char];
        if (span !== undefined) {
            span.classList.add("fade");
            char++;
            if (char === splitText.length) {
                clearInterval(timer);
                timer = null;
                return;
        }
    }
    }, 1);
    
}

for (let i = 0; i < projectElements.length; i++) {
    projectElements[i].addEventListener("mouseover", () => {
        animateDescription(projectDescriptionElements[i])
    })
    projectElements[i].addEventListener("mouseout", () => {
        projectDescriptionElements[i].textContent = "";
    })
}