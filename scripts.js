// JavaScript for dropdown menu toggle
document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("mouseover", function () {
            this.querySelector(".dropdown-content").style.display = "block";
        });

        dropdown.addEventListener("mouseout", function () {
            this.querySelector(".dropdown-content").style.display = "none";
        });
    });
});
// function showItem(index) {
//     const carouselInner = document.querySelector('.carousel-inner');
//     const offset = -index * 100; // Calculate the offset based on the index
//     carouselInner.style.transform = `translateX(${offset}%)`;
// }
// function showItem(index) {
//     const carouselInner = document.querySelector('.carousel-inner');
//     const offset = -index * 100; // Calculate the offset based on the index
//     carouselInner.style.transform = `translateX(${offset}%)`;

//     // Remove 'active' class from all items
//     items.forEach(item => {
//         item.classList.remove('active');
//     });
//     // Add 'active' class to the current item
//     items[index].classList.add('active');
// }
function showItem(index) {
    console.log("Current Index:", index); // Debugging
    const carouselInner = document.querySelector('.carousel-inner');
    const offset = -index * 100; // Calculate the offset based on the index
    carouselInner.style.transform = `translateX(${offset}%)`;

    // Remove 'active' class from all items
    items.forEach(item => {
        item.classList.remove('active');
    });
    // Add 'active' class to the current item
    items[index].classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".carousel-control-next").addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    });

    document.querySelector(".carousel-control-prev").addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showItem(currentIndex);
    });
});

// Auto slide every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
}, 5000);


