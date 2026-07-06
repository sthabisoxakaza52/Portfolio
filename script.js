/* Typing animation */
const words = ['Cloud Engineering', 'AWS Infrastructure', 'DevOps Practices', 'Infrastructure as Code', 'Automation', 'Security', 'Scalability'];
let wordIndex = 0, charIndex = 0, deleting = false;

function type() {
    const el = document.querySelector('.typing-text');
    if (!el) return;
    const word = words[wordIndex];
    el.textContent = deleting ? word.slice(0, --charIndex) : word.slice(0, ++charIndex);
    let delay = deleting ? 40 : 90;
    if (!deleting && charIndex === word.length) { delay = 2500; deleting = true; }
    else if (deleting && charIndex === 0) { deleting = false; wordIndex = (wordIndex + 1) % words.length; delay = 500; }
    setTimeout(type, delay);
}

/* Navigation */
const mobileBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

mobileBtn?.addEventListener('click', () => navMenu.classList.toggle('active'));
navLinks.forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    setActive(link.getAttribute('href'));
}));

function setActive(id) {
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id));
}

window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(s => {
        if (scrollY >= s.offsetTop - 200) current = '#' + s.id;
    });
    setActive(current);

    const btn = document.getElementById('backToTop');
    if (btn) { btn.style.opacity = pageYOffset > 300 ? '1' : '0'; btn.style.pointerEvents = pageYOffset > 300 ? 'auto' : 'none'; }
});

/* Scroll reveal */
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); observer.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

function initAnimations() {
    document.querySelectorAll('.skill-category, .project-card, .learning-card, .cert-column, .community-card, .highlight-item, .timeline-content, .profile-card')
        .forEach(el => { el.classList.add('scroll-animate'); observer.observe(el); });
}

/* Progress bars */
function initProgress() {
    const pObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const w = e.target.style.width;
                e.target.style.width = '0';
                setTimeout(() => e.target.style.width = w, 100);
                pObs.unobserve(e.target);
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.progress-fill').forEach(f => pObs.observe(f));
}

/* Back to top */
document.getElementById('backToTop')?.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* Copy email */
function copyEmail() {
    navigator.clipboard.writeText('sthabisoxakaza52@gmail.com').then(() => {
        const btn = event.target;
        const orig = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.cssText = 'background:rgba(123,177,129,0.2);color:#7bb181';
        setTimeout(() => { btn.textContent = orig; btn.style.cssText = ''; }, 2000);
    }).catch(() => alert('Failed to copy email'));
}

/* Contact form */
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMessage');

form?.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) return showMsg('Please fill in all fields', 'error');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showMsg('Please enter a valid email', 'error');
    showMsg("Thanks for your message! I'll get back to you soon.", 'success');
    form.reset();
    setTimeout(() => msg.style.display = 'none', 5000);
});

function showMsg(text, type) {
    msg.textContent = text;
    msg.className = type;
    msg.style.display = 'block';
}

/* Smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - document.querySelector('header').offsetHeight, behavior: 'smooth' });
    });
});

/* Keyboard nav */
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') navMenu.classList.remove('active');
});
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.scrollBehavior = 'auto';
}

/* Init */
document.addEventListener('DOMContentLoaded', () => {
    type();
    initAnimations();
    initProgress();
    const style = document.createElement('style');
    style.textContent = '#backToTop { opacity: 0; pointer-events: none; transition: all 0.3s ease-in-out; }';
    document.head.appendChild(style);
});
