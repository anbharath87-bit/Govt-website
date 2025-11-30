// Simple data list. Replace image URLs with your real images in the same folder (or remote links).
const FACILITIES = [
  {
    id: 1,
    name: "Karnataka Health Card",
    short: "Health scheme for eligible citizens.",
    about: "Karnataka Health Card provides subsidized healthcare & cashless treatment at empaneled hospitals. Eligibility & process details available on the official portal.",
    image: "https://via.placeholder.com/640x400?text=Health+Card",
    apply_url: "https://sevasindhu.karnataka.gov.in",
    category: "new",
    launch_date: "2025-11-01"
  },
  {
    id: 2,
    name: "Skill Development Hub",
    short: "Vocational training & placement support.",
    about: "State-run centers offering short-term courses, certification, and placement assistance across districts.",
    image: "https://via.placeholder.com/640x400?text=Skill+Hub",
    apply_url: "https://sevasindhu.karnataka.gov.in",
    category: "new",
    launch_date: "2025-10-15"
  },
  {
    id: 3,
    name: "Community Health Clinic",
    short: "Primary healthcare centres in rural areas.",
    about: "Local clinics delivering basic diagnostics, maternal care and vaccination services free of cost.",
    image: "https://via.placeholder.com/640x400?text=Community+Clinic",
    apply_url: "https://sevasindhu.karnataka.gov.in",
    category: "past",
    launch_date: "2024-06-15"
  },
  {
    id: 4,
    name: "Women Self-help Support",
    short: "Loans & micro-enterprise training for SHGs.",
    about: "Support and micro-credit for self help groups with training in entrepreneurship and linkages to bank loans.",
    image: "https://via.placeholder.com/640x400?text=Women+SHG",
    apply_url: "https://sevasindhu.karnataka.gov.in",
    category: "past",
    launch_date: "2023-12-01"
  }
];

// ---------- Rendering ----------
const gridEl = document.getElementById('grid');
const carouselTrack = document.getElementById('carousel-track');
const pastList = document.getElementById('past-list');

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

  // Past launches
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

// ---------- Modal logic ----------
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const aboutBtn = document.getElementById('about-btn');
const applyLink = document.getElementById('apply-link');
const aboutFull = document.getElementById('about-full');
