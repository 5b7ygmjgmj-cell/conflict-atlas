// ==========================================
// CONFLICT ATLAS — MAP
// DOT-ONLY VERSION
// ==========================================


// ==========================================
// CREATE MAP
// ==========================================

const map = L.map("map", {
    worldCopyJump: true,
    minZoom: 2,
    maxZoom: 18
}).setView([20, 10], 2);


// ==========================================
// OPENSTREETMAP
// ==========================================

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 18,
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);


// ==========================================
// CATEGORY SETTINGS
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
// PAGE ELEMENTS
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
// CREATE DOT MARKERS
// ==========================================

const conflictMarkers = [];

conflicts.forEach((conflict) => {

    const color =
        categoryColors[conflict.category] || "#dc3545";

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

    marker.on("click", function () {
        openConflictPanel(conflict);
    });

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

    crisisCategory.textContent =
        categoryNames[conflict.category] ||
        conflict.category;

    crisisName.textContent =
        conflict.name;

    lastUpdated.textContent =
        "Last verified: " + conflict.lastUpdated;

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

        crisisCurrentSituation.textContent = "";

        currentSituationSection.style.display =
            "none";
    }


    // KEY ACTORS

    crisisActors.innerHTML = "";

    if (
        conflict.actors &&
        conflict.actors.length > 0
    ) {

        conflict.actors.forEach((actorName) => {

            const actor =
                document.createElement("span");

            actor.className = "actor";
            actor.textContent = actorName;

            crisisActors.appendChild(actor);

        });

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


    // SOURCES

    crisisSources.innerHTML = "";

    if (
        conflict.sources &&
        conflict.sources.length > 0
    ) {

        conflict.sources.forEach((source) => {

            const link =
                document.createElement("a");

            link.textContent = source.name;

            if (
                source.url &&
                source.url !== "#"
            ) {

                link.href = source.url;
                link.target = "_blank";
                link.rel = "noopener noreferrer";

            } else {

                link.href = "#";

                link.addEventListener(
                    "click",
                    function (event) {
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


    // HUMANITARIAN AID

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

                link.target = "_blank";
                link.rel = "noopener noreferrer";

            } else {

                link.href = "#";

                link.addEventListener(
                    "click",
                    function (event) {
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


    // OPEN PANEL

    infoPanel.classList.add("open");
}


// ==========================================
// CLOSE PANEL
// ==========================================

closePanelButton.addEventListener(
    "click",
    function () {

        infoPanel.classList.remove("open");

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
        function () {

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
// ESCAPE CLOSES PANEL
// ==========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            infoPanel.classList.remove("open");
        }

    }
);
