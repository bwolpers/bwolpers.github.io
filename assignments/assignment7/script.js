const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');

function hideNavbar() {
    navbar.style.display = 'none';
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.style.width = 'auto';
    });
}

function showNavbar() {
    navbar.style.display = 'block';
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.style.width = 'auto';
    });
}

document.addEventListener("DOMContentLoaded", function () {
    hamburger.addEventListener('click', () => {
        if (navbar.style.display === 'none' || navbar.style.display === '') {
            showNavbar();
        } else {
            hideNavbar();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            showNavbar();
        } else {
            hideNavbar();
        }
    });

    if (window.innerWidth < 768) {
        hideNavbar();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const exercise1Tab = document.getElementById("exercise1");
    const exercise2Tab = document.getElementById("exercise2");
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");

    box1.style.display = "block";
    box2.style.display = "none";
    exercise1Tab.classList.add("active");

    exercise1Tab.addEventListener("click", function () {
        box1.style.display = "block";
        box2.style.display = "none";
        exercise1Tab.classList.add("active");
        exercise2Tab.classList.remove("active");
    });

    exercise2Tab.addEventListener("click", function () {
        box1.style.display = "none";
        box2.style.display = "block";
        exercise1Tab.classList.remove("active");
        exercise2Tab.classList.add("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const fundsRaisedInput = document.getElementById("funds-raised-input");
    const displayButton = document.getElementById("display-button");
    const mercury = document.getElementById("mercury");
    const goal = 10000;

    displayButton.addEventListener("click", function () {
        const fundsRaised = parseFloat(fundsRaisedInput.value);
        const percentage = (fundsRaised / goal) * 100;
        const adjustedPercentage = Math.min(Math.max(percentage, 0), 100);

        mercury.style.height = adjustedPercentage + "%";
        mercury.style.backgroundColor = backgroundColor;

        if (fundsRaised >= goal) {
            mercury.style.height = "100%";
            mercury.style.backgroundColor = "#4CAF50";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const buttonCompareAges = document.getElementById("button-compare-ages");
    const commentsContainer = document.getElementById("comments-container");

    buttonCompareAges.addEventListener("click", function () {
        const name1 = document.querySelector('#name1').value;
        const age1 = parseFloat(document.querySelector('#age1').value);
        const name2 = document.querySelector('#name2').value;
        const age2 = parseFloat(document.querySelector('#age2').value);
        const name3 = document.querySelector('#name3').value;
        const age3 = parseFloat(document.querySelector('#age3').value);

        if (name1 && !isNaN(age1) && name2 && !isNaN(age2) && name3 && !isNaN(age3)) {
            const people = [
                { name: name1, age: age1 },
                { name: name2, age: age2 },
                { name: name3, age: age3 }
            ];

            people.sort((a, b) => b.age - a.age);

            const resultList = document.createElement("ul");
            resultList.innerHTML = people.map(person => `<li>${person.name}: ${person.age} years old</li>`).join('');

            commentsContainer.innerHTML = "Oldest to youngest:</p>";
            commentsContainer.appendChild(resultList);
        } else {
            commentsContainer.textContent = "Oldest to youngest: Invalid information";
        }
    });
});
