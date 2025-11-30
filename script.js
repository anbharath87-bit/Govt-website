// updated script.js
const FACILITIES = [
  {
    id: 1,
    name: "Seva Sindhu (All-services Portal)",
    short: "Central Karnataka portal to apply for many state services & check status.",
    about: "Seva Sindhu is the unified citizen services portal for Karnataka — you can register, apply and check status for multiple state services.",
    image: "images/Seva_Sindhu_-_Online_Registration_and_Services_Portal_corpseed.webp",
    apply_url: "https://sevasindhu.karnataka.gov.in/Sevasindhu/English",
    category: "new",
    launch_date: "2025-01-01"
  },
  {
    id: 2,
    name: "Arogya Karnataka",
    short: "State health scheme providing universal coverage and cashless treatment.",
    about: "Arogya Karnataka provides health coverage and cashless treatment to eligible residents of Karnataka.",
    image: "images/arogya karanataka scheme.jpg",
    apply_url: "https://arogya.karnataka.gov.in/",
    category: "new",
    launch_date: "2024-10-15"
  },
  {
    id: 3,
    name: "Bhoomi (Land Records)",
    short: "Online land records (RTC / Pahani) and mutation services.",
    about: "Bhoomi / landrecords portal allows citizens to view Pahani, RTC, mutation status and related land services for Karnataka.",
    image: "images/RTC-Bhoomi-Karnataka.jpg",
    apply_url: "https://landrecords.karnataka.gov.in/",
    category: "past",
    launch_date: "2023-06-15"
  },
  {
    id: 4,
    name: "Gruha Jyothi",
    short: "Domestic electricity subsidy and benefits.",
    about: "Gruha Jyothi provides electricity subsidy / free units for eligible households; registration and details are available via Seva Sindhu.",
    image: "images/All-About-Karnatakas-Gruha-Jyothi-Scheme-f.avif",
    apply_url: "https://sevasindhu.karnataka.gov.in/",
    category: "past",
    launch_date: "2023-12-01"
  },
  {
    id: 5,
    name: "Kaushalya / Skill Development",
    short: "State skill development programs and courses.",
    about: "Kaushalya Karnataka and related programs offer vocational training, certification and placement support across the state.",
    image: "https://via.placeholder.com/1200x720?text=Kaushalya+Skill+Karnataka",
    apply_url: "images/kaushalya yojane.png",
    category: "new",
    launch_date: "2025-09-20"
  }
];

// ---------- Rendering ----------
const gridEl = document.getElementById('grid');
const carouselTrack = document.getElementById('carousel-track');
const pastIconsEl = document.getElementById('past-icons');

function renderAll() {
  // Grid
  gridEl.innerHTML = '';
  FACILITIES.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img loading="lazy" src="${item.image}" alt="${escapeHtml(item.name)}">
      <div class="meta">
        <h3>${escapeHtml(item.name)}</h3>
        <p>${escapeHtml(item.short)}</p>
      </div>
    `;
    card.addEventListener('click', () => openModal(item));
    gridEl.appendChild(card);
  });

  // Carousel (newly launched)
  carouselTrack.innerHTML = '';
  const newItems = FACILITIES.filter(f => f.category === 'new');
  newItems.forEach(item => {
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    img.className = 'carousel-item';
    img.loading = 'lazy';
    img.addEventListener('click', () => openModal(item));
    carouselTrack.appendChild(img);
  });

  // Past icons (below carousel)
  pastIconsEl.innerHTML = '';
  const past = FACILITIES.filter(f => f.category === 'past').sort((a,b)=> (b.launch_date || '').localeCompare(a.launch_date || ''));
  past.forEach(item => {
    const wrap = document.createElement('div');
    wrap.className = 'past-icon';
    wrap.innerHTML = `
      <img src="${item.image}" alt="${escapeHtml(item.name)}">
      <small>${escapeHtml(item.name)}</small>
    `;
    wrap.addEventListener('click', () => openModal(item));
    pastIconsEl.appendChild(wrap);
  });
}

// ---------- Modal logic ----------
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const aboutBtn = document.getElementById('about-btn');
const applyLink = document.getElementById('apply-link');
const aboutFull = document.getElementById('about-full');
const aboutText = document.getElementById('about-text');
const modalClose = document.getElementById('modal-close');

let currentItem = null;

function openModal(item) {
  currentItem = item;
  modalImg.src = item.image;
  modalImg.alt = item.name;
  modalTitle.textContent = item.name;
  modalDesc.textContent = item.short;
  applyLink.href = item.apply_url || '#';
  aboutFull.classList.add('hidden');
  aboutText.textContent = item.about || 'No further details available.';
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  modalClose.focus();
}

aboutBtn.addEventListener('click', () => {
  aboutFull.classList.toggle('hidden');
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
});

function closeModal() {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  currentItem = null;
}

// ---------- Carousel controls & auto-scroll ----------
document.getElementById('prev').addEventListener('click', () => {
  carouselTrack.scrollBy({left: -420, behavior: 'smooth'});
});
document.getElementById('next').addEventListener('click', () => {
  carouselTrack.scrollBy({left: 420, behavior: 'smooth'});
});

// Auto-scroll interval
let autoScrollTimer = null;
function startAutoScroll(){
  stopAutoScroll();
  autoScrollTimer = setInterval(()=> {
    // scroll by one visible card width
    carouselTrack.scrollBy({left: 440, behavior: 'smooth'});
    // if near the end, jump to start (smooth jump)
    const maxScroll = carouselTrack.scrollWidth - carouselTrack.clientWidth;
    if (carouselTrack.scrollLeft + 450 >= maxScroll){
      // small timeout to allow smooth to finish then go to start
      setTimeout(()=> carouselTrack.scrollTo({left:0, behavior:'smooth'}), 600);
    }
  }, 3000); // every 3s
}
function stopAutoScroll(){
  if(autoScrollTimer) { clearInterval(autoScrollTimer); autoScrollTimer = null; }
}

// Pause on hover / focus
carouselTrack.addEventListener('mouseenter', stopAutoScroll);
carouselTrack.addEventListener('mouseleave', startAutoScroll);
carouselTrack.addEventListener('focusin', stopAutoScroll);
carouselTrack.addEventListener('focusout', startAutoScroll);

// ---------- small helpers ----------
function escapeHtml(text){
  return String(text).replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

window.addEventListener('load', () => {
  renderAll();
  // small delay before starting auto scroll so initial render stabilizes
  setTimeout(startAutoScroll, 800);
});
