// ============================================================
// ONE WORLD, ONE LIFE — COUNTRY FACTS
// Conflict Atlas
//
// VERSION 2.0
//
// Adds factual information to all 195 country profiles.
//
// DATA SOURCES
//
// Population:
// World Bank — SP.POP.TOTL
//
// Government structure and leadership:
// Wikidata structured data
//
// Government properties:
// P122 = basic form of government
// P35  = head of state
// P6   = head of government
// P1906 = office held by head of state
// P1313 = office held by head of government
// P298 = ISO 3166-1 alpha-3
//
// Leadership is loaded dynamically because officeholders
// can change.
//
// Crisis relationships remain in countries.js.
// ============================================================


// ============================================================
// SETTINGS
// ============================================================

const COUNTRY_FACTS_VERSION =
    "2.0";

const WORLD_BANK_API =
    "https://api.worldbank.org/v2";

const WIKIDATA_SPARQL_API =
    "https://query.wikidata.org/sparql";


// ============================================================
// STATUS
// ============================================================

const countryFactsStatus = {

    populationLoaded:
        false,

    currencyLoaded:
        false,

    governmentLoaded:
        false,

    loading:
        false,

    errors:
        []

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

    PSE:
        "PSE"

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

    const worldBankCode =
        getWorldBankCountryCode(
            country
        );


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
                "World Bank — Population, total (SP.POP.TOTL)",

            year:
                Number(
                    observation.date
                ),

            retrieved:
                new Date()
                    .toISOString()
                    .slice(
                        0,
                        10
                    )

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

    const batchSize =
        12;


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
        `Conflict Atlas loaded population data for ${loadedCount} of ${countries.length} countries.`
    );

}


// ============================================================
// WORLD BANK COUNTRY METADATA
// ============================================================

async function loadWorldBankCountryMetadata() {

    const url =
        `${WORLD_BANK_API}/country` +
        `?format=json&per_page=400`;


    try {

        const data =
            await fetchCountryFactsJson(
                url
            );


        if (
            !Array.isArray(data) ||
            !Array.isArray(data[1])
        ) {

            return;

        }


        data[1].forEach(
            item => {

                if (
                    !item ||
                    !item.id
                ) {

                    return;

                }


                const country =
                    countries.find(
                        profile =>
                            profile.iso3 ===
                            item.id
                    );


                if (!country) {

                    return;

                }


                if (
                    item.currencyUnit &&
                    String(
                        item.currencyUnit
                    ).trim()
                ) {

                    country.atAGlance.currency =
                        String(
                            item.currencyUnit
                        ).trim();

                }

            }
        );


        countryFactsStatus.currencyLoaded =
            true;


    } catch (error) {

        countryFactsStatus.errors.push({

            country:
                "All countries",

            field:
                "World Bank metadata",

            message:
                error.message

        });

    }

}


// ============================================================
// WIKIDATA GOVERNMENT DATA
//
// This retrieves:
//
// Government type
// Head of state
// Head of government
// Head-of-state office title
// Head-of-government office title
//
// Countries are matched using ISO-3 codes.
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
            .join(
                " "
            );


    const query =
`
SELECT
    ?iso3
    ?governmentTypeLabel
    ?headOfStateLabel
    ?headOfGovernmentLabel
    ?headOfStateOfficeLabel
    ?headOfGovernmentOfficeLabel

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

    }


    OPTIONAL {

        ?country
            wdt:P35
            ?headOfState .

    }


    OPTIONAL {

        ?country
            wdt:P6
            ?headOfGovernment .

    }


    OPTIONAL {

        ?country
            wdt:P1906
            ?headOfStateOffice .

    }


    OPTIONAL {

        ?country
            wdt:P1313
            ?headOfGovernmentOffice .

    }


    SERVICE wikibase:label {

        bd:serviceParam
            wikibase:language
            "en" .

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
                            "application/sparql-results+json",

                        "Api-User-Agent":
                            "OneWorldOneLife-ConflictAtlas/2.0"

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
                    .join(
                        ", "
                    ),

            field:
                "government",

            message:
                error.message

        });

    }

}


// ============================================================
// CREATE / GET GOVERNMENT RESULT
// ============================================================

function createGovernmentResult() {

    return {

        governmentTypes:
            new Set(),

        headsOfState:
            new Set(),

        headsOfGovernment:
            new Set(),

        headOfStateOffices:
            new Set(),

        headOfGovernmentOffices:
            new Set()

    };

}


// ============================================================
// CLEAN WIKIDATA LABEL
// ============================================================

function cleanGovernmentLabel(
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


    if (!value) {

        return null;

    }


    return value;

}


// ============================================================
// APPLY GOVERNMENT QUERY RESULTS
// ============================================================

function applyGovernmentBindings(
    bindings
) {

    const resultsByIso3 =
        new Map();


    bindings.forEach(
        binding => {

            const iso3 =
                cleanGovernmentLabel(
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
                    createGovernmentResult()
                );

            }


            const result =
                resultsByIso3.get(
                    iso3
                );


            const governmentType =
                cleanGovernmentLabel(
                    binding,
                    "governmentTypeLabel"
                );


            const headOfState =
                cleanGovernmentLabel(
                    binding,
                    "headOfStateLabel"
                );


            const headOfGovernment =
                cleanGovernmentLabel(
                    binding,
                    "headOfGovernmentLabel"
                );


            const headOfStateOffice =
                cleanGovernmentLabel(
                    binding,
                    "headOfStateOfficeLabel"
                );


            const headOfGovernmentOffice =
                cleanGovernmentLabel(
                    binding,
                    "headOfGovernmentOfficeLabel"
                );


            if (governmentType) {

                result
                    .governmentTypes
                    .add(
                        governmentType
                    );

            }


            if (headOfState) {

                result
                    .headsOfState
                    .add(
                        headOfState
                    );

            }


            if (headOfGovernment) {

                result
                    .headsOfGovernment
                    .add(
                        headOfGovernment
                    );

            }


            if (headOfStateOffice) {

                result
                    .headOfStateOffices
                    .add(
                        headOfStateOffice
                    );

            }


            if (headOfGovernmentOffice) {

                result
                    .headOfGovernmentOffices
                    .add(
                        headOfGovernmentOffice
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


            const governmentTypes =
                Array.from(
                    result.governmentTypes
                );


            const headsOfState =
                Array.from(
                    result.headsOfState
                );


            const headsOfGovernment =
                Array.from(
                    result.headsOfGovernment
                );


            const headOfStateOffices =
                Array.from(
                    result.headOfStateOffices
                );


            const headOfGovernmentOffices =
                Array.from(
                    result.headOfGovernmentOffices
                );


            if (
                governmentTypes.length >
                0
            ) {

                country.government
                    .governmentType =
                        governmentTypes
                            .join(
                                "; "
                            );

            }


            if (
                headsOfState.length >
                0
            ) {

                country.government
                    .headOfState
                    .name =
                        headsOfState
                            .join(
                                " / "
                            );


                country.government
                    .headOfState
                    .asOf =
                        new Date()
                            .toISOString()
                            .slice(
                                0,
                                10
                            );


                country.government
                    .headOfState
                    .sourceIds =
                        [
                            "wikidata-government"
                        ];

            }


            if (
                headOfStateOffices.length >
                0
            ) {

                country.government
                    .headOfState
                    .title =
                        headOfStateOffices
                            .join(
                                " / "
                            );

            }


            if (
                headsOfGovernment.length >
                0
            ) {

                country.government
                    .headOfGovernment
                    .name =
                        headsOfGovernment
                            .join(
                                " / "
                            );


                country.government
                    .headOfGovernment
                    .asOf =
                        new Date()
                            .toISOString()
                            .slice(
                                0,
                                10
                            );


                country.government
                    .headOfGovernment
                    .sourceIds =
                        [
                            "wikidata-government"
                        ];

            }


            if (
                headOfGovernmentOffices.length >
                0
            ) {

                country.government
                    .headOfGovernment
                    .title =
                        headOfGovernmentOffices
                            .join(
                                " / "
                            );

            }


            if (!country.factVerification) {

                country.factVerification = {};

            }


            country.factVerification.government = {

                source:
                    "Wikidata structured government data",

                retrieved:
                    new Date()
                        .toISOString()
                        .slice(
                            0,
                            10
                        )

            };

        }
    );

}


// ============================================================
// LOAD GOVERNMENT DATA FOR ALL 195 COUNTRIES
//
// Smaller batches reduce the chance of a Wikidata query
// timing out.
// ============================================================

async function loadAllGovernmentData() {

    const batchSize =
        30;


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


    const typeCount =
        countries.filter(
            country =>
                country.government
                    .governmentType
        ).length;


    const stateCount =
        countries.filter(
            country =>
                country.government
                    .headOfState
                    .name
        ).length;


    const governmentCount =
        countries.filter(
            country =>
                country.government
                    .headOfGovernment
                    .name
        ).length;


    console.log(
        `Government types loaded: ${typeCount}/${countries.length}`
    );


    console.log(
        `Heads of state loaded: ${stateCount}/${countries.length}`
    );


    console.log(
        `Heads of government loaded: ${governmentCount}/${countries.length}`
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
// UNITED NATIONS MEMBERSHIP
// ============================================================

function applyUnitedNationsMembership() {

    countries.forEach(
        country => {

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
// COUNTRY FACT SOURCES
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
                        "world-bank-country-metadata",

                    name:
                        "World Bank — Country Metadata",

                    url:
                        "https://api.worldbank.org/v2/country",

                    type:
                        "international-organization"

                }
            );


            addCountrySource(
                country.iso3,
                {

                    id:
                        "wikidata-government",

                    name:
                        "Wikidata — Government and leadership data",

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
// VALIDATION
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
// GOVERNMENT VALIDATION
// ============================================================

function validateGovernmentData() {

    const missingType =
        countries.filter(
            country =>
                !country.government
                    .governmentType
        );


    const missingHeadOfState =
        countries.filter(
            country =>
                !country.government
                    .headOfState
                    .name
        );


    const missingHeadOfGovernment =
        countries.filter(
            country =>
                !country.government
                    .headOfGovernment
                    .name
        );


    if (
        missingType.length >
        0
    ) {

        console.warn(
            "Countries missing government type:",
            missingType.map(
                country =>
                    country.name
            )
        );

    }


    if (
        missingHeadOfState.length >
        0
    ) {

        console.warn(
            "Countries missing head of state:",
            missingHeadOfState.map(
                country =>
                    country.name
            )
        );

    }


    if (
        missingHeadOfGovernment.length >
        0
    ) {

        console.warn(
            "Countries missing head of government:",
            missingHeadOfGovernment.map(
                country =>
                    country.name
            )
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


    // ----------------------------------------
    // LOCAL DATA FIRST
    // ----------------------------------------

    applyCountryOverviews();

    applySpecialCountryOverviews();

    applyUnitedNationsMembership();

    addCountryFactsSources();

    validateCountryFacts();


    // ----------------------------------------
    // EXTERNAL DATA
    // ----------------------------------------

    await Promise.all([

        loadAllCountryPopulations(),

        loadWorldBankCountryMetadata(),

        loadAllGovernmentData()

    ]);


    // ----------------------------------------
    // FINAL VALIDATION
    // ----------------------------------------

    validateGovernmentData();


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
// ============================================================
// ADDITIONAL VERIFIED CRISIS RELATIONSHIPS
// Conflict Atlas
//
// These extend the first relationship set.
//
// Only substantial, documented relationships are included.
// Merely issuing statements, voting at the UN, or providing
// limited assistance is not enough for inclusion.
// ============================================================


// ============================================================
// AFGHANISTAN — REGIONAL DISPLACEMENT
// ============================================================

addCountryCrisisRelationship(
    "IRN",
    "afghanistan",
    [
        "humanitarian-refugee-impact"
    ],
    "Iran hosts a major Afghan refugee and displaced population and remains one of the principal countries affected by cross-border displacement from Afghanistan.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "PAK",
    "afghanistan",
    [
        "humanitarian-refugee-impact"
    ],
    "Pakistan hosts a major Afghan refugee population and remains one of the principal countries affected by displacement from Afghanistan.",
    "September 30, 2026"
);


// ============================================================
// SOMALIA — REGIONAL REFUGEE IMPACT
// ============================================================

addCountryCrisisRelationship(
    "ETH",
    "somalia",
    [
        "humanitarian-refugee-impact"
    ],
    "Ethiopia hosts one of the largest populations of refugees from Somalia.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "KEN",
    "somalia",
    [
        "humanitarian-refugee-impact"
    ],
    "Kenya hosts one of the largest populations of refugees from Somalia.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "UGA",
    "somalia",
    [
        "humanitarian-refugee-impact"
    ],
    "Uganda hosts a significant population of refugees from Somalia.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "DJI",
    "somalia",
    [
        "humanitarian-refugee-impact"
    ],
    "Djibouti hosts refugees from Somalia as part of the wider Horn of Africa displacement situation.",
    "September 30, 2026"
);


// ============================================================
// NIGERIA — LAKE CHAD BASIN DISPLACEMENT
// ============================================================

addCountryCrisisRelationship(
    "CMR",
    "nigeria-displacement",
    [
        "humanitarian-refugee-impact"
    ],
    "Cameroon hosts a substantial Nigerian refugee population associated with the regional Lake Chad Basin displacement crisis.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "TCD",
    "nigeria-displacement",
    [
        "humanitarian-refugee-impact"
    ],
    "Chad hosts Nigerian refugees affected by conflict and displacement in the Lake Chad Basin.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "NER",
    "nigeria-displacement",
    [
        "humanitarian-refugee-impact"
    ],
    "Niger hosts the largest share of Nigerian refugees tracked in the regional Nigeria displacement situation.",
    "September 30, 2026"
);


// ============================================================
// VENEZUELA — REGIONAL DISPLACEMENT
// ============================================================

addCountryCrisisRelationship(
    "COL",
    "venezuela-displacement",
    [
        "humanitarian-refugee-impact"
    ],
    "Colombia is one of the principal host countries for refugees and migrants from Venezuela.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "PER",
    "venezuela-displacement",
    [
        "humanitarian-refugee-impact"
    ],
    "Peru hosts a large population of refugees and migrants from Venezuela.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "ECU",
    "venezuela-displacement",
    [
        "humanitarian-refugee-impact"
    ],
    "Ecuador hosts and receives refugees and migrants from Venezuela as part of the regional displacement situation.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "BRA",
    "venezuela-displacement",
    [
        "humanitarian-refugee-impact"
    ],
    "Brazil is significantly affected by Venezuelan displacement and hosts refugees and migrants from Venezuela.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "ARG",
    "venezuela-displacement",
    [
        "humanitarian-refugee-impact"
    ],
    "Argentina hosts refugees and migrants from Venezuela as part of the wider regional displacement situation.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "PAN",
    "venezuela-displacement",
    [
        "humanitarian-refugee-impact"
    ],
    "Panama is affected by regional Venezuelan displacement and hosts refugees and migrants from Venezuela.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "CRI",
    "venezuela-displacement",
    [
        "humanitarian-refugee-impact"
    ],
    "Costa Rica hosts refugees and migrants from Venezuela as part of the regional displacement situation.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "MEX",
    "venezuela-displacement",
    [
        "humanitarian-refugee-impact"
    ],
    "Mexico is among the countries affected by the regional movement and displacement of Venezuelans.",
    "September 30, 2026"
);


// ============================================================
// IRAN 2026 — DIRECT CONFLICT PARTIES
// ============================================================
//
// United Nations reporting documents U.S. and Israeli
// military strikes against Iran beginning February 28, 2026.
//
// The United States subsequently notified the Security
// Council that it had commenced combat operations against
// Iran in cooperation with Israel.
// ============================================================

addCountryCrisisRelationship(
    "USA",
    "iran-2026",
    [
        "party-to-conflict"
    ],
    "The United States began combat operations against Iran on February 28, 2026, in cooperation with Israel.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "ISR",
    "iran-2026",
    [
        "party-to-conflict"
    ],
    "Israel participated with the United States in military strikes against Iran beginning on February 28, 2026.",
    "September 30, 2026"
);


// ============================================================
// IRAN 2026 — REGIONAL COUNTRIES DIRECTLY AFFECTED
//
// The UN Secretary-General reported Iranian attacks affecting
// Bahrain, Iraq, Jordan, Kuwait, Qatar, Saudi Arabia and the
// United Arab Emirates during the February 2026 escalation.
//
// These countries are therefore connected as directly
// affected by the regional military escalation, rather than
// being classified as parties to the conflict.
// ============================================================

addCountryCrisisRelationship(
    "BHR",
    "iran-2026",
    [
        "directly-affected"
    ],
    "Bahrain was directly affected by Iranian strikes during the regional military escalation that began in February 2026.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "IRQ",
    "iran-2026",
    [
        "directly-affected"
    ],
    "Iraq was directly affected by Iranian strikes during the regional military escalation that began in February 2026.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "JOR",
    "iran-2026",
    [
        "directly-affected"
    ],
    "Jordan was directly affected by Iranian strikes during the regional military escalation that began in February 2026.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "KWT",
    "iran-2026",
    [
        "directly-affected"
    ],
    "Kuwait was directly affected by Iranian strikes during the regional military escalation that began in February 2026.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "QAT",
    "iran-2026",
    [
        "directly-affected"
    ],
    "Qatar was directly affected by Iranian strikes during the regional military escalation that began in February 2026.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "SAU",
    "iran-2026",
    [
        "directly-affected"
    ],
    "Saudi Arabia was directly affected by Iranian strikes during the regional military escalation that began in February 2026.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "ARE",
    "iran-2026",
    [
        "directly-affected"
    ],
    "The United Arab Emirates was directly affected by Iranian strikes during the regional military escalation that began in February 2026.",
    "September 30, 2026"
);


// ============================================================
// EASTERN DR CONGO — RWANDA
// ============================================================

addCountryCrisisRelationship(
    "RWA",
    "drc",
    [
        "military-involvement"
    ],
    "United Nations reporting has documented Rwanda Defence Force support for and joint military operations with AFC/M23 in eastern Democratic Republic of the Congo.",
    "September 30, 2026"
);


// ============================================================
// SYRIA — REGIONAL REFUGEE HOSTS
//
// These may already exist in the first relationship section.
// The helper safely merges duplicate crisis relationships,
// so adding them again will not create duplicate crisis cards.
// ============================================================

addCountryCrisisRelationship(
    "TUR",
    "syria",
    [
        "humanitarian-refugee-impact"
    ],
    "Türkiye remains the largest host country for registered Syrian refugees.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "LBN",
    "syria",
    [
        "humanitarian-refugee-impact"
    ],
    "Lebanon continues to host a large population of refugees from Syria.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "JOR",
    "syria",
    [
        "humanitarian-refugee-impact"
    ],
    "Jordan continues to host a substantial population of refugees from Syria.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "IRQ",
    "syria",
    [
        "humanitarian-refugee-impact"
    ],
    "Iraq continues to host a substantial population of refugees from Syria.",
    "September 30, 2026"
);

addCountryCrisisRelationship(
    "EGY",
    "syria",
    [
        "humanitarian-refugee-impact"
    ],
    "Egypt continues to host refugees from Syria.",
    "September 30, 2026"
);


// ============================================================
// SOUTH SUDAN — KENYA
//
// Kenya's UNHCR population data identifies South Sudanese
// refugees as one of the country's largest refugee groups.
// ============================================================

addCountryCrisisRelationship(
    "KEN",
    "south-sudan",
    [
        "humanitarian-refugee-impact"
    ],
    "Kenya hosts a large population of refugees from South Sudan.",
    "September 30, 2026"
);


// ============================================================
// SOURCE ENTRIES FOR NEW RELATIONSHIPS
// ============================================================


// ------------------------------
// IRAN 2026
// ------------------------------

[
    "IRN",
    "USA",
    "ISR",
    "BHR",
    "IRQ",
    "JOR",
    "KWT",
    "QAT",
    "SAU",
    "ARE"
].forEach(
    iso3 => {

        addCountrySource(
            iso3,
            {

                id:
                    "un-iran-2026",

                name:
                    "United Nations — 2026 Middle East escalation",

                url:
                    "https://www.un.org/sg/en/content/sg/statements/2026-02-28/secretary-generals-remarks-the-security-council-meeting-the-situation-the-middle-east-delivered",

                type:
                    "united-nations"

            }
        );

    }
);


[
    "USA",
    "ISR",
    "IRN"
].forEach(
    iso3 => {

        addCountrySource(
            iso3,
            {

                id:
                    "un-sc-2026-161",

                name:
                    "UN Security Council Document S/2026/161",

                url:
                    "https://docs.un.org/S/2026/161",

                type:
                    "united-nations"

            }
        );

    }
);


// ------------------------------
// AFGHANISTAN
// ------------------------------

[
    "AFG",
    "IRN",
    "PAK"
].forEach(
    iso3 => {

        addCountrySource(
            iso3,
            {

                id:
                    "unhcr-afghanistan-situation",

                name:
                    "UNHCR — Afghanistan Situation",

                url:
                    "https://data.unhcr.org/en/situations/afghanistan",

                type:
                    "unhcr"

            }
        );

    }
);


// ------------------------------
// SOMALIA
// ------------------------------

[
    "SOM",
    "ETH",
    "KEN",
    "UGA",
    "DJI"
].forEach(
    iso3 => {

        addCountrySource(
            iso3,
            {

                id:
                    "unhcr-somalia-situation",

                name:
                    "UNHCR — Horn of Africa Somalia Situation",

                url:
                    "https://data.unhcr.org/en/situations/horn",

                type:
                    "unhcr"

            }
        );

    }
);


// ------------------------------
// NIGERIA
// ------------------------------

[
    "NGA",
    "CMR",
    "TCD",
    "NER"
].forEach(
    iso3 => {

        addCountrySource(
            iso3,
            {

                id:
                    "unhcr-nigeria-situation",

                name:
                    "UNHCR — Nigeria Situation",

                url:
                    "https://data.unhcr.org/en/situations/nigeriasituation",

                type:
                    "unhcr"

            }
        );

    }
);


// ------------------------------
// VENEZUELA
// ------------------------------

[
    "VEN",
    "COL",
    "PER",
    "ECU",
    "BRA",
    "ARG",
    "PAN",
    "CRI",
    "MEX"
].forEach(
    iso3 => {

        addCountrySource(
            iso3,
            {

                id:
                    "unhcr-venezuela-situation",

                name:
                    "UNHCR — Venezuela Situation",

                url:
                    "https://www.unhcr.org/emergencies/venezuela-situation",

                type:
                    "unhcr"

            }
        );

    }
);


// ------------------------------
// SYRIA
// ------------------------------

[
    "SYR",
    "TUR",
    "LBN",
    "JOR",
    "IRQ",
    "EGY"
].forEach(
    iso3 => {

        addCountrySource(
            iso3,
            {

                id:
                    "unhcr-syria-regional",

                name:
                    "UNHCR — Syria Regional Refugee Response",

                url:
                    "https://data.unhcr.org/en/situations/syria",

                type:
                    "unhcr"

            }
        );

    }
);


// ------------------------------
// DR CONGO / RWANDA
// ------------------------------

[
    "COD",
    "RWA"
].forEach(
    iso3 => {

        addCountrySource(
            iso3,
            {

                id:
                    "un-drc-rwanda-experts",

                name:
                    "United Nations — Group of Experts on DR Congo",

                url:
                    "https://digitallibrary.un.org/record/4097846",

                type:
                    "united-nations"

            }
        );

    }
);


// ============================================================
// ADDITIONAL RELATIONSHIPS COMPLETE
// ============================================================

console.log(
    "Conflict Atlas additional verified country-crisis relationships loaded."
);
