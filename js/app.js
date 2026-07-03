// I-Ching Oracle — Application Logic
// Social-powered: share to earn readings. No payment needed.

const CREDITS_KEY = 'iching_v2';
const DAILY_FREE = 3;
const MAX_BONUS = 5; // max bonus readings from sharing
const SITE_URL = 'https://azumilove.github.io/iching-oracle';

// Share platforms — each gives +1 reading once per day
const PLATFORMS = [
  { id: 'twitter',  name: 'X / Twitter',    icon: '𝕏', color: '#1a1a1a' },
  { id: 'facebook', name: 'Facebook',        icon: 'f', color: '#1877F2' },
  { id: 'reddit',   name: 'Reddit',          icon: '⟐', color: '#FF4500' },
  { id: 'whatsapp', name: 'WhatsApp',        icon: '💬', color: '#25D366' },
  { id: 'telegram', name: 'Telegram',        icon: '✈', color: '#26A5E4' },
  { id: 'copy',     name: 'Copy Link',       icon: '📋', color: '#5a7a6a' },
];

// AdSense config — replace with your publisher ID when approved
const ADSENSE_ID = 'ca-pub-XXXXXXXXXXXXXXXX'; // ← replace after Google approval

function getState() {
  const raw = localStorage.getItem(CREDITS_KEY);
  const def = { free: DAILY_FREE, sharedToday: {}, lastReset: today() };
  if (!raw) return def;
  try {
    const data = JSON.parse(raw);
    if (data.lastReset !== today()) {
      return { ...def };
    }
    // migrate old format
    if (!data.sharedToday) data.sharedToday = {};
    return data;
  } catch(e) { return def; }
}

function saveState(s) {
  localStorage.setItem(CREDITS_KEY, JSON.stringify(s));
}

function today() { return new Date().toISOString().split('T')[0]; }

function bonusReadings() {
  const s = getState();
  return Object.keys(s.sharedToday).length;
}

function availableReadings() {
  const s = getState();
  return s.free + bonusReadings();
}

function consumeReading() {
  const s = getState();
  if (s.free > 0) {
    s.free--;
    saveState(s);
    return true;
  }
  // bonus readings are not "consumed" — they're earned permanently for today
  // once you have bonus, free runs out first; bonus is your safety net
  if (bonusReadings() > 0) {
    // bonus readings are not decremented — they represent "extra today"
    saveState(s);
    return true;
  }
  return false;
}

function shareAndEarn(platformId) {
  const s = getState();
  if (s.sharedToday[platformId]) return false; // already shared here today
  s.sharedToday[platformId] = true;
  saveState(s);
  updateCreditBadge();
  return true;
}

// === Share Modal w/ "earn readings" ===
function showCreditModal() {
  const existing = document.getElementById('credit-modal');
  if (existing) existing.remove();

  const s = getState();
  const total = availableReadings();
  const bonus = bonusReadings();

  const platformButtons = PLATFORMS.map(p => {
    const earned = s.sharedToday[p.id];
    return `
      <button class="share-platform-btn ${earned ? 'earned' : ''}"
              ${earned ? 'disabled' : ''}
              onclick="doShare('${p.id}')"
              style="border-left:3px solid ${p.color};">
        <span class="platform-icon">${p.icon}</span>
        <span class="platform-name">${p.name}</span>
        <span class="platform-status">${earned ? '✓ Earned' : '+1 reading'}</span>
      </button>`;
  }).join('');

  const overlay = document.createElement('div');
  overlay.id = 'credit-modal';
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal" style="max-width:480px;">
      <button class="modal-close" onclick="document.getElementById('credit-modal').remove()">✕</button>

      <h3 style="margin-bottom:0.5rem;">${total > 0 ? 'Your Readings Today' : 'Out of Readings'}</h3>

      <div class="credit-display">
        <div class="credit-row">
          <span>☀ Free Daily</span>
          <span>${s.free} / ${DAILY_FREE}</span>
        </div>
        <div class="credit-row">
          <span>🔗 Earned from Sharing</span>
          <span>${bonus} / ${MAX_BONUS}</span>
        </div>
        <div class="credit-row" style="font-weight:600;border-top:1px solid var(--ink-5);padding-top:0.5rem;margin-top:0.3rem;">
          <span>Total Available</span>
          <span style="color:var(--cinnabar);">${total}</span>
        </div>
      </div>

      ${total === 0 ? `
        <p style="color:var(--ink-3);font-style:italic;text-align:center;margin:1rem 0;">
          Your free readings are done for today.<br>Share to earn more — each platform gives +1.
        </p>
      ` : ''}

      <p style="font-size:0.8rem;color:var(--ink-4);text-align:center;margin:1rem 0 0.5rem;letter-spacing:0.06em;">
        SHARE TO EARN MORE READINGS
      </p>
      <p style="font-size:0.7rem;color:var(--ink-4);text-align:center;margin-bottom:0.8rem;">
        Each platform you share on gives <strong>+1 reading</strong> today (max ${MAX_BONUS} bonus)
      </p>

      <div class="share-platforms">
        ${platformButtons}
      </div>

      <p style="margin-top:1.2rem;font-size:0.7rem;color:var(--ink-4);text-align:center;">
        Free readings reset daily at midnight UTC. Earned bonus also resets.
      </p>
    </div>
  `;

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });
  document.body.appendChild(overlay);
}

function doShare(platformId) {
  const shareMsg = buildShareMessage();
  const encodedMsg = encodeURIComponent(shareMsg.text);
  const encodedUrl = encodeURIComponent(SITE_URL);

  let shareUrl;
  switch (platformId) {
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?text=${encodedMsg}&url=${encodedUrl}`;
      break;
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedMsg}`;
      break;
    case 'reddit':
      shareUrl = `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodeURIComponent(shareMsg.title)}`;
      break;
    case 'whatsapp':
      shareUrl = `https://wa.me/?text=${encodeURIComponent(shareMsg.text + ' ' + SITE_URL)}`;
      break;
    case 'telegram':
      shareUrl = `https://t.me/share/url?url=${encodedUrl}&text=${encodedMsg}`;
      break;
    case 'copy':
      navigator.clipboard.writeText(shareMsg.text + ' ' + SITE_URL).then(() => {
        onShareDone(platformId);
      }).catch(() => {});
      return; // no window.open for copy
  }

  // Open share window
  window.open(shareUrl, '_blank', 'width=600,height=400');

  // Mark as earned (assume user completed share)
  onShareDone(platformId);
}

function onShareDone(platformId) {
  const earned = shareAndEarn(platformId);
  if (earned) {
    showToast(`✓ +1 reading earned from sharing!`);
    // Refresh modal
    const modal = document.getElementById('credit-modal');
    if (modal) {
      modal.remove();
      showCreditModal();
    }
  }
}

function buildShareMessage() {
  const hex = divinationState.result;
  const text = hex
    ? `I cast Hexagram ${hex.n}: "${hex.name}" — "${hex.judgment}"\n\nConsult the ancient I-Ching yourself:`
    : `I just consulted the I-Ching Oracle — an ancient Chinese wisdom tool. Cast your own coins in an ink-wash temple:\n\n`;
  const title = hex
    ? `I-Ching Oracle: Hexagram ${hex.n} — ${hex.name}`
    : 'I-Ching Oracle — Ancient Chinese Wisdom';
  return { text, title };
}

function updateCreditBadge() {
  const badge = document.getElementById('credit-badge');
  if (badge) badge.textContent = availableReadings();
}

// === Navigation ===
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('nav .links a').forEach(a => a.classList.remove('active'));

  const target = document.getElementById(page);
  if (target) target.classList.add('active');

  const navLink = document.querySelector(`nav .links a[data-page="${page}"]`);
  if (navLink) navLink.classList.add('active');

  if (page === 'gallery') renderGallery();
  if (page === 'wellness') renderWellness();
  window.scrollTo(0, 0);
}

document.querySelectorAll('nav .links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navigate(link.dataset.page);
  });
});

// === Divination ===
let divinationState = { phase: 'idle', lines: [], currentLine: 0 };

function startDivination() {
  if (availableReadings() <= 0) {
    showCreditModal();
    return;
  }
  navigate('divination');
  resetDivination();
}

function resetDivination() {
  divinationState = { phase: 'idle', lines: [], currentLine: 0 };
  document.getElementById('hex-area').innerHTML = '<p style="color:var(--ink-4);font-style:italic;">Focus on your question. Then toss the coins.</p>';
  document.getElementById('coin-result').innerHTML = '';
  document.getElementById('result-card').innerHTML = '';
  document.getElementById('question-input').value = '';
  document.querySelectorAll('.step').forEach((s, i) => {
    s.classList.remove('active', 'done');
    if (i === 0) s.classList.add('active');
  });
}

function updateSteps() {
  const steps = document.querySelectorAll('.step');
  const line = divinationState.currentLine;
  steps.forEach((s, i) => {
    s.classList.remove('active', 'done');
    if (i === 0 && line < 6) s.classList.add('active');
    else if (i === 1 && line >= 6 && !divinationState.result) s.classList.add('active');
    else if (i === 2 && divinationState.result) s.classList.add('active');
    if (i === 0 && line >= 6) s.classList.add('done');
    if (i === 1 && divinationState.result) s.classList.add('done');
  });
}

function tossCoins() {
  if (divinationState.currentLine >= 6) return;

  const coinDisplay = document.getElementById('coin-result');
  let sum = 0;
  for (let i = 0; i < 3; i++) sum += Math.random() < 0.5 ? 2 : 3;

  const isChanging = (sum === 6 || sum === 9);
  const isYang = (sum === 7 || sum === 9);
  divinationState.lines.push({ value: sum, changing: isChanging, yang: isYang });
  divinationState.currentLine++;

  const coinSymbols = { 6: '⚋⚋⚋', 7: '⚊⚋⚊', 8: '⚋⚊⚋', 9: '⚊⚊⚊' };
  const coinMeanings = { 6: 'Old Yin — changing', 7: 'Young Yang — stable', 8: 'Young Yin — stable', 9: 'Old Yang — changing' };

  coinDisplay.innerHTML = `
    <div style="font-size:2rem;margin-bottom:0.3rem;">${coinSymbols[sum]}</div>
    <div style="font-size:0.8rem;color:${isChanging ? 'var(--cinnabar)' : 'var(--ink-3)'}">${coinMeanings[sum]}</div>`;

  renderLines();
  if (divinationState.currentLine >= 6) setTimeout(() => revealResult(), 1200);
}

function renderLines() {
  const area = document.getElementById('hex-area');
  let html = '';
  for (let i = 0; i < 6; i++) {
    if (i < divinationState.lines.length) {
      const line = divinationState.lines[i];
      if (line.yang) {
        html = `<div class="hex-line visible" style="transition-delay:${i * 0.1}s">
          <span class="line-segment${line.changing ? ' changing' : ''}"></span>
          <span class="line-segment${line.changing ? ' changing' : ''}"></span>
          <span class="line-segment${line.changing ? ' changing' : ''}"></span>
        </div>` + html;
      } else {
        html = `<div class="hex-line visible" style="transition-delay:${i * 0.1}s">
          <span class="line-segment broken${line.changing ? ' changing' : ''}"></span>
          <span style="width:6px"></span>
          <span class="line-segment broken${line.changing ? ' changing' : ''}"></span>
        </div>` + html;
      }
    } else {
      html = `<div class="hex-line" style="opacity:0.15">
        <span class="line-segment" style="background:var(--ink-5)"></span>
        <span class="line-segment" style="background:var(--ink-5)"></span>
        <span class="line-segment" style="background:var(--ink-5)"></span>
      </div>` + html;
    }
  }
  area.innerHTML = html;
}

function getHexagramNumber(lines) {
  let binary = 0;
  for (let i = 0; i < 6; i++) if (lines[i].yang) binary |= (1 << i);
  const binaryToKingWen = [2,23,8,20,16,35,45,12,15,52,39,53,62,56,31,33,7,4,29,59,40,64,47,6,46,18,48,57,32,50,28,44,24,27,3,42,51,21,17,25,36,22,63,37,55,30,49,13,19,41,60,61,54,38,58,10,11,26,5,9,34,14,43,1];
  return binaryToKingWen[binary] || 1;
}

function revealResult() {
  const lines = divinationState.lines;
  const hexNum = getHexagramNumber(lines);
  const hex = ICHING.find(h => h.n === hexNum);
  if (!hex) return;

  consumeReading();
  updateCreditBadge();
  divinationState.result = hex;
  updateSteps();

  const changingIdx = lines.map((l, i) => l.changing ? i : -1).filter(i => i >= 0);

  let cardHTML = `
    <div class="result-card">
      <div class="hexagram-number">Hexagram ${hex.n}</div>
      <div class="hexagram-name">${hex.name}</div>
      <div class="hexagram-name-cn">${hex.cn}</div>
      <div class="hex-symbol">${hex.symbol}</div>
      <div class="judgment-label">Judgment</div>
      <div class="judgment-text">"${hex.judgment}"</div>
      <div class="interpretation">${hex.interpretation}</div>`;

  if (changingIdx.length > 0) {
    const changedLines = lines.map(l => l.changing ? { ...l, yang: !l.yang, changing: false } : { ...l });
    const changedNum = getHexagramNumber(changedLines);
    const changedHex = ICHING.find(h => h.n === changedNum);
    if (changedHex && changedHex.n !== hex.n) {
      cardHTML += `
        <div style="margin:1.5rem 0;padding:1rem;border:1px solid var(--ink-5);text-align:center;">
          <div style="font-size:0.75rem;color:var(--cinnabar);letter-spacing:0.12em;margin-bottom:0.5rem;">CHANGING TO</div>
          <div style="font-weight:600;">${changedHex.name}</div>
          <div style="color:var(--ink-4);font-size:0.9rem;">${changedHex.cn}</div>
          <div class="hex-symbol" style="font-size:1.3rem;margin:0.3rem 0;">${changedHex.symbol}</div>
          <div style="font-style:italic;color:var(--ink-3);font-size:0.9rem;">"${changedHex.judgment}"</div>
        </div>`;
    }
  }

  if (hex.wellness) {
    cardHTML += `<div class="wellness-tip"><strong>☯ Wellness Guidance</strong><br>${hex.wellness}</div>`;
  }

  cardHTML += `
      <div class="result-actions">
        <button class="btn-primary" onclick="startDivination()">Cast Again</button>
        <button class="btn-secondary" onclick="shareResult()">📤 Share & Earn</button>
        <button class="btn-secondary" onclick="navigate('gallery')">📖 Gallery</button>
      </div>
    </div>`;

  document.getElementById('result-card').innerHTML = cardHTML;
  document.getElementById('result-card').scrollIntoView({ behavior: 'smooth' });
}

function shareResult() {
  const existing = document.getElementById('share-modal');
  if (existing) existing.remove();

  const hex = divinationState.result;
  const s = getState();
  const shareText = hex
    ? `I cast Hexagram ${hex.n}: "${hex.name}" — "${hex.judgment}"`
    : 'I just consulted the ancient I-Ching Oracle';

  const platformButtons = PLATFORMS.map(p => {
    const earned = s.sharedToday[p.id];
    return `
      <button class="share-platform-btn ${earned ? 'earned' : ''}"
              ${earned ? 'disabled' : ''}
              onclick="doShareFromModal('${p.id}')"
              style="border-left:3px solid ${p.color};">
        <span class="platform-icon">${p.icon}</span>
        <span class="platform-name">${p.name}</span>
        <span class="platform-status">${earned ? '✓ Earned' : '+1 reading'}</span>
      </button>`;
  }).join('');

  const overlay = document.createElement('div');
  overlay.id = 'share-modal';
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal" style="max-width:420px;">
      <button class="modal-close" onclick="document.getElementById('share-modal').remove()">✕</button>
      <h3>Share & Earn Readings</h3>
      <p style="color:var(--ink-3);font-size:0.85rem;text-align:center;margin:0.5rem 0 1rem;">
        Share on any platform below to earn <strong>+1 reading</strong> today
      </p>

      ${hex ? `
        <div class="share-card-preview">
          <div class="hexagram-number">Hexagram ${hex.n}</div>
          <div class="hexagram-name" style="font-size:1.3rem;">${hex.name}</div>
          <div class="hex-symbol" style="font-size:1.1rem;">${hex.symbol}</div>
          <div style="font-style:italic;color:var(--ink-2);font-size:0.85rem;">"${hex.judgment}"</div>
        </div>
      ` : ''}

      <div class="share-platforms">
        ${platformButtons}
      </div>
    </div>
  `;

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });
  document.body.appendChild(overlay);
}

function doShareFromModal(platformId) {
  doShare(platformId);
  // Refresh share modal
  setTimeout(() => {
    const modal = document.getElementById('share-modal');
    if (modal) {
      modal.remove();
      shareResult();
    }
  }, 300);
}

// === Gallery ===
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  let html = '';
  ICHING.forEach(hex => {
    html += `
      <div class="hex-card" onclick="showHexDetail(${hex.n})">
        <div class="card-num">${hex.n}</div>
        <div class="card-symbol">${hex.symbol}</div>
        <div class="card-name">${hex.name}</div>
        <div class="card-name-cn">${hex.cn}</div>
      </div>`;
  });
  grid.innerHTML = html;
}

function showHexDetail(n) {
  const hex = ICHING.find(h => h.n === n);
  if (!hex) return;
  divinationState.result = hex;
  divinationState.lines = [];

  let cardHTML = `
    <div class="result-card">
      <div class="hexagram-number">Hexagram ${hex.n}</div>
      <div class="hexagram-name">${hex.name}</div>
      <div class="hexagram-name-cn">${hex.cn}</div>
      <div class="hex-symbol">${hex.symbol}</div>
      <div class="judgment-label">Judgment</div>
      <div class="judgment-text">"${hex.judgment}"</div>
      <div class="interpretation">${hex.interpretation}</div>`;
  if (hex.wellness) {
    cardHTML += `<div class="wellness-tip"><strong>☯ Wellness Guidance</strong><br>${hex.wellness}</div>`;
  }
  cardHTML += `
      <div class="result-actions">
        <button class="btn-primary" onclick="startDivination()">Cast Your Own</button>
        <button class="btn-secondary" onclick="navigate('gallery')">Back to Gallery</button>
      </div>
    </div>`;

  navigate('divination');
  document.getElementById('hex-area').innerHTML = '';
  document.getElementById('coin-result').innerHTML = '';
  document.getElementById('result-card').innerHTML = cardHTML;
  document.getElementById('result-card').scrollIntoView({ behavior: 'smooth' });
}

// === Wellness ===
function renderWellness() {
  const grid = document.getElementById('wellness-grid');
  if (!grid) return;
  let html = '';
  WELLNESS.forEach(w => {
    html += `
      <div class="wellness-card">
        <div class="move-num">Movement ${w.id} · ${w.element}</div>
        <h3>${w.name}</h3>
        <div style="font-size:0.9rem;color:var(--ink-4);margin-bottom:0.8rem;">${w.cn}</div>
        <p>${w.description}</p>
        <p style="margin-top:0.8rem;color:var(--jade);font-size:0.85rem;"><strong>Benefits:</strong> ${w.benefit}</p>
      </div>`;
  });
  grid.innerHTML = html;
}

// === Keyboard ===
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && document.activeElement === document.getElementById('question-input')) tossCoins();
  if (e.key === ' ' && divinationState.currentLine < 6 && document.getElementById('divination').classList.contains('active')) {
    e.preventDefault();
    tossCoins();
  }
});

// === Toast ===
function showToast(msg) {
  const existing = document.getElementById('auto-toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.id = 'auto-toast';
  toast.style.cssText = `position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);z-index:300;background:var(--ink-1);color:var(--paper);padding:1rem 2rem;font-family:'Cormorant Garamond',serif;font-size:1rem;border:1px solid var(--ink-5);box-shadow:0 8px 30px var(--shadow-strong);animation:slideUp 0.5s cubic-bezier(0.4,0,0.2,1);max-width:90vw;text-align:center;`;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.5s'; setTimeout(() => toast.remove(), 500); }, 4000);
}

// === Init ===
if (!document.querySelector('#slideUp-keyframes')) {
  const s = document.createElement('style');
  s.id = 'slideUp-keyframes';
  s.textContent = '@keyframes slideUp{from{opacity:0;transform:translateX(-50%) translateY(20px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}';
  document.head.appendChild(s);
}

document.addEventListener('DOMContentLoaded', () => {
  updateCreditBadge();

  const mountainEl = document.querySelector('.hero-mountain');
  if (mountainEl) {
    mountainEl.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 220" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a1a1a" stop-opacity="0.7"/><stop offset="100%" stop-color="#1a1a1a" stop-opacity="0.08"/></linearGradient>
          <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a1a1a" stop-opacity="0.25"/><stop offset="100%" stop-color="#1a1a1a" stop-opacity="0.0"/></linearGradient>
        </defs>
        <path d="M0 220 L100 90 L180 130 L260 50 L340 110 L430 30 L520 100 L600 60 L600 220Z" fill="url(#g2)"/>
        <path d="M0 220 L150 130 L230 160 L310 85 L390 140 L470 70 L550 130 L600 100 L600 220Z" fill="url(#g1)"/>
        <path d="M0 220 L200 180 L300 200 L380 160 L460 190 L550 150 L600 170 L600 220Z" fill="#1a1a1a" fill-opacity="0.12"/>
        <ellipse cx="300" cy="175" rx="280" ry="15" fill="#f5f0e8" opacity="0.4"/>
        <circle cx="480" cy="45" r="16" fill="#c43a31" fill-opacity="0.07"/>
      </svg>`;
  }
});
