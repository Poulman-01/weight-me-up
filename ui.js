/* ui.js — χειρονομίες για κινητό (v1.3).
   1. Σάρωση αριστερά/δεξιά στην «Ημέρα»: επόμενη/προηγούμενη ημέρα.
   2. Σύρσιμο προς τα κάτω από την κεφαλίδα ενός παραθύρου: κλείσιμο. */
(() => {
  const main = document.getElementById('main'), dlg = document.getElementById('dlg');
  const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Αλλαγή ημέρας με σάρωση
  let sx = 0, sy = 0, st = 0, armed = false;
  main.addEventListener('touchstart', e => {
    armed = false;
    if (typeof UI === 'undefined' || UI.view !== 'day' || e.touches.length !== 1) return;
    if (e.target.closest('input,select,textarea,.chips,.scroll-x,canvas,.seg,.sets,[data-noswipe]')) return;
    const p = e.touches[0]; sx = p.clientX; sy = p.clientY; st = Date.now(); armed = true;
  }, { passive: true });
  main.addEventListener('touchend', e => {
    if (!armed) return; armed = false;
    const p = e.changedTouches[0], dx = p.clientX - sx, dy = p.clientY - sy;
    if (Date.now() - st > 600 || Math.abs(dx) < 70 || Math.abs(dy) > Math.abs(dx) * 0.6) return;
    const btn = document.querySelector(dx < 0 ? '[data-act="dayNext"]' : '[data-act="dayPrev"]');
    if (!btn) return;
    btn.click();
    if (!reduce && main.animate) main.animate([{ transform: `translateX(${dx < 0 ? 28 : -28}px)`, opacity: .35 }, { transform: 'none', opacity: 1 }], { duration: 220, easing: 'ease-out' });
  }, { passive: true });

  // 2. Κλείσιμο παραθύρου με σύρσιμο προς τα κάτω
  if (!dlg) return;
  let y0 = null, dy = 0;
  dlg.addEventListener('touchstart', e => {
    if (!e.target.closest('.dlg-h') || e.touches.length !== 1) { y0 = null; return; }
    y0 = e.touches[0].clientY; dy = 0; dlg.classList.add('dragging');
  }, { passive: true });
  dlg.addEventListener('touchmove', e => {
    if (y0 === null) return;
    dy = Math.max(0, e.touches[0].clientY - y0); dlg.style.transform = `translateY(${dy}px)`;
  }, { passive: true });
  const end = () => {
    if (y0 === null) return; y0 = null; dlg.classList.remove('dragging');
    if (dy > 110) {
      dlg.style.transition = 'transform .18s ease-in'; dlg.style.transform = 'translateY(100%)';
      setTimeout(() => { dlg.style.transition = ''; dlg.style.transform = ''; const x = dlg.querySelector('[data-act="dlgClose"]'); x ? x.click() : dlg.close(); }, 170);
    } else if (dy > 0) {
      dlg.style.transition = 'transform .2s ease-out'; dlg.style.transform = '';
      setTimeout(() => { dlg.style.transition = ''; }, 220);
    } else dlg.style.transform = '';
  };
  dlg.addEventListener('touchend', end); dlg.addEventListener('touchcancel', end);
})();
