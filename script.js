// SAMPLE GOVERNMENT FACILITY SLIDES
const slidesData = [
    {
        title: "Seva Sindhu Portal",
        img: "",
        link: "https://sevasindhu.karnataka.gov.in/Sevasindhu/English"
    },
    {
        title: "Karnataka Indira Canteen",
        img: "https://cdn.siasat.com/wp-content/uploads/2021/08/indira-canteen.jpg",
        link: "https://ksdb.karnataka.gov.in/"
    },
    {
        title: "Bhoomi Online Land Records",
        img: "https://bhoomi.karnataka.gov.in/images/home_banner.jpg",
        link: "https://bhoomi.karnataka.gov.in/"
    }
];

// Generate Slides
const carousel = document.getElementById("carousel");
const dotsContainer = document.getElementById("dots");

slidesData.forEach((slide, index) => {
    carousel.innerHTML += `
        <div class="slide">
            <img src="${slide.img}" alt="${slide.title}">
            <div class="slide-content">
                <h2>${slide.title}</h2>
                <button class="cta-btn" onclick="window.open('${slide.link}', '_blank')">
                    Visit to Apply
                </button>
            </div>
        </div>
    `;

    dotsContainer.innerHTML += `
        <span class="dot" onclick="goToSlide(${index})"></span>
    `;
});

let currentSlide = 0;
const totalSlides = slidesData.length;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;

    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === currentSlide);
    });
}

// Next / Prev
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(n) {
    currentSlide = n;
    updateCarousel();
}

// Auto Scroll
setInterval(nextSlide, 3500);

// Init
updateCarousel();
