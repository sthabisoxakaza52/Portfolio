/**
 * Projects Gallery, Skills Cards & Modal Management - High Reference Fidelity
 */

(function () {
  'use strict';

  const projectsGrid = document.getElementById('projects-grid');
  const skillsGrid = document.getElementById('skills-grid');
  const filterButtons = document.querySelectorAll('.filter-pill');
  const modalBackdrop = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function renderProjects(filter = 'all') {
    if (!projectsGrid || !window.PORTFOLIO_DATA) return;

    const data = window.PORTFOLIO_DATA.projects;
    const filtered = filter === 'all' ? data : data.filter(p => p.category === filter);

    projectsGrid.innerHTML = filtered.map(project => `
      <article class="project-poster-card ${project.themeClass}" data-project-id="${project.id}" role="button" tabindex="0" aria-label="View details for ${project.title}">
        <!-- Top Row -->
        <div class="project-card-top">
          <span class="project-motif-icon">❖</span>
          <span class="project-category-text">${project.tagLabel}</span>
        </div>

        <!-- Center Framed Artwork Box -->
        <div class="project-center-frame">
          <div class="tech-canvas-inner">
            ${project.techIconSvg}
            <span class="tech-badge-pill">${project.techBadge}</span>
          </div>
        </div>

        <!-- Bottom Bold Centered Headline -->
        <div class="project-card-bottom">
          <h3 class="project-main-headline">${project.headline}</h3>
        </div>
      </article>
    `).join('');

    document.querySelectorAll('.project-poster-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-project-id');
        openProjectModal(id);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const id = card.getAttribute('data-project-id');
          openProjectModal(id);
        }
      });
    });
  }

  function renderSkills() {
    if (!skillsGrid || !window.PORTFOLIO_DATA || !window.PORTFOLIO_DATA.skills) return;

    skillsGrid.innerHTML = window.PORTFOLIO_DATA.skills.map(skill => `
      <div class="skill-gradient-card ${skill.gradClass}">
        <!-- Top: Category + Return Arrow -->
        <div class="skill-card-top">
          <span class="skill-name-title">${skill.domain}</span>
          <span class="skill-arrow-icon">↩</span>
        </div>

        <!-- Bottom: Glyph + Punchy Text -->
        <div class="skill-card-bottom">
          <div class="skill-glyph-icon">
            ${skill.glyphSvg}
          </div>
          <p class="skill-punchline">${skill.description}</p>
        </div>
      </div>
    `).join('');
  }

  function openProjectModal(projectId) {
    const project = window.PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project || !modalBackdrop) return;

    document.getElementById('modal-category').textContent = project.categoryLabel;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-desc').textContent = project.summary;

    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = project.technologies.map(t => `<span class="modal-tech-tag">${t}</span>`).join('');

    const featuresContainer = document.getElementById('modal-features');
    featuresContainer.innerHTML = project.features.map(f => `<li>${f}</li>`).join('');

    const actionsContainer = document.getElementById('modal-actions');
    let actionsHtml = '';
    if (project.githubUrl) {
      actionsHtml += `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="modal-btn-primary">View Source Code on GitHub →</a>`;
    }
    if (project.liveUrl) {
      actionsHtml += `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="modal-btn-secondary">Visit Live Site ↗</a>`;
    }
    actionsContainer.innerHTML = actionsHtml;

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderProjects(category);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
    renderSkills();
  });
})();
