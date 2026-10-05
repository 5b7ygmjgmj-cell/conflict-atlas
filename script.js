// ============================================================
// ONE WORLD, ONE LIFE
// CRISIS + COUNTRY + ABOUT VIEWS
// VERSION 8
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
                                            direction: "top",
                                            sticky: true
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
    // Each organization is deliberately rendered separately.
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
                            organization.name ||
                            organization.label ||
                            organization.title ||
                            "Organization",

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
                            "p"
                        );

                    item.textContent =
                        organization.name ||
                        organization.label ||
                        organization.title ||
                        String(
                            organization
                        );

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

    const relatedCrises =
        getCountryCrisisRelationships(
            country
        );

    countryCrisisCount.textContent =
        relatedCrises.length;

    countryCrisesSection.style.display =
        "block";

    if (
        relatedCrises.length > 0
    ) {

        relatedCrises.forEach(
            item => {

                const conflict =
                    item.conflict;

                const relationship =
                    item.relationship;

                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "country-crisis-item";

                const crisisTitle =
                    document.createElement(
                        "span"
                    );

                crisisTitle.className =
                    "country-crisis-name";

                crisisTitle.textContent =
                    conflict.name;

                const crisisType =
                    document.createElement(
                        "span"
                    );

                crisisType.className =
                    "country-crisis-type";

                const relationshipLabel =
                    getRelationshipLabel(
                        relationship
                    );

                const primaryCategory =
                    conflict.primaryCategory ||
                    conflict.categories[0];

                crisisType.textContent =
                    relationshipLabel ||
                    categoryNames[
                        primaryCategory
                    ] ||
                    primaryCategory;

                button.appendChild(
                    crisisTitle
                );

                button.appendChild(
                    crisisType
                );

                if (
                    relationship &&
                    relationship.explanation
                ) {

                    const explanation =
                        document.createElement(
                            "span"
                        );

                    explanation.className =
                        "country-crisis-explanation";

                    explanation.textContent =
                        relationship.explanation;

                    button.appendChild(
                        explanation
                    );

                }

                button.addEventListener(
                    "click",
                    function () {

                        switchToCrisisView();

                        const selectedMarker =
                            conflictMarkers.find(
                                markerItem =>
                                    markerItem.conflict.id ===
                                    conflict.id
                            );

                        map.flyTo(
                            conflict.coordinates,
                            5,
                            {
                                animate: true,
                                duration: 1.1
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

                    }
                );

                countryCrises.appendChild(
                    button
                );

            }
        );

    } else {

        const noCrisis =
            document.createElement(
                "p"
            );

        noCrisis.textContent =
            "No verified crisis relationship is currently listed for this country.";

        countryCrises.appendChild(
            noCrisis
        );

    }


    // ========================================================
    // HUMANITARIAN SNAPSHOT
    // ========================================================

    const humanitarianSummary =
        (
            country.humanitarian &&
            country.humanitarian.summary
        ) ||
        country.humanitarianSnapshot;

    if (
        humanitarianSummary
    ) {

        countryHumanitarian.textContent =
            humanitarianSummary;

        countryHumanitarianSection.style.display =
            "block";

    } else {

        countryHumanitarian.textContent =
            "";

        countryHumanitarianSection.style.display =
            "none";

    }


    // ========================================================
    // DISPLACEMENT
    // ========================================================

    const displacementSummary =
        (
            country.displacement &&
            country.displacement.summary
        ) ||
        country.displacementSnapshot;

    if (
        displacementSummary
    ) {

        countryDisplacement.textContent =
            displacementSummary;

        countryDisplacementSection.style.display =
            "block";

    } else {

        countryDisplacement.textContent =
            "";

        countryDisplacementSection.style.display =
            "none";

    }


    // ========================================================
    // COUNTRY TIMELINE
    // ========================================================

    countryTimeline.innerHTML =
        "";

    if (
        country.timeline &&
        country.timeline.length > 0
    ) {

        countryTimelineSection.style.display =
            "block";

        country.timeline.forEach(
            item => {

                const timelineItem =
                    document.createElement(
                        "div"
                    );

                timelineItem.className =
                    "timeline-item";

                const date =
                    document.createElement(
                        "div"
                    );

                date.className =
                    "timeline-date";

                date.textContent =
                    item.date;

                const event =
                    document.createElement(
                        "p"
                    );

                event.className =
                    "timeline-event";

                event.textContent =
                    item.event;

                timelineItem.appendChild(
                    date
                );

                timelineItem.appendChild(
                    event
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

    if (
        country.organizations &&
        country.organizations.length > 0
    ) {

        countryOrganizationsSection.style.display =
            "block";

        country.organizations.forEach(
            organization => {

                const link =
                    createExternalLink(
                        organization.name,
                        organization.url
                    );

                if (link) {

                    countryOrganizations.appendChild(
                        link
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

    if (
        country.sources &&
        country.sources.length > 0
    ) {

        country.sources.forEach(
            source => {

                const link =
                    createExternalLink(
                        source.name,
                        source.url
                    );

                if (link) {

                    countrySources.appendChild(
                        link
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

                filterButtons.forEach(
                    otherButton => {

                        otherButton
                            .classList
                            .remove(
                                "active"
                            );

                    }
                );

                button.classList.add(
                    "active"
                );

                const selectedFilter =
                    button.dataset.filter;

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

                infoPanel.classList.remove(
                    "open"
                );

                clearSearch();

            }
        );

    }
);


// ============================================================
// REMOVE COUNTRY MAP LAYERS
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
// REMOVE CRISIS MAP LAYERS
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

    aboutViewButton.classList.remove(
        "active"
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


aboutViewButton.addEventListener(
    "click",
    function () {

        switchToAboutView();

    }
);
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

switchToCrisisView();
