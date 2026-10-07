const WMU_EXTRA_FOODS = [
  F("gr_d04","Γιαούρτι αγελάδος 2%",["plain yogurt 2% (not strained)", "δέλτα", "μεβγάλ"],55,4.5,4.7,2,{"portion": 200, "fiber": 0, "cat": "dairy"}),
  F("gr_d05","Κεφίρ 1,5%",["kefir 1.5%", "μεβγάλ", "όλυμπος"],44,3.3,4.3,1.5,{"portion": 250, "fiber": 0, "cat": "dairy"}),
  F("gr_d08","Γάλα 0%",["skimmed milk", "δέλτα", "νουνου"],34,3.4,4.8,0.1,{"portion": 250, "fiber": 0, "cat": "dairy"}),
  F("gr_d09","Γάλα κακάο",["chocolate milk", "μιλκο"],73,3.4,10.8,1.8,{"portion": 250, "fiber": 0, "cat": "dairy"}),
  F("gr_d14","Λευκό τυρί light",["light white cheese (feta-style)", "supermarket brands"],164,17.5,1,10,{"portion": 30, "fiber": 0, "cat": "cheese"}),
  F("gr_d16","Γκούντα light σε φέτες",["light gouda, sliced", "supermarket brands"],271,30,0.5,16.5,{"portion": 20, "fiber": 0, "cat": "cheese"}),
  F("gr_d17","Κασέρι",["kasseri"],361,24,1,29,{"portion": 30, "fiber": 0, "cat": "cheese"}),
  F("gr_d20","Χαλούμι",["halloumi"],317,21,2,25,{"portion": 50, "fiber": 0, "cat": "cheese"}),
  F("gr_d22","Cottage cheese light",["cottage cheese light (about 1.5% fat)", "supermarket brands"],74,12,3,1.5,{"portion": 150, "fiber": 0, "cat": "dairy"}),
  F("gr_d23","Μοτσαρέλα φρέσκια",["fresh mozzarella"],252,18,1,19.5,{"portion": 60, "fiber": 0, "cat": "cheese"}),
  F("gr_d24","Μοτσαρέλα light",["light mozzarella"],161,19,1,9,{"portion": 60, "fiber": 0, "cat": "cheese"}),
  F("gr_d26","Τυρί κρέμα light",["light cream cheese", "philadelphia light"],145,7.5,4,11,{"portion": 20, "fiber": 0, "cat": "cheese"}),
  F("gr_m03","Μπούτι κοτόπουλο φιλέτο (ωμό)",["chicken thigh fillet, raw", "πίνδος", "νιτσιάκος"],151,18.5,0,8.5,{"portion": 150, "fiber": 0, "cat": "meat"}),
  F("gr_m04","Μπιφτέκι κοτόπουλο",["chicken patty (not breaded)", "πίνδος", "νιτσιάκος"],179,15,5,11,{"portion": 110, "fiber": 0, "cat": "meat", "piece": 110}),
  F("gr_m06","Κοτόπουλο φέτες (αλλαντικό)",["chicken breast slices (deli)", "υφαντής", "creta farms", "νίκας"],100,18,2,2.2,{"portion": 20, "fiber": 0, "cat": "meat"}),
  F("gr_m07","Ζαμπόν / χοιρομέρι",["ham slices", "υφαντής", "creta farms", "νίκας"],115,17,1.5,4.5,{"portion": 20, "fiber": 0, "cat": "meat"}),
  F("gr_m08","Κιμάς μοσχαρίσιος (~15% λίπος)",["beef mince, about 15% fat, raw", "butcher", "supermarket"],209,18.6,0,15,{"portion": 125, "fiber": 0, "cat": "meat"}),
  F("gr_m09","Κιμάς μοσχαρίσιος άπαχος (~5%)",["lean beef mince, about 5% fat, raw", "butcher", "supermarket"],131,21.4,0,5,{"portion": 125, "fiber": 0, "cat": "meat"}),
  F("gr_m10","Μοσχάρι μπριζόλα / κόντρα (ωμό)",["beef steak (sirloin), raw"],147,21,0,7,{"portion": 200, "fiber": 0, "cat": "meat"}),
  F("gr_m11","Χοιρινό φιλέτο (ωμό)",["pork tenderloin, raw"],116,21,0,3.5,{"portion": 150, "fiber": 0, "cat": "meat"}),
  F("gr_m12","Χοιρινή μπριζόλα (ωμή)",["pork chop, raw"],198,19,0,13.5,{"portion": 200, "fiber": 0, "cat": "meat"}),
  F("gr_m17","Λουκάνικο χωριάτικο",["greek sausage (loukaniko)"],302,15,2,26,{"portion": 80, "fiber": 0, "cat": "meat", "piece": 80}),
  F("gr_m18","Κεφτέδες (τηγανητοί)",["keftedes (fried meatballs)"],264,15,10,18,{"portion": 100, "fiber": 1, "cat": "meat"}),
  F("gr_m19","Σνίτσελ κοτόπουλο πανέ",["breaded chicken schnitzel"],234,15,16,12,{"portion": 120, "fiber": 1, "cat": "meat"}),
  F("gr_f04","Σαρδέλες σε ελαιόλαδο (κονσέρβα)",["sardines in olive oil, drained"],202,24.6,0,11.5,{"portion": 90, "fiber": 0, "cat": "fish"}),
  F("gr_f05","Γαύρος (ωμός)",["fresh anchovies (gavros), raw", "fishmonger"],125,20.4,0,4.8,{"portion": 150, "fiber": 0, "cat": "fish"}),
  F("gr_f06","Μπακαλιάρος φιλέτο (ωμός)",["cod fillet, raw", "frozen", "fresh"],78,18,0,0.7,{"portion": 150, "fiber": 0, "cat": "fish"}),
  F("gr_f07","Τσιπούρα φιλέτο (ωμή)",["sea bream (tsipoura) fillet, raw"],130,19.5,0,5.8,{"portion": 150, "fiber": 0, "cat": "fish"}),
  F("gr_f08","Λαβράκι φιλέτο (ωμό)",["sea bass (lavraki) fillet, raw"],121,19,0,5,{"portion": 150, "fiber": 0, "cat": "fish"}),
  F("gr_f09","Γαρίδες καθαρισμένες (ωμές)",["shrimp, peeled, raw"],85,20,0,0.5,{"portion": 150, "fiber": 0, "cat": "fish"}),
  F("gr_f10","Χταπόδι (βραστό ή ψητό)",["octopus, boiled or grilled"],140,27,3.5,2,{"portion": 150, "fiber": 0, "cat": "fish"}),
  F("gr_f11","Καλαμάρι (ψητό)",["squid, grilled"],119,20,3,3,{"portion": 150, "fiber": 0, "cat": "fish"}),
  F("gr_b02","Τορτίγια πρωτεΐνης",["protein tortilla wrap", "various brands"],279,20,30,6.5,{"portion": 50, "fiber": 10, "cat": "bread", "piece": 50}),
  F("gr_b03","Τορτίγια ολικής",["whole wheat tortilla wrap", "mission", "supermarket brands"],293,9,45,7,{"portion": 62, "fiber": 7, "cat": "bread", "piece": 62}),
  F("gr_b04","Πίτα για σουβλάκι",["souvlaki pita bread", "supermarket", "bakery"],287,8,50,5.5,{"portion": 90, "fiber": 2.5, "cat": "bread", "piece": 90}),
  F("gr_b08","Ψωμί τοστ λευκό",["white toast bread", "κρις κρις", "καραμολέγκος"],265,8,48,4,{"portion": 27, "fiber": 2.5, "cat": "bread", "piece": 27}),
  F("gr_b09","Ψωμί τοστ ολικής",["wholegrain toast bread", "κρις κρις", "καραμολέγκος"],248,10,40,4,{"portion": 27, "fiber": 6, "cat": "bread", "piece": 27}),
  F("gr_b10","Φρυγανιές ολικής",["wholegrain rusks (friganies)", "κρις κρις", "παπαδοπούλου"],397,13,67,6.5,{"portion": 17, "fiber": 9, "cat": "bread", "piece": 17}),
  F("gr_b11","Παξιμάδι κριθαρένιο",["barley rusk (cretan)"],361,11,64,4.5,{"portion": 40, "fiber": 10, "cat": "bread", "piece": 40}),
  F("gr_b19","Μακαρόνια ολικής (ωμά)",["whole wheat pasta, dry", "μίσκο", "melissa", "barilla"],347,14,63,2.5,{"portion": 80, "fiber": 8, "cat": "grain_dry"}),
  F("gr_b20","Κριθαράκι (ωμό)",["orzo (kritharaki), dry", "μίσκο", "melissa"],356,12.5,71.5,1.6,{"portion": 70, "fiber": 3, "cat": "grain_dry"}),
  F("gr_b21","Τραχανάς",["trahanas, dry"],358,13,67,3.5,{"portion": 50, "fiber": 3, "cat": "grain_dry"}),
  F("gr_b22","Πλιγούρι",["bulgur, dry"],340,12.3,63.4,1.3,{"portion": 60, "fiber": 12.5, "cat": "grain_dry"}),
  F("gr_b27","Πατάτες φούρνου λαδερές",["oven potatoes with olive oil"],152,2,18,7.5,{"portion": 200, "fiber": 2, "cat": "grain_cooked"}),
  F("gr_b28","Γλυκοπατάτα (ωμή)",["sweet potato, raw"],81,1.6,17,0.1,{"portion": 200, "fiber": 3, "cat": "grain_cooked"}),
  F("gr_l03","Ρεβίθια κονσέρβα (στραγγισμένα)",["chickpeas, canned, drained", "supermarket brands"],116,7,13.5,2.5,{"portion": 120, "fiber": 5.5, "cat": "dish"}),
  F("gr_l05","Γίγαντες (ξεροί)",["giant beans (gigantes), dry", "άγρινο", "3α"],308,21.5,44.4,0.7,{"portion": 70, "fiber": 19, "cat": "dish"}),
  F("gr_l06","Φάβα (ξερή)",["fava (yellow split peas), dry", "άγρινο", "3α"],336,23,52,1.5,{"portion": 70, "fiber": 11, "cat": "dish"}),
  F("gr_l07","Κόκκινα φασόλια κονσέρβα",["red kidney beans, canned, drained", "supermarket brands"],94,7,12,0.5,{"portion": 120, "fiber": 6.5, "cat": "dish"}),
  F("gr_g01","Φασολάδα",["bean soup (fasolada)", "home-made"],106,4.5,11,4,{"portion": 350, "fiber": 4, "cat": "dish"}),
  F("gr_g02","Φακές σούπα",["lentil soup (fakes)", "home-made"],114,5.5,13,3.5,{"portion": 350, "fiber": 4, "cat": "dish"}),
  F("gr_g03","Ρεβιθάδα",["chickpea soup (revithada)", "home-made"],134,5.5,13,5.5,{"portion": 350, "fiber": 5, "cat": "dish"}),
  F("gr_g06","Μπριάμ",["briam (roast vegetables in oil)", "home-made"],104,1.8,8,6.5,{"portion": 300, "fiber": 3, "cat": "dish"}),
  F("gr_g08","Παστίτσιο",["pastitsio", "home-made", "taverna"],192,9,17,9.5,{"portion": 300, "fiber": 1, "cat": "dish"}),
  F("gr_g11","Χωριάτικη σαλάτα",["greek salad (horiatiki)", "with feta and olive oil"],132,3.5,4,11,{"portion": 350, "fiber": 1.3, "cat": "dish"}),
  F("gr_g14","Ταραμοσαλάτα",["taramosalata", "supermarket"],457,3,10,45,{"portion": 30, "fiber": 0, "cat": "spread"}),
  F("gr_g17","Ρύζι με λαχανικά και καλαμπόκι",["rice with vegetables and corn", "home-made"],120,2.8,23,1.5,{"portion": 180, "fiber": 1.5, "cat": "dish"}),
  F("gr_g18","Μακαρόνια με κιμά",["spaghetti with meat sauce", "home-made"],154,7.5,19,5,{"portion": 350, "fiber": 1.5, "cat": "dish"}),
  F("gr_g19","Κοτόσουπα αυγολέμονο",["chicken soup avgolemono", "home-made"],71,6,6,2.5,{"portion": 400, "fiber": 0.3, "cat": "dish"}),
  F("gr_v05","Πιπεριά κόκκινη",["red pepper"],28,1,4.2,0.3,{"portion": 120, "fiber": 2.1, "cat": "veg"}),
  F("gr_v06","Πιπεριά πράσινη",["green pepper"],20,0.9,2.9,0.2,{"portion": 120, "fiber": 1.7, "cat": "veg"}),
  F("gr_v12","Λάχανο",["cabbage"],24,1.3,3.3,0.1,{"portion": 100, "fiber": 2.5, "cat": "veg"}),
  F("gr_v14","Μανιτάρια",["mushrooms"],26,3.1,2.3,0.3,{"portion": 100, "fiber": 1, "cat": "veg"}),
  F("gr_v15","Ανάμεικτα λαχανικά κατεψυγμένα",["frozen mixed vegetables", "barba stathis", "supermarket brands"],49,2.5,7,0.4,{"portion": 150, "fiber": 3.5, "cat": "veg"}),
  F("gr_v17","Καλαμπόκι κονσέρβα",["sweetcorn, canned, drained", "bonduelle", "supermarket brands"],86,2.9,14.5,1.2,{"portion": 80, "fiber": 2.8, "cat": "veg"}),
  F("gr_v20","Χόρτα βραστά",["boiled greens (horta)", "vlita", "radikia"],27,2.5,2,0.3,{"portion": 200, "fiber": 3, "cat": "veg"}),
  F("gr_v21","Ρόκα",["rocket"],28,2.6,2.1,0.7,{"portion": 40, "fiber": 1.6, "cat": "veg"}),
  F("gr_v22","Παντζάρια βραστά",["beetroot, boiled"],45,1.7,8,0.2,{"portion": 100, "fiber": 2, "cat": "veg"}),
  F("gr_v23","Κουνουπίδι",["cauliflower"],26,1.9,3,0.3,{"portion": 150, "fiber": 2, "cat": "veg"}),
  F("gr_fr04","Νεκταρίνι",["nectarine"],46,1.1,8.9,0.3,{"portion": 140, "fiber": 1.7, "cat": "fruit", "piece": 140}),
  F("gr_fr05","Ροδάκινο",["peach"],41,0.9,8,0.3,{"portion": 150, "fiber": 1.5, "cat": "fruit", "piece": 150}),
  F("gr_fr08","Πεπόνι",["melon"],36,0.8,7.3,0.2,{"portion": 200, "fiber": 0.9, "cat": "fruit"}),
  F("gr_fr09","Σύκα φρέσκα",["fresh figs"],77,0.8,16.3,0.3,{"portion": 50, "fiber": 2.9, "cat": "fruit", "piece": 50}),
  F("gr_fr11","Ακτινίδιο",["kiwi"],62,1.1,11.7,0.5,{"portion": 75, "fiber": 3, "cat": "fruit", "piece": 75}),
  F("gr_fr12","Αχλάδι",["pear"],57,0.4,12.1,0.1,{"portion": 180, "fiber": 3.1, "cat": "fruit", "piece": 180}),
  F("gr_fr13","Μανταρίνι",["mandarin"],56,0.8,11.5,0.3,{"portion": 80, "fiber": 1.8, "cat": "fruit", "piece": 80}),
  F("gr_fr14","Ρόδι (σπόροι)",["pomegranate seeds"],84,1.7,14.7,1.2,{"portion": 100, "fiber": 4, "cat": "fruit"}),
  F("gr_fr15","Σύκα ξερά",["dried figs", "κύμης"],257,3.3,54,0.9,{"portion": 30, "fiber": 9.8, "cat": "fruit"}),
  F("gr_fr16","Σταφίδες",["raisins or currants"],328,3.1,76,0.5,{"portion": 30, "fiber": 3.7, "cat": "fruit"}),
  F("gr_fr17","Μούρα κατεψυγμένα",["frozen mixed berries"],48,1,8,0.4,{"portion": 100, "fiber": 4, "cat": "fruit"}),
  F("gr_fr18","Βερίκοκο",["apricot"],50,1.4,9.2,0.4,{"portion": 40, "fiber": 2, "cat": "fruit", "piece": 40}),
  F("gr_n03","Φιστίκια Αιγίνης (ψίχα)",["pistachios, shelled"],579,20.5,18,45,{"portion": 30, "fiber": 10, "cat": "nut"}),
  F("gr_n04","Φιστίκια αράπικα",["peanuts, roasted"],611,24,13,49.7,{"portion": 30, "fiber": 8, "cat": "nut"}),
  F("gr_n06","Ταχίνι",["tahini", "χαϊτόγλου"],618,17,11.9,53.8,{"portion": 15, "fiber": 9.3, "cat": "spread"}),
  F("gr_n07","Πασατέμπος (ψίχα)",["pumpkin seeds, shelled"],592,30,4.7,49,{"portion": 30, "fiber": 6, "cat": "nut"}),
  F("gr_n08","Ηλιόσποροι (ψίχα)",["sunflower seeds, shelled"],610,21,11.4,51.5,{"portion": 30, "fiber": 8.6, "cat": "nut"}),
  F("gr_s03","Μαρμελάδα",["jam"],245,0.4,60,0.1,{"portion": 15, "fiber": 1, "cat": "spread"}),
  F("gr_s07","Πατατάκια",["potato chips", "lay's", "tasty"],541,6.5,50,34,{"portion": 30, "fiber": 4.5, "cat": "sweet"}),
  F("gr_s08","Μπισκότα πτι-μπερ",["petit-beurre biscuits", "παπαδοπούλου"],440,7.5,73,12.5,{"portion": 25, "fiber": 2.5, "cat": "sweet"}),
  F("gr_s15","Ποπ κορν (χωρίς λάδι)",["popcorn, air-popped"],374,13,63,4.5,{"portion": 20, "fiber": 14.5, "cat": "sweet"}),
  F("gr_dr08","Πρωτεΐνη ορού isolate",["whey protein isolate (typical)", "goldtouch iso touch"],364,86,2,1.3,{"portion": 30, "fiber": 0, "cat": "other", "supp": true}),
  F("gr_dr09","Ρόφημα αμυγδάλου χωρίς ζάχαρη",["almond drink, unsweetened", "alpro"],12,0.4,0,1.1,{"portion": 250, "fiber": 0.3, "cat": "drink"}),
  F("gr_c04","Μαγιονέζα light",["light mayonnaise", "hellmann's light"],291,0.5,7,29,{"portion": 15, "fiber": 0, "cat": "spread"}),
  F("gr_c07","Ξίδι βαλσάμικο",["balsamic vinegar"],90,0.5,22,0,{"portion": 10, "fiber": 0, "cat": "spread"}),
  F("gr_c08","Σάλτσα σόγιας",["soy sauce"],53,8,5,0.1,{"portion": 15, "fiber": 0, "cat": "spread"})
];
/* plan.js — «Πλάνο»: εβδομαδιαίο πλάνο γευμάτων από τα φαγητά που επιλέγεις,
   έτοιμο πρόγραμμα 3 ολόσωμων προπονήσεων και οδηγός (συνήθειες, ύπνος, συμπληρώματα).
   Φορτώνεται μετά το app.js· χρησιμοποιεί τα Store, foods(), dayTargets(), makeEntry(), addEntries(), programs().
   Όλα μένουν στη συσκευή, όπως και τα υπόλοιπα δεδομένα της εφαρμογής. */

/* ---------- 1. Επιπλέον ελληνικά τρόφιμα στη βάση ---------- */
const WMU_FIBER = {"turkey_deli":0,"salmon_raw":0,"yog_greek_2":0,"yog_greek_0":0,"yog_greek_5":0,"milk_15":0,"milk_35":0,"feta":0,"graviera":0,"cottage":0,"butter":0,"rice_white_raw":1.3,"fries":3.8,"bread_white":2.7,"bread_whole":6.5,"pita_arabic":2.2,"croissant":2,"moussaka":2,"fasolakia":3,"gemista":2,"hummus":5,"tzatziki":0.3,"banana":2.6,"apple":2.4,"orange":2.4,"strawberries":2,"grapes":0.9,"watermelon":0.4,"broccoli":2.6,"tomato":1.2,"cucumber":0.5,"carrot":2.8,"pepper":2.1,"spinach":2.2,"zucchini":1,"olive_oil":0,"peanut_butter":6,"almonds":12.5,"walnuts":6.7,"olives":3,"honey":0,"sugar":0,"choc_milk":2,"choc_dark":11,"whey":0,"eggplant":3,"tomato_paste":4,"peas":5.1,"lentils_dry":11,"chickpeas_dry":17.4,"beans_dry":15.3,"lemon_juice":0.3,"praline":3,"baklavas":2,"halvas":4,"pasteli":5,"protein_bar":8,"oj":0.2,"ketchup":0.3,"mayo":0,"mustard":2,"bougatsa":0.5,"koulouri":3,"rice_white_cooked":0.4,"rice_brown_cooked":1.8,"pasta_cooked":1.8,"pasta_raw":3.2,"potato_boiled":1.8,"potato_baked":2.2,"sweet_potato":3.3,"oats":10.1,"muesli":7.3,"cornflakes":3.3,"tortilla":3,"rusk":4.5,"rice_cake":3,"couscous_cooked":1.4,"quinoa_cooked":2.8,"digestive":3.5,"pizza_margh":2.3,"lentils":7.9,"chickpeas":7.6,"beans_white":6.3,"avocado":6.7,"lettuce":1.3,"onion":1.7,"garlic":2.1,"tomato_crushed":1.5,"flour":2.7,"green_beans_raw":2.7,"potato_raw":2.2,"spanakopita":2,"tyropita":1,"souvlaki_pita":1.5,"gyros_pita":1.5,"choc_hazel":3,"cookie_choc":2,"brownie":2,"cake_home":1,"chk_breast_cooked":0,"chk_breast_raw":0,"chk_thigh_cooked":0,"beef_mince10":0,"beef_steak":0,"beef_patty":0,"pork_chop":0,"souvlaki_pork":0,"salmon_cooked":0,"tuna_water":0,"tuna_oil":0,"shrimp":0,"egg":0,"egg_white":0,"gouda":0,"pork_raw":0,"beef_raw":0,"lamb_raw":0,"chk_thigh_raw":0,"parmesan":0,"souvlaki_chicken":0,"beer":0,"wine":0,"spirits":0,"cola":0,"coffee":0,"coffee_milk":0,"tea":0,"cola_zero":0};
for (const f of BUILTIN_FOODS) if ((f.fiber === undefined || f.fiber === null) && WMU_FIBER[f.id] !== undefined) f.fiber = WMU_FIBER[f.id];
for (const f of WMU_EXTRA_FOODS) if (!BUILTIN_FOODS.some(b => b.id === f.id)) BUILTIN_FOODS.push(f);
foodCache = null;

/* ---------- 2. Στυλ ---------- */
(() => {
  const css = `
.mp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:6px}
.mp-food{display:flex;gap:10px;align-items:flex-start;text-align:left;border:1px solid var(--line);background:var(--surface);color:var(--ink);border-radius:var(--r-sm);padding:9px 10px;font:inherit;cursor:pointer;min-width:0}
.mp-food .bx{width:18px;height:18px;border-radius:5px;border:1.5px solid var(--line);flex:none;margin-top:2px;display:grid;place-items:center}
.mp-food[aria-pressed="true"]{border-color:var(--accent);background:var(--accent-soft)}
.mp-food[aria-pressed="true"] .bx{background:var(--accent);border-color:var(--accent)}
.mp-food[aria-pressed="true"] .bx::after{content:"";width:9px;height:5px;border:2px solid var(--accent-ink);border-top:0;border-right:0;transform:rotate(-45deg) translate(1px,-1px)}
.mp-food .t{min-width:0}.mp-food .n{font-weight:600;font-size:.92rem;display:block}.mp-food .m{color:var(--muted);font-size:.78rem;display:block}
.mp-bal{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px}
.mp-bal div{border:1px solid var(--line);border-radius:var(--r-sm);padding:7px 8px;min-width:0}
.mp-bal b{display:block;font-size:1.15rem}.mp-bal span{font-size:.72rem;color:var(--muted);display:block}
.mp-bal .low span{color:var(--warn);font-weight:600}
.mp-days{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:4px;margin:6px 0 4px}
.mp-days button{border:1px solid var(--line);background:var(--surface);color:var(--ink);border-radius:var(--r-sm);padding:6px 2px;font:inherit;font-size:.8rem;cursor:pointer;min-width:0}
.mp-days button[aria-pressed="true"]{border-color:var(--accent);box-shadow:inset 0 0 0 1px var(--accent)}
.mp-days small{display:block;color:var(--muted);font-size:.68rem}.mp-days i{display:block;font-style:normal;font-size:.62rem;color:var(--accent);font-weight:700;height:.9rem}
.mp-meal .mh{display:flex;justify-content:space-between;align-items:baseline;gap:8px}
.mp-meal ul{list-style:none;margin:6px 0 8px;padding:0;display:grid;gap:3px}
.mp-meal li{display:flex;justify-content:space-between;gap:10px;font-size:.9rem}.mp-meal li span:last-child{color:var(--muted);white-space:nowrap}
.mp-meter{margin:6px 0}.mp-meter .r{display:flex;justify-content:space-between;font-size:.85rem}
.mp-meter .bar{height:7px;background:var(--sunk);border-radius:4px;overflow:hidden;margin-top:3px}.mp-meter .bar i{display:block;height:100%;background:var(--accent);border-radius:4px}
.mp-meter.warn .bar i{background:var(--warn)}.mp-meter.bad .bar i{background:var(--over)}
.mp-tl td:first-child{white-space:nowrap;font-weight:600;vertical-align:top}
@media (max-width:480px){.mp-bal{grid-template-columns:repeat(3,minmax(0,1fr))}.mp-days small{display:none}}`;
  const s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
})();

/* ---------- 3. Κατάσταση ---------- */
const MP_DEFAULT_PICKS = ['chk_breast_cooked','egg','yog_greek_0','oats','rice_white_cooked','potato_boiled','tuna_water','salmon_raw','broccoli','tomato','cucumber','lettuce','banana','apple','olive_oil','almonds','lentils','tortilla','turkey_deli','whey'];
const MP_DAYS = ['Δευτέρα','Τρίτη','Τετάρτη','Πέμπτη','Παρασκευή','Σάββατο','Κυριακή'];
const MP_DAYS_S = ['Δευ','Τρί','Τετ','Πέμ','Παρ','Σάβ','Κυρ'];
const mpState = () => Object.assign({ picks: [], gym: [0, 2, 4], seed: 1, treats: false, kcal: '', p: '' }, Store.get('mealplan', {}) || {});
function mpSave(st) { const errs = Reliability.validateData({ mealplan: st }); if (errs.length) { toast('Δεν αποθηκεύτηκε το πλάνο: ' + errs.join(' · '), 5000); return; } Store.set('mealplan', st); }
function mpTargets() {
  const st = mpState(), dt = dayTargets(Dates.today());
  const kcal = numIn(st.kcal) ?? (dt ? Math.round(dt.kcal) : null), p = numIn(st.p) ?? (dt ? Math.round(dt.p) : null);
  return { kcal: kcal ?? 2000, p: p ?? 130, fib: 30, fromProfile: !!dt && numIn(st.kcal) === null, missing: kcal === null };
}

/* ---------- 4. Ρόλοι τροφίμων ---------- */
const mpDens = f => f.kcal ? f.p * 100 / f.kcal : 0;
function mpRole(f) {
  const n = (f.name || '').toLowerCase();
  if (f.supp && /whey|ορού|isolate/.test(n + ' ' + (f.aliases || []).join(' '))) return 'W';
  if (f.supp) return 'SP';
  if (f.cat === 'meat' || f.cat === 'fish') return /αλλαντικ|ζαμπόν|φέτες/.test(n) ? 'DELI' : 'P';
  if (f.cat === 'egg') return 'EGG';
  if (f.cat === 'dairy') return mpDens(f) >= 8 ? 'YOG' : 'M';
  if (f.cat === 'cheese') return 'Q';
  if (f.cat === 'grain_dry' && /βρώμη|μούσλι|oat/.test(n)) return 'OAT';
  if (['grain_cooked','grain_dry'].includes(f.cat)) return 'C';
  if (f.cat === 'bread') return 'BR';
  if (f.cat === 'dish') return 'D';
  if (f.cat === 'veg') return 'V';
  if (f.cat === 'fruit') return /αβοκάντο/.test(n) ? 'X' : 'F';
  if (f.cat === 'fat' || f.cat === 'nut') return 'X';
  if (f.cat === 'spread') return 'K';
  if (['sweet','sugar','icecream'].includes(f.cat)) return 'T';
  if (f.cat === 'drink') return f.kcal < 5 ? 'Z' : 'T';
  return 'Z';
}
const MP_GROUPS = { P: ['P','EGG','DELI','YOG','SP','W'], C: ['C','BR','D','OAT','M'], V: ['V'], F: ['F'], X: ['X','Q'] };
const MP_NEED = { P: 4, C: 3, V: 3, F: 2, X: 1 };
const MP_GLABEL = { P: 'Πρωτεΐνη', C: 'Υδατάνθρακες', V: 'Λαχανικά', F: 'Φρούτα', X: 'Λιπαρά' };

/* ---------- 5. Δημιουργία εβδομάδας ---------- */
function mpRng(seed) { let s = (seed >>> 0) || 1; return () => { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; return ((s >>> 0) % 1e6) / 1e6; }; }
function mpShuffle(a, r) { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const mpRot = (pool, i, off = 0) => pool.length ? pool[(i + off) % pool.length] : null;
const mpGrp = f => { const r = f._r; return MP_GROUPS.P.includes(r) && r !== 'W' ? 'P' : MP_GROUPS.C.includes(r) ? 'C' : MP_GROUPS.X.includes(r) ? 'X' : 'fix'; };
const mpPc = f => { const p = numIn(f.piece); return p && p >= 20 ? p : null; };
function mpBase(f, ctx) {
  const r = f._r, pc = mpPc(f);
  if (r === 'P') return pc ? Math.max(1, Math.round(140 / pc)) * pc : Math.max(120, Math.min(f.portion || 150, 170));
  if (r === 'EGG') return (numIn(f.piece) || 50) * 2;
  if (r === 'DELI') return 60;
  if (r === 'YOG') return /cottage/i.test(f.name) ? 150 : 200;
  if (r === 'OAT') return 40;
  if (r === 'W') return 30;
  if (r === 'X') return f.id === 'olive_oil' || /ελαιόλαδο/i.test(f.name) ? 5 : f.id === 'butter' ? 5 : 15;
  if (r === 'Q') return Math.min(f.portion || 30, 30);
  if (r === 'K') return Math.min(f.portion || 20, 30);
  if (r === 'V') return ctx === 'salad' ? Math.min(f.portion || 100, 120) : (f.portion || 150);
  if (r === 'F') return pc || f.portion || 150;
  return f.portion || 100;
}
const mpTot = meals => { const t = { kcal: 0, p: 0, c: 0, f: 0, fib: 0 }; meals.forEach(m => m.items.forEach(([f, g]) => { t.kcal += f.kcal * g / 100; t.p += f.p * g / 100; t.c += f.c * g / 100; t.f += f.f * g / 100; t.fib += (f.fiber || 0) * g / 100; })); return t; };
function mpFit(meals, T) {
  const all = []; meals.forEach(m => m.items.forEach((it, i) => { const g = mpGrp(it[0]), b = it[1];
    const lim = g === 'P' ? [b * .6, Math.min(b * 2, it[0]._r === 'EGG' ? 165 : it[0]._r === 'YOG' ? 350 : 260)] : g === 'C' ? [b * .5, b * 2.4] : g === 'X' ? [b * .5, b * 2.5] : [b, b];
    all.push({ m, i, g, lo: lim[0], hi: lim[1] }); }));
  const scale = (g, fac) => all.filter(a => a.g === g).forEach(a => { const it = a.m.items[a.i]; it[1] = Math.max(a.lo, Math.min(a.hi, it[1] * fac)); });
  const sum = (g, k) => all.filter(a => a.g === g).reduce((s, a) => { const [f, gr] = a.m.items[a.i]; return s + f[k] * gr / 100; }, 0);
  for (let k = 0; k < 6; k++) {
    let t = mpTot(meals); if (t.p < T.p - 3) { const pp = sum('P', 'p'); if (pp > 0) scale('P', 1 + (T.p - t.p) / pp); }
    t = mpTot(meals); const d = T.kcal - t.kcal; if (Math.abs(d) < 30) break;
    const ck = sum('C', 'kcal'); if (ck > 0) scale('C', 1 + d / ck);
    t = mpTot(meals); const d2 = T.kcal - t.kcal; if (Math.abs(d2) > 40) { const xk = sum('X', 'kcal'); if (xk > 0) scale('X', 1 + d2 / xk); }
  }
  meals.forEach(m => m.items.forEach(it => { const f = it[0], pc = mpPc(f); it[1] = pc ? Math.max(1, Math.round(it[1] / pc)) * pc : Math.max(5, Math.round(it[1] / 5) * 5); }));
  for (let k = 0; k < 40; k++) {
    const t = mpTot(meals); if (t.kcal <= T.kcal + 40) break; const floor = k < 25 ? T.p - 3 : T.p - 15; let best = null;
    meals.forEach(m => m.items.forEach(it => { const f = it[0], g = mpGrp(f); if (g === 'fix' && f._r !== 'F') return;
      const pc = mpPc(f), u = pc || Math.max(10, Math.round(it[1] * .15 / 5) * 5), min = pc ? pc : f._r === 'D' ? (f.portion || 100) * .7 : 5;
      if (it[1] - u < min) return; const dp = f.p * u / 100, dk = f.kcal * u / 100; if (t.p - dp < floor) return;
      const score = dk - dp * 8 + (g === 'X' ? 20 : g === 'C' ? 10 : 0); if (!best || score > best.score) best = { it, u, score }; }));
    if (!best) { if (k < 25) { k = 24; continue; } break; } best.it[1] -= best.u;
  }
}
function mpBuild() {
  const st = mpState(), T = mpTargets(), byId = foods().byId, r = mpRng(st.seed * 7919 + st.picks.length);
  const P = st.picks.map(id => byId.get(id)).filter(Boolean).map(f => Object.assign(Object.create(f), { _r: mpRole(f) }));
  const by = (...rs) => P.filter(f => rs.includes(f._r));
  const mains = mpShuffle(by('P'), r), legumes = mpShuffle(P.filter(f => f._r === 'D' && /φακ|ρεβίθ|φασόλ|φάβα|γίγαντ/i.test(f.name)), r);
  const yog = by('YOG'), oats = by('OAT'), bread = by('BR'), eggs = by('EGG'), deli = by('DELI'), whey = by('W')[0];
  const starch = mpShuffle(by('C'), r), dishes = mpShuffle(P.filter(f => f._r === 'D' && !legumes.includes(f)), r);
  const veg = mpShuffle(by('V'), r), fruit = mpShuffle(by('F'), r), fats = by('X'), cheese = by('Q');
  const oil = fats.find(f => /ελαιόλαδο/i.test(f.name)), nuts = fats.filter(f => f !== oil && f.id !== 'butter');
  const snackP = [...yog, ...by('SP')], extras = by('K').filter(f => !/μέλι|μαρμελάδα/i.test(f.name)), sweetener = by('K').find(f => /μέλι|μαρμελάδα/i.test(f.name));
  const treats = by('T'), zero = by('Z');
  const warns = [];
  if (!mains.length && !legumes.length) warns.push('Διάλεξε τουλάχιστον ένα κρέας ή ψάρι για μεσημεριανό και βραδινό.');
  if (veg.length < 2) warns.push('Διάλεξε 2–3 λαχανικά ακόμα, αλλιώς οι φυτικές ίνες θα είναι λίγες.');
  if (!starch.length && !bread.length && !dishes.length && !legumes.length) warns.push('Δεν διάλεξες ρύζι, ζυμαρικά, πατάτες ή ψωμί. Τα γεύματα θα είναι μόνο πρωτεΐνη και λαχανικά.');
  if (!fruit.length) warns.push('Δεν διάλεξες φρούτα. Είναι εύκολος τρόπος για φυτικές ίνες.');
  const treatDays = st.treats && treats.length ? [2, 5] : [], dishDays = dishes.length ? [1, 3, 6].slice(0, Math.min(3, dishes.length + 1)) : [];
  const week = [];
  for (let d = 0; d < 7; d++) {
    const gym = st.gym.includes(d), meals = [], it = () => [], add = (a, f, g) => { if (f) a.push([f, g ?? mpBase(f)]); };
    const mainL = mpRot(mains, d), mainD = mpRot(mains, d, Math.max(1, Math.ceil(mains.length / 2)));
    // Πρωινό
    { const a = it(); const bowl = yog.length && (oats.length || fruit.length) && (d % 2 === 0 || (!eggs.length && !deli.length) || !bread.length);
      if (bowl) { add(a, mpRot(yog, d), 250); add(a, mpRot(oats, d)); add(a, mpRot(fruit, d)); if (sweetener) add(a, sweetener, 7); const n = mpRot(nuts, d); if (n) add(a, n, 10); }
      else { add(a, eggs[0]); if (deli.length) add(a, mpRot(deli, d), eggs.length ? 40 : 60); if (!eggs.length && !deli.length) add(a, mpRot(snackP, d)); add(a, mpRot(bread, d)); const ch = mpRot(cheese, d); if (ch) add(a, ch, 25); veg.filter(v => /ντομάτα|μαρούλι|αγγούρι|ρόκα/i.test(v.name)).slice(0, 2).forEach(v => add(a, v, 60)); }
      if (a.length) meals.push({ slot: 'Πρωινό', meal: 'b', items: a }); }
    // Μεσημεριανό
    { const a = it();
      if (dishDays.includes(d)) { const dish = mpRot(dishes, dishDays.indexOf(d) + d); add(a, dish); const side = mpRot(mains, d + 2) || mpRot(yog, d) || eggs[0]; if (side) add(a, side, side._r === 'P' ? 100 : undefined); add(a, mpRot(veg, d)); }
      else { const m = mainL || mpRot(legumes, d) || mpRot(snackP, d); add(a, m); add(a, mpRot(starch, d)); const v1 = mpRot(veg, d), v2 = mpRot(veg, d + 1); add(a, v1); if (v2 && v2 !== v1) add(a, v2, Math.min(v2.portion || 80, 80)); if (oil) add(a, oil, 5); }
      if (a.length) meals.push({ slot: 'Μεσημεριανό', meal: 'l', items: a }); }
    // Απόγευμα
    { const a = it();
      if (gym && whey) { add(a, whey); add(a, mpRot(fruit, d + 1)); }
      else { const sp = mpRot(snackP, d + 1); add(a, sp); add(a, mpRot(fruit, d + 2)); if (!sp && whey) add(a, whey); if (!a.length) { const n = mpRot(nuts, d); if (n) add(a, n, 20); } }
      if (a.length) meals.push({ slot: gym ? 'Μετά το γυμναστήριο' : 'Σνακ', meal: 's', items: a }); }
    // Βραδινό
    { const a = it(); const m = (mainD && mainD !== mainL) ? mainD : (mpRot(legumes, d + 1) || mainD || eggs[0]);
      if (m) add(a, m, m._r === 'EGG' ? (mpPc(m) || 50) * 3 : undefined);
      const c = mpRot([...bread, ...starch], d + 3); add(a, c);
      const sal = veg.filter(v => v.kcal < 45), s1 = mpRot(sal.length ? sal : veg, d + 2), s2 = mpRot(sal.length ? sal : veg, d + 3);
      if (s1) add(a, s1, Math.min(s1.portion || 150, 150)); if (s2 && s2 !== s1) add(a, s2, Math.min(s2.portion || 120, 120));
      const ch = mpRot(cheese, d + 1); if (ch && r() < .6) add(a, ch, 30); const ex = mpRot(extras, d); if (ex) add(a, ex);
      if (oil && !(c && c._r === 'BR')) add(a, oil, 5);
      if (a.length) meals.push({ slot: 'Βραδινό', meal: 'd', items: a }); }
    // Βράδυ
    { const a = it();
      if (treatDays.includes(d)) add(a, mpRot(treats, d));
      else { const opt = [mpRot(fruit, d + 4), yog.find(f => /cottage/i.test(f.name)), by('SP')[0]].filter(Boolean); const o = opt[d % (opt.length || 1)]; add(a, o); if (nuts.length && d % 3 === 0) add(a, mpRot(nuts, d + 1), 15); }
      if (a.length) meals.push({ slot: 'Βράδυ', meal: 's', items: a }); }
    mpFit(meals, T);
    if (zero.length) meals.push({ slot: 'Ροφήματα', meal: 's', items: zero.slice(0, 3).map(z => [z, z.portion || 250]), free: true });
    week.push({ d, gym, meals });
  }
  const t7 = week.map(w => mpTot(w.meals.filter(m => !m.free))), fAvg = t7.reduce((s, x) => s + x.fib, 0) / 7;
  if (P.length && fAvg < 25) warns.push(`Οι φυτικές ίνες βγαίνουν κατά μέσο όρο ${fmt(fAvg)} g την ημέρα. Βρώμη, όσπρια, ψωμί ολικής και περισσότερα φρούτα και λαχανικά θα τις ανεβάσουν.`);
  return { week, warns, T, t7 };
}
function mpQty(f, g) {
  if (f._r === 'W') return `${fmt(g / 30, 1).replace(/[.,]0$/, '')} μεζούρα (${fmt(g)} g)`;
  const pc = mpPc(f);
  if (pc) { const n = Math.round(g / pc); return `${n} τεμ. (${fmt(g)} g)`; }
  if (/ελαιόλαδο/i.test(f.name)) return `${fmt(g)} g (${g <= 5 ? '1 κ.γλ.' : fmt(g / 13, 1) + ' κ.σ.'})`;
  return `${fmt(g)} g`;
}
const mpDish = m => m.items.map(i => i[0]).filter(f => !['K','Z','X'].includes(f._r)).slice(0, 3).map(f => f.name.replace(/\s*\(.*\)/, '')).join(', ').replace(/, ([^,]*)$/, ' και $1');
function mpText(plan) {
  return plan.week.map((w, i) => { const t = plan.t7[i]; return `${MP_DAYS[w.d]}${w.gym ? ' (γυμναστήριο)' : ''}: ${fmt(t.kcal)} kcal, ${fmt(t.p)} g πρωτεΐνη, ${fmt(t.fib)} g ίνες\n` +
    w.meals.map(m => `  ${m.slot}: ` + m.items.map(([f, g]) => `${f.name} ${mpQty(f, g)}`).join(', ')).join('\n'); }).join('\n\n');
}

/* ---------- 6. Έτοιμο πρόγραμμα 3 ημερών ---------- */
const MP_PROGRAM = {
  id: 'p_fullbody_abc', name: 'Ολόσωμο A/B/C · 3 ημέρες (γράμμωση)', sessionsPerWeek: 3,
  days: [
    { id: 'd_fb_a', name: 'A · Δευτέρα', items: [['leg_press',3,10,12,120,1,2],['chest_press',3,8,12,120,1,2],['lat_pulldown',3,10,12,90,1,2],['rdl',3,10,10,120,1,3],['shoulder_machine',2,10,12,90,1,2],['crunch',3,12,15,60,0,2]] },
    { id: 'd_fb_b', name: 'B · Τετάρτη', items: [['goblet',3,8,10,120,1,3],['cable_row',3,10,12,90,1,2],['incline_db',3,8,12,120,1,2],['leg_curl',3,12,12,90,0,2],['lat_raise',3,12,15,60,0,2],['plank',3,30,45,60,null,null]] },
    { id: 'd_fb_c', name: 'C · Παρασκευή', items: [['leg_press',3,12,15,120,1,2],['lat_pulldown',3,8,10,120,1,2],['db_bench',3,8,12,120,1,2],['hip_thrust',3,10,12,90,1,2],['face_pull',2,15,15,60,0,2],['db_curl',2,12,12,60,0,2],['pushdown',2,12,12,60,0,2]] },
  ],
};
const MP_TG = { leg_press: 'Leg Press', chest_press: 'Chest Press', lat_pulldown: 'Lat Machine', rdl: 'Μπάρα ή αλτήρες', shoulder_machine: 'Shoulder Press', crunch: 'Abdominal Crunch', goblet: 'Αλτήρας', cable_row: 'Low Row', incline_db: 'Αλτήρες, πάγκος 30°', leg_curl: 'Leg Curl', lat_raise: 'Αλτήρες', plank: 'Στρώμα', db_bench: 'Αλτήρες ή Chest Press', hip_thrust: 'Μπάρα ή Glute', face_pull: 'Τροχαλία με σχοινί', db_curl: 'Αλτήρες', pushdown: 'Τροχαλία' };
function mpProgramObj() {
  return { id: MP_PROGRAM.id, name: MP_PROGRAM.name, sessionsPerWeek: MP_PROGRAM.sessionsPerWeek,
    days: MP_PROGRAM.days.map(d => ({ id: d.id, name: d.name, items: d.items.filter(([ex]) => exById(ex)).map(([exId, sets, lo, hi, rest, rirLo, rirHi]) => ({ exId, sets, lo, hi, rest, rirLo: rirLo ?? '', rirHi: rirHi ?? '', inc: null })) })) };
}
function mpInstallProgram() {
  const p = mpProgramObj(), err = Reliability.program(p); if (err) { toast(err, 5000); return; }
  const all = programs(); if (all.list.some(x => x.id === p.id)) { setActiveProgram(all, p.id); Store.set('programs', all); toast('Το πρόγραμμα υπάρχει ήδη· έγινε ενεργό.'); render(); return; }
  all.list.push(p); setActiveProgram(all, p.id); Store.set('programs', all); toast('Προστέθηκε και έγινε ενεργό. Το βρίσκεις στην Ημέρα → Άσκηση.', 4500); render();
}

/* ---------- 7. Προβολή ---------- */
function mpMeter(lab, v, t, unit, kind) {
  const r = v / t, cls = kind === 'kcal' ? (Math.abs(r - 1) <= .04 ? '' : Math.abs(r - 1) <= .08 ? 'warn' : 'bad') : (r >= .95 ? '' : r >= .8 ? 'warn' : 'bad');
  return `<div class="mp-meter ${cls}"><div class="r"><span>${lab}</span><span><b>${fmt(v)}</b> / ${fmt(t)}${unit}</span></div><div class="bar"><i style="width:${Math.min(100, r * 100)}%"></i></div></div>`;
}
function mpCounts(picks) {
  const byId = foods().byId, c = { P: 0, C: 0, V: 0, F: 0, X: 0 };
  for (const id of picks) { const f = byId.get(id); if (!f) continue; const r = mpRole(f); for (const [g, rs] of Object.entries(MP_GROUPS)) if (rs.includes(r)) c[g]++; }
  return c;
}
function mpFoodListHTML() {
  const st = mpState(), pk = new Set(st.picks), q = (UI.mpQ || '').trim();
  let list = foods().list.filter(f => f.src !== 'recipe' && (UI.mpCat ? (f.cat || 'other') === UI.mpCat : true) && (!UI.mpOnly || pk.has(f.id)));
  if (q) { const qs = [Parser.norm(q), Parser.norm(Translit.toGreek(q)), Translit.toLatin(q)].filter(Boolean);
    list = list.filter(f => { const raw = [f.name, ...(f.aliases || []), f.brand || ''].join(' '), hay = Parser.norm(raw) + ' ' + Translit.toLatin(raw); return qs.some(x => hay.includes(x)); }); }
  if (!list.length) return '<p class="empty">Δεν βρέθηκαν τρόφιμα. Δοκίμασε άλλη λέξη ή άλλη κατηγορία.</p>';
  const groups = {}; list.forEach(f => (groups[f.cat || 'other'] ??= []).push(f));
  return Object.entries(groups).map(([c, arr]) => `<h3 class="gh">${esc(CAT_LABELS[c] || c)}</h3><div class="mp-grid">${arr.sort((a, b) => a.name.localeCompare(b.name, 'el')).map(f => {
    const g = mpPc(f) || f.portion || 100;
    return `<button class="mp-food" data-act="mpPick" data-id="${esc(f.id)}" aria-pressed="${pk.has(f.id)}"><span class="bx"></span><span class="t"><span class="n">${esc(f.name)}</span><span class="m">${fmt(g)} g · ${fmt(f.kcal * g / 100)} kcal · ${fmt(f.p * g / 100, 1)} g πρωτ.</span></span></button>`; }).join('')}</div>`).join('');
}
function mpFoodsTab() {
  const st = mpState(), T = mpTargets(), c = mpCounts(st.picks);
  const cats = [...new Set(foods().list.map(f => f.cat || 'other'))];
  return `<section class="sec"><h2>Στόχος πλάνου</h2>
    <p>${fmt(T.kcal)} kcal · ${fmt(T.p)} g πρωτεΐνη · ${T.fib} g φυτικές ίνες ${T.missing ? '<span class="small muted">(προσωρινά· συμπλήρωσε το Προφίλ ή γράψε δικό σου στόχο)</span>' : T.fromProfile ? '<span class="small muted">(από το Προφίλ σου)</span>' : '<span class="small muted">(δικός σου στόχος)</span>'}</p>
    <div class="row" style="gap:8px;flex-wrap:wrap"><label class="f" style="flex:1;min-width:120px"><span>kcal (κενό = από Προφίλ)</span><input id="mpKcal" inputmode="numeric" value="${esc(st.kcal ?? '')}"></label><label class="f" style="flex:1;min-width:120px"><span>Πρωτεΐνη g (κενό = από Προφίλ)</span><input id="mpP" inputmode="numeric" value="${esc(st.p ?? '')}"></label></div></section>
  <section class="sec"><div class="row between"><h2>Τι τρως</h2><span class="small muted">${st.picks.length} επιλεγμένα</span></div>
    <p class="small muted">Διάλεξε όσα τρως πραγματικά. Η εβδομάδα φτιάχνεται μόνο από αυτά.</p>
    <div class="mp-bal">${Object.keys(MP_NEED).map(k => `<div class="${c[k] < MP_NEED[k] ? 'low' : ''}"><span>${MP_GLABEL[k]}</span><b>${c[k]}</b><span>${c[k] < MP_NEED[k] ? `θέλει ${MP_NEED[k] - c[k]} ακόμα` : 'αρκετά'}</span></div>`).join('')}</div>
    <div class="row" style="gap:6px;flex-wrap:wrap;margin-top:10px"><button class="btn sm" data-act="mpStarter">Βασική λίστα</button><button class="btn sm" data-act="mpOnly" aria-pressed="${!!UI.mpOnly}">${UI.mpOnly ? 'Όλα τα τρόφιμα' : 'Μόνο τα επιλεγμένα'}</button><button class="btn sm" data-act="mpClear">${UI.mpArmed ? 'Πάτα ξανά για καθαρισμό' : 'Καθαρισμός'}</button><button class="btn sm pri" data-act="mpTab" data-tab="week">Φτιάξε την εβδομάδα →</button></div>
    <input type="search" id="mpQ" placeholder="Αναζήτηση (π.χ. κοτόπουλο, feta, ryzi)" value="${esc(UI.mpQ || '')}" style="width:100%;margin-top:10px" aria-label="Αναζήτηση τροφίμων">
    <div class="chips" style="margin-top:8px"><button class="chip" data-act="mpCat" data-cat="" aria-pressed="${!UI.mpCat}">Όλα</button>${cats.map(k => `<button class="chip" data-act="mpCat" data-cat="${esc(k)}" aria-pressed="${UI.mpCat === k}">${esc(CAT_LABELS[k] || k)}</button>`).join('')}</div>
    <div id="mpList">${mpFoodListHTML()}</div></section>`;
}
function mpWeekTab() {
  const st = mpState();
  if (!st.picks.length) return `<section class="sec"><h2>Η εβδομάδα σου</h2><p>Δεν έχεις διαλέξει φαγητά ακόμα.</p><button class="btn pri" data-act="mpTab" data-tab="foods">Διάλεξε φαγητά</button> <button class="btn" data-act="mpStarter">Ξεκίνα με βασική λίστα</button></section>`;
  const plan = mpBuild(); UI.mpPlan = plan; const di = UI.mpDay ?? (Dates.dowNum(Dates.today()) + 6) % 7, day = plan.week[di], t = plan.t7[di], T = plan.T;
  const avg = k => plan.t7.reduce((s, x) => s + x[k], 0) / 7;
  return `<section class="sec"><div class="row between" style="flex-wrap:wrap;gap:6px"><h2>Η εβδομάδα σου</h2><div class="row" style="gap:6px"><button class="btn sm" data-act="mpShuffle">Ανακάτεμα</button><button class="btn sm" data-act="mpCopy">Αντιγραφή</button></div></div>
    <div class="row" style="gap:6px;flex-wrap:wrap;align-items:center"><span class="small muted">Γυμναστήριο:</span>${MP_DAYS_S.map((n, i) => `<button class="chip" data-act="mpGym" data-d="${i}" aria-pressed="${st.gym.includes(i)}">${n}</button>`).join('')}</div>
    <label class="radios" style="margin-top:8px"><label><input type="checkbox" id="mpTreats" ${st.treats ? 'checked' : ''}>Ένα μικρό γλυκό 2 φορές την εβδομάδα (αν έχεις διαλέξει γλυκά)</label></label>
    ${plan.warns.map(w => `<div class="banner"><span>${esc(w)}</span><button class="btn sm" data-act="mpTab" data-tab="foods">Φαγητά</button></div>`).join('')}
    <div class="mp-days" role="tablist">${plan.week.map((w, i) => `<button role="tab" data-act="mpDay" data-d="${i}" aria-pressed="${i === di}"><i>${w.gym ? 'GYM' : ''}</i>${MP_DAYS_S[w.d]}<small>${fmt(plan.t7[i].kcal)}</small></button>`).join('')}</div>
    <p class="small muted">Μέσος όρος εβδομάδας: ${fmt(avg('kcal'))} kcal · ${fmt(avg('p'))} g πρωτεΐνη · ${fmt(avg('fib'))} g ίνες</p></section>
  <section class="sec"><h2>${MP_DAYS[day.d]}${day.gym ? ' · γυμναστήριο' : ''}</h2>
    ${mpMeter('Θερμίδες', t.kcal, T.kcal, ' kcal', 'kcal')}${mpMeter('Πρωτεΐνη', t.p, T.p, ' g', 'min')}${mpMeter('Φυτικές ίνες', t.fib, T.fib, ' g', 'min')}
    <p class="small muted">Υδατάνθρακες ${fmt(t.c)} g · Λιπαρά ${fmt(t.f)} g</p></section>
  ${day.meals.map((m, mi) => { const mt = mpTot([m]); return `<section class="sec mp-meal"><div class="mh"><h2>${esc(m.slot)}</h2><span class="small muted">${m.free ? '≈0 kcal' : `${fmt(mt.kcal)} kcal · ${fmt(mt.p)} g πρωτ.`}</span></div>${m.free ? '' : `<p class="small"><b>${esc(mpDish(m))}</b></p>`}
    <ul>${m.items.map(([f, g]) => `<li><span>${esc(f.name)}</span><span>${mpQty(f, g)}</span></li>`).join('')}</ul>
    ${m.free ? '' : `<button class="btn sm" data-act="mpLog" data-mi="${mi}">Καταγραφή στη σημερινή μέρα</button>`}</section>`; }).join('')}`;
}
function mpGymTab() {
  const all = programs(), has = all.list.some(x => x.id === MP_PROGRAM.id), active = all.active === MP_PROGRAM.id;
  const row = ([ex, sets, lo, hi, rest]) => { const e = exById(ex); return e ? `<tr><td>${esc(e.name)}</td><td>${esc(MP_TG[ex] || '')}</td><td style="white-space:nowrap">${sets}×${lo === hi ? lo : `${lo}–${hi}`}${ex === 'plank' ? '″' : ''}</td><td style="white-space:nowrap">${rest >= 120 ? rest / 60 + '′' : rest + '″'}</td></tr>` : ''; };
  return `<section class="sec"><h2>Ολόσωμο A/B/C · 3 ημέρες</h2>
    <p>Τρεις ολόσωμες προπονήσεις την εβδομάδα, περίπου 65′ η καθεμία. Στοχεύουν σε γράμμωση και δύναμη, όχι σε όγκο. Σε έλλειμμα θερμίδων τα βάρη κρατούν τους μύες, ώστε να χάνεις λίπος.</p>
    <button class="btn pri" data-act="mpProgram">${active ? 'Είναι το ενεργό σου πρόγραμμα ✓' : has ? 'Κάν’ το ενεργό πρόγραμμα' : 'Πρόσθεσέ το στα προγράμματά μου'}</button>
    <p class="note">Μετά το βρίσκεις στην Ημέρα → Άσκηση, με χρονόμετρο διαλείμματος, ιστορικό και προτάσεις βάρους.</p></section>
  ${MP_PROGRAM.days.map(d => `<section class="sec"><h2>${esc(d.name)}</h2><div class="scroll-x"><table class="tbl"><thead><tr><th>Άσκηση</th><th>Μηχάνημα</th><th>Σετ×Επ.</th><th>Διάλ.</th></tr></thead><tbody>${d.items.map(row).join('')}</tbody></table></div></section>`).join('')}
  <section class="sec"><h2>Κάθε προπόνηση</h2><ol class="small">
    <li><b>Ζέσταμα 8′:</b> 5′ ποδήλατο ή ελλειπτικό χαλαρά και ένα ελαφρύ σετ 12 επαναλήψεων στην πρώτη άσκηση ποδιών και πάνω κορμού.</li>
    <li><b>Βάρη 45′:</b> με τη σειρά του προγράμματος. Σταμάτα κάθε σετ όταν θα μπορούσες να κάνεις ακόμα 1–2 καθαρές επαναλήψεις.</li>
    <li><b>Περπάτημα σε κλίση 10′:</b> διάδρομος 8–10%, 5–5,5 km/h. Πάντα μετά τα βάρη.</li>
    <li><b>Μέσα σε 1 ώρα:</b> γεύμα ή shake με 25–40 g πρωτεΐνη.</li></ol>
    <h3 class="gh">Πρόοδος</h3><ul class="small"><li>Όταν βγάζεις το πάνω όριο επαναλήψεων σε όλα τα σετ, ανέβασε ένα βήμα βάρους και ξεκίνα από το κάτω όριο.</li><li>Σε έλλειμμα θερμίδων, το να κρατάς τα ίδια βάρη είναι επιτυχία.</li><li>Κάθε 7η εβδομάδα ελαφριά: ίδιες ασκήσεις, μισά σετ.</li><li>Αν χάσεις μια προπόνηση, κάν’ την την επόμενη μέρα. Ποτέ δύο τη μέρα, ποτέ βάρη δύο μέρες συνεχόμενα με το ίδιο πρόγραμμα.</li><li>Πόνος σε άρθρωση (όχι κάψιμο στον μυ) = σταματάς την άσκηση.</li></ul>
    <h3 class="gh">Technogym</h3><p class="small">Το Technogym app δεν εισάγει πρόγραμμα από αρχείο. Ζήτα από τον γυμναστή να περάσει αυτές τις 3 ημέρες στο προφίλ σου στο Mywellness, ή φτιάξ’ τες μόνος σου στο app άσκηση-άσκηση. Η στήλη «Μηχάνημα» δίνει τα ονόματα των μηχανημάτων της σειράς Selection.</p></section>`;
}
function mpGuideTab() {
  const tl = [['07:00','Ξύπνημα, 500 ml νερό, ζύγισμα μετά την τουαλέτα'],['07:30','Πρωινό με 30–40 g πρωτεΐνη'],['08:15','10′ περπάτημα στο φως της μέρας'],['10:30','Καφές, νερό· τελευταίος καφές ως τις 14:00'],['13:00','Μεσημεριανό: πρωτεΐνη, άμυλο, λαχανικά'],['16:30','Σνακ ή φρούτο πριν από το γυμναστήριο'],['18:00','Γυμναστήριο (Δευ/Τετ/Παρ) ή 40′ γρήγορο περπάτημα'],['19:10','Shake πρωτεΐνης μετά το γυμναστήριο'],['20:00','Βραδινό, τουλάχιστον 2,5 ώρες πριν τον ύπνο'],['22:30','Οθόνες χαμηλά, χαλάρωμα, ετοιμασία για αύριο'],['23:00','Ύπνος· στόχος 7,5–8 ώρες']];
  return `<section class="sec"><h2>Μια καλή μέρα</h2><p class="small muted">Παράδειγμα για δουλειά 09:00–17:00. Μετακίνησε όλο το πρόγραμμα αν το ωράριό σου είναι διαφορετικό.</p>
    <div class="scroll-x"><table class="tbl mp-tl"><tbody>${tl.map(([a, b]) => `<tr><td>${a}</td><td>${b}</td></tr>`).join('')}</tbody></table></div></section>
  <section class="sec"><h2>Καθημερινές συνήθειες</h2><ul class="small">
    <li>Ζύγισμα κάθε πρωί· κρίνεις μόνο από τον μέσο όρο 7 ημερών.</li><li>2,5–3 L νερό την ημέρα, +0,75 L τις μέρες γυμναστηρίου.</li>
    <li>8.000–10.000 βήματα. Καίνε λίπος χωρίς να ανοίγουν την όρεξη.</li><li>Πρωτεΐνη σε κάθε γεύμα, και πρώτα αυτή και η σαλάτα στο πιάτο.</li>
    <li>Meal prep Κυριακή και Τετάρτη: ψητό κοτόπουλο, ρύζι ή πατάτες, όσπρια σε τάπερ για 3 μέρες.</li><li>Μία «κακή» μέρα δεν χαλάει τίποτα· συνεχίζεις κανονικά από το επόμενο γεύμα.</li></ul></section>
  <section class="sec"><h2>Ύπνος</h2><ul class="small"><li>Ίδια ώρα ξυπνήματος κάθε μέρα (±30′ το Σαββατοκύριακο).</li><li>Καφεΐνη μέχρι τις 14:00.</li><li>Δωμάτιο σκοτεινό, 18–20 °C, κινητό εκτός κρεβατιού.</li><li>Το αλκοόλ χαλάει τον ύπνο και έχει πολλές θερμίδες.</li><li>Με λιγότερο από 7 ώρες ύπνο η πείνα ανεβαίνει και η αποκατάσταση πέφτει.</li></ul></section>
  <section class="sec"><h2>Συμπληρώματα (προαιρετικά)</h2><div class="scroll-x"><table class="tbl"><thead><tr><th>Τι</th><th>Πόσο</th><th>Γιατί</th></tr></thead><tbody>
    <tr><td>Whey isolate</td><td>1 μεζούρα (25–30 g πρωτεΐνη)</td><td>Βοηθά να φτάσεις τον στόχο πρωτεΐνης με λίγες θερμίδες. Το isolate έχει ελάχιστη λακτόζη.</td></tr>
    <tr><td>Κρεατίνη μονοϋδρική</td><td>3–5 g κάθε μέρα, χωρίς φάση φόρτωσης</td><td>Κρατά δύναμη και μύες σε έλλειμμα. Προσθέτει 1–2 kg νερό στους μύες στην αρχή, όχι λίπος.</td></tr>
    <tr><td>Psyllium</td><td>5 g σε μεγάλο ποτήρι νερό</td><td>+4 g φυτικές ίνες, χορτασμός, καλύτερη λειτουργία εντέρου. 2 ώρες μακριά από φάρμακα.</td></tr>
    <tr><td>Βιταμίνη D3</td><td>1.000–2.000 IU</td><td>Μόνο αν η εξέταση αίματος δείξει χαμηλή τιμή.</td></tr></tbody></table></div>
    <p class="note">Απόφυγε λιποδιαλύτες, «θερμογενή» και pre-workout με πολλή καφεΐνη. Αν παίρνεις φάρμακα, ειδικά διεγερτικά ή αντικαταθλιπτικά, ρώτα γιατρό ή φαρμακοποιό πριν από οποιοδήποτε συμπλήρωμα. Η εφαρμογή δεν αντικαθιστά ιατρική συμβουλή.</p></section>
  <section class="sec"><h2>Πώς ελέγχεις την πρόοδο</h2><ol class="small"><li>Κάθε πρωί ζύγισμα και καταγραφή.</li><li>Κάθε Κυριακή μέτρηση μέσης στο ύψος του αφαλού.</li><li>Κάθε 2 εβδομάδες φωτογραφίες μπροστά, πλάγια, πίσω, με ίδιο φως.</li><li>Μετά από 3–4 εβδομάδες, αν ο μέσος όρος πέφτει λιγότερο από 0,4 kg την εβδομάδα και η μέση δεν μικραίνει, πρόσθεσε 2.000 βήματα πριν κόψεις φαγητό.</li><li>Η πρώτη εβδομάδα δείχνει απότομη πτώση από νερό· από τη δεύτερη και μετά μετράει η τάση.</li></ol></section>`;
}
function viewPlan() {
  const tab = UI.mpTab || 'foods';
  const body = tab === 'week' ? mpWeekTab() : tab === 'gym' ? mpGymTab() : tab === 'guide' ? mpGuideTab() : mpFoodsTab();
  return `<div class="seg" role="tablist">${[['foods','Φαγητά'],['week','Εβδομάδα'],['gym','Άσκηση'],['guide','Οδηγός']].map(([k, l]) => `<button role="tab" aria-selected="${tab === k}" data-act="mpTab" data-tab="${k}">${l}</button>`).join('')}</div>` + body;
}

/* ---------- 8. Ενέργειες ---------- */
function mpRerender(keepScroll) { const y = window.scrollY; render(); if (keepScroll) window.scrollTo(0, y); }
document.addEventListener('click', e => {
  const a = e.target.closest('[data-act^="mp"]'); if (!a || UI.view !== 'plan') return;
  const act = a.dataset.act, st = mpState();
  if (act !== 'mpClear') UI.mpArmed = false;
  switch (act) {
    case 'mpTab': UI.mpTab = a.dataset.tab; render(); window.scrollTo(0, 0); break;
    case 'mpPick': { const id = a.dataset.id, s = new Set(st.picks); s.has(id) ? s.delete(id) : s.add(id); st.picks = [...s]; mpSave(st); a.setAttribute('aria-pressed', s.has(id)); const c = mpCounts(st.picks); const bal = document.querySelector('.mp-bal'); if (bal) bal.outerHTML = `<div class="mp-bal">${Object.keys(MP_NEED).map(k => `<div class="${c[k] < MP_NEED[k] ? 'low' : ''}"><span>${MP_GLABEL[k]}</span><b>${c[k]}</b><span>${c[k] < MP_NEED[k] ? `θέλει ${MP_NEED[k] - c[k]} ακόμα` : 'αρκετά'}</span></div>`).join('')}</div>`; break; }
    case 'mpCat': UI.mpCat = a.dataset.cat || null; mpRerender(true); break;
    case 'mpOnly': UI.mpOnly = !UI.mpOnly; mpRerender(true); break;
    case 'mpStarter': { const byId = foods().byId; st.picks = [...new Set([...st.picks, ...MP_DEFAULT_PICKS.filter(id => byId.has(id))])]; mpSave(st); toast('Προστέθηκε η βασική λίστα. Πρόσθεσε ή βγάλε ό,τι θέλεις.'); mpRerender(true); break; }
    case 'mpClear': if (UI.mpArmed) { UI.mpArmed = false; st.picks = []; mpSave(st); toast('Καθαρίστηκαν οι επιλογές.'); } else { UI.mpArmed = true; setTimeout(() => { if (UI.mpArmed) { UI.mpArmed = false; if (UI.view === 'plan') mpRerender(true); } }, 3000); } mpRerender(true); break;
    case 'mpGym': { const i = +a.dataset.d; st.gym = st.gym.includes(i) ? st.gym.filter(x => x !== i) : [...st.gym, i].sort(); mpSave(st); mpRerender(true); break; }
    case 'mpDay': UI.mpDay = +a.dataset.d; mpRerender(true); break;
    case 'mpShuffle': st.seed = (st.seed % 9973) + 1; mpSave(st); toast('Νέος συνδυασμός.'); mpRerender(true); break;
    case 'mpCopy': { const txt = mpText(UI.mpPlan || mpBuild()); const fail = () => { openDlg('Αντιγραφή εβδομάδας', `<textarea style="width:100%;height:300px" readonly>${esc(txt)}</textarea>`); }; try { navigator.clipboard.writeText(txt).then(() => toast('Η εβδομάδα αντιγράφηκε.'), fail); } catch (_) { fail(); } break; }
    case 'mpLog': { const plan = UI.mpPlan || mpBuild(), di = UI.mpDay ?? (Dates.dowNum(Dates.today()) + 6) % 7, m = plan.week[di].meals[+a.dataset.mi]; if (!m) break;
      const entries = m.items.map(([f, g]) => { const pc = mpPc(f), base = Object.getPrototypeOf(f); return makeEntry(base, pc ? { g, qty: Math.round(g / pc), unit: 'piece' } : { g, qty: g, unit: 'g' }, 'plan', false); });
      const prevDate = UI.date; UI.date = Dates.today(); addEntries(entries, m.meal); UI.date = prevDate; toast(`Καταγράφηκε στο σημερινό «${MEALS.find(x => x.id === m.meal)?.label || m.slot}».`); break; }
    case 'mpProgram': mpInstallProgram(); break;
  }
});
document.addEventListener('input', e => {
  if (UI.view !== 'plan') return;
  if (e.target.id === 'mpQ') { UI.mpQ = e.target.value; const l = document.getElementById('mpList'); if (l) l.innerHTML = mpFoodListHTML(); }
});
document.addEventListener('change', e => {
  if (UI.view !== 'plan') return; const st = mpState();
  if (e.target.id === 'mpTreats') { st.treats = e.target.checked; mpSave(st); mpRerender(true); }
  if (e.target.id === 'mpKcal' || e.target.id === 'mpP') { const v = e.target.value.trim(), n = numIn(v); const k = e.target.id === 'mpKcal' ? 'kcal' : 'p';
    if (v && (n === null || (k === 'kcal' ? n < 800 || n > 6000 : n < 20 || n > 400))) { toast(k === 'kcal' ? 'Οι θερμίδες πρέπει να είναι 800–6000.' : 'Η πρωτεΐνη πρέπει να είναι 20–400 g.', 4000); e.target.value = st[k] ?? ''; return; }
    st[k] = v ? Math.round(n) : ''; mpSave(st); mpRerender(true); }
});
