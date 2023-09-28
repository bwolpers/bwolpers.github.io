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
    const imageLink = document.getElementById("image-link");
    const runner = document.getElementById("runner");
    let isRunning = false;
    let leftMargin = 0;
    const maxLeftMargin = 510;
    const animationSpeed = 3;
    const switchInterval = 950;
    let lastSwitchTime = 0;

    function toggleRunning() {
        isRunning = !isRunning;
        if (isRunning) {
            runner.src = "images/running.png";
        } else {
            runner.src = "images/walking.png";
        }
    }

    function moveImage() {
        if (leftMargin < maxLeftMargin) {
            leftMargin += animationSpeed;
            runner.style.marginLeft = leftMargin + "px";

            const currentTime = Date.now();
            if (currentTime - lastSwitchTime >= switchInterval) {
                toggleRunning();
                lastSwitchTime = currentTime;
            }
            requestAnimationFrame(moveImage);
        } else {
            leftMargin = 0;
            runner.style.marginLeft = "0px";
            toggleRunning();
            lastSwitchTime = 0;
        }
    }

    imageLink.addEventListener("click", function (e) {
        e.preventDefault();
        if (!isRunning) {
            toggleRunning();
            moveImage();
            lastSwitchTime = 0;
        }   
    });
});
