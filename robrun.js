(function () {
  const RAW = `
W|DP-9 Mk1|0|0|300||
W|DP-9 Mk2|1|25000|-|DP-9 Mk1|
W|LBR-44 Mk1|2|100000|20000|DP-9 Mk1|
W|LBR-44 Mk2|2|200000|-|LBR-44 Mk1|
W|Vulture 50 Mk1|3|300000|50000|LBR-44 Mk1|
W|Vulture 50 Mk2|3|600000|-|Vulture 50 Mk1|
W|Harris 500 Mk1|0|15000|3500||
W|Harris 500 Mk2|1|30000|-|Harris 500 Mk1|
W|Harris 500 Mk3|2|60000|-|Harris 500 Mk2|
W|ORDR-12 Mk1|2|160000|28000|Harris 500 Mk1|
W|ORDR-12 Mk2|2|320000|-|ORDR-12 Mk1|
W|ORDR-12 Mk3|3|640000|-|ORDR-12 Mk2|
W|TAG-12K Mk1|3|400000|110000|ORDR-12 Mk1|
W|TAG-12K Mk2|3|800000|-|TAG-12K Mk1|
W|TAG-12K Mk3|3|1600000|-|TAG-12K Mk2|
W|MC-10 Mk1|0|15000|3500||
W|MC-10 Mk2|1|30000|-|MC-10 Mk1|
W|MC-10 Mk3|2|60000|-|MC-10 Mk2|
W|JP-7 Mk1|2|160000|29000|MC-10 Mk1|
W|JP-7 Mk2|2|320000|-|JP-7 Mk1|
W|JP-7 Mk3|3|640000|-|JP-7 Mk2|
W|AP Scalar Mk1|3|400000|115000|JP-7 Mk1|
W|AP Scalar Mk2|3|800000|-|AP Scalar Mk1|
W|AP Scalar Mk3|3|1600000|-|AP Scalar Mk2|
W|CB45 Mk1|1|15000|3780|MC-10 Mk1|15
W|CB45 Mk2|1|30000|-|CB45 Mk1|25
W|CB45 Mk3|2|60000|-|CB45 Mk2|35
W|KL-545 Mk1|1|25000|6000||
W|KL-545 Mk2|1|50000|-|KL-545 Mk1|
W|KL-545 Mk3|2|100000|-|KL-545 Mk2|
W|RC 5.56 Mk1|2|200000|32000|KL-545 Mk1|
W|RC 5.56 Mk2|2|400000|-|RC 5.56 Mk1|
W|RC 5.56 Mk3|3|800000|-|RC 5.56 Mk2|
W|SR Reaper Mk1|3|400000|120000|RC 5.56 Mk1|
W|SR Reaper Mk2|3|800000|-|SR Reaper Mk1|
W|SR Reaper Mk3|3|1600000|-|SR Reaper Mk2|
W|DRM-14 Mk1|3|200000|103500|RC 5.56 Mk1|950
W|DRM-14 Mk2|3|400000|-|DRM-14 Mk1|975
W|DRM-14 Mk3|3|800000|-|DRM-14 Mk2|1000
W|STAR-H Mk1|2|100000|27500|KL-545 Mk1|180
W|STAR-H Mk2|2|200000|-|STAR-H Mk1|190
W|STAR-H Mk3|3|400000|-|STAR-H Mk2|200
V|Fukurou Tensa|1|50000|200000||
V|Steering Rack|2|100000|68000|Fukurou Tensa|
V|Racing Rotor|2|100000|61500|Steering Rack|75
V|Reinforced Steering Rack|3|220000|270000|Steering Rack|
V|ECU|1|30000|14000|Fukurou Tensa|
V|Improved ECU|2|160000|75000|ECU|
V|High-performance ECU|3|260000|330000|Improved ECU|
V|Royal E|2|200000|1000000|Fukurou Tensa|
V|Longhorn Wild|3|500000|4500000|Royal E|
V|Buletti Soltempra|3|2000000|10000000|Longhorn Wild|
V|Turbo Kit|2|110000|79500|Royal E|
V|Improved Turbo Kit|3|210000|238000|Turbo Kit|
V|Intercooler|2|120000|72000|Fukurou Tensa|
V|Improved Intercooler|3|200000|270000|Intercooler|
V|Longhorn Van|1|50000|180000||
V|Longhorn Titan|2|200000|900000|Longhorn Van|
V|Royal J|3|500000|4000000|Longhorn Titan|
V|Police Radio (Legendary)|3|200000|300000|Longhorn Titan|275
V|Cargo Rack|2|150000|86500|Longhorn Titan|
V|Reinforced Cargo Rack|3|250000|350000|Cargo Rack|
V|Trunk Bags|1|20000|1200|Longhorn Van|
V|Large Trunk Bags|2|130000|70500|Trunk Bags|
V|Spacious Trunk Bags|3|220000|270000|Large Trunk Bags|
V|Romanov R8|3|2000000|10000000||
D|Land Plot Title (Uncommon)|0|50000|100000||
D|Land Plot Title (Epic)|1|200000|800000|Land Plot Title (Uncommon)|
D|Land Plot Title (Legendary)|2|1000000|2000000|Land Plot Title (Epic)|
D|Settlement Title (Uncommon)|0|100000|200000||
D|Settlement Title (Epic)|1|500000|2000000|Settlement Title (Uncommon)|
D|Settlement Title (Legendary)|2|2000000|6000000|Settlement Title (Epic)|
D|Sergeant's Badge|1|30000|8000||
D|Lieutenant's Badge|2|200000|40000|Sergeant's Badge|
D|Captain's Badge|3|500000|100000|Lieutenant's Badge|
P|Grow Room|1|150000|100000||
P|Grow Table|1|30000|40000|Grow Room|
P|Fan|1|100000|25000|Grow Table|
P|Water Pump|2|200000|70000|Fan|
P|UV Lamp|3|500000|250000|Water Pump|
P|Chemical Laboratory|1|160000|110000||
P|Lab Table|1|10000|15000|Chemical Laboratory|
P|Laboratory Scales|2|15000|15000|Lab Table|335
P|Chemical Reactor (Uncommon)|1|20000|40000|Chemical Laboratory|
P|Chemical Reactor (Epic)|2|150000|300000|Chemical Reactor (Uncommon)|
P|Chemical Reactor (Legendary)|3|350000|700000|Chemical Reactor (Epic)|
P|Industrial Engine|1|10000|20000|Chemical Reactor (Uncommon)|
P|Industrial Thermometer|2|50000|120000|Industrial Engine|
P|Chemical Converter|3|150000|300000|Industrial Thermometer|
P|Industrial Freezer (Uncommon)|1|15000|20000|Chemical Reactor (Uncommon)|
P|Industrial Freezer (Epic)|2|30000|90000|Industrial Freezer (Uncommon)|
P|Industrial Freezer (Legendary)|3|100000|250000|Industrial Freezer (Epic)|
P|Improved Evaporator|2|40000|100000|Industrial Freezer (Uncommon)|
P|Quality Refrigerant|3|100000|250000|Improved Evaporator|
F|Banknote Counter (Uncommon)|1|10000|30000||
F|Banknote Counter (Epic)|2|50000|65000|Banknote Counter (Uncommon)|
F|Banknote Counter (Legendary)|3|150000|150000|Banknote Counter (Epic)|
F|Cargo Workbench|1|5000|15000||
F|Locksmith Tools|1|20000|15000|Cargo Workbench|
F|Cargo Saw|2|45000|41000|Locksmith Tools|
F|Bench Vise|3|100000|250000|Cargo Saw|
F|Contraband Workbench|1|20000|20000||
F|Tool Box (Epic)|2|150000|200000|Contraband Workbench|
F|Tool Box (Legendary)|3|300000|400000|Tool Box (Epic)|
F|Label Printer (Uncommon)|1|15000|30000|Contraband Workbench|
F|Label Printer (Legendary)|3|75000|150000|Label Printer (Uncommon)|
F|First Aid Cabinet|1|5000|15000||
F|Small Nightstand|1|15000|4000||
F|Small Safe|1|50000|32000|Small Nightstand|
F|Medium Safe|2|100000|68000|Small Safe|
F|Large Safe|3|150000|127000|Medium Safe|
F|Medium Nightstand|2|30000|29200|Small Nightstand|
F|Large Nightstand|3|50000|45400|Medium Nightstand|
F|Small Rack|1|12000|3500||
F|Medium Rack|2|25000|26500|Small Rack|
F|Large Rack|3|45000|46500|Medium Rack|
F|Small Security Cabinet|1|40000|30300|Small Rack|30
F|Medium Security Cabinet|2|90000|70000|Small Security Cabinet|140
F|Large Security Cabinet|3|130000|132000|Medium Security Cabinet|500
F|Collection Table|1|5000|15000||
F|Additional Collection|1|25000|34000|Collection Table|
F|Special Collection|2|50000|100000|Additional Collection|
F|Unique Collection|3|100000|250000|Special Collection|
K|Trailer|1|0|10000||
K|Small House|2|200000|600000|Trailer|
K|Mesh Fence|1|25000|15000||
K|Metal Fence|2|100000|50000|Mesh Fence|
K|Concrete Fence|3|200000|500000|Metal Fence|
K|Electronic Fuse (Uncommon)|1|10000|20000||
K|Electronic Fuse (Epic)|2|150000|100000|Electronic Fuse (Uncommon)|
K|Electronic Fuse (Legendary)|3|500000|250000|Electronic Fuse (Epic)|
K|Alarm System (Uncommon)|1|15000|30000|Electronic Fuse (Uncommon)|105
K|Alarm System (Epic)|2|25000|60000|Electronic Fuse (Uncommon)|
K|Alarm System (Legendary)|2|50000|200000|Alarm System (Epic)|
K|Car Lift|1|5000|10000||
K|Car Garage|1|10000|25000|Car Lift|
K|Large Car Garage|2|40000|70000|Car Garage|
K|Helipad|2|200000|500000|Large Car Garage|
K|Workshop|1|125000|75000|Car Lift|
K|Warehouse|1|130000|100000|Workshop|
G|Sports Bag (Uncommon)|0|5000|5000||
G|Sports Bag (Epic)|2|35000|15000|Sports Bag (Uncommon)|
G|Sports Bag (Legendary)|3|150000|40000|Sports Bag (Epic)|
G|Light Body Armor|0|5000|4000||
G|Medium Body Armor|1|15000|15000|Light Body Armor|
G|Assault Body Armor|2|250000|70000|Medium Body Armor|
G|Heavy Body Armor|3|500000|140000|Assault Body Armor|
G|Steel Plate (Uncommon)|0|5000|1000|Light Body Armor|
G|Steel Plate (Legendary)|3|100000|5000|Steel Plate (Uncommon)|225
G|Versatile Pouch (Common)|0|5000|250||
G|Versatile Pouch (Uncommon)|1|10000|1200|Versatile Pouch (Common)|
G|Flash Grenade|1|25000|4000|Versatile Pouch (Uncommon)|
G|Frag Grenade|2|75000|14960|Flash Grenade|
G|Versatile Pouch (Epic)|2|25000|2700|Versatile Pouch (Uncommon)|
G|Versatile Pouch (Legendary)|3|50000|12000|Versatile Pouch (Epic)|
G|Painkillers (Uncommon)|0|10000|500|Versatile Pouch (Common)|
G|AFAK|1|5000|500|Painkillers (Uncommon)|5
G|Painkillers (Epic)|2|20000|1600|Painkillers (Uncommon)|
G|Injector (Epic)|2|25000|2000|Painkillers (Epic)|
G|Injector (Legendary)|3|50000|6000|Injector (Epic)|
T|Action Camera (Uncommon)|0|5000|15000||
T|Code Tablet|2|25000|20000|Action Camera (Uncommon)|
T|USB Hacking Tool|2|50000|50000|Code Tablet|
T|Deposit Box Keys|3|100000|100000|USB Hacking Tool|
T|Cargo Sheet|2|50000|30000|Action Camera (Uncommon)|410
T|Action Camera (Epic)|2|35000|30000|Action Camera (Uncommon)|
T|Action Camera (Legendary)|3|80000|50000|Action Camera (Epic)|
T|Lockpick|0|5000|99||
T|Master Key|2|50000|55000|Lockpick|
T|Mini Drill|2|100000|18000|Lockpick|
T|Police Radio (Epic)|2|25000|10000||60
`;

  const DICT = window.LANG;

  let lang = "en";
  const browserTr = () => (navigator.language || "").toLowerCase().indexOf("tr") === 0;
  try {
    const saved = localStorage.getItem("lang");
    lang = saved === "tr" || saved === "en" ? saved : (browserTr() ? "tr" : "en");
  } catch (e) {
    lang = browserTr() ? "tr" : "en";
  }

  const t = (k, v) => {
    let s = DICT[lang][k] !== undefined ? DICT[lang][k] : DICT.en[k];
    if (v) Object.keys(v).forEach((x) => { s = s.split("{" + x + "}").join(v[x]); });
    return s;
  };
  const num = (n) => n.toLocaleString(lang === "tr" ? "tr-TR" : "en-US");
  const fmt = (n) => n === null ? "-" : n === 0 ? t("free") : "$" + num(n);

  const CAT_KEYS = ["W", "V", "D", "P", "F", "K", "G", "T"];

  const WEAPON_META = {
    "RC 5.56": ["Rifle", "S"], "AP Scalar": ["SMG", "S"], "SR Reaper": ["Rifle", "S"], "TAG-12K": ["Shotgun", "S"],
    "KL-545": ["Rifle", "A"], "STAR-H": ["Rifle", "A"], "JP-7": ["SMG", "A"], "ORDR-12": ["Shotgun", "A"],
    "Harris 500": ["Pump shotgun", "B"], "DRM-14": ["Semi-auto rifle", "B"], "MC-10": ["SMG", "B"], "CB45": ["SMG", "B"], "Vulture 50": ["Pistol", "B"],
    "DP-9": ["Pistol", "C"], "LBR-44": ["Revolver", "C"]
  };

  const FARMS = [
    {
      key: "weed", icon: "fa-seedling",
      setup: [["Grow Room", 150000, 100000], ["Grow Table (6 plants, max 6 per room)", 30000, 40000, "Grow Table (6 bitki, odada en fazla 6 tane)"]],
      extras: [["Fan (+12% growth)", 100000, 25000, "Fan (+%12 büyüme)"], ["Water Pump (+14%)", 200000, 70000, "Water Pump (+%14)"], ["UV Lamp (+24%)", 500000, 250000, "UV Lamp (+%24)"]]
    },
    {
      key: "chem", icon: "fa-flask",
      setup: [["Chemical Laboratory", 160000, 110000], ["Chemical Reactor I", 20000, 40000], ["Industrial Freezer I", 15000, 20000]],
      extras: [["Lab Table (crush to powder)", 10000, 15000, "Lab Table (toza öğütme)"], ["Industrial Engine", 10000, 20000], ["Industrial Thermometer", 50000, 120000], ["Improved Evaporator", 40000, 100000]]
    },
    {
      key: "cargo", icon: "fa-box-open",
      setup: [["Contraband Workbench", 20000, 20000]],
      extras: [["Label Printer (+15% speed)", 15000, 30000, "Label Printer (+%15 hız)"], ["Tool Box (+1 slot)", 150000, 200000]]
    }
  ];

  const farmName = (f) => t("farm_" + f.key);
  const rowLabel = (r) => lang === "tr" && r[3] ? r[3] : r[0];

  const RAW_ROWS = RAW.trim().split("\n");
  const goods = RAW_ROWS.map((l) => {
    const p = l.split("|");
    return { c: p[0], n: p[1], t: +p[2], r: +p[3], b: p[4] === "-" ? null : +p[4], p: p[5] || "", j: p[6] ? +p[6] : 0 };
  });
  const byName = {};
  goods.forEach((i) => { byName[i.n] = i; });
  goods.forEach((i) => {
    if (i.b === null) {
      i.b = byName[i.n.replace(/ Mk\d$/, " Mk1")].b;
    }
  });

  const tabs = document.querySelectorAll("#tabs .tab");
  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabs.forEach((b) => b.classList.toggle("active", b === btn));
      ["planner", "shipments", "farms"].forEach((k) => {
        document.getElementById("panel-" + k).hidden = k !== btn.dataset.tab;
      });
    });
  });

  const rowsEl = document.getElementById("rows");
  const countEl = document.getElementById("count");
  const searchEl = document.getElementById("search");
  const tierEl = document.getElementById("tierSel");
  const catsEl = document.getElementById("cats");
  let activeCat = "";

  function buildCats() {
    catsEl.innerHTML = "";
    [""].concat(CAT_KEYS).forEach((k) => {
      const b = document.createElement("button");
      b.className = "catbtn" + (k === activeCat ? " active" : "");
      b.textContent = k === "" ? t("all") : t("cat_" + k);
      b.addEventListener("click", () => {
        activeCat = k;
        catsEl.querySelectorAll(".catbtn").forEach((x) => x.classList.toggle("active", x === b));
        renderRows();
      });
      catsEl.appendChild(b);
    });
  }

  function requires(i) {
    const parts = [];
    if (i.p) parts.push(i.p);
    if (i.j) parts.push(num(i.j) + " " + t("jail"));
    return parts.length ? parts.join(" + ") : "-";
  }

  function renderRows() {
    const q = searchEl.value.trim().toLowerCase();
    const tier = tierEl.value;
    const list = goods.filter((i) =>
      (!activeCat || i.c === activeCat) &&
      (tier === "" || i.t === +tier) &&
      (!q || i.n.toLowerCase().includes(q))
    );
    rowsEl.innerHTML = list.map((i) =>
      "<tr><td>" + i.n + "</td><td>" + t("cat_" + i.c) + "</td><td>" + i.t + "</td><td class=\"num\">" + fmt(i.r) +
      "</td><td class=\"num\">" + fmt(i.b) + "</td><td>" + requires(i) + "</td></tr>"
    ).join("");
    countEl.textContent = t("count", { a: list.length, b: goods.length });
  }
  searchEl.addEventListener("input", renderRows);
  tierEl.addEventListener("change", renderRows);

  const budgetEl = document.getElementById("budget");
  const planOut = document.getElementById("planOut");
  let style = "action";

  const families = goods.filter((i) => i.c === "W" && / Mk1$/.test(i.n)).map((m1) => {
    const base = m1.n.replace(/ Mk1$/, "");
    let cur = m1, research = 0, lvl = 0;
    while (cur) {
      research += cur.r;
      lvl = Math.max(lvl, cur.t);
      cur = byName[cur.p] || null;
    }
    const m2 = byName[base + " Mk2"], m3 = byName[base + " Mk3"];
    const upg = (m2 ? m2.r : 0) + (m3 ? m3.r : 0);
    const meta = WEAPON_META[base];
    return { base: base, type: meta[0], rank: meta[1], lvl: lvl, buy: m1.b, research: research, total: research + m1.b, jail: m1.j, upg: upg };
  });
  const RANK = { S: 0, A: 1, B: 2, C: 3 };

  function actionPlan(budget) {
    const sorted = families.slice().sort((a, b) => RANK[a.rank] - RANK[b.rank] || a.total - b.total);
    const ok = sorted.filter((f) => !f.jail && f.total <= budget);
    let head;
    if (ok.length) {
      const best = ok[0];
      head = "<div class=\"pick\"><small>" + t("best_for", { x: fmt(budget) }) + "</small><h3>" + best.base + " <span class=\"tag\">" + t("tier", { r: best.rank }) + "</span></h3><p>" +
        t("action_text", { type: t(best.type), r: fmt(best.research), b: fmt(best.buy), t: "<b>" + fmt(best.total) + "</b>", l: best.lvl }) +
        (best.upg ? t("action_upg", { u: fmt(best.upg) }) : "") + "</p></div>";
    } else {
      const next = sorted.filter((f) => !f.jail).sort((a, b) => a.total - b.total)[0];
      head = "<div class=\"pick\"><small>" + t("not_enough") + "</small><h3>" + t("cheapest", { x: next.base }) + "</h3><p>" + t("need_more", { x: fmt(next.total - budget), t: fmt(next.total) }) + "</p></div>";
    }
    const rows = sorted.map((f) => {
      let status;
      if (f.jail) status = "<span class=\"tag warn\">" + num(f.jail) + " " + t("jail") + "</span>";
      else if (f.total <= budget) status = "<span class=\"tag ok\">" + t("affordable") + "</span>";
      else status = "<span class=\"tag no\">" + t("need", { x: fmt(f.total - budget) }) + "</span>";
      return "<tr><td>" + f.base + "</td><td>" + t(f.type) + "</td><td><span class=\"tag\">" + f.rank + "</span></td><td>" + f.lvl +
        "</td><td class=\"num\">" + fmt(f.research) + "</td><td class=\"num\">" + fmt(f.buy) + "</td><td class=\"num\">" + fmt(f.total) + "</td><td>" + status + "</td></tr>";
    }).join("");
    return head + "<div class=\"table-wrap\"><table><thead><tr><th>" + t("p_weapon") + "</th><th>" + t("p_type") + "</th><th>" + t("p_tier") + "</th><th>" + t("p_lvl") +
      "</th><th>" + t("p_chain") + "</th><th>" + t("p_buy") + "</th><th>" + t("p_total") + "</th><th>" + t("p_status") + "</th></tr></thead><tbody>" + rows + "</tbody></table></div>";
  }

  const farmCost = (rows) => rows.reduce((s, r) => s + r[1] + r[2], 0);

  function calmPlan(budget) {
    const withCost = FARMS.map((f) => Object.assign({ cost: farmCost(f.setup) }, f));
    const ok = withCost.filter((f) => f.cost <= budget).sort((a, b) => a.cost - b.cost);
    let head;
    if (ok.length) {
      head = "<div class=\"pick\"><small>" + t("start_with", { x: fmt(budget) }) + "</small><h3>" + ok.map(farmName).join(", ") + "</h3><p>" +
        ok.map((f) => t("farm_line", { name: farmName(f), cost: fmt(f.cost), h: t("na") })).join(". ") + ".</p></div>";
    } else {
      const cheapest = withCost.slice().sort((a, b) => a.cost - b.cost)[0];
      head = "<div class=\"pick\"><small>" + t("not_enough") + "</small><h3>" + t("first_goal", { x: farmName(cheapest) }) + "</h3><p>" + t("need_setup", { x: fmt(cheapest.cost - budget), c: fmt(cheapest.cost) }) + "</p></div>";
    }
    const steps = [];
    FARMS.forEach((f) => {
      steps.push([t("setup_of", { name: farmName(f) }), farmCost(f.setup)]);
      f.extras.forEach((e) => steps.push([farmName(f) + ": " + rowLabel(e), e[1] + e[2]]));
    });
    steps.sort((a, b) => a[1] - b[1]);
    const rows = steps.map((s) =>
      "<tr><td>" + s[0] + "</td><td class=\"num\">" + fmt(s[1]) + "</td><td>" +
      (s[1] <= budget ? "<span class=\"tag ok\">" + t("affordable") + "</span>" : "<span class=\"tag no\">" + t("need", { x: fmt(s[1] - budget) }) + "</span>") + "</td></tr>"
    ).join("");
    return head + "<div class=\"table-wrap\"><table><thead><tr><th>" + t("th_step") + "</th><th>" + t("th_cost") + "</th><th>" + t("th_status") + "</th></tr></thead><tbody>" + rows + "</tbody></table></div>";
  }

  function renderPlan() {
    const budget = Math.max(0, Number(budgetEl.value) || 0);
    planOut.innerHTML = style === "action" ? actionPlan(budget) : calmPlan(budget);
  }

  document.querySelectorAll("#styleSeg button").forEach((b) => {
    b.addEventListener("click", () => {
      style = b.dataset.style;
      document.querySelectorAll("#styleSeg button").forEach((x) => x.classList.toggle("active", x === b));
      renderPlan();
    });
  });
  document.querySelectorAll("#chips button").forEach((b) => {
    b.addEventListener("click", () => {
      budgetEl.value = b.dataset.v;
      renderPlan();
    });
  });
  budgetEl.addEventListener("input", renderPlan);

  function renderFarms() {
    document.getElementById("farmGrid").innerHTML = FARMS.map((f) => {
      const list = (rows) => "<ul>" + rows.map((r) => "<li><span>" + rowLabel(r) + "</span><span>" + fmt(r[1] + r[2]) + "</span></li>").join("") + "</ul>";
      return "<article class=\"farm\"><div class=\"icon\"><i class=\"fa-solid " + f.icon + "\"></i></div><h3>" + farmName(f) + "</h3>" +
        "<div class=\"big\">" + t("na") + "</div><p>" + t("note_" + f.key) + "</p>" +
        "<h4>" + t("f_setup", { x: fmt(farmCost(f.setup)) }) + "</h4>" + list(f.setup) +
        "<h4>" + t("f_upg") + "</h4>" + list(f.extras) +
        "<h4>" + t("f_how") + "</h4><p>" + t("how_" + f.key) + "</p><p>" + t("f_payback") + " <b>" + t("na") + "</b></p></article>";
    }).join("");
  }

  const langBtns = document.querySelectorAll("#langSw button");

  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    langBtns.forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
    buildCats();
    renderRows();
    renderPlan();
    renderFarms();
  }

  langBtns.forEach((b) => {
    b.addEventListener("click", () => {
      lang = b.dataset.lang;
      try { localStorage.setItem("lang", lang); } catch (e) {}
      applyLang();
    });
  });

  applyLang();
})();
