/**
 * DemoRevis - Dual Audio Station Controller
 * Supports dual tracks (Briefing Express & Cours Approfondi), playback rate,
 * precision seeking, and collapsible transcriptions.
 */

export function setupAudioPlayer(options = {}) {
  const container = document.querySelector('.audio-station');
  if (!container) return;

  const audio = container.querySelector('audio');
  if (!audio) return;

  const playBtn = container.querySelector('.play-toggle-btn');
  const speedBtn = container.querySelector('.speed-toggle-btn');
  const progressBar = container.querySelector('.progress-bar-fill');
  const progressContainer = container.querySelector('.progress-bar-container');
  const currentTimeEl = container.querySelector('.current-time');
  const durationTimeEl = container.querySelector('.duration-time');
  const transcriptToggle = container.querySelector('.transcription-toggle');
  const transcriptBodies = container.querySelectorAll('.transcription-body');
  const modeButtons = container.querySelectorAll('.audio-mode-btn');

  const base = import.meta.env.BASE_URL || './';
  const cleanBase = base.endsWith('/') ? base : base + '/';

  function resolvePath(path) {
    if (!path) return '';
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return cleanBase + cleanPath;
  }

  // Dual track sources
  const briefingSrc = container.dataset.briefingSrc ? resolvePath(container.dataset.briefingSrc) : '';
  const podcastSrc = container.dataset.podcastSrc ? resolvePath(container.dataset.podcastSrc) : '';

  let currentTrack = 'briefing';

  // Set initial audio source
  if (briefingSrc) {
    audio.src = briefingSrc;
  } else if (audio.dataset.audioFile) {
    audio.src = resolvePath(audio.dataset.audioFile);
  }

  // Format seconds to mm:ss or hh:mm:ss
  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    if (hrs > 0) {
      return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  // Update duration when metadata is loaded
  audio.addEventListener('loadedmetadata', () => {
    if (durationTimeEl) durationTimeEl.textContent = formatTime(audio.duration);
  });

  // Time update
  audio.addEventListener('timeupdate', () => {
    if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);
    if (progressBar && audio.duration) {
      const pct = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${pct}%`;
    }
  });

  // Play / Pause toggle
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play().then(() => {
          playBtn.innerHTML = '❚❚';
          playBtn.setAttribute('aria-label', 'Mettre en pause');
        }).catch(err => console.log('Audio play interrupted:', err));
      } else {
        audio.pause();
        playBtn.innerHTML = '▶';
        playBtn.setAttribute('aria-label', 'Écouter');
      }
    });
  }

  audio.addEventListener('ended', () => {
    if (playBtn) {
      playBtn.innerHTML = '▶';
      playBtn.setAttribute('aria-label', 'Écouter');
    }
    if (progressBar) progressBar.style.width = '0%';
  });

  // Speed toggle: 1x -> 1.25x -> 1.5x -> 2x -> 1x
  if (speedBtn) {
    const speeds = [1, 1.25, 1.5, 2];
    let currentSpeedIndex = 0;
    speedBtn.addEventListener('click', () => {
      currentSpeedIndex = (currentSpeedIndex + 1) % speeds.length;
      const speed = speeds[currentSpeedIndex];
      audio.playbackRate = speed;
      speedBtn.textContent = `${speed}×`;
      speedBtn.setAttribute('aria-label', `Vitesse de lecture ${speed} fois`);
    });
  }

  // Seeking on progress container click and touch/pointer drag
  if (progressContainer) {
    let isDragging = false;

    function seek(e) {
      const rect = progressContainer.getBoundingClientRect();
      const clientX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
      const clickX = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const width = rect.width;
      if (audio.duration && width > 0) {
        audio.currentTime = (clickX / width) * audio.duration;
      }
    }

    progressContainer.addEventListener('pointerdown', (e) => {
      isDragging = true;
      seek(e);
      progressContainer.setPointerCapture(e.pointerId);
    });

    progressContainer.addEventListener('pointermove', (e) => {
      if (isDragging) {
        seek(e);
      }
    });

    progressContainer.addEventListener('pointerup', (e) => {
      if (isDragging) {
        seek(e);
        isDragging = false;
        try { progressContainer.releasePointerCapture(e.pointerId); } catch (_) {}
      }
    });

    progressContainer.addEventListener('pointercancel', () => {
      isDragging = false;
    });
  }

  // Dual track mode buttons
  if (modeButtons.length > 0) {
    modeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const track = btn.dataset.track;
        if (track === currentTrack) return;

        modeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTrack = track;

        const wasPlaying = !audio.paused;
        audio.pause();

        if (track === 'briefing' && briefingSrc) {
          audio.src = briefingSrc;
        } else if (track === 'podcast' && podcastSrc) {
          audio.src = podcastSrc;
        }

        audio.currentTime = 0;
        if (progressBar) progressBar.style.width = '0%';
        if (currentTimeEl) currentTimeEl.textContent = '00:00';

        // Switch visible transcript
        transcriptBodies.forEach(tb => {
          if (tb.id === `transcript-${track}`) {
            tb.style.display = 'block';
          } else {
            tb.style.display = 'none';
          }
        });

        if (wasPlaying) {
          audio.play().then(() => {
            if (playBtn) playBtn.innerHTML = '❚❚';
          }).catch(err => console.log('Play on switch error:', err));
        } else {
          if (playBtn) playBtn.innerHTML = '▶';
        }
      });
    });
  }

  // Transcription toggle
  if (transcriptToggle) {
    transcriptToggle.addEventListener('click', () => {
      const activeBody = container.querySelector(`.transcription-body#transcript-${currentTrack}`) || container.querySelector('.transcription-body');
      if (!activeBody) return;
      const isOpen = activeBody.classList.toggle('open');
      transcriptToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      const icon = transcriptToggle.querySelector('.toggle-icon');
      if (icon) icon.textContent = isOpen ? '▲' : '▼';
    });
  }
}
