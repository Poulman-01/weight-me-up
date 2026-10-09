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
  F("gr_c08","Σάλτσα σόγιας",["soy sauce"],53,8,5,0.1,{"portion": 15, "fiber": 0, "cat": "spread"}),
  F("gr_d31","Kri Kri Super Spoon High Protein με φρούτο",["super spoon", "super spoon φράουλα", "super spoon strawberry", "super spoon ροδάκινο", "super spoon μύρτιλο", "κρι κρι super spoon", "kri kri high protein"],80,8.8,11,0,{"portion": 170, "fiber": 0, "cat": "dairy", "piece": 170}),
  F("gr_dr10","Dymatize ISO100 (whey isolate)",["dymatize", "iso100", "iso 100", "ντιματάιζ"],375,78,6.3,3.1,{"portion": 32, "fiber": 0, "cat": "other", "supp": true, "piece": 32}),
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
.mp-target .mp-tnum{display:block;font-size:1.12rem;font-weight:700;letter-spacing:-.01em;margin:2px 0}
.mp-bal{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px;margin-top:14px}
.mp-bal div{background:var(--sunk);border-radius:12px;padding:8px 4px;text-align:center;min-width:0}
.mp-bal b{display:block;font-size:1.1rem;line-height:1.1}
.mp-bal span{display:block;font-size:.68rem;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mp-bal .low{background:color-mix(in srgb,var(--warn) 12%,var(--surface))}.mp-bal .low b{color:var(--warn)}
.mp-sticky{position:sticky;top:calc(var(--top-h,58px) + var(--seg-h,50px) + env(safe-area-inset-top,0px));z-index:3;background:var(--bg);padding:8px 0 0;margin:0 0 4px;box-shadow:0 -14px 0 0 var(--bg),0 8px 14px -12px rgba(14,26,51,.35)}
.mp-sticky input{width:100%}
.mp-tools{display:flex;gap:8px;flex-wrap:wrap;margin:6px 0 2px}
.mp-gh{display:flex;justify-content:space-between;font-size:.8rem;font-weight:700;letter-spacing:.03em;text-transform:uppercase;color:var(--muted);margin:18px 4px 8px}
.mp-gh span{color:var(--accent)}
.mp-row{text-align:left;width:100%;border:0;background:none;color:var(--ink);font:inherit;cursor:pointer}
.mp-ck{width:26px;height:26px;border-radius:50%;border:2px solid var(--line-2);flex:none;display:grid;place-items:center;transition:background-color .15s,border-color .15s}
.mp-row[aria-pressed="true"] .mp-ck{background:var(--accent);border-color:var(--accent)}
.mp-row[aria-pressed="true"] .mp-ck::after{content:"";width:10px;height:6px;border:2.5px solid var(--accent-ink);border-top:0;border-right:0;transform:rotate(-45deg) translate(1px,-1px)}
.mp-row[aria-pressed="true"] .nm{color:var(--accent)}
.mp-cta{position:fixed;left:50%;transform:translateX(-50%);width:min(608px,calc(100% - 32px));bottom:calc(var(--nav-h,64px) + 26px + env(safe-area-inset-bottom,0px));z-index:6;
  display:flex;align-items:center;justify-content:center;gap:10px;min-height:54px;border:0;border-radius:18px;background:var(--accent);color:var(--accent-ink);font:inherit;font-weight:700;font-size:1rem;box-shadow:var(--shadow-float,0 8px 28px rgba(14,26,51,.18))}
.mp-cta:active{transform:translateX(-50%) scale(.98)!important}
.mp-cta span{background:color-mix(in srgb,var(--accent-ink) 22%,transparent);border-radius:999px;padding:1px 10px;font-size:.88rem}
.mp-spacer{height:84px}
.mp-days{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:4px;position:sticky;top:calc(var(--top-h,58px) + var(--seg-h,50px) + env(safe-area-inset-top,0px));z-index:3;background:var(--bg);padding:8px 0;margin:0 0 4px;box-shadow:0 -14px 0 0 var(--bg),0 8px 14px -12px rgba(14,26,51,.35)}
.mp-days button{border:1px solid var(--line);background:var(--surface);color:var(--ink);border-radius:14px;padding:7px 0 6px;font:inherit;font-size:.82rem;font-weight:600;cursor:pointer;min-width:0;display:flex;flex-direction:column;align-items:center;gap:1px}
.mp-days button small{font-size:.66rem;color:var(--muted);font-weight:500}
.mp-days button i{width:6px;height:6px;border-radius:50%;background:transparent;margin-bottom:2px}
.mp-days button i.on{background:var(--accent)}
.mp-days button[aria-pressed="true"]{background:var(--accent);border-color:var(--accent);color:var(--accent-ink)}
.mp-days button[aria-pressed="true"] small{color:var(--accent-ink);opacity:.8}
.mp-days button[aria-pressed="true"] i.on{background:var(--accent-ink)}
.mp-tl .item{min-height:52px;gap:14px}
.mp-time{font-weight:700;font-variant-numeric:tabular-nums;color:var(--accent);min-width:3.2em}
.mp-rule li{padding:0}
.mp-set .chips{margin-top:8px}
.mealcard .item{cursor:default}
.mp-avg{font-size:.84rem;color:var(--muted);margin:2px 4px 10px}`;
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
  // Πιάτα με κατηγορία «άλλο» που είναι κυρίως πρωτεΐνη (π.χ. καλαμάκι κοτόπουλο): κύριο πιάτο, όχι καρύκευμα.
  if (f.cat === 'other' && f.kcal >= 80 && mpDens(f) >= 12) return 'P';
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
/* Γράμμωση, όχι όγκος: κυρίως μηχανήματα (εύκολη τεχνική), ολόσωμο 3 φορές, 2–3 σετ, 10–15 επαναλήψεις,
   έμφαση σε πλάτη, οπίσθιους ώμους και γλουτούς (αντίβαρο στο καθιστικό γραφείο), κοιλιακούς, και 20′ περπάτημα σε κλίση. */
const MP_PROGRAM = {
  id: 'p_lean3', name: 'Γράμμωση · 3 ημέρες (A/B/C)', sessionsPerWeek: 3,
  days: [
    { id: 'd_l3_a', name: 'A · Δευτέρα', items: [['leg_press',3,10,12,120,1,2],['chest_press',3,10,12,90,1,2],['lat_pulldown',3,10,12,90,1,2],['leg_curl',3,12,15,75,1,2],['face_pull',2,15,20,60,1,2],['plank',3,30,45,60,null,null],['treadmill',1,20,20,0,null,null]] },
    { id: 'd_l3_b', name: 'B · Τετάρτη', items: [['goblet',3,10,12,90,1,2],['shoulder_machine',3,10,12,90,1,2],['cable_row',3,10,12,90,1,2],['rdl',3,10,12,120,1,2],['rear_delt',2,15,20,60,1,2],['crunch',2,12,15,60,1,2],['treadmill',1,20,20,0,null,null]] },
    { id: 'd_l3_c', name: 'C · Παρασκευή', items: [['hip_thrust',3,10,12,90,1,2],['incline_db',3,10,12,90,1,2],['lat_pulldown',3,10,12,90,1,2],['leg_ext',2,12,15,60,1,2],['lat_raise',2,12,15,60,1,2],['side_plank',2,30,30,45,null,null],['treadmill',1,20,20,0,null,null]] },
  ],
};
const MP_TG = { leg_press: 'Leg Press', chest_press: 'Chest Press', lat_pulldown: 'Lat Machine', rdl: 'Αλτήρες', shoulder_machine: 'Shoulder Press', crunch: 'Abdominal Crunch ή στρώμα', goblet: 'Αλτήρας', cable_row: 'Low Row', incline_db: 'Αλτήρες, πάγκος 30°', leg_curl: 'Leg Curl', leg_ext: 'Leg Extension', lat_raise: 'Αλτήρες', plank: 'Στρώμα', side_plank: 'Στρώμα', hip_thrust: 'Glute ή μπάρα σε πάγκο', face_pull: 'Τροχαλία με σχοινί', rear_delt: 'Pectoral / Rear Delt', treadmill: 'Διάδρομος (Run / Jog)' };
/* Μία γραμμή τεχνικής για κάθε άσκηση. */
const MP_CUE = {
  leg_press: 'Πέλματα στο πλάτος των ώμων. Κατέβα μέχρι τα γόνατα να κάνουν ορθή γωνία, μην τα κλειδώνεις στο πάνω μέρος.',
  chest_press: 'Λαβές στο ύψος του στήθους, πλάτη κολλητά στο κάθισμα. Σπρώξε μπροστά, γύρνα αργά.',
  lat_pulldown: 'Τράβα τη μπάρα στο πάνω στήθος με τους αγκώνες προς τα κάτω. Μη γέρνεις πολύ πίσω.',
  leg_curl: 'Λύγισε τα γόνατα ως το τέλος και γύρνα αργά, σε 2 δευτερόλεπτα.',
  face_pull: 'Σχοινί στο ύψος του προσώπου. Τράβα προς τα μάτια με αγκώνες ψηλά. Ισιώνει τους ώμους από το γραφείο.',
  plank: 'Στους αγκώνες, σώμα ίσια γραμμή. Σφίξε κοιλιά και γλουτούς, ανάσανε κανονικά.',
  goblet: 'Αλτήρας κάθετα στο στήθος. Κάτσε σαν σε καρέκλα, πλάτη ίσια, φτέρνες κάτω.',
  shoulder_machine: 'Λαβές στο ύψος των ώμων. Σπρώξε πάνω χωρίς να καμπουριάζεις τη μέση.',
  cable_row: 'Στήθος ψηλά. Τράβα τους αγκώνες πίσω και σφίξε τις ωμοπλάτες μεταξύ τους.',
  rdl: 'Γόνατα ελαφρώς λυγισμένα. Σπρώξε τη λεκάνη πίσω, αλτήρες κοντά στα πόδια, πλάτη ίσια. Τέντωμα πίσω στους μηρούς.',
  rear_delt: 'Κάθισε ανάποδα στο μηχάνημα. Χέρια σχεδόν τεντωμένα, άνοιξε προς τα πίσω. Ελαφρύ βάρος.',
  crunch: 'Κύρτωσε τον κορμό σαν να φέρνεις τα πλευρά στη λεκάνη. Μικρή, ελεγχόμενη κίνηση.',
  hip_thrust: 'Πλάτη στον πάγκο, σπρώξε από τις φτέρνες. Σφίξε γλουτούς 1″ στην κορυφή.',
  incline_db: 'Πάγκος 30°. Αλτήρες στο ύψος του στήθους, σπρώξε πάνω. Αν δεν θες αλτήρες: Chest Press.',
  leg_ext: 'Τέντωσε τα γόνατα ως το τέλος, κράτα 1″, γύρνα αργά.',
  lat_raise: 'Ελαφριοί αλτήρες. Σήκωσε στα πλάγια ως το ύψος των ώμων, αγκώνες ελαφρώς λυγισμένοι.',
  side_plank: 'Στον αγκώνα, σώμα ίσιο. 30″ κάθε πλευρά.',
  treadmill: 'Κλίση 8–12%, 5–5,5 km/h, χωρίς να κρατιέσαι. Γρήγορο περπάτημα, όχι τρέξιμο.',
};
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
const MP_GSHORT = { P: 'Πρωτ.', C: 'Υδατ.', V: 'Λαχαν.', F: 'Φρούτα', X: 'Λιπαρά' };
function mpMeter(lab, v, t, unit, kind) {
  const r = v / t, cls = kind === 'kcal' ? (Math.abs(r - 1) <= .04 ? '' : Math.abs(r - 1) <= .08 ? 'warn' : 'bad') : (r >= .95 ? '' : r >= .8 ? 'warn' : 'bad');
  return `<div class="mp-meter ${cls}"><div class="r"><span>${lab}</span><span><b>${fmt(v)}</b> / ${fmt(t)}${unit}</span></div><div class="bar"><i style="width:${Math.min(100, r * 100)}%"></i></div></div>`;
}
function mpCounts(picks) {
  const byId = foods().byId, c = { P: 0, C: 0, V: 0, F: 0, X: 0 };
  for (const id of picks) { const f = byId.get(id); if (!f) continue; const r = mpRole(f); for (const [g, rs] of Object.entries(MP_GROUPS)) if (rs.includes(r)) c[g]++; }
  return c;
}
const mpBalHTML = c => `<div class="mp-bal">${Object.keys(MP_NEED).map(k => `<div class="${c[k] < MP_NEED[k] ? 'low' : ''}" title="${c[k] < MP_NEED[k] ? `Διάλεξε ${MP_NEED[k] - c[k]} ακόμα` : 'Αρκετά για ποικιλία'}"><b>${c[k]}</b><span>${MP_GSHORT[k]}</span></div>`).join('')}</div>`;
function mpFoodListHTML() {
  const st = mpState(), pk = new Set(st.picks), q = (UI.mpQ || '').trim();
  let list = foods().list.filter(f => f.src !== 'recipe' && (UI.mpCat ? (f.cat || 'other') === UI.mpCat : true) && (!UI.mpOnly || pk.has(f.id)));
  if (q) { const qs = [Parser.norm(q), Parser.norm(Translit.toGreek(q)), Translit.toLatin(q)].filter(Boolean);
    list = list.filter(f => { const raw = [f.name, ...(f.aliases || []), f.brand || ''].join(' '), hay = Parser.norm(raw) + ' ' + Translit.toLatin(raw); return qs.some(x => hay.includes(x)); }); }
  if (!list.length) return `<p class="empty">${UI.mpOnly ? 'Δεν έχεις διαλέξει τρόφιμα σε αυτή την κατηγορία.' : 'Δεν βρέθηκαν τρόφιμα. Δοκίμασε άλλη λέξη ή άλλη κατηγορία.'}</p>`;
  const groups = {}; list.forEach(f => (groups[f.cat || 'other'] ??= []).push(f));
  return Object.entries(groups).map(([c, arr]) => { const n = arr.filter(f => pk.has(f.id)).length;
    return `<h3 class="mp-gh">${esc(CAT_LABELS[c] || c)}<span>${n ? n + ' ✓' : ''}</span></h3><ul class="list">${arr.sort((a, b) => a.name.localeCompare(b.name, 'el')).map(f => {
      const g = mpPc(f) || f.portion || 100;
      return `<li><button class="item mp-row" data-act="mpPick" data-id="${esc(f.id)}" aria-pressed="${pk.has(f.id)}"><span class="grow"><span class="nm">${esc(f.name)}</span><br><span class="sub">${fmt(g)} g · ${fmt(f.kcal * g / 100)} kcal · ${fmt(f.p * g / 100, 1)} g πρωτ.</span></span><span class="mp-ck" aria-hidden="true"></span></button></li>`; }).join('')}</ul>`; }).join('');
}
function mpFoodsTab() {
  const st = mpState(), T = mpTargets(), c = mpCounts(st.picks);
  const cats = [...new Set(foods().list.map(f => f.cat || 'other'))];
  const src = T.missing ? 'Προσωρινός στόχος· συμπλήρωσε το Προφίλ' : T.fromProfile ? 'Από το Προφίλ σου' : 'Δικός σου στόχος για το πλάνο';
  return `<section class="sec mp-target"><div class="row between" style="align-items:flex-start"><div class="grow"><span class="small muted">Στόχος πλάνου</span><b class="mp-tnum">${fmt(T.kcal)} kcal · ${fmt(T.p)} g πρωτεΐνη</b><span class="small muted">${src}</span></div><button class="btn sm" data-act="mpEditT" aria-expanded="${!!UI.mpEditT}">${UI.mpEditT ? 'Κλείσιμο' : 'Αλλαγή'}</button></div>
    ${UI.mpEditT ? `<div class="grid2" style="margin-top:12px"><label class="f"><span>Θερμίδες (kcal)</span><input id="mpKcal" inputmode="numeric" placeholder="από Προφίλ" value="${esc(st.kcal ?? '')}"></label><label class="f"><span>Πρωτεΐνη (g)</span><input id="mpP" inputmode="numeric" placeholder="από Προφίλ" value="${esc(st.p ?? '')}"></label></div><p class="small muted" style="margin:0">Κενό = ακολουθεί το Προφίλ.</p>` : ''}
    ${mpBalHTML(c)}</section>
  <div class="mp-sticky"><input type="search" id="mpQ" placeholder="Αναζήτηση: κοτόπουλο, feta, ryzi…" value="${esc(UI.mpQ || '')}" aria-label="Αναζήτηση τροφίμων" enterkeyhint="search">
    <div class="chips"><button class="chip" data-act="mpOnly" aria-pressed="${!!UI.mpOnly}">✓ Επιλεγμένα · <span id="mpN">${st.picks.length}</span></button><button class="chip" data-act="mpCat" data-cat="" aria-pressed="${!UI.mpCat}">Όλα</button>${cats.map(k => `<button class="chip" data-act="mpCat" data-cat="${esc(k)}" aria-pressed="${UI.mpCat === k}">${esc(CAT_LABELS[k] || k)}</button>`).join('')}</div></div>
  <div class="mp-tools"><button class="btn sm" data-act="mpStarter">+ Βασική λίστα</button><button class="btn sm" data-act="mpClear">${UI.mpArmed ? 'Πάτα ξανά για καθαρισμό' : 'Καθαρισμός'}</button></div>
  <div id="mpList">${mpFoodListHTML()}</div><div class="mp-spacer"></div>
  <button class="mp-cta" data-act="mpTab" data-tab="week">Φτιάξε την εβδομάδα <span id="mpCount">${st.picks.length}</span></button>`;
}
const mpHeroKv = (ic, lab, val) => `<div>${ic}<span>${lab}</span><b>${val}</b></div>`;
function mpWeekTab() {
  const st = mpState();
  if (!st.picks.length) return `<section class="sec"><h2>Η εβδομάδα σου</h2><p>Δεν έχεις διαλέξει φαγητά ακόμα.</p><div class="row" style="flex-wrap:wrap;gap:8px"><button class="btn pri" data-act="mpTab" data-tab="foods">Διάλεξε φαγητά</button><button class="btn" data-act="mpStarter">Βασική λίστα</button></div></section>`;
  const plan = mpBuild(); UI.mpPlan = plan; const di = UI.mpDay ?? (Dates.dowNum(Dates.today()) + 6) % 7, day = plan.week[di], t = plan.t7[di], T = plan.T;
  const avg = k => plan.t7.reduce((s, x) => s + x[k], 0) / 7, pct = Math.round(t.kcal / T.kcal * 100), R = 40, C = 2 * Math.PI * R;
  return `<div class="mp-days" role="tablist">${plan.week.map((w, i) => `<button role="tab" data-act="mpDay" data-d="${i}" aria-pressed="${i === di}"><i class="${w.gym ? 'on' : ''}"></i>${MP_DAYS_S[w.d]}<small>${fmt(plan.t7[i].kcal)}</small></button>`).join('')}</div>
  <section class="hero mp-hero"><div class="hero-top"><div><div class="eyebrow">${MP_DAYS[day.d]}${day.gym ? ' · γυμναστήριο' : ''}</div><div class="hero-num">${fmt(t.kcal)}</div><div class="hero-sub">από ${fmt(T.kcal)} kcal</div></div>
    <svg class="hero-ring" viewBox="0 0 100 100" role="img" aria-label="${pct}% του στόχου"><circle cx="50" cy="50" r="${R}" class="hr-bg"/><circle cx="50" cy="50" r="${R}" class="hr-fg" stroke-dasharray="${(C * Math.min(1, t.kcal / T.kcal)).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 50 50)"/><text x="50" y="54" text-anchor="middle" class="hr-pct">${pct}%</text></svg></div>
    <div class="hero-kv">${mpHeroKv(IC.target, `Πρωτ. /${fmt(T.p)}`, `${fmt(t.p)} g`)}${mpHeroKv(IC.bowl, `Ίνες /${T.fib}`, `${fmt(t.fib)} g`)}${mpHeroKv(IC.flame, 'Υδατ. · Λίπ.', `${fmt(t.c)}·${fmt(t.f)}`)}</div></section>
  <p class="mp-avg">Μέσος όρος εβδομάδας ${fmt(avg('kcal'))} kcal · ${fmt(avg('p'))} g πρωτεΐνη · ${fmt(avg('fib'))} g ίνες</p>
  <div class="row" style="gap:8px;flex-wrap:wrap;margin:0 0 4px"><button class="btn sm" data-act="mpShuffle">Ανακάτεμα</button><button class="btn sm" data-act="mpCopy">Αντιγραφή</button><button class="btn sm" data-act="mpSet" aria-expanded="${!!UI.mpSet}">Ρυθμίσεις ${UI.mpSet ? '⌃' : '⌄'}</button></div>
  ${UI.mpSet ? `<section class="sec mp-set"><b>Μέρες γυμναστηρίου</b><div class="chips wrap">${MP_DAYS_S.map((n, i) => `<button class="chip" data-act="mpGym" data-d="${i}" aria-pressed="${st.gym.includes(i)}">${n}</button>`).join('')}</div>
    <label class="radios" style="margin-top:10px"><label><input type="checkbox" id="mpTreats" ${st.treats ? 'checked' : ''}>Μικρό γλυκό 2 φορές την εβδομάδα</label></label></section>` : ''}
  ${plan.warns.map(w => `<div class="banner"><span class="small">${esc(w)}</span><button class="btn sm" data-act="mpTab" data-tab="foods">Φαγητά</button></div>`).join('')}
  ${day.meals.map((m, mi) => { const mt = mpTot([m]);
    return `<section class="mealcard open"><div class="mc-h"><span class="mc-ic ic-${m.meal}">${IC[m.meal] || IC.bowl}</span><div class="grow"><h3>${esc(m.slot)}</h3><span class="small muted">${m.free ? 'Χωρίς θερμίδες' : `${fmt(mt.p)} g πρωτεΐνη`}</span></div><span class="pill">${fmt(mt.kcal)} kcal</span>${m.free ? '' : `<button class="iconbtn" data-act="mpLog" data-mi="${mi}" aria-label="Καταγραφή στο σημερινό ${esc(m.slot)}">${IC.plus}</button>`}</div>
    <ul class="list inner">${m.items.map(([f, g]) => `<li><div class="item"><span class="grow"><span class="nm">${esc(f.name)}</span><br><span class="sub">${mpQty(f, g)} · Π ${fmt(f.p * g / 100)} Υ ${fmt(f.c * g / 100)} Λ ${fmt(f.f * g / 100)}</span></span><span class="kc">${fmt(f.kcal * g / 100)}</span></div></li>`).join('')}</ul></section>`; }).join('')}
  <p class="small muted" style="margin:4px 4px 0">Το <b>+</b> σε κάθε γεύμα το καταγράφει στη σημερινή μέρα.</p>`;
}
/* Η καρτέλα «Άσκηση» δείχνει το ίδιο περιεχόμενο με την οθόνη «Γυμναστήριο» της απλής προβολής (simple.js). */
function mpGymTab() { return typeof spGymHTML === 'function' ? spGymHTML() : ''; }
function mpGuideTab() {
  const tl = [['07:00','Ξύπνημα, 500 ml νερό, ζύγισμα μετά την τουαλέτα'],['07:30','Πρωινό με 30–40 g πρωτεΐνη'],['08:15','10′ περπάτημα στο φως της μέρας'],['10:30','Καφές και νερό· τελευταίος καφές ως τις 14:00'],['13:00','Μεσημεριανό: πρωτεΐνη, άμυλο, λαχανικά'],['16:30','Σνακ ή φρούτο πριν από το γυμναστήριο'],['18:00','Γυμναστήριο (Δευ/Τετ/Παρ) ή 40′ γρήγορο περπάτημα'],['19:10','Shake πρωτεΐνης μετά το γυμναστήριο'],['20:00','Βραδινό, 2,5 ώρες πριν τον ύπνο'],['22:30','Οθόνες χαμηλά, ετοιμασία για αύριο'],['23:00','Ύπνος· στόχος 7,5–8 ώρες']];
  const supp = [['Whey isolate','1 μεζούρα, 25–30 g πρωτεΐνη','Πιάνεις τον στόχο πρωτεΐνης με λίγες θερμίδες. Το isolate έχει ελάχιστη λακτόζη.'],['Κρεατίνη μονοϋδρική','3–5 g κάθε μέρα','Κρατά δύναμη και μύες σε έλλειμμα. Στην αρχή +1–2 kg νερό στους μύες, όχι λίπος.'],['Psyllium','5 g σε μεγάλο ποτήρι νερό','+4 g φυτικές ίνες, χορτασμός, καλύτερο έντερο. 2 ώρες μακριά από φάρμακα.'],['Βιταμίνη D3','1.000–2.000 IU','Μόνο αν η εξέταση αίματος δείξει χαμηλή τιμή.']];
  return `<section class="sec"><h2>Μια καλή μέρα</h2><p class="small muted" style="margin-top:-6px">Για δουλειά 09:00–17:00. Μετακίνησε όλο το πρόγραμμα αν το ωράριό σου διαφέρει.</p>
    <ul class="list inner mp-tl" style="border-top:0">${tl.map(([a, b]) => `<li><div class="item"><span class="mp-time">${a}</span><span class="grow small">${b}</span></div></li>`).join('')}</ul></section>
  <section class="sec"><h2>Καθημερινές συνήθειες</h2><ul class="guide">
    <li>Ζύγισμα κάθε πρωί· κρίνεις μόνο από τον μέσο όρο 7 ημερών.</li><li>2,5–3 L νερό, +0,75 L τις μέρες γυμναστηρίου.</li>
    <li>8.000–10.000 βήματα. Καίνε λίπος χωρίς να ανοίγουν την όρεξη.</li><li>Πρωτεΐνη σε κάθε γεύμα, και αυτή και η σαλάτα πρώτα στο πιάτο.</li>
    <li>Meal prep Κυριακή και Τετάρτη: κοτόπουλο, ρύζι ή πατάτες, όσπρια σε τάπερ για 3 μέρες.</li><li>Μία «κακή» μέρα δεν χαλάει τίποτα· συνεχίζεις από το επόμενο γεύμα.</li></ul></section>
  <section class="sec"><h2>Ύπνος</h2><ul class="guide"><li>Ίδια ώρα ξυπνήματος κάθε μέρα (±30′ το Σαββατοκύριακο).</li><li>Καφεΐνη μέχρι τις 14:00.</li><li>Δωμάτιο σκοτεινό, 18–20 °C, κινητό εκτός κρεβατιού.</li><li>Το αλκοόλ χαλάει τον ύπνο και έχει πολλές θερμίδες.</li><li>Με λιγότερο από 7 ώρες ύπνο η πείνα ανεβαίνει και η αποκατάσταση πέφτει.</li></ul></section>
  <section class="sec"><h2>Συμπληρώματα (προαιρετικά)</h2><ul class="list inner" style="border-top:0">${supp.map(([a, b, c]) => `<li><div class="item"><span class="grow"><span class="nm">${a}</span> <span class="sub">· ${b}</span><br><span class="sub">${c}</span></span></div></li>`).join('')}</ul>
    <p class="note safety">Απόφυγε λιποδιαλύτες, «θερμογενή» και pre-workout με πολλή καφεΐνη. Αν παίρνεις φάρμακα, ειδικά διεγερτικά ή αντικαταθλιπτικά, ρώτα γιατρό ή φαρμακοποιό πριν από οποιοδήποτε συμπλήρωμα.</p></section>
  <section class="sec"><h2>Πώς ελέγχεις την πρόοδο</h2><ul class="guide"><li>Κάθε πρωί ζύγισμα και καταγραφή.</li><li>Κάθε Κυριακή μέτρηση μέσης στο ύψος του αφαλού.</li><li>Κάθε 2 εβδομάδες φωτογραφίες μπροστά, πλάγια, πίσω, με ίδιο φως.</li><li>Μετά από 3–4 εβδομάδες, αν ο μέσος όρος πέφτει λιγότερο από 0,4 kg την εβδομάδα και η μέση δεν μικραίνει, πρόσθεσε 2.000 βήματα πριν κόψεις φαγητό.</li><li>Η πρώτη εβδομάδα δείχνει πτώση από νερό· από τη δεύτερη μετράει η τάση.</li></ul></section>`;
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
    case 'mpPick': { const id = a.dataset.id, s = new Set(st.picks); s.has(id) ? s.delete(id) : s.add(id); st.picks = [...s]; mpSave(st); a.setAttribute('aria-pressed', s.has(id));
      const bal = document.querySelector('.mp-bal'); if (bal) bal.outerHTML = mpBalHTML(mpCounts(st.picks));
      for (const el of document.querySelectorAll('#mpCount,#mpN')) el.textContent = st.picks.length;
      if (navigator.vibrate) try { navigator.vibrate(8); } catch (_) {} break; }
    case 'mpEditT': UI.mpEditT = !UI.mpEditT; mpRerender(true); break;
    case 'mpSet': UI.mpSet = !UI.mpSet; mpRerender(true); break;
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
