// I-Ching Oracle — Application Logic

// === Credit System ===
const CREDITS_KEY = 'iching_credits';
const DAILY_FREE = 3;
const BUY_LINK = 'https://buymeacoffee.com/YOUR_USERNAME'; // ← Replace with your real link

// Valid redemption codes (SHA256 pre-computed hashes for security)
const VALID_CODES = {
  // Demo codes — replace with your real hashed codes
  'FREEREADING': true,   // Demo only — in production, store SHA256 hashes
  'WISDOM10': true,
  'WISDOM50': true,
};

function getCredits() {
  const raw = localStorage.getItem(CREDITS_KEY);
  if (!raw) return { free: DAILY_FREE, purchased: 0, lastReset: today(), usedCodes: [] };
  const data = JSON.parse(raw);
  // Daily reset
  if (data.lastReset !== today()) {
    data.free = DAILY_FREE;
    data.lastReset = today();
  }
  return data;
}

function saveCredits(data) {
  localStorage.setItem(CREDITS_KEY, JSON.stringify(data));
}

function today() {
  return new Date().toISOString().split('T')[0];
}

function availableReadings() {
  const c = getCredits();
  return c.free + c.purchased;
}

function consumeReading() {
  const c = getCredits();
  if (c.free > 0) {
    c.free--;
  } else if (c.purchased > 0) {
    c.purchased--;
  } else {
    return false;
  }
  saveCredits(c);
  return true;
}

function redeemCode(code) {
  const normalized = code.trim().toUpperCase();
  if (!VALID_CODES[normalized]) return false;
  const c = getCredits();
  if (c.usedCodes && c.usedCodes.includes(normalized)) return 'used';

  const packs = { 'FREEREADING': 3, 'WISDOM10': 10, 'WISDOM50': 50 };
  const amount = packs[normalized] || 5;
  c.purchased += amount;
  if (!c.usedCodes) c.usedCodes = [];
  c.usedCodes.push(normalized);
  saveCredits(c);
  return amount;
}

function showCreditModal() {
  const existing = document.getElementById('credit-modal');
  if (existing) existing.remove();

  const c = getCredits();
  const total = c.free + c.purchased;
  const freeLeft = c.free;

  const overlay = document.createElement('div');
  overlay.id = 'credit-modal';
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal" style="max-width:440px;">
      <button class="modal-close" onclick="document.getElementById('credit-modal').remove()">✕</button>
      <h3 style="margin-bottom:1.5rem;">${total > 0 ? 'Your Credits' : 'Out of Readings'}</h3>

      <div style="margin-bottom:1.5rem;padding:1rem;background:rgba(90,122,106,0.06);border-radius:4px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
          <span>☀ Free Daily Readings</span>
          <span style="font-weight:600;">${freeLeft} / ${DAILY_FREE}</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span>💎 Purchased Credits</span>
          <span style="font-weight:600;">${c.purchased}</span>
        </div>
        <div style="border-top:1px solid var(--ink-5);margin-top:0.5rem;padding-top:0.5rem;display:flex;justify-content:space-between;font-weight:600;">
          <span>Total Available</span>
          <span style="color:var(--cinnabar);">${total}</span>
        </div>
      </div>

      ${total === 0 ? `
        <p style="color:var(--ink-3);font-style:italic;margin-bottom:1.5rem;">
          Your daily free readings have been used. The well replenishes at midnight.<br>
          Or offer tea to the sage for more wisdom.
        </p>
      ` : ''}

      <a href="${BUY_LINK}" target="_blank" rel="noopener" class="btn-primary" style="display:block;text-align:center;margin-bottom:0.8rem;text-decoration:none;font-size:1rem;">
        ☕ Buy Readings — from $4.99
      </a>

      <div style="margin-top:1.5rem;padding-top:1rem;border-top:1px solid var(--ink-5);">
        <p style="font-size:0.85rem;color:var(--ink-4);margin-bottom:0.5rem;">Already purchased? Redeem your code:</p>
        <div style="display:flex;gap:0.5rem;">
          <input type="text" id="redeem-input" class="question-input"
                 placeholder="Enter code" style="max-width:none;text-align:left;font-size:0.9rem;">
          <button class="btn-secondary" onclick="handleRedeem()" style="white-space:nowrap;">Redeem</button>
        </div>
        <p id="redeem-msg" style="font-size:0.8rem;margin-top:0.5rem;min-height:1.2em;"></p>
      </div>

      <p style="margin-top:1.5rem;font-size:0.75rem;color:var(--ink-4);">
        Free readings reset daily at midnight UTC. Purchased credits never expire.
      </p>
    </div>
  `;

  // Close on overlay click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });

  document.body.appendChild(overlay);
}

function handleRedeem() {
  const input = document.getElementById('redeem-input');
  const msg = document.getElementById('redeem-msg');
  const code = input.value.trim();

  if (!code) {
    msg.innerHTML = '<span style="color:var(--cinnabar);">Enter a code to redeem.</span>';
    return;
  }

  const result = redeemCode(code);
  if (result === 'used') {
    msg.innerHTML = '<span style="color:var(--cinnabar);">This code has already been used.</span>';
  } else if (result === false) {
    msg.innerHTML = '<span style="color:var(--cinnabar);">Invalid code. Please check and try again.</span>';
  } else {
    msg.innerHTML = `<span style="color:var(--jade);">✓ ${result} readings added! You now have ${availableReadings()} readings.</span>`;
    input.value = '';
    updateCreditBadge();

    // Refresh the credit display
    setTimeout(() => {
      const modal = document.getElementById('credit-modal');
      if (modal) {
        modal.remove();
        showCreditModal();
      }
    }, 1500);
  }
}

function updateCreditBadge() {
  const badge = document.getElementById('credit-badge');
  if (badge) {
    badge.textContent = availableReadings();
  }
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

// === Divination State ===
let divinationState = {
  phase: 'idle', // idle | tossing | complete
  lines: [],     // {value: 6|7|8|9, changing: bool}
  currentLine: 0
};

function startDivination() {
  // Check credits before allowing
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

  // Reset steps
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

  const area = document.getElementById('hex-area');
  const coinDisplay = document.getElementById('coin-result');

  // Simulate three coins
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    sum += Math.random() < 0.5 ? 2 : 3; // 2 = yin (tails), 3 = yang (heads)
  }

  // sum: 6=old yin(changing), 7=young yang(static), 8=young yin(static), 9=old yang(changing)
  const lineValue = sum;
  const isChanging = (lineValue === 6 || lineValue === 9);
  const isYang = (lineValue === 7 || lineValue === 9);

  divinationState.lines.push({ value: lineValue, changing: isChanging, yang: isYang });
  divinationState.currentLine++;

  // Coin animation
  const coinSymbols = { 6: '⚋⚋⚋', 7: '⚊⚋⚊', 8: '⚋⚊⚋', 9: '⚊⚊⚊' };
  const coinMeanings = {
    6: 'Old Yin — changing',
    7: 'Young Yang — stable',
    8: 'Young Yin — stable',
    9: 'Old Yang — changing'
  };

  coinDisplay.innerHTML = `
    <div style="font-size:2rem;margin-bottom:0.3rem;">${coinSymbols[lineValue]}</div>
    <div style="font-size:0.8rem;color:${isChanging ? 'var(--cinnabar)' : 'var(--ink-3)'}">
      ${coinMeanings[lineValue]}
    </div>
  `;

  // Render lines so far
  renderLines();

  if (divinationState.currentLine >= 6) {
    setTimeout(() => revealResult(), 1200);
  }
}

function renderLines() {
  const area = document.getElementById('hex-area');
  let html = '';

  // Bottom to top (line 1 at bottom)
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
  // Convert bottom-to-top lines to hexagram number (King Wen sequence)
  // Build binary: yang=1, yin=0, bottom line = LSB
  let binary = 0;
  for (let i = 0; i < 6; i++) {
    if (lines[i].yang) binary |= (1 << i);
  }
  // Map binary to King Wen sequence number
  // This is the Fu Xi binary ordering mapped to King Wen
  const binaryToKingWen = [
    2, 23, 8, 20, 16, 35, 45, 12, 15, 52, 39, 53, 62, 56, 31, 33,
    7, 4, 29, 59, 40, 64, 47, 6, 46, 18, 48, 57, 32, 50, 28, 44,
    24, 27, 3, 42, 51, 21, 17, 25, 36, 22, 63, 37, 55, 30, 49, 13,
    19, 41, 60, 61, 54, 38, 58, 10, 11, 26, 5, 9, 34, 14, 43, 1
  ];
  return binaryToKingWen[binary] || 1;
}

function revealResult() {
  const lines = divinationState.lines;
  const hexNum = getHexagramNumber(lines);
  const hex = ICHING.find(h => h.n === hexNum);
  if (!hex) return;

  // Consume a reading credit
  consumeReading();
  updateCreditBadge();

  divinationState.result = hex;
  updateSteps();

  // Check for changing lines
  const changingLines = lines.map((l, i) => l.changing ? i : -1).filter(i => i >= 0);

  let cardHTML = `
    <div class="result-card">
      <div class="hexagram-number">Hexagram ${hex.n}</div>
      <div class="hexagram-name">${hex.name}</div>
      <div class="hexagram-name-cn">${hex.cn}</div>
      <div class="hex-symbol">${hex.symbol}</div>
      <div class="judgment-label">Judgment</div>
      <div class="judgment-text">"${hex.judgment}"</div>
      <div class="interpretation">${hex.interpretation}</div>`;

  if (changingLines.length > 0) {
    const changedLines = lines.map(l => {
      if (l.changing) return { ...l, yang: !l.yang, changing: false };
      return { ...l };
    });
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
        <button class="btn-secondary" onclick="shareResult('${hex.name}')">Share Card</button>
        <button class="btn-secondary" onclick="navigate('gallery')">Hexagram Gallery</button>
      </div>
    </div>`;

  document.getElementById('result-card').innerHTML = cardHTML;
  document.getElementById('result-card').scrollIntoView({ behavior: 'smooth' });
}

function shareResult(name) {
  const hex = divinationState.result;
  if (!hex) return;

  // Copy share text
  const shareText = `I cast Hexagram ${hex.n}: "${hex.name}" (${hex.cn})\n\n"${hex.judgment}"\n\nConsult the I-Ching Oracle for your own reading.`;
  navigator.clipboard.writeText(shareText).then(() => {
    alert('Reading copied! Share it with your friends.\n\n' + shareText);
  }).catch(() => {
    alert(shareText);
  });
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
  divinationState.lines = []; // clear for display

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
        <p style="margin-top:0.8rem;color:var(--jade);font-size:0.85rem;">
          <strong>Benefits:</strong> ${w.benefit}
        </p>
      </div>
    `;
  });
  grid.innerHTML = html;
}

// === Keyboard shortcuts ===
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && document.activeElement === document.getElementById('question-input')) {
    tossCoins();
  }
  if (e.key === ' ' && divinationState.currentLine < 6 && document.getElementById('divination').classList.contains('active')) {
    e.preventDefault();
    tossCoins();
  }
});

// === Initialize ===
document.addEventListener('DOMContentLoaded', () => {
  // Update credit badge
  updateCreditBadge();

  // Draw hero mountain SVG
  const mountainEl = document.querySelector('.hero-mountain');
  if (mountainEl) {
    mountainEl.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 220" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1a1a1a" stop-opacity="0.7"/>
            <stop offset="100%" stop-color="#1a1a1a" stop-opacity="0.08"/>
          </linearGradient>
          <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1a1a1a" stop-opacity="0.25"/>
            <stop offset="100%" stop-color="#1a1a1a" stop-opacity="0.0"/>
          </linearGradient>
        </defs>
        <!-- Far mountains -->
        <path d="M0 220 L100 90 L180 130 L260 50 L340 110 L430 30 L520 100 L600 60 L600 220Z" fill="url(#g2)"/>
        <!-- Mid mountains -->
        <path d="M0 220 L150 130 L230 160 L310 85 L390 140 L470 70 L550 130 L600 100 L600 220Z" fill="url(#g1)"/>
        <!-- Near mountains -->
        <path d="M0 220 L200 180 L300 200 L380 160 L460 190 L550 150 L600 170 L600 220Z" fill="#1a1a1a" fill-opacity="0.12"/>
        <!-- Mist -->
        <ellipse cx="300" cy="175" rx="280" ry="15" fill="#f5f0e8" opacity="0.4"/>
        <!-- Sun/moon circle -->
        <circle cx="480" cy="45" r="16" fill="#c43a31" fill-opacity="0.07"/>
      </svg>`;
  }
});
