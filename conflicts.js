// ==========================================
// CONFLICT ATLAS — CRISIS DATABASE
// 20 UNIQUE ENTRIES
// ==========================================

const conflicts = [

    // ======================================
    // 1. UKRAINE
    // ======================================

    {
        id: "ukraine",
        name: "War in Ukraine",

        primaryCategory: "conflict",

        categories: [
            "conflict",
            "humanitarian",
            "displacement"
        ],

        coordinates: [49.0, 32.0],

        lastUpdated: "September 29, 2026",

        overview:
            "Russia's full-scale invasion of Ukraine began in February 2022, expanding the conflict that began in 2014. Fighting continues between Russian and Ukrainian forces, alongside frequent missile and drone attacks.",

        currentSituation:
            "Active fighting continues and aerial attacks regularly affect Ukrainian cities and infrastructure. Humanitarian organizations continue to respond to displacement, damage to homes and essential services, and risks faced by civilians.",

        actors: [
            "Ukraine",
            "Russian Federation"
        ],

        humanitarianImpact:
            "UNHCR estimated in February 2026 that about 10.8 million people inside Ukraine required humanitarian assistance and about 3.7 million people were internally displaced.",

        timeline: [
            {
                date: "2014",
                event: "Conflict begins in eastern Ukraine following Russia's annexation of Crimea and fighting in the Donbas."
            },
            {
                date: "February 24, 2022",
                event: "Russia launches a full-scale invasion of Ukraine."
            },
            {
                date: "2022–2025",
                event: "Large-scale fighting, territorial changes and repeated attacks affect communities across Ukraine."
            },
            {
                date: "September 2026",
                event: "Fighting and Russian missile and drone attacks continue."
            }
        ],

        sources: [
            {
                name: "UNHCR — Ukraine",
                url: "https://www.unhcr.org/ua/en"
            },
            {
                name: "OCHA — Ukraine",
                url: "https://www.unocha.org/ukraine"
            },
            {
                name: "Reuters — Ukraine reporting",
                url: "https://www.reuters.com/world/europe/"
            }
        ],

        aid: [
            {
                name: "UNHCR — Ukraine humanitarian response",
                url: "https://www.unhcr.org/ua/en"
            },
            {
                name: "ICRC — Ukraine",
                url: "https://www.icrc.org/en/where-we-work/ukraine"
            }
        ]
    },


    // ======================================
    // 2. SUDAN
    // ======================================

    {
        id: "sudan",
        name: "War in Sudan",

        primaryCategory: "conflict",

        categories: [
            "conflict",
            "humanitarian",
            "displacement"
        ],

        coordinates: [15.5, 30.5],

        lastUpdated: "September 29, 2026",

        overview:
            "Sudan has been at war since April 2023, when fighting broke out between the Sudanese Armed Forces (SAF) and the paramilitary Rapid Support Forces (RSF). The conflict followed a power struggle during Sudan's attempted political transition.",

        currentSituation:
            "Fighting remains active in several parts of Sudan. Darfur and the Kordofan regions remain heavily affected, while drones and other long-range attacks have become increasingly important in the conflict.",

        actors: [
            "Sudanese Armed Forces (SAF)",
            "Rapid Support Forces (RSF)"
        ],

        humanitarianImpact:
            "UNHCR reported approximately 6.4 million internally displaced people inside Sudan in September 2026, while the wider Sudan displacement situation affects millions more across neighboring countries.",

        timeline: [
            {
                date: "April 15, 2023",
                event: "Large-scale fighting begins between the SAF and RSF."
            },
            {
                date: "2023–2024",
                event: "Fighting expands beyond Khartoum, including severe violence in Darfur."
            },
            {
                date: "2025–2026",
                event: "Territorial control continues to shift and long-range drone warfare expands."
            },
            {
                date: "September 2026",
                event: "Fighting and displacement continue, including in Darfur and the Kordofans."
            }
        ],

        sources: [
            {
                name: "UNHCR — Sudan Situation",
                url: "https://data.unhcr.org/en/situations/sudansituation"
            },
            {
                name: "World Food Programme — Sudan",
                url: "https://www.wfp.org/emergencies/sudan"
            },
            {
                name: "UNICEF — Sudan",
                url: "https://www.unicef.org/sudan/"
            }
        ],

        aid: [
            {
                name: "ICRC — Sudan",
                url: "https://www.icrc.org/en/where-we-work/sudan"
            },
            {
                name: "World Food Programme — Sudan",
                url: "https://www.wfp.org/emergencies/sudan"
            },
            {
                name: "UNICEF — Sudan",
                url: "https://www.unicef.org/sudan/"
            }
        ]
    },


    // ======================================
    // 3. ISRAEL / GAZA
    // ======================================

    {
        id: "gaza-israel",
        name: "Israel–Gaza Conflict",

        primaryCategory: "conflict",

        categories: [
            "conflict",
            "humanitarian",
            "displacement"
        ],

        coordinates: [31.5, 34.7],

        lastUpdated: "September 29, 2026",

        overview:
            "The current Israel–Gaza war began after the Hamas-led attacks on Israel on October 7, 2023 and Israel's subsequent military campaign in Gaza. The conflict has caused extensive casualties, destruction and displacement.",

        currentSituation:
            "Military activity and strikes continue to affect Gaza. Humanitarian agencies report severe constraints involving shelter, health care, water, sanitation and access to essential supplies.",

        actors: [
            "Israel",
            "Hamas",
            "Other Palestinian armed groups"
        ],

        humanitarianImpact:
            "OCHA reported in September 2026 that humanitarian needs in Gaza remained overwhelming. Shelter assessments indicated that most of the population required urgent shelter or basic household assistance.",

        timeline: [
            {
                date: "October 7, 2023",
                event: "Hamas-led armed groups attack Israel; Israel subsequently launches a major military campaign in Gaza."
            },
            {
                date: "2023–2025",
                event: "Large-scale fighting causes extensive casualties, destruction and displacement."
            },
            {
                date: "2026",
                event: "Humanitarian needs remain severe amid continuing military activity and access constraints."
            }
        ],

        sources: [
            {
                name: "UN OCHA — Occupied Palestinian Territory",
                url: "https://www.ochaopt.org/"
            },
            {
                name: "ICRC — Israel and occupied territories",
                url: "https://www.icrc.org/en/where-we-work/israel-and-occupied-territories"
            }
        ],

        aid: [
            {
                name: "ICRC — Humanitarian response",
                url: "https://www.icrc.org/en/where-we-work/israel-and-occupied-territories"
            },
            {
                name: "UNICEF — State of Palestine",
                url: "https://www.unicef.org/sop/"
            }
        ]
    },


    // ======================================
    // 4. EASTERN DRC
    // ======================================

    {
        id: "drc",
        name: "Eastern DR Congo Conflict",

        primaryCategory: "conflict",

        categories: [
            "conflict",
            "humanitarian",
            "displacement"
        ],

        coordinates: [-1.7, 29.2],

        lastUpdated: "September 29, 2026",

        overview:
            "Eastern Democratic Republic of the Congo has experienced decades of conflict involving government forces and numerous armed groups. Fighting intensified significantly during the 2020s, particularly in North Kivu and South Kivu.",

        currentSituation:
            "Persistent insecurity and armed-group activity continue in eastern DRC despite diplomatic efforts. Violence continues to drive new and repeated displacement.",

        actors: [
            "Democratic Republic of the Congo armed forces",
            "AFC/M23",
            "Other armed groups operating in eastern DRC"
        ],

        humanitarianImpact:
            "UNHCR describes the DRC as one of the world's most complex displacement crises. Millions remain displaced, while conflict, food insecurity and disease outbreaks continue to affect civilians.",

        timeline: [
            {
                date: "1990s–present",
                event: "Eastern DRC experiences prolonged cycles of conflict involving numerous armed groups."
            },
            {
                date: "2022–2025",
                event: "M23 expands military operations in eastern DRC."
            },
            {
                date: "2026",
                event: "Conflict and insecurity continue to drive displacement despite peace initiatives."
            }
        ],

        sources: [
            {
                name: "UNHCR — DR Congo Emergency",
                url: "https://www.unhcr.org/emergencies/dr-congo-emergency"
            }
        ],

        aid: [
            {
                name: "UNHCR — DR Congo",
                url: "https://www.unhcr.org/emergencies/dr-congo-emergency"
            },
            {
                name: "ICRC — Democratic Republic of the Congo",
                url: "https://www.icrc.org/en/where-we-work/democratic-republic-congo"
            }
        ]
    },


    // ======================================
    // 5. MYANMAR
    // ======================================

    {
        id: "myanmar",
        name: "Myanmar Civil Conflict",

        primaryCategory: "conflict",

        categories: [
            "conflict",
            "humanitarian",
            "displacement"
        ],

        coordinates: [19.5, 96.5],

        lastUpdated: "September 29, 2026",

        overview:
            "Myanmar has experienced nationwide armed conflict since the military seized power in a February 2021 coup. The military faces resistance from numerous armed organizations and resistance forces.",

        currentSituation:
            "Fighting continues across several regions of Myanmar. Airstrikes, artillery, ground fighting and restrictions on humanitarian access continue to affect civilians.",

        actors: [
            "Myanmar military",
            "Ethnic armed organizations",
            "People's Defence Forces and other resistance groups"
        ],

        humanitarianImpact:
            "More than 3.5 million people have been displaced. Humanitarian organizations continue to provide food, health, water, protection and other assistance amid significant access constraints.",

        timeline: [
            {
                date: "February 1, 2021",
                event: "Myanmar's military seizes power in a coup."
            },
            {
                date: "2021–2023",
                event: "Armed resistance expands across the country."
            },
            {
                date: "2023–2026",
                event: "Multiple armed organizations conduct major operations against the military."
            },
            {
                date: "September 2026",
                event: "Nationwide conflict and civilian displacement continue."
            }
        ],

        sources: [
            {
                name: "United Nations — Myanmar",
                url: "https://myanmar.un.org/"
            },
            {
                name: "UNHCR — Myanmar",
                url: "https://www.unhcr.org/where-we-work/countries/myanmar"
            }
        ],

        aid: [
            {
                name: "UNHCR — Myanmar",
                url: "https://www.unhcr.org/where-we-work/countries/myanmar"
            },
            {
                name: "ICRC — Myanmar",
                url: "https://www.icrc.org/en/where-we-work/myanmar"
            }
        ]
    },


    // ======================================
    // 6. YEMEN
    // ======================================

    {
        id: "yemen",
        name: "Yemen Humanitarian Crisis",

        primaryCategory: "humanitarian",

        categories: [
            "humanitarian",
            "displacement"
        ],

        coordinates: [15.5, 47.5],

        lastUpdated: "September 29, 2026",

        overview:
            "Yemen faces a prolonged humanitarian emergency shaped by years of armed conflict, economic deterioration, food insecurity and weakened essential services.",

        currentSituation:
            "Violence escalated again during 2026 in several areas, causing additional civilian casualties and displacement while humanitarian agencies face severe funding and access challenges.",

        actors: [
            "Internationally recognized Yemeni authorities and aligned forces",
            "Ansar Allah (Houthis)",
            "Other Yemeni political and armed groups"
        ],

        humanitarianImpact:
            "The United Nations estimated that 22.3 million people require humanitarian assistance and protection services in 2026, including about 5.2 million internally displaced people.",

        timeline: [
            {
                date: "2014–2015",
                event: "Conflict escalates after the Houthi movement takes control of Sana'a and a Saudi-led coalition intervenes."
            },
            {
                date: "2022",
                event: "A UN-mediated truce significantly reduces major cross-border fighting."
            },
            {
                date: "2026",
                event: "Renewed violence and displacement deepen humanitarian needs."
            }
        ],

        sources: [
            {
                name: "United Nations — Yemen",
                url: "https://yemen.un.org/"
            },
            {
                name: "UNHCR — Yemen",
                url: "https://www.unhcr.org/where-we-work/countries/yemen"
            }
        ],

        aid: [
            {
                name: "World Food Programme — Yemen",
                url: "https://www.wfp.org/countries/yemen"
            },
            {
                name: "UNICEF — Yemen",
                url: "https://www.unicef.org/yemen/"
            }
        ]
    },


    // ======================================
    // 7. AFGHANISTAN
    // ======================================

    {
        id: "afghanistan",
        name: "Afghanistan Humanitarian Crisis",

        primaryCategory: "humanitarian",

        categories: [
            "humanitarian",
            "displacement"
        ],

        coordinates: [33.9, 67.7],

        lastUpdated: "September 29, 2026",

        overview:
            "Afghanistan continues to face widespread humanitarian needs shaped by economic hardship, food insecurity, displacement, natural hazards and large-scale returns of Afghans from neighboring countries.",

        currentSituation:
            "Humanitarian agencies continue to respond to vulnerable communities, displaced people and returnees while funding and access constraints affect assistance.",

        actors: [
            "Afghan de facto authorities",
            "United Nations humanitarian agencies",
            "International and Afghan humanitarian organizations"
        ],

        humanitarianImpact:
            "Millions of Afghans continue to require humanitarian assistance, while large-scale returns and internal displacement place additional pressure on housing, services and livelihoods.",

        timeline: [
            {
                date: "August 2021",
                event: "The Taliban takes control of Kabul and becomes Afghanistan's de facto authority."
            },
            {
                date: "2022–2025",
                event: "Economic pressures, natural disasters and displacement contribute to continuing humanitarian needs."
            },
            {
                date: "2026",
                event: "Humanitarian agencies continue responding to vulnerable communities and returning Afghans."
            }
        ],

        sources: [
            {
                name: "UNHCR — Afghanistan",
                url: "https://www.unhcr.org/where-we-work/countries/afghanistan"
            },
            {
                name: "OCHA — Afghanistan",
                url: "https://www.unocha.org/afghanistan"
            }
        ],

        aid: [
            {
                name: "UNHCR — Afghanistan",
                url: "https://www.unhcr.org/where-we-work/countries/afghanistan"
            },
            {
                name: "World Food Programme — Afghanistan",
                url: "https://www.wfp.org/countries/afghanistan"
            }
        ]
    },


    // ======================================
    // 8. SYRIA
    // ======================================

    {
        id: "syria",
        name: "Syria Humanitarian Crisis",

        primaryCategory: "humanitarian",

        categories: [
            "humanitarian",
            "displacement"
        ],

        coordinates: [35.0, 38.5],

        lastUpdated: "September 29, 2026",

        overview:
            "Syria continues to face extensive humanitarian and displacement needs after years of conflict and political upheaval. Large numbers of refugees and internally displaced Syrians have begun returning, while millions remain displaced.",

        currentSituation:
            "Returns are occurring alongside continuing humanitarian needs, damaged infrastructure and limited basic services in many areas.",

        actors: [
            "Syrian authorities",
            "Local and regional armed actors",
            "United Nations and humanitarian organizations"
        ],

        humanitarianImpact:
            "UNHCR reported that about 15.6 million people required assistance as of March 2026, while approximately 5.5 million remained internally displaced.",

        timeline: [
            {
                date: "2011",
                event: "Conflict begins following anti-government protests."
            },
            {
                date: "2011–2024",
                event: "Years of war produce mass displacement and extensive infrastructure damage."
            },
            {
                date: "2025–2026",
                event: "Large-scale refugee and IDP returns occur while substantial humanitarian needs remain."
            }
        ],

        sources: [
            {
                name: "UNHCR — Syria",
                url: "https://www.unhcr.org/where-we-work/countries/syrian-arab-republic"
            },
            {
                name: "United Nations — Syria",
                url: "https://syria.un.org/"
            }
        ],

        aid: [
            {
                name: "UNHCR — Syria",
                url: "https://www.unhcr.org/where-we-work/countries/syrian-arab-republic"
            },
            {
                name: "UNICEF — Syria",
                url: "https://www.unicef.org/syria/"
            }
        ]
    },


    // ======================================
    // 9. SOMALIA
    // ======================================

    {
        id: "somalia",
        name: "Somalia Humanitarian and Displacement Crisis",

        primaryCategory: "humanitarian",

        categories: [
            "humanitarian",
            "displacement"
        ],

        coordinates: [5.2, 46.2],

        lastUpdated: "September 29, 2026",

        overview:
            "Somalia faces overlapping humanitarian pressures from armed conflict, insecurity, drought and other climate-related shocks.",

        currentSituation:
            "UNHCR reported that displacement during the second quarter of 2026 was increasingly driven by conflict and drought rather than flooding.",

        actors: [
            "Federal Government of Somalia",
            "Al-Shabaab",
            "Humanitarian organizations and local authorities"
        ],

        humanitarianImpact:
            "UNHCR data reported approximately 3.3 million internally displaced people in Somalia as of June 30, 2026.",

        timeline: [
            {
                date: "1990s–present",
                event: "Somalia experiences prolonged political instability and armed conflict."
            },
            {
                date: "2020s",
                event: "Conflict increasingly overlaps with severe droughts and floods."
            },
            {
                date: "2026",
                event: "Conflict and drought account for most newly recorded displacement during the second quarter."
            }
        ],

        sources: [
            {
                name: "UNHCR — Somalia",
                url: "https://www.unhcr.org/where-we-work/countries/somalia"
            }
        ],

        aid: [
            {
                name: "UNHCR — Somalia",
                url: "https://www.unhcr.org/where-we-work/countries/somalia"
            },
            {
                name: "World Food Programme — Somalia",
                url: "https://www.wfp.org/countries/somalia"
            }
        ]
    },


    // ======================================
    // 10. SOUTH SUDAN
    // ======================================

    {
        id: "south-sudan",
        name: "South Sudan Humanitarian Crisis",

        primaryCategory: "humanitarian",

        categories: [
            "humanitarian",
            "displacement"
        ],

        coordinates: [7.3, 30.3],

        lastUpdated: "September 29, 2026",

        overview:
            "South Sudan faces long-running humanitarian pressures linked to internal displacement, insecurity, flooding, food insecurity and the effects of the neighboring war in Sudan.",

        currentSituation:
            "Communities continue to face displacement and humanitarian needs while South Sudan also receives large numbers of people fleeing the war in Sudan.",

        actors: [
            "Government of South Sudan",
            "Local political and armed actors",
            "United Nations and humanitarian organizations"
        ],

        humanitarianImpact:
            "The United Nations reported in 2026 that more than 2.5 million people were internally displaced across South Sudan. More than 1.3 million people had also entered South Sudan from Sudan since 2023.",

        timeline: [
            {
                date: "2011",
                event: "South Sudan becomes independent."
            },
            {
                date: "2013",
                event: "Civil war begins and causes widespread displacement."
            },
            {
                date: "2018",
                event: "A revitalized peace agreement is signed."
            },
            {
                date: "2023–2026",
                event: "The Sudan war adds further pressure through cross-border displacement."
            }
        ],

        sources: [
            {
                name: "United Nations — South Sudan",
                url: "https://southsudan.un.org/"
            },
            {
                name: "UNHCR — South Sudan",
                url: "https://www.unhcr.org/where-we-work/countries/south-sudan"
            }
        ],

        aid: [
            {
                name: "UNHCR — South Sudan",
                url: "https://www.unhcr.org/where-we-work/countries/south-sudan"
            },
            {
                name: "World Food Programme — South Sudan",
                url: "https://www.wfp.org/countries/south-sudan"
            }
        ]
    },


    // ======================================
    // 11. HAITI
    // ======================================

    {
        id: "haiti",
        name: "Haiti Humanitarian and Displacement Crisis",

        primaryCategory: "humanitarian",

        categories: [
            "humanitarian",
            "displacement"
        ],

        coordinates: [19.0, -72.7],

        lastUpdated: "September 29, 2026",

        overview:
            "Haiti faces a severe humanitarian and security crisis as armed groups have expanded their territorial influence and violence has displaced large numbers of civilians.",

        currentSituation:
            "Armed-group violence has spread beyond Port-au-Prince into other areas, including Artibonite, reducing safe options for people fleeing violence.",

        actors: [
            "Haitian authorities and security forces",
            "Multiple armed gangs and coalitions",
            "International and Haitian humanitarian organizations"
        ],

        humanitarianImpact:
            "The International Organization for Migration reported in September 2026 that nearly 1.5 million people were internally displaced across Haiti.",

        timeline: [
            {
                date: "2021–2024",
                event: "Political instability and armed-group violence intensify."
            },
            {
                date: "2025",
                event: "Violence and displacement expand beyond parts of Port-au-Prince."
            },
            {
                date: "September 2026",
                event: "Nearly 1.5 million people are reported internally displaced."
            }
        ],

        sources: [
            {
                name: "United Nations — Haiti",
                url: "https://haiti.un.org/"
            },
            {
                name: "IOM — Haiti",
                url: "https://www.iom.int/countries/haiti"
            }
        ],

        aid: [
            {
                name: "UNICEF — Haiti",
                url: "https://www.unicef.org/haiti/en"
            },
            {
                name: "World Food Programme — Haiti",
                url: "https://www.wfp.org/countries/haiti"
            }
        ]
    },


    // ======================================
    // 12. CENTRAL SAHEL
    // ======================================

    {
        id: "central-sahel",
        name: "Central Sahel Displacement Crisis",

        primaryCategory: "displacement",

        categories: [
            "humanitarian",
            "displacement"
        ],

        coordinates: [15.0, -1.5],

        lastUpdated: "September 29, 2026",

        overview:
            "Burkina Faso, Mali and Niger face a regional displacement and protection crisis driven primarily by insecurity and violence, compounded by food insecurity and climate pressures.",

        currentSituation:
            "Forced displacement continues across the Central Sahel and increasingly affects neighboring countries.",

        actors: [
            "Governments and security forces in the Central Sahel",
            "Multiple non-state armed groups",
            "Regional and international humanitarian organizations"
        ],

        humanitarianImpact:
            "UNHCR reported that approximately 3.8 million people were forcibly displaced across Burkina Faso, Mali and Niger by July 31, 2026.",

        timeline: [
            {
                date: "2010s",
                event: "Armed violence and instability expand across parts of the Central Sahel."
            },
            {
                date: "2020–2025",
                event: "Forced displacement rises significantly across Burkina Faso, Mali and Niger."
            },
            {
                date: "July 2026",
                event: "UNHCR reports approximately 3.8 million forcibly displaced people across the three countries."
            }
        ],

        sources: [
            {
                name: "UNHCR — Sahel Emergency",
                url: "https://www.unhcr.org/emergencies/sahel-emergency"
            }
        ],

        aid: [
            {
                name: "UNHCR — Sahel Emergency",
                url: "https://www.unhcr.org/emergencies/sahel-emergency"
            },
            {
                name: "ICRC — Africa",
                url: "https://www.icrc.org/en/where-we-work/africa"
            }
        ]
    },


    // ======================================
    // 13. ETHIOPIA
    // ======================================

    {
        id: "ethiopia",
        name: "Ethiopia Displacement Crisis",

        primaryCategory: "displacement",

        categories: [
            "humanitarian",
            "displacement"
        ],

        coordinates: [9.1, 40.5],

        lastUpdated: "September 29, 2026",

        overview:
            "Ethiopia faces significant internal displacement linked to conflict, localized insecurity and climate-related shocks while also hosting a large refugee population from neighboring countries.",

        currentSituation:
            "Displacement and humanitarian needs remain significant in several regions, while Ethiopia also receives refugees fleeing crises in Sudan, South Sudan, Somalia and Eritrea.",

        actors: [
            "Ethiopian federal and regional authorities",
            "Local armed actors",
            "United Nations and humanitarian organizations"
        ],

        humanitarianImpact:
            "UNHCR reports millions of internally displaced people in Ethiopia and more than one million refugees and asylum-seekers hosted in the country.",

        timeline: [
            {
                date: "2020–2022",
                event: "War in northern Ethiopia causes major displacement and humanitarian needs."
            },
            {
                date: "2022",
                event: "The Pretoria agreement ends large-scale fighting between the Ethiopian government and Tigrayan forces."
            },
            {
                date: "2023–2026",
                event: "Other conflicts, localized insecurity and climate shocks continue to drive displacement."
            }
        ],

        sources: [
            {
                name: "UNHCR — Ethiopia",
                url: "https://www.unhcr.org/where-we-work/countries/ethiopia"
            }
        ],

        aid: [
            {
                name: "UNHCR — Ethiopia",
                url: "https://www.unhcr.org/where-we-work/countries/ethiopia"
            },
            {
                name: "World Food Programme — Ethiopia",
                url: "https://www.wfp.org/countries/ethiopia"
            }
        ]
    },


    // ======================================
    // 14. MOZAMBIQUE — DISPLACEMENT
    // ======================================

    {
        id: "mozambique-displacement",
        name: "Northern Mozambique Displacement Crisis",

        primaryCategory: "displacement",

        categories: [
            "humanitarian",
            "displacement"
        ],

        coordinates: [-12.5, 39.3],

        lastUpdated: "September 29, 2026",

        overview:
            "Northern Mozambique faces prolonged displacement associated with insurgent violence, insecurity and repeated natural disasters.",

        currentSituation:
            "Violence in northern provinces continues to expose civilians to protection risks and repeated displacement while floods and other hazards compound humanitarian needs.",

        actors: [
            "Mozambican authorities and security forces",
            "Insurgent armed groups",
            "Humanitarian organizations"
        ],

        humanitarianImpact:
            "UNHCR data listed more than 660,000 internally displaced people in Mozambique as of June 30, 2026, alongside more than 720,000 IDP returnees.",

        timeline: [
            {
                date: "2017",
                event: "Insurgent violence begins in Cabo Delgado."
            },
            {
                date: "2020–2025",
                event: "Violence and natural disasters cause repeated displacement."
            },
            {
                date: "2026",
                event: "Conflict, flooding and humanitarian needs continue to overlap."
            }
        ],

        sources: [
            {
                name: "UNHCR — Mozambique",
                url: "https://www.unhcr.org/where-we-work/countries/mozambique"
            }
        ],

        aid: [
            {
                name: "UNHCR — Mozambique",
                url: "https://www.unhcr.org/where-we-work/countries/mozambique"
            }
        ]
    },


    // ======================================
    // 15. CENTRAL AFRICAN REPUBLIC
    // ======================================

    {
        id: "car",
        name: "Central African Republic Displacement Crisis",

        primaryCategory: "displacement",

        categories: [
            "humanitarian",
            "displacement"
        ],

        coordinates: [6.6, 20.9],

        lastUpdated: "September 29, 2026",

        overview:
            "The Central African Republic continues to experience a protracted humanitarian and displacement crisis after years of armed violence and political instability.",

        currentSituation:
            "Although security conditions vary across the country, displaced communities and refugees continue to face protection and humanitarian needs.",

        actors: [
            "Central African Republic authorities",
            "Multiple armed groups",
            "United Nations and humanitarian organizations"
        ],

        humanitarianImpact:
            "Large numbers of Central Africans remain internally displaced or live as refugees in neighboring countries after repeated cycles of violence.",

        timeline: [
            {
                date: "2012–2013",
                event: "A major political and armed crisis begins."
            },
            {
                date: "2013–2020",
                event: "Repeated violence causes large-scale internal and cross-border displacement."
            },
            {
                date: "2021–2026",
                event: "A protracted displacement and humanitarian crisis continues."
            }
        ],

        sources: [
            {
                name: "UNHCR — Central African Republic",
                url: "https://www.unhcr.org/where-we-work/countries/central-african-republic"
            }
        ],

        aid: [
            {
                name: "UNHCR — Central African Republic",
                url: "https://www.unhcr.org/where-we-work/countries/central-african-republic"
            }
        ]
    },


    // ======================================
    // 16. PHILIPPINES FLOODS
    // ======================================

    {
        id: "philippines-floods-2026",
        name: "Philippines Monsoon Floods",

        primaryCategory: "disaster",

        categories: [
            "disaster"
        ],

        coordinates: [14.6, 121.0],

        lastUpdated: "September 29, 2026",

        overview:
            "Heavy southwest monsoon rainfall caused widespread flooding in parts of the Philippines during August 2026.",

        currentSituation:
            "Emergency and recovery efforts continue following flooding that affected communities across multiple regions.",

        actors: [
            "Philippine authorities",
            "Philippine Red Cross",
            "Humanitarian organizations"
        ],

        humanitarianImpact:
            "IFRC reported that more than 1.58 million people were affected and more than 83,000 displaced in the August 2026 flood emergency.",

        timeline: [
            {
                date: "August 2026",
                event: "Enhanced southwest monsoon rainfall causes widespread flooding."
            },
            {
                date: "August 29, 2026",
                event: "IFRC reports more than 1.58 million people affected."
            }
        ],

        sources: [
            {
                name: "IFRC — Philippines Flood Emergency",
                url: "https://go.ifrc.org/emergencies/8076"
            }
        ],

        aid: [
            {
                name: "Philippine Red Cross",
                url: "https://redcross.org.ph/"
            }
        ]
    },


    // ======================================
    // 17. NEPAL FLASH FLOODS
    // ======================================

    {
        id: "nepal-floods-2026",
        name: "Nepal Flash Floods",

        primaryCategory: "disaster",

        categories: [
            "disaster"
        ],

        coordinates: [28.2, 84.0],

        lastUpdated: "September 29, 2026",

        overview:
            "Severe flash floods struck parts of northern and central Nepal on August 26, 2026, damaging homes, roads, bridges and essential infrastructure.",

        currentSituation:
            "Humanitarian and recovery operations continue in affected communities, including shelter, water, health and psychosocial assistance.",

        actors: [
            "Government of Nepal",
            "Nepal Red Cross Society",
            "International humanitarian organizations"
        ],

        humanitarianImpact:
            "IFRC estimated that around 93,000 people may have been affected. IOM recorded thousands of affected and displaced households during its initial assessment.",

        timeline: [
            {
                date: "August 26, 2026",
                event: "Severe flash floods strike communities in Nepal."
            },
            {
                date: "August 27, 2026",
                event: "IFRC launches a major emergency appeal."
            },
            {
                date: "September 2026",
                event: "Emergency relief and early recovery continue."
            }
        ],

        sources: [
            {
                name: "IFRC — Nepal Flash Floods",
                url: "https://www.ifrc.org/emergency/nepal-flash-floods-2026"
            },
            {
                name: "IOM — Nepal displacement tracking",
                url: "https://dtm.iom.int/nepal"
            }
        ],

        aid: [
            {
                name: "IFRC — Nepal Flash Flood Response",
                url: "https://www.ifrc.org/emergency/nepal-flash-floods-2026"
            }
        ]
    },


    // ======================================
    // 18. COLOMBIA EARTHQUAKE
    // ======================================

    {
        id: "colombia-earthquake-2026",
        name: "Colombia Earthquake",

        primaryCategory: "disaster",

        categories: [
            "disaster"
        ],

        coordinates: [5.0, -76.5],

        lastUpdated: "September 29, 2026",

        overview:
            "A magnitude 7.4 earthquake struck western Colombia on August 10, 2026, causing extensive casualties and damage across multiple departments.",

        currentSituation:
            "Emergency search-and-rescue operations have largely transitioned toward humanitarian assistance and recovery, including health, shelter and psychosocial support.",

        actors: [
            "Colombian authorities",
            "Colombian Red Cross",
            "International humanitarian organizations"
        ],

        humanitarianImpact:
            "IFRC reported in September that more than 661,000 people had been formally registered as disaster-affected.",

        timeline: [
            {
                date: "August 10, 2026",
                event: "A magnitude 7.4 earthquake strikes western Colombia."
            },
            {
                date: "August 2026",
                event: "Search-and-rescue and emergency relief operations expand."
            },
            {
                date: "September 2026",
                event: "Humanitarian response increasingly focuses on health, shelter and recovery."
            }
        ],

        sources: [
            {
                name: "IFRC — Colombia Earthquake 2026",
                url: "https://www.ifrc.org/emergency/colombia-earthquake-2026"
            }
        ],

        aid: [
            {
                name: "IFRC — Colombia Earthquake Response",
                url: "https://www.ifrc.org/emergency/colombia-earthquake-2026"
            }
        ]
    },


    // ======================================
    // 19. MADAGASCAR CYCLONES
    // ======================================

    {
        id: "madagascar-cyclones-2026",
        name: "Madagascar Cyclones",

        primaryCategory: "disaster",

        categories: [
            "disaster"
        ],

        coordinates: [-18.9, 47.5],

        lastUpdated: "September 29, 2026",

        overview:
            "Back-to-back cyclones struck Madagascar in early 2026, causing extensive flooding and damage to homes, schools, health facilities and livelihoods.",

        currentSituation:
            "Recovery efforts continue for communities affected by cyclone damage, flooding and loss of essential services.",

        actors: [
            "Madagascar authorities",
            "Malagasy Red Cross Society",
            "International humanitarian organizations"
        ],

        humanitarianImpact:
            "IFRC reported that more than 450,000 people were affected by the back-to-back cyclones.",

        timeline: [
            {
                date: "Early 2026",
                event: "Successive cyclones strike Madagascar within a short period."
            },
            {
                date: "February 2026",
                event: "IFRC launches an emergency appeal."
            },
            {
                date: "2026",
                event: "Relief and recovery operations continue."
            }
        ],

        sources: [
            {
                name: "IFRC — Madagascar Cyclones 2026",
                url: "https://www.ifrc.org/emergency/madagascar-cyclones-2026"
            }
        ],

        aid: [
            {
                name: "IFRC — Madagascar Cyclone Response",
                url: "https://www.ifrc.org/emergency/madagascar-cyclones-2026"
            }
        ]
    },


    // ======================================
    // 20. MOZAMBIQUE FLOODS
    // ======================================

    {
        id: "mozambique-floods-2026",
        name: "Mozambique Floods",

        primaryCategory: "disaster",

        categories: [
            "disaster"
        ],

        coordinates: [-23.0, 33.0],

        lastUpdated: "September 29, 2026",

        overview:
            "Severe flooding beginning in late December 2025 affected large areas of Mozambique during 2026, damaging homes, crops, water systems and infrastructure.",

        currentSituation:
            "Recovery continues in flood-affected communities while Mozambique simultaneously faces other humanitarian pressures, including conflict-driven displacement in the north.",

        actors: [
            "Mozambican authorities",
            "Mozambique Red Cross",
            "International humanitarian organizations"
        ],

        humanitarianImpact:
            "IFRC reported that the floods affected more than 650,000 people across seven provinces.",

        timeline: [
            {
                date: "Late December 2025",
                event: "Heavy rainfall and river flooding begin affecting Mozambique."
            },
            {
                date: "January 2026",
                event: "IFRC launches an emergency appeal for the flood response."
            },
            {
                date: "2026",
                event: "Relief and recovery continue in affected provinces."
            }
        ],

        sources: [
            {
                name: "IFRC — Mozambique Floods 2026",
                url: "https://www.ifrc.org/emergency/mozambique-floods-2026"
            }
        ],

        aid: [
            {
                name: "IFRC — Mozambique Flood Response",
                url: "https://www.ifrc.org/emergency/mozambique-floods-2026"
            }
        ]
    }

];
