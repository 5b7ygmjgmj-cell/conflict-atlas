// =====================================================
// ONE WORLD, ONE LIFE — CONFLICT ATLAS DATABASE
// 42 CRISIS / DISASTER / UNREST ENTRIES
// Research update: October 12, 2026
// Individual verification dates are listed below.
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
    lastUpdated: "October 12, 2026",
    overview: "Sudan has been at war since April 2023, when fighting broke out between the Sudanese Armed Forces and the paramilitary Rapid Support Forces following a power struggle during Sudan's attempted political transition.",
    currentSituation: "Fighting between the SAF and RSF continues. An October 12 IPC warning describes deteriorating food insecurity in Darfur and Kordofan, compounded by conflict, drought and insufficient aid funding.",
    actors: ["Sudanese Armed Forces (SAF)", "Rapid Support Forces (RSF)"],
    humanitarianImpact: "Conflict, displacement and drought are undermining access to food. IPC assessments indicate widespread acute food insecurity, with famine risks in parts of Darfur and Kordofan.",
    timeline: [
        {date: "April 15, 2023", event: "Large-scale fighting begins between the SAF and RSF."},
        {date: "2023–2024", event: "Fighting expands beyond Khartoum and severely affects Darfur."},
        {date: "2025–2026", event: "Territorial control shifts while drone warfare expands."},
        {date: "September 2026", event: "Fighting and displacement continue."}
    ],
    sources: [
        {name: "AP / IPC — Sudan food insecurity", url: "https://apnews.com/article/123204872e733d39b0b67713b418b0c2"},
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
    lastUpdated: "June 26, 2026",
    overview: "The current Israel–Gaza war began after the Hamas-led attacks on Israel on October 7, 2023 and Israel's subsequent military campaign in Gaza.",
    currentSituation: "Despite the ceasefire announced in October 2025, OCHA documented continued casualties, restrictions on movement, severe displacement and major humanitarian needs in Gaza as of June 2026.",
    actors: ["Israel", "Hamas", "Other Palestinian armed groups"],
    humanitarianImpact: "OCHA reported that most of Gaza's population remained displaced, with limited access to basic services and humanitarian assistance.",
    timeline: [
        {date: "October 7, 2023", event: "Hamas-led armed groups attack Israel; Israel subsequently launches a major military campaign in Gaza."},
        {date: "2023–2025", event: "Large-scale fighting causes extensive casualties, destruction and displacement."},
        {date: "2026", event: "Humanitarian needs remain severe amid continued instability."}
    ],
    sources: [
        {name: "OCHA — Gaza humanitarian report June 2026", url: "https://www.un.org/unispal/document/ocha-humanitarian-situation-report-26-june-2026/"},
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
    lastUpdated: "October 9, 2026",
    overview: "Eastern Democratic Republic of the Congo has experienced decades of conflict involving government forces and numerous armed groups.",
    currentSituation: "Conflict and insecurity continue in eastern DRC. UN officials reported over 6.1 million people displaced and more than 26 million facing food insecurity; an Ebola outbreak adds pressure to already strained services.",
    actors: ["Democratic Republic of the Congo armed forces", "AFC/M23", "Other armed groups"],
    humanitarianImpact: "Displacement, hunger, malnutrition, damaged infrastructure and the Ebola response overlap in conflict-affected areas.",
    timeline: [
        {date: "1990s–present", event: "Eastern DRC experiences prolonged cycles of conflict."},
        {date: "2022–2025", event: "M23 expands military operations."},
        {date: "2026", event: "Conflict and insecurity continue despite peace initiatives."}
    ],
    sources: [
        {name: "UN Geneva — DRC humanitarian briefing", url: "https://www.ungeneva.org/ar/news-media/press-briefing/2026/10/un-geneva-press-briefing-1"},
        {name: "UNHCR — DR Congo Emergency", url: "https://www.unhcr.org/emergencies/dr-congo-emergency"}
    ],
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
        {date: "2024–2025", event: "Opposition forces and ethnic armed organizations expand operations in multiple regions."},
        {date: "2026", event: "Fighting and displacement continue across the country."}
    ],
    sources: [
        {name: "UN OCHA — Myanmar", url: "https://www.unocha.org/myanmar"},
        {name: "UNHCR — Myanmar Situation", url: "https://data.unhcr.org/en/situations/myanmar"}
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
    categories: ["conflict", "humanitarian", "displacement"],
    coordinates: [15.5, 47.5],
    lastUpdated: "October 12, 2026",
    overview: "Yemen has faced prolonged conflict and humanitarian crisis since fighting escalated nationally in 2015.",
    currentSituation: "Years of conflict, economic deterioration and disruption to essential services continue to create severe humanitarian needs. Food insecurity, disease, displacement and limited access to health care remain major concerns.",
    actors: ["Houthi movement (Ansar Allah)", "Internationally recognized Yemeni government", "Other Yemeni armed and political groups"],
    humanitarianImpact: "Millions of people require humanitarian assistance, while food insecurity, malnutrition, displacement and weakened health services continue to affect civilians.",
    timeline: [
        {date: "2014", event: "Houthi forces take control of Sanaa."},
        {date: "2015", event: "A Saudi-led coalition intervenes in Yemen's conflict."},
        {date: "2022", event: "A UN-mediated truce significantly reduces some forms of nationwide fighting."},
        {date: "2023–2025", event: "Humanitarian needs remain severe despite reduced front-line fighting in some areas."},
        {date: "2026", event: "Conflict-related instability and humanitarian needs continue."}
    ],
    sources: [
        {name: "UN OCHA — Yemen", url: "https://www.unocha.org/yemen"},
        {name: "WFP — Yemen", url: "https://www.wfp.org/emergencies/yemen-emergency"}
    ],
    aid: [
        {name: "WFP — Yemen", url: "https://www.wfp.org/emergencies/yemen-emergency"},
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
    overview: "Afghanistan faces a prolonged humanitarian crisis shaped by decades of conflict, economic hardship, natural disasters and large-scale displacement.",
    currentSituation: "Millions of Afghans continue to require humanitarian assistance. Economic vulnerability, food insecurity, displacement, restrictions affecting women and girls, and returns from neighboring countries continue to place pressure on communities.",
    actors: ["Taliban authorities", "Afghan civilians", "Humanitarian organizations"],
    humanitarianImpact: "Food insecurity, poverty, displacement and limited access to essential services continue to affect millions of people.",
    timeline: [
        {date: "2001–2021", event: "Afghanistan experiences two decades of war involving Afghan forces, international forces and the Taliban."},
        {date: "August 2021", event: "The Taliban takes control of Kabul and most of Afghanistan."},
        {date: "2022–2025", event: "Economic hardship and humanitarian needs remain widespread."},
        {date: "2026", event: "Humanitarian organizations continue responding to food insecurity, displacement and return movements."}
    ],
    sources: [
        {name: "UN OCHA — Afghanistan", url: "https://www.unocha.org/afghanistan"},
        {name: "UNHCR — Afghanistan", url: "https://www.unhcr.org/emergencies/afghanistan-emergency"}
    ],
    aid: [
        {name: "UNHCR — Afghanistan", url: "https://www.unhcr.org/emergencies/afghanistan-emergency"},
        {name: "WFP — Afghanistan", url: "https://www.wfp.org/countries/afghanistan"}
    ]
},

{
    id: "syria",
    name: "Syria Humanitarian Crisis",
    primaryCategory: "humanitarian",
    categories: ["conflict", "humanitarian", "displacement"],
    coordinates: [35.0, 38.5],
    lastUpdated: "September 30, 2026",
    overview: "Syria has faced conflict, displacement and humanitarian crisis since 2011, leaving millions of people displaced inside the country and abroad.",
    currentSituation: "Syria remains affected by insecurity, damaged infrastructure, economic hardship and displacement. Humanitarian needs continue despite major political and military changes in the country.",
    actors: ["Syrian authorities", "Various armed groups", "Regional and international actors"],
    humanitarianImpact: "Millions of Syrians remain displaced or require assistance, while access to housing, food, health care and other essential services remains difficult for many communities.",
    timeline: [
        {date: "2011", event: "Anti-government protests develop into a nationwide armed conflict."},
        {date: "2011–2024", event: "War causes extensive destruction, casualties and mass displacement."},
        {date: "2024–2025", event: "Major political and military changes reshape control within Syria."},
        {date: "2026", event: "Humanitarian needs and displacement remain substantial."}
    ],
    sources: [
        {name: "UN OCHA — Syria", url: "https://www.unocha.org/syrian-arab-republic"},
        {name: "UNHCR — Syria Emergency", url: "https://www.unhcr.org/emergencies/syria-emergency"}
    ],
    aid: [
        {name: "UNHCR — Syria", url: "https://www.unhcr.org/emergencies/syria-emergency"},
        {name: "ICRC — Syria", url: "https://www.icrc.org/en/where-we-work/syria"}
    ]
},

{
    id: "somalia",
    name: "Somalia Humanitarian and Security Crisis",
    primaryCategory: "humanitarian",
    categories: ["conflict", "humanitarian", "displacement"],
    coordinates: [5.0, 46.0],
    lastUpdated: "October 12, 2026",
    overview: "Somalia faces overlapping armed conflict, political instability, climate shocks, displacement and severe food insecurity.",
    currentSituation: "Armed violence involving al-Shabaab continues while recurrent drought and flooding place additional pressure on vulnerable communities. Humanitarian organizations continue warning about severe hunger and displacement.",
    actors: ["Federal Government of Somalia", "Somali security forces", "Al-Shabaab", "Other armed actors"],
    humanitarianImpact: "Conflict, climate shocks and food insecurity have displaced large numbers of people and left vulnerable communities dependent on humanitarian assistance.",
    timeline: [
        {date: "1991", event: "Somalia's central government collapses, beginning decades of instability."},
        {date: "2000s–present", event: "Al-Shabaab becomes a major armed actor in Somalia."},
        {date: "2022–2025", event: "Conflict and repeated climate shocks worsen humanitarian conditions."},
        {date: "2026", event: "Violence, hunger and displacement continue."}
    ],
    sources: [
        {name: "UN OCHA — Somalia", url: "https://www.unocha.org/somalia"},
        {name: "WFP — Somalia", url: "https://www.wfp.org/countries/somalia"}
    ],
    aid: [
        {name: "WFP — Somalia", url: "https://www.wfp.org/countries/somalia"},
        {name: "UNHCR — Somalia", url: "https://www.unhcr.org/where-we-work/countries/somalia"}
    ]
},

{
    id: "south-sudan",
    name: "South Sudan Humanitarian Crisis",
    primaryCategory: "humanitarian",
    categories: ["conflict", "humanitarian", "displacement"],
    coordinates: [7.3, 30.3],
    lastUpdated: "September 30, 2026",
    overview: "South Sudan continues to experience humanitarian pressures linked to conflict, political instability, intercommunal violence, flooding, food insecurity and displacement.",
    currentSituation: "Political tensions and localized violence continue alongside severe humanitarian needs. The arrival of people fleeing the war in neighboring Sudan has added further pressure to communities and humanitarian services.",
    actors: ["Government of South Sudan", "Opposition groups", "Local armed groups and community militias"],
    humanitarianImpact: "Millions of people face food insecurity, displacement and limited access to health care, clean water and other essential services.",
    timeline: [
        {date: "2011", event: "South Sudan becomes independent."},
        {date: "2013–2018", event: "Civil war causes mass displacement and humanitarian suffering."},
        {date: "2018", event: "A revitalized peace agreement is signed."},
        {date: "2023–2026", event: "Humanitarian pressures increase as people flee into South Sudan from the war in Sudan."}
    ],
    sources: [
        {name: "UN OCHA — South Sudan", url: "https://www.unocha.org/south-sudan"},
        {name: "UNHCR — South Sudan", url: "https://www.unhcr.org/where-we-work/countries/south-sudan"}
    ],
    aid: [
        {name: "WFP — South Sudan", url: "https://www.wfp.org/countries/south-sudan"},
        {name: "UNHCR — South Sudan", url: "https://www.unhcr.org/where-we-work/countries/south-sudan"}
    ]
},

{
    id: "haiti",
    name: "Haiti Security and Humanitarian Crisis",
    primaryCategory: "humanitarian",
    categories: ["conflict", "humanitarian", "displacement"],
    coordinates: [18.9, -72.3],
    lastUpdated: "September 30, 2026",
    overview: "Haiti faces a severe security and humanitarian crisis driven by armed-group violence, political instability, displacement and weakened public services.",
    currentSituation: "Armed groups continue to control or contest areas of Port-au-Prince and other communities. Violence, insecurity and limited humanitarian access continue to disrupt everyday life.",
    actors: ["Haitian authorities and security forces", "Armed gangs", "Multinational security personnel"],
    humanitarianImpact: "Violence has forced large numbers of people from their homes and disrupted access to food, health care, education and other essential services.",
    timeline: [
        {date: "2021", event: "President Jovenel Moïse is assassinated amid worsening political instability."},
        {date: "2022–2024", event: "Armed gangs expand control and violence increases."},
        {date: "2024", event: "A multinational security mission begins deploying to Haiti."},
        {date: "2025–2026", event: "Violence and displacement remain severe."}
    ],
    sources: [
        {name: "UN OCHA — Haiti", url: "https://www.unocha.org/haiti"},
        {name: "UNHCR — Haiti", url: "https://www.unhcr.org/where-we-work/countries/haiti"}
    ],
    aid: [
        {name: "WFP — Haiti", url: "https://www.wfp.org/countries/haiti"},
        {name: "UNICEF — Haiti", url: "https://www.unicef.org/haiti/"}
    ]
},
{
    id: "central-sahel",
    name: "Central Sahel Crisis",
    primaryCategory: "conflict",
    categories: ["conflict", "humanitarian", "displacement"],
    coordinates: [14.5, -1.5],
    lastUpdated: "September 30, 2026",
    overview: "Burkina Faso, Mali and Niger face interconnected security and humanitarian crises involving armed groups, military operations, political instability and large-scale displacement.",
    currentSituation: "Armed violence continues across parts of the Central Sahel. Insecurity restricts access to communities while attacks and military operations continue to force people from their homes.",
    actors: ["Burkina Faso security forces", "Malian security forces", "Nigerien security forces", "Jihadist armed groups", "Other armed actors"],
    humanitarianImpact: "Millions of people across the Central Sahel have been displaced or otherwise affected by violence, food insecurity and reduced access to health care, education and humanitarian assistance.",
    timeline: [
        {date: "2012", event: "Conflict escalates in northern Mali."},
        {date: "2015–2020", event: "Armed violence spreads into Burkina Faso and Niger."},
        {date: "2020–2023", event: "Military coups reshape governments across Mali, Burkina Faso and Niger."},
        {date: "2024–2026", event: "Armed violence and displacement continue across the region."}
    ],
    sources: [
        {name: "UNHCR — Sahel Situation", url: "https://data.unhcr.org/en/situations/sahelcrisis"},
        {name: "UN OCHA — West and Central Africa", url: "https://www.unocha.org/west-and-central-africa"}
    ],
    aid: [
        {name: "UNHCR — Sahel Situation", url: "https://data.unhcr.org/en/situations/sahelcrisis"},
        {name: "ICRC — Sahel", url: "https://www.icrc.org/en/where-we-work/africa/sahel"}
    ]
},

{
    id: "ethiopia",
    name: "Ethiopia Humanitarian and Conflict Crisis",
    primaryCategory: "humanitarian",
    categories: ["conflict", "humanitarian", "displacement"],
    coordinates: [9.1, 40.5],
    lastUpdated: "September 30, 2026",
    overview: "Ethiopia faces overlapping humanitarian challenges involving armed violence, displacement, food insecurity, climate shocks and the continuing effects of previous conflicts.",
    currentSituation: "Insecurity continues in parts of Ethiopia, including areas affected by fighting and political tensions. Humanitarian organizations continue responding to displacement, food insecurity and disrupted services.",
    actors: ["Ethiopian federal authorities", "Regional security forces", "Various armed groups"],
    humanitarianImpact: "Conflict and climate shocks have displaced communities and disrupted livelihoods, while millions continue to require humanitarian assistance.",
    timeline: [
        {date: "November 2020", event: "War begins in Ethiopia's Tigray region."},
        {date: "November 2022", event: "The Ethiopian government and Tigrayan forces sign a cessation-of-hostilities agreement."},
        {date: "2023–2025", event: "Violence and insecurity continue in other parts of Ethiopia."},
        {date: "2026", event: "Humanitarian needs and localized insecurity continue."}
    ],
    sources: [
        {name: "UN OCHA — Ethiopia", url: "https://www.unocha.org/ethiopia"},
        {name: "UNHCR — Ethiopia", url: "https://www.unhcr.org/where-we-work/countries/ethiopia"}
    ],
    aid: [
        {name: "WFP — Ethiopia", url: "https://www.wfp.org/countries/ethiopia"},
        {name: "UNHCR — Ethiopia", url: "https://www.unhcr.org/where-we-work/countries/ethiopia"}
    ]
},

{
    id: "mozambique-displacement",
    name: "Northern Mozambique Conflict",
    primaryCategory: "conflict",
    categories: ["conflict", "humanitarian", "displacement"],
    coordinates: [-12.5, 40.0],
    lastUpdated: "September 30, 2026",
    overview: "Northern Mozambique has faced an armed insurgency centered largely in Cabo Delgado province since 2017.",
    currentSituation: "Attacks and insecurity continue to affect communities in northern Mozambique. Security operations and humanitarian responses continue while some communities experience repeated displacement.",
    actors: ["Mozambican security forces", "Islamic State-linked insurgents", "Regional security partners"],
    humanitarianImpact: "Violence has displaced large numbers of people and disrupted livelihoods, education, health care and access to food.",
    timeline: [
        {date: "2017", event: "Insurgency begins in Cabo Delgado."},
        {date: "2020–2021", event: "Insurgents capture territory and attack major population centers."},
        {date: "2021", event: "Regional and international security forces deploy to assist Mozambique."},
        {date: "2022–2026", event: "Security operations continue while attacks and displacement persist."}
    ],
    sources: [
        {name: "UNHCR — Mozambique", url: "https://www.unhcr.org/where-we-work/countries/mozambique"},
        {name: "UN OCHA — Mozambique", url: "https://www.unocha.org/mozambique"}
    ],
    aid: [
        {name: "UNHCR — Mozambique", url: "https://www.unhcr.org/where-we-work/countries/mozambique"},
        {name: "ICRC — Mozambique", url: "https://www.icrc.org/en/where-we-work/mozambique"}
    ]
},

{
    id: "car",
    name: "Central African Republic Crisis",
    primaryCategory: "humanitarian",
    categories: ["conflict", "humanitarian", "displacement"],
    coordinates: [6.6, 20.9],
    lastUpdated: "September 30, 2026",
    overview: "The Central African Republic has experienced prolonged political instability and armed conflict involving government forces and multiple armed groups.",
    currentSituation: "Insecurity continues in parts of the country despite peace and stabilization efforts. Armed violence, limited state services and difficult humanitarian access continue to affect civilians.",
    actors: ["Central African Republic government forces", "Armed groups", "International peacekeeping and security forces"],
    humanitarianImpact: "Conflict has displaced communities inside the country and into neighboring states while food insecurity and limited access to basic services remain significant concerns.",
    timeline: [
        {date: "2012–2013", event: "A new cycle of conflict begins and the Seleka coalition takes power."},
        {date: "2013–2020", event: "Violence involving numerous armed groups continues."},
        {date: "2020–2021", event: "A rebel coalition launches a major offensive."},
        {date: "2022–2026", event: "Localized conflict and humanitarian needs continue."}
    ],
    sources: [
        {name: "UNHCR — Central African Republic", url: "https://www.unhcr.org/where-we-work/countries/central-african-republic"},
        {name: "UN OCHA — Central African Republic", url: "https://www.unocha.org/central-african-republic"}
    ],
    aid: [
        {name: "UNHCR — Central African Republic", url: "https://www.unhcr.org/where-we-work/countries/central-african-republic"},
        {name: "WFP — Central African Republic", url: "https://www.wfp.org/countries/central-african-republic"}
    ]
},

{
    id: "philippines-floods-2026",
    name: "Philippines Floods and Storms — 2026",
    primaryCategory: "disaster",
    categories: ["disaster", "humanitarian", "displacement"],
    coordinates: [12.8, 122.0],
    lastUpdated: "September 30, 2026",
    overview: "Communities in the Philippines have faced flooding and severe weather during the 2026 storm and monsoon season.",
    currentSituation: "Flooding and storm impacts have affected communities, damaged homes and infrastructure and forced evacuations in affected areas.",
    actors: ["Philippine national and local authorities", "Emergency responders", "Humanitarian organizations"],
    humanitarianImpact: "Flooding and severe weather can cause temporary displacement, damage homes and infrastructure and interrupt transportation, education and essential services.",
    timeline: [
        {date: "2026", event: "Seasonal storms and monsoon conditions cause flooding in multiple areas of the Philippines."},
        {date: "2026", event: "Authorities and humanitarian organizations conduct evacuation and relief operations."}
    ],
    sources: [
        {name: "ReliefWeb — Philippines", url: "https://reliefweb.int/country/phl"},
        {name: "Philippine Red Cross", url: "https://redcross.org.ph/"}
    ],
    aid: [
        {name: "Philippine Red Cross", url: "https://redcross.org.ph/"},
        {name: "IFRC — Philippines", url: "https://www.ifrc.org/national-societies-directory/philippine-red-cross"}
    ]
},

{
    id: "nepal-floods-2026",
    name: "Nepal Floods and Landslides — 2026",
    primaryCategory: "disaster",
    categories: ["disaster", "humanitarian", "displacement"],
    coordinates: [28.2, 84.0],
    lastUpdated: "October 2026",
    overview: "Heavy rainfall during Nepal's monsoon season has caused flooding and landslides affecting communities and infrastructure.",
    currentSituation: "Flooding and landslides have damaged roads and other infrastructure and led to evacuations and emergency response operations in affected areas.",
    actors: ["Government of Nepal", "Local authorities", "Emergency responders", "Humanitarian organizations"],
    humanitarianImpact: "Flooding and landslides have affected homes, transportation and livelihoods while creating temporary displacement and emergency shelter needs.",
    timeline: [
        {date: "2026 monsoon season", event: "Heavy rainfall causes flooding and landslides in Nepal."},
        {date: "October 2026", event: "Further heavy rainfall produces additional flooding, infrastructure damage and evacuations."}
    ],
    sources: [
        {name: "ReliefWeb — Nepal", url: "https://reliefweb.int/country/npl"},
        {name: "Nepal Red Cross Society", url: "https://nrcs.org/"}
    ],
    aid: [
        {name: "Nepal Red Cross Society", url: "https://nrcs.org/"},
        {name: "IFRC — Nepal", url: "https://www.ifrc.org/national-societies-directory/nepal-red-cross-society"}
    ]
},

{
    id: "colombia-earthquake-2026",
    name: "Colombia Earthquake — 2026",
    primaryCategory: "disaster",
    categories: ["disaster", "humanitarian"],
    coordinates: [4.6, -74.1],
    lastUpdated: "September 30, 2026",
    overview: "A significant earthquake affected parts of Colombia in 2026, prompting damage assessments and emergency response operations.",
    currentSituation: "Authorities and emergency organizations have assessed affected communities and infrastructure following the earthquake.",
    actors: ["Colombian authorities", "Emergency responders", "Affected communities"],
    humanitarianImpact: "Earthquakes can damage homes and infrastructure, interrupt essential services and create temporary shelter and emergency assistance needs.",
    timeline: [
        {date: "2026", event: "An earthquake affects parts of Colombia."},
        {date: "2026", event: "Authorities conduct emergency assessments and response operations."}
    ],
    sources: [
        {name: "USGS — Earthquake Hazards Program", url: "https://earthquake.usgs.gov/"},
        {name: "ReliefWeb — Colombia", url: "https://reliefweb.int/country/col"}
    ],
    aid: [
        {name: "Colombian Red Cross", url: "https://www.cruzrojacolombiana.org/"},
        {name: "IFRC — Colombia", url: "https://www.ifrc.org/national-societies-directory/colombian-red-cross-society"}
    ]
},
{
    id: "madagascar-cyclones-2026",
    name: "Madagascar Cyclones — 2026",
    primaryCategory: "disaster",
    categories: ["disaster", "humanitarian", "displacement"],
    coordinates: [-19.0, 46.7],
    lastUpdated: "September 30, 2026",
    overview: "Madagascar has faced destructive tropical cyclones and severe weather that have affected communities, homes, agriculture and infrastructure.",
    currentSituation: "Affected communities continue recovering from storm damage while humanitarian organizations and authorities support shelter, food, water and other needs.",
    actors: ["Government of Madagascar", "Local authorities", "Emergency responders", "Humanitarian organizations"],
    humanitarianImpact: "Cyclones and flooding can destroy homes, damage crops and infrastructure and temporarily displace affected communities.",
    timeline: [
        {date: "2026", event: "Tropical cyclones and severe weather affect communities in Madagascar."},
        {date: "2026", event: "Emergency response and recovery operations support affected areas."}
    ],
    sources: [
        {name: "ReliefWeb — Madagascar", url: "https://reliefweb.int/country/mdg"},
        {name: "IFRC — Madagascar", url: "https://www.ifrc.org/national-societies-directory/malagasy-red-cross-society"}
    ],
    aid: [
        {name: "Malagasy Red Cross Society", url: "https://www.ifrc.org/national-societies-directory/malagasy-red-cross-society"},
        {name: "UNICEF — Madagascar", url: "https://www.unicef.org/madagascar/"}
    ]
},

{
    id: "mozambique-floods-2026",
    name: "Mozambique Floods — 2026",
    primaryCategory: "disaster",
    categories: ["disaster", "humanitarian", "displacement"],
    coordinates: [-18.5, 35.0],
    lastUpdated: "September 30, 2026",
    overview: "Flooding and severe weather have affected communities in Mozambique during 2026, adding to existing humanitarian pressures in the country.",
    currentSituation: "Affected communities continue dealing with damage to homes, infrastructure and livelihoods while emergency and humanitarian organizations provide assistance.",
    actors: ["Government of Mozambique", "Local authorities", "Emergency responders", "Humanitarian organizations"],
    humanitarianImpact: "Flooding can force people from their homes, damage crops and infrastructure and disrupt access to food, clean water, health care and transportation.",
    timeline: [
        {date: "2026", event: "Heavy rainfall and flooding affect parts of Mozambique."},
        {date: "2026", event: "Emergency response and recovery operations continue in affected communities."}
    ],
    sources: [
        {name: "ReliefWeb — Mozambique", url: "https://reliefweb.int/country/moz"},
        {name: "UN OCHA — Mozambique", url: "https://www.unocha.org/mozambique"}
    ],
    aid: [
        {name: "Mozambique Red Cross", url: "https://www.ifrc.org/national-societies-directory/mozambique-red-cross-society"},
        {name: "UNICEF — Mozambique", url: "https://www.unicef.org/mozambique/"}
    ]
},

{
    id: "lebanon-2026",
    name: "Lebanon Humanitarian and Security Crisis",
    primaryCategory: "humanitarian",
    categories: ["conflict", "humanitarian", "displacement"],
    coordinates: [33.9, 35.8],
    lastUpdated: "September 30, 2026",
    overview: "Lebanon faces overlapping security, economic and humanitarian pressures, including the effects of regional conflict and displacement.",
    currentSituation: "Communities continue to face insecurity and humanitarian needs alongside economic pressures and damage from previous fighting.",
    actors: ["Lebanese authorities", "Hezbollah", "Israel", "Affected civilian communities"],
    humanitarianImpact: "Conflict-related damage and displacement have affected communities while economic conditions continue to limit access to essential services for vulnerable households.",
    timeline: [
        {date: "2019", event: "Lebanon enters a severe economic and financial crisis."},
        {date: "October 2023", event: "Cross-border fighting between Israel and Hezbollah escalates following the outbreak of the Israel–Gaza war."},
        {date: "2024", event: "Fighting intensifies and causes widespread displacement in Lebanon."},
        {date: "2025–2026", event: "Humanitarian and security pressures continue."}
    ],
    sources: [
        {name: "UN OCHA — Lebanon", url: "https://www.unocha.org/lebanon"},
        {name: "UNHCR — Lebanon", url: "https://www.unhcr.org/where-we-work/countries/lebanon"}
    ],
    aid: [
        {name: "Lebanese Red Cross", url: "https://www.redcross.org.lb/"},
        {name: "UNHCR — Lebanon", url: "https://www.unhcr.org/where-we-work/countries/lebanon"}
    ]
},

{
    id: "iran-2026",
    name: "Iran Regional Security Crisis",
    primaryCategory: "conflict",
    categories: ["conflict", "humanitarian"],
    coordinates: [32.4, 53.7],
    lastUpdated: "September 30, 2026",
    overview: "Iran remains a central actor in regional security tensions involving Israel, the United States and armed groups across the Middle East.",
    currentSituation: "Regional tensions and the risk of direct military escalation continue to affect Iran and neighboring countries.",
    actors: ["Iran", "Israel", "United States", "Regional armed groups"],
    humanitarianImpact: "Military escalation can threaten civilians and infrastructure and disrupt transportation, economic activity and access to essential services.",
    timeline: [
        {date: "2023–2024", event: "Regional tensions increase during the Israel–Gaza war."},
        {date: "2024", event: "Iran and Israel conduct direct attacks against one another during periods of escalation."},
        {date: "2025–2026", event: "Regional security tensions and risks of renewed escalation continue."}
    ],
    sources: [
        {name: "UN — Middle East", url: "https://www.un.org/sg/en/content/sg/press-encounter"},
        {name: "ICRC — Iran", url: "https://www.icrc.org/en/where-we-work/iran"}
    ],
    aid: [
        {name: "Iranian Red Crescent Society", url: "https://en.rcs.ir/"},
        {name: "ICRC — Iran", url: "https://www.icrc.org/en/where-we-work/iran"}
    ]
},

{
    id: "colombia-conflict",
    name: "Colombia Armed Conflict",
    primaryCategory: "conflict",
    categories: ["conflict", "humanitarian", "displacement"],
    coordinates: [4.5, -74.0],
    lastUpdated: "September 30, 2026",
    overview: "Colombia continues to experience violence involving armed groups despite the 2016 peace agreement that ended the government's conflict with the main FARC organization.",
    currentSituation: "Armed groups continue competing for territorial control in several regions, causing violence, confinement and displacement among civilian communities.",
    actors: ["Colombian security forces", "ELN", "FARC dissident groups", "Other armed and criminal organizations"],
    humanitarianImpact: "Violence continues to cause displacement, confinement and threats against civilians, particularly in rural and marginalized communities.",
    timeline: [
        {date: "1960s–2016", event: "Colombia experiences decades of armed conflict involving the government, guerrilla groups and paramilitary organizations."},
        {date: "2016", event: "The Colombian government and FARC sign a peace agreement."},
        {date: "2017–2025", event: "Other armed groups and dissident factions continue operating."},
        {date: "2026", event: "Violence and displacement continue in conflict-affected regions."}
    ],
    sources: [
        {name: "ICRC — Colombia", url: "https://www.icrc.org/en/where-we-work/colombia"},
        {name: "UNHCR — Colombia", url: "https://www.unhcr.org/where-we-work/countries/colombia"}
    ],
    aid: [
        {name: "ICRC — Colombia", url: "https://www.icrc.org/en/where-we-work/colombia"},
        {name: "UNHCR — Colombia", url: "https://www.unhcr.org/where-we-work/countries/colombia"}
    ]
},

{
    id: "chad-humanitarian",
    name: "Chad Humanitarian Crisis",
    primaryCategory: "humanitarian",
    categories: ["humanitarian", "displacement"],
    coordinates: [15.5, 18.7],
    lastUpdated: "September 30, 2026",
    overview: "Chad faces food insecurity, climate shocks and displacement while hosting large numbers of refugees from neighboring conflicts, particularly Sudan.",
    currentSituation: "The war in Sudan continues to drive refugees into eastern Chad, placing additional pressure on communities, humanitarian services and already limited resources.",
    actors: ["Government of Chad", "Refugees and displaced communities", "Humanitarian organizations"],
    humanitarianImpact: "Refugee arrivals, food insecurity and limited access to essential services have created significant humanitarian needs in eastern Chad and other vulnerable areas.",
    timeline: [
        {date: "2023", event: "War begins in Sudan and large numbers of refugees flee into Chad."},
        {date: "2024–2025", event: "Refugee arrivals continue while humanitarian resources face increasing pressure."},
        {date: "2026", event: "Chad continues hosting people displaced by regional conflict."}
    ],
    sources: [
        {name: "UNHCR — Chad", url: "https://www.unhcr.org/where-we-work/countries/chad"},
        {name: "WFP — Chad", url: "https://www.wfp.org/countries/chad"}
    ],
    aid: [
        {name: "UNHCR — Chad", url: "https://www.unhcr.org/where-we-work/countries/chad"},
        {name: "WFP — Chad", url: "https://www.wfp.org/countries/chad"}
    ]
},

{
    id: "cameroon-humanitarian",
    name: "Cameroon Humanitarian Crisis",
    primaryCategory: "humanitarian",
    categories: ["conflict", "humanitarian", "displacement"],
    coordinates: [5.7, 12.7],
    lastUpdated: "September 30, 2026",
    overview: "Cameroon faces multiple humanitarian emergencies, including violence in the Northwest and Southwest regions and insecurity linked to armed groups in the Far North.",
    currentSituation: "Violence and insecurity continue to affect civilians in several parts of Cameroon while humanitarian organizations respond to displacement and other needs.",
    actors: ["Cameroonian security forces", "Anglophone separatist groups", "Boko Haram and Islamic State-linked militants", "Affected communities"],
    humanitarianImpact: "Conflict and insecurity have displaced people inside Cameroon and across borders while disrupting education, health care and livelihoods.",
    timeline: [
        {date: "2014–2015", event: "Boko Haram violence increasingly affects Cameroon's Far North."},
        {date: "2016–2017", event: "Political protests in the Northwest and Southwest develop into armed conflict."},
        {date: "2018–2025", event: "Violence and displacement continue in multiple regions."},
        {date: "2026", event: "Humanitarian and security challenges remain unresolved."}
    ],
    sources: [
        {name: "UN OCHA — Cameroon", url: "https://www.unocha.org/cameroon"},
        {name: "UNHCR — Cameroon", url: "https://www.unhcr.org/where-we-work/countries/cameroon"}
    ],
    aid: [
        {name: "UNHCR — Cameroon", url: "https://www.unhcr.org/where-we-work/countries/cameroon"},
        {name: "ICRC — Cameroon", url: "https://www.icrc.org/en/where-we-work/cameroon"}
    ]
},
{
    id: "kenya-humanitarian",
    name: "Kenya Humanitarian Crisis",
    primaryCategory: "humanitarian",
    categories: ["humanitarian", "displacement"],
    coordinates: [0.5, 37.8],
    lastUpdated: "September 30, 2026",
    overview: "Kenya faces recurring humanitarian pressures linked to drought, flooding, food insecurity and regional displacement.",
    currentSituation: "Climate shocks continue to affect vulnerable communities while Kenya also hosts refugees and asylum seekers from conflicts elsewhere in East Africa.",
    actors: ["Government of Kenya", "Affected communities", "Refugees and asylum seekers", "Humanitarian organizations"],
    humanitarianImpact: "Drought and flooding can damage livelihoods and increase food insecurity, while refugee-hosting areas face additional pressure on services and resources.",
    timeline: [
        {date: "2020–2023", event: "Severe drought affects Kenya and other countries in the Horn of Africa."},
        {date: "2023–2024", event: "Heavy rainfall and flooding affect communities after prolonged drought."},
        {date: "2025–2026", event: "Climate-related humanitarian needs and refugee pressures continue."}
    ],
    sources: [
        {name: "UNHCR — Kenya", url: "https://www.unhcr.org/where-we-work/countries/kenya"},
        {name: "WFP — Kenya", url: "https://www.wfp.org/countries/kenya"}
    ],
    aid: [
        {name: "Kenya Red Cross Society", url: "https://www.redcross.or.ke/"},
        {name: "UNHCR — Kenya", url: "https://www.unhcr.org/where-we-work/countries/kenya"}
    ]
},

{
    id: "venezuela-displacement",
    name: "Venezuela Displacement Crisis",
    primaryCategory: "displacement",
    categories: ["humanitarian", "displacement"],
    coordinates: [7.0, -66.0],
    lastUpdated: "September 30, 2026",
    overview: "Millions of Venezuelans have left the country during a prolonged economic, political and humanitarian crisis, creating one of the world's largest international displacement situations.",
    currentSituation: "Venezuelan refugees and migrants continue living across Latin America and the Caribbean while host countries and humanitarian organizations support access to documentation, employment, education, health care and other services.",
    actors: ["Venezuelan refugees and migrants", "Host governments", "Humanitarian organizations"],
    humanitarianImpact: "Millions of Venezuelans live outside their country, and vulnerable migrants and refugees can face poverty, discrimination, irregular status and limited access to services.",
    timeline: [
        {date: "2015–2018", event: "Migration from Venezuela increases sharply amid economic and political crisis."},
        {date: "2019–2022", event: "The number of Venezuelans living abroad continues to rise."},
        {date: "2023–2026", event: "Regional governments and humanitarian organizations continue supporting Venezuelan refugees and migrants."}
    ],
    sources: [
        {name: "R4V — Venezuelan Refugees and Migrants", url: "https://www.r4v.info/"},
        {name: "UNHCR — Venezuela Situation", url: "https://www.unhcr.org/emergencies/venezuela-situation"}
    ],
    aid: [
        {name: "UNHCR — Venezuela Situation", url: "https://www.unhcr.org/emergencies/venezuela-situation"},
        {name: "IOM — Venezuela Response", url: "https://www.iom.int/venezuela"}
    ]
},

{
    id: "nigeria-displacement",
    name: "Nigeria Displacement and Security Crisis",
    primaryCategory: "displacement",
    categories: ["conflict", "humanitarian", "displacement"],
    coordinates: [9.1, 8.7],
    lastUpdated: "September 30, 2026",
    overview: "Nigeria faces multiple security and humanitarian emergencies involving insurgency in the northeast, armed violence in other regions and large-scale internal displacement.",
    currentSituation: "Violence involving jihadist groups, criminal organizations and communal conflicts continues to affect civilians in several parts of Nigeria.",
    actors: ["Nigerian security forces", "Boko Haram", "Islamic State West Africa Province", "Other armed groups"],
    humanitarianImpact: "Violence has displaced large numbers of people while food insecurity and limited access to health care, education and livelihoods remain serious concerns in affected areas.",
    timeline: [
        {date: "2009", event: "Boko Haram insurgency intensifies in northeastern Nigeria."},
        {date: "2015–2020", event: "Conflict causes extensive displacement across northeastern Nigeria and the Lake Chad region."},
        {date: "2021–2025", event: "Multiple armed groups and criminal networks continue attacks in different parts of Nigeria."},
        {date: "2026", event: "Violence, displacement and humanitarian needs continue."}
    ],
    sources: [
        {name: "UNHCR — Nigeria", url: "https://www.unhcr.org/where-we-work/countries/nigeria"},
        {name: "UN OCHA — Nigeria", url: "https://www.unocha.org/nigeria"}
    ],
    aid: [
        {name: "UNHCR — Nigeria", url: "https://www.unhcr.org/where-we-work/countries/nigeria"},
        {name: "ICRC — Nigeria", url: "https://www.icrc.org/en/where-we-work/nigeria"}
    ]
},

{
    id: "rohingya-bangladesh",
    name: "Rohingya Refugee Crisis",
    primaryCategory: "displacement",
    categories: ["humanitarian", "displacement"],
    coordinates: [21.2, 92.2],
    lastUpdated: "September 30, 2026",
    overview: "Bangladesh hosts a large population of Rohingya refugees who fled persecution and violence in Myanmar, particularly during the mass displacement of 2017.",
    currentSituation: "Rohingya refugees remain concentrated in camps around Cox's Bazar while insecurity in Myanmar prevents safe, voluntary and sustainable large-scale returns.",
    actors: ["Rohingya refugees", "Government of Bangladesh", "Myanmar authorities", "Humanitarian organizations"],
    humanitarianImpact: "Refugees remain dependent on humanitarian assistance for food, shelter, health care, education and protection while funding shortages threaten services.",
    timeline: [
        {date: "August 2017", event: "Violence in Myanmar's Rakhine State drives a massive Rohingya refugee movement into Bangladesh."},
        {date: "2018–2023", event: "Large refugee camps remain established around Cox's Bazar."},
        {date: "2024–2026", event: "Conflict in Myanmar and funding shortages complicate prospects for safe return and humanitarian assistance."}
    ],
    sources: [
        {name: "UNHCR — Rohingya Emergency", url: "https://www.unhcr.org/emergencies/rohingya-emergency"},
        {name: "WFP — Rohingya Refugee Response", url: "https://www.wfp.org/emergencies/rohingya-refugee-crisis"}
    ],
    aid: [
        {name: "UNHCR — Rohingya Emergency", url: "https://www.unhcr.org/emergencies/rohingya-emergency"},
        {name: "WFP — Rohingya Response", url: "https://www.wfp.org/emergencies/rohingya-refugee-crisis"}
    ]
},

{
    id: "venezuela-earthquake-2026",
    name: "Venezuela Earthquake — 2026",
    primaryCategory: "disaster",
    categories: ["disaster", "humanitarian"],
    coordinates: [8.0, -66.0],
    lastUpdated: "September 30, 2026",
    overview: "An earthquake affected parts of Venezuela in 2026, prompting authorities to assess possible damage and impacts.",
    currentSituation: "Authorities and emergency organizations have monitored affected communities and infrastructure following the earthquake.",
    actors: ["Venezuelan authorities", "Emergency responders", "Affected communities"],
    humanitarianImpact: "Earthquakes can damage homes and infrastructure and temporarily disrupt transportation and essential services.",
    timeline: [
        {date: "2026", event: "An earthquake affects Venezuela."},
        {date: "2026", event: "Authorities assess affected areas and infrastructure."}
    ],
    sources: [
        {name: "USGS — Earthquake Hazards Program", url: "https://earthquake.usgs.gov/"},
        {name: "ReliefWeb — Venezuela", url: "https://reliefweb.int/country/ven"}
    ],
    aid: [
        {name: "IFRC — Venezuela", url: "https://www.ifrc.org/national-societies-directory/venezuelan-red-cross"},
        {name: "UNICEF — Venezuela", url: "https://www.unicef.org/venezuela/"}
    ]
},

{
    id: "vietnam-floods-2026",
    name: "Vietnam Floods — 2026",
    primaryCategory: "disaster",
    categories: ["disaster", "humanitarian", "displacement"],
    coordinates: [16.0, 107.5],
    lastUpdated: "September 30, 2026",
    overview: "Severe rainfall and flooding have affected communities in Vietnam during 2026.",
    currentSituation: "Flood-affected communities have faced damage to homes, infrastructure and agriculture while emergency response and recovery operations continue.",
    actors: ["Government of Vietnam", "Local authorities", "Emergency responders", "Affected communities"],
    humanitarianImpact: "Flooding can force evacuations, damage homes and crops and interrupt transportation and essential services.",
    timeline: [
        {date: "2026", event: "Heavy rainfall causes flooding in parts of Vietnam."},
        {date: "2026", event: "Authorities and humanitarian organizations respond to affected communities."}
    ],
    sources: [
        {name: "ReliefWeb — Vietnam", url: "https://reliefweb.int/country/vnm"},
        {name: "IFRC — Vietnam", url: "https://www.ifrc.org/national-societies-directory/viet-nam-red-cross-society"}
    ],
    aid: [
        {name: "Viet Nam Red Cross Society", url: "https://www.ifrc.org/national-societies-directory/viet-nam-red-cross-society"},
        {name: "UNICEF — Vietnam", url: "https://www.unicef.org/vietnam/"}
    ]
},

{
    id: "libya-floods-2026",
    name: "Libya Flood and Recovery Crisis",
    primaryCategory: "disaster",
    categories: ["disaster", "humanitarian", "displacement"],
    coordinates: [32.7, 22.6],
    lastUpdated: "September 30, 2026",
    overview: "Communities in Libya continue facing flood risks and long-term recovery challenges following destructive flooding, including the catastrophic 2023 disaster in Derna.",
    currentSituation: "Recovery and reconstruction remain important concerns while political fragmentation and damaged infrastructure complicate disaster preparedness and humanitarian response.",
    actors: ["Libyan authorities", "Local authorities", "Emergency responders", "Humanitarian organizations"],
    humanitarianImpact: "Flooding and infrastructure damage have caused deaths, displacement, housing loss and long-term recovery needs.",
    timeline: [
        {date: "September 2023", event: "Storm Daniel causes catastrophic flooding in Derna after dam failures."},
        {date: "2024–2025", event: "Recovery and reconstruction continue in affected areas."},
        {date: "2026", event: "Flood preparedness and long-term recovery remain humanitarian concerns."}
    ],
    sources: [
        {name: "ReliefWeb — Libya", url: "https://reliefweb.int/country/lby"},
        {name: "UN OCHA — Libya", url: "https://www.unocha.org/libya"}
    ],
    aid: [
        {name: "Libyan Red Crescent", url: "https://www.ifrc.org/national-societies-directory/libyan-red-crescent"},
        {name: "UNHCR — Libya", url: "https://www.unhcr.org/where-we-work/countries/libya"}
    ]
},

// =====================================================
// NEW HUMANITARIAN / DISPLACEMENT ENTRIES — OCTOBER 2026
// =====================================================

{
    id: "burundi-refugee-crisis",
    name: "Burundi Refugee and Humanitarian Crisis",
    primaryCategory: "displacement",
    categories: ["humanitarian", "displacement"],
    coordinates: [-3.4, 29.9],
    lastUpdated: "October 12, 2026",
    overview: "Burundi is affected by regional displacement pressures and hosts people fleeing conflict in neighboring Democratic Republic of the Congo while Burundian refugees also remain in other countries.",
    currentSituation: "Instability in eastern Democratic Republic of the Congo has contributed to refugee movements into Burundi, increasing pressure on reception facilities, host communities and humanitarian services.",
    actors: ["Government of Burundi", "Refugees and asylum seekers", "Host communities", "Humanitarian organizations"],
    humanitarianImpact: "New refugee arrivals require shelter, food, clean water, health care and protection while host communities face additional pressure on limited resources.",
    timeline: [
        {date: "2015", event: "Political unrest in Burundi causes large-scale refugee movements into neighboring countries."},
        {date: "2022–2025", event: "Regional displacement continues as conflict intensifies in eastern Democratic Republic of the Congo."},
        {date: "2026", event: "Burundi continues receiving people fleeing regional conflict while humanitarian agencies support refugees and host communities."}
    ],
    sources: [
        {name: "UNHCR — Burundi", url: "https://www.unhcr.org/where-we-work/countries/burundi"},
        {name: "UNHCR — DR Congo Situation", url: "https://data.unhcr.org/en/situations/drc"}
    ],
    aid: [
        {name: "UNHCR — Burundi", url: "https://www.unhcr.org/where-we-work/countries/burundi"},
        {name: "WFP — Burundi", url: "https://www.wfp.org/countries/burundi"}
    ]
},

{
    id: "uganda-refugee-crisis",
    name: "Uganda Regional Refugee Crisis",
    primaryCategory: "displacement",
    categories: ["humanitarian", "displacement"],
    coordinates: [1.4, 32.3],
    lastUpdated: "October 12, 2026",
    overview: "Uganda hosts one of the world's largest refugee populations, including people displaced by conflicts in South Sudan, Democratic Republic of the Congo and Sudan.",
    currentSituation: "Refugees continue arriving from regional conflicts while humanitarian agencies and Ugandan host communities face significant funding and resource pressures.",
    actors: ["Government of Uganda", "Refugees and asylum seekers", "Host communities", "Humanitarian organizations"],
    humanitarianImpact: "Refugees require food, shelter, education, health care and protection while funding shortages place pressure on services available to refugees and host communities.",
    timeline: [
        {date: "2013–2016", event: "Conflict in South Sudan drives large refugee movements into Uganda."},
        {date: "2017–2022", event: "Uganda continues receiving refugees from South Sudan and Democratic Republic of the Congo."},
        {date: "2023–2026", event: "Regional conflicts continue generating new displacement while humanitarian funding remains strained."}
    ],
    sources: [
        {name: "UNHCR — Uganda", url: "https://www.unhcr.org/where-we-work/countries/uganda"},
        {name: "UNHCR — Uganda Operational Data", url: "https://data.unhcr.org/en/country/uga"}
    ],
    aid: [
        {name: "UNHCR — Uganda", url: "https://www.unhcr.org/where-we-work/countries/uganda"},
        {name: "WFP — Uganda", url: "https://www.wfp.org/countries/uganda"}
    ]
},

{
    id: "sahrawi-refugees-algeria",
    name: "Sahrawi Refugee Crisis in Algeria",
    primaryCategory: "displacement",
    categories: ["humanitarian", "displacement"],
    coordinates: [27.7, -8.1],
    lastUpdated: "October 12, 2026",
    overview: "Sahrawi refugees have lived for decades in camps near Tindouf in southwestern Algeria as the Western Sahara dispute remains unresolved.",
    currentSituation: "The refugee population remains dependent on humanitarian assistance in a harsh desert environment while the political dispute over Western Sahara continues.",
    actors: ["Sahrawi refugees", "Algerian authorities", "Polisario Front", "Humanitarian organizations"],
    humanitarianImpact: "Refugees depend heavily on international assistance for food, water, health care, shelter and other essential services.",
    timeline: [
        {date: "1975–1976", event: "Conflict over Western Sahara causes large numbers of Sahrawis to flee into Algeria."},
        {date: "1991", event: "A UN-backed ceasefire takes effect in Western Sahara."},
        {date: "2020", event: "Tensions and armed confrontation resume between Morocco and the Polisario Front."},
        {date: "2026", event: "Sahrawi refugees remain in camps near Tindouf while humanitarian needs continue."}
    ],
    sources: [
        {name: "UNHCR — Algeria", url: "https://www.unhcr.org/where-we-work/countries/algeria"},
        {name: "WFP — Algeria", url: "https://www.wfp.org/countries/algeria"}
    ],
    aid: [
        {name: "UNHCR — Algeria", url: "https://www.unhcr.org/where-we-work/countries/algeria"},
        {name: "WFP — Algeria", url: "https://www.wfp.org/countries/algeria"}
    ]
},

{
    id: "jordan-refugee-crisis",
    name: "Jordan Syrian Refugee Situation",
    primaryCategory: "displacement",
    categories: ["humanitarian", "displacement"],
    coordinates: [31.2, 36.5],
    lastUpdated: "October 12, 2026",
    overview: "Jordan has hosted large numbers of Syrian refugees since the Syrian conflict began in 2011, creating a long-term humanitarian and development challenge.",
    currentSituation: "Syrian refugees remain in Jordan even as political changes in Syria affect discussions about voluntary return. Humanitarian agencies continue supporting refugees and vulnerable host communities.",
    actors: ["Government of Jordan", "Syrian refugees", "Host communities", "Humanitarian organizations"],
    humanitarianImpact: "Many refugees continue to require support involving livelihoods, health care, education, housing and protection while funding constraints affect humanitarian programs.",
    timeline: [
        {date: "2011", event: "Conflict begins in Syria and refugees start arriving in Jordan."},
        {date: "2012", event: "Za'atari refugee camp opens in Jordan."},
        {date: "2013–2025", event: "Jordan continues hosting a large Syrian refugee population."},
        {date: "2026", event: "Humanitarian assistance and discussions about voluntary refugee returns continue."}
    ],
    sources: [
        {name: "UNHCR — Jordan", url: "https://www.unhcr.org/where-we-work/countries/jordan"},
        {name: "UNHCR — Syria Situation", url: "https://data.unhcr.org/en/situations/syria"}
    ],
    aid: [
        {name: "UNHCR — Jordan", url: "https://www.unhcr.org/where-we-work/countries/jordan"},
        {name: "WFP — Jordan", url: "https://www.wfp.org/countries/jordan"}
    ]
},
// =====================================================
// CIVIL UNREST — 2026
// =====================================================

{
    id: "france-civil-unrest-2026",
    name: "France Student and Labor Protests — 2026",
    primaryCategory: "unrest",
    categories: ["unrest"],
    coordinates: [48.8566, 2.3522],
    lastUpdated: "October 12, 2026",
    overview: "France has experienced demonstrations and strikes during 2026 involving students, workers and other groups protesting government policies and economic concerns.",
    currentSituation: "Demonstrations have continued in France, including student-led actions and labor protests. Some demonstrations have involved clashes or disruptions, while authorities have deployed police around protest sites.",
    actors: ["Student protesters", "Labor unions", "French government", "French police"],
    humanitarianImpact: "The unrest has caused transportation and education disruptions in affected areas, while clashes at some demonstrations have created public-safety concerns.",
    timeline: [
        {date: "2026", event: "Demonstrations and strikes take place over government policies and economic concerns."},
        {date: "September–October 2026", event: "Student and labor mobilization continues in several French cities."},
        {date: "October 2026", event: "Student protests and related disruptions remain active."}
    ],
    sources: [
        {name: "Associated Press — France", url: "https://apnews.com/hub/france"},
        {name: "Le Monde — France", url: "https://www.lemonde.fr/en/france/"}
    ],
    aid: []
},

{
    id: "belgium-civil-unrest-2026",
    name: "Belgium Anti-Austerity Protests — 2026",
    primaryCategory: "unrest",
    categories: ["unrest"],
    coordinates: [50.8503, 4.3517],
    lastUpdated: "October 12, 2026",
    overview: "Belgium has experienced demonstrations and strike actions opposing government economic and social policies, including proposed changes affecting pensions, public spending and working conditions.",
    currentSituation: "Labor unions and demonstrators continue organizing protests and strikes. Actions have affected transportation and other services, particularly around Brussels and other major cities.",
    actors: ["Belgian labor unions", "Protesters", "Belgian government", "Police"],
    humanitarianImpact: "The protests have primarily caused transportation, workplace and public-service disruptions rather than a large-scale humanitarian emergency.",
    timeline: [
        {date: "2025–2026", event: "Labor organizations organize demonstrations against proposed government reforms."},
        {date: "2026", event: "Strike actions disrupt transportation and public services."},
        {date: "October 2026", event: "Anti-austerity demonstrations and labor actions continue."}
    ],
    sources: [
        {name: "Reuters — Europe", url: "https://www.reuters.com/world/europe/"},
        {name: "Associated Press — Europe", url: "https://apnews.com/hub/europe"}
    ],
    aid: []
},

{
    id: "india-civil-unrest-2026",
    name: "India Political and Electoral Protests — 2026",
    primaryCategory: "unrest",
    categories: ["unrest"],
    coordinates: [28.6139, 77.2090],
    lastUpdated: "October 12, 2026",
    overview: "India has experienced political demonstrations during 2026 involving opposition parties, activists and other groups raising concerns about elections, government policy and political accountability.",
    currentSituation: "Political demonstrations continue to occur in parts of India. Protest activity varies by state and issue, and demonstrations have included marches, rallies and confrontations with police.",
    actors: ["Political opposition groups", "Civil society protesters", "Indian authorities", "Police"],
    humanitarianImpact: "Demonstrations have caused localized disruptions and, in some cases, confrontations between protesters and security forces. The situation does not constitute a nationwide humanitarian emergency.",
    timeline: [
        {date: "2026", event: "Political groups and activists organize demonstrations over electoral and government issues."},
        {date: "2026", event: "Protests and rallies take place in multiple locations."},
        {date: "October 2026", event: "Political protest activity continues."}
    ],
    sources: [
        {name: "Reuters — India", url: "https://www.reuters.com/world/india/"},
        {name: "Associated Press — India", url: "https://apnews.com/hub/india"}
    ],
    aid: []
},

{
    id: "south-africa-civil-unrest-2026",
    name: "South Africa Anti-Migrant Protests — 2026",
    primaryCategory: "unrest",
    categories: ["unrest", "humanitarian"],
    coordinates: [-26.2041, 28.0473],
    lastUpdated: "October 12, 2026",
    overview: "South Africa has experienced demonstrations and organized actions targeting immigration and the presence of foreign nationals, raising concerns about xenophobia and the safety of migrant and refugee communities.",
    currentSituation: "Anti-migrant mobilization has affected some communities and public services. Human-rights and humanitarian organizations have raised concerns about intimidation, discrimination and the potential for violence against migrants.",
    actors: ["Anti-migrant groups", "Migrant and refugee communities", "South African authorities", "Civil society organizations"],
    humanitarianImpact: "Migrants and refugees can face intimidation, discrimination and barriers to services during periods of anti-migrant unrest. Previous episodes of xenophobic violence in South Africa increase concern about escalation.",
    timeline: [
        {date: "2008–2019", event: "South Africa experiences several major episodes of xenophobic violence and anti-migrant unrest."},
        {date: "2020–2025", event: "Immigration remains a prominent political and social issue."},
        {date: "2026", event: "Anti-migrant demonstrations and organized actions continue in some communities."},
        {date: "October 2026", event: "Concerns continue over anti-migrant mobilization and its effects on foreign nationals."}
    ],
    sources: [
        {name: "UNHCR — South Africa", url: "https://www.unhcr.org/where-we-work/countries/south-africa"},
        {name: "Human Rights Watch — South Africa", url: "https://www.hrw.org/africa/south-africa"}
    ],
    aid: [
        {name: "UNHCR — South Africa", url: "https://www.unhcr.org/where-we-work/countries/south-africa"}
    ]
},

{
    id: "iran-civil-unrest-2026",
    name: "Iran Political Protests and Crackdown — 2026",
    primaryCategory: "unrest",
    categories: ["unrest", "humanitarian"],
    coordinates: [35.6892, 51.3890],
    lastUpdated: "October 12, 2026",
    overview: "Iran continues to experience political and social tensions involving opposition to government policies, restrictions on civil liberties and demands for political and social change.",
    currentSituation: "Political dissent and protest-related activity continue amid restrictions on assembly and expression. Human-rights organizations continue reporting arrests and other measures directed at activists and critics of the government.",
    actors: ["Iranian protesters and activists", "Government of Iran", "Iranian security forces", "Civil society organizations"],
    humanitarianImpact: "Arrests, restrictions on expression and assembly, and reported abuses against activists and protesters remain human-rights concerns.",
    timeline: [
        {date: "September 2022", event: "Nationwide protests begin following the death of Mahsa Jina Amini in morality-police custody."},
        {date: "2022–2023", event: "Authorities carry out a broad crackdown as demonstrations spread across Iran."},
        {date: "2024–2025", event: "Political dissent and enforcement of restrictions on civil liberties continue."},
        {date: "2026", event: "Political tensions, protest-related activity and government restrictions continue."}
    ],
    sources: [
        {name: "UN Human Rights — Iran", url: "https://www.ohchr.org/en/countries/iran-islamic-republic"},
        {name: "Amnesty International — Iran", url: "https://www.amnesty.org/en/location/middle-east-and-north-africa/middle-east/iran/"}
    ],
    aid: []
}

];
