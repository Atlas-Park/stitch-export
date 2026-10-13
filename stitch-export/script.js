const menuButton = document.querySelector('.menu-button');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

menuButton.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navLinks.forEach((link) => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const sections = document.querySelectorAll('main section[id]');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55%', threshold: 0 });
sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach((item) => revealObserver.observe(item));

document.getElementById('copy-email').addEventListener('click', async (event) => {
  try {
    await navigator.clipboard.writeText('contact@seoyun.design');
    const oldLabel = event.currentTarget.textContent;
    event.currentTarget.textContent = '복사 완료!';
    window.setTimeout(() => { event.currentTarget.textContent = oldLabel; }, 1800);
  } catch {
    window.location.href = 'mailto:contact@seoyun.design';
  }
});
