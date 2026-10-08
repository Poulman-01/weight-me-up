/* simple.js — Απλή προβολή (v1.4).
   Τέσσερις οθόνες: Σήμερα, Μενού, Γυμναστήριο, Πρόοδος. Οι αναλυτικές οθόνες (Ημέρα, Εβδομάδα, Πλάνο,
   Πρόοδος) μένουν όπως ήταν· ανοίγουν από συνδέσμους ή με Προφίλ → «Απλή προβολή» κλειστή.
   Φορτώνεται μετά το plan.js· χρησιμοποιεί μόνο συναρτήσεις του index.html και του plan.js. */

/* ---------- 1. Μενού: 3 πιάτα ανά γεύμα από απλά, καθημερινά ελληνικά τρόφιμα ---------- */
const SP_SLOTS = [
  { id: 'b', label: 'Πρωινό', time: '07:30', share: .24 },
  { id: 'l', label: 'Μεσημεριανό', time: '13:30', share: .33 },
  { id: 's', label: 'Απόγευμα', time: '17:00', share: .12 },
  { id: 'd', label: 'Βραδινό', time: '20:30', share: .31 },
];
/* [τρόφιμο, γραμμάρια, προσαρμόζεται στον στόχο θερμίδων (1/0), ετικέτα]. Στην ετικέτα: {g} γραμμάρια, {n:ένα|πολλά} τεμάχια. */
const SP_MENU = {
  b: [
    { n: 'Wrap με αυγά και κοτόπουλο', tip: 'Κλασικό ελληνικό πρωινό σε wrap. 5 λεπτά.', items: [['gr_b02', 50, 0, '1 τορτίγια πρωτεΐνης'], ['egg', 100, 0, '2 αυγά, βραστά ή στο αντικολλητικό χωρίς λάδι'], ['gr_m06', 40, 0, '2 φέτες κοτόπουλο'], ['gr_d16', 20, 0, '1 φέτα γκούντα light'], ['tomato', 80, 0, 'ντομάτα'], ['lettuce', 20, 0, 'μαρούλι'], ['mustard', 10, 0, 'μουστάρδα']] },
    { n: 'Γιαούρτι με βρώμη και μπανάνα', tip: 'Χωρίς μαγείρεμα. Κρατά χορτάτο ως το μεσημέρι.', items: [['yog_greek_0', 250, 0, '{g} g γιαούρτι στραγγιστό 0%'], ['oats', 40, 1, '{g} g βρώμη'], ['banana', 120, 0, '1 μπανάνα'], ['honey', 5, 0, '1 κουταλάκι μέλι']] },
    { n: 'Αυγά με ψωμί ολικής', tip: 'Για τις μέρες που έχεις 10 λεπτά.', items: [['egg', 100, 0, '2 αυγά'], ['egg_white', 99, 0, '3 ασπράδια'], ['bread_whole', 60, 1, '{n:φέτα|φέτες} ψωμί ολικής'], ['feta', 20, 0, '20 g φέτα'], ['tomato', 120, 0, '1 ντομάτα']] },
  ],
  l: [
    { n: 'Κοτόπουλο με ρύζι και λαχανικά', tip: 'Ψήνεις κοτόπουλο και βράζεις ρύζι για 3 μέρες μαζί.', items: [['chk_breast_cooked', 150, 0, '{g} g στήθος κοτόπουλο ψητό'], ['rice_white_cooked', 150, 1, '{g} g ρύζι μαγειρεμένο'], ['gr_v15', 150, 0, '{g} g λαχανικά κατεψυγμένα'], ['gr_v17', 40, 0, '2 κουταλιές καλαμπόκι'], ['olive_oil', 5, 0, '1 κουταλάκι ελαιόλαδο']] },
    { n: 'Καλαμάκια κοτόπουλο με πατάτες', tip: 'Και από το σουβλατζίδικο: 3 καλαμάκια, χωρίς πίτα και τηγανητές.', items: [['souvlaki_chicken', 180, 0, '3 καλαμάκια κοτόπουλο'], ['potato_boiled', 200, 1, '{g} g πατάτες βραστές ή φούρνου χωρίς λάδι'], ['tomato', 120, 0, 'ντομάτα'], ['cucumber', 100, 0, 'αγγούρι'], ['olive_oil', 5, 0, '1 κουταλάκι ελαιόλαδο']] },
    { n: 'Μακαρονάδα με άπαχο κιμά', tip: 'Κάνε σάλτσα για 3 μερίδες. Κρατά 3 μέρες στο ψυγείο.', items: [['gr_m09', 150, 0, '{g} g άπαχος κιμάς μοσχαρίσιος (ωμός)'], ['pasta_cooked', 180, 1, '{g} g ζυμαρικά βρασμένα'], ['tomato_crushed', 150, 0, '{g} g ντομάτα τριμμένη'], ['olive_oil', 5, 0, '1 κουταλάκι ελαιόλαδο']] },
  ],
  s: [
    { n: 'Shake πρωτεΐνης και φρούτο', tip: 'Μετά το γυμναστήριο. Με νερό ή γάλα 0%.', items: [['gr_dr08', 30, 0, '1 μεζούρα whey isolate (30 g)'], ['apple', 180, 0, '1 μήλο ή αχλάδι']] },
    { n: 'Γιαούρτι με μέλι και φρούτο', tip: 'Το πιο εύκολο σνακ.', items: [['yog_greek_0', 200, 0, '{g} g γιαούρτι στραγγιστό 0%'], ['honey', 5, 0, '1 κουταλάκι μέλι'], ['orange', 150, 0, '1 φρούτο εποχής']] },
    { n: 'Cottage με φρυγανιά', tip: 'Αλμυρό σνακ, και για το γραφείο.', items: [['gr_d22', 200, 0, '{g} g cottage light'], ['gr_b10', 17, 0, '1 φρυγανιά ολικής'], ['tomato', 80, 0, 'ντοματίνια']] },
  ],
  d: [
    { n: 'Wrap πρωτεΐνης', tip: 'Ό,τι έχει μείνει από κοτόπουλο, τυλιγμένο. 5 λεπτά.', items: [['gr_b02', 50, 0, '1 τορτίγια πρωτεΐνης'], ['gr_m04', 110, 0, '1 μπιφτέκι κοτόπουλο'], ['gr_m06', 40, 0, '2 φέτες κοτόπουλο'], ['gr_d16', 20, 0, '1 φέτα γκούντα light'], ['lettuce', 40, 0, 'μαρούλι'], ['tomato', 80, 0, 'ντομάτα'], ['mustard', 10, 0, 'μουστάρδα']] },
    { n: 'Σολομός με πατάτες και μπρόκολο', tip: 'Φούρνος 200°C, 18 λεπτά. Δύο φορές την εβδομάδα.', items: [['salmon_raw', 150, 0, '{g} g φιλέτο σολομού'], ['potato_boiled', 170, 1, '{g} g πατάτες βραστές'], ['broccoli', 150, 0, '{g} g μπρόκολο']] },
    { n: 'Ομελέτα με φέτα και σαλάτα', tip: '10 λεπτά, με ό,τι λαχανικό έχεις.', items: [['egg', 100, 0, '2 αυγά'], ['egg_white', 132, 0, '4 ασπράδια'], ['feta', 30, 0, '30 g φέτα'], ['bread_whole', 60, 1, '{n:φέτα|φέτες} ψωμί ολικής'], ['tomato', 120, 0, 'ντομάτα'], ['cucumber', 100, 0, 'αγγούρι']] },
  ],
};
/* Προεπιλογή ανά ημέρα (Δευ…Κυρ): σταθερός ρυθμός εβδομάδας, ώστε να μη χρειάζεται απόφαση κάθε μέρα. */
const SP_ROT = { b: [0, 1, 0, 2, 0, 1, 2], l: [0, 1, 2, 0, 1, 2, 0], s: [1, 2, 1, 2, 1, 2, 1], d: [0, 1, 2, 0, 1, 2, 0] };
const SP_FREE = ['Σαλάτα και λαχανικά: μαρούλι, ντομάτα, αγγούρι, λάχανο, πιπεριά, μπρόκολο', 'Καφές και τσάι χωρίς ζάχαρη (φρέντο εσπρέσο σκέτο)', 'Μουστάρδα, λεμόνι, ξίδι, μπαχαρικά, μυρωδικά', 'Νερό: 8 ποτήρια, ένα με κάθε γεύμα και ένα ανάμεσα'];
const SP_WATCH = ['Λάδι: μετράει. 1 κουταλιά της σούπας = 90 kcal. Μέτρα το με κουτάλι, όχι «στο μάτι»', 'Σάλτσες, μαγιονέζα, χυμοί και αναψυκτικά', 'Τσιμπολόγημα ενώ μαγειρεύεις και τα αποφάγια', 'Αλκοόλ: ένα ποτό ≈ 100–200 kcal και ανοίγει την όρεξη'];
const SP_PREP = [['Κυριακή', 'Ψήσε 1 κιλό στήθος κοτόπουλο στον φούρνο, βράσε ρύζι για 3 μερίδες και 6 αυγά. Φτάνουν ως την Τετάρτη.'], ['Τετάρτη', 'Σάλτσα με άπαχο κιμά για 3 μερίδες και πατάτες βραστές. Φτάνουν ως την Κυριακή.'], ['Κάθε βράδυ', 'Βάλε στο τάπερ το αυριανό μεσημεριανό.']];

/* ---------- 2. Κατάσταση ---------- */
let spBooted = false, spFullNav = null, spNavMode = null;
function spState() { const v = Store.get('simple') || {}; return { on: v.on !== false, pick: Object.assign({}, v.pick), log: Object.assign({}, v.log) }; }
function spSave(st) {
  const cut = Dates.add(Dates.today(), -45);
  for (const k of ['pick', 'log']) for (const d of Object.keys(st[k])) if (d < cut) delete st[k][d];
  const v = { on: st.on, pick: st.pick, log: st.log }, errs = Reliability.validateData({ simple: v });
  if (errs.length) { toast('Δεν αποθηκεύτηκε: ' + errs.join(' · '), 5000); return false; }
  Store.set('simple', v); return true;
}
const spOn = () => spState().on;
function spTargets() { const t = dayTargets(Dates.today()), st = mpState(); return { kcal: t ? t.kcal : (numIn(st.kcal) || 1700), p: t ? t.p : (numIn(st.p) || 150), real: !!t }; }
const spMi = date => (Dates.dowNum(date) + 6) % 7; // 0 = Δευτέρα
function spGymDays() { const g = mpState().gym; return (Array.isArray(g) ? g : [0, 2, 4]).slice().sort((a, b) => a - b); }
function spDefault(date, slot) { const mi = spMi(date); return slot === 's' && spGymDays().includes(mi) ? 0 : SP_ROT[slot][mi]; }
function spPick(date, slot) { const p = spState().pick[date], i = p && p[slot]; return Number.isInteger(i) && i >= 0 && i < SP_MENU[slot].length ? i : spDefault(date, slot); }

/* Μερίδες: τα τρόφιμα πρωτεΐνης μένουν σταθερά· ρύζι, πατάτα, ψωμί και βρώμη προσαρμόζονται στον στόχο θερμίδων. */
function spPortion(slot, oi, kcalDay) {
  const o = SP_MENU[slot][oi], fb = foods().byId, share = SP_SLOTS.find(s => s.id === slot).share;
  const rows = o.items.map(([id, g, adj, lab]) => ({ f: fb.get(id), g, adj, lab })).filter(r => r.f);
  const k = r => r.f.kcal * r.g / 100, fixed = rows.filter(r => !r.adj).reduce((a, r) => a + k(r), 0), flex = rows.filter(r => r.adj).reduce((a, r) => a + k(r), 0);
  if (flex > 0) {
    const fct = Math.min(1.6, Math.max(.5, (kcalDay * share - fixed) / flex));
    for (const r of rows) if (r.adj) { const pc = r.f.piece >= 20 ? r.f.piece : 0; r.g = pc ? Math.max(1, Math.round(r.g * fct / pc)) * pc : Math.max(10, Math.round(r.g * fct / 10) * 10); }
  }
  const tot = rows.reduce((a, r) => ({ kcal: a.kcal + k(r), p: a.p + r.f.p * r.g / 100 }), { kcal: 0, p: 0 });
  return { o, rows, tot };
}
function spLabel(r) {
  const n = r.f.piece ? Math.round(r.g / r.f.piece) : 0;
  return r.lab.replace(/\{g\}/g, fmt(r.g)).replace(/\{n(?::([^|}]*)\|([^}]*))?\}/g, (_, a, b) => a === undefined ? String(n) : n + ' ' + (n === 1 ? a : b));
}
function spLoggedIds(date, slot) { return ((spState().log[date] || {})[slot]) || []; }
function spLogged(date, slot) { const ids = spLoggedIds(date, slot); return ids.length ? getDay(date).meals.filter(e => ids.includes(e.id)) : []; }
function spOther(date, slot) { const ids = spLoggedIds(date, slot); return getDay(date).meals.filter(e => e.meal === slot && !ids.includes(e.id)); }

/* ---------- 3. Προπόνηση ---------- */
function spProg() { const a = activeProgram(); return a && a.days && a.days.length ? a : mpProgramObj(); }
function spWorkoutFor(date) { const prog = spProg(), k = spGymDays().indexOf(spMi(date)); return k < 0 ? null : prog.days[k % prog.days.length]; }
const SP_TIMED = ['plank', 'side_plank'];
const SP_EXN = { leg_press: 'Πρέσα ποδιών', chest_press: 'Πιέσεις στήθους', lat_pulldown: 'Έλξεις τροχαλίας', leg_curl: 'Κάμψεις ποδιών', face_pull: 'Face pulls (σχοινί)', plank: 'Σανίδα', goblet: 'Goblet squat', shoulder_machine: 'Πιέσεις ώμων', cable_row: 'Κωπηλατική καθιστή', rdl: 'Ρουμανικές άρσεις', rear_delt: 'Οπίσθιοι ώμοι', crunch: 'Κοιλιακοί', hip_thrust: 'Hip thrust (γλουτοί)', incline_db: 'Πιέσεις κεκλιμένου', leg_ext: 'Εκτάσεις ποδιών', lat_raise: 'Πλάγιες εκτάσεις ώμων', side_plank: 'Πλάγια σανίδα', treadmill: 'Περπάτημα σε κλίση' };
const spExName = (exId, e) => SP_EXN[exId] || (e ? e.name : exId);
function spDose(it) { const e = exById(it.exId); if (e && e.type === 'c') return `${it.lo}′`; const r = it.lo === it.hi ? it.lo : `${it.lo}–${it.hi}`; return `${it.sets}×${r}${SP_TIMED.includes(it.exId) ? '″' : ''}`; }
function spExDone(e) { return (e.sets || []).some(s => (s.r !== '' && s.r !== null && s.r !== undefined) || (s.min !== '' && s.min !== null && s.min !== undefined)); }
function spEnsureProgram() {
  const all = programs(), cur = spProg();
  if (all.list.some(x => x.id === cur.id)) { if (all.active !== cur.id) { setActiveProgram(all, cur.id); Store.set('programs', all); } return true; }
  const err = Reliability.program(cur); if (err) { toast(err, 5000); return false; }
  all.list.push(cur); setActiveProgram(all, cur.id); Store.set('programs', all); return true;
}

/* ---------- 4. Οθόνες ---------- */
const SP_CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
const spBanners = () => ['updateBannerHTML', 'quotaBannerHTML', 'repairBannerHTML', 'backupBanner'].map(n => { try { return typeof window[n] === 'function' ? window[n]() : ''; } catch (_) { return ''; } }).join('');

function spWeighHTML(note) {
  const last = weights().slice(-1)[0];
  return `<section class="sec sp-weigh"><label class="sp-wrow"><span class="grow"><b>Ζύγιση σήμερα</b><br><span class="small muted">${note ? esc(note) : 'Το πρωί, μετά την τουαλέτα, πριν φας'}</span></span>
    <input type="text" inputmode="decimal" data-act-input="weighDay" placeholder="${last ? fmt(last.kg, 1) : '85,0'}" aria-label="Βάρος σε κιλά"><span class="sp-u">kg</span></label></section>`;
}
function spSetupHTML() {
  const p = profile();
  if (numIn(p.age) !== null && numIn(p.height) !== null) return spWeighHTML(weights().length ? 'Χρειάζεται νέα ζύγιση για να βγουν οι στόχοι σου.' : 'Με το βάρος σου υπολογίζονται οι στόχοι.');
  return `<section class="sec sp-setup"><h2>Ξεκίνα</h2><p class="small muted">Τέσσερα στοιχεία για να υπολογιστούν θερμίδες και πρωτεΐνη.</p>
    <div class="grid2"><label class="f"><span>Φύλο</span><select id="spSex"><option value="m" ${p.sex !== 'f' ? 'selected' : ''}>Άνδρας</option><option value="f" ${p.sex === 'f' ? 'selected' : ''}>Γυναίκα</option></select></label>
    <label class="f"><span>Ηλικία</span><input id="spAge" type="text" inputmode="numeric" value="${esc(String(p.age ?? ''))}"></label>
    <label class="f"><span>Ύψος (cm)</span><input id="spH" type="text" inputmode="numeric" value="${esc(String(p.height ?? ''))}"></label>
    <label class="f"><span>Βάρος σήμερα (kg)</span><input id="spKg" type="text" inputmode="decimal"></label></div>
    <label class="f"><span>Στόχος</span><select id="spGoal">${[['cut', 'Να χάσω λίπος'], ['recomp', 'Γράμμωση στο ίδιο βάρος'], ['maintain', 'Να κρατήσω το βάρος μου'], ['bulk', 'Να πάρω μυϊκή μάζα']].map(([v, l]) => `<option value="${v}" ${p.goal === v ? 'selected' : ''}>${l}</option>`).join('')}</select></label>
    <button class="btn pri" data-act="spSetup" style="width:100%;margin-top:6px">Αποθήκευση</button></section>`;
}
function spMealHTML(date, s, T) {
  const logged = spLogged(date, s.id), other = spOther(date, s.id), oi = spPick(date, s.id), P = spPortion(s.id, oi, T.kcal), n = SP_MENU[s.id].length, done = logged.length > 0;
  const lk = logged.reduce((a, e) => a + (+e.kcal || 0), 0), lp = logged.reduce((a, e) => a + (+e.p || 0), 0), ok = other.reduce((a, e) => a + (+e.kcal || 0), 0);
  return `<section class="sec sp-meal${done ? ' done' : ''}">
    <div class="sp-mh"><span class="mc-ic ic-${s.id}">${done ? SP_CHECK : IC[s.id]}</span><div class="grow"><span class="sp-eb">${s.label} · ${s.time}</span><h3>${esc(P.o.n)}</h3><span class="sp-sub">${fmt(done ? lk : P.tot.kcal)} kcal · ${fmt(done ? lp : P.tot.p)} g πρωτεΐνη</span></div></div>
    ${done ? '' : `<ul class="sp-items">${P.rows.map(r => `<li>${esc(spLabel(r))}</li>`).join('')}</ul>`}
    ${other.length ? `<p class="sp-other">${done ? 'Και' : 'Έχεις ήδη γράψει'} ${other.length} ${other.length === 1 ? 'τρόφιμο' : 'τρόφιμα'} ακόμα, ${fmt(ok)} kcal.</p>` : ''}
    <div class="sp-acts">${done
      ? `<span class="sp-ok">Καταγράφηκε</span><button class="btn sm" data-act="spUndo" data-s="${s.id}">Αναίρεση</button>`
      : `<button class="btn pri" data-act="spEat" data-s="${s.id}">Το έφαγα</button><button class="btn" data-act="spSwap" data-s="${s.id}" aria-label="Άλλη επιλογή, ${oi + 1} από ${n}">Άλλο <span class="sp-dots">${oi + 1}/${n}</span></button><button class="btn sp-ghost" data-act="spOther" data-s="${s.id}">Κάτι άλλο</button>`}</div>
  </section>`;
}
function spGymCardHTML(date) {
  const d = getDay(date), prog = spProg(), wd = spWorkoutFor(date);
  if (d.ex.length) {
    const done = d.ex.filter(spExDone).length, all = done === d.ex.length, pe = d.ex.find(e => e.prog), dn = pe ? (prog.days.find(x => x.id === pe.prog.did) || {}).name : '';
    return `<section class="sec sp-gymc"><div class="sp-mh"><span class="mc-ic">${all ? SP_CHECK : `<b>${esc(dn ? dn.charAt(0) : '·')}</b>`}</span><div class="grow"><span class="sp-eb">Γυμναστήριο</span><h3>${all ? 'Η προπόνηση ολοκληρώθηκε' : 'Προπόνηση σε εξέλιξη'}</h3><span class="sp-sub">${done} από ${d.ex.length} ασκήσεις</span></div></div>
      <div class="sp-acts"><button class="btn ${all ? '' : 'pri'}" data-act="spGoEx">${all ? 'Δες την προπόνηση' : 'Συνέχεια'}</button></div></section>`;
  }
  if (wd) return `<section class="sec sp-gymc"><div class="sp-mh"><span class="mc-ic"><b>${esc(wd.name.charAt(0))}</b></span><div class="grow"><span class="sp-eb">Γυμναστήριο · ~55′</span><h3>Προπόνηση ${esc(wd.name)}</h3><span class="sp-sub">${wd.items.length} ασκήσεις</span></div></div>
    <ol class="sp-exl">${wd.items.map(it => { const e = exById(it.exId); return e ? `<li><span class="grow">${esc(spExName(it.exId, e))}</span><b>${spDose(it)}</b></li>` : ''; }).join('')}</ol>
    <div class="sp-acts"><button class="btn pri" data-act="spStart" data-did="${wd.id}">Ξεκίνα</button><button class="btn sp-ghost" data-nav="gym">Οδηγίες</button></div></section>`;
  const s = settings(), w = d.watch || {};
  return `<section class="sec sp-gymc"><div class="sp-mh"><span class="mc-ic">${IC.flame}</span><div class="grow"><span class="sp-eb">Χωρίς βάρη σήμερα</span><h3>Περπάτημα 30–45′</h3><span class="sp-sub">ή 8.000+ βήματα μέσα στη μέρα</span></div></div>
    ${s.showSteps ? `<label class="sp-wrow" style="margin-top:12px"><span class="grow small muted">Βήματα σήμερα</span><input type="text" inputmode="numeric" data-watch="steps" value="${w.steps ?? ''}" placeholder="το βράδυ"></label>` : ''}
    <div class="sp-acts"><button class="btn sp-ghost" data-act="spStart" data-did="">Θέλω να γυμναστώ σήμερα</button></div></section>`;
}
function spTodayHTML() {
  const date = Dates.today(), d = getDay(date), tot = dayTotals(d), t = dayTargets(date), T = spTargets();
  let h = spBanners();
  if (!t) h += spSetupHTML();
  else {
    const rem = t.kcal - tot.kcal, over = rem < 0, kp = Math.min(100, tot.kcal / t.kcal * 100), pp = Math.min(100, tot.p / t.p * 100), w = weights().find(x => x.d === date), tr = weightTrendOn(date);
    h += `<section class="hero sp-hero"><div class="eyebrow">${esc(Dates.label(date))}</div>
      <div class="hero-num ${over ? 'over' : ''}">${fmt(Math.abs(rem))}</div><div class="hero-sub">${over ? 'kcal πάνω από τον στόχο' : `kcal απομένουν από ${fmt(t.kcal)}`}</div>
      <div class="sp-bar" role="img" aria-label="Θερμίδες ${fmt(tot.kcal)} από ${fmt(t.kcal)}"><i style="width:${kp.toFixed(1)}%"></i></div>
      <div class="sp-kv"><span>Πρωτεΐνη</span><b>${fmt(tot.p)} / ${fmt(t.p)} g</b></div><div class="sp-bar p" role="img" aria-label="Πρωτεΐνη ${fmt(tot.p)} από ${fmt(t.p)} g"><i style="width:${pp.toFixed(1)}%"></i></div>
      ${w ? `<div class="sp-kv sm"><span>Ζύγιση</span><b>${fmt(w.kg, 1)} kg${tr && Math.abs(tr - w.kg) >= .05 ? ` · μ.ό. 7 ημ. ${fmt(tr, 1)}` : ''}</b></div>` : ''}</section>`;
    if (!w) h += spWeighHTML();
  }
  h += `<h2 class="sp-h">Φαγητό</h2>` + SP_SLOTS.map(s => spMealHTML(date, s, T)).join('');
  h += `<h2 class="sp-h">Κίνηση</h2>` + spGymCardHTML(date);
  const w = d.watch || {};
  h += `<section class="sec sp-mini"><label class="sp-wrow"><span class="grow"><b>Ύπνος</b><br><span class="small muted">Στόχος 7–8 ώρες, π.χ. 7,5 ή 7:30</span></span><input type="text" inputmode="decimal" data-watch="sleep" value="${numIn(w.sleep) !== null ? fmt(w.sleep, 2) : ''}" placeholder="ώρες"></label></section>
    <div class="sp-links"><button class="btn sm" data-act="spFull">Αναλυτική ημέρα</button><button class="btn sm" data-act="spGuide">Ύπνος, συνήθειες, συμπληρώματα</button></div>`;
  return h;
}

function spMenuHTML() {
  const T = spTargets(), per = SP_SLOTS.map(s => SP_MENU[s.id].map((_, i) => spPortion(s.id, i, T.kcal).tot));
  const lo = per.reduce((a, o) => a + Math.min(...o.map(x => x.kcal)), 0), hi = per.reduce((a, o) => a + Math.max(...o.map(x => x.kcal)), 0), plo = per.reduce((a, o) => a + Math.min(...o.map(x => x.p)), 0);
  let h = `<section class="sec"><h2>Το μενού σου</h2><p class="small">Ένα πιάτο από κάθε γεύμα, από φαγητά που ήδη τρως. Όποιον συνδυασμό κι αν διαλέξεις, η μέρα βγαίνει <b>${fmt(lo)}–${fmt(hi)} kcal</b> και τουλάχιστον <b>${fmt(plo)} g πρωτεΐνη</b>${T.real ? '' : ' (στόχος από το Πλάνο, μέχρι να ζυγιστείς)'}.</p>
    <p class="small muted" style="margin-bottom:0">Στην οθόνη «Σήμερα» πατάς «Το έφαγα» και καταγράφεται. Ρύζι, πατάτες, ψωμί και βρώμη προσαρμόζονται μόνα τους στον στόχο σου.</p></section>`;
  for (const s of SP_SLOTS) {
    h += `<h2 class="sp-h">${s.label}</h2><section class="sec sp-menu">${SP_MENU[s.id].map((_, i) => { const P = spPortion(s.id, i, T.kcal);
      return `<details${i === 0 ? ' open' : ''}><summary><span class="grow"><b>${esc(P.o.n)}</b><span class="sp-sub">${fmt(P.tot.kcal)} kcal · ${fmt(P.tot.p)} g πρωτεΐνη</span></span></summary>
        <ul class="sp-items">${P.rows.map(r => `<li>${esc(spLabel(r))}</li>`).join('')}</ul><p class="sp-tip">${esc(P.o.tip)}</p></details>`; }).join('')}</section>`;
  }
  const li = a => `<ul class="guide">${a.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;
  h += `<section class="sec"><h2>Ελεύθερα, όσο θες</h2>${li(SP_FREE)}</section>
    <section class="sec"><h2>Πρόσεχε</h2>${li(SP_WATCH)}</section>
    <section class="sec"><h2>Μαγείρεψε δύο φορές την εβδομάδα</h2><ul class="list inner mp-tl" style="border-top:0">${SP_PREP.map(([a, b]) => `<li><div class="item"><span class="mp-time">${a}</span><span class="grow small">${esc(b)}</span></div></li>`).join('')}</ul></section>
    <section class="sec sp-menu"><details><summary><span class="grow"><b>Λίστα για το σούπερ μάρκετ</b><span class="sp-sub">Για τις επόμενες 7 ημέρες, με τις επιλογές σου</span></span></summary>${spShopHTML()}</details></section>
    <section class="sec"><h2>Θες άλλα φαγητά;</h2><p class="small">Στο Πλάνο διαλέγεις από ~250 τρόφιμα και φτιάχνεται εβδομάδα στον στόχο σου.</p><button class="btn" data-act="spPlan" data-tab="foods">Άνοιξε το Πλάνο</button></section>`;
  return h;
}
function spShopHTML() {
  const T = spTargets(), agg = new Map(), pantry = new Set(['olive_oil', 'honey', 'mustard', 'oats', 'gr_dr08']);
  for (let i = 0; i < 7; i++) { const date = Dates.add(Dates.today(), i); for (const s of SP_SLOTS) for (const r of spPortion(s.id, spPick(date, s.id), T.kcal).rows) { const a = agg.get(r.f.id) || { f: r.f, g: 0 }; a.g += r.g; agg.set(r.f.id, a); } }
  const rows = [...agg.values()].filter(a => !pantry.has(a.f.id)).sort((a, b) => a.f.cat < b.f.cat ? -1 : a.f.cat > b.f.cat ? 1 : 0).map(({ f, g }) => {
    const q = f.piece >= 20 && !['tomato', 'cucumber', 'potato_boiled', 'broccoli'].includes(f.id) ? `${Math.ceil(g / f.piece - .05)} ${f.cat === 'bread' && f.piece <= 40 ? 'φέτες' : 'τεμ.'}` : g >= 1000 ? `${fmt(Math.ceil(g / 100) / 10, 1)} kg` : `${fmt(Math.ceil(g / 50) * 50)} g`;
    return `<li><div class="item"><span class="grow">${esc(f.name)}</span><span class="kc">${q}</span></div></li>`; });
  const pan = [...agg.values()].filter(a => pantry.has(a.f.id)).map(a => a.f.name.toLowerCase());
  return `<ul class="list inner">${rows.join('')}</ul>${pan.length ? `<p class="small muted" style="margin:10px 0 14px">Ντουλάπι: ${esc(pan.join(', '))}.</p>` : ''}`;
}

function spGymHTML() {
  const prog = spProg(), mine = prog.id === MP_PROGRAM.id, gd = spGymDays(), today = Dates.today(), wd = spWorkoutFor(today), all = programs(), active = all.active === prog.id;
  const nxt = typeof nextProgramDay === 'function' ? nextProgramDay(prog, today) : prog.days[0];
  let h = `<section class="sec"><h2>${esc(prog.name)}</h2>
    ${mine ? `<p class="small">Τρεις προπονήσεις την εβδομάδα, περίπου 55′: βάρη κυρίως σε μηχανήματα και 20′ γρήγορο περπάτημα σε κλίση. Για γράμμωση, όχι όγκο: σε έλλειμμα θερμίδων τα βάρη κρατούν τους μυς και το σώμα καίει λίπος. Με ${fmt(spTargets().kcal)} kcal την ημέρα δεν «φουσκώνεις».</p>
    <p class="small">Δουλεύει πλάτη, οπίσθιους ώμους, γλουτούς και κοιλιακούς, που αδυνατίζουν με πολλές ώρες καθιστός, ώστε να στέκεσαι πιο ίσια.</p>` : ''}
    <div class="sp-week">${['Δευ', 'Τρί', 'Τετ', 'Πέμ', 'Παρ', 'Σάβ', 'Κυρ'].map((n, i) => { const k = gd.indexOf(i), dd = k < 0 ? null : prog.days[k % prog.days.length]; return `<span class="${dd ? 'on' : ''}${spMi(today) === i ? ' now' : ''}">${n}<b>${dd ? esc(dd.name.charAt(0)) : '·'}</b></span>`; }).join('')}</div>
    <button class="btn pri" data-act="spStart" data-did="${wd ? wd.id : ''}" style="width:100%;margin-top:12px">${wd ? `Ξεκίνα τη σημερινή (${esc(wd.name)})` : `Ξεκίνα την επόμενη (${esc(nxt.name)})`}</button>
    ${!active ? `<p class="small muted" style="margin:8px 0 0">Με την έναρξη γίνεται το ενεργό σου πρόγραμμα.</p>` : ''}</section>`;
  h += prog.days.map(d => `<section class="sec sp-wk"><div class="sp-mh"><span class="mc-ic"><b>${esc(d.name.charAt(0))}</b></span><div class="grow"><h3>${esc(d.name)}</h3><span class="sp-sub">${d.items.length} ασκήσεις</span></div></div>
    ${d.items.map((it, i) => { const e = exById(it.exId); if (!e) return ''; const tg = MP_TG[it.exId], cue = MP_CUE[it.exId];
      return `<details class="sp-exd"><summary><span class="sp-n">${i + 1}</span><span class="grow">${esc(spExName(it.exId, e))}</span><b>${spDose(it)}</b></summary><p>${tg ? `<b>${esc(tg)}</b>` : ''}${e.type !== 'c' && it.rest ? `${tg ? ' · ' : ''}διάλειμμα ${it.rest >= 120 ? it.rest / 60 + '′' : it.rest + '″'}` : ''}${cue ? `<br>${esc(cue)}` : ''}</p></details>`; }).join('')}</section>`).join('');
  h += `<section class="sec"><h2>Κάθε φορά</h2><ul class="list inner mp-tl" style="border-top:0">${[['5′', 'Ζέσταμα: ποδήλατο ή ελλειπτικό χαλαρά. Ένα ελαφρύ σετ στην πρώτη άσκηση.'], ['30′', 'Βάρη με τη σειρά. Κάθε σετ σταματά όταν θα μπορούσες να κάνεις ακόμα 1–2 καθαρές επαναλήψεις.'], ['20′', 'Διάδρομος: κλίση 8–12%, 5–5,5 km/h, χωρίς να κρατιέσαι.'], ['μετά', 'Shake ή γεύμα με 25–40 g πρωτεΐνη μέσα σε 1–2 ώρες.']].map(([a, b]) => `<li><div class="item"><span class="mp-time">${a}</span><span class="grow small">${b}</span></div></li>`).join('')}</ul></section>
    <section class="sec"><h2>Πόσο βάρος</h2><ul class="guide">
      <li>Διάλεξε βάρος που οι 2 τελευταίες επαναλήψεις είναι δύσκολες αλλά καθαρές.</li>
      <li>Όταν βγάζεις το πάνω όριο σε όλα τα σετ, ανέβα μία θέση στο μηχάνημα και ξεκίνα από το κάτω όριο. Η εφαρμογή σού προτείνει βάρος κάθε φορά.</li>
      <li>Σε δίαιτα, το να κρατάς τα ίδια βάρη είναι επιτυχία.</li>
      <li>Πόνος σε άρθρωση (όχι κάψιμο στον μυ) σημαίνει σταματάς την άσκηση.</li>
      <li>Έχασες μέρα; Κάν’ την την επόμενη. Ποτέ δύο προπονήσεις τη μέρα.</li></ul></section>
    <section class="sec"><h2>Technogym</h2><p class="small">Δίπλα σε κάθε άσκηση γράφει το μηχάνημα. Το Technogym app δεν εισάγει πρόγραμμα από αρχείο· ζήτα από τον γυμναστή να το περάσει στο Mywellness, ή κατέγραφε εδώ με χρονόμετρο διαλείμματος.</p>
    ${mine ? '' : `<button class="btn" data-act="mpProgram">Χρήση του έτοιμου προγράμματος γράμμωσης</button>`}</section>`;
  return h;
}

/* Απλή καταγραφή προπόνησης: μόνο κιλά και επαναλήψεις. Ίδια δεδομένα και χειριστές με την αναλυτική «Ημέρα → Άσκηση». */
function spSessionHTML() {
  const date = Dates.today(), d = getDay(date), prog = spProg();
  if (!d.ex.length) return `<section class="sec"><h2>Δεν έχει ξεκινήσει προπόνηση σήμερα</h2><button class="btn pri" data-act="spStart" data-did="" style="width:100%">Ξεκίνα</button></section>`;
  const pe = d.ex.find(e => e.prog), dn = pe ? (prog.days.find(x => x.id === pe.prog.did) || {}).name : '', done = d.ex.filter(e => e.done).length;
  let h = `<section class="sec sp-sess"><div class="sp-mh"><span class="mc-ic"><b>${esc(dn ? dn.charAt(0) : '·')}</b></span><div class="grow"><span class="sp-eb">Σήμερα</span><h3>${esc(dn || 'Προπόνηση')}</h3><span class="sp-sub">${done} από ${d.ex.length} έγιναν</span></div></div>
    <div class="sp-bar g"><i style="width:${(done / d.ex.length * 100).toFixed(1)}%"></i></div>
    <p class="small muted" style="margin:10px 0 0">Γράψε κιλά και επαναλήψεις σε κάθε σετ. Με τις επαναλήψεις ξεκινά μόνο του το διάλειμμα.</p></section>`;
  h += d.ex.map((ex, i) => {
    const def = exById(ex.exId), nm = spExName(ex.exId, def), cardio = ex.type === 'c', timed = SP_TIMED.includes(ex.exId), bw = ex.type === 'bw', fb = feedbackFor(ex, date);
    const it = ex.plan ? { exId: ex.exId, sets: ex.plan.sets, lo: ex.plan.lo, hi: ex.plan.hi } : null, dose = it ? spDose(it) : '';
    const work = (ex.sets || []).filter(st => +st.r > 0 || +st.min > 0);
    if (ex.done) return `<div class="exc sp-exc done" data-ex="${ex.id}"><div class="sp-mh"><span class="sp-n ok">${SP_CHECK}</span><div class="grow"><h3>${esc(nm)}</h3><span class="sp-sub">${work.length ? esc(setsSummary(ex)) : 'Χωρίς σετ'}</span></div><button class="btn sm sp-ghost" data-act="exUndone" data-id="${ex.id}">Άνοιγμα</button></div></div>`;
    const fields = cardio ? [['min', 'λεπτά', 'decimal', String(ex.plan ? ex.plan.lo : '')], ['km', 'km', 'decimal', '']] : (bw ? [] : [['w', 'kg', 'decimal', '']]).concat([['r', timed ? 'δευτ.' : 'επαν.', 'numeric', ex.plan ? `${ex.plan.lo}–${ex.plan.hi}` : '']]);
    return `<div class="exc sp-exc" data-ex="${ex.id}"><div class="sp-mh"><span class="sp-n">${i + 1}</span><div class="grow"><h3>${esc(nm)}</h3><span class="sp-sub">${esc(MP_TG[ex.exId] || (def ? def.group || '' : ''))}${dose ? ` · στόχος ${dose}` : ''}</span></div></div>
      ${ex.sug ? `<p class="sp-sug">${esc(ex.sug)}</p>` : ''}${MP_CUE[ex.exId] ? `<details class="sp-cue"><summary>Πώς γίνεται</summary><p>${esc(MP_CUE[ex.exId])}</p></details>` : ''}
      <div class="sp-sets" style="--n:${fields.length}"><span></span>${fields.map(f => `<span class="sp-sh">${f[1]}</span>`).join('')}
      ${(ex.sets || []).map((st, si) => `<span class="sp-si">${si + 1}</span>${fields.map(([f, lab, im, ph]) => `<input type="text" inputmode="${im}" data-set="${si}" data-f="${f}" value="${st[f] ?? ''}" placeholder="${esc(ph)}" aria-label="${lab}, σετ ${si + 1}">`).join('')}`).join('')}</div>
      <div class="fb ${fb.kind}">${esc(fb.text)}</div>
      <div class="sp-acts"><button class="btn pri" data-act="spExDone" data-id="${ex.id}">Έγινε</button><button class="btn" data-act="setAdd">+ Σετ</button></div></div>`;
  }).join('');
  h += `<div class="sp-links"><button class="btn sm" data-act="spGoFull">Αναλυτική προβολή (RIR, ζέσταμα, εναλλακτικές)</button></div>`;
  return h;
}

function spStatsHTML() {
  const today = Dates.today(), p = profile(), W = weights(), goal = numIn(p.goalKg);
  if (!W.length) return `<section class="sec"><h2>Βάρος</h2><p class="small">Δεν υπάρχει ζύγιση ακόμα.</p></section>` + spWeighHTML();
  const last = W[W.length - 1], trNow = weightTrendOn(today), recent = W.some(x => x.d >= Dates.add(today, -6)), now = recent && trNow ? trNow : last.kg, start = numIn(p.goalStartKg) ?? W[0].kg, lost = start - now;
  const prev = weightTrendOn(Dates.add(today, -28)), rate = prev ? (prev - now) / 4 : null, left = goal !== null ? now - goal : null;
  const eta = left !== null && left > 0 ? Dates.add(today, Math.round(left / Math.max(.25, rate && rate > 0 ? rate : .5) * 7)) : null;
  const ws = Dates.weekStart(today), days = []; for (let d = ws; d <= today; d = Dates.add(d, 1)) days.push(getDay(d));
  const logged = days.filter(d => d.meals.length), avg = k => logged.length ? logged.reduce((a, d) => a + dayTotals(d)[k], 0) / logged.length : null, gym = days.filter(d => d.ex.some(spExDone)).length, T = spTargets();
  let h = `<section class="hero sp-hero"><div class="eyebrow">${recent ? 'Βάρος, μέσος όρος 7 ημερών' : `Τελευταία ζύγιση, ${esc(Dates.short(last.d))}`}</div><div class="hero-num">${fmt(now, 1)}<small> kg</small></div>
    <div class="hero-sub">${lost >= .05 ? `−${fmt(lost, 1)} kg από τα ${fmt(start, 1)}` : lost <= -.05 ? `+${fmt(-lost, 1)} kg από τα ${fmt(start, 1)}` : `Αφετηρία ${fmt(start, 1)} kg`}${recent && last.d !== today ? ` · τελευταία ζύγιση ${esc(Dates.short(last.d))}` : ''}</div>
    ${goal !== null ? `<div class="sp-kv"><span>Στόχος ${fmt(goal, 1)} kg</span><b>${left > 0 ? `απομένουν ${fmt(left, 1)} kg` : 'Έφτασες!'}</b></div><div class="sp-bar"><i style="width:${Math.max(0, Math.min(100, (start - now) / Math.max(.1, start - goal) * 100)).toFixed(1)}%"></i></div>` : ''}
    <div class="sp-kv sm"><span>Ρυθμός</span><b>${rate !== null ? `${rate >= 0 ? '−' : '+'}${fmt(Math.abs(rate), 2)} kg/εβδ.` : 'θέλει 4 εβδομάδες ζυγίσεων'}</b></div>
    ${eta ? `<div class="sp-kv sm" style="border:0;padding-top:0;margin-top:6px"><span>Με ${rate && rate > 0 ? 'αυτόν τον ρυθμό' : '0,5 kg/εβδ.'}</span><b>${esc(Dates.label(eta))}</b></div>` : ''}</section>`;
  h += `<section class="sec"><h2>Τελευταίες 12 εβδομάδες</h2>${spChart(W, goal)}<p class="small muted" style="margin:6px 0 0">Τελείες: ζυγίσεις. Γραμμή: μέσος όρος 7 ημερών. Κρίνε από τη γραμμή, όχι από μία μέρα.</p></section>`;
  h += `<section class="sec"><h2>Αυτή την εβδομάδα</h2><div class="sp-stats">
    <div><b>${logged.length}/${days.length}</b><span>μέρες με καταγραφή</span></div>
    <div><b>${gym}/${spGymDays().length}</b><span>προπονήσεις</span></div>
    <div><b>${avg('kcal') !== null ? fmt(avg('kcal')) : '–'}</b><span>kcal/ημέρα (στόχος ${fmt(T.kcal)})</span></div>
    <div><b>${avg('p') !== null ? fmt(avg('p')) + ' g' : '–'}</b><span>πρωτεΐνη/ημέρα (στόχος ${fmt(T.p)} g)</span></div></div>
    <p class="small muted" style="margin:10px 0 0">Αν σε 3–4 εβδομάδες ο ρυθμός είναι κάτω από 0,5 kg/εβδ., κόψε ~150 kcal (λίγο ψωμί, ρύζι ή λάδι).</p></section>
    <div class="sp-links"><button class="btn sm" data-nav="progress">Αναλυτική πρόοδος</button><button class="btn sm" data-nav="week">Εβδομάδα</button></div>`;
  if (!W.some(x => x.d === today)) h = spWeighHTML() + h;
  return h;
}
function spChart(W, goal) {
  const today = Dates.today(), from = Dates.add(today, -83), pts = W.filter(w => w.d >= from);
  if (!pts.length) return '<p class="small muted">Καμία ζύγιση τις τελευταίες 12 εβδομάδες.</p>';
  const tr = []; for (let d = pts[0].d; d <= today; d = Dates.add(d, 1)) { const win = W.filter(w => w.d <= d && w.d >= Dates.add(d, -6)); if (win.length) tr.push({ d, v: win.reduce((a, w) => a + w.kg, 0) / win.length }); }
  const vals = pts.map(p => p.kg).concat(tr.map(t => t.v)), gIn = goal !== null && goal >= Math.min(...vals) - 3;
  let lo = Math.min(...vals, gIn ? goal : Infinity) - .5, hi = Math.max(...vals) + .5; if (hi - lo < 3) { const m = (hi + lo) / 2; lo = m - 1.5; hi = m + 1.5; }
  const Wd = 320, H = 150, x = d => 8 + (Dates.idx(d) - Dates.idx(from)) / 83 * (Wd - 44), y = v => 8 + (hi - v) / (hi - lo) * (H - 24);
  const line = tr.map((t, i) => `${i ? 'L' : 'M'}${x(t.d).toFixed(1)} ${y(t.v).toFixed(1)}`).join(' ');
  const tick = v => `<text x="${Wd - 2}" y="${(y(v) + 4).toFixed(1)}" text-anchor="end">${fmt(v, 0)}</text>`;
  return `<svg class="sp-chart" viewBox="0 0 ${Wd} ${H}" role="img" aria-label="Βάρος τις τελευταίες 12 εβδομάδες">
    ${[hi - .5, (hi + lo) / 2, lo + .5].map(v => `<line x1="8" x2="${Wd - 34}" y1="${y(v).toFixed(1)}" y2="${y(v).toFixed(1)}" class="g"/>${tick(v)}`).join('')}
    ${gIn ? `<line x1="8" x2="${Wd - 34}" y1="${y(goal).toFixed(1)}" y2="${y(goal).toFixed(1)}" class="goal"/>` : ''}
    ${pts.map(p => `<circle cx="${x(p.d).toFixed(1)}" cy="${y(p.kg).toFixed(1)}" r="2.6" class="dot"/>`).join('')}
    ${tr.length > 1 ? `<path d="${line}" class="tr"/>` : ''}
    <text x="8" y="${H - 2}">${esc(Dates.short(from))}</text><text x="${Wd - 34}" y="${H - 2}" text-anchor="end">Σήμερα</text></svg>`;
}

/* ---------- 5. Ενσωμάτωση στο render() του index.html ---------- */
const SP_NAV = [
  ['today', 'Σήμερα', '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4M9 15l2 2 4-4"/>'],
  ['menu', 'Μενού', '<path d="M4 11h16a8 8 0 0 1-16 0zM8 7c0-1.5 1-2 1-3.5M12 7c0-1.5 1-2 1-3.5M16 7c0-1.5 1-2 1-3.5"/>'],
  ['gym', 'Άσκηση', '<path d="M6 8v8M3 10v4M18 8v8M21 10v4M6 12h12"/>'],
  ['stats', 'Πρόοδος', '<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>'],
  ['profile', 'Προφίλ', '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>'],
];
const SP_VIEWS = ['today', 'menu', 'gym', 'stats', 'session'];
const SP_PARENT = { day: 'today', plan: 'menu', week: 'stats', progress: 'stats', session: 'gym' };
function spPre() {
  if (!spFullNav) spFullNav = $('.bottom .wrap').innerHTML;
  const on = spOn();
  // Αντικατάσταση του παλιού έτοιμου προγράμματος (v1.2–1.3) από το νέο, μία φορά: μόνο αν είναι ενεργό και το νέο δεν υπάρχει ακόμα.
  try { const all = programs(); if (all.active === 'p_fullbody_abc' && !all.list.some(x => x.id === MP_PROGRAM.id)) { const p = mpProgramObj(); if (!Reliability.program(p)) { all.list.push(p); setActiveProgram(all, p.id); Store.set('programs', all); } } } catch (_) {}
  if (!spBooted) { spBooted = true; if (on && UI.view === 'day') UI.view = 'today'; }
  if (!on && SP_VIEWS.includes(UI.view)) { if (UI.view === 'gym') UI.mpTab = 'gym'; if (UI.view === 'session') { UI.tab = 'ex'; UI.date = Dates.today(); } UI.view = { today: 'day', menu: 'plan', gym: 'plan', stats: 'progress', session: 'day' }[UI.view]; }
  if (UI.view === 'today' || UI.view === 'session') UI.date = Dates.today();
  const mode = on ? 'simple' : 'full';
  if (spNavMode !== mode) {
    spNavMode = mode;
    $('.bottom .wrap').innerHTML = on ? SP_NAV.map(([v, l, d]) => `<button data-nav="${v}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</svg>${l}</button>`).join('') : spFullNav;
  }
}
function spView() { return UI.view === 'today' ? spTodayHTML() : UI.view === 'menu' ? spMenuHTML() : UI.view === 'gym' ? spGymHTML() : UI.view === 'stats' ? spStatsHTML() : UI.view === 'session' ? spSessionHTML() : ''; }
function spPost() {
  const v = UI.view, on = spOn();
  if (on) { const cur = SP_PARENT[v] || v; $$('.bottom button').forEach(b => b.dataset.nav === cur ? b.setAttribute('aria-current', 'page') : b.removeAttribute('aria-current')); }
  if (SP_VIEWS.includes(v)) {
    $('#datenav').style.display = 'none';
    $('#title').innerHTML = v === 'today' ? '<span class="logo" aria-hidden="true"></span><span class="brandtxt">Weight me up</span>' : { menu: 'Μενού', gym: 'Άσκηση', stats: 'Πρόοδος', session: 'Προπόνηση' }[v];
    const fab = $('#fab'); if (fab) fab.hidden = true;
  }
  if (v === 'profile') $('#main').insertAdjacentHTML('afterbegin', `<section class="sec sp-mode"><h2>Προβολή</h2><div class="sp-seg" role="group" aria-label="Προβολή"><button data-act="spMode" data-v="1" aria-pressed="${on}">Απλή</button><button data-act="spMode" data-v="0" aria-pressed="${!on}">Πλήρης</button></div><p class="small muted" style="margin:10px 0 0">${on ? 'Τέσσερις οθόνες: Σήμερα, Μενού, Άσκηση, Πρόοδος. Οι αναλυτικές ανοίγουν από τους συνδέσμους τους.' : 'Όλες οι αναλυτικές οθόνες στο κάτω μενού: Ημέρα, Εβδομάδα, Πλάνο, Πρόοδος.'}</p></section>`);
}

/* ---------- 6. Ενέργειες ---------- */
function spEat(slot) {
  const date = Dates.today(), T = spTargets(), P = spPortion(slot, spPick(date, slot), T.kcal);
  const entries = P.rows.map(r => { const pc = r.f.piece >= 20 ? r.f.piece : 0, q = pc ? r.g / pc : 0; return makeEntry(r.f, pc && Number.isInteger(q) ? { g: r.g, qty: q, unit: 'piece' } : { g: r.g, qty: r.g, unit: 'g' }, 'menu', false); });
  const st = spState(); st.log[date] = Object.assign({}, st.log[date], { [slot]: entries.map(e => e.id) }); if (!spSave(st)) return;
  UI.date = date; addEntries(entries, slot);
}
function spUndo(slot) {
  const date = Dates.today(), st = spState(), ids = spLoggedIds(date, slot), d = getDay(date);
  d.meals = d.meals.filter(e => !ids.includes(e.id)); st.log[date] = Object.assign({}, st.log[date]); delete st.log[date][slot]; spSave(st); saveDay(d); render(); toast('Αναιρέθηκε.');
}
document.addEventListener('click', e => {
  const a = e.target.closest('[data-act^="sp"]'); if (!a) return;
  const s = a.dataset.s;
  switch (a.dataset.act) {
    case 'spEat': spEat(s); break;
    case 'spUndo': spUndo(s); break;
    case 'spSwap': { const date = Dates.today(), st = spState(); st.pick[date] = Object.assign({}, st.pick[date], { [s]: (spPick(date, s) + 1) % SP_MENU[s].length }); if (spSave(st)) render(); break; }
    case 'spOther': UI.date = Dates.today(); openAddFood(s); break;
    case 'spStart': {
      if (!spEnsureProgram()) break; const prog = activeProgram(); if (!prog) break;
      const did = a.dataset.did || (spWorkoutFor(Dates.today()) || nextProgramDay(prog, Dates.today())).id;
      UI.date = Dates.today(); UI.view = spOn() ? 'session' : 'day'; UI.tab = 'ex'; startProgramDay(did); render(); window.scrollTo(0, 0); break;
    }
    case 'spGoEx': UI.date = Dates.today(); UI.view = 'session'; render(); window.scrollTo(0, 0); break;
    case 'spGoFull': UI.date = Dates.today(); UI.view = 'day'; UI.tab = 'ex'; render(); window.scrollTo(0, 0); break;
    case 'spExDone': { const x = getDay(UI.date), ex = x.ex.find(y => y.id === a.dataset.id); if (!ex) break; ex.done = true; saveDay(x); keepScroll(render); toast(x.ex.every(y => y.done) ? 'Η προπόνηση ολοκληρώθηκε. Μπράβο.' : 'Έγινε.'); break; }
    case 'spFull': UI.date = Dates.today(); UI.view = 'day'; UI.tab = 'meals'; render(); window.scrollTo(0, 0); break;
    case 'spGuide': UI.view = 'plan'; UI.mpTab = 'guide'; render(); window.scrollTo(0, 0); break;
    case 'spPlan': UI.view = 'plan'; UI.mpTab = a.dataset.tab || 'foods'; render(); window.scrollTo(0, 0); break;
    case 'spMode': { const st = spState(), want = a.dataset.v === '1'; if (st.on === want) break; st.on = want; if (spSave(st)) { toast(st.on ? 'Απλή προβολή: ενεργή.' : 'Όλες οι οθόνες είναι πάλι στο κάτω μενού.'); render(); } break; }
    case 'spSetup': {
      const p = profile(), age = intIn($('#spAge').value), h = numIn($('#spH').value), kg = numIn($('#spKg').value);
      if (age === null || age < 18 || age > 110) { toast('Δώσε ηλικία 18–110.'); break; }
      if (h === null || h < 120 || h > 230) { toast('Δώσε ύψος σε εκατοστά, π.χ. 176.'); break; }
      if (kg === null || kg < 25 || kg > 350) { toast('Δώσε βάρος σε κιλά, π.χ. 85,4.'); break; }
      if (!saveProfile(Object.assign({}, p, { sex: $('#spSex').value, age, height: h, goal: $('#spGoal').value }))) break;
      setWeight(Dates.today(), kg); toast('Έτοιμο. Οι στόχοι σου υπολογίστηκαν.'); render(); break;
    }
  }
});
