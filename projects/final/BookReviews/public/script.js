document.addEventListener("DOMContentLoaded", function () {
    const bookReviewForm = document.getElementById("book-review-form");
    const successMessage = document.getElementById("success-message");
    const newReviewsContainer = document.getElementById("reviews-container");
    const ratingElement = document.getElementById("rating");

    loadReviews();

    bookReviewForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const bookTitle = document.getElementById("book-title").value;
        const author = document.getElementById("author").value;
        const review = document.getElementById("review").value;
        const rating = parseInt(document.getElementById("rating-input").value);

        if (bookTitle === "" || author === "" || name == "" || review === "" || rating < 1 || rating > 5) {
            alert("Please fill in all the required fields and provide a valid rating (1-5).");
        } else {
            const newReview = {
                name: name,
                title: bookTitle,
                author: author,
                review: review,
                rating: rating,
            };

            saveReview(newReview);



            const successMessageText = `
                <h2>Review Submitted Successfully</h2>
                <p><strong>Username:</strong> ${name}</p>
                <p><strong>Book Title:</strong> ${bookTitle}</p>
                <p><strong>Author:</strong> ${author}</p>
                <p><strong>Rating:</strong> ${generateStarRating(rating)}</p>
                <p><strong>Review:</strong> ${review}</p>
            `;

            successMessage.innerHTML = successMessageText;
            successMessage.style.display = "block";

            bookReviewForm.reset();

            setTimeout(() => {
                successMessage.style.display = "none";
            }, 5000);
        }
    });

    async function saveReview(review) {
        try {
            const response = await fetch('https://chapter-chatter.onrender.com/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(review),
            });
    
            if (!response.ok) {
                throw new Error(`Failed to save review: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            console.error(error);
        }
    }
    

    function loadReviews() {
        const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];

        existingReviews.forEach((review) => {
            addReviewToPage(review);
        });
    }




    function generateStarRating(rating) {
        let starRating = "";
        switch (rating) {
            case 1:
                starRating = "&#9733;&#9734;&#9734;&#9734;&#9734;";
                break;
            case 2:
                starRating = "&#9733;&#9733;&#9734;&#9734;&#9734;";
                break;
            case 3:
                starRating = "&#9733;&#9733;&#9733;&#9734;&#9734;";
                break;
            case 4:
                starRating = "&#9733;&#9733;&#9733;&#9733;&#9734;";
                break;
            case 5:
                starRating = "&#9733;&#9733;&#9733;&#9733;&#9733;";
                break;
            default:
                starRating = "&#9733;&#9733;&#9733;&#9733;&#9733;";
                break;
        }
        return starRating;
    }



});
function generateStarRating(rating) {
    let starRating = "";
    switch (rating) {
        case 1:
            starRating = "&#9733;&#9734;&#9734;&#9734;&#9734;";
            break;
        case 2:
            starRating = "&#9733;&#9733;&#9734;&#9734;&#9734;";
            break;
        case 3:
            starRating = "&#9733;&#9733;&#9733;&#9734;&#9734;";
            break;
        case 4:
            starRating = "&#9733;&#9733;&#9733;&#9733;&#9734;";
            break;
        case 5:
            starRating = "&#9733;&#9733;&#9733;&#9733;&#9733;";
            break;
        default:
            starRating = "&#9733;&#9733;&#9733;&#9733;&#9733;";
            break;
    }
    return starRating;
}


const getReviews = async () => {
    try {
        const response = await fetch('https://chapter-chatter.onrender.com/api/reviews');
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error in getReviews:', error);
        throw error; // rethrow the error to be caught by the calling function
    }
};

async function deleteReview(reviewId) {
    try {
        const response = await fetch(`https://chapter-chatter.onrender.com/api/reviews/${reviewId}`, {
            method: 'DELETE',

        });

        if (!response.ok) {
            throw new Error(`Failed to delete review: ${response.status} - ${response.statusText}`);
        }


        const reviewElement = document.querySelector(`[data-review-id="${reviewId}"]`);
        if (reviewElement) {
            reviewElement.parentElement.remove();

        }
    } catch (error) {
        console.error(error);
    }
}





async function confirmDeleteReview(reviewId) {
    const isConfirmed = confirm("Are you sure you want to delete this review?");

    if (isConfirmed) {
        await deleteReview(reviewId);
    }
}
const showReviews = async () => {
    try {
        const reviewsData = await getReviews();
        const reviewsContainer = document.getElementById('reviews-container');
        const reviews = reviewsData || [];

        reviews.forEach((review) => {
            const contentDiv = document.createElement('div');
            contentDiv.classList.add('content-container');

            const boxDiv = document.createElement('div');
            boxDiv.classList.add('box');

            const pName = document.createElement('p');
            pName.classList.add('name');
            pName.textContent = review.name;
            pName.style.marginBottom = '5px';

            const h2 = document.createElement('h2');
            h2.textContent = review.title + ' by ' + review.author;
            h2.style.marginTop = '40px';

            const pRating = document.createElement('p');
            pRating.innerHTML = `Rating: ${generateStarRating(review.rating)}`;

            const pDesc = document.createElement('p');
            pDesc.textContent = review.review;

            const deleteLink = document.createElement('a');
            deleteLink.innerHTML = '&#x2715;';
            deleteLink.id = 'delete-link';
            deleteLink.addEventListener('click', () => confirmDeleteReview(review._id));

            const aView = document.createElement('a');
            aView.href = '../ReviewPreview/index.html';
            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('button-container');
            const buttonView = document.createElement('button');
            buttonView.classList.add('button');
            buttonView.textContent = 'View';
            buttonView.addEventListener('click', () => {

                window.location.href = '../ReviewPreview/index.html';
            });

            const boxDiv2 = document.createElement('div');
            boxDiv2.classList.add('box2');

            boxDiv.appendChild(pName);
            boxDiv.appendChild(h2);
            boxDiv.appendChild(pRating);
            boxDiv.appendChild(pDesc);
            buttonContainer.appendChild(deleteLink);
            contentDiv.appendChild(boxDiv);
            boxDiv.appendChild(buttonContainer);

            buttonContainer.appendChild(buttonView);

            reviewsContainer.appendChild(contentDiv);
        });
    } catch (error) {
        console.error(error);
    }
};



showReviews();
