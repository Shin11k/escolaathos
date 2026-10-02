document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) window.lucide.createIcons();

  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav-links');

  if (btn && nav) {
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }));
  }

  const path = window.location.pathname.replace(/\/index\.html$/, '/');
  const isHome = path === '/' || path.endsWith('/escolaathos/');

  if (isHome) {
    const sections = [...document.querySelectorAll('main section[id], footer[id]')];
    const hashLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];

    const sync = () => {
      let id = 'home';
      const y = window.scrollY + 120;

      sections.forEach(sec => {
        if (sec.offsetTop <= y) id = sec.id;
      });

      hashLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + id);
      });
    };

    window.addEventListener('scroll', sync, { passive: true });
    sync();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const rail = document.querySelector('.testi-carousel');
  const prev = document.querySelector('.testi-prev');
  const next = document.querySelector('.testi-next');

  if (rail && prev && next) {
    const step = () => {
      const card = rail.querySelector('.testi-card');
      return card ? card.getBoundingClientRect().width + 18 : 320;
    };

    prev.addEventListener('click', () => rail.scrollBy({ left: -step(), behavior: 'smooth' }));
    next.addEventListener('click', () => rail.scrollBy({ left: step(), behavior: 'smooth' }));
  }
});
