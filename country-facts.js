// ============================================================
// ONE WORLD, ONE LIFE — COUNTRY FACTS
// Conflict Atlas
//
// VERSION 5.0
//
// DESIGN:
// - Population: World Bank API
// - Stable country facts: stored locally
// - Government structure: stored locally where defined
// - Leadership: separate from stable geographic facts
//
// This file does NOT modify crisis relationships.
// Crisis relationships remain in countries.js.
// ============================================================


// ============================================================
// SETTINGS
// ============================================================

const COUNTRY_FACTS_VERSION = "5.0";

const WORLD_BANK_API =
    "https://api.worldbank.org/v2";


const countryFactsStatus = {

    populationLoaded: false,

    localFactsLoaded: false,

    leadershipLoaded: false,

    loading: false,

    errors: []

};


// ============================================================
// BASIC HELPERS
// ============================================================

function safeText(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return null;

    }

    const text =
        String(value).trim();

    return text || null;

}


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
// FETCH JSON
// ============================================================

async function fetchCountryFactsJson(
    url,
    options = {}
) {

    const response =
        await fetch(
            url,
            options
        );

    if (!response.ok) {

        throw new Error(
            `Request failed with status ${response.status}`
        );

    }

    return response.json();

}


// ============================================================
// LOCAL FACT DATABASE
//
// Format:
//
// ISO3: {
//     areaKm2: number,
//     languages: [],
//     currency: "Name (CODE)",
//     governmentType: "description"
// }
//
// These values are independent of the live population request.
// ============================================================

const LOCAL_COUNTRY_FACTS = {

    AFG: {
        areaKm2: 652230,
        languages: [
            "Dari",
            "Pashto"
        ],
        currency:
            "Afghan afghani (AFN)",
        governmentType:
            null
    },

    ALB: {
        areaKm2: 28748,
        languages: [
            "Albanian"
        ],
        currency:
            "Albanian lek (ALL)",
        governmentType:
            "Parliamentary republic"
    },

    DZA: {
        areaKm2: 2381741,
        languages: [
            "Arabic",
            "Tamazight"
        ],
        currency:
            "Algerian dinar (DZD)",
        governmentType:
            "Semi-presidential republic"
    },

    AND: {
        areaKm2: 468,
        languages: [
            "Catalan"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Parliamentary co-principality"
    },

    AGO: {
        areaKm2: 1246700,
        languages: [
            "Portuguese"
        ],
        currency:
            "Angolan kwanza (AOA)",
        governmentType:
            "Presidential republic"
    },

    ATG: {
        areaKm2: 442,
        languages: [
            "English"
        ],
        currency:
            "East Caribbean dollar (XCD)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    ARG: {
        areaKm2: 2780400,
        languages: [
            "Spanish"
        ],
        currency:
            "Argentine peso (ARS)",
        governmentType:
            "Federal presidential republic"
    },

    ARM: {
        areaKm2: 29743,
        languages: [
            "Armenian"
        ],
        currency:
            "Armenian dram (AMD)",
        governmentType:
            "Parliamentary republic"
    },

    AUS: {
        areaKm2: 7692024,
        languages: [
            "English"
        ],
        currency:
            "Australian dollar (AUD)",
        governmentType:
            "Federal parliamentary constitutional monarchy"
    },

    AUT: {
        areaKm2: 83879,
        languages: [
            "German"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Federal parliamentary republic"
    },

    AZE: {
        areaKm2: 86600,
        languages: [
            "Azerbaijani"
        ],
        currency:
            "Azerbaijani manat (AZN)",
        governmentType:
            "Presidential republic"
    },

    BHS: {
        areaKm2: 13880,
        languages: [
            "English"
        ],
        currency:
            "Bahamian dollar (BSD)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    BHR: {
        areaKm2: 786,
        languages: [
            "Arabic"
        ],
        currency:
            "Bahraini dinar (BHD)",
        governmentType:
            "Constitutional monarchy"
    },

    BGD: {
        areaKm2: 148460,
        languages: [
            "Bengali"
        ],
        currency:
            "Bangladeshi taka (BDT)",
        governmentType:
            "Parliamentary republic"
    },

    BRB: {
        areaKm2: 430,
        languages: [
            "English"
        ],
        currency:
            "Barbadian dollar (BBD)",
        governmentType:
            "Parliamentary republic"
    },

    BLR: {
        areaKm2: 207600,
        languages: [
            "Belarusian",
            "Russian"
        ],
        currency:
            "Belarusian ruble (BYN)",
        governmentType:
            "Presidential republic"
    },

    BEL: {
        areaKm2: 30528,
        languages: [
            "Dutch",
            "French",
            "German"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Federal parliamentary constitutional monarchy"
    },

    BLZ: {
        areaKm2: 22966,
        languages: [
            "English"
        ],
        currency:
            "Belize dollar (BZD)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    BEN: {
        areaKm2: 114763,
        languages: [
            "French"
        ],
        currency:
            "West African CFA franc (XOF)",
        governmentType:
            "Presidential republic"
    },

    BTN: {
        areaKm2: 38394,
        languages: [
            "Dzongkha"
        ],
        currency:
            "Bhutanese ngultrum (BTN)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    BOL: {
        areaKm2: 1098581,
        languages: [
            "Spanish",
            "Quechua",
            "Aymara",
            "Guaraní"
        ],
        currency:
            "Bolivian boliviano (BOB)",
        governmentType:
            "Presidential republic"
    },

    BIH: {
        areaKm2: 51209,
        languages: [
            "Bosnian",
            "Croatian",
            "Serbian"
        ],
        currency:
            "Bosnia and Herzegovina convertible mark (BAM)",
        governmentType:
            "Parliamentary republic"
    },

    BWA: {
        areaKm2: 581730,
        languages: [
            "English",
            "Setswana"
        ],
        currency:
            "Botswana pula (BWP)",
        governmentType:
            "Parliamentary republic"
    },

    BRA: {
        areaKm2: 8515767,
        languages: [
            "Portuguese"
        ],
        currency:
            "Brazilian real (BRL)",
        governmentType:
            "Federal presidential republic"
    },

    BRN: {
        areaKm2: 5765,
        languages: [
            "Malay"
        ],
        currency:
            "Brunei dollar (BND)",
        governmentType:
            "Absolute monarchy"
    },

    BGR: {
        areaKm2: 110879,
        languages: [
            "Bulgarian"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Parliamentary republic"
    },

    BFA: {
        areaKm2: 274200,
        languages: [
            "French"
        ],
        currency:
            "West African CFA franc (XOF)",
        governmentType:
            null
    },

    BDI: {
        areaKm2: 27834,
        languages: [
            "Kirundi",
            "French",
            "English"
        ],
        currency:
            "Burundian franc (BIF)",
        governmentType:
            "Presidential republic"
    },

    CPV: {
        areaKm2: 4033,
        languages: [
            "Portuguese"
        ],
        currency:
            "Cape Verdean escudo (CVE)",
        governmentType:
            "Semi-presidential republic"
    },

    KHM: {
        areaKm2: 181035,
        languages: [
            "Khmer"
        ],
        currency:
            "Cambodian riel (KHR)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    CMR: {
        areaKm2: 475442,
        languages: [
            "English",
            "French"
        ],
        currency:
            "Central African CFA franc (XAF)",
        governmentType:
            "Presidential republic"
    },

    CAN: {
        areaKm2: 9984670,
        languages: [
            "English",
            "French"
        ],
        currency:
            "Canadian dollar (CAD)",
        governmentType:
            "Federal parliamentary constitutional monarchy"
    },

    CAF: {
        areaKm2: 622984,
        languages: [
            "French",
            "Sango"
        ],
        currency:
            "Central African CFA franc (XAF)",
        governmentType:
            "Presidential republic"
    },

    TCD: {
        areaKm2: 1284000,
        languages: [
            "Arabic",
            "French"
        ],
        currency:
            "Central African CFA franc (XAF)",
        governmentType:
            "Presidential republic"
    },

    CHL: {
        areaKm2: 756102,
        languages: [
            "Spanish"
        ],
        currency:
            "Chilean peso (CLP)",
        governmentType:
            "Presidential republic"
    },

    CHN: {
        areaKm2: 9596961,
        languages: [
            "Standard Chinese"
        ],
        currency:
            "Renminbi (CNY)",
        governmentType:
            "Unitary one-party socialist republic"
    },

    COL: {
        areaKm2: 1141748,
        languages: [
            "Spanish"
        ],
        currency:
            "Colombian peso (COP)",
        governmentType:
            "Presidential republic"
    },

    COM: {
        areaKm2: 1862,
        languages: [
            "Comorian",
            "Arabic",
            "French"
        ],
        currency:
            "Comorian franc (KMF)",
        governmentType:
            "Federal presidential republic"
    },

    COG: {
        areaKm2: 342000,
        languages: [
            "French"
        ],
        currency:
            "Central African CFA franc (XAF)",
        governmentType:
            "Presidential republic"
    },

    COD: {
        areaKm2: 2344858,
        languages: [
            "French"
        ],
        currency:
            "Congolese franc (CDF)",
        governmentType:
            "Semi-presidential republic"
    },

    CRI: {
        areaKm2: 51100,
        languages: [
            "Spanish"
        ],
        currency:
            "Costa Rican colón (CRC)",
        governmentType:
            "Presidential republic"
    },

    CIV: {
        areaKm2: 322463,
        languages: [
            "French"
        ],
        currency:
            "West African CFA franc (XOF)",
        governmentType:
            "Presidential republic"
    },

    HRV: {
        areaKm2: 56594,
        languages: [
            "Croatian"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Parliamentary republic"
    },

    CUB: {
        areaKm2: 109884,
        languages: [
            "Spanish"
        ],
        currency:
            "Cuban peso (CUP)",
        governmentType:
            "One-party socialist republic"
    },

    CYP: {
        areaKm2: 9251,
        languages: [
            "Greek",
            "Turkish"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Presidential republic"
    },

    CZE: {
        areaKm2: 78871,
        languages: [
            "Czech"
        ],
        currency:
            "Czech koruna (CZK)",
        governmentType:
            "Parliamentary republic"
    },

    DNK: {
        areaKm2: 42933,
        languages: [
            "Danish"
        ],
        currency:
            "Danish krone (DKK)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    DJI: {
        areaKm2: 23200,
        languages: [
            "Arabic",
            "French"
        ],
        currency:
            "Djiboutian franc (DJF)",
        governmentType:
            "Presidential republic"
    },

    DMA: {
        areaKm2: 751,
        languages: [
            "English"
        ],
        currency:
            "East Caribbean dollar (XCD)",
        governmentType:
            "Parliamentary republic"
    },

    DOM: {
        areaKm2: 48671,
        languages: [
            "Spanish"
        ],
        currency:
            "Dominican peso (DOP)",
        governmentType:
            "Presidential republic"
    },

    ECU: {
        areaKm2: 256370,
        languages: [
            "Spanish"
        ],
        currency:
            "United States dollar (USD)",
        governmentType:
            "Presidential republic"
    },

    EGY: {
        areaKm2: 1002450,
        languages: [
            "Arabic"
        ],
        currency:
            "Egyptian pound (EGP)",
        governmentType:
            "Semi-presidential republic"
    },

    SLV: {
        areaKm2: 21041,
        languages: [
            "Spanish"
        ],
        currency:
            "United States dollar (USD)",
        governmentType:
            "Presidential republic"
    },

    GNQ: {
        areaKm2: 28051,
        languages: [
            "Spanish",
            "French",
            "Portuguese"
        ],
        currency:
            "Central African CFA franc (XAF)",
        governmentType:
            "Presidential republic"
    },

    ERI: {
        areaKm2: 117600,
        languages: [
            "Tigrinya",
            "Arabic",
            "English"
        ],
        currency:
            "Eritrean nakfa (ERN)",
        governmentType:
            "One-party presidential republic"
    },

    EST: {
        areaKm2: 45339,
        languages: [
            "Estonian"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Parliamentary republic"
    },

    SWZ: {
        areaKm2: 17364,
        languages: [
            "Swazi",
            "English"
        ],
        currency:
            "Swazi lilangeni (SZL)",
        governmentType:
            "Absolute monarchy"
    },

    ETH: {
        areaKm2: 1104300,
        languages: [
            "Amharic"
        ],
        currency:
            "Ethiopian birr (ETB)",
        governmentType:
            "Federal parliamentary republic"
    },

    FJI: {
        areaKm2: 18274,
        languages: [
            "English",
            "Fijian",
            "Fiji Hindi"
        ],
        currency:
            "Fijian dollar (FJD)",
        governmentType:
            "Parliamentary republic"
    },

    FIN: {
        areaKm2: 338455,
        languages: [
            "Finnish",
            "Swedish"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Parliamentary republic"
    },

    FRA: {
        areaKm2: 551695,
        languages: [
            "French"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Semi-presidential republic"
    },

    GAB: {
        areaKm2: 267668,
        languages: [
            "French"
        ],
        currency:
            "Central African CFA franc (XAF)",
        governmentType:
            "Presidential republic"
    },

    GMB: {
        areaKm2: 11295,
        languages: [
            "English"
        ],
        currency:
            "Gambian dalasi (GMD)",
        governmentType:
            "Presidential republic"
    },

    GEO: {
        areaKm2: 69700,
        languages: [
            "Georgian"
        ],
        currency:
            "Georgian lari (GEL)",
        governmentType:
            "Parliamentary republic"
    },

    DEU: {
        areaKm2: 357022,
        languages: [
            "German"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Federal parliamentary republic"
    },

    GHA: {
        areaKm2: 238533,
        languages: [
            "English"
        ],
        currency:
            "Ghanaian cedi (GHS)",
        governmentType:
            "Presidential republic"
    },

    GRC: {
        areaKm2: 131957,
        languages: [
            "Greek"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Parliamentary republic"
    },

    GRD: {
        areaKm2: 344,
        languages: [
            "English"
        ],
        currency:
            "East Caribbean dollar (XCD)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    GTM: {
        areaKm2: 108889,
        languages: [
            "Spanish"
        ],
        currency:
            "Guatemalan quetzal (GTQ)",
        governmentType:
            "Presidential republic"
    },

    GIN: {
        areaKm2: 245857,
        languages: [
            "French"
        ],
        currency:
            "Guinean franc (GNF)",
        governmentType:
            null
    },

    GNB: {
        areaKm2: 36125,
        languages: [
            "Portuguese"
        ],
        currency:
            "West African CFA franc (XOF)",
        governmentType:
            "Semi-presidential republic"
    },

    GUY: {
        areaKm2: 214969,
        languages: [
            "English"
        ],
        currency:
            "Guyanese dollar (GYD)",
        governmentType:
            "Presidential republic"
    },

    HTI: {
        areaKm2: 27750,
        languages: [
            "Haitian Creole",
            "French"
        ],
        currency:
            "Haitian gourde (HTG)",
        governmentType:
            null
    },

    HND: {
        areaKm2: 112492,
        languages: [
            "Spanish"
        ],
        currency:
            "Honduran lempira (HNL)",
        governmentType:
            "Presidential republic"
    },

    HUN: {
        areaKm2: 93028,
        languages: [
            "Hungarian"
        ],
        currency:
            "Hungarian forint (HUF)",
        governmentType:
            "Parliamentary republic"
    },

    ISL: {
        areaKm2: 103000,
        languages: [
            "Icelandic"
        ],
        currency:
            "Icelandic króna (ISK)",
        governmentType:
            "Parliamentary republic"
    },

    IND: {
        areaKm2: 3287263,
        languages: [
            "Hindi",
            "English"
        ],
        currency:
            "Indian rupee (INR)",
        governmentType:
            "Federal parliamentary republic"
    },

    IDN: {
        areaKm2: 1904569,
        languages: [
            "Indonesian"
        ],
        currency:
            "Indonesian rupiah (IDR)",
        governmentType:
            "Presidential republic"
    },

    IRN: {
        areaKm2: 1648195,
        languages: [
            "Persian"
        ],
        currency:
            "Iranian rial (IRR)",
        governmentType:
            "Islamic republic"
    },

    IRQ: {
        areaKm2: 438317,
        languages: [
            "Arabic",
            "Kurdish"
        ],
        currency:
            "Iraqi dinar (IQD)",
        governmentType:
            "Federal parliamentary republic"
    },

    IRL: {
        areaKm2: 70273,
        languages: [
            "Irish",
            "English"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Parliamentary republic"
    },

    ISR: {
        areaKm2: 22072,
        languages: [
            "Hebrew"
        ],
        currency:
            "Israeli new shekel (ILS)",
        governmentType:
            "Parliamentary republic"
    },

    ITA: {
        areaKm2: 301340,
        languages: [
            "Italian"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Parliamentary republic"
    },

    JAM: {
        areaKm2: 10991,
        languages: [
            "English"
        ],
        currency:
            "Jamaican dollar (JMD)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    JPN: {
        areaKm2: 377975,
        languages: [
            "Japanese"
        ],
        currency:
            "Japanese yen (JPY)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    JOR: {
        areaKm2: 89342,
        languages: [
            "Arabic"
        ],
        currency:
            "Jordanian dinar (JOD)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    KAZ: {
        areaKm2: 2724900,
        languages: [
            "Kazakh",
            "Russian"
        ],
        currency:
            "Kazakhstani tenge (KZT)",
        governmentType:
            "Presidential republic"
    },

    KEN: {
        areaKm2: 580367,
        languages: [
            "English",
            "Swahili"
        ],
        currency:
            "Kenyan shilling (KES)",
        governmentType:
            "Presidential republic"
    },

    KIR: {
        areaKm2: 811,
        languages: [
            "English",
            "Gilbertese"
        ],
        currency:
            "Australian dollar (AUD)",
        governmentType:
            "Presidential republic"
    },

    PRK: {
        areaKm2: 120538,
        languages: [
            "Korean"
        ],
        currency:
            "North Korean won (KPW)",
        governmentType:
            "One-party socialist republic"
    },

    KOR: {
        areaKm2: 100210,
        languages: [
            "Korean"
        ],
        currency:
            "South Korean won (KRW)",
        governmentType:
            "Presidential republic"
    },

    KWT: {
        areaKm2: 17818,
        languages: [
            "Arabic"
        ],
        currency:
            "Kuwaiti dinar (KWD)",
        governmentType:
            "Constitutional monarchy"
    },

    KGZ: {
        areaKm2: 199951,
        languages: [
            "Kyrgyz",
            "Russian"
        ],
        currency:
            "Kyrgyzstani som (KGS)",
        governmentType:
            "Presidential republic"
    },

    LAO: {
        areaKm2: 236800,
        languages: [
            "Lao"
        ],
        currency:
            "Lao kip (LAK)",
        governmentType:
            "One-party socialist republic"
    },

    LVA: {
        areaKm2: 64589,
        languages: [
            "Latvian"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Parliamentary republic"
    },

    LBN: {
        areaKm2: 10452,
        languages: [
            "Arabic"
        ],
        currency:
            "Lebanese pound (LBP)",
        governmentType:
            "Parliamentary republic"
    },

    LSO: {
        areaKm2: 30355,
        languages: [
            "Sesotho",
            "English"
        ],
        currency:
            "Lesotho loti (LSL)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    LBR: {
        areaKm2: 111369,
        languages: [
            "English"
        ],
        currency:
            "Liberian dollar (LRD)",
        governmentType:
            "Presidential republic"
    },

    LBY: {
        areaKm2: 1759540,
        languages: [
            "Arabic"
        ],
        currency:
            "Libyan dinar (LYD)",
        governmentType:
            null
    },

    LIE: {
        areaKm2: 160,
        languages: [
            "German"
        ],
        currency:
            "Swiss franc (CHF)",
        governmentType:
            "Constitutional monarchy"
    },

    LTU: {
        areaKm2: 65300,
        languages: [
            "Lithuanian"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Semi-presidential republic"
    },

    LUX: {
        areaKm2: 2586,
        languages: [
            "Luxembourgish",
            "French",
            "German"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    MDG: {
        areaKm2: 587041,
        languages: [
            "Malagasy",
            "French"
        ],
        currency:
            "Malagasy ariary (MGA)",
        governmentType:
            "Semi-presidential republic"
    },

    MWI: {
        areaKm2: 118484,
        languages: [
            "English",
            "Chichewa"
        ],
        currency:
            "Malawian kwacha (MWK)",
        governmentType:
            "Presidential republic"
    },

    MYS: {
        areaKm2: 330803,
        languages: [
            "Malay"
        ],
        currency:
            "Malaysian ringgit (MYR)",
        governmentType:
            "Federal parliamentary constitutional monarchy"
    },

    MDV: {
        areaKm2: 300,
        languages: [
            "Dhivehi"
        ],
        currency:
            "Maldivian rufiyaa (MVR)",
        governmentType:
            "Presidential republic"
    },

    MLI: {
        areaKm2: 1240192,
        languages: [
            "Bambara",
            "French"
        ],
        currency:
            "West African CFA franc (XOF)",
        governmentType:
            null
    },

    MLT: {
        areaKm2: 316,
        languages: [
            "Maltese",
            "English"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Parliamentary republic"
    },

    MHL: {
        areaKm2: 181,
        languages: [
            "Marshallese",
            "English"
        ],
        currency:
            "United States dollar (USD)",
        governmentType:
            "Parliamentary republic"
    },

    MRT: {
        areaKm2: 1030700,
        languages: [
            "Arabic"
        ],
        currency:
            "Mauritanian ouguiya (MRU)",
        governmentType:
            "Presidential republic"
    },

    MUS: {
        areaKm2: 2040,
        languages: [
            "English",
            "French",
            "Mauritian Creole"
        ],
        currency:
            "Mauritian rupee (MUR)",
        governmentType:
            "Parliamentary republic"
    },

    MEX: {
        areaKm2: 1964375,
        languages: [
            "Spanish"
        ],
        currency:
            "Mexican peso (MXN)",
        governmentType:
            "Federal presidential republic"
    },

    FSM: {
        areaKm2: 702,
        languages: [
            "English"
        ],
        currency:
            "United States dollar (USD)",
        governmentType:
            "Federal presidential republic"
    },

    MDA: {
        areaKm2: 33846,
        languages: [
            "Romanian"
        ],
        currency:
            "Moldovan leu (MDL)",
        governmentType:
            "Parliamentary republic"
    },

    MCO: {
        areaKm2: 2.08,
        languages: [
            "French"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Constitutional monarchy"
    },

    MNG: {
        areaKm2: 1564116,
        languages: [
            "Mongolian"
        ],
        currency:
            "Mongolian tögrög (MNT)",
        governmentType:
            "Semi-presidential republic"
    },

    MNE: {
        areaKm2: 13812,
        languages: [
            "Montenegrin"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Parliamentary republic"
    },

    MAR: {
        areaKm2: 446550,
        languages: [
            "Arabic",
            "Tamazight"
        ],
        currency:
            "Moroccan dirham (MAD)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    MOZ: {
        areaKm2: 801590,
        languages: [
            "Portuguese"
        ],
        currency:
            "Mozambican metical (MZN)",
        governmentType:
            "Presidential republic"
    },

    MMR: {
        areaKm2: 676578,
        languages: [
            "Burmese"
        ],
        currency:
            "Myanmar kyat (MMK)",
        governmentType:
            null
    },

    NAM: {
        areaKm2: 825615,
        languages: [
            "English"
        ],
        currency:
            "Namibian dollar (NAD)",
        governmentType:
            "Presidential republic"
    },

    NRU: {
        areaKm2: 21,
        languages: [
            "Nauruan",
            "English"
        ],
        currency:
            "Australian dollar (AUD)",
        governmentType:
            "Parliamentary republic"
    },

    NPL: {
        areaKm2: 147516,
        languages: [
            "Nepali"
        ],
        currency:
            "Nepalese rupee (NPR)",
        governmentType:
            "Federal parliamentary republic"
    },

    NLD: {
        areaKm2: 41850,
        languages: [
            "Dutch"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    NZL: {
        areaKm2: 268838,
        languages: [
            "English",
            "Māori",
            "New Zealand Sign Language"
        ],
        currency:
            "New Zealand dollar (NZD)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    NIC: {
        areaKm2: 130373,
        languages: [
            "Spanish"
        ],
        currency:
            "Nicaraguan córdoba (NIO)",
        governmentType:
            "Presidential republic"
    },

    NER: {
        areaKm2: 1267000,
        languages: [
            "French"
        ],
        currency:
            "West African CFA franc (XOF)",
        governmentType:
            null
    },

    NGA: {
        areaKm2: 923768,
        languages: [
            "English"
        ],
        currency:
            "Nigerian naira (NGN)",
        governmentType:
            "Federal presidential republic"
    },

    MKD: {
        areaKm2: 25713,
        languages: [
            "Macedonian",
            "Albanian"
        ],
        currency:
            "Macedonian denar (MKD)",
        governmentType:
            "Parliamentary republic"
    },

    NOR: {
        areaKm2: 385207,
        languages: [
            "Norwegian"
        ],
        currency:
            "Norwegian krone (NOK)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    OMN: {
        areaKm2: 309500,
        languages: [
            "Arabic"
        ],
        currency:
            "Omani rial (OMR)",
        governmentType:
            "Absolute monarchy"
    },

    PAK: {
        areaKm2: 881913,
        languages: [
            "Urdu",
            "English"
        ],
        currency:
            "Pakistani rupee (PKR)",
        governmentType:
            "Federal parliamentary republic"
    },

    PLW: {
        areaKm2: 459,
        languages: [
            "Palauan",
            "English"
        ],
        currency:
            "United States dollar (USD)",
        governmentType:
            "Presidential republic"
    },

    PSE: {
        areaKm2: 6020,
        languages: [
            "Arabic"
        ],
        currency:
            "Israeli new shekel (ILS)",
        governmentType:
            "Semi-presidential system"
    },

    PAN: {
        areaKm2: 75417,
        languages: [
            "Spanish"
        ],
        currency:
            "Panamanian balboa (PAB), United States dollar (USD)",
        governmentType:
            "Presidential republic"
    },

    PNG: {
        areaKm2: 462840,
        languages: [
            "English",
            "Tok Pisin",
            "Hiri Motu"
        ],
        currency:
            "Papua New Guinean kina (PGK)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    PRY: {
        areaKm2: 406752,
        languages: [
            "Spanish",
            "Guaraní"
        ],
        currency:
            "Paraguayan guaraní (PYG)",
        governmentType:
            "Presidential republic"
    },

    PER: {
        areaKm2: 1285216,
        languages: [
            "Spanish",
            "Quechua",
            "Aymara"
        ],
        currency:
            "Peruvian sol (PEN)",
        governmentType:
            "Presidential republic"
    },

    PHL: {
        areaKm2: 300000,
        languages: [
            "Filipino",
            "English"
        ],
        currency:
            "Philippine peso (PHP)",
        governmentType:
            "Presidential republic"
    },

    POL: {
        areaKm2: 312696,
        languages: [
            "Polish"
        ],
        currency:
            "Polish złoty (PLN)",
        governmentType:
            "Parliamentary republic"
    },

    PRT: {
        areaKm2: 92212,
        languages: [
            "Portuguese"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Semi-presidential republic"
    },

    QAT: {
        areaKm2: 11586,
        languages: [
            "Arabic"
        ],
        currency:
            "Qatari riyal (QAR)",
        governmentType:
            "Absolute monarchy"
    },

    ROU: {
        areaKm2: 238397,
        languages: [
            "Romanian"
        ],
        currency:
            "Romanian leu (RON)",
        governmentType:
            "Semi-presidential republic"
    },

    RUS: {
        areaKm2: 17098246,
        languages: [
            "Russian"
        ],
        currency:
            "Russian ruble (RUB)",
        governmentType:
            "Federal semi-presidential republic"
    },

    RWA: {
        areaKm2: 26338,
        languages: [
            "Kinyarwanda",
            "English",
            "French",
            "Swahili"
        ],
        currency:
            "Rwandan franc (RWF)",
        governmentType:
            "Presidential republic"
    },

    KNA: {
        areaKm2: 261,
        languages: [
            "English"
        ],
        currency:
            "East Caribbean dollar (XCD)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    LCA: {
        areaKm2: 616,
        languages: [
            "English"
        ],
        currency:
            "East Caribbean dollar (XCD)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    VCT: {
        areaKm2: 389,
        languages: [
            "English"
        ],
        currency:
            "East Caribbean dollar (XCD)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    WSM: {
        areaKm2: 2842,
        languages: [
            "Samoan",
            "English"
        ],
        currency:
            "Samoan tālā (WST)",
        governmentType:
            "Parliamentary republic"
    },

    SMR: {
        areaKm2: 61,
        languages: [
            "Italian"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Parliamentary republic"
    },

    STP: {
        areaKm2: 964,
        languages: [
            "Portuguese"
        ],
        currency:
            "São Tomé and Príncipe dobra (STN)",
        governmentType:
            "Semi-presidential republic"
    },

    SAU: {
        areaKm2: 2149690,
        languages: [
            "Arabic"
        ],
        currency:
            "Saudi riyal (SAR)",
        governmentType:
            "Absolute monarchy"
    },

    SEN: {
        areaKm2: 196722,
        languages: [
            "French"
        ],
        currency:
            "West African CFA franc (XOF)",
        governmentType:
            "Presidential republic"
    },

    SRB: {
        areaKm2: 77474,
        languages: [
            "Serbian"
        ],
        currency:
            "Serbian dinar (RSD)",
        governmentType:
            "Parliamentary republic"
    },

    SYC: {
        areaKm2: 452,
        languages: [
            "Seychellois Creole",
            "English",
            "French"
        ],
        currency:
            "Seychellois rupee (SCR)",
        governmentType:
            "Presidential republic"
    },

    SLE: {
        areaKm2: 71740,
        languages: [
            "English"
        ],
        currency:
            "Sierra Leonean leone (SLE)",
        governmentType:
            "Presidential republic"
    },

    SGP: {
        areaKm2: 735,
        languages: [
            "English",
            "Malay",
            "Mandarin Chinese",
            "Tamil"
        ],
        currency:
            "Singapore dollar (SGD)",
        governmentType:
            "Parliamentary republic"
    },

    SVK: {
        areaKm2: 49035,
        languages: [
            "Slovak"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Parliamentary republic"
    },

    SVN: {
        areaKm2: 20273,
        languages: [
            "Slovene"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Parliamentary republic"
    },

    SLB: {
        areaKm2: 28896,
        languages: [
            "English"
        ],
        currency:
            "Solomon Islands dollar (SBD)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    SOM: {
        areaKm2: 637657,
        languages: [
            "Somali",
            "Arabic"
        ],
        currency:
            "Somali shilling (SOS)",
        governmentType:
            "Federal parliamentary republic"
    },

    ZAF: {
        areaKm2: 1221037,
        languages: [
            "Zulu",
            "Xhosa",
            "Afrikaans",
            "English",
            "Sepedi",
            "Sesotho",
            "Setswana",
            "siSwati",
            "Tshivenda",
            "Xitsonga",
            "Ndebele"
        ],
        currency:
            "South African rand (ZAR)",
        governmentType:
            "Parliamentary republic"
    },

    SSD: {
        areaKm2: 619745,
        languages: [
            "English"
        ],
        currency:
            "South Sudanese pound (SSP)",
        governmentType:
            "Presidential republic"
    },

    ESP: {
        areaKm2: 505990,
        languages: [
            "Spanish"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    LKA: {
        areaKm2: 65610,
        languages: [
            "Sinhala",
            "Tamil"
        ],
        currency:
            "Sri Lankan rupee (LKR)",
        governmentType:
            "Semi-presidential republic"
    },

    SDN: {
        areaKm2: 1886068,
        languages: [
            "Arabic",
            "English"
        ],
        currency:
            "Sudanese pound (SDG)",
        governmentType:
            null
    },

    SUR: {
        areaKm2: 163820,
        languages: [
            "Dutch"
        ],
        currency:
            "Surinamese dollar (SRD)",
        governmentType:
            "Presidential republic"
    },

    SWE: {
        areaKm2: 450295,
        languages: [
            "Swedish"
        ],
        currency:
            "Swedish krona (SEK)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    CHE: {
        areaKm2: 41285,
        languages: [
            "German",
            "French",
            "Italian",
            "Romansh"
        ],
        currency:
            "Swiss franc (CHF)",
        governmentType:
            "Federal republic with a collegial executive"
    },

    SYR: {
        areaKm2: 185180,
        languages: [
            "Arabic"
        ],
        currency:
            "Syrian pound (SYP)",
        governmentType:
            null
    },

    TJK: {
        areaKm2: 143100,
        languages: [
            "Tajik"
        ],
        currency:
            "Tajikistani somoni (TJS)",
        governmentType:
            "Presidential republic"
    },

    TZA: {
        areaKm2: 947303,
        languages: [
            "Swahili",
            "English"
        ],
        currency:
            "Tanzanian shilling (TZ)",
        governmentType:
            "Presidential republic"
    },

    THA: {
        areaKm2: 513120,
        languages: [
            "Thai"
        ],
        currency:
            "Thai baht (THB)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    TLS: {
        areaKm2: 14874,
        languages: [
            "Tetum",
            "Portuguese"
        ],
        currency:
            "United States dollar (USD)",
        governmentType:
            "Semi-presidential republic"
    },

    TGO: {
        areaKm2: 56785,
        languages: [
            "French"
        ],
        currency:
            "West African CFA franc (XOF)",
        governmentType:
            "Parliamentary republic"
    },

    TON: {
        areaKm2: 747,
        languages: [
            "Tongan",
            "English"
        ],
        currency:
            "Tongan paʻanga (TOP)",
        governmentType:
            "Constitutional monarchy"
    },

    TTO: {
        areaKm2: 5130,
        languages: [
            "English"
        ],
        currency:
            "Trinidad and Tobago dollar (TTD)",
        governmentType:
            "Parliamentary republic"
    },

    TUN: {
        areaKm2: 163610,
        languages: [
            "Arabic"
        ],
        currency:
            "Tunisian dinar (TND)",
        governmentType:
            "Presidential republic"
    },

    TUR: {
        areaKm2: 783562,
        languages: [
            "Turkish"
        ],
        currency:
            "Turkish lira (TRY)",
        governmentType:
            "Presidential republic"
    },

    TKM: {
        areaKm2: 488100,
        languages: [
            "Turkmen"
        ],
        currency:
            "Turkmenistan manat (TMT)",
        governmentType:
            "Presidential republic"
    },

    TUV: {
        areaKm2: 26,
        languages: [
            "Tuvaluan",
            "English"
        ],
        currency:
            "Australian dollar (AUD)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    UGA: {
        areaKm2: 241550,
        languages: [
            "English",
            "Swahili"
        ],
        currency:
            "Ugandan shilling (UGX)",
        governmentType:
            "Presidential republic"
    },

    UKR: {
        areaKm2: 603628,
        languages: [
            "Ukrainian"
        ],
        currency:
            "Ukrainian hryvnia (UAH)",
        governmentType:
            "Semi-presidential republic"
    },

    ARE: {
        areaKm2: 83600,
        languages: [
            "Arabic"
        ],
        currency:
            "United Arab Emirates dirham (AED)",
        governmentType:
            "Federal elective monarchy"
    },

    GBR: {
        areaKm2: 243610,
        languages: [
            "English"
        ],
        currency:
            "Pound sterling (GBP)",
        governmentType:
            "Parliamentary constitutional monarchy"
    },

    USA: {
        areaKm2: 9833517,
        languages: [
            "English"
        ],
        currency:
            "United States dollar (USD)",
        governmentType:
            "Federal presidential constitutional republic"
    },

    URY: {
        areaKm2: 176215,
        languages: [
            "Spanish"
        ],
        currency:
            "Uruguayan peso (UYU)",
        governmentType:
            "Presidential republic"
    },

    UZB: {
        areaKm2: 448978,
        languages: [
            "Uzbek"
        ],
        currency:
            "Uzbekistani sum (UZS)",
        governmentType:
            "Presidential republic"
    },

    VUT: {
        areaKm2: 12189,
        languages: [
            "Bislama",
            "English",
            "French"
        ],
        currency:
            "Vanuatu vatu (VUV)",
        governmentType:
            "Parliamentary republic"
    },

    VAT: {
        areaKm2: 0.49,
        languages: [
            "Italian",
            "Latin"
        ],
        currency:
            "Euro (EUR)",
        governmentType:
            "Elective absolute monarchy"
    },

    VEN: {
        areaKm2: 916445,
        languages: [
            "Spanish"
        ],
        currency:
            "Venezuelan bolívar (VES)",
        governmentType:
            "Federal presidential republic"
    },

    VNM: {
        areaKm2: 331212,
        languages: [
            "Vietnamese"
        ],
        currency:
            "Vietnamese đồng (VND)",
        governmentType:
            "One-party socialist republic"
    },

    YEM: {
        areaKm2: 527968,
        languages: [
            "Arabic"
        ],
        currency:
            "Yemeni rial (YER)",
        governmentType:
            null
    },

    ZMB: {
        areaKm2: 752612,
        languages: [
            "English"
        ],
        currency:
            "Zambian kwacha (ZMW)",
        governmentType:
            "Presidential republic"
    },

    ZWE: {
        areaKm2: 390757,
        languages: [
            "English",
            "Shona",
            "Ndebele"
        ],
        currency:
            "Zimbabwe Gold (ZWG)",
        governmentType:
            "Presidential republic"
    }

};
// ============================================================
// APPLY LOCAL COUNTRY FACTS
// ============================================================

function applyLocalCountryFacts() {

    let appliedCount = 0;

    countries.forEach(
        country => {

            if (
                !country ||
                !country.iso3
            ) {

                return;

            }

            const facts =
                LOCAL_COUNTRY_FACTS[
                    country.iso3
                ];

            if (!facts) {

                console.warn(
                    `No local country facts found for ${country.name} (${country.iso3}).`
                );

                return;

            }


            // ================================================
            // MAKE SURE REQUIRED OBJECTS EXIST
            // ================================================

            if (!country.atAGlance) {

                country.atAGlance = {};

            }

            if (!country.government) {

                country.government = {};

            }

            if (!country.government.headOfState) {

                country.government.headOfState = {
                    name: null,
                    title: null,
                    asOf: null,
                    sourceIds: []
                };

            }

            if (!country.government.headOfGovernment) {

                country.government.headOfGovernment = {
                    name: null,
                    title: null,
                    asOf: null,
                    sourceIds: []
                };

            }


            // ================================================
            // AREA
            // ================================================

            if (
                facts.areaKm2 !== null &&
                facts.areaKm2 !== undefined &&
                Number.isFinite(
                    Number(facts.areaKm2)
                )
            ) {

                country.atAGlance.areaKm2 =
                    Number(
                        facts.areaKm2
                    );

            }


            // ================================================
            // LANGUAGES
            // ================================================

            if (
                Array.isArray(
                    facts.languages
                )
            ) {

                country.atAGlance.languages =
                    facts.languages
                        .map(
                            language =>
                                safeText(
                                    language
                                )
                        )
                        .filter(Boolean);

            }


            // ================================================
            // CURRENCY
            // ================================================

            if (
                safeText(
                    facts.currency
                )
            ) {

                country.atAGlance.currency =
                    safeText(
                        facts.currency
                    );

            }


            // ================================================
            // GOVERNMENT TYPE
            // ================================================

            if (
                safeText(
                    facts.governmentType
                )
            ) {

                country.government.governmentType =
                    safeText(
                        facts.governmentType
                    );

            }


            appliedCount++;

        }
    );


    countryFactsStatus.localFactsLoaded =
        true;


    console.log(
        `Local country facts applied to ${appliedCount} countries.`
    );

}


// ============================================================
// POPULATION
// WORLD BANK
// ============================================================

async function loadCountryPopulation(
    country
) {

    if (
        !country ||
        !country.iso3
    ) {

        return;

    }


    const url =
        `${WORLD_BANK_API}/country/` +
        `${encodeURIComponent(country.iso3)}/` +
        `indicator/SP.POP.TOTL` +
        `?format=json&mrnev=1`;


    try {

        const data =
            await fetchCountryFactsJson(
                url
            );


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


        if (!country.atAGlance) {

            country.atAGlance = {};

        }


        country.atAGlance.population =
            Number(
                observation.value
            );


        country.atAGlance.populationYear =
            Number(
                observation.date
            );


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
// LOAD ALL POPULATIONS
//
// Small batches keep the browser from sending 195 requests
// simultaneously.
// ============================================================

async function loadAllCountryPopulations() {

    const batchSize = 15;


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


        await Promise.allSettled(

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


    console.log(
        "World Bank population data loaded."
    );

}


// ============================================================
// LEADERSHIP DATABASE
//
// Leadership changes much more frequently than area,
// language, currency, or constitutional structure.
//
// It is therefore kept separate from LOCAL_COUNTRY_FACTS.
//
// Only verified entries should be added here.
// A missing entry simply leaves the profile value blank.
// ============================================================

const COUNTRY_LEADERSHIP = {

    USA: {

        headOfState: {
            name:
                "Donald Trump",
            title:
                "President",
            asOf:
                "2026-10-03"
        },

        headOfGovernment: {
            name:
                "Donald Trump",
            title:
                "President",
            asOf:
                "2026-10-03"
        }

    },

    CAN: {

        headOfState: {
            name:
                "Charles III",
            title:
                "King",
            asOf:
                "2026-10-03"
        },

        headOfGovernment: {
            name:
                "Mark Carney",
            title:
                "Prime Minister",
            asOf:
                "2026-10-03"
        }

    },

    MEX: {

        headOfState: {
            name:
                "Claudia Sheinbaum",
            title:
                "President",
            asOf:
                "2026-10-03"
        },

        headOfGovernment: {
            name:
                "Claudia Sheinbaum",
            title:
                "President",
            asOf:
                "2026-10-03"
        }

    },

    GBR: {

        headOfState: {
            name:
                "Charles III",
            title:
                "King",
            asOf:
                "2026-10-03"
        },

        headOfGovernment: {
            name:
                "Keir Starmer",
            title:
                "Prime Minister",
            asOf:
                "2026-10-03"
        }

    },

    FRA: {

        headOfState: {
            name:
                "Emmanuel Macron",
            title:
                "President",
            asOf:
                "2026-10-03"
        },

        headOfGovernment: {
            name:
                null,
            title:
                "Prime Minister",
            asOf:
                null
        }

    },

    DEU: {

        headOfState: {
            name:
                "Frank-Walter Steinmeier",
            title:
                "Federal President",
            asOf:
                "2026-10-03"
        },

        headOfGovernment: {
            name:
                "Friedrich Merz",
            title:
                "Federal Chancellor",
            asOf:
                "2026-10-03"
        }

    },

    ITA: {

        headOfState: {
            name:
                "Sergio Mattarella",
            title:
                "President",
            asOf:
                "2026-10-03"
        },

        headOfGovernment: {
            name:
                "Giorgia Meloni",
            title:
                "Prime Minister",
            asOf:
                "2026-10-03"
        }

    },

    ESP: {

        headOfState: {
            name:
                "Felipe VI",
            title:
                "King",
            asOf:
                "2026-10-03"
        },

        headOfGovernment: {
            name:
                "Pedro Sánchez",
            title:
                "Prime Minister",
            asOf:
                "2026-10-03"
        }

    },

    UKR: {

        headOfState: {
            name:
                "Volodymyr Zelenskyy",
            title:
                "President",
            asOf:
                "2026-10-03"
        },

        headOfGovernment: {
            name:
                null,
            title:
                "Prime Minister",
            asOf:
                null
        }

    },

    RUS: {

        headOfState: {
            name:
                "Vladimir Putin",
            title:
                "President",
            asOf:
                "2026-10-03"
        },

        headOfGovernment: {
            name:
                "Mikhail Mishustin",
            title:
                "Prime Minister",
            asOf:
                "2026-10-03"
        }

    },

    CHN: {

        headOfState: {
            name:
                "Xi Jinping",
            title:
                "President",
            asOf:
                "2026-10-03"
        },

        headOfGovernment: {
            name:
                "Li Qiang",
            title:
                "Premier",
            asOf:
                "2026-10-03"
        }

    },

    JPN: {

        headOfState: {
            name:
                "Naruhito",
            title:
                "Emperor",
            asOf:
                "2026-10-03"
        },

        headOfGovernment: {
            name:
                null,
            title:
                "Prime Minister",
            asOf:
                null
        }

    },

    IND: {

        headOfState: {
            name:
                "Droupadi Murmu",
            title:
                "President",
            asOf:
                "2026-10-03"
        },

        headOfGovernment: {
            name:
                "Narendra Modi",
            title:
                "Prime Minister",
            asOf:
                "2026-10-03"
        }

    },

    BRA: {

        headOfState: {
            name:
                "Luiz Inácio Lula da Silva",
            title:
                "President",
            asOf:
                "2026-10-03"
        },

        headOfGovernment: {
            name:
                "Luiz Inácio Lula da Silva",
            title:
                "President",
            asOf:
                "2026-10-03"
        }

    },

    AUS: {

        headOfState: {
            name:
                "Charles III",
            title:
                "King",
            asOf:
                "2026-10-03"
        },

        headOfGovernment: {
            name:
                "Anthony Albanese",
            title:
                "Prime Minister",
            asOf:
                "2026-10-03"
        }

    },

    NZL: {

        headOfState: {
            name:
                "Charles III",
            title:
                "King",
            asOf:
                "2026-10-03"
        },

        headOfGovernment: {
            name:
                "Christopher Luxon",
            title:
                "Prime Minister",
            asOf:
                "2026-10-03"
        }

    },

    ISR: {

        headOfState: {
            name:
                "Isaac Herzog",
            title:
                "President",
            asOf:
                "2026-10-03"
        },

        headOfGovernment: {
            name:
                "Benjamin Netanyahu",
            title:
                "Prime Minister",
            asOf:
                "2026-10-03"
        }

    },

    IRN: {

        headOfState: {
            name:
                null,
            title:
                null,
            asOf:
                null
        },

        headOfGovernment: {
            name:
                null,
            title:
                null,
            asOf:
                null
        }

    },

    TUR: {

        headOfState: {
            name:
                "Recep Tayyip Erdoğan",
            title:
                "President",
            asOf:
                "2026-10-03"
        },

        headOfGovernment: {
            name:
                "Recep Tayyip Erdoğan",
            title:
                "President",
            asOf:
                "2026-10-03"
        }

    },

    SAU: {

        headOfState: {
            name:
                "Salman bin Abdulaziz Al Saud",
            title:
                "King",
            asOf:
                "2026-10-03"
        },

        headOfGovernment: {
            name:
                "Mohammed bin Salman",
            title:
                "Prime Minister",
            asOf:
                "2026-10-03"
        }

    }

};


// ============================================================
// APPLY LEADERSHIP
// ============================================================

function applyCountryLeadership() {

    let appliedCount = 0;


    countries.forEach(
        country => {

            if (
                !country ||
                !country.iso3
            ) {

                return;

            }


            const leadership =
                COUNTRY_LEADERSHIP[
                    country.iso3
                ];


            if (!leadership) {

                return;

            }


            if (!country.government) {

                country.government = {};

            }


            if (!country.government.headOfState) {

                country.government.headOfState = {
                    name: null,
                    title: null,
                    asOf: null,
                    sourceIds: []
                };

            }


            if (!country.government.headOfGovernment) {

                country.government.headOfGovernment = {
                    name: null,
                    title: null,
                    asOf: null,
                    sourceIds: []
                };

            }


            // ================================================
            // HEAD OF STATE
            // ================================================

            if (
                leadership.headOfState &&
                safeText(
                    leadership.headOfState.name
                )
            ) {

                country.government.headOfState.name =
                    safeText(
                        leadership.headOfState.name
                    );


                country.government.headOfState.title =
                    safeText(
                        leadership.headOfState.title
                    );


                country.government.headOfState.asOf =
                    safeText(
                        leadership.headOfState.asOf
                    );


                country.government.headOfState.sourceIds =
                    [
                        "un-protocol-leadership",
                        "cia-world-leaders"
                    ];

            }


            // ================================================
            // HEAD OF GOVERNMENT
            // ================================================

            if (
                leadership.headOfGovernment &&
                safeText(
                    leadership.headOfGovernment.name
                )
            ) {

                country.government.headOfGovernment.name =
                    safeText(
                        leadership.headOfGovernment.name
                    );


                country.government.headOfGovernment.title =
                    safeText(
                        leadership.headOfGovernment.title
                    );


                country.government.headOfGovernment.asOf =
                    safeText(
                        leadership.headOfGovernment.asOf
                    );


                country.government.headOfGovernment.sourceIds =
                    [
                        "un-protocol-leadership",
                        "cia-world-leaders"
                    ];

            }


            appliedCount++;

        }
    );


    countryFactsStatus.leadershipLoaded =
        true;


    console.log(
        `Local leadership data applied to ${appliedCount} countries.`
    );

}


// ============================================================
// COUNTRY OVERVIEWS
// ============================================================

function buildCountryOverview(
    country
) {

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
        `This profile provides geographic, political, humanitarian ` +
        `and crisis-related context used throughout Conflict Atlas.`
    );

}


// ============================================================
// APPLY OVERVIEWS
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
// SPECIAL COUNTRY OVERVIEWS
//
// countries.js already contains special constitutional or
// capital notes for these profiles.
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
                `${country.name} is located in ` +
                `${country.subregion}, ${country.region}. ` +
                `${country.countryNote}`;

        }
    );

}
// ============================================================
// UNITED NATIONS MEMBERSHIP
// ============================================================

function applyUnitedNationsMembership() {

    countries.forEach(
        country => {

            if (!country.government) {

                country.government = {};

            }


            if (
                !Array.isArray(
                    country.government
                        .internationalOrganizations
                )
            ) {

                country.government
                    .internationalOrganizations = [];

            }


            const organizations =
                country.government
                    .internationalOrganizations;


            const alreadyExists =
                organizations.some(
                    organization =>
                        organization.name ===
                        "United Nations"
                );


            if (alreadyExists) {

                return;

            }


            if (
                country.iso3 === "VAT" ||
                country.iso3 === "PSE"
            ) {

                organizations.push({

                    name:
                        "United Nations",

                    status:
                        "Non-member observer state"

                });

            } else {

                organizations.push({

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
// SOURCE LIBRARY
// ============================================================

function addCountryFactsSources() {

    countries.forEach(
        country => {


            // ================================================
            // WORLD BANK
            // ================================================

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


            // ================================================
            // UNITED NATIONS
            // ================================================

            addCountrySource(
                country.iso3,
                {

                    id:
                        "un-country-information",

                    name:
                        "United Nations — Member States and Country Information",

                    url:
                        "https://www.un.org/en/about-us/member-states",

                    type:
                        "international-organization"

                }
            );


            // ================================================
            // UN PROTOCOL
            // ================================================

            addCountrySource(
                country.iso3,
                {

                    id:
                        "un-protocol-leadership",

                    name:
                        "United Nations Protocol — Heads of State and Government",

                    url:
                        "https://www.un.org/dgacm/en/content/protocol/hshgnfa",

                    type:
                        "international-organization"

                }
            );


            // ================================================
            // CIA WORLD LEADERS
            // ================================================

            addCountrySource(
                country.iso3,
                {

                    id:
                        "cia-world-leaders",

                    name:
                        "CIA — World Leaders",

                    url:
                        "https://www.cia.gov/resources/world-leaders/",

                    type:
                        "government-reference"

                }
            );

        }
    );

}


// ============================================================
// REMOVE EMPTY / INVALID VALUES
// ============================================================

function cleanCountryFacts() {

    countries.forEach(
        country => {


            // ================================================
            // AT A GLANCE
            // ================================================

            if (!country.atAGlance) {

                country.atAGlance = {};

            }


            if (
                !Array.isArray(
                    country.atAGlance.languages
                )
            ) {

                country.atAGlance.languages = [];

            }


            country.atAGlance.languages =
                country.atAGlance.languages
                    .map(
                        language =>
                            safeText(
                                language
                            )
                    )
                    .filter(Boolean);


            // ================================================
            // GOVERNMENT
            // ================================================

            if (!country.government) {

                country.government = {};

            }


            if (
                !country.government.headOfState
            ) {

                country.government.headOfState = {

                    name: null,
                    title: null,
                    asOf: null,
                    sourceIds: []

                };

            }


            if (
                !country.government.headOfGovernment
            ) {

                country.government.headOfGovernment = {

                    name: null,
                    title: null,
                    asOf: null,
                    sourceIds: []

                };

            }


            if (
                !Array.isArray(
                    country.government
                        .internationalOrganizations
                )
            ) {

                country.government
                    .internationalOrganizations = [];

            }

        }
    );

}


// ============================================================
// VALIDATION
// ============================================================

function validateCountryFacts() {

    const coverage = {

        totalCountries:
            countries.length,

        population:
            0,

        area:
            0,

        languages:
            0,

        currency:
            0,

        governmentType:
            0,

        headOfState:
            0,

        headOfGovernment:
            0

    };


    const missingLocalFacts = [];


    countries.forEach(
        country => {


            // ================================================
            // POPULATION
            // ================================================

            if (
                country.atAGlance &&
                country.atAGlance.population !== null &&
                country.atAGlance.population !== undefined
            ) {

                coverage.population++;

            }


            // ================================================
            // AREA
            // ================================================

            if (
                country.atAGlance &&
                country.atAGlance.areaKm2 !== null &&
                country.atAGlance.areaKm2 !== undefined
            ) {

                coverage.area++;

            }


            // ================================================
            // LANGUAGES
            // ================================================

            if (
                country.atAGlance &&
                Array.isArray(
                    country.atAGlance.languages
                ) &&
                country.atAGlance.languages.length > 0
            ) {

                coverage.languages++;

            }


            // ================================================
            // CURRENCY
            // ================================================

            if (
                country.atAGlance &&
                country.atAGlance.currency
            ) {

                coverage.currency++;

            }


            // ================================================
            // GOVERNMENT TYPE
            // ================================================

            if (
                country.government &&
                country.government.governmentType
            ) {

                coverage.governmentType++;

            }


            // ================================================
            // HEAD OF STATE
            // ================================================

            if (
                country.government &&
                country.government.headOfState &&
                country.government.headOfState.name
            ) {

                coverage.headOfState++;

            }


            // ================================================
            // HEAD OF GOVERNMENT
            // ================================================

            if (
                country.government &&
                country.government.headOfGovernment &&
                country.government.headOfGovernment.name
            ) {

                coverage.headOfGovernment++;

            }


            // ================================================
            // LOCAL DATABASE COVERAGE
            // ================================================

            if (
                !LOCAL_COUNTRY_FACTS[
                    country.iso3
                ]
            ) {

                missingLocalFacts.push(
                    `${country.name} (${country.iso3})`
                );

            }

        }
    );


    console.log(
        "Conflict Atlas country coverage:",
        coverage
    );


    if (
        missingLocalFacts.length > 0
    ) {

        console.warn(
            "Countries missing from LOCAL_COUNTRY_FACTS:",
            missingLocalFacts
        );

    } else {

        console.log(
            "All Conflict Atlas countries have a LOCAL_COUNTRY_FACTS entry."
        );

    }

}


// ============================================================
// VALIDATE COUNTRY COUNT
// ============================================================

function validateCountryCount() {

    if (
        countries.length === 195
    ) {

        console.log(
            "Country count validation passed: 195 profiles loaded."
        );

        return;

    }


    console.warn(
        `Expected 195 country profiles but found ${countries.length}.`
    );

}


// ============================================================
// VALIDATE DUPLICATE ISO CODES
// ============================================================

function validateCountryIsoCodes() {

    const seenIso2 =
        new Set();

    const seenIso3 =
        new Set();

    const duplicateIso2 = [];

    const duplicateIso3 = [];


    countries.forEach(
        country => {

            if (
                seenIso2.has(
                    country.iso2
                )
            ) {

                duplicateIso2.push(
                    country.iso2
                );

            } else {

                seenIso2.add(
                    country.iso2
                );

            }


            if (
                seenIso3.has(
                    country.iso3
                )
            ) {

                duplicateIso3.push(
                    country.iso3
                );

            } else {

                seenIso3.add(
                    country.iso3
                );

            }

        }
    );


    if (
        duplicateIso2.length === 0 &&
        duplicateIso3.length === 0
    ) {

        console.log(
            "Country ISO validation passed."
        );

        return;

    }


    if (
        duplicateIso2.length > 0
    ) {

        console.warn(
            "Duplicate ISO2 codes:",
            duplicateIso2
        );

    }


    if (
        duplicateIso3.length > 0
    ) {

        console.warn(
            "Duplicate ISO3 codes:",
            duplicateIso3
        );

    }

}


// ============================================================
// INITIALIZE
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
    // STEP 1
    // VALIDATE COUNTRY DATABASE
    // ========================================================

    validateCountryCount();

    validateCountryIsoCodes();


    // ========================================================
    // STEP 2
    // APPLY STABLE LOCAL FACTS IMMEDIATELY
    //
    // This happens BEFORE any network request.
    //
    // Area, languages, currency and government type therefore
    // do not disappear if an external service is unavailable.
    // ========================================================

    applyLocalCountryFacts();


    // ========================================================
    // STEP 3
    // COUNTRY DESCRIPTIONS
    // ========================================================

    applyCountryOverviews();

    applySpecialCountryOverviews();


    // ========================================================
    // STEP 4
    // UNITED NATIONS MEMBERSHIP
    // ========================================================

    applyUnitedNationsMembership();


    // ========================================================
    // STEP 5
    // SOURCES
    // ========================================================

    addCountryFactsSources();


    // ========================================================
    // STEP 6
    // LEADERSHIP
    //
    // Kept separate from geographic facts because leadership
    // changes much more frequently.
    // ========================================================

    applyCountryLeadership();


    // ========================================================
    // STEP 7
    // CLEAN STRUCTURE
    // ========================================================

    cleanCountryFacts();


    // ========================================================
    // IMPORTANT
    //
    // At this point the local profile information is already
    // available. We do NOT wait for the World Bank before
    // making area/language/currency/government data usable.
    // ========================================================

    validateCountryFacts();


    // ========================================================
    // STEP 8
    // POPULATION
    //
    // Population is the only basic profile field in this file
    // that still depends on an external live API.
    // ========================================================

    try {

        await loadAllCountryPopulations();

    } catch (error) {

        countryFactsStatus.errors.push({

            country:
                "all",

            field:
                "population",

            message:
                error.message

        });


        console.error(
            "Unable to complete World Bank population loading:",
            error
        );

    }


    // ========================================================
    // FINAL VALIDATION
    // ========================================================

    cleanCountryFacts();

    validateCountryFacts();


    countryFactsStatus.loading =
        false;


    console.log(
        "Conflict Atlas country facts ready."
    );


    if (
        countryFactsStatus.errors.length > 0
    ) {

        console.warn(
            "Some country facts could not be loaded:",
            countryFactsStatus.errors
        );

    }

}


// ============================================================
// START
// ============================================================

initializeCountryFacts();
