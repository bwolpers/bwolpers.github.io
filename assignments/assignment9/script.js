document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
      "'The only way to do great work is to love what you do.' - Steve Jobs",
      "'In three words I can sum up everything I've learned about life: it goes on.' - Robert Frost",
      "'Success is not final, failure is not fatal: it is the courage to continue that counts.' - Winston Churchill",
      "'The best way to predict the future is to create it.' - Peter Drucker",
      "'Don't watch the clock; do what it does. Keep going.' - Sam Levenson"
    ];
  
    const quoteElement = document.querySelector("#exercise1-content p");
  
    let currentQuoteIndex = 0;
  
    function changeQuote() {
      quoteElement.textContent = quotes[currentQuoteIndex];
      currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }
  
    changeQuote(); 
  
    setInterval(changeQuote, 2000); 
});
document.addEventListener("DOMContentLoaded", function() {
    const rainbowButton = document.getElementById("rainbow-button");
    const rainbowContainer = document.getElementById("rainbow");
    const potOfGoldImage = document.getElementById("pot-of-gold");

    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];

    function createRainbow() {
        rainbowButton.disabled = true;
        potOfGoldImage.style.display = "none";
        colors.forEach((color, index) => {
            setTimeout(() => {
                const bar = document.createElement("div");
                bar.style.backgroundColor = color;
                bar.classList.add("rainbow-bar");
                rainbowContainer.appendChild(bar);

                if (index === colors.length - 1) {
                    setTimeout(() => {
                        potOfGoldImage.style.display = "block";
                        rainbowButton.disabled = false;
                    }, 500);
                }
            }, index * 1000);
        });
    }

    rainbowButton.addEventListener("click", createRainbow);
});
