
const projects = [
  {
    title: "Portfolio Site",
    description: "My personal developer portfolio. Built from scratch with HTML, CSS, and vanilla JavaScript. Dark theme, responsive, deployed on Vercel.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/pyking-coder/pyking-coder.git",
    status: "live"
  },
  {
    title: "AI Terminal Assistant",
    description: "A Python script that calls the OpenAI API from the terminal. Takes user input, maintains context, and returns intelligent responses.",
    tags: ["Python", "OpenAI API", "CLI"],
    github: "https://github.com/pyking-coder/ai-scripts",
    status: "building"
  },
  {
    title: "Spaza OS",
    description: "Digital operations tool for informal traders — track stock, record sales, build a financial history. Currently in concept phase.",
    tags: ["Concept", "Full-stack", "Africa"],
    github: "#",
    status: "concept"
  }
];



function buildCards() {
  const grid = document.getElementById('projects-grid');

  // Clear the grid first
  grid.innerHTML = '';

  projects.forEach(project => {
    // Map status to CSS class and label
    const statusMap = {
      live:     { cls: 'status-live',     label: '● Live' },
      building: { cls: 'status-building', label: '◎ Building' },
      concept:  { cls: 'status-concept',  label: '○ Concept' }
    };

    const { cls, label } = statusMap[project.status] || statusMap.concept;

    // Build the tag pills HTML
    const tagsHTML = project.tags
      .map(tag => `<span class="card-tag">${tag}</span>`)
      .join('');

    // Build the card HTML
    const card = document.createElement('a');
    card.className = 'project-card';
    card.href = project.github;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.setAttribute('aria-label', project.title);

    card.innerHTML = `
      <div class="card-header">
        <span class="card-title">${project.title}</span>
        <span class="card-arrow">↗</span>
      </div>
      <p class="card-desc">${project.description}</p>
      <div class="card-tags">${tagsHTML}</div>
      <span class="card-status ${cls}">${label}</span>
    `;

    grid.appendChild(card);
  });
}

// Run when the page loads
buildCards();