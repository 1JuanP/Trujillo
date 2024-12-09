

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("mouseover", function() {
            link.style.color = "#ff9800";
        });

        link.addEventListener("mouseout", function() {
            link.style.color = "white";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const images = ["trujillo1.jpg", "trujillo2.jpg", "trujillo3.jpeg"];
    let currentIndex = 0;

    const slider = document.getElementById("slider");

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        slider.src = images[currentIndex];
    }, 3000); 
});

