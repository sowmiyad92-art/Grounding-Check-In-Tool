// ============================================
// Personal Grounding & Check-In Tool — Logic
// ============================================

// TODO: replace with your deployed Apps Script Web App URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwYS3njhP-r19UIVAFtO5iu0klcBQO0KC72JnpxE0K1SKHPoM51XnyKAbnz1Z489Jc/exec";

let selectedCategory = null;
let selectedIntensity = null;

// ---------- Tabs ----------
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
    if (btn.dataset.tab === "analytics") loadAnalytics();
  });
});

// ---------- Build category buttons ----------
const grid = document.getElementById("categoryGrid");
CATEGORIES.forEach(cat => {
  const b = document.createElement("button");
  b.className = "category-btn";
  b.dataset.id = cat.id;
  b.innerHTML = `<span class="icon">${cat.icon}</span>${cat.label}`;
  b.addEventListener("click", () => {
    document.querySelectorAll(".category-btn").forEach(x => x.classList.remove("selected"));
    b.classList.add("selected");
    selectedCategory = cat.id;
    checkReady();
  });
  grid.appendChild(b);
});

// ---------- Intensity buttons ----------
document.querySelectorAll(".intensity-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".intensity-btn").forEach(x => x.classList.remove("selected"));
    btn.classList.add("selected");
    selectedIntensity = btn.dataset.intensity;
    checkReady();
  });
});

function checkReady(){
  document.getElementById("submitBtn").disabled = !(selectedCategory && selectedIntensity);
}

// ---------- Quote rotation (sequential, stored locally) ----------
function getNextQuote(categoryId){
  const key = "quoteIndex_" + categoryId;
  const list = QUOTES[categoryId];
  let idx = parseInt(localStorage.getItem(key) || "0", 10);
  const quote = list[idx % list.length];
  localStorage.setItem(key, (idx + 1) % list.length);
  return quote;
}

function getGrounding(intensity){
  const pool = GROUNDING[intensity];
  return pool[Math.floor(Math.random() * pool.length)];
}

// ---------- Submit ----------
document.getElementById("submitBtn").addEventListener("click", async () => {
  const statusMsg = document.getElementById("statusMsg");
  statusMsg.textContent = "Logging...";

  const timestamp = getISTTimestamp();
  const categoryObj = CATEGORIES.find(c => c.id === selectedCategory);

  try {
    if (SCRIPT_URL && SCRIPT_URL.startsWith("http")) {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          category: categoryObj.label,
          intensity: selectedIntensity,
          timestamp: timestamp
        })
      });
    }
    statusMsg.textContent = "";
  } catch (e) {
    statusMsg.textContent = "Couldn't save to sheet — logged locally only.";
  }

  showResult(categoryObj);
});

function getISTTimestamp(){
  const now = new Date();
  // Convert to IST (UTC+5:30)
  const ist = new Date(now.getTime() + (5.5 * 60 - now.getTimezoneOffset()) * 60000);
  const pad = n => String(n).padStart(2, "0");
  return `${ist.getFullYear()}-${pad(ist.getMonth()+1)}-${pad(ist.getDate())} ${pad(ist.getHours())}:${pad(ist.getMinutes())}`;
}

function showResult(categoryObj){
  document.getElementById("step-form").classList.add("hidden");
  const quote = getNextQuote(categoryObj.id);

  if (selectedIntensity === "High") {
    // grounding first, skippable, then quote
    document.getElementById("groundingFirstText").textContent = getGrounding("High");
    document.getElementById("step-grounding-first").classList.remove("hidden");

    const proceed = () => {
      document.getElementById("step-grounding-first").classList.add("hidden");
      renderQuoteCard(categoryObj, quote, false);
    };
    document.getElementById("groundingFirstContinue").onclick = proceed;
    document.getElementById("groundingFirstSkip").onclick = proceed;
  } else {
    renderQuoteCard(categoryObj, quote, true);
  }
}

function renderQuoteCard(categoryObj, quote, showGroundingSecondary){
  document.getElementById("quoteIcon").textContent = categoryObj.icon;
  document.getElementById("quoteCategoryLabel").textContent = categoryObj.label;
  const dot = document.getElementById("intensityDot");
  dot.className = "intensity-dot " + selectedIntensity;
  document.getElementById("quoteText").textContent = quote;

  const secondary = document.getElementById("groundingSecondary");
  if (showGroundingSecondary) {
    document.getElementById("groundingSecondaryText").textContent = getGrounding(selectedIntensity);
    secondary.classList.remove("hidden");
  } else {
    secondary.classList.add("hidden");
  }

  document.getElementById("step-quote").classList.remove("hidden");
}

document.getElementById("newEntryBtn").addEventListener("click", () => {
  selectedCategory = null;
  selectedIntensity = null;
  document.querySelectorAll(".category-btn").forEach(x => x.classList.remove("selected"));
  document.querySelectorAll(".intensity-btn").forEach(x => x.classList.remove("selected"));
  document.getElementById("submitBtn").disabled = true;
  document.getElementById("step-quote").classList.add("hidden");
  document.getElementById("step-grounding-first").classList.add("hidden");
  document.getElementById("step-form").classList.remove("hidden");
});

// ---------- Analytics ----------
async function loadAnalytics(){
  if (!SCRIPT_URL || !SCRIPT_URL.startsWith("http")) return;
  try {
    const res = await fetch(SCRIPT_URL + "?action=summary");
    const data = await res.json();
    if (!data.entries || data.entries.length < 5) {
      document.getElementById("analyticsEmpty").classList.remove("hidden");
      document.getElementById("analyticsContent").classList.add("hidden");
      return;
    }
    document.getElementById("analyticsEmpty").classList.add("hidden");
    document.getElementById("analyticsContent").classList.remove("hidden");
    renderDonut(data.entries);
    renderIntensitySummary(data.entries);
  } catch (e) {
    document.getElementById("analyticsEmpty").classList.remove("hidden");
  }
}

const CATEGORY_COLORS = {
  "Routine timing off": "#8a9a7e",
  "Someone interrupted me": "#d1a26a",
  "Sensory/noise disturbance": "#c58a8a",
  "Unexpected task": "#8aa6b8",
  "Space/environment disrupted": "#b3a1c9",
  "Other": "#c9b98a"
};

function renderDonut(entries){
  const counts = {};
  entries.forEach(e => counts[e.category] = (counts[e.category] || 0) + 1);
  const total = entries.length;

  const svg = document.getElementById("donutChart");
  svg.innerHTML = "";
  let startAngle = 0;
  const cx = 100, cy = 100, r = 80, innerR = 50;

  Object.entries(counts).forEach(([cat, count]) => {
    const angle = (count / total) * 360;
    const path = describeArc(cx, cy, r, innerR, startAngle, startAngle + angle);
    const el = document.createElementNS("http://www.w3.org/2000/svg", "path");
    el.setAttribute("d", path);
    el.setAttribute("fill", CATEGORY_COLORS[cat] || "#ccc");
    svg.appendChild(el);
    startAngle += angle;
  });

  const legend = document.getElementById("donutLegend");
  legend.innerHTML = "";
  Object.entries(counts).forEach(([cat, count]) => {
    const item = document.createElement("div");
    item.className = "legend-item";
    item.innerHTML = `<span class="legend-swatch" style="background:${CATEGORY_COLORS[cat] || '#ccc'}"></span>${cat} (${count})`;
    legend.appendChild(item);
  });
}

function describeArc(cx, cy, rOuter, rInner, startAngle, endAngle){
  const toRad = a => (a - 90) * Math.PI / 180;
  const x1 = cx + rOuter * Math.cos(toRad(startAngle));
  const y1 = cy + rOuter * Math.sin(toRad(startAngle));
  const x2 = cx + rOuter * Math.cos(toRad(endAngle));
  const y2 = cy + rOuter * Math.sin(toRad(endAngle));
  const x3 = cx + rInner * Math.cos(toRad(endAngle));
  const y3 = cy + rInner * Math.sin(toRad(endAngle));
  const x4 = cx + rInner * Math.cos(toRad(startAngle));
  const y4 = cy + rInner * Math.sin(toRad(startAngle));
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${rInner} ${rInner} 0 ${largeArc} 0 ${x4} ${y4} Z`;
}

function renderIntensitySummary(entries){
  const counts = { Low: 0, Medium: 0, High: 0 };
  entries.forEach(e => counts[e.intensity] = (counts[e.intensity] || 0) + 1);
  const wrap = document.getElementById("intensitySummary");
  wrap.innerHTML = "";
  ["Low","Medium","High"].forEach(level => {
    const div = document.createElement("div");
    div.className = "stat";
    div.innerHTML = `<span class="num">${counts[level]}</span><span class="lbl">${level}</span>`;
    wrap.appendChild(div);
  });
}
