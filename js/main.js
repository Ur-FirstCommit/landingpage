import {
  aboutPoints,
  faqItems,
  footerDescription,
  howItWorks,
  prizes,
  prizeNote,
  siteConfig,
  socialLinks,
  sponsors,
  timeline,
  whyCards,
} from './data.js';

/* ==========================================================================
   Icons (inline SVG strings)
   ========================================================================== */

const icons = {
  users: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  calendar: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  chart: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  layers: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  team: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="23" y1="11" x2="17" y2="11"/></svg>',
  spark: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3"/><path d="M12 18v3"/><path d="M3 12h3"/><path d="M18 12h3"/><path d="M5.6 5.6l2.1 2.1"/><path d="M16.3 16.3l2.1 2.1"/><path d="M5.6 18.4l2.1-2.1"/><path d="M16.3 7.7l2.1-2.1"/></svg>',
  doc: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  chevron: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
  twitter: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  discord: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>',
  github: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>',
  email: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
};

const whyEmojis = {
  build: '🛠️',
  rocket: '🚀',
  connect: '🤝',
  showcase: '✨',
};

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ==========================================================================
   Render Functions
   ========================================================================== */

function renderAbout() {
  const grid = document.getElementById('about-grid');
  if (!grid) return;

  grid.innerHTML = aboutPoints
    .map(
      (point, index) => `
      <article class="about__card reveal-item" style="--reveal-index: ${index}">
        <div class="about__icon" aria-hidden="true">${icons[point.icon] || ''}</div>
        <h3 class="about__card-title">${point.title}</h3>
        <p class="about__card-text">${point.text}</p>
      </article>
    `
    )
    .join('');
}

function renderWhy() {
  const grid = document.getElementById('why-grid');
  if (!grid) return;

  grid.innerHTML = whyCards
    .map(
      (card, index) => `
      <article class="why__card reveal-item" style="--reveal-index: ${index}">
        <div class="why__icon" aria-hidden="true">${whyEmojis[card.icon] || '⭐'}</div>
        <h3 class="why__card-title">${card.title}</h3>
        <p class="why__card-text">${card.text}</p>
      </article>
    `
    )
    .join('');
}

function renderSteps() {
  const list = document.getElementById('steps-list');
  if (!list) return;

  list.innerHTML = howItWorks
    .map(
      (step, index) => `
      <li class="steps__item reveal-item" style="--reveal-index: ${index}">
        <span class="steps__number" aria-hidden="true">${step.step}</span>
        <div class="steps__content">
          <h3 class="steps__title">${step.title}</h3>
          <p class="steps__text">${step.text}</p>
        </div>
      </li>
    `
    )
    .join('');
}

function renderPrizes() {
  const grid = document.getElementById('prizes-grid');
  const note = document.getElementById('prizes-note');
  if (!grid) return;

  grid.innerHTML = prizes
    .map(
      (prize, index) => `
      <article class="prize-card${prize.highlight ? ' prize-card--highlight' : ''} reveal-item" style="--reveal-index: ${index}">
        ${prize.highlight ? '<span class="prize-card__badge">Top Award</span>' : ''}
        <h3 class="prize-card__name">${prize.name}</h3>
        <p class="prize-card__description">${prize.description}</p>
      </article>
    `
    )
    .join('');

  if (note) {
    note.innerHTML = `<strong>Note:</strong> ${prizeNote}`;
  }
}

function renderSponsors() {
  const grid = document.getElementById('sponsors-grid');
  if (!grid) return;

  grid.innerHTML = sponsors
    .map(
      (sponsor) => `
      <a href="${sponsor.url}" class="sponsor-card" target="_blank" rel="noopener noreferrer" aria-label="${sponsor.name} — ${sponsor.description}">
        <div class="sponsor-card__logo">
          <img src="${sponsor.logo}" alt="${sponsor.name} logo" width="160" height="48" loading="lazy">
        </div>
        <span class="sponsor-card__name">${sponsor.name}</span>
        <p class="sponsor-card__description">${sponsor.description}</p>
      </a>
    `
    )
    .join('');
}

function renderTimeline() {
  const list = document.getElementById('timeline-list');
  if (!list) return;

  list.innerHTML = timeline
    .map(
      (item, index) => `
      <article class="timeline__item reveal-item" style="--reveal-index: ${index}">
        <span class="timeline__marker" aria-hidden="true"></span>
        <time class="timeline__date" datetime="">${item.date}</time>
        <h3 class="timeline__title">${item.title}</h3>
        <p class="timeline__description">${item.description}</p>
      </article>
    `
    )
    .join('');
}

function renderFAQ() {
  const list = document.getElementById('faq-list');
  if (!list) return;

  list.innerHTML = faqItems
    .map(
      (item, index) => `
      <details class="faq__item reveal-item" role="listitem" style="--reveal-index: ${index}"${index === 0 ? ' open' : ''}>
        <summary class="faq__question">
          ${item.question}
          <span class="faq__icon" aria-hidden="true">${icons.chevron}</span>
        </summary>
        <div class="faq__answer">
          <p>${item.answer}</p>
        </div>
      </details>
    `
    )
    .join('');
}

function renderFooter() {
  const description = document.getElementById('footer-description');
  const social = document.getElementById('footer-social');
  const year = document.getElementById('footer-year');

  if (description) description.textContent = footerDescription;

  if (social) {
    social.innerHTML = socialLinks
      .map(
        (link) => `
        <li>
          <a href="${link.href}"${link.href === '#' ? ' aria-disabled="true"' : ''}>
            <span aria-hidden="true">${icons[link.icon] || ''}</span>
            ${link.label}
          </a>
        </li>
      `
      )
      .join('');
  }

  if (year) year.textContent = new Date().getFullYear();
}

/* ==========================================================================
   Register Links
   ========================================================================== */

function initRegisterLinks() {
  document.querySelectorAll('.register-link').forEach((link) => {
    link.href = siteConfig.registerUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
}

/* ==========================================================================
   Scroll Reveal
   ========================================================================== */

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');

  if (prefersReducedMotion) {
    revealElements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   Header Scroll
   ========================================================================== */

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ==========================================================================
   Navigation
   ========================================================================== */

function initNavigation() {
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');
  const internalLinks = document.querySelectorAll('.nav__link, .footer__links a:not(.register-link)');

  if (!toggle || !menu) return;

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
    menu.classList.toggle('is-open');
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  internalLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.querySelectorAll('.register-link').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();
    }
  });
}

/* ==========================================================================
   Init
   ========================================================================== */

function init() {
  renderAbout();
  renderWhy();
  renderSteps();
  renderPrizes();
  renderSponsors();
  renderTimeline();
  renderFAQ();
  renderFooter();
  initRegisterLinks();
  initScrollReveal();
  initHeaderScroll();
  initNavigation();

  if (!prefersReducedMotion) {
    document.body.classList.add('is-loaded');
  }
}

document.addEventListener('DOMContentLoaded', init);
