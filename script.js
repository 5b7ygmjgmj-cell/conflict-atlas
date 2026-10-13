// ============================================================
// ONE WORLD, ONE LIFE
// CRISIS + COUNTRY + EXPLORE + ABOUT VIEWS
// VERSION 10
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
    disaster: "#3282d8",
    unrest: "#9b59b6"
};


const categoryNames = {
    conflict: "Armed Conflict",
    humanitarian: "Humanitarian Crisis",
    displacement: "Displacement Crisis",
    disaster: "Natural Disaster",
    unrest: "Civil Unrest"
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
                Crises are organized into five broad categories.
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


                <button
                    class="explore-category-card"
                    data-explore-category="unrest"
                    type="button"
                >
                    <span
                        class="explore-category-dot"
                        style="background:#9b59b6"
                    ></span>

                    <span class="explore-category-content">

                        <strong>
                            Civil Unrest
                        </strong>

                        <span>
                            <b id="explore-unrest-count">0</b>
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
        padding: 14px 15px;
        border: 1px solid rgba(255,255,255,0.11);
        border-radius: 9px;
        background: rgba(255,255,255,0.025);
        color: #ffffff;
        text-align: left;
        font: inherit;
        font-size: 13px;
        font-weight: 650;
        cursor: pointer;
        transition:
            background 0.15s ease,
            border-color 0.15s ease;
    }

    .explore-region-button:hover,
    .explore-region-button.active {
        background: rgba(255,255,255,0.08);
        border-color: rgba(255,255,255,0.22);
    }

    .explore-region-results {
        display: none;
        margin-top: 14px;
        padding: 15px;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 10px;
        background: rgba(255,255,255,0.02);
    }

    .explore-region-results.active {
        display: block;
    }

    .explore-region-country-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
    }

    .explore-country-button {
        appearance: none;
        width: 100%;
        padding: 10px 11px;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 8px;
        background: rgba(255,255,255,0.025);
        color: #dce4eb;
        text-align: left;
        font: inherit;
        font-size: 12px;
        cursor: pointer;
    }

    .explore-country-button:hover {
        background: rgba(255,255,255,0.07);
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
        margin-bottom: 6px;
        color: #aeb9c4;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.5px;
        text-transform: uppercase;
    }

    .compare-select-group select {
        width: 100%;
        min-height: 42px;
        padding: 0 12px;
        border: 1px solid rgba(255,255,255,0.13);
        border-radius: 8px;
        outline: none;
        background: #111923;
        color: #ffffff;
        font: inherit;
        font-size: 13px;
    }

    .country-comparison {
        width: 100%;
    }

    .comparison-placeholder {
        padding: 18px;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 9px;
        background: rgba(255,255,255,0.02);
        color: #8f9ba8;
        font-size: 13px;
        text-align: center;
    }

    .comparison-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .comparison-country {
        min-width: 0;
        padding: 18px;
        border: 1px solid rgba(255,255,255,0.11);
        border-radius: 10px;
        background: rgba(255,255,255,0.025);
    }

    .comparison-country h4 {
        margin: 0 0 13px;
        color: #ffffff;
        font-size: 18px;
    }

    .comparison-fact {
        padding: 9px 0;
        border-top: 1px solid rgba(255,255,255,0.08);
    }

    .comparison-fact:first-of-type {
        border-top: 0;
    }

    .comparison-fact-label {
        display: block;
        margin-bottom: 3px;
        color: #8f9ba8;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.5px;
        text-transform: uppercase;
    }

    .comparison-fact-value {
        display: block;
        color: #e4e9ee;
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
        display: block;
        min-width: 0;
        padding: 15px;
        border: 1px solid rgba(255,255,255,0.11);
        border-radius: 9px;
        background: rgba(255,255,255,0.025);
    }

    .explore-organization-card strong {
        display: block;
        margin-bottom: 5px;
        color: #ffffff;
        font-size: 13px;
    }

    .explore-organization-card span {
        display: block;
        color: #aeb9c4;
        font-size: 12px;
        line-height: 1.5;
    }

    .explore-notice {
        margin-top: 18px;
        padding: 16px 17px;
        border: 1px solid rgba(255,255,255,0.11);
        border-left: 3px solid #a8bacb;
        border-radius: 9px;
        background: rgba(255,255,255,0.035);
    }

    .explore-notice strong {
        display: block;
        margin-bottom: 7px;
        color: #ffffff;
        font-size: 13px;
    }

    .explore-notice p {
        margin: 0;
        color: #b8c3cd;
        font-size: 13px;
        line-height: 1.55;
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
        .explore-region-country-grid,
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

        .explore-section {
            padding: 25px 0;
        }

        .explore-stat-grid,
        .explore-category-grid,
        .explore-region-grid,
        .explore-region-country-grid,
        .compare-controls,
        .comparison-grid,
        .explore-organization-grid {
            grid-template-columns: 1fr;
        }

    }

`;

document.head.appendChild(
    exploreStyle
);


// ============================================================
// DATABASE HELPERS
// ============================================================

function getCrisisDatabase() {

    if (
        typeof conflicts !== "undefined" &&
        Array.isArray(conflicts)
    ) {
        return conflicts;
    }

    if (
        typeof crisisData !== "undefined" &&
        Array.isArray(crisisData)
    ) {
        return crisisData;
    }

    if (
        typeof window !== "undefined" &&
        Array.isArray(window.conflicts)
    ) {
        return window.conflicts;
    }

    return [];
}


function getCountryDatabase() {

    if (
        typeof countries !== "undefined" &&
        Array.isArray(countries)
    ) {
        return countries;
    }

    if (
        typeof countryData !== "undefined" &&
        Array.isArray(countryData)
    ) {
        return countryData;
    }

    if (
        typeof window !== "undefined" &&
        Array.isArray(window.countries)
    ) {
        return window.countries;
    }

    return [];
}


function getCountryFactsDatabase() {

    if (
        typeof countryFacts !== "undefined" &&
        countryFacts &&
        typeof countryFacts === "object"
    ) {
        return countryFacts;
    }

    if (
        typeof window !== "undefined" &&
        window.countryFacts &&
        typeof window.countryFacts === "object"
    ) {
        return window.countryFacts;
    }

    return {};
}


function normalizeText(value) {

    if (
        value === null ||
        value === undefined
    ) {
        return "";
    }

    return String(value)
        .trim()
        .toLowerCase();
}


function escapeHtml(value) {

    return String(
        value === null ||
        value === undefined
            ? ""
            : value
    )
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function valueOrDash(value) {

    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {
        return "—";
    }

    return value;
}


// ============================================================
// CRISIS HELPERS
// ============================================================

function getCrisisCategories(crisis) {

    if (!crisis) {
        return [];
    }

    if (
        Array.isArray(crisis.categories) &&
        crisis.categories.length
    ) {

        return crisis.categories
            .map(category => normalizeText(category))
            .filter(Boolean);

    }

    if (crisis.primaryCategory) {

        return [
            normalizeText(
                crisis.primaryCategory
            )
        ];

    }

    if (crisis.category) {

        return [
            normalizeText(
                crisis.category
            )
        ];

    }

    return [];
}


function crisisHasCategory(
    crisis,
    category
) {

    const normalizedCategory =
        normalizeText(category);

    if (
        !normalizedCategory ||
        normalizedCategory === "all"
    ) {
        return true;
    }

    return getCrisisCategories(crisis)
        .includes(normalizedCategory);
}


function getPrimaryCategory(crisis) {

    if (!crisis) {
        return "";
    }

    if (crisis.primaryCategory) {
        return normalizeText(
            crisis.primaryCategory
        );
    }

    const categories =
        getCrisisCategories(crisis);

    if (categories.length) {
        return categories[0];
    }

    return "";
}


function getCategoryName(category) {

    const normalizedCategory =
        normalizeText(category);

    return (
        categoryNames[normalizedCategory] ||
        category ||
        "Crisis"
    );
}


function getCategoryColor(category) {

    const normalizedCategory =
        normalizeText(category);

    return (
        categoryColors[normalizedCategory] ||
        "#ffffff"
    );
}


// ============================================================
// CRISIS MARKER STORAGE
// ============================================================

const crisisMarkers = [];

let activeCrisisFilter = "all";


// ============================================================
// CREATE CRISIS MARKER
// ============================================================

function createCrisisMarker(crisis) {

    if (
        !crisis ||
        !Array.isArray(crisis.coordinates) ||
        crisis.coordinates.length < 2
    ) {
        return null;
    }


    const latitude =
        Number(crisis.coordinates[0]);

    const longitude =
        Number(crisis.coordinates[1]);


    if (
        !Number.isFinite(latitude) ||
        !Number.isFinite(longitude)
    ) {
        return null;
    }


    const primaryCategory =
        getPrimaryCategory(crisis);

    const markerColor =
        getCategoryColor(primaryCategory);


    const marker =
        L.circleMarker(
            [latitude, longitude],
            {
                radius: 7,
                color: "#0b1118",
                weight: 1.5,
                fillColor: markerColor,
                fillOpacity: 0.95
            }
        );


    marker.crisisData =
        crisis;


    marker.on(
        "click",
        function () {

            openCrisisPanel(
                crisis
            );

        }
    );


    marker.bindTooltip(
        escapeHtml(
            crisis.name ||
            "Crisis"
        ),
        {
            direction: "top",
            offset: [0, -5]
        }
    );


    marker.addTo(map);


    crisisMarkers.push({
        crisis: crisis,
        marker: marker
    });


    return marker;
}


// ============================================================
// BUILD ALL CRISIS MARKERS
// ============================================================

function buildCrisisMarkers() {

    crisisMarkers.forEach(
        item => {

            if (
                item.marker &&
                map.hasLayer(item.marker)
            ) {
                map.removeLayer(
                    item.marker
                );
            }

        }
    );


    crisisMarkers.length = 0;


    getCrisisDatabase().forEach(
        crisis => {

            createCrisisMarker(
                crisis
            );

        }
    );

}


// ============================================================
// CRISIS FILTERING
// ============================================================

function applyCrisisFilter(
    category = activeCrisisFilter
) {

    activeCrisisFilter =
        normalizeText(category) ||
        "all";


    let visibleCount = 0;


    crisisMarkers.forEach(
        item => {

            const shouldShow =
                crisisHasCategory(
                    item.crisis,
                    activeCrisisFilter
                );


            if (shouldShow) {

                if (
                    !map.hasLayer(
                        item.marker
                    )
                ) {
                    item.marker.addTo(
                        map
                    );
                }

                visibleCount += 1;

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


    filterButtons.forEach(
        button => {

            const buttonCategory =
                normalizeText(
                    button.dataset.category
                );

            button.classList.toggle(
                "active",
                buttonCategory ===
                    activeCrisisFilter
            );

        }
    );


    if (crisisCount) {

        crisisCount.textContent =
            String(visibleCount);

    }


    if (counterLabel) {

        counterLabel.textContent =
            visibleCount === 1
                ? "crisis"
                : "crises";

    }

}


// ============================================================
// FILTER BUTTON EVENTS
// ============================================================

filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            function () {

                const category =
                    normalizeText(
                        button.dataset.category
                    ) || "all";


                switchView(
                    "crises"
                );


                applyCrisisFilter(
                    category
                );

            }
        );

    }
);


// ============================================================
// CRISIS PANEL ELEMENTS
// ============================================================

const infoPanel =
    document.getElementById("info-panel");

const closePanelButton =
    document.getElementById("close-panel");

const crisisCategoryElement =
    document.getElementById("crisis-category");

const crisisNameElement =
    document.getElementById("crisis-name");

const lastUpdatedElement =
    document.getElementById("last-updated");

const crisisOverviewElement =
    document.getElementById("crisis-overview");

const crisisCurrentSituationElement =
    document.getElementById(
        "crisis-current-situation"
    );

const currentSituationSection =
    document.getElementById(
        "current-situation-section"
    );

const crisisActorsElement =
    document.getElementById("crisis-actors");

const crisisImpactElement =
    document.getElementById("crisis-impact");

const crisisTimelineElement =
    document.getElementById("crisis-timeline");

const timelineSection =
    document.getElementById("timeline-section");

const crisisSourcesElement =
    document.getElementById("crisis-sources");

const crisisAidElement =
    document.getElementById("crisis-aid");


// ============================================================
// PANEL VALUE HELPERS
// ============================================================

function setText(
    element,
    value,
    fallback = "—"
) {

    if (!element) {
        return;
    }

    const finalValue =
        value === null ||
        value === undefined ||
        value === ""
            ? fallback
            : value;

    element.textContent =
        finalValue;
}


function arrayToListHtml(values) {

    if (
        !Array.isArray(values) ||
        !values.length
    ) {
        return "";
    }


    return `
        <ul>
            ${values
                .map(
                    value => `
                        <li>
                            ${escapeHtml(value)}
                        </li>
                    `
                )
                .join("")}
        </ul>
    `;
}


// ============================================================
// FORMAT GENERAL CONTENT
// ============================================================

function formatContent(value) {

    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {
        return "";
    }


    if (Array.isArray(value)) {

        return arrayToListHtml(
            value.map(item => {

                if (
                    item &&
                    typeof item === "object"
                ) {

                    if (item.text) {
                        return item.text;
                    }

                    if (item.event) {
                        return item.event;
                    }

                    if (item.name) {
                        return item.name;
                    }

                    return JSON.stringify(
                        item
                    );
                }

                return item;

            })
        );

    }


    if (
        typeof value === "object"
    ) {

        return `
            <ul>
                ${Object.entries(value)
                    .map(
                        ([key, itemValue]) => `
                            <li>
                                <strong>
                                    ${escapeHtml(key)}
                                </strong>:
                                ${escapeHtml(
                                    Array.isArray(itemValue)
                                        ? itemValue.join(", ")
                                        : itemValue
                                )}
                            </li>
                        `
                    )
                    .join("")}
            </ul>
        `;

    }


    return `
        <p>
            ${escapeHtml(value)}
        </p>
    `;
}
// ============================================================
// FORMAT TIMELINE
// ============================================================

function formatTimeline(timeline) {

    if (
        !Array.isArray(timeline) ||
        !timeline.length
    ) {
        return "";
    }


    return `
        <ul>
            ${timeline
                .map(item => {

                    if (
                        item &&
                        typeof item === "object"
                    ) {

                        const date =
                            item.date ||
                            item.year ||
                            item.time ||
                            "";

                        const event =
                            item.event ||
                            item.text ||
                            item.description ||
                            "";


                        return `
                            <li>
                                ${
                                    date
                                        ? `<strong>${escapeHtml(date)}</strong> — `
                                        : ""
                                }
                                ${escapeHtml(event)}
                            </li>
                        `;

                    }


                    return `
                        <li>
                            ${escapeHtml(item)}
                        </li>
                    `;

                })
                .join("")}
        </ul>
    `;
}


// ============================================================
// FORMAT SOURCES
// ============================================================

function formatSources(sources) {

    if (
        !Array.isArray(sources) ||
        !sources.length
    ) {
        return "";
    }


    return sources
        .map(source => {

            if (
                typeof source === "string"
            ) {

                if (
                    source.startsWith("http://") ||
                    source.startsWith("https://")
                ) {

                    return `
                        <a
                            href="${escapeHtml(source)}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ${escapeHtml(source)}
                        </a>
                    `;

                }


                return `
                    <div>
                        ${escapeHtml(source)}
                    </div>
                `;

            }


            if (
                source &&
                typeof source === "object"
            ) {

                const label =
                    source.name ||
                    source.title ||
                    source.label ||
                    source.organization ||
                    source.url ||
                    source.link ||
                    "Source";


                const url =
                    source.url ||
                    source.link ||
                    source.href ||
                    "";


                if (url) {

                    return `
                        <a
                            href="${escapeHtml(url)}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ${escapeHtml(label)}
                        </a>
                    `;

                }


                return `
                    <div>
                        ${escapeHtml(label)}
                    </div>
                `;

            }


            return "";

        })
        .join("");
}


// ============================================================
// FORMAT HUMANITARIAN AID
// ============================================================

function formatAid(aid) {

    if (
        !Array.isArray(aid) ||
        !aid.length
    ) {
        return "";
    }


    return aid
        .map(item => {

            if (
                typeof item === "string"
            ) {

                if (
                    item.startsWith("http://") ||
                    item.startsWith("https://")
                ) {

                    return `
                        <a
                            href="${escapeHtml(item)}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ${escapeHtml(item)}
                        </a>
                    `;

                }


                return `
                    <div>
                        ${escapeHtml(item)}
                    </div>
                `;

            }


            if (
                item &&
                typeof item === "object"
            ) {

                const name =
                    item.name ||
                    item.organization ||
                    item.title ||
                    item.label ||
                    "Humanitarian Organization";


                const description =
                    item.description ||
                    item.role ||
                    item.text ||
                    "";


                const url =
                    item.url ||
                    item.link ||
                    item.href ||
                    "";


                if (url) {

                    return `
                        <a
                            href="${escapeHtml(url)}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <strong>
                                ${escapeHtml(name)}
                            </strong>

                            ${
                                description
                                    ? `<br><span>${escapeHtml(description)}</span>`
                                    : ""
                            }
                        </a>
                    `;

                }


                return `
                    <div>
                        <strong>
                            ${escapeHtml(name)}
                        </strong>

                        ${
                            description
                                ? `<br><span>${escapeHtml(description)}</span>`
                                : ""
                        }
                    </div>
                `;

            }


            return "";

        })
        .join("");
}


// ============================================================
// OPEN CRISIS PANEL
// ============================================================

function openCrisisPanel(crisis) {

    if (
        !crisis ||
        !infoPanel
    ) {
        return;
    }


    closeCountryPanel();


    const primaryCategory =
        getPrimaryCategory(crisis);

    const categories =
        getCrisisCategories(crisis);


    if (crisisCategoryElement) {

        crisisCategoryElement.innerHTML =
            categories
                .map(category => {

                    const color =
                        getCategoryColor(
                            category
                        );

                    const name =
                        getCategoryName(
                            category
                        );


                    return `
                        <span
                            style="
                                display:inline-flex;
                                align-items:center;
                                gap:6px;
                                margin-right:10px;
                                margin-bottom:5px;
                            "
                        >
                            <span
                                style="
                                    width:8px;
                                    height:8px;
                                    border-radius:50%;
                                    background:${color};
                                    display:inline-block;
                                "
                            ></span>

                            ${escapeHtml(name)}
                        </span>
                    `;

                })
                .join("");


        if (
            !categories.length &&
            primaryCategory
        ) {

            crisisCategoryElement.textContent =
                getCategoryName(
                    primaryCategory
                );

        }

    }


    setText(
        crisisNameElement,
        crisis.name,
        "Crisis"
    );


    setText(
        lastUpdatedElement,
        crisis.lastUpdated
            ? `Last verified: ${crisis.lastUpdated}`
            : "Last verified: —"
    );


    if (crisisOverviewElement) {

        crisisOverviewElement.innerHTML =
            formatContent(
                crisis.overview ||
                crisis.summary ||
                crisis.description
            );

    }


    const currentSituation =
        crisis.currentSituation ||
        crisis.current ||
        crisis.status ||
        "";


    if (
        currentSituationSection &&
        crisisCurrentSituationElement
    ) {

        if (currentSituation) {

            currentSituationSection.style.display =
                "";

            crisisCurrentSituationElement.innerHTML =
                formatContent(
                    currentSituation
                );

        } else {

            currentSituationSection.style.display =
                "none";

            crisisCurrentSituationElement.innerHTML =
                "";

        }

    }


    if (crisisActorsElement) {

        crisisActorsElement.innerHTML =
            formatContent(
                crisis.actors ||
                crisis.keyActors ||
                crisis.parties
            );

    }


    if (crisisImpactElement) {

        crisisImpactElement.innerHTML =
            formatContent(
                crisis.impact ||
                crisis.humanitarianImpact ||
                crisis.humanitarian
            );

    }


    const timeline =
        crisis.timeline ||
        crisis.history ||
        [];


    if (
        timelineSection &&
        crisisTimelineElement
    ) {

        const timelineHtml =
            formatTimeline(
                timeline
            );


        if (timelineHtml) {

            timelineSection.style.display =
                "";

            crisisTimelineElement.innerHTML =
                timelineHtml;

        } else {

            timelineSection.style.display =
                "none";

            crisisTimelineElement.innerHTML =
                "";

        }

    }


    if (crisisSourcesElement) {

        crisisSourcesElement.innerHTML =
            formatSources(
                crisis.sources ||
                crisis.sourceLinks ||
                []
            );

    }


    if (crisisAidElement) {

        crisisAidElement.innerHTML =
            formatAid(
                crisis.aid ||
                crisis.humanitarianAid ||
                crisis.organizations ||
                []
            );

    }


    infoPanel.classList.add(
        "open"
    );

    infoPanel.classList.add(
        "active"
    );

    infoPanel.setAttribute(
        "aria-hidden",
        "false"
    );


    const panelScroll =
        infoPanel.querySelector(
            ".panel-scroll"
        );


    if (panelScroll) {

        panelScroll.scrollTop =
            0;

    }

}


// ============================================================
// CLOSE CRISIS PANEL
// ============================================================

function closeCrisisPanel() {

    if (!infoPanel) {
        return;
    }


    infoPanel.classList.remove(
        "open"
    );

    infoPanel.classList.remove(
        "active"
    );

    infoPanel.setAttribute(
        "aria-hidden",
        "true"
    );

}


if (closePanelButton) {

    closePanelButton.addEventListener(
        "click",
        closeCrisisPanel
    );

}


// ============================================================
// COUNTRY PANEL ELEMENTS
// ============================================================

const countryPanel =
    document.getElementById(
        "country-panel"
    );

const closeCountryPanelButton =
    document.getElementById(
        "close-country-panel"
    );

const countryFlagElement =
    document.getElementById(
        "country-flag"
    );

const countryNameElement =
    document.getElementById(
        "country-name"
    );

const countryLastUpdatedElement =
    document.getElementById(
        "country-last-updated"
    );

const countryPopulationElement =
    document.getElementById(
        "country-population"
    );

const countryCapitalElement =
    document.getElementById(
        "country-capital"
    );

const countryRegionElement =
    document.getElementById(
        "country-region"
    );

const countrySubregionElement =
    document.getElementById(
        "country-subregion"
    );

const countryCodeElement =
    document.getElementById(
        "country-code"
    );

const countryAreaElement =
    document.getElementById(
        "country-area"
    );

const countryLanguagesElement =
    document.getElementById(
        "country-languages"
    );

const countryCurrencyElement =
    document.getElementById(
        "country-currency"
    );

const countryCrisisCountElement =
    document.getElementById(
        "country-crisis-count"
    );

const countryNoteElement =
    document.getElementById(
        "country-note"
    );

const countryOverviewElement =
    document.getElementById(
        "country-overview"
    );

const countryGovernmentTypeElement =
    document.getElementById(
        "country-government-type"
    );

const countryHeadOfStateElement =
    document.getElementById(
        "country-head-of-state"
    );

const countryHeadOfGovernmentElement =
    document.getElementById(
        "country-head-of-government"
    );


// Support either the older or newer HTML field name.

const countryUNStatusElement =
    document.getElementById(
        "country-un-status"
    ) ||
    document.getElementById(
        "country-un-member"
    );


const countryInternationalOrganizationsElement =
    document.getElementById(
        "country-international-organizations"
    );

const countryCrisesSection =
    document.getElementById(
        "country-crises-section"
    ) ||
    document.getElementById(
        "country-related-crises-section"
    );

const countryCrisesElement =
    document.getElementById(
        "country-crises"
    ) ||
    document.getElementById(
        "country-related-crises"
    );

const countryHumanitarianSection =
    document.getElementById(
        "country-humanitarian-section"
    );

const countryHumanitarianElement =
    document.getElementById(
        "country-humanitarian"
    );

const countryDisplacementSection =
    document.getElementById(
        "country-displacement-section"
    );

const countryDisplacementElement =
    document.getElementById(
        "country-displacement"
    );


// Support either Recent History element naming convention.

const countryTimelineSection =
    document.getElementById(
        "country-timeline-section"
    ) ||
    document.getElementById(
        "country-history-section"
    );

const countryTimelineElement =
    document.getElementById(
        "country-timeline"
    ) ||
    document.getElementById(
        "country-history"
    );


const countryOrganizationsSection =
    document.getElementById(
        "country-organizations-section"
    );

const countryOrganizationsElement =
    document.getElementById(
        "country-organizations"
    );

const countrySourcesElement =
    document.getElementById(
        "country-sources"
    );


// ============================================================
// COUNTRY LOOKUP HELPERS
// ============================================================

function getCountryName(country) {

    if (!country) {
        return "";
    }


    if (
        typeof country.name === "string"
    ) {
        return country.name;
    }


    if (
        country.name &&
        typeof country.name === "object"
    ) {

        return (
            country.name.common ||
            country.name.official ||
            ""
        );

    }


    return (
        country.country ||
        country.title ||
        ""
    );
}


function getCountryCode(country) {

    if (!country) {
        return "";
    }


    return (
        country.code ||
        country.iso3 ||
        country.cca3 ||
        country.iso ||
        ""
    );
}


function findCountryByName(
    name
) {

    const normalizedName =
        normalizeText(name);


    return getCountryDatabase()
        .find(country => {

            const countryName =
                normalizeText(
                    getCountryName(
                        country
                    )
                );


            return (
                countryName ===
                normalizedName
            );

        }) || null;
}


function findCountryByCode(
    code
) {

    const normalizedCode =
        normalizeText(code);


    return getCountryDatabase()
        .find(country => {

            const countryCode =
                normalizeText(
                    getCountryCode(
                        country
                    )
                );


            return (
                countryCode ===
                normalizedCode
            );

        }) || null;
}


// ============================================================
// COUNTRY FACT LOOKUP
// ============================================================

function getExtraCountryFacts(
    country
) {

    const factsDatabase =
        getCountryFactsDatabase();


    const code =
        getCountryCode(
            country
        );


    const name =
        getCountryName(
            country
        );


    const possibleKeys = [
        code,
        normalizeText(code),
        name,
        normalizeText(name)
    ].filter(Boolean);


    for (
        const key of possibleKeys
    ) {

        if (
            Object.prototype.hasOwnProperty.call(
                factsDatabase,
                key
            )
        ) {

            return (
                factsDatabase[key] ||
                {}
            );

        }

    }


    return {};
}
// ============================================================
// COUNTRY VALUE HELPERS
// ============================================================

function firstAvailableValue(
    ...values
) {

    for (
        const value of values
    ) {

        if (
            value !== null &&
            value !== undefined &&
            value !== ""
        ) {
            return value;
        }

    }

    return "";
}


function formatArrayValue(
    value
) {

    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {
        return "—";
    }


    if (Array.isArray(value)) {

        if (!value.length) {
            return "—";
        }

        return value.join(", ");

    }


    if (
        typeof value === "object"
    ) {

        const objectValues =
            Object.values(value)
                .filter(
                    item =>
                        item !== null &&
                        item !== undefined &&
                        item !== ""
                );


        if (!objectValues.length) {
            return "—";
        }


        return objectValues
            .map(item => {

                if (
                    item &&
                    typeof item === "object"
                ) {

                    return (
                        item.name ||
                        item.common ||
                        item.official ||
                        JSON.stringify(item)
                    );

                }

                return item;

            })
            .join(", ");

    }


    return String(value);
}


// ============================================================
// COUNTRY / CRISIS CONNECTION HELPERS
// ============================================================

function getCrisisCountryReferences(
    crisis
) {

    if (!crisis) {
        return [];
    }


    const references = [];


    const possibleFields = [
        crisis.countries,
        crisis.country,
        crisis.relatedCountries,
        crisis.affectedCountries,
        crisis.locations,
        crisis.location
    ];


    possibleFields.forEach(
        field => {

            if (
                field === null ||
                field === undefined
            ) {
                return;
            }


            if (Array.isArray(field)) {

                field.forEach(
                    value => {

                        if (
                            value &&
                            typeof value === "object"
                        ) {

                            references.push(
                                value.name ||
                                value.country ||
                                value.code ||
                                value.iso3 ||
                                ""
                            );

                        } else {

                            references.push(
                                value
                            );

                        }

                    }
                );

                return;
            }


            if (
                typeof field === "object"
            ) {

                references.push(
                    field.name ||
                    field.country ||
                    field.code ||
                    field.iso3 ||
                    ""
                );

                return;
            }


            references.push(
                field
            );

        }
    );


    return references
        .map(reference =>
            String(reference).trim()
        )
        .filter(Boolean);
}


function crisisMatchesCountry(
    crisis,
    country
) {

    if (
        !crisis ||
        !country
    ) {
        return false;
    }


    const countryName =
        normalizeText(
            getCountryName(
                country
            )
        );


    const countryCode =
        normalizeText(
            getCountryCode(
                country
            )
        );


    const references =
        getCrisisCountryReferences(
            crisis
        )
        .map(
            reference =>
                normalizeText(reference)
        );


    if (
        countryName &&
        references.includes(
            countryName
        )
    ) {
        return true;
    }


    if (
        countryCode &&
        references.includes(
            countryCode
        )
    ) {
        return true;
    }


    const crisisCountryCodes =
        Array.isArray(
            crisis.countryCodes
        )
            ? crisis.countryCodes
                .map(code =>
                    normalizeText(code)
                )
            : [];


    if (
        countryCode &&
        crisisCountryCodes.includes(
            countryCode
        )
    ) {
        return true;
    }


    return false;
}


function getCrisesForCountry(
    country
) {

    return getCrisisDatabase()
        .filter(
            crisis =>
                crisisMatchesCountry(
                    crisis,
                    country
                )
        );
}


// ============================================================
// COUNTRY ORGANIZATION FORMATTER
// ============================================================

function formatOrganizations(
    organizations
) {

    if (
        !organizations ||
        (
            Array.isArray(
                organizations
            ) &&
            !organizations.length
        )
    ) {
        return "";
    }


    const list =
        Array.isArray(
            organizations
        )
            ? organizations
            : [organizations];


    return `
        <ul>
            ${list
                .map(item => {

                    if (
                        item &&
                        typeof item === "object"
                    ) {

                        const name =
                            item.name ||
                            item.organization ||
                            item.title ||
                            item.label ||
                            "";


                        const description =
                            item.description ||
                            item.role ||
                            item.text ||
                            "";


                        const url =
                            item.url ||
                            item.link ||
                            item.href ||
                            "";


                        if (url) {

                            return `
                                <li>
                                    <a
                                        href="${escapeHtml(url)}"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        ${escapeHtml(name || url)}
                                    </a>

                                    ${
                                        description
                                            ? `<br><span>${escapeHtml(description)}</span>`
                                            : ""
                                    }
                                </li>
                            `;

                        }


                        return `
                            <li>
                                ${
                                    name
                                        ? `<strong>${escapeHtml(name)}</strong>`
                                        : ""
                                }

                                ${
                                    description
                                        ? `${name ? "<br>" : ""}${escapeHtml(description)}`
                                        : ""
                                }
                            </li>
                        `;

                    }


                    return `
                        <li>
                            ${escapeHtml(item)}
                        </li>
                    `;

                })
                .join("")}
        </ul>
    `;
}


// ============================================================
// COUNTRY RELATED CRISIS FORMATTER
// ============================================================

function renderCountryCrises(
    country
) {

    if (!countryCrisesElement) {
        return;
    }


    const relatedCrises =
        getCrisesForCountry(
            country
        );


    if (countryCrisisCountElement) {

        countryCrisisCountElement.textContent =
            String(
                relatedCrises.length
            );

    }


    if (
        !relatedCrises.length
    ) {

        countryCrisesElement.innerHTML =
            `
                <p>
                    No crisis entries are currently
                    connected to this country profile.
                </p>
            `;


        if (countryCrisesSection) {
            countryCrisesSection.style.display =
                "";
        }


        return;
    }


    countryCrisesElement.innerHTML =
        relatedCrises
            .map(crisis => {

                const category =
                    getPrimaryCategory(
                        crisis
                    );


                const color =
                    getCategoryColor(
                        category
                    );


                return `
                    <button
                        class="country-crisis-item"
                        type="button"
                        data-country-crisis-id="${escapeHtml(crisis.id || "")}"
                    >

                        <div
                            style="
                                display:flex;
                                align-items:center;
                                gap:8px;
                            "
                        >

                            <span
                                style="
                                    display:inline-block;
                                    width:9px;
                                    height:9px;
                                    border-radius:50%;
                                    flex-shrink:0;
                                    background:${color};
                                "
                            ></span>

                            <strong>
                                ${escapeHtml(crisis.name || "Crisis")}
                            </strong>

                        </div>

                        ${
                            crisis.overview
                                ? `
                                    <div class="country-crisis-explanation">
                                        ${escapeHtml(crisis.overview)}
                                    </div>
                                `
                                : ""
                        }

                    </button>
                `;

            })
            .join("");


    if (countryCrisesSection) {

        countryCrisesSection.style.display =
            "";

    }


    countryCrisesElement
        .querySelectorAll(
            "[data-country-crisis-id]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    function () {

                        const crisisId =
                            button.dataset
                                .countryCrisisId;


                        const crisis =
                            getCrisisDatabase()
                                .find(
                                    item =>
                                        String(
                                            item.id
                                        ) ===
                                        String(
                                            crisisId
                                        )
                                );


                        if (crisis) {

                            closeCountryPanel();

                            switchView(
                                "crises"
                            );

                            openCrisisPanel(
                                crisis
                            );

                        }

                    }
                );

            }
        );

}


// ============================================================
// OPEN COUNTRY PANEL
// ============================================================

function openCountryPanel(
    country
) {

    if (
        !country ||
        !countryPanel
    ) {
        return;
    }


    closeCrisisPanel();


    const extraFacts =
        getExtraCountryFacts(
            country
        );


    const countryName =
        getCountryName(
            country
        );


    const countryCode =
        getCountryCode(
            country
        );


    const flag =
        firstAvailableValue(
            extraFacts.flag,
            country.flag,
            country.emoji,
            ""
        );


    const population =
        firstAvailableValue(
            extraFacts.population,
            country.population
        );


    const capital =
        firstAvailableValue(
            extraFacts.capital,
            country.capital
        );


    const region =
        firstAvailableValue(
            extraFacts.region,
            country.region
        );


    const subregion =
        firstAvailableValue(
            extraFacts.subregion,
            country.subregion
        );


    const area =
        firstAvailableValue(
            extraFacts.area,
            country.area
        );


    const languages =
        firstAvailableValue(
            extraFacts.languages,
            country.languages
        );


    const currency =
        firstAvailableValue(
            extraFacts.currency,
            extraFacts.currencies,
            country.currency,
            country.currencies
        );


    const overview =
        firstAvailableValue(
            extraFacts.overview,
            country.overview,
            country.description,
            country.summary
        );


    const note =
        firstAvailableValue(
            extraFacts.note,
            country.note
        );


    const lastUpdated =
        firstAvailableValue(
            extraFacts.lastUpdated,
            country.lastUpdated
        );


    setText(
        countryFlagElement,
        flag,
        ""
    );


    setText(
        countryNameElement,
        countryName,
        "Country"
    );


    setText(
        countryLastUpdatedElement,
        lastUpdated
            ? `Last verified: ${lastUpdated}`
            : "Last verified: —"
    );


    setText(
        countryPopulationElement,
        formatArrayValue(
            population
        )
    );


    setText(
        countryCapitalElement,
        formatArrayValue(
            capital
        )
    );


    setText(
        countryRegionElement,
        formatArrayValue(
            region
        )
    );


    setText(
        countrySubregionElement,
        formatArrayValue(
            subregion
        )
    );


    setText(
        countryCodeElement,
        countryCode ||
        "—"
    );


    setText(
        countryAreaElement,
        formatArrayValue(
            area
        )
    );


    setText(
        countryLanguagesElement,
        formatArrayValue(
            languages
        )
    );


    setText(
        countryCurrencyElement,
        formatArrayValue(
            currency
        )
    );


    if (countryOverviewElement) {

        countryOverviewElement.innerHTML =
            formatContent(
                overview
            );

    }


    if (countryNoteElement) {

        if (note) {

            countryNoteElement.style.display =
                "block";

            countryNoteElement.innerHTML =
                formatContent(
                    note
                );

        } else {

            countryNoteElement.style.display =
                "none";

            countryNoteElement.innerHTML =
                "";

        }

    }


// ============================================================
// COUNTRY GOVERNMENT INFORMATION
// ============================================================

    const governmentType =
        firstAvailableValue(
            extraFacts.governmentType,
            extraFacts.government,
            country.governmentType,
            country.government
        );


    const headOfState =
        firstAvailableValue(
            extraFacts.headOfState,
            country.headOfState
        );


    const headOfGovernment =
        firstAvailableValue(
            extraFacts.headOfGovernment,
            country.headOfGovernment
        );


    const unStatus =
        firstAvailableValue(
            extraFacts.unStatus,
            extraFacts.unMember,
            country.unStatus,
            country.unMember
        );


    setText(
        countryGovernmentTypeElement,
        formatArrayValue(
            governmentType
        )
    );


    setText(
        countryHeadOfStateElement,
        formatArrayValue(
            headOfState
        )
    );


    setText(
        countryHeadOfGovernmentElement,
        formatArrayValue(
            headOfGovernment
        )
    );


    setText(
        countryUNStatusElement,
        formatArrayValue(
            unStatus
        )
    );


// ============================================================
// INTERNATIONAL ORGANIZATIONS
// ============================================================

    const internationalOrganizations =
        firstAvailableValue(
            extraFacts.internationalOrganizations,
            country.internationalOrganizations,
            extraFacts.organizations,
            country.organizations
        );


    if (
        countryInternationalOrganizationsElement
    ) {

        countryInternationalOrganizationsElement.innerHTML =
            formatOrganizations(
                internationalOrganizations
            );

    }


// ============================================================
// HUMANITARIAN CONTEXT
// ============================================================

    const humanitarian =
        firstAvailableValue(
            extraFacts.humanitarian,
            extraFacts.humanitarianContext,
            country.humanitarian,
            country.humanitarianContext
        );


    if (
        countryHumanitarianSection &&
        countryHumanitarianElement
    ) {

        if (humanitarian) {

            countryHumanitarianSection.style.display =
                "";

            countryHumanitarianElement.innerHTML =
                formatContent(
                    humanitarian
                );

        } else {

            countryHumanitarianSection.style.display =
                "none";

            countryHumanitarianElement.innerHTML =
                "";

        }

    }


// ============================================================
// DISPLACEMENT
// ============================================================

    const displacement =
        firstAvailableValue(
            extraFacts.displacement,
            country.displacement
        );


    if (
        countryDisplacementSection &&
        countryDisplacementElement
    ) {

        if (displacement) {

            countryDisplacementSection.style.display =
                "";

            countryDisplacementElement.innerHTML =
                formatContent(
                    displacement
                );

        } else {

            countryDisplacementSection.style.display =
                "none";

            countryDisplacementElement.innerHTML =
                "";

        }

    }


// ============================================================
// RECENT HISTORY
// ============================================================

    const history =
        firstAvailableValue(
            extraFacts.timeline,
            extraFacts.history,
            extraFacts.recentHistory,
            country.timeline,
            country.history,
            country.recentHistory
        );


    if (
        countryTimelineSection &&
        countryTimelineElement
    ) {

        let historyHtml = "";


        if (Array.isArray(history)) {

            historyHtml =
                formatTimeline(
                    history
                );

        } else {

            historyHtml =
                formatContent(
                    history
                );

        }


        if (historyHtml) {

            countryTimelineSection.style.display =
                "";

            countryTimelineElement.innerHTML =
                historyHtml;

        } else {

            countryTimelineSection.style.display =
                "none";

            countryTimelineElement.innerHTML =
                "";

        }

    }


// ============================================================
// HUMANITARIAN ORGANIZATIONS
// ============================================================

    const humanitarianOrganizations =
        firstAvailableValue(
            extraFacts.humanitarianOrganizations,
            country.humanitarianOrganizations,
            extraFacts.aidOrganizations,
            country.aidOrganizations
        );


    if (
        countryOrganizationsSection &&
        countryOrganizationsElement
    ) {

        const organizationsHtml =
            formatOrganizations(
                humanitarianOrganizations
            );


        if (organizationsHtml) {

            countryOrganizationsSection.style.display =
                "";

            countryOrganizationsElement.innerHTML =
                organizationsHtml;

        } else {

            countryOrganizationsSection.style.display =
                "none";

            countryOrganizationsElement.innerHTML =
                "";

        }

    }


// ============================================================
// COUNTRY SOURCES
// ============================================================

    if (countrySourcesElement) {

        countrySourcesElement.innerHTML =
            formatSources(
                firstAvailableValue(
                    extraFacts.sources,
                    country.sources,
                    []
                )
            );

    }


// ============================================================
// RELATED CRISES
// ============================================================

    renderCountryCrises(
        country
    );


// ============================================================
// SHOW COUNTRY PANEL
// ============================================================

    countryPanel.classList.add(
        "open"
    );

    countryPanel.classList.add(
        "active"
    );

    countryPanel.setAttribute(
        "aria-hidden",
        "false"
    );


    const panelScroll =
        countryPanel.querySelector(
            ".panel-scroll"
        );


    if (panelScroll) {

        panelScroll.scrollTop =
            0;

    }

}


// ============================================================
// CLOSE COUNTRY PANEL
// ============================================================

function closeCountryPanel() {

    if (!countryPanel) {
        return;
    }


    countryPanel.classList.remove(
        "open"
    );

    countryPanel.classList.remove(
        "active"
    );

    countryPanel.setAttribute(
        "aria-hidden",
        "true"
    );

}


if (closeCountryPanelButton) {

    closeCountryPanelButton.addEventListener(
        "click",
        closeCountryPanel
    );

}


// ============================================================
// COUNTRY MAP LAYER
// ============================================================

let countryGeoJsonLayer = null;

let selectedCountryLayer = null;


// ============================================================
// COUNTRY MAP STYLE
// ============================================================

function getCountryMapStyle() {

    return {
        color: "#ffffff",
        weight: 0.7,
        opacity: 0.75,
        fillColor: "#17232e",
        fillOpacity: 0.48
    };

}


function getCountryHoverStyle() {

    return {
        color: "#ffffff",
        weight: 1.2,
        opacity: 1,
        fillColor: "#263746",
        fillOpacity: 0.72
    };

}


function getCountrySelectedStyle() {

    return {
        color: "#ffffff",
        weight: 1.5,
        opacity: 1,
        fillColor: "#41586d",
        fillOpacity: 0.82
    };

}


// ============================================================
// FIND COUNTRY FOR GEOJSON FEATURE
// ============================================================

function findCountryForFeature(
    feature
) {

    if (
        !feature ||
        !feature.properties
    ) {
        return null;
    }


    const properties =
        feature.properties;


    const possibleCodes = [
        properties.ISO_A3,
        properties.ADM0_A3,
        properties.iso_a3,
        properties.cca3
    ]
        .filter(Boolean);


    for (
        const code of possibleCodes
    ) {

        const country =
            findCountryByCode(
                code
            );


        if (country) {
            return country;
        }

    }


    const possibleNames = [
        properties.ADMIN,
        properties.NAME,
        properties.name,
        properties.NAME_LONG
    ]
        .filter(Boolean);


    for (
        const name of possibleNames
    ) {

        const country =
            findCountryByName(
                name
            );


        if (country) {
            return country;
        }

    }


    return null;
}
// ============================================================
// COUNTRY GEOJSON FEATURE INTERACTIONS
// ============================================================

function onEachCountryFeature(
    feature,
    layer
) {

    const country =
        findCountryForFeature(
            feature
        );


    const properties =
        feature &&
        feature.properties
            ? feature.properties
            : {};


    const fallbackName =
        properties.ADMIN ||
        properties.NAME ||
        properties.name ||
        "Country";


    const displayName =
        country
            ? getCountryName(country)
            : fallbackName;


    layer.bindTooltip(
        escapeHtml(
            displayName
        ),
        {
            direction: "top",
            sticky: true
        }
    );


    layer.on({

        mouseover: function () {

            if (
                layer !==
                selectedCountryLayer
            ) {

                layer.setStyle(
                    getCountryHoverStyle()
                );

            }

        },


        mouseout: function () {

            if (
                layer !==
                selectedCountryLayer
            ) {

                layer.setStyle(
                    getCountryMapStyle()
                );

            }

        },


        click: function () {

            if (
                selectedCountryLayer &&
                selectedCountryLayer !== layer
            ) {

                selectedCountryLayer.setStyle(
                    getCountryMapStyle()
                );

            }


            selectedCountryLayer =
                layer;


            layer.setStyle(
                getCountrySelectedStyle()
            );


            if (country) {

                openCountryPanel(
                    country
                );

            }

        }

    });

}


// ============================================================
// LOAD COUNTRY BOUNDARIES
// ============================================================

function loadCountryBoundaries() {

    const boundaryUrl =
        "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";


    fetch(boundaryUrl)

        .then(response => {

            if (!response.ok) {

                throw new Error(
                    "Country boundary request failed."
                );

            }

            return response.json();

        })

        .then(data => {

            countryGeoJsonLayer =
                L.geoJSON(
                    data,
                    {
                        style:
                            getCountryMapStyle,

                        onEachFeature:
                            onEachCountryFeature
                    }
                );


            if (
                currentView ===
                "countries"
            ) {

                countryGeoJsonLayer.addTo(
                    map
                );

            }

        })

        .catch(error => {

            console.warn(
                "Country boundaries could not be loaded:",
                error
            );

        });

}


// ============================================================
// SHOW / HIDE COUNTRY LAYER
// ============================================================

function showCountryLayer() {

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

}


function hideCountryLayer() {

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


    selectedCountryLayer =
        null;

}


// ============================================================
// SHOW / HIDE CRISIS MARKERS
// ============================================================

function showCrisisMarkers() {

    crisisMarkers.forEach(
        item => {

            const shouldShow =
                crisisHasCategory(
                    item.crisis,
                    activeCrisisFilter
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

}


function hideCrisisMarkers() {

    crisisMarkers.forEach(
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
// VIEW BUTTON STATE
// ============================================================

function setViewButtonState(
    activeButton
) {

    [
        crisisViewButton,
        countryViewButton,
        exploreViewButton,
        aboutViewButton
    ]
        .filter(Boolean)
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button ===
                        activeButton
                );

            }
        );

}


// ============================================================
// SWITCH VIEW
// ============================================================

function switchView(
    view
) {

    currentView =
        view;


    closeCrisisPanel();

    closeCountryPanel();


    if (aboutView) {

        aboutView.classList.remove(
            "active"
        );

        aboutView.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (exploreView) {

        exploreView.classList.remove(
            "active"
        );

        exploreView.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (atlasMain) {

        atlasMain.style.display =
            "";

    }


    if (crisisFilters) {

        crisisFilters.style.display =
            "";

    }


    if (searchArea) {

        searchArea.style.display =
            "";

    }


// ------------------------------------------------------------
// CRISES
// ------------------------------------------------------------

    if (view === "crises") {

        setViewButtonState(
            crisisViewButton
        );


        showCrisisMarkers();

        hideCountryLayer();


        if (crisisFilters) {

            crisisFilters.style.display =
                "";

        }


        if (crisisLegend) {

            crisisLegend.style.display =
                "";

        }


        if (countryLegend) {

            countryLegend.style.display =
                "none";

        }


        if (crisisSearch) {

            crisisSearch.placeholder =
                "Search crises...";

        }


        applyCrisisFilter(
            activeCrisisFilter
        );


        window.setTimeout(
            function () {

                map.invalidateSize();

            },
            50
        );


        return;
    }


// ------------------------------------------------------------
// COUNTRIES
// ------------------------------------------------------------

    if (view === "countries") {

        setViewButtonState(
            countryViewButton
        );


        hideCrisisMarkers();

        showCountryLayer();


        if (crisisFilters) {

            crisisFilters.style.display =
                "none";

        }


        if (crisisLegend) {

            crisisLegend.style.display =
                "none";

        }


        if (countryLegend) {

            countryLegend.style.display =
                "";

        }


        if (crisisSearch) {

            crisisSearch.placeholder =
                "Search countries...";

        }


        if (crisisCount) {

            crisisCount.textContent =
                String(
                    getCountryDatabase()
                        .length
                );

        }


        if (counterLabel) {

            counterLabel.textContent =
                getCountryDatabase()
                    .length === 1
                    ? "country"
                    : "countries";

        }


        window.setTimeout(
            function () {

                map.invalidateSize();

            },
            50
        );


        return;
    }


// ------------------------------------------------------------
// EXPLORE
// ------------------------------------------------------------

    if (view === "explore") {

        setViewButtonState(
            exploreViewButton
        );


        hideCrisisMarkers();

        hideCountryLayer();


        if (atlasMain) {

            atlasMain.style.display =
                "none";

        }


        if (crisisFilters) {

            crisisFilters.style.display =
                "none";

        }


        if (searchArea) {

            searchArea.style.display =
                "none";

        }


        if (crisisLegend) {

            crisisLegend.style.display =
                "none";

        }


        if (countryLegend) {

            countryLegend.style.display =
                "none";

        }


        exploreView.classList.add(
            "active"
        );

        exploreView.setAttribute(
            "aria-hidden",
            "false"
        );


        updateExploreView();


        return;
    }


// ------------------------------------------------------------
// ABOUT
// ------------------------------------------------------------

    if (view === "about") {

        setViewButtonState(
            aboutViewButton
        );


        hideCrisisMarkers();

        hideCountryLayer();


        if (atlasMain) {

            atlasMain.style.display =
                "none";

        }


        if (crisisFilters) {

            crisisFilters.style.display =
                "none";

        }


        if (searchArea) {

            searchArea.style.display =
                "none";

        }


        if (crisisLegend) {

            crisisLegend.style.display =
                "none";

        }


        if (countryLegend) {

            countryLegend.style.display =
                "none";

        }


        if (aboutView) {

            aboutView.classList.add(
                "active"
            );

            aboutView.setAttribute(
                "aria-hidden",
                "false"
            );

        }

    }

}


// ============================================================
// VIEW BUTTON EVENTS
// ============================================================

if (crisisViewButton) {

    crisisViewButton.addEventListener(
        "click",
        function () {

            switchView(
                "crises"
            );

        }
    );

}


if (countryViewButton) {

    countryViewButton.addEventListener(
        "click",
        function () {

            switchView(
                "countries"
            );

        }
    );

}


if (exploreViewButton) {

    exploreViewButton.addEventListener(
        "click",
        function () {

            switchView(
                "explore"
            );

        }
    );

}


if (aboutViewButton) {

    aboutViewButton.addEventListener(
        "click",
        function () {

            switchView(
                "about"
            );

        }
    );

}


// ============================================================
// SEARCH HELPERS
// ============================================================

function clearSearchResults() {

    if (!searchResults) {
        return;
    }


    searchResults.innerHTML =
        "";

    searchResults.classList.remove(
        "active"
    );

    searchResults.classList.remove(
        "show"
    );

}


function showSearchResults() {

    if (!searchResults) {
        return;
    }


    searchResults.classList.add(
        "active"
    );

    searchResults.classList.add(
        "show"
    );

}


// ============================================================
// SEARCH CRISES
// ============================================================

function searchCrises(
    query
) {

    const normalizedQuery =
        normalizeText(
            query
        );


    if (!normalizedQuery) {
        return [];
    }


    return getCrisisDatabase()
        .filter(crisis => {

            const searchableValues = [
                crisis.name,
                crisis.overview,
                crisis.summary,
                crisis.description,
                crisis.currentSituation,
                ...getCrisisCategories(
                    crisis
                ),
                ...getCrisisCountryReferences(
                    crisis
                )
            ];


            const searchableText =
                searchableValues
                    .filter(Boolean)
                    .join(" ")
                    .toLowerCase();


            return searchableText
                .includes(
                    normalizedQuery
                );

        })
        .slice(
            0,
            20
        );

}


// ============================================================
// SEARCH COUNTRIES
// ============================================================

function searchCountries(
    query
) {

    const normalizedQuery =
        normalizeText(
            query
        );


    if (!normalizedQuery) {
        return [];
    }


    return getCountryDatabase()
        .filter(country => {

            const extraFacts =
                getExtraCountryFacts(
                    country
                );


            const searchableValues = [
                getCountryName(
                    country
                ),
                getCountryCode(
                    country
                ),
                country.region,
                country.subregion,
                extraFacts.region,
                extraFacts.subregion,
                extraFacts.capital,
                country.capital
            ];


            const searchableText =
                searchableValues
                    .map(value =>
                        formatArrayValue(
                            value
                        )
                    )
                    .join(" ")
                    .toLowerCase();


            return searchableText
                .includes(
                    normalizedQuery
                );

        })
        .slice(
            0,
            20
        );

}


// ============================================================
// RENDER CRISIS SEARCH RESULTS
// ============================================================

function renderCrisisSearchResults(
    results
) {

    if (!searchResults) {
        return;
    }


    if (!results.length) {

        searchResults.innerHTML =
            `
                <div class="search-result-item">
                    No matching crises found.
                </div>
            `;

        showSearchResults();

        return;
    }


    searchResults.innerHTML =
        results
            .map(crisis => {

                const category =
                    getPrimaryCategory(
                        crisis
                    );


                return `
                    <button
                        class="search-result-item"
                        type="button"
                        data-search-crisis-id="${escapeHtml(crisis.id || "")}"
                    >

                        <strong>
                            ${escapeHtml(crisis.name || "Crisis")}
                        </strong>

                        <div
                            style="
                                margin-top:3px;
                                color:#8f9ba8;
                                font-size:11px;
                            "
                        >
                            ${escapeHtml(
                                getCategoryName(
                                    category
                                )
                            )}
                        </div>

                    </button>
                `;

            })
            .join("");


    showSearchResults();


    searchResults
        .querySelectorAll(
            "[data-search-crisis-id]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    function () {

                        const crisis =
                            getCrisisDatabase()
                                .find(
                                    item =>
                                        String(
                                            item.id
                                        ) ===
                                        String(
                                            button.dataset
                                                .searchCrisisId
                                        )
                                );


                        if (!crisis) {
                            return;
                        }


                        if (crisisSearch) {

                            crisisSearch.value =
                                crisis.name ||
                                "";

                        }


                        clearSearchResults();


                        openCrisisPanel(
                            crisis
                        );

                    }
                );

            }
        );

}


// ============================================================
// RENDER COUNTRY SEARCH RESULTS
// ============================================================

function renderCountrySearchResults(
    results
) {

    if (!searchResults) {
        return;
    }


    if (!results.length) {

        searchResults.innerHTML =
            `
                <div class="search-result-item">
                    No matching countries found.
                </div>
            `;

        showSearchResults();

        return;
    }


    searchResults.innerHTML =
        results
            .map(country => {

                const name =
                    getCountryName(
                        country
                    );


                const facts =
                    getExtraCountryFacts(
                        country
                    );


                const region =
                    firstAvailableValue(
                        facts.region,
                        country.region
                    );


                return `
                    <button
                        class="search-result-item"
                        type="button"
                        data-search-country-code="${escapeHtml(getCountryCode(country))}"
                        data-search-country-name="${escapeHtml(name)}"
                    >

                        <strong>
                            ${escapeHtml(name)}
                        </strong>

                        <div
                            style="
                                margin-top:3px;
                                color:#8f9ba8;
                                font-size:11px;
                            "
                        >
                            ${escapeHtml(formatArrayValue(region))}
                        </div>

                    </button>
                `;

            })
            .join("");


    showSearchResults();


    searchResults
        .querySelectorAll(
            "[data-search-country-name]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    function () {

                        const code =
                            button.dataset
                                .searchCountryCode;


                        const name =
                            button.dataset
                                .searchCountryName;


                        const country =
                            (
                                code
                                    ? findCountryByCode(
                                        code
                                    )
                                    : null
                            ) ||
                            findCountryByName(
                                name
                            );


                        if (!country) {
                            return;
                        }


                        if (crisisSearch) {

                            crisisSearch.value =
                                getCountryName(
                                    country
                                );

                        }


                        clearSearchResults();


                        openCountryPanel(
                            country
                        );

                    }
                );

            }
        );

}


// ============================================================
// SEARCH INPUT EVENT
// ============================================================

if (crisisSearch) {

    crisisSearch.addEventListener(
        "input",
        function () {

            const query =
                crisisSearch.value;


            if (
                !query ||
                !query.trim()
            ) {

                clearSearchResults();

                return;
            }


            if (
                currentView ===
                "countries"
            ) {

                renderCountrySearchResults(
                    searchCountries(
                        query
                    )
                );

            } else {

                renderCrisisSearchResults(
                    searchCrises(
                        query
                    )
                );

            }

        }
    );


    crisisSearch.addEventListener(
        "focus",
        function () {

            if (
                crisisSearch.value &&
                crisisSearch.value.trim()
            ) {

                crisisSearch.dispatchEvent(
                    new Event(
                        "input"
                    )
                );

            }

        }
    );

}


// ============================================================
// CLOSE SEARCH RESULTS WHEN CLICKING ELSEWHERE
// ============================================================

document.addEventListener(
    "click",
    function (event) {

        if (
            !searchResults ||
            !crisisSearch
        ) {
            return;
        }


        const clickedSearch =
            crisisSearch.contains(
                event.target
            );


        const clickedResults =
            searchResults.contains(
                event.target
            );


        if (
            !clickedSearch &&
            !clickedResults
        ) {

            clearSearchResults();

        }

    }
);
// ============================================================
// EXPLORE — CATEGORY COUNT
// ============================================================

function countCrisesByCategory(
    category
) {

    return getCrisisDatabase()
        .filter(
            crisis =>
                crisisHasCategory(
                    crisis,
                    category
                )
        )
        .length;

}


// ============================================================
// EXPLORE — RELATED COUNTRIES
// ============================================================

function getRelatedCountries() {

    const relatedCountries =
        new Set();


    getCrisisDatabase()
        .forEach(
            crisis => {

                getCrisisCountryReferences(
                    crisis
                )
                    .forEach(
                        reference => {

                            const normalized =
                                normalizeText(
                                    reference
                                );


                            if (normalized) {

                                relatedCountries.add(
                                    normalized
                                );

                            }

                        }
                    );

            }
        );


    return relatedCountries;

}


// ============================================================
// EXPLORE — REGIONS
// ============================================================

function getExploreRegions() {

    const regions =
        new Map();


    getCountryDatabase()
        .forEach(
            country => {

                const extraFacts =
                    getExtraCountryFacts(
                        country
                    );


                const region =
                    firstAvailableValue(
                        extraFacts.region,
                        country.region
                    );


                const regionName =
                    formatArrayValue(
                        region
                    );


                if (
                    !regionName ||
                    regionName === "—"
                ) {
                    return;
                }


                if (
                    !regions.has(
                        regionName
                    )
                ) {

                    regions.set(
                        regionName,
                        []
                    );

                }


                regions
                    .get(
                        regionName
                    )
                    .push(
                        country
                    );

            }
        );


    return regions;

}


// ============================================================
// EXPLORE — UPDATE OVERVIEW STATISTICS
// ============================================================

function updateExploreStatistics() {

    const crises =
        getCrisisDatabase();

    const countries =
        getCountryDatabase();


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


    if (crisisTotal) {

        crisisTotal.textContent =
            String(
                crises.length
            );

    }


    if (countryTotal) {

        countryTotal.textContent =
            String(
                countries.length
            );

    }


    if (relatedCountryTotal) {

        relatedCountryTotal.textContent =
            String(
                getRelatedCountries()
                    .size
            );

    }


    if (regionTotal) {

        regionTotal.textContent =
            String(
                getExploreRegions()
                    .size
            );

    }

}


// ============================================================
// EXPLORE — UPDATE CATEGORY COUNTS
// ============================================================

function updateExploreCategoryCounts() {

    const categoryCountElements = {

        conflict:
            document.getElementById(
                "explore-conflict-count"
            ),

        humanitarian:
            document.getElementById(
                "explore-humanitarian-count"
            ),

        displacement:
            document.getElementById(
                "explore-displacement-count"
            ),

        disaster:
            document.getElementById(
                "explore-disaster-count"
            ),

        unrest:
            document.getElementById(
                "explore-unrest-count"
            )

    };


    Object.entries(
        categoryCountElements
    )
        .forEach(
            ([
                category,
                element
            ]) => {

                if (!element) {
                    return;
                }


                element.textContent =
                    String(
                        countCrisesByCategory(
                            category
                        )
                    );

            }
        );

}


// ============================================================
// EXPLORE — CATEGORY CARD EVENTS
// ============================================================

function initializeExploreCategoryCards() {

    const categoryCards =
        exploreView.querySelectorAll(
            "[data-explore-category]"
        );


    categoryCards.forEach(
        card => {

            if (
                card.dataset
                    .exploreInitialized ===
                "true"
            ) {
                return;
            }


            card.dataset
                .exploreInitialized =
                "true";


            card.addEventListener(
                "click",
                function () {

                    const category =
                        normalizeText(
                            card.dataset
                                .exploreCategory
                        );


                    if (!category) {
                        return;
                    }


                    activeCrisisFilter =
                        category;


                    switchView(
                        "crises"
                    );


                    applyCrisisFilter(
                        category
                    );


                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                }
            );

        }
    );

}


// ============================================================
// EXPLORE — RENDER REGION BUTTONS
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


    const regions =
        getExploreRegions();


    const sortedRegions =
        Array.from(
            regions.entries()
        )
            .sort(
                (
                    [regionA],
                    [regionB]
                ) =>
                    regionA.localeCompare(
                        regionB
                    )
            );


    regionGrid.innerHTML =
        sortedRegions
            .map(
                ([
                    regionName,
                    regionCountries
                ]) => {

                    return `
                        <button
                            class="explore-region-button"
                            type="button"
                            data-explore-region="${escapeHtml(regionName)}"
                        >
                            ${escapeHtml(regionName)}
                            (${regionCountries.length})
                        </button>
                    `;

                }
            )
            .join("");


// ------------------------------------------------------------
// REGION BUTTON EVENTS
// ------------------------------------------------------------

    regionGrid
        .querySelectorAll(
            "[data-explore-region]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    function () {

                        const selectedRegion =
                            button.dataset
                                .exploreRegion;


                        regionGrid
                            .querySelectorAll(
                                "[data-explore-region]"
                            )
                            .forEach(
                                otherButton => {

                                    otherButton.classList
                                        .toggle(
                                            "active",
                                            otherButton ===
                                                button
                                        );

                                }
                            );


                        const countries =
                            regions.get(
                                selectedRegion
                            ) || [];


                        const sortedCountries =
                            [...countries]
                                .sort(
                                    (
                                        countryA,
                                        countryB
                                    ) =>
                                        getCountryName(
                                            countryA
                                        )
                                            .localeCompare(
                                                getCountryName(
                                                    countryB
                                                )
                                            )
                                );


                        regionResults.innerHTML =
                            `
                                <div
                                    class="explore-region-country-grid"
                                >

                                    ${sortedCountries
                                        .map(
                                            country => `
                                                <button
                                                    class="explore-country-button"
                                                    type="button"
                                                    data-explore-country-code="${escapeHtml(getCountryCode(country))}"
                                                    data-explore-country-name="${escapeHtml(getCountryName(country))}"
                                                >
                                                    ${escapeHtml(getCountryName(country))}
                                                </button>
                                            `
                                        )
                                        .join("")}

                                </div>
                            `;


                        regionResults.classList.add(
                            "active"
                        );


                        regionResults
                            .querySelectorAll(
                                "[data-explore-country-name]"
                            )
                            .forEach(
                                countryButton => {

                                    countryButton.addEventListener(
                                        "click",
                                        function () {

                                            const code =
                                                countryButton
                                                    .dataset
                                                    .exploreCountryCode;


                                            const name =
                                                countryButton
                                                    .dataset
                                                    .exploreCountryName;


                                            const country =
                                                (
                                                    code
                                                        ? findCountryByCode(
                                                            code
                                                        )
                                                        : null
                                                ) ||
                                                findCountryByName(
                                                    name
                                                );


                                            if (!country) {
                                                return;
                                            }


                                            switchView(
                                                "countries"
                                            );


                                            openCountryPanel(
                                                country
                                            );

                                        }
                                    );

                                }
                            );

                    }
                );

            }
        );

}


// ============================================================
// EXPLORE — COUNTRY COMPARISON SELECTS
// ============================================================

function populateCountryComparisonSelectors() {

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


    const countries =
        [...getCountryDatabase()]
            .sort(
                (
                    countryA,
                    countryB
                ) =>
                    getCountryName(
                        countryA
                    )
                        .localeCompare(
                            getCountryName(
                                countryB
                            )
                        )
            );


    const currentFirst =
        firstSelect.value;

    const currentSecond =
        secondSelect.value;


    const options =
        countries
            .map(
                country => {

                    const code =
                        getCountryCode(
                            country
                        );


                    const name =
                        getCountryName(
                            country
                        );


                    const value =
                        code ||
                        name;


                    return `
                        <option
                            value="${escapeHtml(value)}"
                        >
                            ${escapeHtml(name)}
                        </option>
                    `;

                }
            )
            .join("");


    firstSelect.innerHTML =
        `
            <option value="">
                Select a country
            </option>

            ${options}
        `;


    secondSelect.innerHTML =
        `
            <option value="">
                Select a country
            </option>

            ${options}
        `;


    if (
        Array.from(
            firstSelect.options
        )
            .some(
                option =>
                    option.value ===
                    currentFirst
            )
    ) {

        firstSelect.value =
            currentFirst;

    }


    if (
        Array.from(
            secondSelect.options
        )
            .some(
                option =>
                    option.value ===
                    currentSecond
            )
    ) {

        secondSelect.value =
            currentSecond;

    }

}


// ============================================================
// EXPLORE — GET COUNTRY FROM COMPARISON VALUE
// ============================================================

function getComparisonCountry(
    value
) {

    if (!value) {
        return null;
    }


    return (
        findCountryByCode(
            value
        ) ||
        findCountryByName(
            value
        )
    );

}


// ============================================================
// EXPLORE — COUNTRY COMPARISON FACT
// ============================================================

function comparisonFact(
    label,
    value
) {

    return `
        <div class="comparison-fact">

            <span class="comparison-fact-label">
                ${escapeHtml(label)}
            </span>

            <span class="comparison-fact-value">
                ${escapeHtml(
                    formatArrayValue(
                        value
                    )
                )}
            </span>

        </div>
    `;

}


// ============================================================
// EXPLORE — COUNTRY COMPARISON CARD
// ============================================================

function buildComparisonCountryCard(
    country
) {

    const facts =
        getExtraCountryFacts(
            country
        );


    const population =
        firstAvailableValue(
            facts.population,
            country.population
        );


    const capital =
        firstAvailableValue(
            facts.capital,
            country.capital
        );


    const region =
        firstAvailableValue(
            facts.region,
            country.region
        );


    const subregion =
        firstAvailableValue(
            facts.subregion,
            country.subregion
        );


    const government =
        firstAvailableValue(
            facts.governmentType,
            facts.government,
            country.governmentType,
            country.government
        );


    const headOfState =
        firstAvailableValue(
            facts.headOfState,
            country.headOfState
        );


    const headOfGovernment =
        firstAvailableValue(
            facts.headOfGovernment,
            country.headOfGovernment
        );


    const languages =
        firstAvailableValue(
            facts.languages,
            country.languages
        );


    const currency =
        firstAvailableValue(
            facts.currency,
            facts.currencies,
            country.currency,
            country.currencies
        );


    const relatedCrises =
        getCrisesForCountry(
            country
        );


    return `
        <div class="comparison-country">

            <h4>
                ${escapeHtml(
                    getCountryName(
                        country
                    )
                )}
            </h4>

            ${comparisonFact(
                "Population",
                population
            )}

            ${comparisonFact(
                "Capital",
                capital
            )}

            ${comparisonFact(
                "Region",
                region
            )}

            ${comparisonFact(
                "Subregion",
                subregion
            )}

            ${comparisonFact(
                "Government Type",
                government
            )}

            ${comparisonFact(
                "Head of State",
                headOfState
            )}

            ${comparisonFact(
                "Head of Government",
                headOfGovernment
            )}

            ${comparisonFact(
                "Languages",
                languages
            )}

            ${comparisonFact(
                "Currency",
                currency
            )}

            ${comparisonFact(
                "Related Crises",
                relatedCrises.length
            )}

        </div>
    `;

}


// ============================================================
// EXPLORE — UPDATE COUNTRY COMPARISON
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


    if (
        !firstSelect ||
        !secondSelect ||
        !comparison
    ) {
        return;
    }


    const firstCountry =
        getComparisonCountry(
            firstSelect.value
        );


    const secondCountry =
        getComparisonCountry(
            secondSelect.value
        );


    if (
        !firstCountry ||
        !secondCountry
    ) {

        comparison.innerHTML =
            `
                <div class="comparison-placeholder">
                    Select two countries above to compare them.
                </div>
            `;

        return;
    }


    comparison.innerHTML =
        `
            <div class="comparison-grid">

                ${buildComparisonCountryCard(
                    firstCountry
                )}

                ${buildComparisonCountryCard(
                    secondCountry
                )}

            </div>
        `;

}


// ============================================================
// EXPLORE — INITIALIZE COMPARISON EVENTS
// ============================================================

function initializeCountryComparison() {

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


    if (
        firstSelect.dataset
            .comparisonInitialized !==
        "true"
    ) {

        firstSelect.dataset
            .comparisonInitialized =
            "true";


        firstSelect.addEventListener(
            "change",
            updateCountryComparison
        );

    }


    if (
        secondSelect.dataset
            .comparisonInitialized !==
        "true"
    ) {

        secondSelect.dataset
            .comparisonInitialized =
            "true";


        secondSelect.addEventListener(
            "change",
            updateCountryComparison
        );

    }

}
// ============================================================
// EXPLORE — HUMANITARIAN ORGANIZATIONS
// ============================================================

function getExploreOrganizations() {

    const organizations =
        new Map();


    function addOrganization(
        organization
    ) {

        if (!organization) {
            return;
        }


        let name = "";
        let description = "";


        if (
            typeof organization ===
            "string"
        ) {

            name =
                organization;

        } else if (
            typeof organization ===
            "object"
        ) {

            name =
                organization.name ||
                organization.organization ||
                organization.title ||
                organization.label ||
                "";

            description =
                organization.description ||
                organization.role ||
                organization.text ||
                "";

        }


        name =
            String(name).trim();


        if (!name) {
            return;
        }


        const key =
            normalizeText(
                name
            );


        if (
            !organizations.has(
                key
            )
        ) {

            organizations.set(
                key,
                {
                    name: name,
                    description:
                        description,
                    appearances: 0
                }
            );

        }


        const savedOrganization =
            organizations.get(
                key
            );


        savedOrganization.appearances +=
            1;


        if (
            !savedOrganization.description &&
            description
        ) {

            savedOrganization.description =
                description;

        }

    }


// ------------------------------------------------------------
// ORGANIZATIONS FROM CRISES
// ------------------------------------------------------------

    getCrisisDatabase()
        .forEach(
            crisis => {

                const crisisOrganizations =
                    firstAvailableValue(
                        crisis.aid,
                        crisis.humanitarianAid,
                        crisis.organizations,
                        []
                    );


                if (
                    Array.isArray(
                        crisisOrganizations
                    )
                ) {

                    crisisOrganizations
                        .forEach(
                            addOrganization
                        );

                } else if (
                    crisisOrganizations
                ) {

                    addOrganization(
                        crisisOrganizations
                    );

                }

            }
        );


// ------------------------------------------------------------
// ORGANIZATIONS FROM COUNTRIES
// ------------------------------------------------------------

    getCountryDatabase()
        .forEach(
            country => {

                const facts =
                    getExtraCountryFacts(
                        country
                    );


                const countryOrganizations =
                    firstAvailableValue(
                        facts.humanitarianOrganizations,
                        country.humanitarianOrganizations,
                        facts.aidOrganizations,
                        country.aidOrganizations,
                        []
                    );


                if (
                    Array.isArray(
                        countryOrganizations
                    )
                ) {

                    countryOrganizations
                        .forEach(
                            addOrganization
                        );

                } else if (
                    countryOrganizations
                ) {

                    addOrganization(
                        countryOrganizations
                    );

                }

            }
        );


    return Array.from(
        organizations.values()
    )
        .sort(
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


                return organizationA.name
                    .localeCompare(
                        organizationB.name
                    );

            }
        );

}


// ============================================================
// EXPLORE — RENDER HUMANITARIAN ORGANIZATIONS
// ============================================================

function renderExploreOrganizations() {

    const organizationGrid =
        document.getElementById(
            "explore-organization-grid"
        );


    if (!organizationGrid) {
        return;
    }


    const organizations =
        getExploreOrganizations();


    if (
        !organizations.length
    ) {

        organizationGrid.innerHTML =
            `
                <div class="comparison-placeholder">
                    No humanitarian organizations are currently
                    listed in the database.
                </div>
            `;

        return;
    }


    organizationGrid.innerHTML =
        organizations
            .map(
                organization => {

                    return `
                        <div
                            class="explore-organization-card"
                        >

                            <strong>
                                ${escapeHtml(
                                    organization.name
                                )}
                            </strong>

                            <span>
                                Referenced in
                                ${organization.appearances}
                                ${
                                    organization.appearances === 1
                                        ? "profile"
                                        : "profiles"
                                }.
                            </span>

                            ${
                                organization.description
                                    ? `
                                        <span
                                            style="
                                                margin-top:6px;
                                            "
                                        >
                                            ${escapeHtml(
                                                organization.description
                                            )}
                                        </span>
                                    `
                                    : ""
                            }

                        </div>
                    `;

                }
            )
            .join("");

}


// ============================================================
// EXPLORE — UPDATE COMPLETE VIEW
// ============================================================

function updateExploreView() {

    updateExploreStatistics();

    updateExploreCategoryCounts();

    initializeExploreCategoryCards();

    renderExploreRegions();

    populateCountryComparisonSelectors();

    initializeCountryComparison();

    updateCountryComparison();

    renderExploreOrganizations();

}


// ============================================================
// KEYBOARD — ESCAPE
// ============================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !==
            "Escape"
        ) {
            return;
        }


        clearSearchResults();

        closeCrisisPanel();

        closeCountryPanel();

    }
);


// ============================================================
// WINDOW RESIZE
// ============================================================

window.addEventListener(
    "resize",
    function () {

        if (
            currentView === "crises" ||
            currentView === "countries"
        ) {

            window.setTimeout(
                function () {

                    map.invalidateSize();

                },
                50
            );

        }

    }
);


// ============================================================
// INITIALIZATION
// ============================================================

function initializeSite() {

    buildCrisisMarkers();

    loadCountryBoundaries();

    initializeExploreCategoryCards();


// ------------------------------------------------------------
// DEFAULT TO CRISIS VIEW
// ------------------------------------------------------------

    currentView =
        "crises";


    setViewButtonState(
        crisisViewButton
    );


    if (aboutView) {

        aboutView.classList.remove(
            "active"
        );

        aboutView.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (exploreView) {

        exploreView.classList.remove(
            "active"
        );

        exploreView.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (atlasMain) {

        atlasMain.style.display =
            "";

    }


    if (crisisFilters) {

        crisisFilters.style.display =
            "";

    }


    if (searchArea) {

        searchArea.style.display =
            "";

    }


    if (crisisLegend) {

        crisisLegend.style.display =
            "";

    }


    if (countryLegend) {

        countryLegend.style.display =
            "none";

    }


    if (crisisSearch) {

        crisisSearch.placeholder =
            "Search crises...";

    }


    activeCrisisFilter =
        "all";


    applyCrisisFilter(
        "all"
    );


    window.setTimeout(
        function () {

            map.invalidateSize();

        },
        100
    );

}


// ============================================================
// START SITE
// ============================================================

initializeSite();
// ============================================================
// FINAL CATEGORY VALIDATION
// ============================================================

const supportedCrisisCategories = [
    "conflict",
    "humanitarian",
    "displacement",
    "disaster",
    "unrest"
];


// ============================================================
// VALIDATE CRISIS CATEGORIES
// ============================================================

function validateCrisisCategories() {

    getCrisisDatabase()
        .forEach(
            crisis => {

                const categories =
                    getCrisisCategories(
                        crisis
                    );


                categories.forEach(
                    category => {

                        if (
                            !supportedCrisisCategories
                                .includes(
                                    category
                                )
                        ) {

                            console.warn(
                                "Unknown crisis category:",
                                category,
                                crisis.name ||
                                crisis.id ||
                                crisis
                            );

                        }

                    }
                );

            }
        );

}


// ============================================================
// FINAL CIVIL UNREST CHECK
// ============================================================

function validateCivilUnrestCategory() {

    const unrestCrises =
        getCrisisDatabase()
            .filter(
                crisis =>
                    crisisHasCategory(
                        crisis,
                        "unrest"
                    )
            );


    const unrestFilter =
        Array.from(
            document.querySelectorAll(
                ".filter"
            )
        )
            .find(
                button => {

                    return (
                        normalizeText(
                            button.dataset.category
                        ) === "unrest" ||
                        normalizeText(
                            button.dataset.filter
                        ) === "unrest"
                    );

                }
            );


    const unrestExploreCard =
        document.querySelector(
            '[data-explore-category="unrest"]'
        );


    const unrestCount =
        document.getElementById(
            "explore-unrest-count"
        );


    if (!unrestFilter) {

        console.warn(
            "Civil Unrest filter button was not found in index.html."
        );

    }


    if (!unrestExploreCard) {

        console.warn(
            "Civil Unrest Explore card was not found."
        );

    }


    if (!unrestCount) {

        console.warn(
            "Civil Unrest Explore counter was not found."
        );

    }


    if (
        unrestCount
    ) {

        unrestCount.textContent =
            String(
                unrestCrises.length
            );

    }

}


// ============================================================
// SUPPORT BOTH FILTER DATA ATTRIBUTE FORMATS
// ============================================================

filterButtons.forEach(
    button => {

        if (
            !button.dataset.category &&
            button.dataset.filter
        ) {

            button.dataset.category =
                button.dataset.filter;

        }


        if (
            !button.dataset.filter &&
            button.dataset.category
        ) {

            button.dataset.filter =
                button.dataset.category;

        }

    }
);


// ============================================================
// REFRESH COUNTERS
// ============================================================

function refreshSiteCounts() {

    if (
        currentView ===
        "crises"
    ) {

        applyCrisisFilter(
            activeCrisisFilter
        );

    }


    updateExploreStatistics();

    updateExploreCategoryCounts();

}


// ============================================================
// FINAL DATABASE CHECK
// ============================================================

validateCrisisCategories();

validateCivilUnrestCategory();

refreshSiteCounts();


// ============================================================
// ONE WORLD, ONE LIFE
// END OF SCRIPT.JS — VERSION 10
// ============================================================
