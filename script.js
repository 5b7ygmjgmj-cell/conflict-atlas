// ============================================================
// ONE WORLD, ONE LIFE — CONFLICT ATLAS
// CRISIS VIEW + COUNTRY VIEW
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


const crisisFilters =
    document.getElementById("crisis-filters");

const filterButtons =
    document.querySelectorAll(".filter");


const crisisLegend =
    document.getElementById("crisis-legend");

const countryLegend =
    document.getElementById("country-legend");


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
    (conflict) => {

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
// COUNTRY MARKERS
// ============================================================

const countryMarkers = [];


countries.forEach(
    (country) => {

        const icon =
            L.divIcon({
                className: "",

                html:
                    `<div class="country-marker">
                        ${country.flag}
                    </div>`,

                iconSize: [28, 28],

                iconAnchor: [14, 14],

                tooltipAnchor: [0, -16]
            });


        const marker =
            L.marker(
                country.coordinates,
                {
                    icon: icon
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

                openCountryPanel(
                    country
                );

            }
        );


        countryMarkers.push({
            marker: marker,
            country: country
        });

    }
);


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


    // CURRENT SITUATION

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


    // ACTORS

    crisisActors.innerHTML = "";


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


    // HUMANITARIAN IMPACT

    crisisImpact.textContent =
        conflict.humanitarianImpact ||
        "Humanitarian information not yet available.";


    // TIMELINE

    crisisTimeline.innerHTML = "";


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


    // SOURCES

    crisisSources.innerHTML = "";


    if (
        conflict.sources &&
        conflict.sources.length > 0
    ) {

        conflict.sources.forEach(
            source => {

                const link =
                    document.createElement(
                        "a"
                    );


                link.textContent =
                    source.name;


                link.href =
                    source.url;


                link.target =
                    "_blank";


                link.rel =
                    "noopener noreferrer";


                crisisSources.appendChild(
                    link
                );

            }
        );

    } else {

        crisisSources.textContent =
            "Sources have not yet been added.";

    }


    // AID

    crisisAid.innerHTML = "";


    if (
        conflict.aid &&
        conflict.aid.length > 0
    ) {

        conflict.aid.forEach(
            organization => {

                const link =
                    document.createElement(
                        "a"
                    );


                link.textContent =
                    organization.name;


                link.href =
                    organization.url;


                link.target =
                    "_blank";


                link.rel =
                    "noopener noreferrer";


                crisisAid.appendChild(
                    link
                );

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
// OPEN COUNTRY PANEL
// ============================================================

function openCountryPanel(
    country
) {

    infoPanel.classList.remove(
        "open"
    );


    // BASIC INFORMATION

    countryFlagElement.textContent =
        country.flag;


    countryNameElement.textContent =
        country.name;


    countryLastUpdated.textContent =
        "Last verified: " +
        country.lastVerified;


    countryCapital.textContent =
        country.capital;


    countryRegion.textContent =
        country.region;


    countrySubregion.textContent =
        country.subregion;


    countryCode.textContent =
        country.iso3;


    countryOverview.textContent =
        country.overview;


    // SPECIAL COUNTRY NOTE

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


    // ========================================
    // CONNECT COUNTRY TO CRISES
    // ========================================

    countryCrises.innerHTML = "";


    const relatedCrises =
        findRelatedCrises(
            country
        );


    if (
        relatedCrises.length > 0
    ) {

        countryCrisesSection.style.display =
            "block";


        relatedCrises.forEach(
            conflict => {

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


                const primaryCategory =
                    conflict.primaryCategory ||
                    conflict.categories[0];


                crisisType.textContent =
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


                button.addEventListener(
                    "click",
                    function () {

                        switchToCrisisView();


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

        countryCrisesSection.style.display =
            "block";


        const noCrisis =
            document.createElement(
                "p"
            );


        noCrisis.textContent =
            "Conflict Atlas currently has no crisis entry directly connected to this country.";


        countryCrises.appendChild(
            noCrisis
        );

    }


    // ========================================
    // HUMANITARIAN SNAPSHOT
    // ========================================

    if (
        country.humanitarianSnapshot
    ) {

        countryHumanitarian.textContent =
            country.humanitarianSnapshot;


        countryHumanitarianSection.style.display =
            "block";

    } else {

        countryHumanitarian.textContent =
            "";


        countryHumanitarianSection.style.display =
            "none";

    }


    // ========================================
    // DISPLACEMENT
    // ========================================

    if (
        country.displacementSnapshot
    ) {

        countryDisplacement.textContent =
            country.displacementSnapshot;


        countryDisplacementSection.style.display =
            "block";

    } else {

        countryDisplacement.textContent =
            "";


        countryDisplacementSection.style.display =
            "none";

    }


    // ========================================
    // COUNTRY TIMELINE
    // ========================================

    countryTimeline.innerHTML = "";


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


    // ========================================
    // HUMANITARIAN ORGANIZATIONS
    // ========================================

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
                    document.createElement(
                        "a"
                    );


                link.textContent =
                    organization.name;


                link.href =
                    organization.url;


                link.target =
                    "_blank";


                link.rel =
                    "noopener noreferrer";


                countryOrganizations.appendChild(
                    link
                );

            }
        );

    } else {

        countryOrganizationsSection.style.display =
            "none";

    }


    // ========================================
    // SOURCES
    // ========================================

    countrySources.innerHTML =
        "";


    if (
        country.sources &&
        country.sources.length > 0
    ) {

        country.sources.forEach(
            source => {

                const link =
                    document.createElement(
                        "a"
                    );


                link.textContent =
                    source.name;


                link.href =
                    source.url;


                link.target =
                    "_blank";


                link.rel =
                    "noopener noreferrer";


                countrySources.appendChild(
                    link
                );

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
// FIND CRISES ASSOCIATED WITH A COUNTRY
// ============================================================

function findRelatedCrises(
    country
) {

    const countryName =
        country.name.toLowerCase();


    const aliases = {
        "democratic republic of the congo": [
            "dr congo",
            "drc",
            "congo"
        ],

        "central african republic": [
            "central african republic"
        ],

        "south sudan": [
            "south sudan"
        ],

        "state of palestine": [
            "gaza",
            "palestine",
            "palestinian"
        ],

        "iran": [
            "iran"
        ],

        "israel": [
            "israel",
            "gaza"
        ],

        "myanmar": [
            "myanmar"
        ],

        "venezuela": [
            "venezuela"
        ],

        "vietnam": [
            "viet nam",
            "vietnam"
        ],

        "cabo verde": [
            "cabo verde",
            "cape verde"
        ],

        "côte d'ivoire": [
            "côte d'ivoire",
            "ivory coast"
        ]
    };


    const searchNames = [
        countryName
    ];


    if (
        aliases[countryName]
    ) {

        aliases[
            countryName
        ].forEach(
            alias => {

                searchNames.push(
                    alias
                );

            }
        );

    }


    return conflicts.filter(
        conflict => {

            const searchableText =
                [
                    conflict.name || "",
                    conflict.overview || "",
                    conflict.currentSituation || ""
                ]
                    .join(" ")
                    .toLowerCase();


            return searchNames.some(
                name =>
                    searchableText.includes(
                        name
                    )
            );

        }
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
// SWITCH TO CRISIS VIEW
// ============================================================

function switchToCrisisView() {

    currentView = "crises";


    crisisViewButton.classList.add(
        "active"
    );


    countryViewButton.classList.remove(
        "active"
    );


    crisisFilters.style.display =
        "flex";


    crisisLegend.style.display =
        "block";


    countryLegend.style.display =
        "none";


    countryPanel.classList.remove(
        "open"
    );


    countryMarkers.forEach(
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
                selectedFilter === "all" ||
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
        "Search Conflict Atlas crises"
    );


    crisisCount.textContent =
        conflicts.length;


    counterLabel.textContent =
        "crises currently documented";


    clearSearch();

}


// ============================================================
// SWITCH TO COUNTRY VIEW
// ============================================================

function switchToCountryView() {

    currentView = "countries";


    countryViewButton.classList.add(
        "active"
    );


    crisisViewButton.classList.remove(
        "active"
    );


    crisisFilters.style.display =
        "none";


    crisisLegend.style.display =
        "none";


    countryLegend.style.display =
        "block";


    infoPanel.classList.remove(
        "open"
    );


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


    countryMarkers.forEach(
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
            searchTerm === ""
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

        } else {

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
        matches.length === 0
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

                        country.capital
                            .toLowerCase()
                            .includes(
                                searchTerm
                            ) ||

                        country.region
                            .toLowerCase()
                            .includes(
                                searchTerm
                            ) ||

                        country.subregion
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
        matches.length === 0
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
        subtitle;


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

    const selectedMarker =
        countryMarkers.find(
            item =>
                item.country.iso3 ===
                country.iso3
        );


    map.flyTo(
        country.coordinates,
        5,
        {
            animate: true,
            duration: 1.2
        }
    );


    openCountryPanel(
        country
    );


    if (
        selectedMarker
    ) {

        selectedMarker
            .marker
            .openTooltip();

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
