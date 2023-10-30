document.addEventListener("DOMContentLoaded", function () {
    const bookReviewForm = document.getElementById("book-review-form");
    const successMessage = document.getElementById("success-message");
    const newReviewsContainer = document.getElementById("new-reviews-container");
    const ratingElement = document.getElementById("rating");

    loadReviews();

    bookReviewForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const bookTitle = document.getElementById("book-title").value;
        const author = document.getElementById("author").value;
        const review = document.getElementById("review").value;
        const rating = parseInt(document.getElementById("rating-input").value);



        if (bookTitle === "" || author === "" || review === "" || rating < 1 || rating > 5) {
            alert("Please fill in all the required fields and provide a valid rating (1-5).");
        } else {
            const newReview = {
                title: bookTitle,
                author: author,
                review: review,
                rating: rating,
            };

            saveReview(newReview);

            addReviewToPage(newReview);

            const successMessageText = `
                <h2>Review Submitted Successfully</h2>
                <p><strong>Book Title:</strong> ${bookTitle}</p>
                <p><strong>Author:</strong> ${author}</p>
                <p><strong>Rating:</strong> ${generateStarRating(rating)}</p>
                <p><strong>Review:</strong> ${review}</p>
            `;
            successMessage.innerHTML = successMessageText;
            successMessage.style.display = "block";

            bookReviewForm.reset();
        }
    });

    function saveReview(review, rating) {
        const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];

        existingReviews.push(review);

        localStorage.setItem("reviews", JSON.stringify(existingReviews));
    }

    function loadReviews() {
        const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];

        existingReviews.forEach((review) => {
            addReviewToPage(review);
        });
    }

    function addReviewToPage(review, rating) {
        const newReviewDiv = document.createElement("div");
        newReviewDiv.classList.add("content-container");

        const placeholderImageUrl = "https://via.placeholder.com/400";

        console.log("Rating Value:", rating);

        newReviewDiv.innerHTML = `
            <div class="box">
                <h2>${review.title} by ${review.author}</h2>
                <p id="rating">${generateStarRating(review.rating)}</p>
                <p class="name">Your Name</p>
                <p id="desc">${review.review}</p>
                <a href="../ReviewPreview/index.html"><button class="button" id="preview">View</button></a>
            </div>
            <div class="box2">
                <img src="${placeholderImageUrl}" alt="${review.title} Image">
            </div>
        `;

        newReviewsContainer.appendChild(newReviewDiv);
    }

    function generateStarRating(rating) {
        let starRating = "";
        switch (rating) {
            case 1:
                starRating = "★☆☆☆☆";
                break;
            case 2:
                starRating = "★★☆☆☆";
                break;
            case 3:
                starRating = "★★★☆☆";
                break;
            case 4:
                starRating = "★★★★☆";
                break;
            case 5:
                starRating = "★★★★★";
                break;
            default:
                starRating = "★★★★★";
                break;
        }
        return starRating;
    }
    
});
