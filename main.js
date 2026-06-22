// ============================================================
// JUNG-MIN YOON PORTFOLIO — interactions
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Nav scroll state ---- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Mobile nav toggle ---- */
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  /* ---- Reveal-on-scroll ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => io.observe(el));

    // Safety net: ensure nothing stays invisible if observers misbehave
    // (e.g. zero-height containers, unusual embed contexts).
    setTimeout(() => {
      revealEls.forEach(el => el.classList.add('in'));
    }, 4000);
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---- Pause other videos when one plays ---- */
  const videos = document.querySelectorAll('video');
  videos.forEach(v => {
    v.addEventListener('play', () => {
      videos.forEach(other => { if (other !== v) other.pause(); });
    });
  });

});
