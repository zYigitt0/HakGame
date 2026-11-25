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

  const has = (k) => DICT[lang][k] !== undefined || DICT.en[k] !== undefined;
  const t = (k, v) => {
    let s = DICT[lang][k] !== undefined ? DICT[lang][k] : DICT.en[k];
    if (v) Object.keys(v).forEach((x) => { s = s.split("{" + x + "}").join(v[x]); });
    return s;
  };
  const num = (n) => n.toLocaleString(lang === "tr" ? "tr-TR" : "en-US");
  const fmt = (n) => n === null ? "-" : n === 0 ? t("free") : "$" + num(n);
  const trimNum = (x) => {
    const s = String(Math.round(x * 10) / 10);
    return lang === "tr" ? s.replace(".", ",") : s;
  };
  const short = (n) => n === 0 ? t("free") : n >= 1000000 ? "$" + trimNum(n / 1000000) + "M" : n >= 1000 ? "$" + trimNum(n / 1000) + "K" : "$" + n;
  const lbl = (n) => has("lbl_" + n) ? t("lbl_" + n) : n;

  const CAT_KEYS = ["W", "V", "D", "P", "F", "K", "G", "T"];

  const WEAPON_META = {
    "RC 5.56": ["Rifle", "S"], "AP Scalar": ["SMG", "S"], "SR Reaper": ["Rifle", "S"], "TAG-12K": ["Shotgun", "S"],
    "KL-545": ["Rifle", "A"], "STAR-H": ["Rifle", "A"], "JP-7": ["SMG", "A"], "ORDR-12": ["Shotgun", "A"],
    "Harris 500": ["Pump shotgun", "B"], "DRM-14": ["Semi-auto rifle", "B"], "MC-10": ["SMG", "B"], "CB45": ["SMG", "B"], "Vulture 50": ["Pistol", "B"],
    "DP-9": ["Pistol", "C"], "LBR-44": ["Revolver", "C"]
  };

  const ARMORS = ["Heavy Body Armor", "Assault Body Armor", "Medium Body Armor", "Light Body Armor"];

  const FARMS = [
    {
      key: "weed", icon: "fa-seedling",
      setup: ["Grow Room", "Grow Table"],
      extras: ["Fan", "Water Pump", "UV Lamp"]
    },
    {
      key: "chem", icon: "fa-flask",
      setup: ["Chemical Laboratory", "Chemical Reactor (Uncommon)", "Industrial Freezer (Uncommon)"],
      extras: ["Lab Table", "Industrial Engine", "Industrial Thermometer", "Improved Evaporator"]
    },
    {
      key: "cargo", icon: "fa-box-open",
      setup: ["Contraband Workbench"],
      extras: ["Label Printer (Uncommon)", "Tool Box (Epic)"]
    }
  ];

  const CALM_PATH = [
    ["ps_bench", ["Contraband Workbench"]],
    ["ps_weed", ["Grow Room", "Grow Table"]],
    ["ps_fan", ["Fan"]],
    ["ps_pump", ["Water Pump"]],
    ["ps_chem", ["Chemical Laboratory", "Chemical Reactor (Uncommon)", "Industrial Freezer (Uncommon)"]],
    ["ps_uv", ["UV Lamp"]],
    ["ps_label", ["Label Printer (Uncommon)"]],
    ["ps_tool", ["Tool Box (Epic)"]]
  ];

  const goods = RAW.trim().split("\n").map((l, idx) => {
    const p = l.split("|");
    return { i: idx, c: p[0], n: p[1], t: +p[2], r: +p[3], b: p[4] === "-" ? null : +p[4], p: p[5] || "", j: p[6] ? +p[6] : 0 };
  });
  const byName = {};
  goods.forEach((i) => { byName[i.n] = i; });
  goods.forEach((i) => {
    if (i.b === null) {
      i.b = byName[i.n.replace(/ Mk\d$/, " Mk1")].b;
    }
  });

  const kids = {};
  goods.forEach((g) => {
    const par = byName[g.p] ? g.p : "";
    (kids[par] = kids[par] || []).push(g);
  });

  const chainOf = (g) => {
    const arr = [];
    let cur = g;
    while (cur) {
      arr.unshift(cur);
      cur = byName[cur.p] || null;
    }
    return arr;
  };

  const descendantsOf = (g) => {
    const out = [];
    const walk = (n) => (kids[n.n] || []).forEach((c) => { out.push(c); walk(c); });
    walk(g);
    return out;
  };

  let owned = new Set();
  try {
    const raw = JSON.parse(localStorage.getItem("rr_owned") || "[]");
    raw.forEach((n) => { if (byName[n]) owned.add(n); });
  } catch (e) {
    owned = new Set();
  }
  const saveOwned = () => {
    try { localStorage.setItem("rr_owned", JSON.stringify(Array.from(owned))); } catch (e) {}
  };

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
  const menuCatsEl = document.getElementById("menuCats");
  const treeEl = document.getElementById("tree");
  const ownedCountEl = document.getElementById("ownedCount");
  let activeCat = "";
  let menuCat = "W";

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

  function buildMenuCats() {
    menuCatsEl.innerHTML = "";
    CAT_KEYS.forEach((k) => {
      const b = document.createElement("button");
      b.className = "catbtn" + (k === menuCat ? " active" : "");
      b.textContent = t("cat_" + k);
      b.addEventListener("click", () => {
        menuCat = k;
        menuCatsEl.querySelectorAll(".catbtn").forEach((x) => x.classList.toggle("active", x === b));
        renderTree();
      });
      menuCatsEl.appendChild(b);
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

  function nodeHtml(g) {
    const st = owned.has(g.n) ? "own" : (!g.p || owned.has(g.p) ? "avail" : "lock");
    const jail = g.j ? "<em>" + num(g.j) + " " + t("jail") + "</em>" : "";
    const title = g.n + " | " + t("th_research") + " " + fmt(g.r) + " | " + t("th_buy") + " " + fmt(g.b) + " | " + t("th_lvl") + " " + g.t;
    const ch = kids[g.n] || [];
    return "<div class=\"tn\"><button class=\"node " + st + "\" data-i=\"" + g.i + "\" title=\"" + title.replace(/"/g, "&quot;") + "\"><b>" + g.n + "</b><span>" +
      short(g.r) + " &middot; " + short(g.b) + "</span>" + jail + "</button>" +
      (ch.length ? "<div class=\"kids\">" + ch.map(nodeHtml).join("") + "</div>" : "") + "</div>";
  }

  function renderTree() {
    const roots = goods.filter((g) => g.c === menuCat && !byName[g.p]);
    treeEl.innerHTML = "<div class=\"roots\">" + roots.map(nodeHtml).join("") + "</div>";
  }

  function renderOwnedCount() {
    ownedCountEl.textContent = t("owned_count", { n: owned.size });
    document.getElementById("planOwned").textContent = t("owned_info", { n: owned.size });
  }

  treeEl.addEventListener("click", (ev) => {
    const btn = ev.target.closest(".node");
    if (!btn) return;
    const g = goods[+btn.dataset.i];
    if (owned.has(g.n)) {
      owned.delete(g.n);
      descendantsOf(g).forEach((d) => owned.delete(d.n));
    } else {
      chainOf(g).forEach((a) => owned.add(a.n));
    }
    saveOwned();
    renderTree();
    renderOwnedCount();
    renderPlan();
  });

  document.getElementById("resetOwned").addEventListener("click", () => {
    owned = new Set();
    saveOwned();
    renderTree();
    renderOwnedCount();
    renderPlan();
  });

  document.querySelectorAll("#viewSeg button").forEach((b) => {
    b.addEventListener("click", () => {
      document.querySelectorAll("#viewSeg button").forEach((x) => x.classList.toggle("active", x === b));
      document.getElementById("view-menu").hidden = b.dataset.view !== "menu";
      document.getElementById("view-list").hidden = b.dataset.view !== "list";
    });
  });

  const budgetEl = document.getElementById("budget");
  const jailEl = document.getElementById("jail");
  const levelEl = document.getElementById("level");
  const planOut = document.getElementById("planOut");
  let style = "action";

  const limits = () => ({
    budget: Math.max(0, Number(budgetEl.value) || 0),
    jail: Math.max(0, Number(jailEl.value) || 0),
    level: Number(levelEl.value)
  });

  function needOf(g, lim) {
    const todo = chainOf(g).filter((x) => !owned.has(x.n));
    const research = todo.reduce((s, x) => s + x.r, 0);
    const lvl = todo.reduce((m, x) => Math.max(m, x.t), 0);
    const jail = todo.reduce((m, x) => Math.max(m, x.j), 0);
    return { todo: todo, research: research, lvl: lvl, jail: jail, blockedLevel: lvl > lim.level, blockedJail: jail > lim.jail };
  }

  const RANK = { S: 0, A: 1, B: 2, C: 3 };

  function statusTag(need, total, budget) {
    if (need.blockedJail) return "<span class=\"tag warn\">" + num(need.jail) + " " + t("jail") + "</span>";
    if (need.blockedLevel) return "<span class=\"tag warn\">" + t("need_level", { n: need.lvl }) + "</span>";
    if (total <= budget) return "<span class=\"tag ok\">" + t("affordable") + "</span>";
    return "<span class=\"tag no\">" + t("need", { x: fmt(total - budget) }) + "</span>";
  }

  function pathTable(steps, budget) {
    let run = 0;
    const rows = steps.map((s, idx) => {
      run += s.cost;
      let status;
      if (s.warn) status = "<span class=\"tag warn\">" + s.warn + "</span>";
      else if (run <= budget) status = "<span class=\"tag ok\">" + t("affordable") + "</span>";
      else status = "<span class=\"tag no\">" + t("need", { x: fmt(run - budget) }) + "</span>";
      return "<tr><td>" + (idx + 1) + "</td><td>" + s.text + "</td><td class=\"num\">" + fmt(s.cost) + "</td><td class=\"num\">" + fmt(run) + "</td><td>" + status + "</td></tr>";
    }).join("");
    return "<h4 class=\"sub\">" + t("path_title") + "</h4><div class=\"table-wrap\"><table><thead><tr><th>#</th><th>" + t("th_stepn") + "</th><th>" + t("th_cost") + "</th><th>" + t("th_run") + "</th><th>" + t("th_status") + "</th></tr></thead><tbody>" + rows + "</tbody></table></div>";
  }

  function unlockSteps(need, buyItem, lim) {
    const steps = need.todo.map((x) => ({
      text: t("step_unlock", { x: x.n }),
      cost: x.r,
      warn: x.t > lim.level ? t("need_level", { n: x.t }) : (x.j > lim.jail ? num(x.j) + " " + t("jail") : "")
    }));
    if (buyItem) steps.push({ text: t("step_buy", { x: buyItem.n }), cost: buyItem.b, warn: "" });
    return steps;
  }

  function actionPlan(lim) {
    const fams = goods.filter((i) => i.c === "W" && / Mk1$/.test(i.n)).map((m1) => {
      const base = m1.n.replace(/ Mk1$/, "");
      const need = needOf(m1, lim);
      const meta = WEAPON_META[base];
      return { base: base, m1: m1, type: meta[0], rank: meta[1], need: need, buy: m1.b, total: need.research + m1.b };
    });
    const open = fams.filter((f) => !f.need.blockedLevel && !f.need.blockedJail);
    const sorted = fams.slice().sort((a, b) => RANK[a.rank] - RANK[b.rank] || a.total - b.total);
    const ok = open.filter((f) => f.total <= lim.budget).sort((a, b) => RANK[a.rank] - RANK[b.rank] || a.total - b.total);
    let head = "";
    let steps = [];
    if (ok.length) {
      const best = ok[0];
      head = "<div class=\"pick\"><small>" + t("best_for", { x: fmt(lim.budget) }) + "</small><h3>" + best.base + " <span class=\"tag\">" + t("tier", { r: best.rank }) + "</span></h3><p>" +
        t("action_text", { type: t(best.type), r: fmt(best.need.research), b: fmt(best.buy), t: "<b>" + fmt(best.total) + "</b>" }) +
        (best.need.lvl > 0 ? t("action_level", { l: best.need.lvl }) : "") + "</p></div>";
      steps = unlockSteps(best.need, best.m1, lim);
      let left = lim.budget - best.total;
      const m2 = byName[best.base + " Mk2"];
      if (m2 && !owned.has(m2.n) && m2.r <= left && m2.t <= lim.level && m2.j <= lim.jail) {
        steps.push({ text: t("step_mk2", { x: m2.n }), cost: m2.r, warn: "" });
        left -= m2.r;
      }
      for (let k = 0; k < ARMORS.length; k++) {
        const a = byName[ARMORS[k]];
        const an = needOf(a, lim);
        const cost = an.research + a.b;
        if (!an.blockedLevel && !an.blockedJail && cost <= left) {
          steps = steps.concat(unlockSteps(an, a, lim));
          break;
        }
      }
    } else if (open.length) {
      const next = open.slice().sort((a, b) => a.total - b.total)[0];
      head = "<div class=\"pick\"><small>" + t("not_enough") + "</small><h3>" + t("cheapest", { x: next.base }) + "</h3><p>" + t("need_more", { x: fmt(next.total - lim.budget), t: fmt(next.total) }) + "</p></div>";
      steps = unlockSteps(next.need, next.m1, lim);
    } else {
      head = "<div class=\"pick\"><small>" + t("not_enough") + "</small><h3>" + t("none_available") + "</h3></div>";
    }
    const rows = sorted.map((f) =>
      "<tr><td>" + f.base + "</td><td>" + t(f.type) + "</td><td><span class=\"tag\">" + f.rank + "</span></td><td>" + Math.max(f.need.lvl, 0) +
      "</td><td class=\"num\">" + fmt(f.need.research) + "</td><td class=\"num\">" + fmt(f.buy) + "</td><td class=\"num\">" + fmt(f.total) + "</td><td>" + statusTag(f.need, f.total, lim.budget) + "</td></tr>"
    ).join("");
    return head + (steps.length ? pathTable(steps, lim.budget) : "") +
      "<h4 class=\"sub\">" + t("p_weapon") + "</h4><div class=\"table-wrap\"><table><thead><tr><th>" + t("p_weapon") + "</th><th>" + t("p_type") + "</th><th>" + t("p_tier") + "</th><th>" + t("p_lvl") +
      "</th><th>" + t("p_chain") + "</th><th>" + t("p_buy") + "</th><th>" + t("p_total") + "</th><th>" + t("p_status") + "</th></tr></thead><tbody>" + rows + "</tbody></table></div>";
  }

  function calmPlan(lim) {
    const virtual = new Set(owned);
    const steps = CALM_PATH.map((entry) => {
      let cost = 0;
      let lvl = 0;
      entry[1].forEach((n) => {
        const g = byName[n];
        if (!virtual.has(n)) {
          cost += g.r;
          lvl = Math.max(lvl, g.t);
          virtual.add(n);
        }
        cost += g.b;
      });
      return { text: t(entry[0]), cost: cost, warn: lvl > lim.level ? t("need_level", { n: lvl }) : "" };
    });
    let run = 0;
    let afford = 0;
    steps.forEach((s) => {
      run += s.cost;
      if (run <= lim.budget) afford += 1;
    });
    let head;
    if (afford > 0) {
      head = "<div class=\"pick\"><small>" + t("start_with", { x: fmt(lim.budget) }) + "</small><h3>" + t("calm_head", { n: afford, m: steps.length }) + "</h3><p>" + steps.slice(0, afford).map((s) => s.text).join(" &rarr; ") + "</p></div>";
    } else {
      head = "<div class=\"pick\"><small>" + t("not_enough") + "</small><h3>" + t("first_goal", { x: steps[0].text }) + "</h3><p>" + t("need_setup", { x: fmt(steps[0].cost - lim.budget), c: fmt(steps[0].cost) }) + "</p></div>";
    }
    return head + pathTable(steps, lim.budget);
  }

  function renderPlan() {
    const lim = limits();
    planOut.innerHTML = style === "action" ? actionPlan(lim) : calmPlan(lim);
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
  jailEl.addEventListener("input", renderPlan);
  levelEl.addEventListener("change", renderPlan);

  const itemCost = (n) => byName[n].r + byName[n].b;
  const farmCost = (names) => names.reduce((s, n) => s + itemCost(n), 0);

  function renderFarms() {
    document.getElementById("farmGrid").innerHTML = FARMS.map((f) => {
      const list = (names) => "<ul>" + names.map((n) => "<li><span>" + lbl(n) + "</span><span>" + fmt(itemCost(n)) + "</span></li>").join("") + "</ul>";
      return "<article class=\"farm\"><div class=\"icon\"><i class=\"fa-solid " + f.icon + "\"></i></div><h3>" + t("farm_" + f.key) + "</h3>" +
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
    buildMenuCats();
    renderRows();
    renderTree();
    renderOwnedCount();
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
