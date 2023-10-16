document.addEventListener("DOMContentLoaded", function () {
    const assignmentsTab = document.getElementById("assignments-tab");
    const projectsTab = document.getElementById("projects-tab");
    const assignmentsContent = document.getElementById("assignments-content");
    const projectsContent = document.getElementById("projects-content");

    assignmentsTab.classList.add("active");

    assignmentsTab.addEventListener("click", function () {
        assignmentsContent.style.display = "block";
        projectsContent.style.display = "none";
        assignmentsTab.classList.add("active");
        projectsTab.classList.remove("active");
    });

    projectsTab.addEventListener("click", function () {
        projectsContent.style.display = "block";
        assignmentsContent.style.display = "none";
        projectsTab.classList.add("active");
        assignmentsTab.classList.remove("active");
    });
});