const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("wishlist");
const heart = document.getElementById("heartPath");

function addToCart() {
    btn1.innerHTML = 'Added to cart!';
}

function wishlist() {
    btn2.innerHTML = 'Added to wishlist!';
    heart.style.fill = 'red';
}