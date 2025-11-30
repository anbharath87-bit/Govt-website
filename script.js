// script.js
const FACILITIES = [
  {
    id: 1,
    name: "Seva Sindhu (All-services Portal)",
    short: "Central Karnataka portal to apply for many state services & check status.",
    about: "Seva Sindhu is the unified citizen services portal for Karnataka — you can register, apply and check status for multiple state services.",
    image: "https://via.placeholder.com/640x400?text=Seva+Sindhu",
    apply_url: "https://sevasindhu.karnataka.gov.in/Sevasindhu/English",
    category: "new",
    launch_date: "2025-01-01"
  },
  {
    id: 2,
    name: "Arogya Karnataka / AB-ARK (Health Scheme)",
    short: "State health scheme providing universal coverage and cashless treatment.",
    about: "Arogya Karnataka (Ayushman Bharat - Arogya Karnataka) provides health coverage and treatment support to eligible residents of Karnataka.",
    image: "https://via.placeholder.com/640x400?text=Arogya+Karnataka",
    apply_url: "https://arogya.karnataka.gov.in/",
    category: "new",
    launch_date: "2024-10-15"
  },
  {
    id: 3,
    name: "Bhoomi (Land Records / RTC)",
    short: "Online land records (RTC / Pahani) and mutation services.",
    about: "Bhoomi / landrecords portal allows citizens to view Pahani, RTC, mutation status and related land services for Karnataka.",
    image: "https://via.placeholder.com/640x400?text=Bhoomi+Land+Records",
    apply_url: "https://landrecords.karnataka.gov.in/",
    category: "past",
    launch_date: "2023-06-15"
  },
  {
    id: 4,
    name: "Gruha Jyothi (Domestic Electricity Benefit)",
    short: "Electricity subsidy / free units for eligible domestic households (state scheme info via Seva Sindhu).",
    about: "Gruha Jyothi provides electricity subsidy / free units for eligible households; registration and details are available via Seva Sindhu and CESCMysore references.",
    image: "https://via.placeholder.com/640x400?text=Gruha+Jyothi",
    apply_url: "https://sevasindhu.karnataka.gov.in/",
    category: "past",
    launch_date: "2023-12-01"
  },
  {
    id: 5,
    name: "Kaushalya / Skill Development",
    short: "State skill development programs and courses (Kaushalya portals).",
    about: "Kaushalya Karnataka and related skill development programs offer vocational training, certification and placement support across the state.",
    image: "https://via.placeholder.com/640x400?text=Kaushalya+Skill+Karnataka",
    apply_url: "https://kaushalya.karnataka.gov.in/en",
    category: "new",
    launch_date: "2025-09-20"
  }
];

// ---------- Rendering (same as earlier) ----------
const gridEl = document.getElementById('grid');
const carouselTrack = document.getElementById('carousel-track');
const pastList = document.getElementById('past-list');

function renderAll() {
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

  pastList.innerHTML = '';
  const past = FACILITIES.filter(f => f.category === 'past').sort((a,b)=> (b.launch_date || '').localeCompare(a.launch_date || ''));
  past.forEach(item => {
    const row = document.createElement('div');
    row.className = 'past-row';
    row.innerHTML = `
      <img src="${item.image}" alt="${escapeHtml(item.name)}">
      <div class="info">
        <strong>${escapeHtml(item.name)}</strong>
        <p>${escapeHtml(item.short)}</p>
        <small>Launched: ${escapeHtml(item.launch_date || '—')}</small>
      </div>
    `;
    row.addEventListener('click', () => openModal(item));
    pastList.appendChild(row);
  });
}

// ---------- Modal ----------
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

document.getElementById('prev').addEventListener('click', () => {
  carouselTrack.scrollBy({left: -280, behavior: 'smooth'});
});
document.getElementById('next').addEventListener('click', () => {
  carouselTrack.scrollBy({left: 280, behavior: 'smooth'});
});

function escapeHtml(text){
  return String(text).replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

window.addEventListener('load', renderAll);
