document.addEventListener("DOMContentLoaded", function () {
    class Toy {
        constructor(name, imageFileName, title, paragraphs) {
            this.name = name;
            this.imageFileName = imageFileName;
            this.title = title;
            this.paragraphs = paragraphs;
        }

        getToyItem() {
            const toyItem = document.createElement("div");
            toyItem.classList.add("toy-item");

            const image = document.createElement("img");
            image.src = `images/${this.imageFileName}`;
            image.alt = this.name;

            toyItem.appendChild(image);

            const overlay = document.createElement("div");
            overlay.classList.add("overlay");

            const title = document.createElement("h2");
            title.textContent = this.title;
            overlay.appendChild(title);

            this.paragraphs.forEach((paragraphText) => {
                const paragraph = document.createElement("p");
                paragraph.textContent = paragraphText;
                overlay.appendChild(paragraph);
            });

            toyItem.appendChild(overlay);

            return toyItem;
        }
    }

    const toys = [
        new Toy("Toy 1", "atv.png", "6V Kids Electric ATV", ["Price: $79.00", "Age Range: 3+", "Rating: 4.69 stars"]),
        new Toy("Toy 2", "dino.png", "Dinosaur Action Figure", ["Price: $18.99", "Age Range: 4+", "Rating: 4.8 stars"]),
        new Toy("Toy 3", "drone.png", "Mini Drone with Camera", ["Price: $44.99", "Age Range: 8-13", "Rating: 3.8 stars"]),
        new Toy("Toy 4", "hotwheel.png", "Hot Wheels - City 50 Mega Garage", ["Price: $53.99", "Age Range: 4-8", "Rating: 4.8 stars"]),
        new Toy("Toy 5", "lego.png", "Lego Mobile Crane", ["Price: $39.99", "Age Range: 7+", "Rating: 4.8 stars"]),
        new Toy("Toy 6", "truck.png", "Cozy Truck", ["Price: $99.99", "Age Range: 1.5-5", "Rating: 3.9 stars"]),
    ];

    const toysContainers = [
        document.getElementById("toys1"),
        document.getElementById("toys2"),
        document.getElementById("toys3"),
    ];

    toys.forEach((toy, index) => {
        const toyItem = toy.getToyItem();
        const containerIndex = index % toysContainers.length;
        const image = toyItem.querySelector('img');

        image.style.width = '400px';
        image.style.height = '200px';

        toysContainers[containerIndex].appendChild(toyItem);
    });
});
