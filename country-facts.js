// ============================================================
// ONE WORLD, ONE LIFE — COUNTRY FACTS
// Conflict Atlas
//
// VERSION 3.0
//
// Adds factual information to all 195 country profiles.
//
// Population:
// World Bank
//
// Area, official languages, currency,
// government type, head of state and head of government:
// Wikidata structured data.
//
// Crisis relationships remain in countries.js.
// ============================================================


// ============================================================
// SETTINGS
// ============================================================

const COUNTRY_FACTS_VERSION = "3.0";

const WORLD_BANK_API =
    "https://api.worldbank.org/v2";

const WIKIDATA_SPARQL_API =
    "https://query.wikidata.org/sparql";


// ============================================================
// STATUS
// ============================================================

const countryFactsStatus = {

    populationLoaded: false,

    wikidataLoaded: false,

    loading: false,

    errors: []

};


// ============================================================
// HELPERS
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


function isUnresolvedWikidataLabel(value) {

    if (!value) {

        return true;

    }

    return /^Q\d+$/i.test(
        String(value).trim()
    );

}


function cleanWikidataLabel(
    binding,
    field
) {

    if (
        !binding ||
        !binding[field] ||
        !binding[field].value
    ) {

        return null;

    }


    const value =
        String(
            binding[field].value
        ).trim();


    if (
        !value ||
        isUnresolvedWikidataLabel(value)
    ) {

        return null;

    }


    return value;

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
// WORLD BANK POPULATION
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


        if (!country.factVerification) {

            country.factVerification = {};

        }


        country.factVerification.population = {

            source:
                "World Bank — Population, total",

            year:
                Number(
                    observation.date
                ),

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
// LOAD ALL POPULATIONS
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


    const loaded =
        countries.filter(
            country =>
                country.atAGlance.population !==
                null
        ).length;


    console.log(
        `Population loaded for ${loaded}/${countries.length} countries.`
    );

}


// ============================================================
// WIKIDATA RESULT STRUCTURE
// ============================================================

function createWikidataCountryResult() {

    return {

        areas:
            new Set(),

        languages:
            new Set(),

        currencies:
            new Set(),

        governmentTypes:
            new Set(),

        headsOfState:
            new Set(),

        headsOfGovernment:
            new Set()

    };

}


// ============================================================
// WIKIDATA QUERY
//
// P298  ISO-3
// P2046 area
// P37   official language
// P38   currency
// P122  basic form of government
// P35   head of state
// P6    head of government
//
// Labels are explicitly requested as English labels.
// ============================================================

async function loadWikidataBatch(
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
    ?area
    ?languageLabel
    ?currencyLabel
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
            wdt:P2046
            ?area .

    }


    OPTIONAL {

        ?country
            wdt:P37
            ?language .

        ?language
            rdfs:label
            ?languageLabel .

        FILTER(
            LANG(?languageLabel) = "en"
        )

    }


    OPTIONAL {

        ?country
            wdt:P38
            ?currency .

        ?currency
            rdfs:label
            ?currencyLabel .

        FILTER(
            LANG(?currencyLabel) = "en"
        )

    }


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


        applyWikidataBindings(
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
                "Wikidata country facts",

            message:
                error.message

        });

    }

}


// ============================================================
// APPLY WIKIDATA RESULTS
// ============================================================

function applyWikidataBindings(
    bindings
) {

    const resultsByIso3 =
        new Map();


    bindings.forEach(
        binding => {

            const iso3 =
                cleanWikidataLabel(
                    binding,
                    "iso3"
                );


            if (!iso3) {

                return;

            }


            if (
                !resultsByIso3.has(
                    iso3
                )
            ) {

                resultsByIso3.set(
                    iso3,
                    createWikidataCountryResult()
                );

            }


            const result =
                resultsByIso3.get(
                    iso3
                );


            // ------------------------------------------
            // AREA
            // ------------------------------------------

            if (
                binding.area &&
                binding.area.value
            ) {

                const area =
                    Number(
                        binding.area.value
                    );


                if (
                    Number.isFinite(area) &&
                    area > 0
                ) {

                    result.areas.add(
                        area
                    );

                }

            }


            // ------------------------------------------
            // OFFICIAL LANGUAGE
            // ------------------------------------------

            const language =
                cleanWikidataLabel(
                    binding,
                    "languageLabel"
                );


            if (language) {

                result.languages.add(
                    language
                );

            }


            // ------------------------------------------
            // CURRENCY
            // ------------------------------------------

            const currency =
                cleanWikidataLabel(
                    binding,
                    "currencyLabel"
                );


            if (currency) {

                result.currencies.add(
                    currency
                );

            }


            // ------------------------------------------
            // GOVERNMENT TYPE
            // ------------------------------------------

            const governmentType =
                cleanWikidataLabel(
                    binding,
                    "governmentTypeLabel"
                );


            if (governmentType) {

                result.governmentTypes.add(
                    governmentType
                );

            }


            // ------------------------------------------
            // HEAD OF STATE
            // ------------------------------------------

            const headOfState =
                cleanWikidataLabel(
                    binding,
                    "headOfStateLabel"
                );


            if (headOfState) {

                result.headsOfState.add(
                    headOfState
                );

            }


            // ------------------------------------------
            // HEAD OF GOVERNMENT
            // ------------------------------------------

            const headOfGovernment =
                cleanWikidataLabel(
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


    resultsByIso3.forEach(
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


            // ------------------------------------------
            // AREA
            //
            // If multiple area values exist, use the
            // largest current truthy value.
            // ------------------------------------------

            const areas =
                Array.from(
                    result.areas
                )
                .filter(
                    value =>
                        Number.isFinite(value)
                )
                .sort(
                    (a, b) =>
                        b - a
                );


            if (
                areas.length >
                0
            ) {

                country.atAGlance.areaKm2 =
                    Math.round(
                        areas[0]
                    );

            }


            // ------------------------------------------
            // LANGUAGES
            // ------------------------------------------

            const languages =
                Array.from(
                    result.languages
                )
                .sort(
                    (a, b) =>
                        a.localeCompare(b)
                );


            if (
                languages.length >
                0
            ) {

                country.atAGlance.languages =
                    languages;

            }


            // ------------------------------------------
            // CURRENCY
            // ------------------------------------------

            const currencies =
                Array.from(
                    result.currencies
                )
                .sort(
                    (a, b) =>
                        a.localeCompare(b)
                );


            if (
                currencies.length >
                0
            ) {

                country.atAGlance.currency =
                    currencies.join(
                        ", "
                    );

            }


            // ------------------------------------------
            // GOVERNMENT TYPE
            // ------------------------------------------

            const governmentTypes =
                Array.from(
                    result.governmentTypes
                )
                .sort(
                    (a, b) =>
                        a.localeCompare(b)
                );


            if (
                governmentTypes.length >
                0
            ) {

                country.government
                    .governmentType =
                        governmentTypes.join(
                            "; "
                        );

            }


            // ------------------------------------------
            // HEAD OF STATE
            // ------------------------------------------

            const headsOfState =
                Array.from(
                    result.headsOfState
                )
                .sort(
                    (a, b) =>
                        a.localeCompare(b)
                );


            if (
                headsOfState.length >
                0
            ) {

                country.government
                    .headOfState
                    .name =
                        headsOfState.join(
                            " / "
                        );


                country.government
                    .headOfState
                    .title =
                        null;


                country.government
                    .headOfState
                    .asOf =
                        new Date()
                            .toISOString()
                            .slice(0, 10);


                country.government
                    .headOfState
                    .sourceIds =
                        [
                            "wikidata-country-facts"
                        ];

            }


            // ------------------------------------------
            // HEAD OF GOVERNMENT
            // ------------------------------------------

            const headsOfGovernment =
                Array.from(
                    result.headsOfGovernment
                )
                .sort(
                    (a, b) =>
                        a.localeCompare(b)
                );


            if (
                headsOfGovernment.length >
                0
            ) {

                country.government
                    .headOfGovernment
                    .name =
                        headsOfGovernment.join(
                            " / "
                        );


                country.government
                    .headOfGovernment
                    .title =
                        null;


                country.government
                    .headOfGovernment
                    .asOf =
                        new Date()
                            .toISOString()
                            .slice(0, 10);


                country.government
                    .headOfGovernment
                    .sourceIds =
                        [
                            "wikidata-country-facts"
                        ];

            }


            if (!country.factVerification) {

                country.factVerification = {};

            }


            country.factVerification.wikidata = {

                source:
                    "Wikidata structured country data",

                retrieved:
                    new Date()
                        .toISOString()
                        .slice(0, 10)

            };

        }
    );

}


// ============================================================
// LOAD WIKIDATA DATA FOR ALL 195 COUNTRIES
// ============================================================

async function loadAllWikidataCountryFacts() {

    // Smaller batches make the query much less likely
    // to time out.

    const batchSize = 20;


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


        await loadWikidataBatch(
            batch
        );

    }


    countryFactsStatus.wikidataLoaded =
        true;


    console.log(
        "Conflict Atlas Wikidata country facts loaded."
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
// SPECIAL COUNTRY OVERVIEWS
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
// UNITED NATIONS MEMBERSHIP
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
// SOURCES
// ============================================================

function addCountryFactsSources() {

    countries.forEach(
        country => {

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


            addCountrySource(
                country.iso3,
                {

                    id:
                        "wikidata-country-facts",

                    name:
                        "Wikidata — Structured Country Data",

                    url:
                        "https://www.wikidata.org/",

                    type:
                        "structured-data"

                }
            );


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
// VALIDATE BASIC STRUCTURE
// ============================================================

function validateCountryFacts() {

    countries.forEach(
        country => {

            if (!country.atAGlance) {

                console.warn(
                    `${country.name} is missing atAGlance data.`
                );

            }


            if (!country.government) {

                console.warn(
                    `${country.name} is missing government data.`
                );

            }

        }
    );

}


// ============================================================
// VALIDATE LOADED FACTS
// ============================================================

function validateLoadedCountryFacts() {

    const checks = {

        area:
            countries.filter(
                country =>
                    country.atAGlance.areaKm2
            ).length,

        languages:
            countries.filter(
                country =>
                    Array.isArray(
                        country.atAGlance.languages
                    ) &&
                    country.atAGlance.languages.length > 0
            ).length,

        currency:
            countries.filter(
                country =>
                    country.atAGlance.currency
            ).length,

        governmentType:
            countries.filter(
                country =>
                    country.government
                        .governmentType
            ).length,

        headOfState:
            countries.filter(
                country =>
                    country.government
                        .headOfState
                        .name
            ).length,

        headOfGovernment:
            countries.filter(
                country =>
                    country.government
                        .headOfGovernment
                        .name
            ).length

    };


    console.log(
        "Conflict Atlas country fact coverage:",
        checks
    );


    // ----------------------------------------
    // Detect unresolved Wikidata IDs.
    // ----------------------------------------

    countries.forEach(
        country => {

            const values = [

                country.government
                    ?.governmentType,

                country.government
                    ?.headOfState
                    ?.name,

                country.government
                    ?.headOfGovernment
                    ?.name,

                country.atAGlance
                    ?.currency

            ];


            values.forEach(
                value => {

                    if (
                        value &&
                        /\bQ\d+\b/i.test(
                            String(value)
                        )
                    ) {

                        console.warn(
                            `Unresolved Wikidata ID detected for ${country.name}:`,
                            value
                        );

                    }

                }
            );

        }
    );

}


// ============================================================
// CLEAN INVALID DISPLAY VALUES
//
// Nothing like Q22686 should ever appear on the public site.
// ============================================================

function cleanInvalidCountryFacts() {

    countries.forEach(
        country => {

            // ----------------------------------------
            // GOVERNMENT TYPE
            // ----------------------------------------

            if (
                country.government
                    .governmentType &&
                /\bQ\d+\b/i.test(
                    country.government
                        .governmentType
                )
            ) {

                country.government
                    .governmentType =
                        null;

            }


            // ----------------------------------------
            // HEAD OF STATE
            // ----------------------------------------

            if (
                country.government
                    .headOfState
                    .name &&
                /\bQ\d+\b/i.test(
                    country.government
                        .headOfState
                        .name
                )
            ) {

                country.government
                    .headOfState
                    .name =
                        null;

            }


            // ----------------------------------------
            // HEAD OF GOVERNMENT
            // ----------------------------------------

            if (
                country.government
                    .headOfGovernment
                    .name &&
                /\bQ\d+\b/i.test(
                    country.government
                        .headOfGovernment
                        .name
                )
            ) {

                country.government
                    .headOfGovernment
                    .name =
                        null;

            }


            // ----------------------------------------
            // CURRENCY
            // ----------------------------------------

            if (
                country.atAGlance.currency &&
                /\bQ\d+\b/i.test(
                    country.atAGlance.currency
                )
            ) {

                country.atAGlance.currency =
                    null;

            }


            // ----------------------------------------
            // LANGUAGES
            // ----------------------------------------

            if (
                Array.isArray(
                    country.atAGlance.languages
                )
            ) {

                country.atAGlance.languages =
                    country.atAGlance.languages
                        .filter(
                            language =>
                                !/\bQ\d+\b/i.test(
                                    language
                                )
                        );

            }

        }
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


    // ========================================================
    // LOCAL INFORMATION
    // ========================================================

    applyCountryOverviews();

    applySpecialCountryOverviews();

    applyUnitedNationsMembership();

    addCountryFactsSources();

    validateCountryFacts();


    // ========================================================
    // EXTERNAL FACTUAL INFORMATION
    // ========================================================

    await Promise.all([

        loadAllCountryPopulations(),

        loadAllWikidataCountryFacts()

    ]);


    // ========================================================
    // CLEAN + VALIDATE
    // ========================================================

    cleanInvalidCountryFacts();

    validateLoadedCountryFacts();


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
