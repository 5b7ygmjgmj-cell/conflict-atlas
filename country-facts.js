// ============================================================
// ONE WORLD, ONE LIFE — COUNTRY FACTS
// Conflict Atlas
//
// VERSION 4.0
//
// Population:
// World Bank
//
// Area, languages, currency:
// REST Countries
//
// Government:
// Wikidata
//
// Crisis relationships remain in countries.js.
// ============================================================


// ============================================================
// SETTINGS
// ============================================================

const COUNTRY_FACTS_VERSION = "4.0";

const WORLD_BANK_API =
    "https://api.worldbank.org/v2";

const REST_COUNTRIES_API =
    "https://restcountries.com/v3.1/all?fields=cca3,area,languages,currencies";

const WIKIDATA_SPARQL_API =
    "https://query.wikidata.org/sparql";


// ============================================================
// STATUS
// ============================================================

const countryFactsStatus = {

    populationLoaded: false,

    geographicFactsLoaded: false,

    governmentLoaded: false,

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

    if (!text) {

        return null;

    }

    return text;

}


function isWikidataId(value) {

    if (!value) {

        return false;

    }

    return /^Q\d+$/i.test(
        String(value).trim()
    );

}


function cleanWikidataText(value) {

    const text =
        safeText(value);

    if (!text) {

        return null;

    }

    if (isWikidataId(text)) {

        return null;

    }

    return text;

}


function getBindingValue(
    binding,
    key
) {

    if (
        !binding ||
        !binding[key] ||
        binding[key].value === undefined
    ) {

        return null;

    }

    return cleanWikidataText(
        binding[key].value
    );

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

    console.log(
        "World Bank population data loaded."
    );

}


// ============================================================
// AREA / LANGUAGES / CURRENCY
// REST COUNTRIES
// ============================================================

async function loadGeographicCountryFacts() {

    try {

        const data =
            await fetchCountryFactsJson(
                REST_COUNTRIES_API
            );

        if (!Array.isArray(data)) {

            throw new Error(
                "REST Countries returned an unexpected response."
            );

        }

        data.forEach(
            record => {

                const iso3 =
                    safeText(
                        record.cca3
                    );

                if (!iso3) {

                    return;

                }

                const country =
                    getCountryByIso3(
                        iso3
                    );

                if (!country) {

                    return;

                }


                // ============================================
                // AREA
                // ============================================

                if (
                    record.area !== null &&
                    record.area !== undefined &&
                    Number.isFinite(
                        Number(record.area)
                    )
                ) {

                    country.atAGlance.areaKm2 =
                        Math.round(
                            Number(record.area)
                        );

                }


                // ============================================
                // LANGUAGES
                // ============================================

                if (
                    record.languages &&
                    typeof record.languages === "object"
                ) {

                    const languages =
                        Object.values(
                            record.languages
                        )
                        .map(
                            language =>
                                safeText(language)
                        )
                        .filter(Boolean)
                        .filter(
                            (
                                language,
                                index,
                                array
                            ) =>
                                array.indexOf(language) ===
                                index
                        )
                        .sort(
                            (a, b) =>
                                a.localeCompare(b)
                        );

                    country.atAGlance.languages =
                        languages;

                }


                // ============================================
                // CURRENCY
                // ============================================

                if (
                    record.currencies &&
                    typeof record.currencies === "object"
                ) {

                    const currencies =
                        Object.entries(
                            record.currencies
                        )
                        .map(
                            (
                                [
                                    code,
                                    currency
                                ]
                            ) => {

                                const name =
                                    safeText(
                                        currency?.name
                                    );

                                if (
                                    name &&
                                    code
                                ) {

                                    return `${name} (${code})`;

                                }

                                if (name) {

                                    return name;

                                }

                                return safeText(
                                    code
                                );

                            }
                        )
                        .filter(Boolean);

                    if (
                        currencies.length >
                        0
                    ) {

                        country.atAGlance.currency =
                            currencies.join(
                                ", "
                            );

                    }

                }

            }
        );

        countryFactsStatus.geographicFactsLoaded =
            true;

        console.log(
            "Area, language and currency data loaded."
        );

    } catch (error) {

        countryFactsStatus.errors.push({

            country:
                "all",

            field:
                "area/language/currency",

            message:
                error.message

        });

        console.error(
            "Unable to load geographic country facts:",
            error
        );

    }

}


// ============================================================
// GOVERNMENT RESULT STRUCTURE
// ============================================================

function createGovernmentResult() {

    return {

        governmentTypes:
            new Set(),

        headsOfState:
            new Set(),

        headsOfGovernment:
            new Set()

    };

}


// ============================================================
// GOVERNMENT QUERY
//
// P298 = ISO 3166-1 alpha-3
// P122 = basic form of government
// P35  = head of state
// P6   = head of government
//
// IMPORTANT:
//
// We explicitly retrieve English rdfs:label values.
//
// We DO NOT use the raw entity URI as the public-facing
// person's name.
//
// Q-numbers are rejected.
// ============================================================

async function loadGovernmentBatch(
    countryBatch
) {

    const isoValues =
        countryBatch
            .map(
                country =>
                    `"${country.iso3}"`
            )
            .join(" ");

    const query =
`
SELECT DISTINCT
    ?iso3
    ?governmentTypeLabel
    ?headOfStateLabel
    ?headOfGovernmentLabel
WHERE {

    VALUES ?iso3 {
        ${isoValues}
    }

    ?country
        wdt:P298
        ?iso3 .

    OPTIONAL {

        ?country
            wdt:P122
            ?governmentType .

        ?governmentType
            rdfs:label
            ?governmentTypeLabel .

        FILTER(
            LANG(?governmentTypeLabel) = "en"
        )

    }

    OPTIONAL {

        ?country
            wdt:P35
            ?headOfState .

        ?headOfState
            rdfs:label
            ?headOfStateLabel .

        FILTER(
            LANG(?headOfStateLabel) = "en"
        )

    }

    OPTIONAL {

        ?country
            wdt:P6
            ?headOfGovernment .

        ?headOfGovernment
            rdfs:label
            ?headOfGovernmentLabel .

        FILTER(
            LANG(?headOfGovernmentLabel) = "en"
        )

    }

}
`;

    const url =
        `${WIKIDATA_SPARQL_API}` +
        `?query=${encodeURIComponent(query)}` +
        `&format=json`;

    try {

        const data =
            await fetchCountryFactsJson(

                url,

                {

                    headers: {

                        Accept:
                            "application/sparql-results+json"

                    }

                }

            );

        if (
            !data ||
            !data.results ||
            !Array.isArray(
                data.results.bindings
            )
        ) {

            return;

        }

        applyGovernmentBindings(
            data.results.bindings
        );

    } catch (error) {

        countryFactsStatus.errors.push({

            country:
                countryBatch
                    .map(
                        country =>
                            country.iso3
                    )
                    .join(", "),

            field:
                "government",

            message:
                error.message

        });

    }

}


// ============================================================
// APPLY GOVERNMENT RESULTS
// ============================================================

function applyGovernmentBindings(
    bindings
) {

    const results =
        new Map();

    bindings.forEach(
        binding => {

            const iso3 =
                getBindingValue(
                    binding,
                    "iso3"
                );

            if (!iso3) {

                return;

            }

            if (
                !results.has(
                    iso3
                )
            ) {

                results.set(
                    iso3,
                    createGovernmentResult()
                );

            }

            const result =
                results.get(
                    iso3
                );


            // ============================================
            // GOVERNMENT TYPE
            // ============================================

            const governmentType =
                getBindingValue(
                    binding,
                    "governmentTypeLabel"
                );

            if (governmentType) {

                result.governmentTypes.add(
                    governmentType
                );

            }


            // ============================================
            // HEAD OF STATE
            // ============================================

            const headOfState =
                getBindingValue(
                    binding,
                    "headOfStateLabel"
                );

            if (headOfState) {

                result.headsOfState.add(
                    headOfState
                );

            }


            // ============================================
            // HEAD OF GOVERNMENT
            // ============================================

            const headOfGovernment =
                getBindingValue(
                    binding,
                    "headOfGovernmentLabel"
                );

            if (headOfGovernment) {

                result.headsOfGovernment.add(
                    headOfGovernment
                );

            }

        }
    );


    results.forEach(
        (
            result,
            iso3
        ) => {

            const country =
                getCountryByIso3(
                    iso3
                );

            if (!country) {

                return;

            }


            // ============================================
            // GOVERNMENT TYPE
            // ============================================

            const governmentTypes =
                Array.from(
                    result.governmentTypes
                )
                .filter(
                    value =>
                        !isWikidataId(value)
                )
                .sort(
                    (a, b) =>
                        a.localeCompare(b)
                );

            if (
                governmentTypes.length >
                0
            ) {

                country.government.governmentType =
                    governmentTypes.join(
                        "; "
                    );

            }


            // ============================================
            // HEAD OF STATE
            // ============================================

            const headsOfState =
                Array.from(
                    result.headsOfState
                )
                .filter(
                    value =>
                        !isWikidataId(value)
                )
                .sort(
                    (a, b) =>
                        a.localeCompare(b)
                );

            if (
                headsOfState.length >
                0
            ) {

                country.government.headOfState.name =
                    headsOfState.join(
                        " / "
                    );

                country.government.headOfState.title =
                    null;

                country.government.headOfState.asOf =
                    new Date()
                        .toISOString()
                        .slice(0, 10);

                country.government.headOfState.sourceIds =
                    [
                        "wikidata-government"
                    ];

            }


            // ============================================
            // HEAD OF GOVERNMENT
            // ============================================

            const headsOfGovernment =
                Array.from(
                    result.headsOfGovernment
                )
                .filter(
                    value =>
                        !isWikidataId(value)
                )
                .sort(
                    (a, b) =>
                        a.localeCompare(b)
                );

            if (
                headsOfGovernment.length >
                0
            ) {

                country.government.headOfGovernment.name =
                    headsOfGovernment.join(
                        " / "
                    );

                country.government.headOfGovernment.title =
                    null;

                country.government.headOfGovernment.asOf =
                    new Date()
                        .toISOString()
                        .slice(0, 10);

                country.government.headOfGovernment.sourceIds =
                    [
                        "wikidata-government"
                    ];

            }

        }
    );

}


// ============================================================
// LOAD GOVERNMENT INFORMATION
//
// Small batches are deliberate.
// ============================================================

async function loadAllGovernmentFacts() {

    const batchSize = 10;

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

        await loadGovernmentBatch(
            batch
        );

    }

    countryFactsStatus.governmentLoaded =
        true;

    console.log(
        "Government information loaded."
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
// SPECIAL OVERVIEWS
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
// UNITED NATIONS ORGANIZATION ENTRY
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


            // ============================================
            // WORLD BANK
            // ============================================

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


            // ============================================
            // REST COUNTRIES
            // ============================================

            addCountrySource(
                country.iso3,
                {

                    id:
                        "rest-countries",

                    name:
                        "REST Countries — Country Metadata",

                    url:
                        "https://restcountries.com/",

                    type:
                        "structured-data"

                }
            );


            // ============================================
            // WIKIDATA
            // ============================================

            addCountrySource(
                country.iso3,
                {

                    id:
                        "wikidata-government",

                    name:
                        "Wikidata — Government Data",

                    url:
                        "https://www.wikidata.org/",

                    type:
                        "structured-data"

                }
            );


            // ============================================
            // UN
            // ============================================

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


            // ============================================
            // CIA
            // ============================================

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
// REMOVE BAD WIKIDATA VALUES
// ============================================================

function cleanGovernmentValues() {

    countries.forEach(
        country => {

            const government =
                country.government;

            if (!government) {

                return;

            }


            // ============================================
            // GOVERNMENT TYPE
            // ============================================

            if (
                government.governmentType &&
                /\bQ\d+\b/i.test(
                    government.governmentType
                )
            ) {

                government.governmentType =
                    null;

            }


            // ============================================
            // HEAD OF STATE
            // ============================================

            if (
                government.headOfState &&
                government.headOfState.name &&
                /\bQ\d+\b/i.test(
                    government.headOfState.name
                )
            ) {

                government.headOfState.name =
                    null;

                government.headOfState.title =
                    null;

            }


            // ============================================
            // HEAD OF GOVERNMENT
            // ============================================

            if (
                government.headOfGovernment &&
                government.headOfGovernment.name &&
                /\bQ\d+\b/i.test(
                    government.headOfGovernment.name
                )
            ) {

                government.headOfGovernment.name =
                    null;

                government.headOfGovernment.title =
                    null;

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


    countries.forEach(
        country => {

            if (
                country.atAGlance.population !==
                null
            ) {

                coverage.population++;

            }

            if (
                country.atAGlance.areaKm2 !==
                null
            ) {

                coverage.area++;

            }

            if (
                Array.isArray(
                    country.atAGlance.languages
                ) &&
                country.atAGlance.languages.length >
                0
            ) {

                coverage.languages++;

            }

            if (
                country.atAGlance.currency
            ) {

                coverage.currency++;

            }

            if (
                country.government.governmentType
            ) {

                coverage.governmentType++;

            }

            if (
                country.government.headOfState.name
            ) {

                coverage.headOfState++;

            }

            if (
                country.government.headOfGovernment.name
            ) {

                coverage.headOfGovernment++;

            }

        }
    );


    console.log(
        "Conflict Atlas country coverage:",
        coverage
    );

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


    // ============================================
    // LOCAL DATA FIRST
    // ============================================

    applyCountryOverviews();

    applySpecialCountryOverviews();

    applyUnitedNationsMembership();

    addCountryFactsSources();


    // ============================================
    // LOAD EXTERNAL DATA
    //
    // These are independent.
    //
    // Failure of one source does NOT prevent
    // the others from working.
    // ============================================

    await Promise.allSettled([

        loadAllCountryPopulations(),

        loadGeographicCountryFacts(),

        loadAllGovernmentFacts()

    ]);


    // ============================================
    // FINAL CLEANUP
    // ============================================

    cleanGovernmentValues();

    validateCountryFacts();


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

}


// ============================================================
// START
// ============================================================

initializeCountryFacts();
