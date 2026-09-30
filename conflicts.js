// =====================================================
// ONE WORLD, ONE LIFE — CONFLICT ATLAS DATABASE
// 32 UNIQUE CRISIS / DISASTER ENTRIES
// Updated: September 30, 2026
// =====================================================

const conflicts = [

{
    id: "ukraine",
    name: "War in Ukraine",
    primaryCategory: "conflict",
    categories: ["conflict", "humanitarian", "displacement"],
    coordinates: [49.0, 32.0],
    lastUpdated: "September 30, 2026",
    overview: "Russia's full-scale invasion of Ukraine began in February 2022, expanding the conflict that began in 2014. Fighting continues between Russian and Ukrainian forces, alongside missile and drone attacks.",
    currentSituation: "Active fighting continues while attacks affect cities, infrastructure and communities. Humanitarian organizations continue responding to displacement, damaged housing and disrupted essential services.",
    actors: ["Ukraine", "Russian Federation"],
    humanitarianImpact: "Millions of people remain displaced inside Ukraine or abroad, while humanitarian needs continue across conflict-affected areas.",
    timeline: [
        {date: "2014", event: "Conflict begins in eastern Ukraine and Russia annexes Crimea."},
        {date: "February 24, 2022", event: "Russia launches its full-scale invasion of Ukraine."},
        {date: "2022–2025", event: "Large-scale fighting and repeated attacks affect communities across Ukraine."},
        {date: "2026", event: "Fighting, missile attacks and drone attacks continue."}
    ],
    sources: [
        {name: "UNHCR — Ukraine", url: "https://www.unhcr.org/ua/en"},
        {name: "OCHA — Ukraine", url: "https://www.unocha.org/ukraine"}
    ],
    aid: [
        {name: "UNHCR — Ukraine", url: "https://www.unhcr.org/ua/en"},
        {name: "ICRC — Ukraine", url: "https://www.icrc.org/en/where-we-work/ukraine"}
    ]
},

{
    id: "sudan",
    name: "War in Sudan",
    primaryCategory: "conflict",
    categories: ["conflict", "humanitarian", "displacement"],
    coordinates: [15.5, 30.5],
    lastUpdated: "September 30, 2026",
    overview: "Sudan has been at war since April 2023, when fighting broke out between the Sudanese Armed Forces and the paramilitary Rapid Support Forces following a power struggle during Sudan's attempted political transition.",
    currentSituation: "Fighting remains active in several parts of Sudan, including Darfur and the Kordofan regions. Long-range attacks and drones have become increasingly important in the conflict.",
    actors: ["Sudanese Armed Forces (SAF)", "Rapid Support Forces (RSF)"],
    humanitarianImpact: "Millions of people have been displaced inside Sudan and across its borders while food insecurity and other humanitarian needs remain severe.",
    timeline: [
        {date: "April 15, 2023", event: "Large-scale fighting begins between the SAF and RSF."},
        {date: "2023–2024", event: "Fighting expands beyond Khartoum and severely affects Darfur."},
        {date: "2025–2026", event: "Territorial control shifts while drone warfare expands."},
        {date: "September 2026", event: "Fighting and displacement continue."}
    ],
    sources: [
        {name: "UNHCR — Sudan Situation", url: "https://data.unhcr.org/en/situations/sudansituation"},
        {name: "WFP — Sudan", url: "https://www.wfp.org/emergencies/sudan"}
    ],
    aid: [
        {name: "ICRC — Sudan", url: "https://www.icrc.org/en/where-we-work/sudan"},
        {name: "WFP — Sudan", url: "https://www.wfp.org/emergencies/sudan"}
    ]
},

{
    id: "gaza-israel",
    name: "Israel–Gaza Conflict",
    primaryCategory: "conflict",
    categories: ["conflict", "humanitarian", "displacement"],
    coordinates: [31.5, 34.7],
    lastUpdated: "September 30, 2026",
    overview: "The current Israel–Gaza war began after the Hamas-led attacks on Israel on October 7, 2023 and Israel's subsequent military campaign in Gaza.",
    currentSituation: "Military activity continues to affect Gaza while humanitarian organizations report severe needs involving shelter, health care, water, sanitation and other essential services.",
    actors: ["Israel", "Hamas", "Other Palestinian armed groups"],
    humanitarianImpact: "The conflict has caused extensive casualties, destruction and displacement. Humanitarian conditions remain severe in Gaza.",
    timeline: [
        {date: "October 7, 2023", event: "Hamas-led armed groups attack Israel; Israel subsequently launches a major military campaign in Gaza."},
        {date: "2023–2025", event: "Large-scale fighting causes extensive casualties, destruction and displacement."},
        {date: "2026", event: "Humanitarian needs remain severe amid continued instability."}
    ],
    sources: [
        {name: "UN OCHA — Occupied Palestinian Territory", url: "https://www.ochaopt.org/"},
        {name: "ICRC — Israel and occupied territories", url: "https://www.icrc.org/en/where-we-work/israel-and-occupied-territories"}
    ],
    aid: [
        {name: "ICRC — Humanitarian Response", url: "https://www.icrc.org/en/where-we-work/israel-and-occupied-territories"},
        {name: "UNICEF — State of Palestine", url: "https://www.unicef.org/sop/"}
    ]
},

{
    id: "drc",
    name: "Eastern DR Congo Conflict",
    primaryCategory: "conflict",
    categories: ["conflict", "humanitarian", "displacement"],
    coordinates: [-1.7, 29.2],
    lastUpdated: "September 30, 2026",
    overview: "Eastern Democratic Republic of the Congo has experienced decades of conflict involving government forces and numerous armed groups.",
    currentSituation: "Persistent insecurity and armed-group activity continue in eastern DRC despite diplomatic efforts. Violence continues to cause new and repeated displacement.",
    actors: ["Democratic Republic of the Congo armed forces", "AFC/M23", "Other armed groups"],
    humanitarianImpact: "Millions remain displaced while conflict, food insecurity, disease and limited access to services affect civilians.",
    timeline: [
        {date: "1990s–present", event: "Eastern DRC experiences prolonged cycles of conflict."},
        {date: "2022–2025", event: "M23 expands military operations."},
        {date: "2026", event: "Conflict and insecurity continue despite peace initiatives."}
    ],
    sources: [{name: "UNHCR — DR Congo Emergency", url: "https://www.unhcr.org/emergencies/dr-congo-emergency"}],
    aid: [
        {name: "UNHCR — DR Congo", url: "https://www.unhcr.org/emergencies/dr-congo-emergency"},
        {name: "ICRC — DR Congo", url: "https://www.icrc.org/en/where-we-work/democratic-republic-congo"}
    ]
},

{
    id: "myanmar",
    name: "Myanmar Civil Conflict",
    primaryCategory: "conflict",
    categories: ["conflict", "humanitarian", "displacement"],
    coordinates: [19.5, 96.5],
    lastUpdated: "September 30, 2026",
    overview: "Myanmar has experienced nationwide armed conflict since the military seized power in February 2021.",
    currentSituation: "Fighting continues across several regions. Airstrikes, artillery, ground fighting and humanitarian access restrictions continue to affect civilians.",
    actors: ["Myanmar military", "Ethnic armed organizations", "People's Defence Forces and other resistance groups"],
    humanitarianImpact: "Millions have been displaced by conflict and insecurity while humanitarian access remains difficult in many areas.",
    timeline: [
        {date: "February 1, 2021", event: "Myanmar's military seizes power in a coup."},
        {date: "2021–2023", event: "Armed resistance expands."},
        {date: "2023–2026", event: "Major armed operations continue across multiple regions."}
    ],
    sources: [
        {name: "United Nations — Myanmar", url: "https://myanmar.un.org/"},
        {name: "UNHCR — Myanmar", url: "https://www.unhcr.org/where-we-work/countries/myanmar"}
    ],
    aid: [
        {name: "UNHCR — Myanmar", url: "https://www.unhcr.org/where-we-work/countries/myanmar"},
        {name: "ICRC — Myanmar", url: "https://www.icrc.org/en/where-we-work/myanmar"}
    ]
},

{
    id: "yemen",
    name: "Yemen Humanitarian Crisis",
    primaryCategory: "humanitarian",
    categories: ["humanitarian", "displacement"],
    coordinates: [15.5, 47.5],
    lastUpdated: "September 30, 2026",
    overview: "Yemen faces a prolonged humanitarian emergency shaped by years of armed conflict, economic deterioration, food insecurity and weakened essential services.",
    currentSituation: "Humanitarian organizations continue responding to food insecurity, displacement and weakened health and public services.",
    actors: ["Yemeni authorities and aligned forces", "Ansar Allah (Houthis)", "Other Yemeni political and armed groups"],
    humanitarianImpact: "Millions require humanitarian assistance and millions remain internally displaced.",
    timeline: [
        {date: "2014–2015", event: "Conflict escalates and a Saudi-led coalition intervenes."},
        {date: "2022", event: "A UN-mediated truce reduces major fighting."},
        {date: "2026", event: "Humanitarian and displacement needs remain extensive."}
    ],
    sources: [{name: "UNHCR — Yemen", url: "https://www.unhcr.org/where-we-work/countries/yemen"}],
    aid: [
        {name: "WFP — Yemen", url: "https://www.wfp.org/countries/yemen"},
        {name: "UNICEF — Yemen", url: "https://www.unicef.org/yemen/"}
    ]
},

{
    id: "afghanistan",
    name: "Afghanistan Humanitarian Crisis",
    primaryCategory: "humanitarian",
    categories: ["humanitarian", "displacement"],
    coordinates: [33.9, 67.7],
    lastUpdated: "September 30, 2026",
    overview: "Afghanistan faces widespread humanitarian needs shaped by economic hardship, food insecurity, displacement, natural hazards and large-scale returns from neighboring countries.",
    currentSituation: "Humanitarian agencies continue assisting vulnerable communities, displaced people and returnees amid funding and access constraints.",
    actors: ["Afghan de facto authorities", "United Nations humanitarian agencies", "Humanitarian organizations"],
    humanitarianImpact: "Millions continue to require humanitarian assistance while returns and displacement place pressure on services and livelihoods.",
    timeline: [
        {date: "August 2021", event: "The Taliban takes control of Kabul."},
        {date: "2022–2025", event: "Economic pressures, disasters and displacement contribute to humanitarian needs."},
        {date: "2026", event: "Large-scale humanitarian needs continue."}
    ],
    sources: [
        {name: "UNHCR — Afghanistan", url: "https://www.unhcr.org/where-we-work/countries/afghanistan"},
        {name: "OCHA — Afghanistan", url: "https://www.unocha.org/afghanistan"}
    ],
    aid: [{name: "WFP — Afghanistan", url: "https://www.wfp.org/countries/afghanistan"}]
},

{
    id: "syria",
    name: "Syria Humanitarian Crisis",
    primaryCategory: "humanitarian",
    categories: ["humanitarian", "displacement"],
    coordinates: [35.0, 38.5],
    lastUpdated: "September 30, 2026",
    overview: "Syria continues to face extensive humanitarian and displacement needs after years of conflict and political upheaval.",
    currentSituation: "Returns are occurring alongside damaged infrastructure, limited services and substantial humanitarian needs.",
    actors: ["Syrian authorities", "Local and regional armed actors", "Humanitarian organizations"],
    humanitarianImpact: "Millions remain internally displaced or outside Syria as refugees despite significant return movements.",
    timeline: [
        {date: "2011", event: "Conflict begins following anti-government protests."},
        {date: "2011–2024", event: "Years of war cause mass displacement and infrastructure damage."},
        {date: "2025–2026", event: "Returns increase while humanitarian needs remain substantial."}
    ],
    sources: [{name: "UNHCR — Syria", url: "https://www.unhcr.org/where-we-work/countries/syrian-arab-republic"}],
    aid: [{name: "UNICEF — Syria", url: "https://www.unicef.org/syria/"}]
},

{
    id: "somalia",
    name: "Somalia Humanitarian and Displacement Crisis",
    primaryCategory: "humanitarian",
    categories: ["humanitarian", "displacement"],
    coordinates: [5.2, 46.2],
    lastUpdated: "September 30, 2026",
    overview: "Somalia faces overlapping humanitarian pressures from armed conflict, insecurity, drought and other climate-related shocks.",
    currentSituation: "Conflict and drought continue to drive displacement and humanitarian needs.",
    actors: ["Federal Government of Somalia", "Al-Shabaab", "Humanitarian organizations"],
    humanitarianImpact: "Millions of people remain internally displaced.",
    timeline: [
        {date: "1990s–present", event: "Somalia experiences prolonged political instability and conflict."},
        {date: "2020s", event: "Conflict increasingly overlaps with drought and flooding."},
        {date: "2026", event: "Conflict and drought continue driving displacement."}
    ],
    sources: [{name: "UNHCR — Somalia", url: "https://www.unhcr.org/where-we-work/countries/somalia"}],
    aid: [{name: "WFP — Somalia", url: "https://www.wfp.org/countries/somalia"}]
},

{
    id: "south-sudan",
    name: "South Sudan Humanitarian Crisis",
    primaryCategory: "humanitarian",
    categories: ["humanitarian", "displacement"],
    coordinates: [7.3, 30.3],
    lastUpdated: "September 30, 2026",
    overview: "South Sudan faces humanitarian pressures linked to internal displacement, insecurity, flooding, food insecurity and the neighboring war in Sudan.",
    currentSituation: "Communities continue to face displacement while South Sudan also receives people fleeing Sudan.",
    actors: ["Government of South Sudan", "Local political and armed actors", "Humanitarian organizations"],
    humanitarianImpact: "Millions remain internally displaced while cross-border arrivals from Sudan place additional pressure on services.",
    timeline: [
        {date: "2011", event: "South Sudan becomes independent."},
        {date: "2013", event: "Civil war begins."},
        {date: "2018", event: "A revitalized peace agreement is signed."},
        {date: "2023–2026", event: "The Sudan war adds further displacement pressure."}
    ],
    sources: [{name: "UNHCR — South Sudan", url: "https://www.unhcr.org/where-we-work/countries/south-sudan"}],
    aid: [{name: "WFP — South Sudan", url: "https://www.wfp.org/countries/south-sudan"}]
},

{
    id: "haiti",
    name: "Haiti Humanitarian and Displacement Crisis",
    primaryCategory: "humanitarian",
    categories: ["humanitarian", "displacement"],
    coordinates: [19.0, -72.7],
    lastUpdated: "September 30, 2026",
    overview: "Haiti faces a severe humanitarian and security crisis as armed groups have expanded their influence and violence has displaced large numbers of civilians.",
    currentSituation: "Armed-group violence continues to cause displacement and disrupt access to essential services.",
    actors: ["Haitian authorities and security forces", "Multiple armed gangs and coalitions", "Humanitarian organizations"],
    humanitarianImpact: "Large-scale internal displacement, food insecurity and disrupted services continue to affect civilians.",
    timeline: [
        {date: "2021–2024", event: "Political instability and armed-group violence intensify."},
        {date: "2025–2026", event: "Violence and displacement expand."}
    ],
    sources: [{name: "United Nations — Haiti", url: "https://haiti.un.org/"}],
    aid: [{name: "WFP — Haiti", url: "https://www.wfp.org/countries/haiti"}]
},

{
    id: "central-sahel",
    name: "Central Sahel Displacement Crisis",
    primaryCategory: "displacement",
    categories: ["humanitarian", "displacement"],
    coordinates: [15.0, -1.5],
    lastUpdated: "September 30, 2026",
    overview: "Burkina Faso, Mali and Niger face a regional displacement and protection crisis driven primarily by insecurity and violence.",
    currentSituation: "Forced displacement continues across the Central Sahel and increasingly affects neighboring countries.",
    actors: ["Governments and security forces", "Multiple non-state armed groups", "Humanitarian organizations"],
    humanitarianImpact: "Millions are forcibly displaced across Burkina Faso, Mali and Niger.",
    timeline: [
        {date: "2010s", event: "Armed violence expands across parts of the Central Sahel."},
        {date: "2020–2026", event: "Forced displacement rises substantially across the region."}
    ],
    sources: [{name: "UNHCR — Sahel Emergency", url: "https://www.unhcr.org/emergencies/sahel-emergency"}],
    aid: [{name: "UNHCR — Sahel Emergency", url: "https://www.unhcr.org/emergencies/sahel-emergency"}]
},

{
    id: "ethiopia",
    name: "Ethiopia Displacement Crisis",
    primaryCategory: "displacement",
    categories: ["humanitarian", "displacement"],
    coordinates: [9.1, 40.5],
    lastUpdated: "September 30, 2026",
    overview: "Ethiopia faces significant displacement linked to conflict, localized insecurity and climate-related shocks while hosting refugees from neighboring countries.",
    currentSituation: "Displacement and humanitarian needs remain significant in several regions.",
    actors: ["Ethiopian federal and regional authorities", "Local armed actors", "Humanitarian organizations"],
    humanitarianImpact: "Millions remain internally displaced and Ethiopia hosts a substantial refugee population.",
    timeline: [
        {date: "2020–2022", event: "War in northern Ethiopia causes major displacement."},
        {date: "2022", event: "The Pretoria agreement ends large-scale fighting between federal and Tigrayan forces."},
        {date: "2023–2026", event: "Other insecurity and climate shocks continue causing displacement."}
    ],
    sources: [{name: "UNHCR — Ethiopia", url: "https://www.unhcr.org/where-we-work/countries/ethiopia"}],
    aid: [{name: "WFP — Ethiopia", url: "https://www.wfp.org/countries/ethiopia"}]
},

{
    id: "mozambique-displacement",
    name: "Northern Mozambique Displacement Crisis",
    primaryCategory: "displacement",
    categories: ["humanitarian", "displacement"],
    coordinates: [-12.5, 39.3],
    lastUpdated: "September 30, 2026",
    overview: "Northern Mozambique faces prolonged displacement associated with insurgent violence, insecurity and repeated natural disasters.",
    currentSituation: "Violence continues to expose civilians to protection risks and repeated displacement.",
    actors: ["Mozambican authorities and security forces", "Insurgent armed groups", "Humanitarian organizations"],
    humanitarianImpact: "Hundreds of thousands remain internally displaced.",
    timeline: [
        {date: "2017", event: "Insurgent violence begins in Cabo Delgado."},
        {date: "2020–2026", event: "Violence and disasters cause repeated displacement."}
    ],
    sources: [{name: "UNHCR — Mozambique", url: "https://www.unhcr.org/where-we-work/countries/mozambique"}],
    aid: [{name: "UNHCR — Mozambique", url: "https://www.unhcr.org/where-we-work/countries/mozambique"}]
},

{
    id: "car",
    name: "Central African Republic Displacement Crisis",
    primaryCategory: "displacement",
    categories: ["humanitarian", "displacement"],
    coordinates: [6.6, 20.9],
    lastUpdated: "September 30, 2026",
    overview: "The Central African Republic continues to experience a protracted humanitarian and displacement crisis after years of armed violence and instability.",
    currentSituation: "Displaced communities and refugees continue to face protection and humanitarian needs.",
    actors: ["Central African Republic authorities", "Multiple armed groups", "Humanitarian organizations"],
    humanitarianImpact: "Large numbers remain internally displaced or live as refugees in neighboring countries.",
    timeline: [
        {date: "2012–2013", event: "A major political and armed crisis begins."},
        {date: "2013–2020", event: "Repeated violence causes extensive displacement."},
        {date: "2021–2026", event: "A protracted displacement crisis continues."}
    ],
    sources: [{name: "UNHCR — Central African Republic", url: "https://www.unhcr.org/where-we-work/countries/central-african-republic"}],
    aid: [{name: "UNHCR — Central African Republic", url: "https://www.unhcr.org/where-we-work/countries/central-african-republic"}]
},

{
    id: "philippines-floods-2026",
    name: "Philippines Monsoon Floods",
    primaryCategory: "disaster",
    categories: ["disaster"],
    coordinates: [14.6, 121.0],
    lastUpdated: "September 30, 2026",
    overview: "Heavy monsoon rainfall caused widespread flooding in parts of the Philippines during 2026.",
    currentSituation: "Emergency and recovery efforts continue in affected communities.",
    actors: ["Philippine authorities", "Philippine Red Cross", "Humanitarian organizations"],
    humanitarianImpact: "Flooding affected communities across multiple regions and caused displacement and damage.",
    timeline: [{date: "2026", event: "Heavy monsoon rainfall causes widespread flooding."}],
    sources: [{name: "IFRC GO — Emergencies", url: "https://go.ifrc.org/emergencies"}],
    aid: [{name: "Philippine Red Cross", url: "https://redcross.org.ph/"}]
},

{
    id: "nepal-floods-2026",
    name: "Nepal Flash Floods",
    primaryCategory: "disaster",
    categories: ["disaster"],
    coordinates: [28.2, 84.0],
    lastUpdated: "September 30, 2026",
    overview: "Severe flash floods struck Nepal in August 2026, damaging homes, roads, bridges and infrastructure.",
    currentSituation: "Humanitarian and recovery operations continue in affected communities.",
    actors: ["Government of Nepal", "Nepal Red Cross Society", "Humanitarian organizations"],
    humanitarianImpact: "Flooding caused displacement and extensive infrastructure and livelihood damage.",
    timeline: [
        {date: "August 26, 2026", event: "Severe flash floods affect Nepal."},
        {date: "August 27, 2026", event: "IFRC launches an emergency appeal."}
    ],
    sources: [{name: "IFRC — Nepal Flash Floods", url: "https://www.ifrc.org/emergency/nepal-flash-floods-2026"}],
    aid: [{name: "IFRC — Nepal Response", url: "https://www.ifrc.org/emergency/nepal-flash-floods-2026"}]
},

{
    id: "colombia-earthquake-2026",
    name: "Colombia Earthquake",
    primaryCategory: "disaster",
    categories: ["disaster"],
    coordinates: [5.0, -76.5],
    lastUpdated: "September 30, 2026",
    overview: "A magnitude 7.4 earthquake struck western Colombia on August 10, 2026, affecting communities across multiple departments.",
    currentSituation: "Humanitarian assistance and recovery operations continue.",
    actors: ["Colombian authorities", "Colombian Red Cross", "Humanitarian organizations"],
    humanitarianImpact: "Hundreds of thousands of people were registered as disaster-affected.",
    timeline: [
        {date: "August 10, 2026", event: "A magnitude 7.4 earthquake strikes western Colombia."},
        {date: "August–September 2026", event: "Emergency response transitions toward recovery."}
    ],
    sources: [{name: "UNHCR — Colombia Earthquake Response", url: "https://data.unhcr.org/en/country/COL"}],
    aid: [{name: "IFRC", url: "https://www.ifrc.org/"}]
},

{
    id: "madagascar-cyclones-2026",
    name: "Madagascar Cyclones",
    primaryCategory: "disaster",
    categories: ["disaster"],
    coordinates: [-18.9, 47.5],
    lastUpdated: "September 30, 2026",
    overview: "Back-to-back cyclones struck Madagascar in early 2026, causing flooding and damage to homes, services and livelihoods.",
    currentSituation: "Recovery efforts continue.",
    actors: ["Madagascar authorities", "Malagasy Red Cross Society", "Humanitarian organizations"],
    humanitarianImpact: "Hundreds of thousands were affected by the cyclones.",
    timeline: [
        {date: "Early 2026", event: "Successive cyclones strike Madagascar."},
        {date: "February 2026", event: "IFRC launches an emergency appeal."}
    ],
    sources: [{name: "IFRC — Madagascar Cyclones", url: "https://www.ifrc.org/emergency/madagascar-cyclones-2026"}],
    aid: [{name: "IFRC — Madagascar Response", url: "https://www.ifrc.org/emergency/madagascar-cyclones-2026"}]
},

{
    id: "mozambique-floods-2026",
    name: "Mozambique Floods",
    primaryCategory: "disaster",
    categories: ["disaster"],
    coordinates: [-23.0, 33.0],
    lastUpdated: "September 30, 2026",
    overview: "Severe flooding affected large areas of Mozambique during 2026, damaging homes, crops, water systems and infrastructure.",
    currentSituation: "Relief and recovery continue in affected communities.",
    actors: ["Mozambican authorities", "Mozambique Red Cross", "Humanitarian organizations"],
    humanitarianImpact: "Hundreds of thousands were affected across multiple provinces.",
    timeline: [
        {date: "Late 2025–2026", event: "Heavy rainfall and river flooding affect Mozambique."},
        {date: "January 2026", event: "IFRC launches an emergency appeal."}
    ],
    sources: [{name: "IFRC — Mozambique Floods", url: "https://www.ifrc.org/emergency/mozambique-floods-2026"}],
    aid: [{name: "IFRC — Mozambique Response", url: "https://www.ifrc.org/emergency/mozambique-floods-2026"}]
},

// =====================================================
// NEW ENTRIES 21–32
// =====================================================

{
    id: "lebanon-2026",
    name: "Lebanon Conflict",
    primaryCategory: "conflict",
    categories: ["conflict", "humanitarian", "displacement"],
    coordinates: [33.9, 35.7],
    lastUpdated: "September 30, 2026",
    overview: "Lebanon experienced a sharp escalation of hostilities beginning in March 2026, worsening an already difficult humanitarian and economic situation.",
    currentSituation: "The 2026 escalation caused civilian casualties, extensive damage, disruption of basic services and large-scale displacement. Humanitarian and stabilization partners expanded their response for September through December.",
    actors: ["Lebanese authorities and armed forces", "Hezbollah", "Israel"],
    humanitarianImpact: "The UN's September 2026 Lebanon Response Plan Addendum seeks to provide prioritized assistance to 732,125 people affected by renewed hostilities and related humanitarian pressures.",
    timeline: [
        {date: "2024", event: "A major escalation causes casualties, destruction and displacement in Lebanon."},
        {date: "March 2026", event: "Hostilities sharply escalate again."},
        {date: "September 2026", event: "The UN expands the 2026 Lebanon Response Plan in response to worsening needs."}
    ],
    sources: [
        {name: "United Nations — Lebanon Response Plan 2026 Addendum", url: "https://lebanon.un.org/en/323037-lebanon-response-plan-2026-addendum"},
        {name: "UNHCR — Middle East Emergency", url: "https://www.unhcr.org/emergencies/middle-east-emergency"}
    ],
    aid: [
        {name: "UNHCR — Middle East Emergency", url: "https://www.unhcr.org/emergencies/middle-east-emergency"},
        {name: "Lebanese Red Cross", url: "https://www.redcross.org.lb/"}
    ]
},

{
    id: "iran-2026",
    name: "Iran Conflict and Displacement Emergency",
    primaryCategory: "conflict",
    categories: ["conflict", "humanitarian", "displacement"],
    coordinates: [32.4, 53.7],
    lastUpdated: "September 30, 2026",
    overview: "A major military escalation affecting Iran and the wider Middle East began on February 28, 2026, causing civilian casualties, infrastructure damage and large-scale temporary displacement.",
    currentSituation: "Humanitarian organizations continue monitoring population movements and supporting vulnerable communities affected by the conflict.",
    actors: ["Iran", "Other states involved in the regional military escalation"],
    humanitarianImpact: "UNHCR estimated in March 2026 that between 600,000 and one million Iranian households had temporarily left their homes, representing as many as 3.2 million people.",
    timeline: [
        {date: "February 28, 2026", event: "A major military escalation begins in the Middle East."},
        {date: "March 12, 2026", event: "UNHCR reports up to 3.2 million people temporarily displaced inside Iran."},
        {date: "2026", event: "Humanitarian response and displacement monitoring continue."}
    ],
    sources: [
        {name: "UNHCR — Middle East Emergency", url: "https://www.unhcr.org/emergencies/middle-east-emergency"},
        {name: "IFRC — Iran Complex Emergency 2026", url: "https://www.ifrc.org/emergencies/all"}
    ],
    aid: [
        {name: "IFRC", url: "https://www.ifrc.org/"},
        {name: "UNHCR — Middle East Emergency", url: "https://www.unhcr.org/emergencies/middle-east-emergency"}
    ]
},

{
    id: "colombia-conflict",
    name: "Colombia Internal Armed Conflicts",
    primaryCategory: "conflict",
    categories: ["conflict", "humanitarian", "displacement"],
    coordinates: [4.7, -74.1],
    lastUpdated: "September 30, 2026",
    overview: "Colombia continues to experience several internal armed conflicts involving state forces and non-state armed organizations despite the 2016 peace agreement with the FARC-EP.",
    currentSituation: "Violence, territorial disputes and armed-group activity continue to cause displacement and confinement in several parts of the country.",
    actors: ["Colombian security forces", "ELN", "FARC dissident groups", "Other non-state armed groups"],
    humanitarianImpact: "Government data published through UNHCR listed 7,133,444 registered internally displaced people eligible for assistance and reparation as of April 30, 2026.",
    timeline: [
        {date: "1960s", event: "Colombia's long-running internal armed conflict develops."},
        {date: "2016", event: "The government and FARC-EP sign a peace agreement."},
        {date: "2016–2026", event: "Other armed conflicts and violence continue to cause displacement."}
    ],
    sources: [{name: "UNHCR — Colombia", url: "https://data.unhcr.org/en/country/COL"}],
    aid: [
        {name: "UNHCR — Colombia", url: "https://data.unhcr.org/en/country/COL"},
        {name: "ICRC — Colombia", url: "https://www.icrc.org/en/where-we-work/colombia"}
    ]
},

{
    id: "chad-humanitarian",
    name: "Chad Humanitarian Crisis",
    primaryCategory: "humanitarian",
    categories: ["humanitarian", "displacement"],
    coordinates: [15.4, 18.7],
    lastUpdated: "September 30, 2026",
    overview: "Chad faces a major humanitarian and displacement emergency intensified by the war in neighboring Sudan, insecurity in the Lake Chad region and pressure on essential services.",
    currentSituation: "Refugees continue arriving from Sudan while humanitarian resources and services in eastern Chad remain heavily strained.",
    actors: ["Government of Chad", "Sudanese refugees and host communities", "United Nations and humanitarian organizations"],
    humanitarianImpact: "UN data showed approximately 2.26 million forcibly displaced people in Chad at the end of June 2026, including roughly 1.55 million refugees and asylum-seekers and nearly 219,600 internally displaced people.",
    timeline: [
        {date: "April 2023", event: "War begins in Sudan and large-scale refugee arrivals into Chad accelerate."},
        {date: "June 2026", event: "Chad hosts approximately 2.26 million forcibly displaced people."},
        {date: "September 2026", event: "New refugee arrivals from Sudan continue."}
    ],
    sources: [
        {name: "UNHCR — Chad Displacement Data", url: "https://data.unhcr.org/en/documents/details/123202"},
        {name: "UNFPA — Chad 2026 Humanitarian Appeal", url: "https://www.unfpa.org/resources/humanitarian-country-appeal-chad-2026"}
    ],
    aid: [{name: "UNHCR — Chad", url: "https://www.unhcr.org/where-we-work/countries/chad"}]
},

{
    id: "cameroon-humanitarian",
    name: "Cameroon Humanitarian Crisis",
    primaryCategory: "humanitarian",
    categories: ["humanitarian", "displacement"],
    coordinates: [5.9, 12.4],
    lastUpdated: "September 30, 2026",
    overview: "Cameroon faces overlapping humanitarian pressures from armed violence, internal displacement, refugee arrivals, climate shocks and worsening food insecurity.",
    currentSituation: "Insecurity persists in the North-West, South-West and Far North while food insecurity places additional pressure on vulnerable households.",
    actors: ["Government of Cameroon", "Non-state armed groups", "Separatist armed groups", "Humanitarian organizations"],
    humanitarianImpact: "IFRC reported in 2026 that 3.3 million people were unable to afford enough food. UNHCR also describes a large population of internally displaced people, refugees and asylum-seekers.",
    timeline: [
        {date: "2010s", event: "Multiple security crises drive displacement in several regions."},
        {date: "2025–2026", event: "Conflict, climate pressures and food insecurity continue to overlap."},
        {date: "February 2026", event: "IFRC launches a food-insecurity emergency appeal."}
    ],
    sources: [
        {name: "IFRC — Cameroon Food Insecurity 2026", url: "https://www.ifrc.org/emergency/cameroon-food-insecurity-2026"},
        {name: "UNHCR — Cameroon", url: "https://www.unhcr.org/where-we-work/countries/cameroon"}
    ],
    aid: [{name: "IFRC — Cameroon Response", url: "https://www.ifrc.org/emergency/cameroon-food-insecurity-2026"}]
},

{
    id: "kenya-humanitarian",
    name: "Kenya Food Insecurity Crisis",
    primaryCategory: "humanitarian",
    categories: ["humanitarian"],
    coordinates: [0.2, 37.9],
    lastUpdated: "September 30, 2026",
    overview: "Recurrent drought, climate shocks and constrained livelihoods contribute to persistent food insecurity and malnutrition in Kenya's arid and semi-arid areas.",
    currentSituation: "Humanitarian and government programs continue providing food, nutrition and livelihood support while strengthening longer-term drought-response systems.",
    actors: ["Government of Kenya", "County governments", "United Nations and humanitarian organizations"],
    humanitarianImpact: "Food insecurity and malnutrition continue to affect vulnerable households, particularly in Kenya's arid and semi-arid counties.",
    timeline: [
        {date: "2020s", event: "Repeated drought and climate shocks affect pastoral and rural communities."},
        {date: "2025–2026", event: "Food and nutrition assistance continues across vulnerable counties."}
    ],
    sources: [{name: "United Nations — Kenya Food and Nutrition Response", url: "https://kenya.un.org/en/316545-protecting-families-hunger-while-building-better-response-system"}],
    aid: [{name: "WFP — Kenya", url: "https://www.wfp.org/countries/kenya"}]
},

{
    id: "venezuela-displacement",
    name: "Venezuela Regional Displacement Crisis",
    primaryCategory: "displacement",
    categories: ["humanitarian", "displacement"],
    coordinates: [8.0, -66.0],
    lastUpdated: "September 30, 2026",
    overview: "Millions of Venezuelans have left the country over the past decade, creating one of the world's largest international displacement situations.",
    currentSituation: "Cross-border movement continues despite some returns. Host countries across Latin America and the Caribbean continue supporting integration, regularization and humanitarian assistance.",
    actors: ["Venezuelan refugees and migrants", "Host governments", "UNHCR and partner organizations"],
    humanitarianImpact: "UNHCR reports nearly 7.9 million refugees and migrants from Venezuela worldwide, based on government figures.",
    timeline: [
        {date: "Mid-2010s", event: "Large-scale outward migration from Venezuela accelerates."},
        {date: "2020–2025", event: "Regional governments expand regularization and protection programs."},
        {date: "2026", event: "The regional displacement situation continues alongside some return movements."}
    ],
    sources: [{name: "UNHCR — Venezuela Situation", url: "https://www.unhcr.org/emergencies/venezuela-situation"}],
    aid: [{name: "UNHCR — Venezuela Situation", url: "https://www.unhcr.org/emergencies/venezuela-situation"}]
},

{
    id: "nigeria-displacement",
    name: "Nigeria Displacement Crisis",
    primaryCategory: "displacement",
    categories: ["humanitarian", "displacement"],
    coordinates: [9.1, 8.7],
    lastUpdated: "September 30, 2026",
    overview: "Nigeria faces a complex displacement crisis driven by armed conflict, insecurity, communal violence and climate-related disasters.",
    currentSituation: "Displacement remains concentrated particularly in northern Nigeria while violence, economic pressures and climate shocks continue to generate humanitarian needs.",
    actors: ["Government of Nigeria", "Boko Haram and ISWAP", "Other armed and communal actors", "Humanitarian organizations"],
    humanitarianImpact: "UNHCR's 2026 strategy describes more than 3.6 million internally displaced people in Nigeria, alongside refugees and asylum-seekers hosted by the country.",
    timeline: [
        {date: "2009", event: "The Boko Haram insurgency intensifies in northeastern Nigeria."},
        {date: "2010s–2020s", event: "Conflict, communal violence and disasters repeatedly drive displacement."},
        {date: "2026", event: "Millions remain internally displaced."}
    ],
    sources: [{name: "UNHCR — Nigeria", url: "https://www.unhcr.org/where-we-work/countries/nigeria"}],
    aid: [{name: "UNHCR — Nigeria", url: "https://www.unhcr.org/where-we-work/countries/nigeria"}]
},

{
    id: "rohingya-bangladesh",
    name: "Rohingya Refugee Crisis in Bangladesh",
    primaryCategory: "displacement",
    categories: ["humanitarian", "displacement"],
    coordinates: [21.4, 92.0],
    lastUpdated: "September 30, 2026",
    overview: "Bangladesh hosts a large population of Rohingya refugees who fled persecution and violence in Myanmar, particularly during the mass displacement of 2017.",
    currentSituation: "Most refugees live in densely populated camps in Cox's Bazar, with additional refugees on Bhasan Char. Humanitarian assistance remains essential.",
    actors: ["Rohingya refugees", "Government of Bangladesh", "UNHCR and humanitarian partners"],
    humanitarianImpact: "Government of Bangladesh and UNHCR data recorded 1,200,171 Rohingya refugees as of June 30, 2026.",
    timeline: [
        {date: "2017", event: "Hundreds of thousands of Rohingya flee Myanmar for Bangladesh."},
        {date: "2021–2026", event: "Bangladesh continues hosting a large, protracted refugee population."},
        {date: "June 30, 2026", event: "Government and UNHCR data record approximately 1.2 million Rohingya refugees."}
    ],
    sources: [{name: "UNHCR — Bangladesh", url: "https://data.unhcr.org/en/country/bgd"}],
    aid: [{name: "UNHCR — Rohingya Emergency", url: "https://www.unhcr.org/emergencies/rohingya-emergency"}]
},

{
    id: "venezuela-earthquake-2026",
    name: "Venezuela Earthquake",
    primaryCategory: "disaster",
    categories: ["disaster"],
    coordinates: [10.5, -66.9],
    lastUpdated: "September 30, 2026",
    overview: "Powerful earthquakes struck Venezuela in June 2026, severely affecting Gran Caracas, La Guaira and surrounding areas.",
    currentSituation: "The Venezuelan Red Cross and humanitarian partners continue emergency response and recovery assistance.",
    actors: ["Venezuelan authorities", "Venezuelan Red Cross", "IFRC"],
    humanitarianImpact: "The earthquakes caused deaths, injuries, displacement and extensive damage to homes and essential infrastructure. IFRC launched a major emergency appeal.",
    timeline: [
        {date: "June 2026", event: "Powerful earthquakes strike Venezuela."},
        {date: "June 26, 2026", event: "IFRC launches an emergency appeal."},
        {date: "September 2026", event: "Response and recovery operations continue."}
    ],
    sources: [{name: "IFRC — Venezuela Earthquake 2026", url: "https://www.ifrc.org/emergency/venezuela-earthquake-2026"}],
    aid: [{name: "IFRC — Venezuela Earthquake Response", url: "https://www.ifrc.org/emergency/venezuela-earthquake-2026"}]
},

{
    id: "vietnam-floods-2026",
    name: "Viet Nam Floods",
    primaryCategory: "disaster",
    categories: ["disaster"],
    coordinates: [20.5, 105.8],
    lastUpdated: "September 30, 2026",
    overview: "Heavy rainfall caused flooding across northern and north-central Viet Nam in September 2026, damaging homes, crops and aquaculture areas.",
    currentSituation: "Authorities continue assessing damage while flood, flash-flood and landslide risks remain important in affected areas.",
    actors: ["Vietnamese authorities", "Viet Nam Red Cross Society", "Humanitarian responders"],
    humanitarianImpact: "IFRC reported deaths, collapsed and damaged homes, thousands of flooded houses and extensive agricultural impacts during September.",
    timeline: [
        {date: "September 2026", event: "Heavy rainfall causes flooding across northern and north-central Viet Nam."},
        {date: "September 21–25, 2026", event: "Authorities report continued flooding and issue additional flash-flood and landslide warnings."}
    ],
    sources: [{name: "IFRC GO — Viet Nam Floods", url: "https://go.ifrc.org/emergencies/8093/overview"}],
    aid: [{name: "IFRC", url: "https://www.ifrc.org/"}]
},

{
    id: "libya-floods-2026",
    name: "Libya Flash Floods",
    primaryCategory: "disaster",
    categories: ["disaster"],
    coordinates: [29.1, 15.9],
    lastUpdated: "September 30, 2026",
    overview: "Flash flooding affected the Sokna area of Libya in September 2026 following heavy rainfall.",
    currentSituation: "The event is being tracked through the IFRC emergency system while local responders assess impacts and needs.",
    actors: ["Libyan authorities", "Libyan Red Crescent Society", "Humanitarian responders"],
    humanitarianImpact: "Initial assessments were still developing when the emergency was recorded, so Conflict Atlas does not display an unverified affected-population estimate.",
    timeline: [
        {date: "September 22, 2026", event: "The Sokna flash-flood emergency is recorded in the IFRC emergency system."},
        {date: "September 2026", event: "Damage and humanitarian needs continue to be assessed."}
    ],
    sources: [{name: "IFRC GO — Current Emergencies", url: "https://go.ifrc.org/emergencies"}],
    aid: [{name: "IFRC", url: "https://www.ifrc.org/"}]
}

];
