// ==========================================
// CONFLICT ATLAS — INTERACTIVE MAP
// ==========================================


// ==========================================
// CREATE WORLD MAP
// ==========================================

const map = L.map("map", {
    worldCopyJump: true,
    minZoom: 2,
    maxZoom: 10,
    zoomControl: true
}).setView([20, 10], 2);


// ==========================================
// DARK BASEMAP
// ==========================================

L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png",
    {
        attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
        subdomains: "abcd",
        maxZoom: 20
    }
).addTo(map);


// ==========================================
// LABEL LAYER
// ==========================================

L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png",
    {
        attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
        subdomains: "abcd",
        maxZoom: 20,
        pane: "shadowPane"
    }
).addTo(map);


// ==========================================
// CATEGORY COLORS
// ==========================================

const categoryColors = {
    conflict: "#e63946",
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
// STORE MAP MARKERS
// ==========================================

const conflictMarkers = [];


// ==========================================
// CREATE TEMPORARY CONFLICT MARKERS
// ==========================================

// These markers will eventually be replaced
// with geographic intensity overlays.

conflicts.forEach((conflict) => {

    const color =
        categoryColors[conflict.category] || "#e63946";

    const marker = L.circleMarker(
        conflict.coordinates,
        {
            radius: 8,
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

    marker.on("click", () => {
        openConflictPanel(conflict);
    });

    marker.addTo(map);

    conflictMarkers.push({
        marker: marker,
        conflict: conflict
    });

});


// ==========================================
// OPEN CONFLICT PANEL
// ==========================================

function openConflictPanel(conflict) {

    // CATEGORY

    crisisCategory.textContent =
        categoryNames[conflict.category] ||
        conflict.category;


    // NAME

    crisisName.textContent =
        conflict.name;


    // LAST VERIFIED

    lastUpdated.textContent =
        "Last verified: " + conflict.lastUpdated;


    // OVERVIEW

    crisisOverview.textContent =
        conflict.overview ||
        "Information not yet available.";


    // CURRENT SITUATION

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

        conflict.actors.forEach((actorName) => {

            const actor =
                document.createElement("span");

            actor.className = "actor";

            actor.textContent =
                actorName;

            crisisActors.appendChild(actor);

        });

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

        conflict.timeline.forEach((item) => {

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

        });

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

        conflict.sources.forEach((source) => {

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

            crisisSources.appendChild(link);

        });

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

        conflict.aid.forEach((organization) => {

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

            crisisAid.appendChild(link);

        });

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
    () => {

        infoPanel.classList.remove("open");

    }
);


// ==========================================
// FILTER BUTTONS
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

            button.classList.add("active");

            const selectedFilter =
                button.dataset.filter;


            conflictMarkers.forEach((item) => {

                const shouldShow =
                    selectedFilter === "all" ||
                    item.conflict.category ===
                    selectedFilter;

                if (shouldShow) {

                    if (!map.hasLayer(item.marker)) {

                        item.marker.addTo(map);

                    }

                } else {

                    if (map.hasLayer(item.marker)) {

                        map.removeLayer(item.marker);

                    }

                }

            });


            infoPanel.classList.remove("open");

        }
    );

});


// ==========================================
// ESCAPE KEY CLOSES PANEL
// ==========================================

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            infoPanel.classList.remove("open");

        }

    }
);
