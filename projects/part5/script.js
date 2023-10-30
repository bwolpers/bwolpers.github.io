const hamburgerInput = document.getElementById("hamburger-input");
const nav = document.getElementById("nav");

hamburgerInput.addEventListener("change", () => {
    if (hamburgerInput.checked) {
        nav.style.flexDirection = "row";
    } else {
        nav.style.flexDirection = "column";
    }
}, { passive: true });

fetch('./project.json')
    .then(response => response.json())
    .then(data => {
        const contentContainer = document.getElementById('content');

        data.sections.forEach(section => {
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'box';
            sectionDiv.innerHTML = `
                <div class="parallax" style="background-image: url('${section.backgroundImage}');">
                    <div class="text">
                        <h2>${section.title}</h2>
                        <p>${section.description}</p>
                        <a href="${section.buttonLink}"><button class="button">${section.buttonText}</button></a>
                    </div>
                </div>
            `;

            contentContainer.appendChild(sectionDiv);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));
