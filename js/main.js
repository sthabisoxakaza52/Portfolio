/**
 * Main Application Orchestrator & Scrollspy
 */

(function () {
  'use strict';

  const sections = document.querySelectorAll('section[id]');
  const dockItems = document.querySelectorAll('.dock-item');

  function updateDockActiveState() {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      dockItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === `#${currentSectionId}`) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  }

  window.addEventListener('scroll', updateDockActiveState, { passive: true });
  document.addEventListener('DOMContentLoaded', updateDockActiveState);

  const progressBars = document.querySelectorAll('.lang-bar-fill');
  let animated = false;

  function animateBarsOnScroll() {
    if (animated) return;
    const languagesSection = document.getElementById('languages');
    if (!languagesSection) return;

    const rect = languagesSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      progressBars.forEach(bar => {
        const targetPercent = bar.getAttribute('data-percentage');
        bar.style.width = targetPercent;
      });
      animated = true;
    }
  }

  window.addEventListener('scroll', animateBarsOnScroll, { passive: true });
  document.addEventListener('DOMContentLoaded', animateBarsOnScroll);

  const audioBtn = document.getElementById('ambient-audio-btn');
  let audioContext = null;
  let isPlaying = false;
  let oscillator = null;
  let gainNode = null;

  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      if (!isPlaying) {
        try {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (!audioContext) {
            audioContext = new AudioContext();
          }
          if (audioContext.state === 'suspended') {
            audioContext.resume();
          }

          oscillator = audioContext.createOscillator();
          gainNode = audioContext.createGain();

          oscillator.type = 'sine';
          oscillator.frequency.setValueAtTime(174, audioContext.currentTime);

          gainNode.gain.setValueAtTime(0.01, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.06, audioContext.currentTime + 2);

          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);

          oscillator.start();
          isPlaying = true;
          audioBtn.classList.remove('audio-muted');
          audioBtn.setAttribute('title', 'Mute Ambient Sound');
        } catch (e) {
          console.warn('Audio playback error', e);
        }
      } else {
        if (gainNode && audioContext) {
          gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.5);
          setTimeout(() => {
            if (oscillator) oscillator.stop();
          }, 500);
        }
        isPlaying = false;
        audioBtn.classList.add('audio-muted');
        audioBtn.setAttribute('title', 'Play Ambient Sound');
      }
    });
  }
})();
