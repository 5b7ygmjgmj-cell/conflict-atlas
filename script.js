// ==========================================
// CONFLICT ATLAS — INTERACTIVE MAP
// ==========================================

// Create the world map
const map = L.map("map", {
    worldCopyJump: true,
    minZoom: 2
}).setView([20, 10], 2);

// Add the base world map
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

const infoPanel = document.getElementById("info-panel");
const closePanelButton = document.getElementById("close-panel");

const crisisCategory = document.getElementById("crisis-category");
const crisisName = document.getElementById("crisis-name");
const lastUpdated = document.getElementById("last-updated");

const crisisOverview = document.getElementById("crisis-overview");
const crisisActors = document.getElementById("crisis-actors");
const crisisImpact = document.getElementById("crisis-impact");

const crisisSources = document.getElementById("crisis-sources");
const crisisAid = document.getElementById("crisis-aid");


// ==========================================
// KEEP TRACK OF MAP MARKERS
// ==========================================

const conflictMarkers = [];


// ==========================================
// CREATE MAP MARKERS
// ==========================================

conflicts.forEach((conflict) => {

    const color =
        categoryColors[conflict.category] || "#dc3545";

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

    marker.bindTooltip(conflict.name);

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
// OPEN INFORMATION PANEL
// ==========================================

function openConflictPanel(conflict) {

    crisisCategory.textContent =
        categoryNames[conflict.category] || conflict.category;

    crisisName.textContent = conflict.name;

    lastUpdated.textContent =
        "Last updated: " + conflict.lastUpdated;

    crisisOverview.textContent =
        conflict.overview;

    crisisImpact.textContent =
        conflict.humanitarianImpact;


    // --------------------------
    // ACTORS
    // --------------------------

    crisisActors.innerHTML = "";

    conflict.actors.forEach((actorName) => {

        const actor = document.createElement("span");

        actor.className = "actor";
        actor.textContent = actorName;

        crisisActors.appendChild(actor);
    });


    // --------------------------
    // SOURCES
    // --------------------------

    crisisSources.innerHTML = "";

    conflict.sources.forEach((source) => {

        const link = document.createElement("a");

        link.textContent = source.name;

        if (source.url && source.url !== "#") {

            link.href = source.url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";

        } else {

            link.href = "#";

            link.addEventListener("click", (event) => {
                event.preventDefault();
            });
        }

        crisisSources.appendChild(link);
    });


    // --------------------------
    // HUMANITARIAN AID
    // --------------------------

    crisisAid.innerHTML = "";

    conflict.aid.forEach((organization) => {

        const link = document.createElement("a");

        link.textContent = organization.name;

        if (organization.url && organization.url !== "#") {

            link.href = organization.url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";

        } else {

            link.href = "#";

            link.addEventListener("click", (event) => {
                event.preventDefault();
            });
        }

        crisisAid.appendChild(link);
    });


    // Open panel
    infoPanel.classList.add("open");
}


// ==========================================
// CLOSE INFORMATION PANEL
// ==========================================

closePanelButton.addEventListener("click", () => {

    infoPanel.classList.remove("open");

});


// ==========================================
// FILTER BUTTONS
// ==========================================

const filterButtons =
    document.querySelectorAll(".filter");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Remove active state from other buttons
        filterButtons.forEach((otherButton) => {
            otherButton.classList.remove("active");
        });

        button.classList.add("active");

        const selectedFilter =
            button.dataset.filter;


        // Show/hide map markers
        conflictMarkers.forEach((item) => {

            const shouldShow =
                selectedFilter === "all" ||
                item.conflict.category === selectedFilter;

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

        // Close panel after changing filter
        infoPanel.classList.remove("open");

    });

});


// ==========================================
// KEYBOARD ACCESSIBILITY
// ==========================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        infoPanel.classList.remove("open");
    }

});
