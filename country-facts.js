// ============================================================
// ONE WORLD, ONE LIFE — COUNTRY FACTS
// Conflict Atlas
// ============================================================
//
// PURPOSE
// Adds stable and semi-stable factual information to the
// 195 country profiles created in countries.js.
//
// THIS FILE HANDLES:
// - Population
// - Area
// - Languages
// - Currency
// - Country overview
// - UN membership baseline
// - Fact sources
//
// THIS FILE DOES NOT HANDLE:
// - Current political leaders
// - Crisis relationships
// - Humanitarian statistics
// - Displacement statistics
//
// ============================================================


// ============================================================
// SETTINGS
// ============================================================

const COUNTRY_FACTS_VERSION = "2.0";

const WORLD_BANK_API =
    "https://api.worldbank.org/v2";


// ============================================================
// FACT STATUS
// ============================================================

const countryFactsStatus = {

    populationLoaded: false,

    stableFactsLoaded: false,

    loading: false,

    errors: []

};


// ============================================================
// FORMAT POPULATION
// ============================================================

function formatCountryPopulation(value) {

    if (
        value === null ||
        value === undefined ||
        Number.isNaN(Number(value))
    ) {

        return "Not available";

    }

    return Number(value)
        .toLocaleString("en-US");

}


// ============================================================
// WORLD BANK COUNTRY CODE EXCEPTIONS
// ============================================================

const worldBankCountryCodeOverrides = {

    PSE: "PSE"

};


// ============================================================
// GET WORLD BANK CODE
// ============================================================

function getWorldBankCountryCode(country) {

    if (!country) {

        return null;

    }

    return (
        worldBankCountryCodeOverrides[
            country.iso3
        ] ||
        country.iso3
    );

}


// ============================================================
// FETCH JSON SAFELY
// ============================================================

async function fetchCountryFactsJson(url) {

    const response =
        await fetch(url);

    if (!response.ok) {

        throw new Error(
            `Request failed with status ${response.status}`
        );

    }

    return response.json();

}


// ============================================================
// WORLD BANK POPULATION
// ============================================================
//
// SP.POP.TOTL = Population, total
//
// mrnev=1 requests the most recent non-empty observation.
//
// ============================================================

async function loadCountryPopulation(country) {

    const worldBankCode =
        getWorldBankCountryCode(country);

    if (!worldBankCode) {

        return;

    }

    const url =
        `${WORLD_BANK_API}/country/` +
        `${encodeURIComponent(worldBankCode)}/` +
        `indicator/SP.POP.TOTL` +
        `?format=json&mrnev=1`;

    try {

        const data =
            await fetchCountryFactsJson(url);

        if (
            !Array.isArray(data) ||
            !Array.isArray(data[1]) ||
            data[1].length === 0
        ) {

            return;

        }

        const observation =
            data[1][0];

        if (
            observation.value === null ||
            observation.value === undefined
        ) {

            return;

        }

        country.atAGlance.population =
            Number(observation.value);

        country.atAGlance.populationYear =
            Number(observation.date);


        // ----------------------------------------
        // PROVENANCE
        // ----------------------------------------

        if (!country.factVerification) {

            country.factVerification = {};

        }

        country.factVerification.population = {

            source:
                "World Bank — Population, total (SP.POP.TOTL)",

            year:
                Number(observation.date),

            retrieved:
                new Date()
                    .toISOString()
                    .slice(0, 10)

        };

    } catch (error) {

        countryFactsStatus.errors.push({

            country:
                country.name,

            field:
                "population",

            message:
                error.message

        });

    }

}


// ============================================================
// LOAD POPULATION FOR ALL COUNTRY PROFILES
// ============================================================

async function loadAllCountryPopulations() {

    const batchSize = 12;

    for (
        let index = 0;
        index < countries.length;
        index += batchSize
    ) {

        const batch =
            countries.slice(
                index,
                index + batchSize
            );

        await Promise.all(

            batch.map(
                country =>
                    loadCountryPopulation(
                        country
                    )
            )

        );

    }

    countryFactsStatus.populationLoaded =
        true;

    const loadedCount =
        countries.filter(
            country =>
                country.atAGlance.population !==
                null
        ).length;

    console.log(
        `Conflict Atlas loaded population data for ${loadedCount} of ${countries.length} country profiles.`
    );

}


// ============================================================
// STABLE COUNTRY FACT DATABASE
// ============================================================
//
// Format:
//
// ISO3: {
//     area: square kilometres,
//     languages: ["Language"],
//     currency: "Currency name (CODE)"
// }
//
// Area is stored as a number so script.js can format it.
//
// Languages are displayed as a readable list.
//
// Currency includes the ISO 4217 code when applicable.
//
// ============================================================

const stableCountryFacts = {

    // ========================================================
    // AFRICA
    // ========================================================

    DZA: {
        area: 2381741,
        languages: ["Arabic", "Tamazight"],
        currency: "Algerian dinar (DZD)"
    },

    AGO: {
        area: 1246700,
        languages: ["Portuguese"],
        currency: "Angolan kwanza (AOA)"
    },

    BEN: {
        area: 112622,
        languages: ["French"],
        currency: "West African CFA franc (XOF)"
    },

    BWA: {
        area: 582000,
        languages: ["English", "Setswana"],
        currency: "Botswana pula (BWP)"
    },

    BFA: {
        area: 272967,
        languages: ["French"],
        currency: "West African CFA franc (XOF)"
    },

    BDI: {
        area: 27834,
        languages: [
            "Kirundi",
            "French",
            "English"
        ],
        currency: "Burundian franc (BIF)"
    },

    CPV: {
        area: 4033,
        languages: ["Portuguese"],
        currency: "Cape Verdean escudo (CVE)"
    },

    CMR: {
        area: 475442,
        languages: ["English", "French"],
        currency: "Central African CFA franc (XAF)"
    },

    CAF: {
        area: 622984,
        languages: ["French", "Sango"],
        currency: "Central African CFA franc (XAF)"
    },

    TCD: {
        area: 1284000,
        languages: ["Arabic", "French"],
        currency: "Central African CFA franc (XAF)"
    },

    COM: {
        area: 1862,
        languages: [
            "Comorian",
            "Arabic",
            "French"
        ],
        currency: "Comorian franc (KMF)"
    },

    COG: {
        area: 342000,
        languages: ["French"],
        currency: "Central African CFA franc (XAF)"
    },

    COD: {
        area: 2344858,
        languages: ["French"],
        currency: "Congolese franc (CDF)"
    },

    CIV: {
        area: 322463,
        languages: ["French"],
        currency: "West African CFA franc (XOF)"
    },

    DJI: {
        area: 23200,
        languages: ["Arabic", "French"],
        currency: "Djiboutian franc (DJF)"
    },

    EGY: {
        area: 1002450,
        languages: ["Arabic"],
        currency: "Egyptian pound (EGP)"
    },

    GNQ: {
        area: 28051,
        languages: [
            "Spanish",
            "French",
            "Portuguese"
        ],
        currency: "Central African CFA franc (XAF)"
    },

    ERI: {
        area: 117600,
        languages: [
            "Tigrinya",
            "Arabic",
            "English"
        ],
        currency: "Eritrean nakfa (ERN)"
    },

    SWZ: {
        area: 17364,
        languages: ["Swazi", "English"],
        currency: "Swazi lilangeni (SZL)"
    },

    ETH: {
        area: 1104300,
        languages: ["Amharic"],
        currency: "Ethiopian birr (ETB)"
    },

    GAB: {
        area: 267668,
        languages: ["French"],
        currency: "Central African CFA franc (XAF)"
    },

    GMB: {
        area: 11295,
        languages: ["English"],
        currency: "Gambian dalasi (GMD)"
    },

    GHA: {
        area: 238533,
        languages: ["English"],
        currency: "Ghanaian cedi (GHS)"
    },

    GIN: {
        area: 245857,
        languages: ["French"],
        currency: "Guinean franc (GNF)"
    },

    GNB: {
        area: 36125,
        languages: ["Portuguese"],
        currency: "West African CFA franc (XOF)"
    },

    KEN: {
        area: 580367,
        languages: ["English", "Swahili"],
        currency: "Kenyan shilling (KES)"
    },

    LSO: {
        area: 30355,
        languages: ["Sesotho", "English"],
        currency: "Lesotho loti (LSL)"
    },

    LBR: {
        area: 111369,
        languages: ["English"],
        currency: "Liberian dollar (LRD)"
    },

    LBY: {
        area: 1759540,
        languages: ["Arabic"],
        currency: "Libyan dinar (LYD)"
    },

    MDG: {
        area: 587041,
        languages: ["Malagasy", "French"],
        currency: "Malagasy ariary (MGA)"
    },

    MWI: {
        area: 118484,
        languages: ["English", "Chichewa"],
        currency: "Malawian kwacha (MWK)"
    },

    MLI: {
        area: 1240192,
        languages: [
            "Bambara",
            "Bobo",
            "Bozo",
            "Dogon",
            "Fula",
            "Hassaniya Arabic",
            "Kassonke",
            "Maninke",
            "Minyanka",
            "Senufo",
            "Songhay",
            "Soninke",
            "Tamasheq"
        ],
        currency: "West African CFA franc (XOF)"
    },

    MRT: {
        area: 1030700,
        languages: ["Arabic"],
        currency: "Mauritanian ouguiya (MRU)"
    },

    MUS: {
        area: 2040,
        languages: ["English", "French"],
        currency: "Mauritian rupee (MUR)"
    },

    MAR: {
        area: 446550,
        languages: ["Arabic", "Tamazight"],
        currency: "Moroccan dirham (MAD)"
    },

    MOZ: {
        area: 801590,
        languages: ["Portuguese"],
        currency: "Mozambican metical (MZN)"
    },

    NAM: {
        area: 825615,
        languages: ["English"],
        currency: "Namibian dollar (NAD)"
    },

    NER: {
        area: 1267000,
        languages: ["Hausa"],
        currency: "West African CFA franc (XOF)"
    },

    NGA: {
        area: 923768,
        languages: ["English"],
        currency: "Nigerian naira (NGN)"
    },

    RWA: {
        area: 26338,
        languages: [
            "Kinyarwanda",
            "English",
            "French",
            "Swahili"
        ],
        currency: "Rwandan franc (RWF)"
    },

    STP: {
        area: 964,
        languages: ["Portuguese"],
        currency: "São Tomé and Príncipe dobra (STN)"
    },

    SEN: {
        area: 196722,
        languages: ["French"],
        currency: "West African CFA franc (XOF)"
    },

    SYC: {
        area: 452,
        languages: [
            "Seychellois Creole",
            "English",
            "French"
        ],
        currency: "Seychellois rupee (SCR)"
    },

    SLE: {
        area: 71740,
        languages: ["English"],
        currency: "Sierra Leonean leone (SLE)"
    },

    SOM: {
        area: 637657,
        languages: ["Somali", "Arabic"],
        currency: "Somali shilling (SOS)"
    },

    ZAF: {
        area: 1221037,
        languages: [
            "Afrikaans",
            "English",
            "Ndebele",
            "Northern Sotho",
            "Sesotho",
            "Swazi",
            "Tsonga",
            "Tswana",
            "Venda",
            "Xhosa",
            "Zulu",
            "South African Sign Language"
        ],
        currency: "South African rand (ZAR)"
    },

    SSD: {
        area: 619745,
        languages: ["English"],
        currency: "South Sudanese pound (SSP)"
    },

    SDN: {
        area: 1886068,
        languages: ["Arabic", "English"],
        currency: "Sudanese pound (SDG)"
    },

    TZA: {
        area: 947303,
        languages: ["Swahili", "English"],
        currency: "Tanzanian shilling (TZS)"
    },

    TGO: {
        area: 56785,
        languages: ["French"],
        currency: "West African CFA franc (XOF)"
    },

    TUN: {
        area: 163610,
        languages: ["Arabic"],
        currency: "Tunisian dinar (TND)"
    },

    UGA: {
        area: 241550,
        languages: ["English", "Swahili"],
        currency: "Ugandan shilling (UGX)"
    },

    ZMB: {
        area: 752612,
        languages: ["English"],
        currency: "Zambian kwacha (ZMW)"
    },

    ZWE: {
        area: 390757,
        languages: [
            "Chewa",
            "Chibarwe",
            "English",
            "Kalanga",
            "Koisan",
            "Nambya",
            "Ndau",
            "Ndebele",
            "Shangani",
            "Shona",
            "Sign language",
            "Sotho",
            "Tonga",
            "Tswana",
            "Venda",
            "Xhosa"
        ],
        currency: "Zimbabwe Gold (ZWG)"
    },


    // ========================================================
    // ASIA
    // ========================================================

    AFG: {
        area: 652230,
        languages: ["Dari", "Pashto"],
        currency: "Afghan afghani (AFN)"
    },

    ARM: {
        area: 29743,
        languages: ["Armenian"],
        currency: "Armenian dram (AMD)"
    },

    AZE: {
        area: 86600,
        languages: ["Azerbaijani"],
        currency: "Azerbaijani manat (AZN)"
    },

    BHR: {
        area: 765,
        languages: ["Arabic"],
        currency: "Bahraini dinar (BHD)"
    },

    BGD: {
        area: 147570,
        languages: ["Bengali"],
        currency: "Bangladeshi taka (BDT)"
    },

    BTN: {
        area: 38394,
        languages: ["Dzongkha"],
        currency: "Bhutanese ngultrum (BTN)"
    },

    BRN: {
        area: 5765,
        languages: ["Malay"],
        currency: "Brunei dollar (BND)"
    },

    KHM: {
        area: 181035,
        languages: ["Khmer"],
        currency: "Cambodian riel (KHR)"
    },

    CHN: {
        area: 9706961,
        languages: ["Standard Chinese"],
        currency: "Renminbi (CNY)"
    },

    CYP: {
        area: 9251,
        languages: ["Greek", "Turkish"],
        currency: "Euro (EUR)"
    },

    GEO: {
        area: 69700,
        languages: ["Georgian"],
        currency: "Georgian lari (GEL)"
    },

    IND: {
        area: 3287590,
        languages: ["Hindi", "English"],
        currency: "Indian rupee (INR)"
    },

    IDN: {
        area: 1904569,
        languages: ["Indonesian"],
        currency: "Indonesian rupiah (IDR)"
    },

    IRN: {
        area: 1648195,
        languages: ["Persian"],
        currency: "Iranian rial (IRR)"
    },

    IRQ: {
        area: 438317,
        languages: ["Arabic", "Kurdish"],
        currency: "Iraqi dinar (IQD)"
    },

    ISR: {
        area: 20770,
        languages: ["Hebrew"],
        currency: "Israeli new shekel (ILS)"
    },

    JPN: {
        area: 377930,
        languages: ["Japanese"],
        currency: "Japanese yen (JPY)"
    },

    JOR: {
        area: 89342,
        languages: ["Arabic"],
        currency: "Jordanian dinar (JOD)"
    },

    KAZ: {
        area: 2724900,
        languages: ["Kazakh", "Russian"],
        currency: "Kazakhstani tenge (KZT)"
    },

    KWT: {
        area: 17818,
        languages: ["Arabic"],
        currency: "Kuwaiti dinar (KWD)"
    },

    KGZ: {
        area: 199951,
        languages: ["Kyrgyz", "Russian"],
        currency: "Kyrgyzstani som (KGS)"
    },

    LAO: {
        area: 236800,
        languages: ["Lao"],
        currency: "Lao kip (LAK)"
    },

    LBN: {
        area: 10452,
        languages: ["Arabic"],
        currency: "Lebanese pound (LBP)"
    },

    MYS: {
        area: 330803,
        languages: ["Malay"],
        currency: "Malaysian ringgit (MYR)"
    },

    MDV: {
        area: 300,
        languages: ["Dhivehi"],
        currency: "Maldivian rufiyaa (MVR)"
    },

    MNG: {
        area: 1564110,
        languages: ["Mongolian"],
        currency: "Mongolian tögrög (MNT)"
    },

    MMR: {
        area: 676578,
        languages: ["Burmese"],
        currency: "Myanmar kyat (MMK)"
    },

    NPL: {
        area: 147181,
        languages: ["Nepali"],
        currency: "Nepalese rupee (NPR)"
    },

    PRK: {
        area: 120538,
        languages: ["Korean"],
        currency: "North Korean won (KPW)"
    },

    OMN: {
        area: 309500,
        languages: ["Arabic"],
        currency: "Omani rial (OMR)"
    },

    PAK: {
        area: 881912,
        languages: ["Urdu", "English"],
        currency: "Pakistani rupee (PKR)"
    },

    PSE: {
        area: 6220,
        languages: ["Arabic"],
        currency: "No single official national currency"
    },

    PHL: {
        area: 342353,
        languages: ["Filipino", "English"],
        currency: "Philippine peso (PHP)"
    },

    QAT: {
        area: 11586,
        languages: ["Arabic"],
        currency: "Qatari riyal (QAR)"
    },

    SAU: {
        area: 2149690,
        languages: ["Arabic"],
        currency: "Saudi riyal (SAR)"
    },

    SGP: {
        area: 710,
        languages: [
            "English",
            "Malay",
            "Mandarin Chinese",
            "Tamil"
        ],
        currency: "Singapore dollar (SGD)"
    },

    KOR: {
        area: 100210,
        languages: ["Korean"],
        currency: "South Korean won (KRW)"
    },

    LKA: {
        area: 65610,
        languages: ["Sinhala", "Tamil"],
        currency: "Sri Lankan rupee (LKR)"
    },

    SYR: {
        area: 185180,
        languages: ["Arabic"],
        currency: "Syrian pound (SYP)"
    },

    TJK: {
        area: 143100,
        languages: ["Tajik"],
        currency: "Tajikistani somoni (TJS)"
    },

    THA: {
        area: 513120,
        languages: ["Thai"],
        currency: "Thai baht (THB)"
    },

    TLS: {
        area: 14874,
        languages: ["Tetum", "Portuguese"],
        currency: "United States dollar (USD)"
    },

    TUR: {
        area: 783562,
        languages: ["Turkish"],
        currency: "Turkish lira (TRY)"
    },

    TKM: {
        area: 488100,
        languages: ["Turkmen"],
        currency: "Turkmenistan manat (TMT)"
    },

    ARE: {
        area: 83600,
        languages: ["Arabic"],
        currency: "United Arab Emirates dirham (AED)"
    },

    UZB: {
        area: 447400,
        languages: ["Uzbek"],
        currency: "Uzbekistani sum (UZS)"
    },

    VNM: {
        area: 331212,
        languages: ["Vietnamese"],
        currency: "Vietnamese đồng (VND)"
    },

    YEM: {
        area: 527968,
        languages: ["Arabic"],
        currency: "Yemeni rial (YER)"
    },


    // ========================================================
    // EUROPE
    // ========================================================

    ALB: {
        area: 28748,
        languages: ["Albanian"],
        currency: "Albanian lek (ALL)"
    },

    AND: {
        area: 468,
        languages: ["Catalan"],
        currency: "Euro (EUR)"
    },

    AUT: {
        area: 83871,
        languages: ["German"],
        currency: "Euro (EUR)"
    },

    BLR: {
        area: 207600,
        languages: ["Belarusian", "Russian"],
        currency: "Belarusian ruble (BYN)"
    },

    BEL: {
        area: 30528,
        languages: ["Dutch", "French", "German"],
        currency: "Euro (EUR)"
    },

    BIH: {
        area: 51209,
        languages: [
            "Bosnian",
            "Croatian",
            "Serbian"
        ],
        currency: "Bosnia and Herzegovina convertible mark (BAM)"
    },

    BGR: {
        area: 110879,
        languages: ["Bulgarian"],
        currency: "Euro (EUR)"
    },

    HRV: {
        area: 56594,
        languages: ["Croatian"],
        currency: "Euro (EUR)"
    },

    CZE: {
        area: 78865,
        languages: ["Czech"],
        currency: "Czech koruna (CZK)"
    },

    DNK: {
        area: 43094,
        languages: ["Danish"],
        currency: "Danish krone (DKK)"
    },

    EST: {
        area: 45227,
        languages: ["Estonian"],
        currency: "Euro (EUR)"
    },

    FIN: {
        area: 338424,
        languages: ["Finnish", "Swedish"],
        currency: "Euro (EUR)"
    },

    FRA: {
        area: 551695,
        languages: ["French"],
        currency: "Euro (EUR)"
    },

    DEU: {
        area: 357114,
        languages: ["German"],
        currency: "Euro (EUR)"
    },

    GRC: {
        area: 131990,
        languages: ["Greek"],
        currency: "Euro (EUR)"
    },

    HUN: {
        area: 93028,
        languages: ["Hungarian"],
        currency: "Hungarian forint (HUF)"
    },

    ISL: {
        area: 103000,
        languages: ["Icelandic"],
        currency: "Icelandic króna (ISK)"
    },

    IRL: {
        area: 70273,
        languages: ["Irish", "English"],
        currency: "Euro (EUR)"
    },

    ITA: {
        area: 301336,
        languages: ["Italian"],
        currency: "Euro (EUR)"
    },

    LVA: {
        area: 64559,
        languages: ["Latvian"],
        currency: "Euro (EUR)"
    },

    LIE: {
        area: 160,
        languages: ["German"],
        currency: "Swiss franc (CHF)"
    },

    LTU: {
        area: 65300,
        languages: ["Lithuanian"],
        currency: "Euro (EUR)"
    },

    LUX: {
        area: 2586,
        languages: [
            "Luxembourgish",
            "French",
            "German"
        ],
        currency: "Euro (EUR)"
    },

    MLT: {
        area: 316,
        languages: ["Maltese", "English"],
        currency: "Euro (EUR)"
    },

    MDA: {
        area: 33846,
        languages: ["Romanian"],
        currency: "Moldovan leu (MDL)"
    },

    MCO: {
        area: 2.02,
        languages: ["French"],
        currency: "Euro (EUR)"
    },

    MNE: {
        area: 13812,
        languages: ["Montenegrin"],
        currency: "Euro (EUR)"
    },

    NLD: {
        area: 41850,
        languages: ["Dutch"],
        currency: "Euro (EUR)"
    },

    MKD: {
        area: 25713,
        languages: ["Macedonian", "Albanian"],
        currency: "Macedonian denar (MKD)"
    },

    NOR: {
        area: 385207,
        languages: ["Norwegian"],
        currency: "Norwegian krone (NOK)"
    },

    POL: {
        area: 312696,
        languages: ["Polish"],
        currency: "Polish złoty (PLN)"
    },

    PRT: {
        area: 92090,
        languages: ["Portuguese"],
        currency: "Euro (EUR)"
    },

    ROU: {
        area: 238397,
        languages: ["Romanian"],
        currency: "Romanian leu (RON)"
    },

    RUS: {
        area: 17098242,
        languages: ["Russian"],
        currency: "Russian ruble (RUB)"
    },

    SMR: {
        area: 61,
        languages: ["Italian"],
        currency: "Euro (EUR)"
    },

    SRB: {
        area: 88361,
        languages: ["Serbian"],
        currency: "Serbian dinar (RSD)"
    },

    SVK: {
        area: 49037,
        languages: ["Slovak"],
        currency: "Euro (EUR)"
    },

    SVN: {
        area: 20273,
        languages: ["Slovene"],
        currency: "Euro (EUR)"
    },

    ESP: {
        area: 505992,
        languages: ["Spanish"],
        currency: "Euro (EUR)"
    },

    SWE: {
        area: 450295,
        languages: ["Swedish"],
        currency: "Swedish krona (SEK)"
    },

    CHE: {
        area: 41284,
        languages: [
            "German",
            "French",
            "Italian",
            "Romansh"
        ],
        currency: "Swiss franc (CHF)"
    },

    UKR: {
        area: 603500,
        languages: ["Ukrainian"],
        currency: "Ukrainian hryvnia (UAH)"
    },

    GBR: {
        area: 242900,
        languages: ["English"],
        currency: "Pound sterling (GBP)"
    },

    VAT: {
        area: 0.49,
        languages: ["Italian", "Latin"],
        currency: "Euro (EUR)"
    },


    // ========================================================
    // NORTH AMERICA, CENTRAL AMERICA & CARIBBEAN
    // ========================================================

    ATG: {
        area: 442,
        languages: ["English"],
        currency: "East Caribbean dollar (XCD)"
    },

    BHS: {
        area: 13943,
        languages: ["English"],
        currency: "Bahamian dollar (BSD)"
    },

    BRB: {
        area: 430,
        languages: ["English"],
        currency: "Barbadian dollar (BBD)"
    },

    BLZ: {
        area: 22966,
        languages: ["English"],
        currency: "Belize dollar (BZD)"
    },

    CAN: {
        area: 9984670,
        languages: ["English", "French"],
        currency: "Canadian dollar (CAD)"
    },

    CRI: {
        area: 51100,
        languages: ["Spanish"],
        currency: "Costa Rican colón (CRC)"
    },

    CUB: {
        area: 109884,
        languages: ["Spanish"],
        currency: "Cuban peso (CUP)"
    },

    DMA: {
        area: 751,
        languages: ["English"],
        currency: "East Caribbean dollar (XCD)"
    },

    DOM: {
        area: 48671,
        languages: ["Spanish"],
        currency: "Dominican peso (DOP)"
    },

    SLV: {
        area: 21041,
        languages: ["Spanish"],
        currency: "United States dollar (USD)"
    },

    GRD: {
        area: 344,
        languages: ["English"],
        currency: "East Caribbean dollar (XCD)"
    },

    GTM: {
        area: 108889,
        languages: ["Spanish"],
        currency: "Guatemalan quetzal (GTQ)"
    },

    HTI: {
        area: 27750,
        languages: [
            "Haitian Creole",
            "French"
        ],
        currency: "Haitian gourde (HTG)"
    },

    HND: {
        area: 112492,
        languages: ["Spanish"],
        currency: "Honduran lempira (HNL)"
    },

    JAM: {
        area: 10991,
        languages: ["English"],
        currency: "Jamaican dollar (JMD)"
    },

    MEX: {
        area: 1964375,
        languages: ["Spanish"],
        currency: "Mexican peso (MXN)"
    },

    NIC: {
        area: 130373,
        languages: ["Spanish"],
        currency: "Nicaraguan córdoba (NIO)"
    },

    PAN: {
        area: 75417,
        languages: ["Spanish"],
        currency: "Panamanian balboa (PAB), United States dollar (USD)"
    },

    KNA: {
        area: 261,
        languages: ["English"],
        currency: "East Caribbean dollar (XCD)"
    },

    LCA: {
        area: 616,
        languages: ["English"],
        currency: "East Caribbean dollar (XCD)"
    },

    VCT: {
        area: 389,
        languages: ["English"],
        currency: "East Caribbean dollar (XCD)"
    },

    TTO: {
        area: 5130,
        languages: ["English"],
        currency: "Trinidad and Tobago dollar (TTD)"
    },

    USA: {
        area: 9833517,
        languages: ["English"],
        currency: "United States dollar (USD)"
    },


    // ========================================================
    // SOUTH AMERICA
    // ========================================================

    ARG: {
        area: 2780400,
        languages: ["Spanish"],
        currency: "Argentine peso (ARS)"
    },

    BOL: {
        area: 1098581,
        languages: [
            "Spanish",
            "Quechua",
            "Aymara",
            "Guaraní"
        ],
        currency: "Bolivian boliviano (BOB)"
    },

    BRA: {
        area: 8515767,
        languages: ["Portuguese"],
        currency: "Brazilian real (BRL)"
    },

    CHL: {
        area: 756102,
        languages: ["Spanish"],
        currency: "Chilean peso (CLP)"
    },

    COL: {
        area: 1141748,
        languages: ["Spanish"],
        currency: "Colombian peso (COP)"
    },

    ECU: {
        area: 276841,
        languages: ["Spanish"],
        currency: "United States dollar (USD)"
    },

    GUY: {
        area: 214969,
        languages: ["English"],
        currency: "Guyanese dollar (GYD)"
    },

    PRY: {
        area: 406752,
        languages: ["Spanish", "Guaraní"],
        currency: "Paraguayan guaraní (PYG)"
    },

    PER: {
        area: 1285216,
        languages: [
            "Spanish",
            "Quechua",
            "Aymara"
        ],
        currency: "Peruvian sol (PEN)"
    },

    SUR: {
        area: 163820,
        languages: ["Dutch"],
        currency: "Surinamese dollar (SRD)"
    },

    URY: {
        area: 176215,
        languages: ["Spanish"],
        currency: "Uruguayan peso (UYU)"
    },

    VEN: {
        area: 916445,
        languages: ["Spanish"],
        currency: "Venezuelan bolívar (VES)"
    },


    // ========================================================
    // OCEANIA
    // ========================================================

    AUS: {
        area: 7692024,
        languages: ["English"],
        currency: "Australian dollar (AUD)"
    },

    FJI: {
        area: 18272,
        languages: [
            "English",
            "Fijian",
            "Fiji Hindi"
        ],
        currency: "Fijian dollar (FJD)"
    },

    KIR: {
        area: 811,
        languages: ["English", "Gilbertese"],
        currency: "Australian dollar (AUD)"
    },

    MHL: {
        area: 181,
        languages: ["Marshallese", "English"],
        currency: "United States dollar (USD)"
    },

    FSM: {
        area: 702,
        languages: ["English"],
        currency: "United States dollar (USD)"
    },

    NRU: {
        area: 21,
        languages: ["Nauruan", "English"],
        currency: "Australian dollar (AUD)"
    },

    NZL: {
        area: 270467,
        languages: [
            "English",
            "Māori",
            "New Zealand Sign Language"
        ],
        currency: "New Zealand dollar (NZD)"
    },

    PLW: {
        area: 459,
        languages: ["Palauan", "English"],
        currency: "United States dollar (USD)"
    },

    PNG: {
        area: 462840,
        languages: [
            "English",
            "Tok Pisin",
            "Hiri Motu"
        ],
        currency: "Papua New Guinean kina (PGK)"
    },

    WSM: {
        area: 2842,
        languages: ["Samoan", "English"],
        currency: "Samoan tālā (WST)"
    },

    SLB: {
        area: 28896,
        languages: ["English"],
        currency: "Solomon Islands dollar (SBD)"
    },

    TON: {
        area: 747,
        languages: ["Tongan", "English"],
        currency: "Tongan paʻanga (TOP)"
    },

    TUV: {
        area: 26,
        languages: ["Tuvaluan", "English"],
        currency: "Australian dollar (AUD)"
    },

    VUT: {
        area: 12189,
        languages: [
            "Bislama",
            "English",
            "French"
        ],
        currency: "Vanuatu vatu (VUV)"
    }

};
// ============================================================
// APPLY STABLE COUNTRY FACTS
// ============================================================
//
// Matches every stable fact record to the corresponding
// Conflict Atlas country profile using ISO-3.
//
// ============================================================

function applyStableCountryFacts() {

    let matchedCount = 0;

    countries.forEach(
        country => {

            const facts =
                stableCountryFacts[
                    country.iso3
                ];

            if (!facts) {

                console.warn(
                    `No stable country facts found for ${country.name} (${country.iso3}).`
                );

                return;

            }


            // ----------------------------------------
            // AREA
            // ----------------------------------------

            country.atAGlance.areaKm2 =
                facts.area;


            // ----------------------------------------
            // LANGUAGES
            // ----------------------------------------

            country.atAGlance.languages =
                Array.isArray(
                    facts.languages
                )
                    ? [...facts.languages]
                    : [];


            // ----------------------------------------
            // CURRENCY
            // ----------------------------------------

            country.atAGlance.currency =
                facts.currency || null;


            // ----------------------------------------
            // FACT VERIFICATION
            // ----------------------------------------

            if (!country.factVerification) {

                country.factVerification = {};

            }


            country.factVerification.area = {

                source:
                    "Conflict Atlas stable country reference data",

                unit:
                    "square kilometres",

                verified:
                    "2026-09-30"

            };


            country.factVerification.languages = {

                source:
                    "Conflict Atlas stable country reference data",

                verified:
                    "2026-09-30"

            };


            country.factVerification.currency = {

                source:
                    "Conflict Atlas stable country reference data",

                verified:
                    "2026-09-30"

            };


            matchedCount += 1;

        }
    );


    countryFactsStatus.stableFactsLoaded =
        true;


    console.log(
        `Conflict Atlas loaded stable facts for ${matchedCount} of ${countries.length} country profiles.`
    );

}


// ============================================================
// COUNTRY OVERVIEWS
// ============================================================
//
// These are intentionally short and neutral.
//
// More detailed country-specific descriptions can be added
// later without changing the profile interface.
//
// ============================================================

function buildCountryOverview(country) {

    if (!country) {

        return "";

    }


    const regionText =
        country.subregion &&
        country.region

            ? `${country.subregion}, ${country.region}`

            : (
                country.region ||
                "its geographic region"
            );


    return (
        `${country.name} is located in ${regionText}. ` +
        `Its capital is ${country.capital}. ` +
        `This profile provides geographic, political, humanitarian and crisis-related context used throughout Conflict Atlas.`
    );

}


// ============================================================
// APPLY COUNTRY OVERVIEWS
// ============================================================

function applyCountryOverviews() {

    countries.forEach(
        country => {

            country.overview =
                buildCountryOverview(
                    country
                );

        }
    );

}


// ============================================================
// UNITED NATIONS MEMBERSHIP BASELINE
// ============================================================
//
// Conflict Atlas contains:
//
// 193 UN member states
// Holy See
// State of Palestine
//
// The latter two are represented as UN non-member observer
// states.
//
// ============================================================

function applyUnitedNationsMembership() {

    countries.forEach(
        country => {

            if (
                !country.government ||
                !Array.isArray(
                    country.government
                        .internationalOrganizations
                )
            ) {

                return;

            }


            // Prevent duplicate UN entries if this function
            // is ever called more than once.

            const alreadyHasUnitedNations =
                country.government
                    .internationalOrganizations
                    .some(
                        organization =>
                            organization.name ===
                            "United Nations"
                    );


            if (
                alreadyHasUnitedNations
            ) {

                return;

            }


            if (
                country.iso3 === "VAT" ||
                country.iso3 === "PSE"
            ) {

                country.government
                    .internationalOrganizations
                    .push({

                        name:
                            "United Nations",

                        status:
                            "Non-member observer state"

                    });

            } else {

                country.government
                    .internationalOrganizations
                    .push({

                        name:
                            "United Nations",

                        status:
                            "Member state"

                    });

            }

        }
    );

}


// ============================================================
// SPECIAL COUNTRY OVERVIEWS
// ============================================================
//
// countries.js already contains special notes for countries
// where the capital or constitutional arrangement benefits
// from additional explanation.
//
// We preserve those notes rather than replacing them with the
// generic overview.
//
// ============================================================

function applySpecialCountryOverviews() {

    const specialOverviewIso3 = [

        "BOL",
        "BDI",
        "CIV",
        "GNQ",
        "SWZ",
        "IDN",
        "ISR",
        "MYS",
        "NRU",
        "NLD",
        "ZAF",
        "LKA",
        "PSE",
        "CHE",
        "TZA"

    ];


    specialOverviewIso3.forEach(
        iso3 => {

            const country =
                getCountryByIso3(
                    iso3
                );


            if (
                !country ||
                !country.countryNote
            ) {

                return;

            }


            country.overview =
                (
                    `${country.name} is located in ` +
                    `${country.subregion}, ${country.region}. ` +
                    `${country.countryNote}`
                );

        }
    );

}


// ============================================================
// ADD COUNTRY FACT SOURCES
// ============================================================

function addCountryFactsSources() {

    countries.forEach(
        country => {


            // ----------------------------------------
            // WORLD BANK POPULATION
            // ----------------------------------------

            addCountrySource(
                country.iso3,
                {

                    id:
                        "world-bank-population",

                    name:
                        "World Bank — Population, total",

                    url:
                        "https://data.worldbank.org/indicator/SP.POP.TOTL",

                    type:
                        "international-organization"

                }
            );


            // ----------------------------------------
            // UNITED NATIONS M49
            // ----------------------------------------

            addCountrySource(
                country.iso3,
                {

                    id:
                        "un-m49-country-classification",

                    name:
                        "United Nations Statistics Division — M49",

                    url:
                        "https://unstats.un.org/unsd/methodology/m49/",

                    type:
                        "international-organization"

                }
            );

        }
    );

}


// ============================================================
// VALIDATE STABLE FACT DATABASE
// ============================================================

function validateStableCountryFacts() {

    const missingProfiles = [];

    const unusedFactRecords = [];


    // ----------------------------------------
    // CHECK EVERY COUNTRY PROFILE
    // ----------------------------------------

    countries.forEach(
        country => {

            const facts =
                stableCountryFacts[
                    country.iso3
                ];


            if (!facts) {

                missingProfiles.push(
                    `${country.name} (${country.iso3})`
                );

                return;

            }


            // AREA

            if (
                facts.area === null ||
                facts.area === undefined ||
                Number.isNaN(
                    Number(
                        facts.area
                    )
                )
            ) {

                console.warn(
                    `${country.name} has invalid area data.`
                );

            }


            // LANGUAGES

            if (
                !Array.isArray(
                    facts.languages
                ) ||
                facts.languages.length === 0
            ) {

                console.warn(
                    `${country.name} has no language data.`
                );

            }


            // CURRENCY

            if (
                !facts.currency
            ) {

                console.warn(
                    `${country.name} has no currency data.`
                );

            }

        }
    );


    // ----------------------------------------
    // CHECK FOR UNUSED ISO RECORDS
    // ----------------------------------------

    Object.keys(
        stableCountryFacts
    )
        .forEach(
            iso3 => {

                const exists =
                    countries.some(
                        country =>
                            country.iso3 ===
                            iso3
                    );


                if (!exists) {

                    unusedFactRecords.push(
                        iso3
                    );

                }

            }
        );


    // ----------------------------------------
    // REPORT
    // ----------------------------------------

    if (
        missingProfiles.length === 0
    ) {

        console.log(
            `Stable facts matched all ${countries.length} Conflict Atlas country profiles.`
        );

    } else {

        console.warn(
            "Country profiles missing stable facts:",
            missingProfiles
        );

    }


    if (
        unusedFactRecords.length > 0
    ) {

        console.warn(
            "Stable fact records without a matching country profile:",
            unusedFactRecords
        );

    }

}


// ============================================================
// VERIFY COUNTRY PROFILE STRUCTURE
// ============================================================

function validateCountryFacts() {

    countries.forEach(
        country => {

            if (
                !country.atAGlance
            ) {

                console.warn(
                    `${country.name} is missing atAGlance data.`
                );

            }


            if (
                !country.government
            ) {

                console.warn(
                    `${country.name} is missing government data.`
                );

                return;

            }


            if (
                !Array.isArray(
                    country.government
                        .internationalOrganizations
                )
            ) {

                console.warn(
                    `${country.name} has an invalid internationalOrganizations field.`
                );

            }

        }
    );

}


// ============================================================
// REFRESH AN OPEN COUNTRY PROFILE
// ============================================================
//
// Population arrives asynchronously from the World Bank.
//
// If the user opens a country while population data is still
// loading, this refreshes the currently open profile after the
// external population requests finish.
//
// ============================================================

function refreshOpenCountryProfile() {

    if (
        typeof openCountryPanel !==
        "function"
    ) {

        return;

    }


    if (
        typeof countryPanel ===
        "undefined" ||
        !countryPanel
    ) {

        return;

    }


    if (
        !countryPanel.classList.contains(
            "open"
        )
    ) {

        return;

    }


    const displayedCountryName =
        (
            typeof countryNameElement !==
                "undefined" &&
            countryNameElement
        )
            ? countryNameElement
                .textContent
                .trim()
            : "";


    if (
        !displayedCountryName
    ) {

        return;

    }


    const country =
        countries.find(
            profile =>
                profile.name ===
                displayedCountryName
        );


    if (
        country
    ) {

        openCountryPanel(
            country
        );

    }

}


// ============================================================
// INITIALIZE COUNTRY FACTS
// ============================================================

async function initializeCountryFacts() {

    if (
        countryFactsStatus.loading
    ) {

        return;

    }


    countryFactsStatus.loading =
        true;


    console.log(
        `Conflict Atlas Country Facts v${COUNTRY_FACTS_VERSION} loading...`
    );


    // ========================================================
    // LOCAL INFORMATION
    //
    // Apply these immediately. They do not require an external
    // request.
    // ========================================================

    applyStableCountryFacts();

    applyCountryOverviews();

    applySpecialCountryOverviews();

    applyUnitedNationsMembership();

    addCountryFactsSources();

    validateCountryFacts();

    validateStableCountryFacts();


    // ========================================================
    // EXTERNAL STATISTICAL INFORMATION
    //
    // Population remains sourced from the World Bank.
    // ========================================================

    await loadAllCountryPopulations();


    countryFactsStatus.loading =
        false;


    console.log(
        "Conflict Atlas country facts ready."
    );


    if (
        countryFactsStatus.errors.length >
        0
    ) {

        console.warn(
            "Some country facts could not be loaded:",
            countryFactsStatus.errors
        );

    }


    // If a country profile was opened before the World Bank
    // population finished loading, update it now.

    refreshOpenCountryProfile();

}


// ============================================================
// START
// ============================================================

initializeCountryFacts();
