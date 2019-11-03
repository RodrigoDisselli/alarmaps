window.onload = intro(document.getElementById("text-box"), document.getElementById("col-phone"));

function intro(textBox, phone) {
    textBox.classList.add("intro-slide-top");
    phone.classList.add("slide-left");
}