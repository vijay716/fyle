document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("contactFormModal");
    var btn = document.getElementById("contactUsBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
/*---------------*/
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

slides.forEach(slide => {
    slide.addEventListener('mouseover', () => {
        if (!slide.querySelector('.service-card')) {
            slide.innerHTML = `
                <div class="service-card">
                    <h4>WEB DEVELOPMENT</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button onclick="window.open('https://fylehq.com', '_blank')">Read more</button>
                </div>
            `;
        }
    });
});

setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
function showDescription(index) {
    // Hide all descriptions
    const descriptions = document.querySelectorAll('.third-descriptions > div');
    descriptions.forEach(desc => desc.classList.remove('active-description'));

    // Show the selected description
    document.getElementById(`desc-${index}`).classList.add('active-description');
}