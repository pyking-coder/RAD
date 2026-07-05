const projects = [
  { cat: 'Construction',    title: 'Residential Build',          loc: 'Johannesburg', desc: 'Full residential construction project delivered on time and within budget. From foundation to final finish.', icon: '🏗️', tags: ['Residential', 'Full Build', 'Gauteng'], type: 'photo' },
  { cat: 'Construction',    title: 'Foundation Work',            loc: 'Gauteng',      desc: 'Structural foundation work for a new residential development across Gauteng.', icon: '🏗️', tags: ['Foundation', 'Structural', 'Gauteng'], type: 'photo' },
  { cat: 'Video',           title: 'Project Showcase',           loc: '',             desc: 'A walkthrough of one of our flagship projects from start to finish.', icon: '🎬', tags: ['Video', 'Showcase'], type: 'video', src: 'assets/videos/video-01.mp4' },
  { cat: 'Construction',    title: 'Commercial Build',           loc: 'Sandton',      desc: 'Commercial office build in Sandton — from raw structure to completed interior.', icon: '🏢', tags: ['Commercial', 'Sandton', 'Office'], type: 'photo' },
  { cat: 'Construction',    title: 'Renovation Project',         loc: 'Soweto',       desc: 'Full property renovation including structural repairs and complete interior redesign.', icon: '🏗️', tags: ['Renovation', 'Soweto', 'Residential'], type: 'photo' },
  { cat: 'Construction',    title: 'Property Maintenance',       loc: 'Pretoria',     desc: 'Ongoing maintenance contract for a residential portfolio in Pretoria.', icon: '🔧', tags: ['Maintenance', 'Pretoria', 'Ongoing'], type: 'photo' },
  { cat: 'Construction',    title: 'Roofing Project',            loc: 'Midrand',      desc: 'Full roof replacement and waterproofing for a commercial property in Midrand.', icon: '🏗️', tags: ['Roofing', 'Waterproofing', 'Midrand'], type: 'photo' },
  { cat: 'Video',           title: 'On-Site Walkthrough',        loc: '',             desc: 'An on-site walkthrough of an active KMFG construction project.', icon: '🎬', tags: ['Video', 'On-Site'], type: 'video', src: 'assets/videos/video-02.mp4' },
  { cat: 'Construction',    title: 'Interior Finishing',         loc: 'Johannesburg', desc: 'High-quality interior finishing work including plastering, painting and tiling.', icon: '🏠', tags: ['Interior', 'Finishing', 'Johannesburg'], type: 'photo' },
  { cat: 'Construction',    title: 'Exterior Works',             loc: 'Gauteng',      desc: 'Exterior rendering, painting and landscaping for a residential property.', icon: '🏗️', tags: ['Exterior', 'Rendering', 'Gauteng'], type: 'photo' },
  { cat: 'Security',        title: 'Automated Gate Installation',loc: 'Pretoria',     desc: 'Full automated gate motor installation with integrated access control.', icon: '🔒', tags: ['Automated Gate', 'Pretoria', 'Access Control'], type: 'photo' },
  { cat: 'Security',        title: 'Gate Motor Installation',    loc: 'Midrand',      desc: 'Gate motor supply and installation for a residential estate in Midrand.', icon: '⚙️', tags: ['Gate Motor', 'Midrand', 'Residential'], type: 'photo' },
  { cat: 'Security',        title: 'Perimeter Fencing',          loc: 'Johannesburg', desc: 'Steel perimeter fencing design, fabrication and installation.', icon: '🛡️', tags: ['Fencing', 'Perimeter', 'Steel'], type: 'photo' },
  { cat: 'Security',        title: 'Structural Welding',         loc: 'Centurion',    desc: 'Professional structural welding for security barriers and gate frames.', icon: '🔩', tags: ['Welding', 'Structural', 'Centurion'], type: 'photo' },
  { cat: 'Security',        title: 'Access Control System',      loc: 'Sandton',      desc: 'Complete access control system including intercom, keypad and remote access.', icon: '🔐', tags: ['Access Control', 'Intercom', 'Sandton'], type: 'photo' },
  { cat: 'Video',           title: 'Team In Action',             loc: '',             desc: 'The KMFG Solutions team at work — delivering on the promise of quality.', icon: '🎬', tags: ['Video', 'Team'], type: 'video', src: 'assets/videos/video-03.mp4' },
  { cat: 'Security',        title: 'Electric Fencing',           loc: 'Roodepoort',   desc: 'Electric fence installation and energizer setup for a residential property.', icon: '⚡', tags: ['Electric Fence', 'Roodepoort', 'Residential'], type: 'photo' },
  { cat: 'Security',        title: 'CCTV Installation',          loc: 'Soweto',       desc: 'Multi-camera CCTV system installation and configuration for a commercial property.', icon: '📷', tags: ['CCTV', 'Soweto', 'Commercial'], type: 'photo' },
  { cat: 'Supply Chain',    title: 'Large Scale Procurement',    loc: 'Cape Town',    desc: 'End-to-end procurement management for a large commercial project in Cape Town.', icon: '📦', tags: ['Procurement', 'Cape Town', 'Commercial'], type: 'photo' },
  { cat: 'Supply Chain',    title: 'Logistics Management',       loc: 'Durban',       desc: 'Full logistics coordination and delivery management for a retail operation in Durban.', icon: '🚛', tags: ['Logistics', 'Durban', 'Retail'], type: 'photo' },
  { cat: 'Supply Chain',    title: 'Vendor Relations',           loc: 'Johannesburg', desc: 'Supplier onboarding and vendor relationship management across multiple categories.', icon: '🤝', tags: ['Vendor', 'Suppliers', 'Johannesburg'], type: 'photo' },
  { cat: 'Supply Chain',    title: 'Inventory Management',       loc: 'Pretoria',     desc: 'Inventory tracking, stock management and reporting for a distribution client.', icon: '📋', tags: ['Inventory', 'Stock', 'Pretoria'], type: 'photo' },
  { cat: 'Supply Chain',    title: 'Cost Optimisation',          loc: 'Gauteng',      desc: 'Supply chain audit and cost optimisation project resulting in significant savings.', icon: '📊', tags: ['Cost', 'Optimisation', 'Audit'], type: 'photo' },
  { cat: 'Marketing',       title: 'Brand Campaign',             loc: 'Johannesburg', desc: 'Full brand strategy and campaign execution for a growing SME.', icon: '📣', tags: ['Brand', 'Campaign', 'SME'], type: 'photo' },
  { cat: 'Marketing',       title: 'Digital Marketing',          loc: 'Sandton',      desc: 'Digital marketing strategy covering SEO, paid ads and email marketing.', icon: '💻', tags: ['Digital', 'SEO', 'Ads'], type: 'photo' },
  { cat: 'Marketing',       title: 'Social Media Campaign',      loc: 'Johannesburg', desc: 'Social media content strategy and campaign management across platforms.', icon: '📱', tags: ['Social Media', 'Content', 'Platforms'], type: 'photo' },
  { cat: 'Marketing',       title: 'Content Creation',           loc: 'Pretoria',     desc: 'Photography, copywriting and design for a client rebrand.', icon: '🎨', tags: ['Content', 'Photography', 'Design'], type: 'photo' },
  { cat: 'Project Mgmt',    title: 'Multi-Site Rollout',         loc: 'Gauteng',      desc: 'Project management of a multi-site construction rollout across Gauteng — on time, on budget.', icon: '📋', tags: ['Multi-Site', 'Rollout', 'Gauteng'], type: 'photo' },
  { cat: 'Project Mgmt',    title: 'Site Planning',              loc: 'Johannesburg', desc: 'Detailed site planning, scheduling and resource allocation for a large build.', icon: '📐', tags: ['Planning', 'Scheduling', 'Johannesburg'], type: 'photo' },
  { cat: 'Project Mgmt',    title: 'Stakeholder Meeting',        loc: 'Sandton',      desc: 'Client and stakeholder engagement sessions managing expectations and updates.', icon: '🤝', tags: ['Stakeholders', 'Client', 'Sandton'], type: 'photo' },
  { cat: 'Project Mgmt',    title: 'Quality Assurance',          loc: 'Midrand',      desc: 'On-site quality assurance inspections and reporting for a commercial project.', icon: '✅', tags: ['QA', 'Inspection', 'Midrand'], type: 'photo' },
  { cat: 'Project Mgmt',    title: 'Project Handover',           loc: 'Pretoria',     desc: 'Final project handover including documentation, walkthrough and sign-off.', icon: '🏁', tags: ['Handover', 'Sign-Off', 'Pretoria'], type: 'photo' },
  { cat: 'Construction',    title: 'Site Progress',              loc: 'Gauteng',      desc: 'Mid-project site progress documentation and milestone review.', icon: '🏗️', tags: ['Progress', 'Milestone', 'Gauteng'], type: 'photo' },
];

let currentIndex  = 0;
let visibleIndices = projects.map((_, i) => i);

// ── Filter ────────────────────────────────────────────
const filterBtns = document.querySelectorAll('.g-filter-btn');
const cards      = document.querySelectorAll('.g-card');
const emptyState = document.getElementById('galleryEmpty');
const countNum   = document.getElementById('countNum');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    let visible  = 0;
    visibleIndices = [];

    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      if (match) {
        card.style.display = 'block';
        card.style.opacity = '0';
        card.style.transform = 'translateY(16px)';
        setTimeout(() => {
          card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          card.style.opacity    = '1';
          card.style.transform  = 'translateY(0)';
        }, visible * 60);
        visibleIndices.push(+card.dataset.index);
        visible++;
      } else {
        card.style.opacity   = '0';
        card.style.transform = 'translateY(8px)';
        setTimeout(() => { card.style.display = 'none'; }, 350);
      }
    });

    countNum.textContent = visible;
    emptyState.classList.toggle('visible', visible === 0);
  });
});

// ── Lightbox ──────────────────────────────────────────
const lightbox = document.getElementById('lightbox');
const lbMedia  = document.getElementById('lbMedia');

function openLightbox(index) {
  currentIndex = index;
  renderLightbox();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  // Stop any playing video
  const vid = lbMedia.querySelector('video');
  if (vid) vid.pause();
}

function renderLightbox() {
  const p   = projects[currentIndex];
  const pos = visibleIndices.indexOf(currentIndex) + 1;

  document.getElementById('lbCat').textContent    = p.cat;
  document.getElementById('lbTitle').textContent  = p.title;
  document.getElementById('lbLoc').textContent    = p.loc ? '📍 ' + p.loc : '';
  document.getElementById('lbDesc').textContent   = p.desc;
  document.getElementById('lbCounter').textContent = pos + ' / ' + visibleIndices.length;
  document.getElementById('lbTags').innerHTML     = p.tags.map(t => `<span class="g-lb-tag">${t}</span>`).join('');

  // Clear and rebuild media area
  lbMedia.innerHTML = '<div class="g-lb-media-shimmer"></div>';

  if (p.type === 'video') {
    const vid = document.createElement('video');
    vid.src         = p.src;
    vid.controls    = true;
    vid.autoplay    = true;
    vid.className   = 'g-lb-video';
    vid.style.cssText = 'width:100%;height:100%;object-fit:cover;';
    lbMedia.appendChild(vid);
  } else {
    const icon = document.createElement('div');
    icon.className   = 'g-lb-icon';
    icon.textContent = p.icon;
    lbMedia.appendChild(icon);
  }
}

function navigateLightbox(dir) {
  const pos  = visibleIndices.indexOf(currentIndex);
  const next = pos + dir;
  if (next >= 0 && next < visibleIndices.length) {
    const vid = lbMedia.querySelector('video');
    if (vid) vid.pause();
    currentIndex = visibleIndices[next];
    renderLightbox();
  }
}

// ── Event listeners ───────────────────────────────────
document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbBackdrop').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', () => navigateLightbox(-1));
document.getElementById('lbNext').addEventListener('click', () => navigateLightbox(1));

document.querySelectorAll('.g-hover-btn').forEach(btn => {
  btn.addEventListener('click', e => { e.stopPropagation(); openLightbox(+btn.dataset.index); });
});

document.querySelectorAll('.g-video-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => { e.stopPropagation(); openLightbox(+overlay.dataset.index); });
});

document.querySelectorAll('.g-card').forEach(card => {
  card.addEventListener('click', () => openLightbox(+card.dataset.index));
});

// Video hover preview
document.querySelectorAll('.g-card-video').forEach(card => {
  const vid = card.querySelector('.g-video');
  if (!vid) return;
  card.addEventListener('mouseenter', () => vid.play().catch(() => {}));
  card.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
});

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowRight') navigateLightbox(1);
  if (e.key === 'ArrowLeft')  navigateLightbox(-1);
});