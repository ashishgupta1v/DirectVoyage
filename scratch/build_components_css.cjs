const fs = require('fs');
const mono = fs.readFileSync('scratch/monolith.css', 'utf8');

function getSec(name) {
  const marker = '/* ---------- ' + name + ' ---------- */';
  const start = mono.indexOf(marker);
  if (start === -1) {
    console.error('NOT FOUND:', name);
    return '';
  }
  const next = mono.indexOf('/* ---------- ', start + marker.length);
  return mono.substring(start, next === -1 ? mono.length : next);
}

let compCss = '/* ============================================================\n   DIRECT VOYAGE — UI Components (Buttons, Forms, Cards, Floating Actions, Modals)\n   ============================================================ */\n\n';

compCss += getSec('buttons') + '\n\n';
compCss += getSec('forms') + '\n\n';
compCss += getSec('generic cards') + '\n\n';
compCss += getSec('floating actions') + '\n\n';

compCss += `
/* ---------- Itinerary Modal & Overlay ---------- */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(3, 13, 26, 0.88);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.35s var(--ease), visibility 0.35s;
  padding: 20px;
}

.modal-backdrop.open {
  opacity: 1;
  visibility: visible;
}

.modal-container {
  background: var(--navy-deep);
  border: 1px solid var(--line);
  border-radius: var(--r-xl);
  max-width: 820px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--shadow);
  transform: translateY(24px) scale(0.96);
  transition: transform 0.35s var(--ease);
  padding: clamp(24px, 4.2vw, 44px);
  position: relative;
  color: var(--ink);
}

.modal-backdrop.open .modal-container {
  transform: translateY(0) scale(1);
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(248, 245, 238, 0.08);
  border: 1px solid var(--hairline);
  color: var(--ink);
  display: grid;
  place-items: center;
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
  transition: background 0.25s, color 0.25s, border-color 0.25s, transform 0.25s;
}

.modal-close:hover {
  background: var(--gold);
  color: var(--navy);
  border-color: var(--gold);
  transform: rotate(90deg);
}

/* Modal Tab Bar */
.modal-tabs {
  display: flex;
  gap: 10px;
  border-bottom: 1px solid var(--hairline);
  padding-bottom: 14px;
  margin-bottom: 24px;
  overflow-x: auto;
}

.modal-tab-btn {
  padding: 8px 18px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--faint);
  border: 1px solid transparent;
  transition: all 0.25s var(--ease);
  cursor: pointer;
}

.modal-tab-btn:hover {
  color: var(--gold-light);
  border-color: var(--line);
}

.modal-tab-btn.active {
  background: var(--g-gold);
  color: #181102;
  box-shadow: 0 4px 14px rgba(201, 162, 75, 0.4);
}

/* Day timeline items */
.day-card {
  padding: 18px 22px;
  border-radius: var(--r-sm);
  background: rgba(248, 245, 238, 0.04);
  border: 1px solid var(--hairline);
  margin-bottom: 14px;
  transition: border-color 0.25s, transform 0.25s;
}

.day-card:hover {
  border-color: var(--line);
  transform: translateX(4px);
}

.day-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.day-tag {
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--gold-soft);
}

.day-title {
  font-size: 1.05rem;
  font-family: var(--serif);
  color: var(--ink);
  margin-bottom: 6px;
}

.day-desc {
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.6;
  margin: 0;
}
`;

fs.writeFileSync('src/styles/components.css', compCss);
console.log('Wrote src/styles/components.css, length:', compCss.length);
