/**
 * Pan & Zoom Gesture Engine
 * Multi-touch pinch-to-zoom, 1-finger drag with scroll pass-through, and desktop mouse drag.
 */
export function setupPanZoomEvents(box, stage, handlers) {
  let isDown = false;
  let startX = 0;
  let startY = 0;
  let initPanX = 0;
  let initPanY = 0;
  let touchStartDist = 0;
  let touchStartScale = 1.0;
  let pinchMidX = 0;
  let pinchMidY = 0;
  let lastTap = 0;

  // Desktop Mouse Events
  box.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    isDown = true;
    startX = e.clientX;
    startY = e.clientY;
    const s = handlers.getState();
    initPanX = s.panX;
    initPanY = s.panY;
    stage.classList.add('is-dragging');
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    handlers.setPan(initPanX + (e.clientX - startX), initPanY + (e.clientY - startY));
  });

  window.addEventListener('mouseup', () => {
    if (isDown) {
      isDown = false;
      stage.classList.remove('is-dragging');
    }
  });

  box.addEventListener('dblclick', () => handlers.toggleMode());

  // Mobile Touch Events
  box.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDown = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      const s = handlers.getState();
      initPanX = s.panX;
      initPanY = s.panY;
      stage.classList.add('is-dragging');
      const now = Date.now();
      if (now - lastTap < 320) handlers.toggleMode();
      lastTap = now;
    } else if (e.touches.length === 2) {
      isDown = false;
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      touchStartDist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
      touchStartScale = handlers.getState().scale;
      const rect = box.getBoundingClientRect();
      pinchMidX = (t1.clientX + t2.clientX) / 2 - rect.left;
      pinchMidY = (t1.clientY + t2.clientY) / 2 - rect.top;
    }
  }, { passive: true });

  box.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2 && touchStartDist > 0) {
      if (e.cancelable) e.preventDefault();
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const dist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
      handlers.zoomAround(pinchMidX, pinchMidY, touchStartScale * (dist / touchStartDist));
    } else if (e.touches.length === 1 && isDown) {
      const dx = e.touches[0].clientX - startX;
      const dy = e.touches[0].clientY - startY;
      const s = handlers.getState();
      const isZoomed = s.scale > s.fitScale * 1.08;
      const isHorizontal = Math.abs(dx) > Math.abs(dy);
      if (isZoomed || isHorizontal || box.closest('.fullscreen-mode')) {
        if (e.cancelable) e.preventDefault();
        handlers.setPan(initPanX + dx, initPanY + dy);
      }
    }
  }, { passive: false });

  box.addEventListener('touchend', () => {
    isDown = false;
    touchStartDist = 0;
    stage.classList.remove('is-dragging');
  });
}
