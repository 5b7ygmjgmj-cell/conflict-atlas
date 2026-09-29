// ==========================================
// CONFLICT ATLAS — CONFLICT DATABASE
// ==========================================

const conflicts = [

    // ======================================
    // UKRAINE — DEMO ENTRY
    // ======================================

    {
        id: "ukraine",
        name: "War in Ukraine",
        category: "conflict",

        coordinates: [49.0, 32.0],
        mapLabel: "Ukraine",

        lastUpdated: "Demo content — not yet published",

        overview:
            "This is temporary demonstration content. The final Conflict Atlas entry will contain a sourced overview of the conflict, its background, major developments, and current situation.",

        actors: [
            "Ukraine",
            "Russian Federation"
        ],

        humanitarianImpact:
            "Humanitarian information will be added from verified sources before this entry is published.",

        sources: [
            {
                name: "Sources will be added during research",
                url: "#"
            }
        ],

        aid: [
            {
                name: "Verified humanitarian organizations will appear here",
                url: "#"
            }
        ]
    },


    // ======================================
    // SUDAN — FULL ENTRY
    // ======================================

    {
        id: "sudan",
        name: "War in Sudan",
        category: "conflict",

        coordinates: [15.5, 30.5],
        mapLabel: "Sudan",

        lastUpdated: "September 29, 2026",

        overview:
            "Sudan has been at war since April 2023, when fighting broke out between the Sudanese Armed Forces (SAF) and the paramilitary Rapid Support Forces (RSF). The conflict followed a power struggle between the two forces during Sudan's attempted political transition. Fighting has since spread across large parts of the country and created a major humanitarian and displacement crisis.",

        currentSituation:
            "Fighting remains active in several parts of Sudan. Darfur and the Kordofan regions are among the areas heavily affected, while drones and other long-range attacks have become an increasingly important part of the conflict. Continued insecurity has also caused further displacement within Sudan and across its borders.",

        actors: [
            "Sudanese Armed Forces (SAF)",
            "Rapid Support Forces (RSF)"
        ],

        humanitarianImpact:
            "The war has displaced millions of people inside Sudan and across its borders. Nearly 19.5 million people were assessed as facing Crisis-level or worse acute food insecurity during February–May 2026. The IPC also identified a risk of famine in 14 areas of North Darfur, South Darfur and South Kordofan under a reasonable worst-case scenario. Humanitarian conditions and statistics change frequently, so figures should be read together with their source dates.",

        timeline: [
            {
                date: "April 15, 2023",
                event: "Large-scale fighting begins between the Sudanese Armed Forces and Rapid Support Forces."
            },
            {
                date: "2023–2024",
                event: "The conflict expands beyond Khartoum, with severe fighting and humanitarian consequences in Darfur and other parts of Sudan."
            },
            {
                date: "2025–2026",
                event: "Territorial control continues to shift while drones and other long-range attacks become increasingly prominent."
            },
            {
                date: "September 2026",
                event: "Fighting continues in areas including Darfur and the Kordofans, while insecurity causes additional displacement."
            }
        ],

        sources: [
            {
                name: "Reuters — Sudan conflict reporting",
                url: "https://www.reuters.com/world/africa/sudans-rsf-steps-up-deadly-drone-attacks-frontline-cities-2026-09-24/"
            },
            {
                name: "UNHCR — Sudan Situation",
                url: "https://data.unhcr.org/en/situations/sudansituation"
            },
            {
                name: "IPC — Sudan food insecurity analysis",
                url: "https://www.ipcinfo.org/ipc-country-analysis/details-map/en/c/1163315/"
            },
            {
                name: "World Food Programme — Sudan Emergency",
                url: "https://www.wfp.org/emergencies/sudan"
            },
            {
                name: "UNICEF — Sudan",
                url: "https://www.unicef.org/sudan/"
            }
        ],

        aid: [
            {
                name: "ICRC — Emergency relief and protection",
                url: "https://www.icrc.org/en/donate/sudan-crisis"
            },
            {
                name: "World Food Programme — Food assistance",
                url: "https://www.wfp.org/emergencies/sudan"
            },
            {
                name: "UNICEF — Children and families",
                url: "https://www.unicef.org/sudan/"
            }
        ]
    },


    // ======================================
    // ISRAEL / GAZA — DEMO ENTRY
    // ======================================

    {
        id: "gaza-israel",
        name: "Israel–Gaza Conflict",
        category: "conflict",

        coordinates: [31.5, 34.7],
        mapLabel: "Israel / Palestinian territories",

        lastUpdated: "Demo content — not yet published",

        overview:
            "This is temporary demonstration content. The final entry will provide sourced background, current developments, relevant actors, humanitarian information, and clearly identified disputed claims.",

        actors: [
            "Israel",
            "Hamas"
        ],

        humanitarianImpact:
            "Verified humanitarian information will be added before publication.",

        sources: [
            {
                name: "Sources will be added during research",
                url: "#"
            }
        ],

        aid: [
            {
                name: "Verified humanitarian organizations will appear here",
                url: "#"
            }
        ]
    }

];
