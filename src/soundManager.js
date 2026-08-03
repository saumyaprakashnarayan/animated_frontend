/**
 * soundManager.js
 * Manages ambient sound files and transition sound effects.
 * Creates the floating Sound toggle button and exposes
 * triggerTransitionSound() for use by scrollTriggers.js.
 */

// Audio files (relative to project root)
const SOUND_FILES = [
  './alexzavesa-calm-inspiring-technology-logo-short-version-518993.mp3',
  './soundreality-fluorescent-forest-ambient-536763.mp3',
  './u_7hpxkdroz2-space-461600.mp3'
];

let audioEnabled = false;
let sounds = [];

/**
 * Play a transition sound keyed by pattern index.
 * Stops all other sounds first to prevent overlap.
 */
export function triggerTransitionSound(patternIndex) {
  if (!audioEnabled) return;
  sounds.forEach(s => { s.pause(); s.currentTime = 0; });
  const sound = sounds[patternIndex % sounds.length];
  sound.play().catch(() => {
    console.warn('Audio autoplay prevented. User must enable sound first.');
  });
}

/**
 * Creates the Sound ON/OFF toggle button and loads audio files.
 * Call once on page load.
 */
export function initSoundManager() {
  // Load and configure audio
  sounds = SOUND_FILES.map(src => {
    const audio = new Audio(src);
    audio.volume = 0.4;
    return audio;
  });

  // Build toggle button
  const btn = document.createElement('button');
  btn.id = 'sound-toggle';
  btn.innerHTML = 'Sound: OFF';

  Object.assign(btn.style, {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    zIndex: '9999',
    fontFamily: "'Space Mono', monospace",
    fontSize: '0.7rem',
    padding: '0.6rem 1.2rem',
    background: 'var(--ink-dim)',
    color: 'var(--text-muted)',
    border: '1px solid var(--border)',
    cursor: 'pointer',
    borderRadius: '20px',
    backdropFilter: 'blur(10px)',
    transition: 'color 0.3s, border-color 0.3s'
  });

  btn.addEventListener('click', () => {
    audioEnabled = !audioEnabled;

    if (audioEnabled) {
      btn.innerHTML = 'Sound: ON';
      btn.style.color = 'var(--accent)';
      btn.style.borderColor = 'var(--accent)';
      // Silent play to unlock audio context on first user gesture
      const first = sounds[0];
      first.volume = 0;
      first.play().then(() => {
        first.pause();
        first.currentTime = 0;
        first.volume = 0.4;
      }).catch(e => console.error('Audio unlock failed:', e));
    } else {
      btn.innerHTML = 'Sound: OFF';
      btn.style.color = 'var(--text-muted)';
      btn.style.borderColor = 'var(--border)';
      sounds.forEach(s => s.pause());
    }
  });

  document.body.appendChild(btn);
}
