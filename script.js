// ==========================================
// ONE WORLD, ONE LIFE — CONFLICT ATLAS
// MAP + FILTERS + SEARCH + CRISIS COUNTER
// ==========================================


// ==========================================
// CREATE MAP
// ==========================================

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


// ==========================================
// CATEGORY COLORS
// ==========================================

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


// ==========================================
// INFORMATION PANEL ELEMENTS
// ==========================================

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
    document.getElementById("crisis-current-situation");

const currentSituationSection =
    document.getElementById("current-situation-section");

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


// ==========================================
// SEARCH ELEMENTS
// ==========================================

const crisisSearch =
    document.getElementById("crisis-search");

const searchResults =
    document.getElementById("search-results");

const crisisCount =
    document.getElementById("crisis-count");


// ==========================================
// AUTOMATIC CRISIS COUNTER
// ==========================================

if (crisisCount) {
    crisisCount.textContent = conflicts.length;
}


// ==========================================
// CREATE MAP MARKERS
// ==========================================

const conflictMarkers = [];


conflicts.forEach((conflict) => {

    const primaryCategory =
        conflict.primaryCategory ||
        conflict.categories[0];


    const color =
        categoryColors[primaryCategory] ||
        "#dc3545";


    const marker = L.circleMarker(
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
            openConflictPanel(conflict);
        }
    );


    marker.addTo(map);


    conflictMarkers.push({
        marker: marker,
        conflict: conflict
    });

});


// ==========================================
// OPEN INFORMATION PANEL
// ==========================================

function openConflictPanel(conflict) {

    const readableCategories =
        conflict.categories
            .map(
                (category) =>
                    categoryNames[category] ||
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


    // ======================================
    // OVERVIEW
    // ======================================

    crisisOverview.textContent =
        conflict.overview ||
        "Information not yet available.";


    // ======================================
    // CURRENT SITUATION
    // ======================================

    if (conflict.currentSituation) {

        crisisCurrentSituation.textContent =
            conflict.currentSituation;

        currentSituationSection.style.display =
            "block";

    } else {

        crisisCurrentSituation.textContent = "";

        currentSituationSection.style.display =
            "none";

    }


    // ======================================
    // KEY ACTORS
    // ======================================

    crisisActors.innerHTML = "";


    if (
        conflict.actors &&
        conflict.actors.length > 0
    ) {

        conflict.actors.forEach(
            (actorName) => {

                const actor =
                    document.createElement("span");

                actor.className = "actor";

                actor.textContent =
                    actorName;

                crisisActors.appendChild(actor);

            }
        );

    } else {

        crisisActors.textContent =
            "Actor information not yet available.";

    }


    // ======================================
    // HUMANITARIAN IMPACT
    // ======================================

    crisisImpact.textContent =
        conflict.humanitarianImpact ||
        "Humanitarian information not yet available.";


    // ======================================
    // TIMELINE
    // ======================================

    crisisTimeline.innerHTML = "";


    if (
        conflict.timeline &&
        conflict.timeline.length > 0
    ) {

        timelineSection.style.display =
            "block";


        conflict.timeline.forEach(
            (item) => {

                const timelineItem =
                    document.createElement("div");

                timelineItem.className =
                    "timeline-item";


                const timelineDate =
                    document.createElement("div");

                timelineDate.className =
                    "timeline-date";

                timelineDate.textContent =
                    item.date;


                const timelineEvent =
                    document.createElement("p");

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


    // ======================================
    // SOURCES
    // ======================================

    crisisSources.innerHTML = "";


    if (
        conflict.sources &&
        conflict.sources.length > 0
    ) {

        conflict.sources.forEach(
            (source) => {

                const link =
                    document.createElement("a");

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


    // ======================================
    // HUMANITARIAN AID
    // ======================================

    crisisAid.innerHTML = "";


    if (
        conflict.aid &&
        conflict.aid.length > 0
    ) {

        conflict.aid.forEach(
            (organization) => {

                const link =
                    document.createElement("a");

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


    // ======================================
    // OPEN PANEL
    // ======================================

    infoPanel.classList.add("open");

}


// ==========================================
// CLOSE INFORMATION PANEL
// ==========================================

closePanelButton.addEventListener(
    "click",
    function () {

        infoPanel.classList.remove("open");

    }
);


// ==========================================
// FILTER BUTTONS
// ==========================================

const filterButtons =
    document.querySelectorAll(".filter");


filterButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            function () {

                filterButtons.forEach(
                    (otherButton) => {

                        otherButton.classList.remove(
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
                    (item) => {

                        const categories =
                            item.conflict.categories ||
                            [];


                        const shouldShow =
                            selectedFilter === "all" ||
                            categories.includes(
                                selectedFilter
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


// ==========================================
// SEARCH SYSTEM
// ==========================================

if (crisisSearch) {

    crisisSearch.addEventListener(
        "input",
        function () {

            const searchTerm =
                crisisSearch.value
                    .trim()
                    .toLowerCase();


            searchResults.innerHTML = "";


            // No text entered
            if (searchTerm === "") {

                searchResults.style.display =
                    "none";

                return;

            }


            // Find matching crises
            const matches =
                conflicts.filter(
                    (conflict) => {

                        const nameMatch =
                            conflict.name
                                .toLowerCase()
                                .includes(
                                    searchTerm
                                );


                        const categoryMatch =
                            conflict.categories
                                .some(
                                    (category) => {

                                        const readableName =
                                            categoryNames[
                                                category
                                            ] || category;

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
                                    (actor) =>
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
                .slice(0, 8);


            // No matches
            if (matches.length === 0) {

                const noResult =
                    document.createElement(
                        "div"
                    );

                noResult.className =
                    "search-no-result";

                noResult.textContent =
                    "No matching crisis found.";

                searchResults.appendChild(
                    noResult
                );

                searchResults.style.display =
                    "block";

                return;

            }


            // Create search results
            matches.forEach(
                (conflict) => {

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
                        conflict.name;


                    const resultCategory =
                        document.createElement(
                            "span"
                        );

                    resultCategory.className =
                        "search-result-category";


                    const primaryCategory =
                        conflict.primaryCategory ||
                        conflict.categories[0];


                    resultCategory.textContent =
                        categoryNames[
                            primaryCategory
                        ] ||
                        primaryCategory;


                    result.appendChild(
                        resultName
                    );

                    result.appendChild(
                        resultCategory
                    );


                    result.addEventListener(
                        "click",
                        function () {

                            selectSearchResult(
                                conflict
                            );

                        }
                    );


                    searchResults.appendChild(
                        result
                    );

                }
            );


            searchResults.style.display =
                "block";

        }
    );

}


// ==========================================
// SELECT SEARCH RESULT
// ==========================================

function selectSearchResult(conflict) {

    // Reset filters to "All"
    filterButtons.forEach(
        (button) => {

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


    // Restore every marker
    conflictMarkers.forEach(
        (item) => {

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


    // Find selected marker
    const selectedMarker =
        conflictMarkers.find(
            (item) =>
                item.conflict.id ===
                conflict.id
        );


    // Zoom to selected crisis
    map.flyTo(
        conflict.coordinates,
        5,
        {
            animate: true,
            duration: 1.2
        }
    );


    // Open information panel
    openConflictPanel(
        conflict
    );


    // Open tooltip briefly
    if (selectedMarker) {

        selectedMarker.marker.openTooltip();

    }


    // Put selected name in search box
    crisisSearch.value =
        conflict.name;


    // Hide search results
    searchResults.innerHTML = "";

    searchResults.style.display =
        "none";

}


// ==========================================
// CLEAR SEARCH
// ==========================================

function clearSearch() {

    if (crisisSearch) {

        crisisSearch.value = "";

    }


    if (searchResults) {

        searchResults.innerHTML = "";

        searchResults.style.display =
            "none";

    }

}


// ==========================================
// CLICK OUTSIDE SEARCH
// ==========================================

document.addEventListener(
    "click",
    function (event) {

        if (
            crisisSearch &&
            searchResults &&
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


// ==========================================
// ESCAPE KEY
// ==========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            infoPanel.classList.remove(
                "open"
            );

            clearSearch();

        }

    }
);
