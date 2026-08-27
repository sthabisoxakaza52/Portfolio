/**
 * User Interactions: 1-Click Clipboard Copy & Scroll-Synchronized Experience Timeline
 */

(function () {
  'use strict';

  function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(showCopyToast).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    textarea.style.top = '-999999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand('copy');
      showCopyToast();
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
    document.body.removeChild(textarea);
  }

  function showCopyToast() {
    const toast = document.getElementById('copy-toast');
    if (!toast) return;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  // Bind copy email buttons
  document.querySelectorAll('.copy-email-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'sthabisoxakaza52@gmail.com';
      copyToClipboard(email);
    });
  });

  // Experience Timeline Synchronization & Scrollspy
  const expNavItems = document.querySelectorAll('.exp-role-item');
  const expCards = document.querySelectorAll('.exp-card');

  expNavItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target-card');
      const targetCard = document.getElementById(targetId);

      if (targetCard) {
        expCards.forEach(c => c.classList.remove('highlighted'));
        targetCard.classList.add('highlighted');

        expNavItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  function syncExperienceOnScroll() {
    const scrollMiddle = window.scrollY + window.innerHeight * 0.45;

    expCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cardTop = window.scrollY + rect.top;
      const cardBottom = cardTop + card.offsetHeight;

      if (scrollMiddle >= cardTop && scrollMiddle <= cardBottom) {
        const id = card.getAttribute('id');

        expCards.forEach(c => c.classList.remove('highlighted'));
        card.classList.add('highlighted');

        expNavItems.forEach(item => {
          if (item.getAttribute('data-target-card') === id) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', syncExperienceOnScroll, { passive: true });
  document.addEventListener('DOMContentLoaded', syncExperienceOnScroll);
})();
