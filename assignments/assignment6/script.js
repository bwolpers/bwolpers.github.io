
function showImage(imageId) {
    const image = document.getElementById(imageId);
    if (image) {
        image.style.display = 'block';
    }
}
function hideImage(imageId) {
    const image = document.getElementById(imageId);
    if (image) {
        image.style.display = 'none';
    }
}
const animate = () => {
    document.getElementById("emoji").classList.add("animate");
}
window.onload = () => {
    document.getElementById("button-dance").onclick = animate;
    document.getElementById("button-show-name").onclick = displayName;

}
const displayName = () => {
    const firstName = document.getElementById("txt-first-name").value;
    console.log("Hello " + firstName + "!");
}
document.addEventListener("DOMContentLoaded", function () {
    const commentButton = document.getElementById("button-add-comment");
    const commentTextarea = document.querySelector(".txt-comment");
    const commentsContainer = document.getElementById("comments-container");
    commentButton.addEventListener("click", () => {
        const productName = document.querySelector(".txt-product-name").value;
        const commentText = commentTextarea.value.trim();
        const rating = document.querySelector(".txt-rating").value;
        const username = document.querySelector(".txt-user-name").value;
        if (commentText !== "") {
            const commentContainer = document.createElement("div");
            commentContainer.classList.add("comment-container");
            const productNameElement = document.createElement("p");
            productNameElement.textContent = productName;
            productNameElement.classList.add("productNameElement");
            const ratingCommentElement = document.createElement("p");
            ratingCommentElement.textContent = rating + "/5 stars " + commentText;
            const usernameElement = document.createElement("p");
            usernameElement.textContent = "by " + username;
            commentContainer.appendChild(productNameElement);
            commentContainer.appendChild(ratingCommentElement);
            commentContainer.appendChild(usernameElement);
            commentsContainer.appendChild(commentContainer);
            commentTextarea.value = "";
            document.querySelector(".txt-product-name").value = "";
            document.querySelector(".txt-rating").value = "";
            document.querySelector(".txt-user-name").value = "";
        }
    });
});
