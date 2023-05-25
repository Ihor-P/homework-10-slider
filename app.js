// Пишемо свій слайдер зображень
// відображаємо зображення та кнопки Next, Prev з боків від зображення
// При натисканні на Next - показуємо наступне зображення
// При натисканні на Prev - попереднє
// При досягненні останнього зображення – ховати кнопку Next. Аналогічно з першим зображенням та кнопкою Prev.

let image = document.querySelector(".img");

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let imagesSrc = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
];

image.src = imagesSrc[4];
let count = 4;

// disablePrevButton();

function disablePrevButton() {
    if (count <= 0) {
        prev.disabled = true;
    } else {
        prev.disabled = false;
    }
}

function disableNextButton() {
    if (count >= imagesSrc.length - 1) {
        next.disabled = true;
    } else {
        next.disabled = false;
    }
}

function nextImage() {
    count++;
    image.src = imagesSrc[count];
    disableNextButton();
    disablePrevButton();
}

function prevImage() {
    count--;
    image.src = imagesSrc[count];
    disablePrevButton();
    disableNextButton();
}

next.addEventListener("click", nextImage);
prev.addEventListener("click", prevImage);
