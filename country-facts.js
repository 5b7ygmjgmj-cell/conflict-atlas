// ============================================================
// ONE WORLD, ONE LIFE — COUNTRY FACTS
// Conflict Atlas
//
// PURPOSE
// Adds stable and semi-stable factual information to the
// 195 country profiles created in countries.js.
//
// IMPORTANT
// This file does NOT contain crisis relationships,
// humanitarian statistics, displacement statistics,
// or current political leadership.
//
// Population:
// World Bank indicator SP.POP.TOTL
// Most recent non-empty observation.
//
// Currency:
// World Bank country metadata where available.
//
// Region / subregion:
// Already supplied by countries.js using the UN M49 system.
// ============================================================


// ============================================================
// SETTINGS
// ============================================================

const COUNTRY_FACTS_VERSION =
    "1.0";

const WORLD_BANK_API =
    "https://api.worldbank.org/v2";


// ============================================================
// FACTS STATUS
// ============================================================

const countryFactsStatus = {

    populationLoaded:
        false,

    currencyLoaded:
        false,

    loading:
        false,

    errors:
        []

};


// ============================================================
// FORMAT POPULATION
//
// Keeps the real numeric value in the database.
// This helper is only for displaying it later.
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
//
// Most World Bank country codes match ISO-3.
//
// Some Conflict Atlas profiles may not have World Bank
// observations. Those countries simply remain null rather
// than receiving guessed information.
// ============================================================

const worldBankCountryCodeOverrides = {

    // State of Palestine is represented by the World Bank
    // as West Bank and Gaza.

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
// LOAD WORLD BANK POPULATION
//
// SP.POP.TOTL = Population, total
//
// mrnev=1 requests the most recent non-empty observation.
//
// We query countries individually so each profile receives
// the newest available observation and its actual year.
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


        // Store provenance directly with the profile.

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
// LOAD POPULATION FOR ALL 195 PROFILES
//
// A small batch system is used instead of sending all
// requests simultaneously.
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
        `Conflict Atlas loaded population data for ${loadedCount} of ${countries.length} country profiles.`
    );

}


// ============================================================
// WORLD BANK COUNTRY METADATA
//
// This endpoint gives us standardized country metadata.
// We use it to retrieve currency information where available.
//
// We DO NOT replace Conflict Atlas names, capitals, regions,
// coordinates or ISO codes with these values because our
// existing country database intentionally handles several
// special cases separately.
// ============================================================

async function loadWorldBankCountryMetadata() {

    const url =
        `${WORLD_BANK_API}/country` +
        `?format=json&per_page=400`;


    try {

        const data =
            await fetchCountryFactsJson(url);


        if (
            !Array.isArray(data) ||
            !Array.isArray(data[1])
        ) {

            return;

        }


        const metadata =
            data[1];


        metadata.forEach(
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


                // Some versions of the country endpoint may
                // expose currencyUnit. If available, use it.

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
// BETTER COUNTRY OVERVIEWS
//
// These remain intentionally neutral and concise.
//
// Later we can add country-specific geographic/history
// descriptions where useful.
//
// This version improves the generic sentence without making
// unsupported political or historical claims.
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
// APPLY GENERIC OVERVIEWS
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
// INTERNATIONAL ORGANIZATION BASELINE
//
// All 193 UN member states receive the United Nations entry.
//
// The Holy See and State of Palestine retain their observer
// status from countries.js.
//
// Additional organizations such as NATO, EU, AU, ASEAN,
// Arab League, OAS and others will be added separately.
// ============================================================

function applyUnitedNationsMembership() {

    countries.forEach(
        country => {

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
// SPECIAL OVERVIEWS
//
// These profiles benefit from wording that accounts for
// special capital arrangements already documented in
// countries.js.
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
// COUNTRY FACT SOURCE ENTRIES
//
// Add the sources once so future sections can reference them.
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

        }
    );

}


// ============================================================
// VERIFY COUNTRY FACT STRUCTURE
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
// INITIALIZE COUNTRY FACTS
// ============================================================

async function initializeCountryFacts() {

    if (countryFactsStatus.loading) {
        return;
    }


    countryFactsStatus.loading =
        true;


    console.log(
        `Conflict Atlas Country Facts v${COUNTRY_FACTS_VERSION} loading...`
    );


    // Apply information already available locally first.

    applyCountryOverviews();

    applySpecialCountryOverviews();

    applyUnitedNationsMembership();

    addCountryFactsSources();

    validateCountryFacts();


    // Then retrieve external statistical information.

    await Promise.all([

        loadAllCountryPopulations(),

        loadWorldBankCountryMetadata()

    ]);


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
