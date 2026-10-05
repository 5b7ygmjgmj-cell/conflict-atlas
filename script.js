// ============================================================
// ONE WORLD, ONE LIFE
// CRISIS + COUNTRY + EXPLORE + ABOUT VIEWS
// VERSION 9
// ============================================================


// ============================================================
// MAP
// ============================================================

const map = L.map("map", {
    worldCopyJump: true,
    minZoom: 2,
    maxZoom: 18
}).setView([20, 10], 2);


L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 18,
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);


// ============================================================
// CATEGORY SETTINGS
// ============================================================

const categoryColors = {
    conflict: "#dc3545",
    humanitarian: "#f28c28",
    displacement: "#e6c229",
    disaster: "#3282d8"
};


const categoryNames = {
    conflict: "Armed Conflict",
    humanitarian: "Humanitarian Crisis",
    displacement: "Displacement Crisis",
    disaster: "Natural Disaster"
};


// ============================================================
// CURRENT VIEW
// ============================================================

let currentView = "crises";


// ============================================================
// GENERAL ELEMENTS
// ============================================================

const crisisSearch =
    document.getElementById("crisis-search");

const searchResults =
    document.getElementById("search-results");

const crisisCount =
    document.getElementById("crisis-count");

const counterLabel =
    document.getElementById("counter-label");

const crisisViewButton =
    document.getElementById("crisis-view-button");

const countryViewButton =
    document.getElementById("country-view-button");

const aboutViewButton =
    document.getElementById("about-view-button");

const crisisFilters =
    document.getElementById("crisis-filters");

const filterButtons =
    document.querySelectorAll(".filter");

const crisisLegend =
    document.getElementById("crisis-legend");

const countryLegend =
    document.getElementById("country-legend");

const atlasMain =
    document.getElementById("atlas-main");

const aboutView =
    document.getElementById("about-view");

const searchArea =
    document.getElementById("search-area");


// ============================================================
// EXPLORE VIEW — CREATE NAVIGATION BUTTON
// ============================================================

const exploreViewButton =
    document.createElement("button");

exploreViewButton.id =
    "explore-view-button";

exploreViewButton.className =
    "view-button";

exploreViewButton.type =
    "button";

exploreViewButton.textContent =
    "Explore";

if (
    aboutViewButton &&
    aboutViewButton.parentNode
) {

    aboutViewButton.parentNode.insertBefore(
        exploreViewButton,
        aboutViewButton
    );

}


// ============================================================
// EXPLORE VIEW — CREATE PAGE
// ============================================================

const exploreView =
    document.createElement("main");

exploreView.id =
    "explore-view";

exploreView.className =
    "explore-view";

exploreView.setAttribute(
    "aria-hidden",
    "true"
);


exploreView.innerHTML = `
    <div class="explore-container">

        <div class="explore-hero">

            <div class="explore-label">
                EXPLORE THE WORLD
            </div>

            <h2>
                Global Overview
            </h2>

            <p class="explore-intro">
                Explore the crises, countries, regions, and humanitarian
                organizations documented throughout One World, One Life.
            </p>

        </div>


        <section class="explore-section">

            <h3>Global Overview</h3>

            <p>
                A snapshot of the information currently documented
                throughout the project.
            </p>

            <div class="explore-stat-grid">

                <div class="explore-stat-card">
                    <span
                        id="explore-crisis-total"
                        class="explore-stat-number"
                    >
                        0
                    </span>

                    <span class="explore-stat-label">
                        Crises Documented
                    </span>
                </div>


                <div class="explore-stat-card">
                    <span
                        id="explore-country-total"
                        class="explore-stat-number"
                    >
                        0
                    </span>

                    <span class="explore-stat-label">
                        Country Profiles
                    </span>
                </div>


                <div class="explore-stat-card">
                    <span
                        id="explore-related-country-total"
                        class="explore-stat-number"
                    >
                        0
                    </span>

                    <span class="explore-stat-label">
                        Countries Connected to Crises
                    </span>
                </div>


                <div class="explore-stat-card">
                    <span
                        id="explore-region-total"
                        class="explore-stat-number"
                    >
                        0
                    </span>

                    <span class="explore-stat-label">
                        Regions Represented
                    </span>
                </div>

            </div>

        </section>


        <section class="explore-section">

            <h3>Crisis Categories</h3>

            <p>
                Crises are organized into four broad categories.
                A single crisis may appear in more than one category.
            </p>

            <div class="explore-category-grid">

                <button
                    class="explore-category-card"
                    data-explore-category="conflict"
                    type="button"
                >
                    <span
                        class="explore-category-dot"
                        style="background:#dc3545"
                    ></span>

                    <span class="explore-category-content">

                        <strong>
                            Armed Conflict
                        </strong>

                        <span>
                            <b id="explore-conflict-count">0</b>
                            documented crises
                        </span>

                    </span>
                </button>


                <button
                    class="explore-category-card"
                    data-explore-category="humanitarian"
                    type="button"
                >
                    <span
                        class="explore-category-dot"
                        style="background:#f28c28"
                    ></span>

                    <span class="explore-category-content">

                        <strong>
                            Humanitarian Crisis
                        </strong>

                        <span>
                            <b id="explore-humanitarian-count">0</b>
                            documented crises
                        </span>

                    </span>
                </button>


                <button
                    class="explore-category-card"
                    data-explore-category="displacement"
                    type="button"
                >
                    <span
                        class="explore-category-dot"
                        style="background:#e6c229"
                    ></span>

                    <span class="explore-category-content">

                        <strong>
                            Displacement Crisis
                        </strong>

                        <span>
                            <b id="explore-displacement-count">0</b>
                            documented crises
                        </span>

                    </span>
                </button>


                <button
                    class="explore-category-card"
                    data-explore-category="disaster"
                    type="button"
                >
                    <span
                        class="explore-category-dot"
                        style="background:#3282d8"
                    ></span>

                    <span class="explore-category-content">

                        <strong>
                            Natural Disaster
                        </strong>

                        <span>
                            <b id="explore-disaster-count">0</b>
                            documented crises
                        </span>

                    </span>
                </button>

            </div>

        </section>


        <section class="explore-section">

            <h3>Explore by Region</h3>

            <p>
                Select a region to see the countries represented
                in the country database.
            </p>

            <div
                id="explore-region-grid"
                class="explore-region-grid"
            ></div>

            <div
                id="explore-region-results"
                class="explore-region-results"
            ></div>

        </section>


        <section class="explore-section">

            <h3>Compare Countries</h3>

            <p>
                Choose two countries to compare key geographic,
                demographic, political, and crisis-related information.
            </p>


            <div class="compare-controls">

                <div class="compare-select-group">

                    <label for="compare-country-one">
                        Country One
                    </label>

                    <select id="compare-country-one">
                        <option value="">
                            Select a country
                        </option>
                    </select>

                </div>


                <div class="compare-select-group">

                    <label for="compare-country-two">
                        Country Two
                    </label>

                    <select id="compare-country-two">
                        <option value="">
                            Select a country
                        </option>
                    </select>

                </div>

            </div>


            <div
                id="country-comparison"
                class="country-comparison"
            >

                <div class="comparison-placeholder">
                    Select two countries above to compare them.
                </div>

            </div>

        </section>


        <section class="explore-section">

            <h3>Humanitarian Organizations</h3>

            <p>
                One World, One Life references established humanitarian
                organizations throughout crisis and country profiles.
                Their roles vary by emergency and location.
            </p>

            <div
                id="explore-organization-grid"
                class="explore-organization-grid"
            ></div>

            <div class="explore-notice">

                <strong>
                    One World, One Life does not collect donations.
                </strong>

                <p>
                    Humanitarian links on the site direct visitors to
                    external organizations. Their inclusion does not
                    imply that every organization is involved in every
                    crisis documented by the project.
                </p>

            </div>

        </section>

    </div>
`;


if (
    aboutView &&
    aboutView.parentNode
) {

    aboutView.parentNode.insertBefore(
        exploreView,
        aboutView
    );

}


// ============================================================
// EXPLORE VIEW — STYLES
// ============================================================

const exploreStyle =
    document.createElement("style");

exploreStyle.textContent = `

    .explore-view {
        display: none;
        width: 100%;
        max-width: 1500px;
        margin: 0 auto;
        padding: 12px 32px 60px;
    }

    .explore-view.active {
        display: block;
    }

    .explore-container {
        width: min(1100px, 100%);
        margin: 0 auto;
    }

    .explore-hero {
        padding: 45px 0 34px;
        border-bottom: 1px solid rgba(255,255,255,0.1);
    }

    .explore-label {
        margin-bottom: 9px;
        color: #98a7b6;
        font-size: 11px;
        font-weight: 750;
        letter-spacing: 1.5px;
        text-transform: uppercase;
    }

    .explore-hero h2 {
        margin: 0 0 14px;
        color: #ffffff;
        font-size: 38px;
        line-height: 1.1;
        letter-spacing: -0.7px;
    }

    .explore-intro {
        max-width: 780px;
        margin: 0;
        color: #cbd4dd;
        font-size: 18px;
        line-height: 1.6;
    }

    .explore-section {
        padding: 32px 0;
        border-bottom: 1px solid rgba(255,255,255,0.09);
    }

    .explore-section:last-child {
        border-bottom: 0;
    }

    .explore-section h3 {
        margin: 0 0 10px;
        color: #ffffff;
        font-size: 22px;
        line-height: 1.25;
    }

    .explore-section > p {
        max-width: 800px;
        margin: 0 0 20px;
        color: #b9c4ce;
        font-size: 15px;
        line-height: 1.65;
    }

    .explore-stat-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;
    }

    .explore-stat-card {
        min-width: 0;
        padding: 20px 18px;
        border: 1px solid rgba(255,255,255,0.11);
        border-radius: 11px;
        background: rgba(255,255,255,0.025);
    }

    .explore-stat-number {
        display: block;
        margin-bottom: 5px;
        color: #ffffff;
        font-size: 30px;
        font-weight: 750;
        line-height: 1;
    }

    .explore-stat-label {
        display: block;
        color: #aeb9c4;
        font-size: 12px;
        line-height: 1.4;
    }

    .explore-category-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .explore-category-card {
        appearance: none;
        display: flex;
        align-items: center;
        gap: 13px;
        width: 100%;
        padding: 17px;
        border: 1px solid rgba(255,255,255,0.11);
        border-radius: 10px;
        background: rgba(255,255,255,0.025);
        color: #ffffff;
        text-align: left;
        font: inherit;
        cursor: pointer;
        transition:
            background 0.15s ease,
            border-color 0.15s ease;
    }

    .explore-category-card:hover {
        background: rgba(255,255,255,0.07);
        border-color: rgba(255,255,255,0.2);
    }

    .explore-category-dot {
        width: 12px;
        height: 12px;
        flex-shrink: 0;
        border-radius: 50%;
    }

    .explore-category-content {
        display: block;
        min-width: 0;
    }

    .explore-category-content strong {
        display: block;
        margin-bottom: 5px;
        font-size: 14px;
    }

    .explore-category-content > span {
        display: block;
        color: #aeb9c4;
        font-size: 12px;
    }

    .explore-category-content b {
        color: #ffffff;
    }

    .explore-region-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 10px;
    }

    .explore-region-button {
        appearance: none;
        width: 100%;
        padding: 15px;
        border: 1px solid rgba(255,255,255,0.11);
        border-radius: 9px;
        background: rgba(255,255,255,0.025);
        color: #ffffff;
        text-align: left;
        font: inherit;
        cursor: pointer;
    }

    .explore-region-button:hover,
    .explore-region-button.active {
        background: rgba(255,255,255,0.08);
        border-color: rgba(255,255,255,0.22);
    }

    .explore-region-name {
        display: block;
        margin-bottom: 4px;
        font-size: 14px;
        font-weight: 700;
    }

    .explore-region-count {
        display: block;
        color: #9eabb7;
        font-size: 12px;
    }

    .explore-region-results {
        display: none;
        margin-top: 14px;
        padding: 17px;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 10px;
        background: rgba(255,255,255,0.02);
    }

    .explore-region-results.active {
        display: block;
    }

    .explore-region-results h4 {
        margin: 0 0 13px;
        color: #ffffff;
        font-size: 16px;
    }

    .explore-country-list {
        display: flex;
        flex-wrap: wrap;
        gap: 7px;
    }

    .explore-country-chip {
        appearance: none;
        padding: 8px 10px;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 7px;
        background: #151e28;
        color: #d6dee6;
        font: inherit;
        font-size: 12px;
        cursor: pointer;
    }

    .explore-country-chip:hover {
        background: #1d2935;
        color: #ffffff;
    }

    .compare-controls {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
        margin-bottom: 16px;
    }

    .compare-select-group label {
        display: block;
        margin-bottom: 7px;
        color: #aeb9c4;
        font-size: 12px;
        font-weight: 650;
    }

    .compare-select-group select {
        width: 100%;
        min-height: 44px;
        padding: 0 12px;
        border: 1px solid rgba(255,255,255,0.14);
        border-radius: 8px;
        outline: none;
        background: #111923;
        color: #ffffff;
        font: inherit;
        font-size: 14px;
    }

    .country-comparison {
        width: 100%;
    }

    .comparison-placeholder {
        padding: 22px;
        border: 1px dashed rgba(255,255,255,0.14);
        border-radius: 9px;
        color: #8996a3;
        text-align: center;
        font-size: 13px;
    }

    .comparison-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .comparison-country {
        min-width: 0;
        padding: 19px;
        border: 1px solid rgba(255,255,255,0.11);
        border-radius: 11px;
        background: rgba(255,255,255,0.025);
    }

    .comparison-country-title {
        display: flex;
        align-items: center;
        gap: 9px;
        margin-bottom: 16px;
    }

    .comparison-country-flag {
        font-size: 27px;
    }

    .comparison-country-title h4 {
        margin: 0;
        color: #ffffff;
        font-size: 19px;
    }

    .comparison-row {
        padding: 10px 0;
        border-top: 1px solid rgba(255,255,255,0.08);
    }

    .comparison-label {
        display: block;
        margin-bottom: 4px;
        color: #8f9ba8;
        font-size: 10px;
        font-weight: 750;
        letter-spacing: 0.6px;
        text-transform: uppercase;
    }

    .comparison-value {
        display: block;
        color: #e6ebf0;
        font-size: 13px;
        line-height: 1.45;
        overflow-wrap: anywhere;
    }

    .explore-organization-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 10px;
    }

    .explore-organization-card {
        min-width: 0;
        padding: 16px;
        border: 1px solid rgba(255,255,255,0.11);
        border-radius: 9px;
        background: rgba(255,255,255,0.025);
    }

    .explore-organization-card strong {
        display: block;
        margin-bottom: 6px;
        color: #ffffff;
        font-size: 14px;
    }

    .explore-organization-card span {
        display: block;
        color: #aeb9c4;
        font-size: 12px;
        line-height: 1.5;
    }

    .explore-notice {
        margin-top: 18px;
        padding: 17px 18px;
        border: 1px solid rgba(255,255,255,0.12);
        border-left: 3px solid #a8bacb;
        border-radius: 9px;
        background: rgba(255,255,255,0.035);
    }

    .explore-notice strong {
        display: block;
        margin-bottom: 7px;
        color: #ffffff;
        font-size: 14px;
    }

    .explore-notice p {
        margin: 0;
        color: #bcc7d1;
        font-size: 13px;
        line-height: 1.6;
    }

    @media (max-width: 900px) {

        .explore-view {
            padding-left: 20px;
            padding-right: 20px;
        }

        .explore-stat-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .explore-region-grid,
        .explore-organization-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

    }

    @media (max-width: 650px) {

        .explore-view {
            padding: 0 15px 45px;
        }

        .explore-hero {
            padding: 31px 0 26px;
        }

        .explore-hero h2 {
            font-size: 31px;
        }

        .explore-intro {
            font-size: 16px;
        }

        .explore-stat-grid,
        .explore-category-grid,
        .explore-region-grid,
        .compare-controls,
        .comparison-grid,
        .explore-organization-grid {
            grid-template-columns: 1fr;
        }

        .explore-section {
            padding: 25px 0;
        }

    }

`;

document.head.appendChild(
    exploreStyle
);


// ============================================================
// CRISIS PANEL ELEMENTS
// ============================================================

const infoPanel =
    document.getElementById("info-panel");

const closePanelButton =
    document.getElementById("close-panel");

const crisisCategory =
    document.getElementById("crisis-category");

const crisisName =
    document.getElementById("crisis-name");

const lastUpdated =
    document.getElementById("last-updated");

const crisisOverview =
    document.getElementById("crisis-overview");

const crisisCurrentSituation =
    document.getElementById(
        "crisis-current-situation"
    );

const currentSituationSection =
    document.getElementById(
        "current-situation-section"
    );

const crisisActors =
    document.getElementById("crisis-actors");

const crisisImpact =
    document.getElementById("crisis-impact");

const crisisTimeline =
    document.getElementById("crisis-timeline");

const timelineSection =
    document.getElementById("timeline-section");

const crisisSources =
    document.getElementById("crisis-sources");

const crisisAid =
    document.getElementById("crisis-aid");


// ============================================================
// COUNTRY PANEL ELEMENTS
// ============================================================

const countryPanel =
    document.getElementById("country-panel");

const closeCountryPanelButton =
    document.getElementById(
        "close-country-panel"
    );

const countryFlagElement =
    document.getElementById("country-flag");

const countryNameElement =
    document.getElementById("country-name");

const countryLastUpdated =
    document.getElementById(
        "country-last-updated"
    );

const countryCapital =
    document.getElementById(
        "country-capital"
    );

const countryRegion =
    document.getElementById(
        "country-region"
    );

const countrySubregion =
    document.getElementById(
        "country-subregion"
    );

const countryCode =
    document.getElementById(
        "country-code"
    );

const countryPopulation =
    document.getElementById(
        "country-population"
    );

const countryArea =
    document.getElementById(
        "country-area"
    );

const countryLanguages =
    document.getElementById(
        "country-languages"
    );

const countryCurrency =
    document.getElementById(
        "country-currency"
    );

const countryCrisisCount =
    document.getElementById(
        "country-crisis-count"
    );

const countryGovernmentSection =
    document.getElementById(
        "country-government-section"
    );

const countryGovernmentType =
    document.getElementById(
        "country-government-type"
    );

const countryHeadOfState =
    document.getElementById(
        "country-head-of-state"
    );

const countryHeadOfGovernment =
    document.getElementById(
        "country-head-of-government"
    );

const countryUnStatus =
    document.getElementById(
        "country-un-status"
    );

const countryInternationalOrganizations =
    document.getElementById(
        "country-international-organizations"
    );

const countryNote =
    document.getElementById(
        "country-note"
    );

const countryOverview =
    document.getElementById(
        "country-overview"
    );

const countryCrisesSection =
    document.getElementById(
        "country-crises-section"
    );

const countryCrises =
    document.getElementById(
        "country-crises"
    );

const countryHumanitarianSection =
    document.getElementById(
        "country-humanitarian-section"
    );

const countryHumanitarian =
    document.getElementById(
        "country-humanitarian"
    );

const countryDisplacementSection =
    document.getElementById(
        "country-displacement-section"
    );

const countryDisplacement =
    document.getElementById(
        "country-displacement"
    );

const countryTimelineSection =
    document.getElementById(
        "country-timeline-section"
    );

const countryTimeline =
    document.getElementById(
        "country-timeline"
    );

const countryOrganizationsSection =
    document.getElementById(
        "country-organizations-section"
    );

const countryOrganizations =
    document.getElementById(
        "country-organizations"
    );

const countrySources =
    document.getElementById(
        "country-sources"
    );


// ============================================================
// CRISIS MARKERS
// ============================================================

const conflictMarkers = [];


conflicts.forEach(
    conflict => {

        const primaryCategory =
            conflict.primaryCategory ||
            conflict.categories[0];

        const color =
            categoryColors[
                primaryCategory
            ] ||
            "#dc3545";

        const marker =
            L.circleMarker(
                conflict.coordinates,
                {
                    radius: 9,
                    color: "#ffffff",
                    weight: 1.5,
                    fillColor: color,
                    fillOpacity: 0.9
                }
            );

        marker.bindTooltip(
            conflict.name,
            {
                direction: "top",
                offset: [0, -8]
            }
        );

        marker.on(
            "click",
            function () {

                openConflictPanel(
                    conflict
                );

            }
        );

        marker.addTo(map);

        conflictMarkers.push({
            marker: marker,
            conflict: conflict
        });

    }
);


// ============================================================
// COUNTRY BORDER SYSTEM
// ============================================================

let countryGeoJsonLayer = null;

let selectedCountryLayer = null;

const countryLayersByIso3 =
    new Map();

const fallbackCountryMarkers = [];


// ============================================================
// COUNTRY BORDER STYLES
// ============================================================

function countryStyle() {

    return {
        color: "#8fa3b8",
        weight: 0.8,
        opacity: 0.9,
        fillColor: "#233447",
        fillOpacity: 0.28
    };

}


function countryHoverStyle() {

    return {
        color: "#ffffff",
        weight: 1.6,
        opacity: 1,
        fillColor: "#496b8f",
        fillOpacity: 0.5
    };

}


function countrySelectedStyle() {

    return {
        color: "#ffffff",
        weight: 2.2,
        opacity: 1,
        fillColor: "#5f86ad",
        fillOpacity: 0.65
    };

}


// ============================================================
// NORMALIZE COUNTRY NAMES
// ============================================================

function normalizeCountryName(
    name
) {

    return (name || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .replace(
            /[^a-z0-9]/g,
            ""
        );

}


// ============================================================
// NATURAL EARTH NAME ALIASES
// ============================================================

const countryNameAliases = {

    unitedstatesofamerica: "USA",
    unitedstates: "USA",

    russianfederation: "RUS",
    russia: "RUS",

    demrepcongo: "COD",
    democraticrepublicofthecongo: "COD",
    congodemrep: "COD",

    republicofthecongo: "COG",
    congo: "COG",

    ivorycoast: "CIV",
    cotedivoire: "CIV",

    southkorea: "KOR",
    republicofkorea: "KOR",

    northkorea: "PRK",
    democraticpeoplesrepublicofkorea: "PRK",

    laos: "LAO",
    laopeoplesdemocraticrepublic: "LAO",

    vietnam: "VNM",

    czechia: "CZE",
    czechrepublic: "CZE",

    eswatini: "SWZ",
    swaziland: "SWZ",

    tanzania: "TZA",
    unitedrepublicoftanzania: "TZA",

    moldova: "MDA",
    republicofmoldova: "MDA",

    brunei: "BRN",
    bruneidarussalam: "BRN",

    capeverde: "CPV",
    caboverde: "CPV",

    easttimor: "TLS",
    timorleste: "TLS",

    palestine: "PSE",
    stateofpalestine: "PSE",

    thebahamas: "BHS",
    bahamas: "BHS",

    gambia: "GMB",
    thegambia: "GMB"

};


// ============================================================
// MATCH GEOJSON FEATURE TO COUNTRY PROFILE
// ============================================================

function findCountryForFeature(
    feature
) {

    const properties =
        feature.properties || {};

    const possibleCodes = [
        properties.ADM0_A3,
        properties.ISO_A3,
        properties.ISO_A3_EH,
        properties.SOV_A3,
        properties.GU_A3
    ]
        .filter(Boolean)
        .map(
            code =>
                String(code)
                    .toUpperCase()
        );

    const codeMatch =
        countries.find(
            country =>
                possibleCodes.includes(
                    country.iso3
                        .toUpperCase()
                )
        );

    if (codeMatch) {

        return codeMatch;

    }

    const possibleNames = [
        properties.NAME,
        properties.NAME_LONG,
        properties.ADMIN,
        properties.SOVEREIGNT,
        properties.BRK_NAME,
        properties.FORMAL_EN
    ]
        .filter(Boolean);

    for (
        const possibleName
        of possibleNames
    ) {

        const normalizedName =
            normalizeCountryName(
                possibleName
            );

        const aliasCode =
            countryNameAliases[
                normalizedName
            ];

        if (aliasCode) {

            const aliasMatch =
                countries.find(
                    country =>
                        country.iso3 ===
                        aliasCode
                );

            if (aliasMatch) {

                return aliasMatch;

            }

        }

        const nameMatch =
            countries.find(
                country =>
                    normalizeCountryName(
                        country.name
                    ) ===
                    normalizedName
            );

        if (nameMatch) {

            return nameMatch;

        }

    }

    return null;

}


// ============================================================
// RESTORE COUNTRY STYLE AFTER HOVER
// ============================================================

function restoreCountryLayerStyle(
    layer
) {

    if (
        selectedCountryLayer ===
        layer
    ) {

        layer.setStyle(
            countrySelectedStyle()
        );

    } else {

        layer.setStyle(
            countryStyle()
        );

    }

}


// ============================================================
// SELECT COUNTRY POLYGON
// ============================================================

function selectCountryLayer(
    country,
    layer,
    zoomToCountry = true
) {

    if (
        selectedCountryLayer &&
        selectedCountryLayer !==
        layer
    ) {

        selectedCountryLayer.setStyle(
            countryStyle()
        );

    }

    selectedCountryLayer =
        layer;

    layer.setStyle(
        countrySelectedStyle()
    );

    if (
        layer.bringToFront
    ) {

        layer.bringToFront();

    }

    if (
        zoomToCountry
    ) {

        const bounds =
            layer.getBounds();

        if (
            bounds.isValid()
        ) {

            map.flyToBounds(
                bounds,
                {
                    padding: [
                        35,
                        35
                    ],
                    maxZoom: 6,
                    animate: true,
                    duration: 1.1
                }
            );

        }

    }

    openCountryPanel(
        country
    );

}


// ============================================================
// FALLBACK MARKERS FOR VERY SMALL COUNTRIES
// ============================================================

function createFallbackCountryMarker(
    country
) {

    const marker =
        L.circleMarker(
            country.coordinates,
            {
                radius: 5,
                color: "#ffffff",
                weight: 1.2,
                fillColor: "#5f86ad",
                fillOpacity: 0.9
            }
        );

    marker.bindTooltip(
        country.name,
        {
            direction: "top"
        }
    );

    marker.on(
        "click",
        function () {

            map.flyTo(
                country.coordinates,
                6,
                {
                    animate: true,
                    duration: 1.1
                }
            );

            openCountryPanel(
                country
            );

        }
    );

    fallbackCountryMarkers.push({
        marker: marker,
        country: country
    });

}


// ============================================================
// LOAD COUNTRY GEOJSON
// ============================================================

fetch(
    "countries.geojson?v=1"
)
    .then(
        response => {

            if (
                !response.ok
            ) {

                throw new Error(
                    "Could not load countries.geojson."
                );

            }

            return response.json();

        }
    )
    .then(
        geojsonData => {

            const matchedIso3 =
                new Set();

            countryGeoJsonLayer =
                L.geoJSON(
                    geojsonData,
                    {

                        style:
                            countryStyle,

                        onEachFeature:
                            function (
                                feature,
                                layer
                            ) {

                                const country =
                                    findCountryForFeature(
                                        feature
                                    );

                                if (
                                    !country
                                ) {

                                    layer.setStyle({
                                        color: "#596979",
                                        weight: 0.6,
                                        opacity: 0.7,
                                        fillColor: "#1b2836",
                                        fillOpacity: 0.16
                                    });

                                    layer.bindTooltip(
                                        feature.properties.NAME ||
                                        feature.properties.ADMIN ||
                                        "Geographic area",
                                        {
                                            direction: "top"
                                        }
                                    );

                                    return;

                                }

                                matchedIso3.add(
                                    country.iso3
                                );

                                countryLayersByIso3.set(
                                    country.iso3,
                                    layer
                                );

                                layer.bindTooltip(
                                    country.name,
                                    {
                                        direction: "top",
                                        sticky: true
                                    }
                                );

                                layer.on({

                                    mouseover:
                                        function () {

                                            if (
                                                selectedCountryLayer !==
                                                layer
                                            ) {

                                                layer.setStyle(
                                                    countryHoverStyle()
                                                );

                                            }

                                            if (
                                                layer.bringToFront
                                            ) {

                                                layer.bringToFront();

                                            }

                                        },

                                    mouseout:
                                        function () {

                                            restoreCountryLayerStyle(
                                                layer
                                            );

                                        },

                                    click:
                                        function () {

                                            selectCountryLayer(
                                                country,
                                                layer,
                                                true
                                            );

                                        }

                                });

                            }

                    }
                );

            countries.forEach(
                country => {

                    if (
                        !matchedIso3.has(
                            country.iso3
                        )
                    ) {

                        createFallbackCountryMarker(
                            country
                        );

                    }

                }
            );

            if (
                currentView ===
                "countries"
            ) {

                countryGeoJsonLayer.addTo(
                    map
                );

                fallbackCountryMarkers.forEach(
                    item => {

                        item.marker.addTo(
                            map
                        );

                    }
                );

            }

            console.log(
                `One World, One Life loaded country borders for ${matchedIso3.size} profiles.`
            );

        }
    )
    .catch(
        error => {

            console.error(
                "Country borders failed to load:",
                error
            );

            countries.forEach(
                country => {

                    createFallbackCountryMarker(
                        country
                    );

                }
            );

            if (
                currentView ===
                "countries"
            ) {

                fallbackCountryMarkers.forEach(
                    item => {

                        item.marker.addTo(
                            map
                        );

                    }
                );

            }

        }
    );
// ============================================================
// SAFE EXTERNAL LINK
// ============================================================

function createExternalLink(
    name,
    url
) {

    if (
        !name ||
        !url
    ) {

        return null;

    }

    const link =
        document.createElement(
            "a"
        );

    link.textContent =
        name;

    link.href =
        url;

    link.target =
        "_blank";

    link.rel =
        "noopener noreferrer";

    return link;

}


// ============================================================
// OPEN CRISIS PANEL
// ============================================================

function openConflictPanel(
    conflict
) {

    countryPanel.classList.remove(
        "open"
    );

    const readableCategories =
        conflict.categories
            .map(
                category =>
                    categoryNames[
                        category
                    ] ||
                    category
            )
            .join(" • ");

    crisisCategory.textContent =
        readableCategories;

    crisisName.textContent =
        conflict.name;

    lastUpdated.textContent =
        "Last verified: " +
        conflict.lastUpdated;

    crisisOverview.textContent =
        conflict.overview ||
        "Information not yet available.";

    if (
        conflict.currentSituation
    ) {

        crisisCurrentSituation.textContent =
            conflict.currentSituation;

        currentSituationSection.style.display =
            "block";

    } else {

        crisisCurrentSituation.textContent =
            "";

        currentSituationSection.style.display =
            "none";

    }

    crisisActors.innerHTML =
        "";

    if (
        conflict.actors &&
        conflict.actors.length > 0
    ) {

        conflict.actors.forEach(
            actorName => {

                const actor =
                    document.createElement(
                        "span"
                    );

                actor.className =
                    "actor";

                actor.textContent =
                    actorName;

                crisisActors.appendChild(
                    actor
                );

            }
        );

    } else {

        crisisActors.textContent =
            "Actor information not yet available.";

    }

    crisisImpact.textContent =
        conflict.humanitarianImpact ||
        "Humanitarian information not yet available.";

    crisisTimeline.innerHTML =
        "";

    if (
        conflict.timeline &&
        conflict.timeline.length > 0
    ) {

        timelineSection.style.display =
            "block";

        conflict.timeline.forEach(
            item => {

                const timelineItem =
                    document.createElement(
                        "div"
                    );

                timelineItem.className =
                    "timeline-item";

                const timelineDate =
                    document.createElement(
                        "div"
                    );

                timelineDate.className =
                    "timeline-date";

                timelineDate.textContent =
                    item.date;

                const timelineEvent =
                    document.createElement(
                        "p"
                    );

                timelineEvent.className =
                    "timeline-event";

                timelineEvent.textContent =
                    item.event;

                timelineItem.appendChild(
                    timelineDate
                );

                timelineItem.appendChild(
                    timelineEvent
                );

                crisisTimeline.appendChild(
                    timelineItem
                );

            }
        );

    } else {

        timelineSection.style.display =
            "none";

    }


    // ========================================================
    // SOURCES
    // ========================================================

    crisisSources.innerHTML =
        "";

    if (
        conflict.sources &&
        conflict.sources.length > 0
    ) {

        conflict.sources.forEach(
            source => {

                const link =
                    createExternalLink(
                        source.name,
                        source.url
                    );

                if (link) {

                    crisisSources.appendChild(
                        link
                    );

                }

            }
        );

    } else {

        crisisSources.textContent =
            "Sources have not yet been added.";

    }


    // ========================================================
    // HUMANITARIAN AID
    // ========================================================

    crisisAid.innerHTML =
        "";

    if (
        conflict.aid &&
        conflict.aid.length > 0
    ) {

        conflict.aid.forEach(
            organization => {

                const organizationName =
                    organization.name ||
                    organization.label ||
                    organization.title ||
                    "Humanitarian organization";

                const organizationUrl =
                    organization.url ||
                    organization.link ||
                    "";

                const link =
                    createExternalLink(
                        organizationName,
                        organizationUrl
                    );

                if (link) {

                    crisisAid.appendChild(
                        link
                    );

                } else {

                    const item =
                        document.createElement(
                            "div"
                        );

                    item.textContent =
                        organizationName;

                    crisisAid.appendChild(
                        item
                    );

                }

            }
        );

    } else {

        crisisAid.textContent =
            "Humanitarian organizations have not yet been added.";

    }

    infoPanel.classList.add(
        "open"
    );

}


// ============================================================
// COUNTRY PROFILE HELPERS
// ============================================================

function displayValue(
    value,
    fallback = "—"
) {

    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {

        return fallback;

    }

    return String(value);

}


function formatPopulation(
    value
) {

    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {

        return "—";

    }

    if (
        typeof formatCountryPopulation ===
        "function"
    ) {

        return formatCountryPopulation(
            value
        );

    }

    const number =
        Number(value);

    if (
        Number.isFinite(number)
    ) {

        return number.toLocaleString(
            "en-US"
        );

    }

    return String(value);

}


function formatArea(
    value
) {

    const number =
        Number(value);

    if (
        !Number.isFinite(number) ||
        number <= 0
    ) {

        return "—";

    }

    return (
        number.toLocaleString(
            "en-US"
        ) +
        " km²"
    );

}


function formatList(
    value
) {

    if (
        !Array.isArray(value) ||
        value.length === 0
    ) {

        return "—";

    }

    return value
        .map(
            item => {

                if (
                    typeof item ===
                    "string"
                ) {

                    return item;

                }

                return (
                    item.name ||
                    item.label ||
                    item.title ||
                    ""
                );

            }
        )
        .filter(Boolean)
        .join(", ") ||
        "—";

}


function formatPerson(
    person
) {

    if (
        !person ||
        !person.name
    ) {

        return "—";

    }

    if (
        person.title
    ) {

        return (
            person.name +
            " — " +
            person.title
        );

    }

    return person.name;

}


function formatUnStatus(
    status
) {

    if (!status) {

        return "—";

    }

    if (
        typeof status ===
        "string"
    ) {

        const normalized =
            status
                .trim()
                .toLowerCase();

        if (
            normalized ===
            "member"
        ) {

            return "UN Member State";

        }

        if (
            normalized ===
                "observer" ||
            normalized ===
                "observer state"
        ) {

            return "UN Observer State";

        }

        return status;

    }

    return (
        status.label ||
        status.name ||
        status.status ||
        "—"
    );

}


// ============================================================
// COUNTRY / CRISIS RELATIONSHIPS
// ============================================================

function getCountryCrisisRelationships(
    country
) {

    if (
        Array.isArray(
            country.relatedCrises
        ) &&
        country.relatedCrises.length > 0
    ) {

        return country.relatedCrises
            .map(
                relationship => {

                    const conflict =
                        conflicts.find(
                            item =>
                                item.id ===
                                relationship.crisisId
                        );

                    if (!conflict) {

                        return null;

                    }

                    return {
                        conflict: conflict,
                        relationship:
                            relationship
                    };

                }
            )
            .filter(Boolean);

    }

    if (
        Array.isArray(
            country.crisisIds
        ) &&
        country.crisisIds.length > 0
    ) {

        return country.crisisIds
            .map(
                crisisId => {

                    const conflict =
                        conflicts.find(
                            item =>
                                item.id ===
                                crisisId
                        );

                    if (!conflict) {

                        return null;

                    }

                    return {
                        conflict: conflict,
                        relationship: null
                    };

                }
            )
            .filter(Boolean);

    }

    return [];

}


function getRelationshipLabel(
    relationship
) {

    if (
        !relationship ||
        !Array.isArray(
            relationship.relationships
        ) ||
        relationship.relationships.length ===
            0
    ) {

        return "";

    }

    return relationship.relationships
        .map(
            relationshipId => {

                if (
                    typeof crisisRelationshipTypes !==
                        "undefined" &&
                    crisisRelationshipTypes[
                        relationshipId
                    ]
                ) {

                    return crisisRelationshipTypes[
                        relationshipId
                    ].label;

                }

                return relationshipId;

            }
        )
        .join(" • ");

}


// ============================================================
// OPEN COUNTRY PANEL
// ============================================================

function openCountryPanel(
    country
) {

    infoPanel.classList.remove(
        "open"
    );

    const atAGlance =
        country.atAGlance ||
        {};

    const government =
        country.government ||
        {};

    countryFlagElement.textContent =
        country.flag;

    countryNameElement.textContent =
        country.name;

    countryLastUpdated.textContent =
        "Last verified: " +
        displayValue(
            country.lastVerified,
            "Not yet verified"
        );

    countryCapital.textContent =
        displayValue(
            atAGlance.capital ||
            country.capital
        );

    countryRegion.textContent =
        displayValue(
            atAGlance.region ||
            country.region
        );

    countrySubregion.textContent =
        displayValue(
            atAGlance.subregion ||
            country.subregion
        );

    countryCode.textContent =
        country.iso3;

    countryPopulation.textContent =
        formatPopulation(
            atAGlance.population
        );

    countryArea.textContent =
        formatArea(
            atAGlance.areaKm2
        );

    countryLanguages.textContent =
        formatList(
            atAGlance.languages
        );

    countryCurrency.textContent =
        displayValue(
            atAGlance.currency
        );

    countryOverview.textContent =
        displayValue(
            country.overview,
            "Country overview not yet available."
        );


    // ========================================================
    // COUNTRY NOTE
    // ========================================================

    if (
        country.countryNote
    ) {

        countryNote.textContent =
            country.countryNote;

        countryNote.style.display =
            "block";

    } else {

        countryNote.textContent =
            "";

        countryNote.style.display =
            "none";

    }


    // ========================================================
    // GOVERNMENT & INTERNATIONAL RELATIONS
    // ========================================================

    countryGovernmentType.textContent =
        displayValue(
            government.governmentType
        );

    countryHeadOfState.textContent =
        formatPerson(
            government.headOfState
        );

    countryHeadOfGovernment.textContent =
        formatPerson(
            government.headOfGovernment
        );

    countryUnStatus.textContent =
        formatUnStatus(
            government.unStatus
        );

    countryInternationalOrganizations.innerHTML =
        "";

    const internationalOrganizations =
        Array.isArray(
            government.internationalOrganizations
        )
            ? government.internationalOrganizations
            : [];

    if (
        internationalOrganizations.length > 0
    ) {

        const organizationHeading =
            document.createElement(
                "p"
            );

        organizationHeading.className =
            "section-description";

        organizationHeading.textContent =
            "International & regional organizations";

        countryInternationalOrganizations.appendChild(
            organizationHeading
        );

        internationalOrganizations.forEach(
            organization => {

                if (
                    organization.url
                ) {

                    const link =
                        createExternalLink(
                            organization.name,
                            organization.url
                        );

                    if (link) {

                        countryInternationalOrganizations.appendChild(
                            link
                        );

                    }

                } else {

                    const item =
                        document.createElement(
                            "div"
                        );

                    item.textContent =
                        organization.name ||
                        organization;

                    countryInternationalOrganizations.appendChild(
                        item
                    );

                }

            }
        );

    }


    // ========================================================
    // RELATED CRISES
    // ========================================================

    countryCrises.innerHTML =
        "";

    const relationships =
        getCountryCrisisRelationships(
            country
        );

    countryCrisisCount.textContent =
        relationships.length;

    if (
        relationships.length > 0
    ) {

        countryCrisesSection.style.display =
            "block";

        relationships.forEach(
            item => {

                const crisisButton =
                    document.createElement(
                        "button"
                    );

                crisisButton.type =
                    "button";

                crisisButton.className =
                    "country-crisis-item";

                const crisisTitle =
                    document.createElement(
                        "strong"
                    );

                crisisTitle.textContent =
                    item.conflict.name;

                crisisButton.appendChild(
                    crisisTitle
                );

                const relationshipLabel =
                    getRelationshipLabel(
                        item.relationship
                    );

                if (
                    relationshipLabel
                ) {

                    const explanation =
                        document.createElement(
                            "div"
                        );

                    explanation.className =
                        "country-crisis-explanation";

                    explanation.textContent =
                        relationshipLabel;

                    crisisButton.appendChild(
                        explanation
                    );

                }

                if (
                    item.relationship &&
                    item.relationship.note
                ) {

                    const note =
                        document.createElement(
                            "div"
                        );

                    note.className =
                        "country-crisis-explanation";

                    note.textContent =
                        item.relationship.note;

                    crisisButton.appendChild(
                        note
                    );

                }

                crisisButton.addEventListener(
                    "click",
                    function () {

                        switchToCrisisView();

                        map.flyTo(
                            item.conflict.coordinates,
                            5,
                            {
                                animate: true,
                                duration: 1.1
                            }
                        );

                        openConflictPanel(
                            item.conflict
                        );

                    }
                );

                countryCrises.appendChild(
                    crisisButton
                );

            }
        );

    } else {

        countryCrisesSection.style.display =
            "block";

        const noCrisisMessage =
            document.createElement(
                "p"
            );

        noCrisisMessage.textContent =
            "No related crisis entries are currently documented for this country.";

        countryCrises.appendChild(
            noCrisisMessage
        );

    }


    // ========================================================
    // HUMANITARIAN SNAPSHOT
    // ========================================================

    countryHumanitarian.innerHTML =
        "";

    const humanitarian =
        country.humanitarian ||
        country.humanitarianSnapshot ||
        null;

    if (
        humanitarian
    ) {

        countryHumanitarianSection.style.display =
            "block";

        if (
            typeof humanitarian ===
            "string"
        ) {

            countryHumanitarian.textContent =
                humanitarian;

        } else {

            const humanitarianText =
                humanitarian.summary ||
                humanitarian.overview ||
                humanitarian.text ||
                "";

            if (
                humanitarianText
            ) {

                const paragraph =
                    document.createElement(
                        "p"
                    );

                paragraph.textContent =
                    humanitarianText;

                countryHumanitarian.appendChild(
                    paragraph
                );

            }

            const humanitarianStats =
                humanitarian.stats ||
                humanitarian.figures ||
                [];

            if (
                Array.isArray(
                    humanitarianStats
                )
            ) {

                humanitarianStats.forEach(
                    stat => {

                        const item =
                            document.createElement(
                                "div"
                            );

                        item.className =
                            "humanitarian-stat";

                        if (
                            typeof stat ===
                            "string"
                        ) {

                            item.textContent =
                                stat;

                        } else {

                            item.textContent =
                                (
                                    stat.label ||
                                    stat.name ||
                                    ""
                                ) +
                                (
                                    stat.value
                                        ? ": " +
                                          stat.value
                                        : ""
                                );

                        }

                        countryHumanitarian.appendChild(
                            item
                        );

                    }
                );

            }

        }

    } else {

        countryHumanitarianSection.style.display =
            "none";

    }


    // ========================================================
    // DISPLACEMENT
    // ========================================================

    countryDisplacement.innerHTML =
        "";

    const displacement =
        country.displacement ||
        null;

    if (
        displacement
    ) {

        countryDisplacementSection.style.display =
            "block";

        if (
            typeof displacement ===
            "string"
        ) {

            countryDisplacement.textContent =
                displacement;

        } else {

            const displacementText =
                displacement.summary ||
                displacement.overview ||
                displacement.text ||
                "";

            if (
                displacementText
            ) {

                const paragraph =
                    document.createElement(
                        "p"
                    );

                paragraph.textContent =
                    displacementText;

                countryDisplacement.appendChild(
                    paragraph
                );

            }

            const displacementStats =
                displacement.stats ||
                displacement.figures ||
                [];

            if (
                Array.isArray(
                    displacementStats
                )
            ) {

                displacementStats.forEach(
                    stat => {

                        const item =
                            document.createElement(
                                "div"
                            );

                        item.className =
                            "humanitarian-stat";

                        if (
                            typeof stat ===
                            "string"
                        ) {

                            item.textContent =
                                stat;

                        } else {

                            item.textContent =
                                (
                                    stat.label ||
                                    stat.name ||
                                    ""
                                ) +
                                (
                                    stat.value
                                        ? ": " +
                                          stat.value
                                        : ""
                                );

                        }

                        countryDisplacement.appendChild(
                            item
                        );

                    }
                );

            }

        }

    } else {

        countryDisplacementSection.style.display =
            "none";

    }


    // ========================================================
    // RECENT HISTORY
    // ========================================================

    countryTimeline.innerHTML =
        "";

    const countryHistory =
        country.timeline ||
        country.recentHistory ||
        [];

    if (
        Array.isArray(
            countryHistory
        ) &&
        countryHistory.length > 0
    ) {

        countryTimelineSection.style.display =
            "block";

        countryHistory.forEach(
            item => {

                const timelineItem =
                    document.createElement(
                        "div"
                    );

                timelineItem.className =
                    "timeline-item";

                const timelineDate =
                    document.createElement(
                        "div"
                    );

                timelineDate.className =
                    "timeline-date";

                timelineDate.textContent =
                    item.date ||
                    item.year ||
                    "";

                const timelineEvent =
                    document.createElement(
                        "p"
                    );

                timelineEvent.className =
                    "timeline-event";

                timelineEvent.textContent =
                    item.event ||
                    item.description ||
                    item.text ||
                    "";

                timelineItem.appendChild(
                    timelineDate
                );

                timelineItem.appendChild(
                    timelineEvent
                );

                countryTimeline.appendChild(
                    timelineItem
                );

            }
        );

    } else {

        countryTimelineSection.style.display =
            "none";

    }


    // ========================================================
    // HUMANITARIAN ORGANIZATIONS
    // ========================================================

    countryOrganizations.innerHTML =
        "";

    const organizations =
        country.humanitarianOrganizations ||
        country.organizations ||
        [];

    if (
        Array.isArray(
            organizations
        ) &&
        organizations.length > 0
    ) {

        countryOrganizationsSection.style.display =
            "block";

        organizations.forEach(
            organization => {

                const organizationName =
                    typeof organization ===
                    "string"
                        ? organization
                        : (
                            organization.name ||
                            organization.label ||
                            organization.title ||
                            "Humanitarian organization"
                        );

                const organizationUrl =
                    typeof organization ===
                    "object"
                        ? (
                            organization.url ||
                            organization.link ||
                            ""
                        )
                        : "";

                const link =
                    createExternalLink(
                        organizationName,
                        organizationUrl
                    );

                if (
                    link
                ) {

                    countryOrganizations.appendChild(
                        link
                    );

                } else {

                    const item =
                        document.createElement(
                            "div"
                        );

                    item.textContent =
                        organizationName;

                    countryOrganizations.appendChild(
                        item
                    );

                }

            }
        );

    } else {

        countryOrganizationsSection.style.display =
            "none";

    }


    // ========================================================
    // SOURCES
    // ========================================================

    countrySources.innerHTML =
        "";

    const sources =
        Array.isArray(
            country.sources
        )
            ? country.sources
            : [];

    if (
        sources.length > 0
    ) {

        sources.forEach(
            source => {

                const sourceName =
                    typeof source ===
                    "string"
                        ? source
                        : (
                            source.name ||
                            source.label ||
                            source.title ||
                            "Source"
                        );

                const sourceUrl =
                    typeof source ===
                    "object"
                        ? (
                            source.url ||
                            source.link ||
                            ""
                        )
                        : "";

                const link =
                    createExternalLink(
                        sourceName,
                        sourceUrl
                    );

                if (
                    link
                ) {

                    countrySources.appendChild(
                        link
                    );

                } else {

                    const item =
                        document.createElement(
                            "div"
                        );

                    item.textContent =
                        sourceName;

                    countrySources.appendChild(
                        item
                    );

                }

            }
        );

    } else {

        countrySources.textContent =
            "Sources have not yet been added.";

    }


    countryPanel.classList.add(
        "open"
    );

}


// ============================================================
// CLOSE PANELS
// ============================================================

closePanelButton.addEventListener(
    "click",
    function () {

        infoPanel.classList.remove(
            "open"
        );

    }
);


closeCountryPanelButton.addEventListener(
    "click",
    function () {

        countryPanel.classList.remove(
            "open"
        );

    }
);


// ============================================================
// CRISIS FILTERS
// ============================================================

filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            function () {

                const filter =
                    button.dataset.filter;

                filterButtons.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );

                button.classList.add(
                    "active"
                );

                conflictMarkers.forEach(
                    item => {

                        const shouldShow =
                            filter ===
                                "all" ||
                            item.conflict.categories.includes(
                                filter
                            );

                        if (
                            shouldShow
                        ) {

                            if (
                                !map.hasLayer(
                                    item.marker
                                )
                            ) {

                                item.marker.addTo(
                                    map
                                );

                            }

                        } else {

                            if (
                                map.hasLayer(
                                    item.marker
                                )
                            ) {

                                map.removeLayer(
                                    item.marker
                                );

                            }

                        }

                    }
                );

            }
        );

    }
);


// ============================================================
// REMOVE COUNTRY LAYERS
// ============================================================

function removeCountryLayers() {

    if (
        countryGeoJsonLayer &&
        map.hasLayer(
            countryGeoJsonLayer
        )
    ) {

        map.removeLayer(
            countryGeoJsonLayer
        );

    }

    fallbackCountryMarkers.forEach(
        item => {

            if (
                map.hasLayer(
                    item.marker
                )
            ) {

                map.removeLayer(
                    item.marker
                );

            }

        }
    );

}


// ============================================================
// REMOVE CRISIS LAYERS
// ============================================================

function removeCrisisLayers() {

    conflictMarkers.forEach(
        item => {

            if (
                map.hasLayer(
                    item.marker
                )
            ) {

                map.removeLayer(
                    item.marker
                );

            }

        }
    );

}
// ============================================================
// RESET VIEW BUTTONS
// ============================================================

function resetViewButtons() {

    crisisViewButton.classList.remove(
        "active"
    );

    countryViewButton.classList.remove(
        "active"
    );

    exploreViewButton.classList.remove(
        "active"
    );

    aboutViewButton.classList.remove(
        "active"
    );

}


// ============================================================
// HIDE EXPLORE VIEW
// ============================================================

function hideExploreView() {

    exploreView.classList.remove(
        "active"
    );

    exploreView.setAttribute(
        "aria-hidden",
        "true"
    );

}


// ============================================================
// SWITCH TO CRISIS VIEW
// ============================================================

function switchToCrisisView() {

    currentView =
        "crises";

    resetViewButtons();

    crisisViewButton.classList.add(
        "active"
    );

    atlasMain.style.display =
        "block";

    hideExploreView();

    aboutView.classList.remove(
        "active"
    );

    aboutView.setAttribute(
        "aria-hidden",
        "true"
    );

    crisisFilters.style.display =
        "flex";

    searchArea.style.display =
        "flex";

    crisisLegend.style.display =
        "block";

    countryLegend.style.display =
        "none";

    countryPanel.classList.remove(
        "open"
    );

    removeCountryLayers();

    const activeFilter =
        document.querySelector(
            ".filter.active"
        );

    const selectedFilter =
        activeFilter
            ? activeFilter.dataset.filter
            : "all";

    conflictMarkers.forEach(
        item => {

            const categories =
                item.conflict.categories ||
                [];

            const shouldShow =
                selectedFilter ===
                    "all" ||
                categories.includes(
                    selectedFilter
                );

            if (
                shouldShow &&
                !map.hasLayer(
                    item.marker
                )
            ) {

                item.marker.addTo(
                    map
                );

            }

        }
    );

    crisisSearch.placeholder =
        "Search for a crisis...";

    crisisSearch.setAttribute(
        "aria-label",
        "Search crises"
    );

    crisisCount.textContent =
        conflicts.length;

    counterLabel.textContent =
        "crises currently documented";

    clearSearch();

    window.setTimeout(
        function () {

            map.invalidateSize();

        },
        50
    );

}


// ============================================================
// SWITCH TO COUNTRY VIEW
// ============================================================

function switchToCountryView() {

    currentView =
        "countries";

    resetViewButtons();

    countryViewButton.classList.add(
        "active"
    );

    atlasMain.style.display =
        "block";

    hideExploreView();

    aboutView.classList.remove(
        "active"
    );

    aboutView.setAttribute(
        "aria-hidden",
        "true"
    );

    crisisFilters.style.display =
        "none";

    searchArea.style.display =
        "flex";

    crisisLegend.style.display =
        "none";

    countryLegend.style.display =
        "block";

    infoPanel.classList.remove(
        "open"
    );

    removeCrisisLayers();

    if (
        countryGeoJsonLayer &&
        !map.hasLayer(
            countryGeoJsonLayer
        )
    ) {

        countryGeoJsonLayer.addTo(
            map
        );

    }

    fallbackCountryMarkers.forEach(
        item => {

            if (
                !map.hasLayer(
                    item.marker
                )
            ) {

                item.marker.addTo(
                    map
                );

            }

        }
    );

    crisisSearch.placeholder =
        "Search for a country...";

    crisisSearch.setAttribute(
        "aria-label",
        "Search country profiles"
    );

    crisisCount.textContent =
        countries.length;

    counterLabel.textContent =
        "country profiles";

    clearSearch();

    window.setTimeout(
        function () {

            map.invalidateSize();

        },
        50
    );

}


// ============================================================
// EXPLORE DATA HELPERS
// ============================================================

function getExploreRegion(
    country
) {

    const region =
        (
            (
                country.atAGlance &&
                country.atAGlance.region
            ) ||
            country.region ||
            ""
        )
            .toLowerCase();

    const subregion =
        (
            (
                country.atAGlance &&
                country.atAGlance.subregion
            ) ||
            country.subregion ||
            ""
        )
            .toLowerCase();


    if (
        region.includes(
            "africa"
        )
    ) {

        return "Africa";

    }


    if (
        subregion.includes(
            "western asia"
        ) ||
        subregion.includes(
            "middle east"
        )
    ) {

        return "Middle East";

    }


    if (
        region.includes(
            "europe"
        )
    ) {

        return "Europe";

    }


    if (
        region.includes(
            "asia"
        ) ||
        region.includes(
            "oceania"
        )
    ) {

        return "Asia-Pacific";

    }


    if (
        region.includes(
            "america"
        )
    ) {

        return "Americas";

    }


    return "Other";

}


// ============================================================
// UPDATE EXPLORE STATISTICS
// ============================================================

function updateExploreStatistics() {

    const crisisTotal =
        document.getElementById(
            "explore-crisis-total"
        );

    const countryTotal =
        document.getElementById(
            "explore-country-total"
        );

    const relatedCountryTotal =
        document.getElementById(
            "explore-related-country-total"
        );

    const regionTotal =
        document.getElementById(
            "explore-region-total"
        );


    crisisTotal.textContent =
        conflicts.length;

    countryTotal.textContent =
        countries.length;


    const relatedCountries =
        countries.filter(
            country =>
                getCountryCrisisRelationships(
                    country
                ).length > 0
        );

    relatedCountryTotal.textContent =
        relatedCountries.length;


    const regions =
        new Set(
            countries
                .map(
                    country =>
                        getExploreRegion(
                            country
                        )
                )
                .filter(
                    region =>
                        region !==
                        "Other"
                )
        );

    regionTotal.textContent =
        regions.size;


    Object.keys(
        categoryNames
    ).forEach(
        category => {

            const element =
                document.getElementById(
                    "explore-" +
                    category +
                    "-count"
                );

            if (
                !element
            ) {

                return;

            }

            const total =
                conflicts.filter(
                    conflict =>
                        (
                            conflict.categories ||
                            []
                        ).includes(
                            category
                        )
                ).length;

            element.textContent =
                total;

        }
    );

}


// ============================================================
// BUILD EXPLORE REGIONS
// ============================================================

function buildExploreRegions() {

    const regionGrid =
        document.getElementById(
            "explore-region-grid"
        );

    if (
        !regionGrid
    ) {

        return;

    }

    regionGrid.innerHTML =
        "";


    const regionOrder = [
        "Africa",
        "Middle East",
        "Europe",
        "Asia-Pacific",
        "Americas"
    ];


    regionOrder.forEach(
        regionName => {

            const matchingCountries =
                countries
                    .filter(
                        country =>
                            getExploreRegion(
                                country
                            ) ===
                            regionName
                    )
                    .sort(
                        (
                            countryA,
                            countryB
                        ) =>
                            countryA.name.localeCompare(
                                countryB.name
                            )
                    );


            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.className =
                "explore-region-button";


            const name =
                document.createElement(
                    "span"
                );

            name.className =
                "explore-region-name";

            name.textContent =
                regionName;


            const count =
                document.createElement(
                    "span"
                );

            count.className =
                "explore-region-count";

            count.textContent =
                matchingCountries.length +
                (
                    matchingCountries.length ===
                    1
                        ? " country"
                        : " countries"
                );


            button.appendChild(
                name
            );

            button.appendChild(
                count
            );


            button.addEventListener(
                "click",
                function () {

                    document
                        .querySelectorAll(
                            ".explore-region-button"
                        )
                        .forEach(
                            item =>
                                item.classList.remove(
                                    "active"
                                )
                        );

                    button.classList.add(
                        "active"
                    );

                    showExploreRegionCountries(
                        regionName,
                        matchingCountries
                    );

                }
            );


            regionGrid.appendChild(
                button
            );

        }
    );

}


// ============================================================
// SHOW COUNTRIES IN EXPLORE REGION
// ============================================================

function showExploreRegionCountries(
    regionName,
    regionCountries
) {

    const results =
        document.getElementById(
            "explore-region-results"
        );

    results.innerHTML =
        "";


    const heading =
        document.createElement(
            "h4"
        );

    heading.textContent =
        regionName +
        " — " +
        regionCountries.length +
        (
            regionCountries.length ===
            1
                ? " country"
                : " countries"
        );


    const list =
        document.createElement(
            "div"
        );

    list.className =
        "explore-country-list";


    regionCountries.forEach(
        country => {

            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.className =
                "explore-country-chip";

            button.textContent =
                (
                    country.flag
                        ? country.flag +
                          " "
                        : ""
                ) +
                country.name;


            button.addEventListener(
                "click",
                function () {

                    switchToCountryView();

                    selectCountrySearchResult(
                        country
                    );

                }
            );


            list.appendChild(
                button
            );

        }
    );


    results.appendChild(
        heading
    );

    results.appendChild(
        list
    );

    results.classList.add(
        "active"
    );

}


// ============================================================
// COUNTRY COMPARISON SELECTORS
// ============================================================

function buildCountryComparisonSelectors() {

    const firstSelect =
        document.getElementById(
            "compare-country-one"
        );

    const secondSelect =
        document.getElementById(
            "compare-country-two"
        );


    if (
        !firstSelect ||
        !secondSelect
    ) {

        return;

    }


    const sortedCountries =
        [...countries]
            .sort(
                (
                    countryA,
                    countryB
                ) =>
                    countryA.name.localeCompare(
                        countryB.name
                    )
            );


    sortedCountries.forEach(
        country => {

            const firstOption =
                document.createElement(
                    "option"
                );

            firstOption.value =
                country.iso3;

            firstOption.textContent =
                (
                    country.flag
                        ? country.flag +
                          " "
                        : ""
                ) +
                country.name;


            const secondOption =
                firstOption.cloneNode(
                    true
                );


            firstSelect.appendChild(
                firstOption
            );

            secondSelect.appendChild(
                secondOption
            );

        }
    );


    firstSelect.addEventListener(
        "change",
        updateCountryComparison
    );

    secondSelect.addEventListener(
        "change",
        updateCountryComparison
    );

}


// ============================================================
// COMPARISON VALUE
// ============================================================

function createComparisonRow(
    label,
    value
) {

    const row =
        document.createElement(
            "div"
        );

    row.className =
        "comparison-row";


    const rowLabel =
        document.createElement(
            "span"
        );

    rowLabel.className =
        "comparison-label";

    rowLabel.textContent =
        label;


    const rowValue =
        document.createElement(
            "span"
        );

    rowValue.className =
        "comparison-value";

    rowValue.textContent =
        value;


    row.appendChild(
        rowLabel
    );

    row.appendChild(
        rowValue
    );


    return row;

}


// ============================================================
// BUILD ONE COUNTRY COMPARISON CARD
// ============================================================

function buildComparisonCountry(
    country
) {

    const atAGlance =
        country.atAGlance ||
        {};

    const government =
        country.government ||
        {};

    const relationships =
        getCountryCrisisRelationships(
            country
        );


    const card =
        document.createElement(
            "div"
        );

    card.className =
        "comparison-country";


    const title =
        document.createElement(
            "div"
        );

    title.className =
        "comparison-country-title";


    const flag =
        document.createElement(
            "span"
        );

    flag.className =
        "comparison-country-flag";

    flag.textContent =
        country.flag ||
        "";


    const heading =
        document.createElement(
            "h4"
        );

    heading.textContent =
        country.name;


    title.appendChild(
        flag
    );

    title.appendChild(
        heading
    );

    card.appendChild(
        title
    );


    card.appendChild(
        createComparisonRow(
            "Population",
            formatPopulation(
                atAGlance.population
            )
        )
    );


    card.appendChild(
        createComparisonRow(
            "Capital",
            displayValue(
                atAGlance.capital ||
                country.capital
            )
        )
    );


    card.appendChild(
        createComparisonRow(
            "Region",
            displayValue(
                atAGlance.region ||
                country.region
            )
        )
    );


    card.appendChild(
        createComparisonRow(
            "Subregion",
            displayValue(
                atAGlance.subregion ||
                country.subregion
            )
        )
    );


    card.appendChild(
        createComparisonRow(
            "Area",
            formatArea(
                atAGlance.areaKm2
            )
        )
    );


    card.appendChild(
        createComparisonRow(
            "Languages",
            formatList(
                atAGlance.languages
            )
        )
    );


    card.appendChild(
        createComparisonRow(
            "Currency",
            displayValue(
                atAGlance.currency
            )
        )
    );


    card.appendChild(
        createComparisonRow(
            "Government Type",
            displayValue(
                government.governmentType
            )
        )
    );


    card.appendChild(
        createComparisonRow(
            "Head of State",
            formatPerson(
                government.headOfState
            )
        )
    );


    card.appendChild(
        createComparisonRow(
            "Head of Government",
            formatPerson(
                government.headOfGovernment
            )
        )
    );


    card.appendChild(
        createComparisonRow(
            "United Nations Status",
            formatUnStatus(
                government.unStatus
            )
        )
    );


    card.appendChild(
        createComparisonRow(
            "Related Crises",
            String(
                relationships.length
            )
        )
    );


    return card;

}


// ============================================================
// UPDATE COUNTRY COMPARISON
// ============================================================

function updateCountryComparison() {

    const firstSelect =
        document.getElementById(
            "compare-country-one"
        );

    const secondSelect =
        document.getElementById(
            "compare-country-two"
        );

    const comparison =
        document.getElementById(
            "country-comparison"
        );


    comparison.innerHTML =
        "";


    if (
        !firstSelect.value ||
        !secondSelect.value
    ) {

        const placeholder =
            document.createElement(
                "div"
            );

        placeholder.className =
            "comparison-placeholder";

        placeholder.textContent =
            "Select two countries above to compare them.";

        comparison.appendChild(
            placeholder
        );

        return;

    }


    const firstCountry =
        countries.find(
            country =>
                country.iso3 ===
                firstSelect.value
        );

    const secondCountry =
        countries.find(
            country =>
                country.iso3 ===
                secondSelect.value
        );


    if (
        !firstCountry ||
        !secondCountry
    ) {

        return;

    }


    const grid =
        document.createElement(
            "div"
        );

    grid.className =
        "comparison-grid";


    grid.appendChild(
        buildComparisonCountry(
            firstCountry
        )
    );

    grid.appendChild(
        buildComparisonCountry(
            secondCountry
        )
    );


    comparison.appendChild(
        grid
    );

}


// ============================================================
// HUMANITARIAN ORGANIZATIONS IN EXPLORE
// ============================================================

function buildExploreOrganizations() {

    const organizationGrid =
        document.getElementById(
            "explore-organization-grid"
        );


    if (
        !organizationGrid
    ) {

        return;

    }


    const organizationMap =
        new Map();


    function addOrganization(
        organization
    ) {

        if (
            !organization
        ) {

            return;

        }


        const name =
            typeof organization ===
            "string"
                ? organization
                : (
                    organization.name ||
                    organization.label ||
                    organization.title ||
                    ""
                );


        if (
            !name
        ) {

            return;

        }


        const key =
            name
                .trim()
                .toLowerCase();


        if (
            organizationMap.has(
                key
            )
        ) {

            organizationMap.get(
                key
            ).references +=
                1;

            return;

        }


        organizationMap.set(
            key,
            {
                name: name,
                references: 1
            }
        );

    }


    conflicts.forEach(
        conflict => {

            (
                conflict.aid ||
                []
            ).forEach(
                addOrganization
            );

        }
    );


    countries.forEach(
        country => {

            (
                country.organizations ||
                []
            ).forEach(
                addOrganization
            );

        }
    );


    const organizations =
        Array.from(
            organizationMap.values()
        )
            .sort(
                (
                    organizationA,
                    organizationB
                ) =>
                    organizationB.references -
                        organizationA.references ||
                    organizationA.name.localeCompare(
                        organizationB.name
                    )
            )
            .slice(
                0,
                12
            );


    organizationGrid.innerHTML =
        "";


    if (
        organizations.length ===
        0
    ) {

        const empty =
            document.createElement(
                "div"
            );

        empty.className =
            "comparison-placeholder";

        empty.textContent =
            "Humanitarian organizations will appear here as they are referenced in the database.";

        organizationGrid.appendChild(
            empty
        );

        return;

    }


    organizations.forEach(
        organization => {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "explore-organization-card";


            const name =
                document.createElement(
                    "strong"
                );

            name.textContent =
                organization.name;


            const references =
                document.createElement(
                    "span"
                );

            references.textContent =
                "Referenced in " +
                organization.references +
                (
                    organization.references ===
                    1
                        ? " profile"
                        : " profiles"
                );


            card.appendChild(
                name
            );

            card.appendChild(
                references
            );


            organizationGrid.appendChild(
                card
            );

        }
    );

}


// ============================================================
// EXPLORE CATEGORY BUTTONS
// ============================================================

document
    .querySelectorAll(
        ".explore-category-card"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                function () {

                    const category =
                        button.dataset
                            .exploreCategory;

                    switchToCrisisView();


                    filterButtons.forEach(
                        filterButton => {

                            filterButton.classList.remove(
                                "active"
                            );


                            if (
                                filterButton.dataset.filter ===
                                category
                            ) {

                                filterButton.classList.add(
                                    "active"
                                );

                            }

                        }
                    );


                    conflictMarkers.forEach(
                        item => {

                            const shouldShow =
                                (
                                    item.conflict.categories ||
                                    []
                                ).includes(
                                    category
                                );


                            if (
                                shouldShow
                            ) {

                                if (
                                    !map.hasLayer(
                                        item.marker
                                    )
                                ) {

                                    item.marker.addTo(
                                        map
                                    );

                                }

                            } else {

                                if (
                                    map.hasLayer(
                                        item.marker
                                    )
                                ) {

                                    map.removeLayer(
                                        item.marker
                                    );

                                }

                            }

                        }
                    );

                }
            );

        }
    );


// ============================================================
// SWITCH TO EXPLORE VIEW
// ============================================================

function switchToExploreView() {

    currentView =
        "explore";

    resetViewButtons();

    exploreViewButton.classList.add(
        "active"
    );

    infoPanel.classList.remove(
        "open"
    );

    countryPanel.classList.remove(
        "open"
    );

    clearSearch();

    crisisFilters.style.display =
        "none";

    searchArea.style.display =
        "none";

    crisisLegend.style.display =
        "none";

    countryLegend.style.display =
        "none";

    atlasMain.style.display =
        "none";

    aboutView.classList.remove(
        "active"
    );

    aboutView.setAttribute(
        "aria-hidden",
        "true"
    );

    exploreView.classList.add(
        "active"
    );

    exploreView.setAttribute(
        "aria-hidden",
        "false"
    );


    updateExploreStatistics();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ============================================================
// SWITCH TO ABOUT VIEW
// ============================================================

function switchToAboutView() {

    currentView =
        "about";

    resetViewButtons();

    aboutViewButton.classList.add(
        "active"
    );

    infoPanel.classList.remove(
        "open"
    );

    countryPanel.classList.remove(
        "open"
    );

    clearSearch();

    crisisFilters.style.display =
        "none";

    searchArea.style.display =
        "none";

    crisisLegend.style.display =
        "none";

    countryLegend.style.display =
        "none";

    atlasMain.style.display =
        "none";

    hideExploreView();

    aboutView.classList.add(
        "active"
    );

    aboutView.setAttribute(
        "aria-hidden",
        "false"
    );

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ============================================================
// VIEW BUTTON EVENTS
// ============================================================

crisisViewButton.addEventListener(
    "click",
    function () {

        switchToCrisisView();

    }
);


countryViewButton.addEventListener(
    "click",
    function () {

        switchToCountryView();

    }
);


exploreViewButton.addEventListener(
    "click",
    function () {

        switchToExploreView();

    }
);


aboutViewButton.addEventListener(
    "click",
    function () {

        switchToAboutView();

    }
);


// ============================================================
// BUILD EXPLORE CONTENT
// ============================================================

buildExploreRegions();

buildCountryComparisonSelectors();

buildExploreOrganizations();

updateExploreStatistics();


// ============================================================
// SEARCH
// ============================================================

crisisSearch.addEventListener(
    "input",
    function () {

        const searchTerm =
            crisisSearch.value
                .trim()
                .toLowerCase();

        searchResults.innerHTML =
            "";

        if (
            searchTerm ===
            ""
        ) {

            searchResults.style.display =
                "none";

            return;

        }

        if (
            currentView ===
            "crises"
        ) {

            searchCrises(
                searchTerm
            );

        } else if (
            currentView ===
            "countries"
        ) {

            searchCountries(
                searchTerm
            );

        }

    }
);


// ============================================================
// SEARCH CRISES
// ============================================================

function searchCrises(
    searchTerm
) {

    const matches =
        conflicts
            .filter(
                conflict => {

                    const nameMatch =
                        conflict.name
                            .toLowerCase()
                            .includes(
                                searchTerm
                            );

                    const categoryMatch =
                        conflict.categories
                            .some(
                                category => {

                                    const readableName =
                                        categoryNames[
                                            category
                                        ] ||
                                        category;

                                    return readableName
                                        .toLowerCase()
                                        .includes(
                                            searchTerm
                                        );

                                }
                            );

                    const actorMatch =
                        (
                            conflict.actors ||
                            []
                        )
                            .some(
                                actor =>
                                    actor
                                        .toLowerCase()
                                        .includes(
                                            searchTerm
                                        )
                            );

                    return (
                        nameMatch ||
                        categoryMatch ||
                        actorMatch
                    );

                }
            )
            .slice(
                0,
                8
            );

    if (
        matches.length ===
        0
    ) {

        showNoSearchResult(
            "No matching crisis found."
        );

        return;

    }

    matches.forEach(
        conflict => {

            const primaryCategory =
                conflict.primaryCategory ||
                conflict.categories[0];

            createSearchResult(
                conflict.name,

                categoryNames[
                    primaryCategory
                ] ||
                primaryCategory,

                function () {

                    selectCrisisSearchResult(
                        conflict
                    );

                }
            );

        }
    );

    searchResults.style.display =
        "block";

}


// ============================================================
// SEARCH COUNTRIES
// ============================================================

function searchCountries(
    searchTerm
) {

    const matches =
        countries
            .filter(
                country => {

                    return (
                        country.name
                            .toLowerCase()
                            .includes(
                                searchTerm
                            ) ||

                        (
                            country.capital ||
                            ""
                        )
                            .toLowerCase()
                            .includes(
                                searchTerm
                            ) ||

                        (
                            country.region ||
                            ""
                        )
                            .toLowerCase()
                            .includes(
                                searchTerm
                            ) ||

                        (
                            country.subregion ||
                            ""
                        )
                            .toLowerCase()
                            .includes(
                                searchTerm
                            ) ||

                        country.iso2
                            .toLowerCase()
                            .includes(
                                searchTerm
                            ) ||

                        country.iso3
                            .toLowerCase()
                            .includes(
                                searchTerm
                            )
                    );

                }
            )
            .slice(
                0,
                10
            );

    if (
        matches.length ===
        0
    ) {

        showNoSearchResult(
            "No matching country found."
        );

        return;

    }

    matches.forEach(
        country => {

            createSearchResult(
                country.flag +
                    " " +
                    country.name,

                country.subregion,

                function () {

                    selectCountrySearchResult(
                        country
                    );

                }
            );

        }
    );

    searchResults.style.display =
        "block";

}
// ============================================================
// SEARCH
// ============================================================

crisisSearch.addEventListener(
    "input",
    function () {

        const searchTerm =
            crisisSearch.value
                .trim()
                .toLowerCase();

        searchResults.innerHTML =
            "";

        if (
            searchTerm ===
            ""
        ) {

            searchResults.style.display =
                "none";

            return;

        }

        if (
            currentView ===
            "crises"
        ) {

            searchCrises(
                searchTerm
            );

        } else if (
            currentView ===
            "countries"
        ) {

            searchCountries(
                searchTerm
            );

        }

    }
);


// ============================================================
// SEARCH CRISES
// ============================================================

function searchCrises(
    searchTerm
) {

    const matches =
        conflicts
            .filter(
                conflict => {

                    const nameMatch =
                        conflict.name
                            .toLowerCase()
                            .includes(
                                searchTerm
                            );

                    const categoryMatch =
                        conflict.categories
                            .some(
                                category => {

                                    const readableName =
                                        categoryNames[
                                            category
                                        ] ||
                                        category;

                                    return readableName
                                        .toLowerCase()
                                        .includes(
                                            searchTerm
                                        );

                                }
                            );

                    const actorMatch =
                        (
                            conflict.actors ||
                            []
                        )
                            .some(
                                actor =>
                                    actor
                                        .toLowerCase()
                                        .includes(
                                            searchTerm
                                        )
                            );

                    return (
                        nameMatch ||
                        categoryMatch ||
                        actorMatch
                    );

                }
            )
            .slice(
                0,
                8
            );

    if (
        matches.length ===
        0
    ) {

        showNoSearchResult(
            "No matching crisis found."
        );

        return;

    }

    matches.forEach(
        conflict => {

            const primaryCategory =
                conflict.primaryCategory ||
                conflict.categories[0];

            createSearchResult(
                conflict.name,

                categoryNames[
                    primaryCategory
                ] ||
                primaryCategory,

                function () {

                    selectCrisisSearchResult(
                        conflict
                    );

                }
            );

        }
    );

    searchResults.style.display =
        "block";

}


// ============================================================
// SEARCH COUNTRIES
// ============================================================

function searchCountries(
    searchTerm
) {

    const matches =
        countries
            .filter(
                country => {

                    return (
                        country.name
                            .toLowerCase()
                            .includes(
                                searchTerm
                            ) ||

                        (
                            country.capital ||
                            ""
                        )
                            .toLowerCase()
                            .includes(
                                searchTerm
                            ) ||

                        (
                            country.region ||
                            ""
                        )
                            .toLowerCase()
                            .includes(
                                searchTerm
                            ) ||

                        (
                            country.subregion ||
                            ""
                        )
                            .toLowerCase()
                            .includes(
                                searchTerm
                            ) ||

                        country.iso2
                            .toLowerCase()
                            .includes(
                                searchTerm
                            ) ||

                        country.iso3
                            .toLowerCase()
                            .includes(
                                searchTerm
                            )
                    );

                }
            )
            .slice(
                0,
                10
            );

    if (
        matches.length ===
        0
    ) {

        showNoSearchResult(
            "No matching country found."
        );

        return;

    }

    matches.forEach(
        country => {

            createSearchResult(
                country.flag +
                    " " +
                    country.name,

                country.subregion,

                function () {

                    selectCountrySearchResult(
                        country
                    );

                }
            );

        }
    );

    searchResults.style.display =
        "block";

}


// ============================================================
// CREATE SEARCH RESULT
// ============================================================

function createSearchResult(
    name,
    subtitle,
    clickFunction
) {

    const result =
        document.createElement(
            "button"
        );

    result.type =
        "button";

    result.className =
        "search-result-item";

    const resultName =
        document.createElement(
            "span"
        );

    resultName.className =
        "search-result-name";

    resultName.textContent =
        name;

    const resultCategory =
        document.createElement(
            "span"
        );

    resultCategory.className =
        "search-result-category";

    resultCategory.textContent =
        subtitle ||
        "";

    result.appendChild(
        resultName
    );

    result.appendChild(
        resultCategory
    );

    result.addEventListener(
        "click",
        clickFunction
    );

    searchResults.appendChild(
        result
    );

}


// ============================================================
// NO SEARCH RESULT
// ============================================================

function showNoSearchResult(
    message
) {

    const noResult =
        document.createElement(
            "div"
        );

    noResult.className =
        "search-no-result";

    noResult.textContent =
        message;

    searchResults.appendChild(
        noResult
    );

    searchResults.style.display =
        "block";

}


// ============================================================
// SELECT CRISIS SEARCH RESULT
// ============================================================

function selectCrisisSearchResult(
    conflict
) {

    filterButtons.forEach(
        button => {

            button.classList.remove(
                "active"
            );

            if (
                button.dataset.filter ===
                "all"
            ) {

                button.classList.add(
                    "active"
                );

            }

        }
    );

    conflictMarkers.forEach(
        item => {

            if (
                !map.hasLayer(
                    item.marker
                )
            ) {

                item.marker.addTo(
                    map
                );

            }

        }
    );

    const selectedMarker =
        conflictMarkers.find(
            item =>
                item.conflict.id ===
                conflict.id
        );

    map.flyTo(
        conflict.coordinates,
        5,
        {
            animate: true,
            duration: 1.2
        }
    );

    openConflictPanel(
        conflict
    );

    if (
        selectedMarker
    ) {

        selectedMarker
            .marker
            .openTooltip();

    }

    crisisSearch.value =
        conflict.name;

    searchResults.innerHTML =
        "";

    searchResults.style.display =
        "none";

}


// ============================================================
// SELECT COUNTRY SEARCH RESULT
// ============================================================

function selectCountrySearchResult(
    country
) {

    const countryLayer =
        countryLayersByIso3.get(
            country.iso3
        );

    if (
        countryLayer
    ) {

        selectCountryLayer(
            country,
            countryLayer,
            true
        );

    } else {

        map.flyTo(
            country.coordinates,
            6,
            {
                animate: true,
                duration: 1.2
            }
        );

        openCountryPanel(
            country
        );

        const fallbackMarker =
            fallbackCountryMarkers.find(
                item =>
                    item.country.iso3 ===
                    country.iso3
            );

        if (
            fallbackMarker
        ) {

            fallbackMarker
                .marker
                .openTooltip();

        }

    }

    crisisSearch.value =
        country.name;

    searchResults.innerHTML =
        "";

    searchResults.style.display =
        "none";

}


// ============================================================
// CLEAR SEARCH
// ============================================================

function clearSearch() {

    crisisSearch.value =
        "";

    searchResults.innerHTML =
        "";

    searchResults.style.display =
        "none";

}


// ============================================================
// EXPLORE HELPERS
// ============================================================

function getExploreCountryRegion(
    country
) {

    const region =
        (
            country.region ||
            country.atAGlance?.region ||
            ""
        ).toLowerCase();

    const subregion =
        (
            country.subregion ||
            country.atAGlance?.subregion ||
            ""
        ).toLowerCase();

    const combined =
        region +
        " " +
        subregion;


    if (
        combined.includes(
            "middle east"
        ) ||
        combined.includes(
            "western asia"
        )
    ) {

        return "Middle East";

    }


    if (
        combined.includes(
            "africa"
        )
    ) {

        return "Africa";

    }


    if (
        combined.includes(
            "europe"
        )
    ) {

        return "Europe";

    }


    if (
        combined.includes(
            "asia"
        ) ||
        combined.includes(
            "oceania"
        ) ||
        combined.includes(
            "pacific"
        )
    ) {

        return "Asia-Pacific";

    }


    if (
        combined.includes(
            "america"
        ) ||
        combined.includes(
            "caribbean"
        )
    ) {

        return "Americas";

    }


    return "Other";

}


function getExploreRegions() {

    const regionOrder = [
        "Africa",
        "Middle East",
        "Europe",
        "Asia-Pacific",
        "Americas"
    ];

    const regions = {};

    regionOrder.forEach(
        region => {

            regions[region] = [];

        }
    );


    countries.forEach(
        country => {

            const region =
                getExploreCountryRegion(
                    country
                );

            if (
                regions[region]
            ) {

                regions[
                    region
                ].push(
                    country
                );

            }

        }
    );


    regionOrder.forEach(
        region => {

            regions[
                region
            ].sort(
                (
                    countryA,
                    countryB
                ) =>
                    countryA.name.localeCompare(
                        countryB.name
                    )
            );

        }
    );


    return regions;

}


function getCountriesConnectedToCrises() {

    return countries.filter(
        country =>
            getCountryCrisisRelationships(
                country
            ).length > 0
    );

}


function getCategoryCount(
    category
) {

    return conflicts.filter(
        conflict =>
            (
                conflict.categories ||
                []
            ).includes(
                category
            )
    ).length;

}


// ============================================================
// EXPLORE GLOBAL STATS
// ============================================================

function updateExploreStats() {

    const crisisTotal =
        document.getElementById(
            "explore-crisis-total"
        );

    const countryTotal =
        document.getElementById(
            "explore-country-total"
        );

    const relatedCountryTotal =
        document.getElementById(
            "explore-related-country-total"
        );

    const regionTotal =
        document.getElementById(
            "explore-region-total"
        );


    if (
        crisisTotal
    ) {

        crisisTotal.textContent =
            conflicts.length;

    }


    if (
        countryTotal
    ) {

        countryTotal.textContent =
            countries.length;

    }


    if (
        relatedCountryTotal
    ) {

        relatedCountryTotal.textContent =
            getCountriesConnectedToCrises()
                .length;

    }


    if (
        regionTotal
    ) {

        const regions =
            getExploreRegions();

        regionTotal.textContent =
            Object.values(
                regions
            )
                .filter(
                    regionCountries =>
                        regionCountries.length >
                        0
                )
                .length;

    }


    const categoryIds = {
        conflict:
            "explore-conflict-count",

        humanitarian:
            "explore-humanitarian-count",

        displacement:
            "explore-displacement-count",

        disaster:
            "explore-disaster-count"
    };


    Object.entries(
        categoryIds
    ).forEach(
        (
            [
                category,
                elementId
            ]
        ) => {

            const element =
                document.getElementById(
                    elementId
                );

            if (
                element
            ) {

                element.textContent =
                    getCategoryCount(
                        category
                    );

            }

        }
    );

}


// ============================================================
// EXPLORE REGION CARDS
// ============================================================

function renderExploreRegions() {

    const regionGrid =
        document.getElementById(
            "explore-region-grid"
        );

    const regionResults =
        document.getElementById(
            "explore-region-results"
        );


    if (
        !regionGrid ||
        !regionResults
    ) {

        return;

    }


    regionGrid.innerHTML =
        "";

    const regions =
        getExploreRegions();


    Object.entries(
        regions
    ).forEach(
        (
            [
                regionName,
                regionCountries
            ]
        ) => {

            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.className =
                "explore-region-button";


            const name =
                document.createElement(
                    "span"
                );

            name.className =
                "explore-region-name";

            name.textContent =
                regionName;


            const count =
                document.createElement(
                    "span"
                );

            count.className =
                "explore-region-count";

            count.textContent =
                regionCountries.length +
                (
                    regionCountries.length ===
                    1
                        ? " country"
                        : " countries"
                );


            button.appendChild(
                name
            );

            button.appendChild(
                count
            );


            button.addEventListener(
                "click",
                function () {

                    document
                        .querySelectorAll(
                            ".explore-region-button"
                        )
                        .forEach(
                            regionButton => {

                                regionButton
                                    .classList
                                    .remove(
                                        "active"
                                    );

                            }
                        );


                    button.classList.add(
                        "active"
                    );


                    showExploreRegionCountries(
                        regionName,
                        regionCountries
                    );

                }
            );


            regionGrid.appendChild(
                button
            );

        }
    );

}


function showExploreRegionCountries(
    regionName,
    regionCountries
) {

    const regionResults =
        document.getElementById(
            "explore-region-results"
        );


    regionResults.innerHTML =
        "";

    regionResults.classList.add(
        "active"
    );


    const heading =
        document.createElement(
            "h4"
        );

    heading.textContent =
        regionName +
        " — " +
        regionCountries.length +
        (
            regionCountries.length ===
            1
                ? " country"
                : " countries"
        );


    const countryList =
        document.createElement(
            "div"
        );

    countryList.className =
        "explore-country-list";


    regionCountries.forEach(
        country => {

            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.className =
                "explore-country-chip";

            button.textContent =
                (
                    country.flag
                        ? country.flag +
                          " "
                        : ""
                ) +
                country.name;


            button.addEventListener(
                "click",
                function () {

                    switchToCountryView();

                    selectCountrySearchResult(
                        country
                    );

                }
            );


            countryList.appendChild(
                button
            );

        }
    );


    regionResults.appendChild(
        heading
    );

    regionResults.appendChild(
        countryList
    );

}


// ============================================================
// EXPLORE CRISIS CATEGORY CARDS
// ============================================================

document
    .querySelectorAll(
        ".explore-category-card"
    )
    .forEach(
        card => {

            card.addEventListener(
                "click",
                function () {

                    const category =
                        card.dataset
                            .exploreCategory;


                    switchToCrisisView();


                    filterButtons.forEach(
                        button => {

                            button.classList.remove(
                                "active"
                            );


                            if (
                                button.dataset.filter ===
                                category
                            ) {

                                button.classList.add(
                                    "active"
                                );

                                button.click();

                            }

                        }
                    );

                }
            );

        }
    );


// ============================================================
// COMPARE COUNTRIES
// ============================================================

const compareCountryOne =
    document.getElementById(
        "compare-country-one"
    );

const compareCountryTwo =
    document.getElementById(
        "compare-country-two"
    );

const countryComparison =
    document.getElementById(
        "country-comparison"
    );


function populateCountryComparisonSelectors() {

    const sortedCountries =
        [...countries].sort(
            (
                countryA,
                countryB
            ) =>
                countryA.name.localeCompare(
                    countryB.name
                )
        );


    [
        compareCountryOne,
        compareCountryTwo
    ].forEach(
        select => {

            if (
                !select
            ) {

                return;

            }


            sortedCountries.forEach(
                country => {

                    const option =
                        document.createElement(
                            "option"
                        );

                    option.value =
                        country.iso3;

                    option.textContent =
                        (
                            country.flag
                                ? country.flag +
                                  " "
                                : ""
                        ) +
                        country.name;

                    select.appendChild(
                        option
                    );

                }
            );

        }
    );

}


function comparisonValue(
    value
) {

    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {

        return "—";

    }

    return String(
        value
    );

}


function getComparisonCountryData(
    country
) {

    const atAGlance =
        country.atAGlance ||
        {};

    const government =
        country.government ||
        {};

    const relationships =
        getCountryCrisisRelationships(
            country
        );


    return {

        name:
            country.name,

        flag:
            country.flag ||
            "",

        population:
            formatPopulation(
                atAGlance.population
            ),

        capital:
            comparisonValue(
                atAGlance.capital ||
                country.capital
            ),

        region:
            comparisonValue(
                atAGlance.region ||
                country.region
            ),

        subregion:
            comparisonValue(
                atAGlance.subregion ||
                country.subregion
            ),

        area:
            formatArea(
                atAGlance.areaKm2
            ),

        languages:
            formatList(
                atAGlance.languages
            ),

        currency:
            comparisonValue(
                atAGlance.currency
            ),

        governmentType:
            comparisonValue(
                government.governmentType
            ),

        headOfState:
            formatPerson(
                government.headOfState
            ),

        headOfGovernment:
            formatPerson(
                government.headOfGovernment
            ),

        unStatus:
            formatUnStatus(
                government.unStatus
            ),

        relatedCrises:
            relationships.length ===
            0
                ? "None currently documented"
                : relationships
                    .map(
                        item =>
                            item.conflict.name
                    )
                    .join(", ")

    };

}


function createComparisonCountryCard(
    data
) {

    const card =
        document.createElement(
            "div"
        );

    card.className =
        "comparison-country";


    const title =
        document.createElement(
            "div"
        );

    title.className =
        "comparison-country-title";


    const flag =
        document.createElement(
            "span"
        );

    flag.className =
        "comparison-country-flag";

    flag.textContent =
        data.flag;


    const heading =
        document.createElement(
            "h4"
        );

    heading.textContent =
        data.name;


    title.appendChild(
        flag
    );

    title.appendChild(
        heading
    );

    card.appendChild(
        title
    );


    const rows = [
        [
            "Population",
            data.population
        ],
        [
            "Capital",
            data.capital
        ],
        [
            "Region",
            data.region
        ],
        [
            "Subregion",
            data.subregion
        ],
        [
            "Area",
            data.area
        ],
        [
            "Languages",
            data.languages
        ],
        [
            "Currency",
            data.currency
        ],
        [
            "Government Type",
            data.governmentType
        ],
        [
            "Head of State",
            data.headOfState
        ],
        [
            "Head of Government",
            data.headOfGovernment
        ],
        [
            "UN Status",
            data.unStatus
        ],
        [
            "Related Crises",
            data.relatedCrises
        ]
    ];


    rows.forEach(
        (
            [
                labelText,
                valueText
            ]
        ) => {

            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "comparison-row";


            const label =
                document.createElement(
                    "span"
                );

            label.className =
                "comparison-label";

            label.textContent =
                labelText;


            const value =
                document.createElement(
                    "span"
                );

            value.className =
                "comparison-value";

            value.textContent =
                valueText;


            row.appendChild(
                label
            );

            row.appendChild(
                value
            );

            card.appendChild(
                row
            );

        }
    );


    return card;

}


function updateCountryComparison() {

    if (
        !compareCountryOne ||
        !compareCountryTwo ||
        !countryComparison
    ) {

        return;

    }


    const firstIso =
        compareCountryOne.value;

    const secondIso =
        compareCountryTwo.value;


    if (
        !firstIso ||
        !secondIso
    ) {

        countryComparison.innerHTML =
            `
                <div class="comparison-placeholder">
                    Select two countries above to compare them.
                </div>
            `;

        return;

    }


    const firstCountry =
        countries.find(
            country =>
                country.iso3 ===
                firstIso
        );

    const secondCountry =
        countries.find(
            country =>
                country.iso3 ===
                secondIso
        );


    if (
        !firstCountry ||
        !secondCountry
    ) {

        return;

    }


    countryComparison.innerHTML =
        "";


    const comparisonGrid =
        document.createElement(
            "div"
        );

    comparisonGrid.className =
        "comparison-grid";


    comparisonGrid.appendChild(
        createComparisonCountryCard(
            getComparisonCountryData(
                firstCountry
            )
        )
    );


    comparisonGrid.appendChild(
        createComparisonCountryCard(
            getComparisonCountryData(
                secondCountry
            )
        )
    );


    countryComparison.appendChild(
        comparisonGrid
    );

}


if (
    compareCountryOne
) {

    compareCountryOne.addEventListener(
        "change",
        updateCountryComparison
    );

}


if (
    compareCountryTwo
) {

    compareCountryTwo.addEventListener(
        "change",
        updateCountryComparison
    );

}


// ============================================================
// HUMANITARIAN ORGANIZATIONS
// ============================================================

function getExploreOrganizations() {

    const organizations =
        new Map();


    function addOrganization(
        organization
    ) {

        if (
            !organization
        ) {

            return;

        }


        const name =
            typeof organization ===
            "string"
                ? organization
                : (
                    organization.name ||
                    organization.label ||
                    organization.title ||
                    ""
                );


        if (
            !name
        ) {

            return;

        }


        const normalizedName =
            name
                .trim()
                .toLowerCase();


        if (
            !organizations.has(
                normalizedName
            )
        ) {

            organizations.set(
                normalizedName,
                {
                    name: name.trim(),
                    appearances: 0
                }
            );

        }


        organizations.get(
            normalizedName
        ).appearances +=
            1;

    }


    conflicts.forEach(
        conflict => {

            (
                conflict.aid ||
                []
            ).forEach(
                addOrganization
            );

        }
    );


    countries.forEach(
        country => {

            (
                country.organizations ||
                country.humanitarianOrganizations ||
                []
            ).forEach(
                addOrganization
            );

        }
    );


    return [
        ...organizations.values()
    ].sort(
        (
            organizationA,
            organizationB
        ) => {

            if (
                organizationB.appearances !==
                organizationA.appearances
            ) {

                return (
                    organizationB.appearances -
                    organizationA.appearances
                );

            }


            return organizationA.name.localeCompare(
                organizationB.name
            );

        }
    );

}


function renderExploreOrganizations() {

    const grid =
        document.getElementById(
            "explore-organization-grid"
        );


    if (
        !grid
    ) {

        return;

    }


    grid.innerHTML =
        "";


    const organizations =
        getExploreOrganizations();


    if (
        organizations.length ===
        0
    ) {

        const emptyMessage =
            document.createElement(
                "p"
            );

        emptyMessage.textContent =
            "No humanitarian organizations are currently listed in the database.";

        grid.appendChild(
            emptyMessage
        );

        return;

    }


    organizations.forEach(
        organization => {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "explore-organization-card";


            const name =
                document.createElement(
                    "strong"
                );

            name.textContent =
                organization.name;


            const count =
                document.createElement(
                    "span"
                );

            count.textContent =
                "Referenced in " +
                organization.appearances +
                (
                    organization.appearances ===
                    1
                        ? " profile"
                        : " profiles"
                ) +
                ".";


            card.appendChild(
                name
            );

            card.appendChild(
                count
            );

            grid.appendChild(
                card
            );

        }
    );

}


// ============================================================
// RENDER EXPLORE
// ============================================================

let exploreInitialized =
    false;


function initializeExploreView() {

    if (
        exploreInitialized
    ) {

        updateExploreStats();

        return;

    }


    updateExploreStats();

    renderExploreRegions();

    populateCountryComparisonSelectors();

    renderExploreOrganizations();


    exploreInitialized =
        true;

}


// ============================================================
// CLICK OUTSIDE SEARCH
// ============================================================

document.addEventListener(
    "click",
    function (
        event
    ) {

        if (
            !crisisSearch.contains(
                event.target
            ) &&
            !searchResults.contains(
                event.target
            )
        ) {

            searchResults.style.display =
                "none";

        }

    }
);


// ============================================================
// ESCAPE KEY
// ============================================================

document.addEventListener(
    "keydown",
    function (
        event
    ) {

        if (
            event.key ===
            "Escape"
        ) {

            infoPanel.classList.remove(
                "open"
            );

            countryPanel.classList.remove(
                "open"
            );

            clearSearch();

        }

    }
);


// ============================================================
// INITIALIZE DEFAULT VIEW
// ============================================================

initializeExploreView();

switchToCrisisView();
