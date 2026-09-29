// ==========================================
// CONFLICT ATLAS — INTERACTIVE MAP
// ==========================================


// ==========================================
// CREATE WORLD MAP
// ==========================================

const map = L.map("map", {
    worldCopyJump: true,
    minZoom: 2,
    maxZoom: 18,
    zoomControl: true
}).setView([20, 10], 2);


// ==========================================
// OPENSTREETMAP BASEMAP
// ==========================================

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
// HTML ELEMENTS
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
// MAP LAYERS
// ==========================================

const conflictMapLayers = [];


// ==========================================
// FIND CONFLICT
// ==========================================

function getConflict(id) {

    return conflicts.find(
        (conflict) => conflict.id === id
    );

}


// ==========================================
// TEMPORARY DOTS
// ==========================================

// Sudan is now represented geographically.
//
// Other conflicts remain dots until their
// geographic layers are created.

conflicts.forEach((conflict) => {

    if (conflict.id === "sudan") {
        return;
    }

    const color =
        categoryColors[conflict.category] ||
        "#dc3545";

    const marker = L.circleMarker(
        conflict.coordinates,
        {
            radius: 9,
            color: color,
            fillColor: color,
            fillOpacity: 0.8,
            weight: 2
        }
    );

    marker.bindTooltip(
        conflict.name,
        {
            direction: "top",
            offset: [0, -8]
        }
    );

    marker.on("click", () => {

        openConflictPanel(conflict);

    });

    marker.addTo(map);

    conflictMapLayers.push({
        layer: marker,
        category: conflict.category
    });

});


// ==========================================
// SUDAN CONFLICT LAYER
// ==========================================

const sudanConflict =
    getConflict("sudan");


const sudanHighlightedStates = new Set([

    "North Darfur",
    "South Darfur",
    "West Darfur",
    "Central Darfur",
    "East Darfur",

    "North Kordofan",
    "South Kordofan",
    "West Kordofan"

]);


// ==========================================
// OCHA SUDAN GEOGRAPHIC DATA
// ==========================================

const sudanGeoJSONURL =
    "https://gis.unocha.org/server/rest/services/Hosted/sudan_View_Severity_2026/FeatureServer/40/query?where=1%3D1&outFields=*&returnGeometry=true&f=geojson&outSR=4326";


fetch(sudanGeoJSONURL)

    .then((response) => {

        if (!response.ok) {

            throw new Error(
                "Sudan geographic data could not be loaded."
            );

        }

        return response.json();

    })

    .then((geoData) => {


        const sudanRegionLayer =
            L.geoJSON(
                geoData,
                {


                    // ==================================
                    // SELECT SUDAN REGIONS
                    // ==================================

                    filter: function(feature) {

                        const properties =
                            feature.properties || {};

                        const stateName =
                            properties.state_en;

                        return sudanHighlightedStates.has(
                            stateName
                        );

                    },


                    // ==================================
                    // SOFT CONFLICT OVERLAY
                    // ==================================

                    style: function() {

                        return {

                            // Almost invisible internal
                            // boundaries

                            color: "#dc3545",

                            weight: 0.35,

                            opacity: 0.25,


                            // Transparent conflict red

                            fillColor: "#dc3545",

                            fillOpacity: 0.32

                        };

                    },


                    // ==================================
                    // REGION INTERACTION
                    // ==================================

                    onEachFeature:
                        function(feature, layer) {

                            const properties =
                                feature.properties || {};

                            const stateName =
                                properties.state_en ||
                                "Sudan";


                            // --------------------------
                            // TOOLTIP
                            // --------------------------

                            layer.bindTooltip(
                                stateName +
                                " — War in Sudan",
                                {
                                    sticky: true
                                }
                            );


                            // --------------------------
                            // HOVER
                            // --------------------------

                            layer.on(
                                "mouseover",
                                function() {

                                    layer.setStyle({

                                        color: "#b51f32",

                                        weight: 0.7,

                                        opacity: 0.6,

                                        fillColor: "#dc3545",

                                        fillOpacity: 0.48

                                    });

                                }
                            );


                            // --------------------------
                            // MOUSE LEAVES REGION
                            // --------------------------

                            layer.on(
                                "mouseout",
                                function() {

                                    layer.setStyle({

                                        color: "#dc3545",

                                        weight: 0.35,

                                        opacity: 0.25,

                                        fillColor: "#dc3545",

                                        fillOpacity: 0.32

                                    });

                                }
                            );


                            // --------------------------
                            // CLICK
                            // --------------------------

                            layer.on(
                                "click",
                                function() {

                                    if (sudanConflict) {

                                        openConflictPanel(
                                            sudanConflict
                                        );

                                    }

                                }
                            );

                        }

                }
            );


        sudanRegionLayer.addTo(map);


        conflictMapLayers.push({

            layer: sudanRegionLayer,

            category: "conflict"

        });


        console.log(
            "Sudan geographic conflict layer loaded."
        );

    })


    // ======================================
    // FALLBACK
    // ======================================

    .catch((error) => {

        console.error(
            "Conflict Atlas Sudan layer error:",
            error
        );


        // If the geographic service fails,
        // display the original Sudan marker.

        if (sudanConflict) {

            const fallbackMarker =
                L.circleMarker(
                    sudanConflict.coordinates,
                    {
                        radius: 9,
                        color: "#dc3545",
                        fillColor: "#dc3545",
                        fillOpacity: 0.8,
                        weight: 2
                    }
                );


            fallbackMarker.bindTooltip(
                sudanConflict.name
            );


            fallbackMarker.on(
                "click",
                () => {

                    openConflictPanel(
                        sudanConflict
                    );

                }
            );


            fallbackMarker.addTo(map);


            conflictMapLayers.push({

                layer: fallbackMarker,

                category: "conflict"

            });

        }

    });


// ==========================================
// OPEN INFORMATION PANEL
// ==========================================

function openConflictPanel(conflict) {


    // ======================================
    // CATEGORY
    // ======================================

    crisisCategory.textContent =
        categoryNames[conflict.category] ||
        conflict.category;


    // ======================================
    // NAME
    // ======================================

    crisisName.textContent =
        conflict.name;


    // ======================================
    // LAST VERIFIED
    // ======================================

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


                if (
                    source.url &&
                    source.url !== "#"
                ) {

                    link.href =
                        source.url;

                    link.target =
                        "_blank";

                    link.rel =
                        "noopener noreferrer";

                } else {

                    link.href = "#";

                    link.addEventListener(
                        "click",
                        (event) => {

                            event.preventDefault();

                        }
                    );

                }


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


                if (
                    organization.url &&
                    organization.url !== "#"
                ) {

                    link.href =
                        organization.url;

                    link.target =
                        "_blank";

                    link.rel =
                        "noopener noreferrer";

                } else {

                    link.href = "#";

                    link.addEventListener(
                        "click",
                        (event) => {

                            event.preventDefault();

                        }
                    );

                }


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
// CLOSE PANEL
// ==========================================

closePanelButton.addEventListener(
    "click",
    () => {

        infoPanel.classList.remove(
            "open"
        );

    }
);


// ==========================================
// FILTERS
// ==========================================

const filterButtons =
    document.querySelectorAll(".filter");


filterButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {


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


            conflictMapLayers.forEach(
                (item) => {

                    const shouldShow =
                        selectedFilter === "all" ||
                        item.category ===
                        selectedFilter;


                    if (shouldShow) {

                        if (
                            !map.hasLayer(
                                item.layer
                            )
                        ) {

                            item.layer.addTo(
                                map
                            );

                        }

                    } else {

                        if (
                            map.hasLayer(
                                item.layer
                            )
                        ) {

                            map.removeLayer(
                                item.layer
                            );

                        }

                    }

                }
            );


            infoPanel.classList.remove(
                "open"
            );

        }
    );

});


// ==========================================
// ESCAPE CLOSES PANEL
// ==========================================

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            infoPanel.classList.remove(
                "open"
            );

        }

    }
);
