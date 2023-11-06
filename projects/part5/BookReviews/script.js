document.addEventListener("DOMContentLoaded", function () {
    const bookReviewForm = document.getElementById("book-review-form");
    const successMessage = document.getElementById("success-message");
    const newReviewsContainer = document.getElementById("reviews-container");
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

    function addReviewToPage(review) {
        const newReviewDiv = document.createElement("div");
        newReviewDiv.classList.add("content-container");
    
        const placeholderImageUrl = "https://via.placeholder.com/400";
    
        console.log("Rating Value:", review.rating);
    
        newReviewDiv.innerHTML = `
            <div class="box">
                <h2>${review.title} by ${review.author}</h2>
                <p class="review-rating">${generateStarRating(review.rating)}</p>
                <p class="name">Your Name</p>
                <p class="review-description">${review.review}</p>
                <div class="button-container">
                    <a href="../ReviewPreview/index.html"><button class="button preview-button">View</button></a>
                </div>
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

const getReviews = async () => {
      const response = await fetch("https://bwolpers.github.io/projects/part5/BookReviews/project.json");
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
      }
      return response.json();
  };
  
  const showReviews = async () => {
    const reviews = await getReviews();
    const reviewsContainer = document.getElementById("reviews-container");

    reviews.sections.forEach((review) => {
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("content-container");

        const boxDiv = document.createElement("div");
        boxDiv.classList.add("box");

        const h2 = document.createElement("h2");
        h2.textContent = review.title;

        const pRating = document.createElement("p");
        pRating.textContent = review.rating;

        const pAuthor = document.createElement("p");
        pAuthor.classList.add("name");
        pAuthor.textContent = review.name;

        const pDesc = document.createElement("p");
        pDesc.textContent = review.desc;

        const aView = document.createElement("a");
        aView.href = "../ReviewPreview/index.html";
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container"); 
        const buttonView = document.createElement("button");
        buttonView.classList.add("button");
        buttonView.textContent = "View";

        const boxDiv2 = document.createElement("div");
        boxDiv2.classList.add("box2");
        const image = document.createElement("img");
        image.src = review.image;
        image.alt = "Book Cover";
        image.id = "image";

        boxDiv.appendChild(h2);
        boxDiv.appendChild(pAuthor);
        boxDiv.appendChild(pRating);
        boxDiv.appendChild(pDesc);
        contentDiv.appendChild(boxDiv);
        boxDiv.appendChild(buttonContainer); 

        buttonContainer.appendChild(buttonView); 

        boxDiv2.appendChild(image);
        contentDiv.appendChild(boxDiv2);
        contentDiv.appendChild(aView);

        reviewsContainer.appendChild(contentDiv);
    });
};

showReviews();
