// ============================================================
// ONE WORLD, ONE LIFE — COUNTRY DATABASE
// Conflict Atlas
//
// Scope:
// 193 United Nations Member States
// + Holy See
// + State of Palestine
// = 195 country profiles
//
// IMPORTANT:
// Fast-changing information such as population estimates,
// political leadership, humanitarian statistics, displacement
// figures and crisis relationships should only be populated
// when they have been verified and sourced.
// ============================================================


// ============================================================
// COUNTRY DATA
//
// Format:
// [
//   name,
//   ISO-2,
//   ISO-3,
//   capital,
//   region,
//   subregion,
//   latitude,
//   longitude
// ]
// ============================================================

const countryData = [

    ["Afghanistan","AF","AFG","Kabul","Asia","Southern Asia",33,65],
    ["Albania","AL","ALB","Tirana","Europe","Southern Europe",41,20],
    ["Algeria","DZ","DZA","Algiers","Africa","Northern Africa",28,3],
    ["Andorra","AD","AND","Andorra la Vella","Europe","Southern Europe",42.5,1.5],
    ["Angola","AO","AGO","Luanda","Africa","Middle Africa",-12.5,18.5],
    ["Antigua and Barbuda","AG","ATG","Saint John's","Americas","Caribbean",17.05,-61.8],
    ["Argentina","AR","ARG","Buenos Aires","Americas","South America",-34,-64],
    ["Armenia","AM","ARM","Yerevan","Asia","Western Asia",40,45],
    ["Australia","AU","AUS","Canberra","Oceania","Australia and New Zealand",-27,133],
    ["Austria","AT","AUT","Vienna","Europe","Western Europe",47.33,13.33],
    ["Azerbaijan","AZ","AZE","Baku","Asia","Western Asia",40.5,47.5],

    ["Bahamas","BS","BHS","Nassau","Americas","Caribbean",24.25,-76],
    ["Bahrain","BH","BHR","Manama","Asia","Western Asia",26,50.55],
    ["Bangladesh","BD","BGD","Dhaka","Asia","Southern Asia",24,90],
    ["Barbados","BB","BRB","Bridgetown","Americas","Caribbean",13.17,-59.53],
    ["Belarus","BY","BLR","Minsk","Europe","Eastern Europe",53,28],
    ["Belgium","BE","BEL","Brussels","Europe","Western Europe",50.83,4],
    ["Belize","BZ","BLZ","Belmopan","Americas","Central America",17.25,-88.75],
    ["Benin","BJ","BEN","Porto-Novo","Africa","Western Africa",9.5,2.25],
    ["Bhutan","BT","BTN","Thimphu","Asia","Southern Asia",27.5,90.5],
    ["Bolivia","BO","BOL","Sucre","Americas","South America",-17,-65],
    ["Bosnia and Herzegovina","BA","BIH","Sarajevo","Europe","Southern Europe",44,18],
    ["Botswana","BW","BWA","Gaborone","Africa","Southern Africa",-22,24],
    ["Brazil","BR","BRA","Brasília","Americas","South America",-10,-55],
    ["Brunei","BN","BRN","Bandar Seri Begawan","Asia","South-Eastern Asia",4.5,114.67],
    ["Bulgaria","BG","BGR","Sofia","Europe","Eastern Europe",43,25],
    ["Burkina Faso","BF","BFA","Ouagadougou","Africa","Western Africa",13,-2],
    ["Burundi","BI","BDI","Gitega","Africa","Eastern Africa",-3.5,30],

    ["Cabo Verde","CV","CPV","Praia","Africa","Western Africa",16,-24],
    ["Cambodia","KH","KHM","Phnom Penh","Asia","South-Eastern Asia",13,105],
    ["Cameroon","CM","CMR","Yaoundé","Africa","Middle Africa",6,12],
    ["Canada","CA","CAN","Ottawa","Americas","Northern America",60,-95],
    ["Central African Republic","CF","CAF","Bangui","Africa","Middle Africa",7,21],
    ["Chad","TD","TCD","N'Djamena","Africa","Middle Africa",15,19],
    ["Chile","CL","CHL","Santiago","Americas","South America",-30,-71],
    ["China","CN","CHN","Beijing","Asia","Eastern Asia",35,105],
    ["Colombia","CO","COL","Bogotá","Americas","South America",4,-72],
    ["Comoros","KM","COM","Moroni","Africa","Eastern Africa",-12.17,44.25],
    ["Republic of the Congo","CG","COG","Brazzaville","Africa","Middle Africa",-1,15],
    ["Costa Rica","CR","CRI","San José","Americas","Central America",10,-84],
    ["Côte d'Ivoire","CI","CIV","Yamoussoukro","Africa","Western Africa",8,-5],
    ["Croatia","HR","HRV","Zagreb","Europe","Southern Europe",45.17,15.5],
    ["Cuba","CU","CUB","Havana","Americas","Caribbean",21.5,-80],
    ["Cyprus","CY","CYP","Nicosia","Asia","Western Asia",35,33],
    ["Czechia","CZ","CZE","Prague","Europe","Eastern Europe",49.75,15.5],

    ["North Korea","KP","PRK","Pyongyang","Asia","Eastern Asia",40,127],
    ["Democratic Republic of the Congo","CD","COD","Kinshasa","Africa","Middle Africa",0,25],
    ["Denmark","DK","DNK","Copenhagen","Europe","Northern Europe",56,10],
    ["Djibouti","DJ","DJI","Djibouti","Africa","Eastern Africa",11.5,43],
    ["Dominica","DM","DMA","Roseau","Americas","Caribbean",15.42,-61.33],
    ["Dominican Republic","DO","DOM","Santo Domingo","Americas","Caribbean",19,-70.67],

    ["Ecuador","EC","ECU","Quito","Americas","South America",-2,-77.5],
    ["Egypt","EG","EGY","Cairo","Africa","Northern Africa",27,30],
    ["El Salvador","SV","SLV","San Salvador","Americas","Central America",13.83,-88.92],
    ["Equatorial Guinea","GQ","GNQ","Ciudad de la Paz","Africa","Middle Africa",1.6,10.8],
    ["Eritrea","ER","ERI","Asmara","Africa","Eastern Africa",15,39],
    ["Estonia","EE","EST","Tallinn","Europe","Northern Europe",59,26],
    ["Eswatini","SZ","SWZ","Mbabane (administrative); Lobamba (royal and legislative)","Africa","Southern Africa",-26.5,31.5],
    ["Ethiopia","ET","ETH","Addis Ababa","Africa","Eastern Africa",8,38],

    ["Fiji","FJ","FJI","Suva","Oceania","Melanesia",-18,175],
    ["Finland","FI","FIN","Helsinki","Europe","Northern Europe",64,26],
    ["France","FR","FRA","Paris","Europe","Western Europe",46,2],

    ["Gabon","GA","GAB","Libreville","Africa","Middle Africa",-1,11.75],
    ["Gambia","GM","GMB","Banjul","Africa","Western Africa",13.47,-16.57],
    ["Georgia","GE","GEO","Tbilisi","Asia","Western Asia",42,43.5],
    ["Germany","DE","DEU","Berlin","Europe","Western Europe",51,9],
    ["Ghana","GH","GHA","Accra","Africa","Western Africa",8,-2],
    ["Greece","GR","GRC","Athens","Europe","Southern Europe",39,22],
    ["Grenada","GD","GRD","St. George's","Americas","Caribbean",12.12,-61.67],
    ["Guatemala","GT","GTM","Guatemala City","Americas","Central America",15.5,-90.25],
    ["Guinea","GN","GIN","Conakry","Africa","Western Africa",11,-10],
    ["Guinea-Bissau","GW","GNB","Bissau","Africa","Western Africa",12,-15],
    ["Guyana","GY","GUY","Georgetown","Americas","South America",5,-59],

    ["Haiti","HT","HTI","Port-au-Prince","Americas","Caribbean",19,-72.42],
    ["Honduras","HN","HND","Tegucigalpa","Americas","Central America",15,-86.5],
    ["Hungary","HU","HUN","Budapest","Europe","Eastern Europe",47,20],

    ["Iceland","IS","ISL","Reykjavík","Europe","Northern Europe",65,-18],
    ["India","IN","IND","New Delhi","Asia","Southern Asia",20,77],
    ["Indonesia","ID","IDN","Jakarta","Asia","South-Eastern Asia",-5,120],
    ["Iran","IR","IRN","Tehran","Asia","Southern Asia",32,53],
    ["Iraq","IQ","IRQ","Baghdad","Asia","Western Asia",33,44],
    ["Ireland","IE","IRL","Dublin","Europe","Northern Europe",53,-8],
    ["Israel","IL","ISR","Jerusalem","Asia","Western Asia",31.5,34.75],
    ["Italy","IT","ITA","Rome","Europe","Southern Europe",42.83,12.83],

    ["Jamaica","JM","JAM","Kingston","Americas","Caribbean",18.25,-77.5],
    ["Japan","JP","JPN","Tokyo","Asia","Eastern Asia",36,138],
    ["Jordan","JO","JOR","Amman","Asia","Western Asia",31,36],

    ["Kazakhstan","KZ","KAZ","Astana","Asia","Central Asia",48,68],
    ["Kenya","KE","KEN","Nairobi","Africa","Eastern Africa",1,38],
    ["Kiribati","KI","KIR","South Tarawa","Oceania","Micronesia",1.42,173],
    ["Kuwait","KW","KWT","Kuwait City","Asia","Western Asia",29.5,45.75],
    ["Kyrgyzstan","KG","KGZ","Bishkek","Asia","Central Asia",41,75],

    ["Laos","LA","LAO","Vientiane","Asia","South-Eastern Asia",18,105],
    ["Latvia","LV","LVA","Riga","Europe","Northern Europe",57,25],
    ["Lebanon","LB","LBN","Beirut","Asia","Western Asia",33.83,35.83],
    ["Lesotho","LS","LSO","Maseru","Africa","Southern Africa",-29.5,28.5],
    ["Liberia","LR","LBR","Monrovia","Africa","Western Africa",6.5,-9.5],
    ["Libya","LY","LBY","Tripoli","Africa","Northern Africa",25,17],
    ["Liechtenstein","LI","LIE","Vaduz","Europe","Western Europe",47.27,9.53],
    ["Lithuania","LT","LTU","Vilnius","Europe","Northern Europe",56,24],
    ["Luxembourg","LU","LUX","Luxembourg","Europe","Western Europe",49.75,6.17],

    ["Madagascar","MG","MDG","Antananarivo","Africa","Eastern Africa",-20,47],
    ["Malawi","MW","MWI","Lilongwe","Africa","Eastern Africa",-13.5,34],
    ["Malaysia","MY","MYS","Kuala Lumpur","Asia","South-Eastern Asia",2.5,112.5],
    ["Maldives","MV","MDV","Malé","Asia","Southern Asia",3.25,73],
    ["Mali","ML","MLI","Bamako","Africa","Western Africa",17,-4],
    ["Malta","MT","MLT","Valletta","Europe","Southern Europe",35.83,14.58],
    ["Marshall Islands","MH","MHL","Majuro","Oceania","Micronesia",9,168],
    ["Mauritania","MR","MRT","Nouakchott","Africa","Western Africa",20,-12],
    ["Mauritius","MU","MUS","Port Louis","Africa","Eastern Africa",-20.28,57.55],
    ["Mexico","MX","MEX","Mexico City","Americas","Central America",23,-102],
    ["Micronesia","FM","FSM","Palikir","Oceania","Micronesia",6.92,158.25],
    ["Monaco","MC","MCO","Monaco","Europe","Western Europe",43.73,7.4],
    ["Mongolia","MN","MNG","Ulaanbaatar","Asia","Eastern Asia",46,105],
    ["Montenegro","ME","MNE","Podgorica","Europe","Southern Europe",42.5,19.3],
    ["Morocco","MA","MAR","Rabat","Africa","Northern Africa",32,-5],
    ["Mozambique","MZ","MOZ","Maputo","Africa","Eastern Africa",-18.25,35],
    ["Myanmar","MM","MMR","Naypyidaw","Asia","South-Eastern Asia",22,98],

    ["Namibia","NA","NAM","Windhoek","Africa","Southern Africa",-22,17],
    ["Nauru","NR","NRU","No official capital; government offices are in Yaren District","Oceania","Micronesia",-0.53,166.92],
    ["Nepal","NP","NPL","Kathmandu","Asia","Southern Asia",28,84],
    ["Netherlands","NL","NLD","Amsterdam","Europe","Western Europe",52.5,5.75],
    ["New Zealand","NZ","NZL","Wellington","Oceania","Australia and New Zealand",-41,174],
    ["Nicaragua","NI","NIC","Managua","Americas","Central America",13,-85],
    ["Niger","NE","NER","Niamey","Africa","Western Africa",16,8],
    ["Nigeria","NG","NGA","Abuja","Africa","Western Africa",10,8],
    ["North Macedonia","MK","MKD","Skopje","Europe","Southern Europe",41.83,22],
    ["Norway","NO","NOR","Oslo","Europe","Northern Europe",62,10],

    ["Oman","OM","OMN","Muscat","Asia","Western Asia",21,57],

    ["Pakistan","PK","PAK","Islamabad","Asia","Southern Asia",30,70],
    ["Palau","PW","PLW","Ngerulmud","Oceania","Micronesia",7.5,134.5],
    ["Panama","PA","PAN","Panama City","Americas","Central America",9,-80],
    ["Papua New Guinea","PG","PNG","Port Moresby","Oceania","Melanesia",-6,147],
    ["Paraguay","PY","PRY","Asunción","Americas","South America",-23,-58],
    ["Peru","PE","PER","Lima","Americas","South America",-10,-76],
    ["Philippines","PH","PHL","Manila","Asia","South-Eastern Asia",13,122],
    ["Poland","PL","POL","Warsaw","Europe","Eastern Europe",52,20],
    ["Portugal","PT","PRT","Lisbon","Europe","Southern Europe",39.5,-8],

    ["Qatar","QA","QAT","Doha","Asia","Western Asia",25.5,51.25],

    ["South Korea","KR","KOR","Seoul","Asia","Eastern Asia",37,127.5],
    ["Moldova","MD","MDA","Chișinău","Europe","Eastern Europe",47,29],
    ["Romania","RO","ROU","Bucharest","Europe","Eastern Europe",46,25],
    ["Russia","RU","RUS","Moscow","Europe","Eastern Europe",60,100],
    ["Rwanda","RW","RWA","Kigali","Africa","Eastern Africa",-2,30],

    ["Saint Kitts and Nevis","KN","KNA","Basseterre","Americas","Caribbean",17.33,-62.75],
    ["Saint Lucia","LC","LCA","Castries","Americas","Caribbean",13.88,-60.97],
    ["Saint Vincent and the Grenadines","VC","VCT","Kingstown","Americas","Caribbean",13.25,-61.2],
    ["Samoa","WS","WSM","Apia","Oceania","Polynesia",-13.58,-172.33],
    ["San Marino","SM","SMR","San Marino","Europe","Southern Europe",43.77,12.42],
    ["Sao Tome and Principe","ST","STP","São Tomé","Africa","Middle Africa",1,7],
    ["Saudi Arabia","SA","SAU","Riyadh","Asia","Western Asia",25,45],
    ["Senegal","SN","SEN","Dakar","Africa","Western Africa",14,-14],
    ["Serbia","RS","SRB","Belgrade","Europe","Southern Europe",44,21],
    ["Seychelles","SC","SYC","Victoria","Africa","Eastern Africa",-4.58,55.67],
    ["Sierra Leone","SL","SLE","Freetown","Africa","Western Africa",8.5,-11.5],
    ["Singapore","SG","SGP","Singapore","Asia","South-Eastern Asia",1.37,103.8],
    ["Slovakia","SK","SVK","Bratislava","Europe","Eastern Europe",48.67,19.5],
    ["Slovenia","SI","SVN","Ljubljana","Europe","Southern Europe",46.12,14.82],
    ["Solomon Islands","SB","SLB","Honiara","Oceania","Melanesia",-8,159],
    ["Somalia","SO","SOM","Mogadishu","Africa","Eastern Africa",10,49],
    ["South Africa","ZA","ZAF","Pretoria (executive); Cape Town (legislative); Bloemfontein (judicial)","Africa","Southern Africa",-29,24],
    ["South Sudan","SS","SSD","Juba","Africa","Eastern Africa",7,30],
    ["Spain","ES","ESP","Madrid","Europe","Southern Europe",40,-4],
    ["Sri Lanka","LK","LKA","Sri Jayawardenepura Kotte (legislative); Colombo (executive and judicial)","Asia","Southern Asia",7,81],
    ["Sudan","SD","SDN","Khartoum","Africa","Northern Africa",15,30],
    ["Suriname","SR","SUR","Paramaribo","Americas","South America",4,-56],
    ["Sweden","SE","SWE","Stockholm","Europe","Northern Europe",62,15],
    ["Switzerland","CH","CHE","Bern (federal city)","Europe","Western Europe",47,8],
    ["Syria","SY","SYR","Damascus","Asia","Western Asia",35,38],

    ["Tajikistan","TJ","TJK","Dushanbe","Asia","Central Asia",39,71],
    ["Tanzania","TZ","TZA","Dodoma","Africa","Eastern Africa",-6,35],
    ["Thailand","TH","THA","Bangkok","Asia","South-Eastern Asia",15,100],
    ["Timor-Leste","TL","TLS","Dili","Asia","South-Eastern Asia",-8.83,125.92],
    ["Togo","TG","TGO","Lomé","Africa","Western Africa",8,1.17],
    ["Tonga","TO","TON","Nuku'alofa","Oceania","Polynesia",-20,-175],
    ["Trinidad and Tobago","TT","TTO","Port of Spain","Americas","Caribbean",11,-61],
    ["Tunisia","TN","TUN","Tunis","Africa","Northern Africa",34,9],
    ["Türkiye","TR","TUR","Ankara","Asia","Western Asia",39,35],
    ["Turkmenistan","TM","TKM","Ashgabat","Asia","Central Asia",40,60],
    ["Tuvalu","TV","TUV","Funafuti","Oceania","Polynesia",-8,178],

    ["Uganda","UG","UGA","Kampala","Africa","Eastern Africa",1,32],
    ["Ukraine","UA","UKR","Kyiv","Europe","Eastern Europe",49,32],
    ["United Arab Emirates","AE","ARE","Abu Dhabi","Asia","Western Asia",24,54],
    ["United Kingdom","GB","GBR","London","Europe","Northern Europe",54,-2],
    ["United States","US","USA","Washington, D.C.","Americas","Northern America",38,-97],
    ["Uruguay","UY","URY","Montevideo","Americas","South America",-33,-56],
    ["Uzbekistan","UZ","UZB","Tashkent","Asia","Central Asia",41,64],

    ["Vanuatu","VU","VUT","Port Vila","Oceania","Melanesia",-16,167],
    ["Venezuela","VE","VEN","Caracas","Americas","South America",8,-66],
    ["Vietnam","VN","VNM","Hanoi","Asia","South-Eastern Asia",16.17,107.83],

    ["Yemen","YE","YEM","Sana'a","Asia","Western Asia",15,48],

    ["Zambia","ZM","ZMB","Lusaka","Africa","Eastern Africa",-15,30],
    ["Zimbabwe","ZW","ZWE","Harare","Africa","Eastern Africa",-20,30],

    // UN NON-MEMBER OBSERVER STATES

    ["Holy See","VA","VAT","Vatican City","Europe","Southern Europe",41.9029,12.4534],

    [
        "State of Palestine",
        "PS",
        "PSE",
        "East Jerusalem (claimed); Ramallah administrative center",
        "Asia",
        "Western Asia",
        31.9,
        35.2
    ]

];


// ============================================================
// CRISIS RELATIONSHIP TYPES
// ============================================================

const crisisRelationshipTypes = {

    "directly-affected": {
        id: "directly-affected",
        label: "Directly Affected",
        description:
            "The crisis occurs within the country's territory or directly affects areas within the country."
    },

    "party-to-conflict": {
        id: "party-to-conflict",
        label: "Party to Conflict",
        description:
            "The country is directly participating as a party to an armed conflict."
    },

    "military-involvement": {
        id: "military-involvement",
        label: "Military Involvement",
        description:
            "The country has documented military involvement or military support connected to the crisis without being categorized here as a direct party to the conflict."
    },

    "humanitarian-refugee-impact": {
        id: "humanitarian-refugee-impact",
        label: "Humanitarian / Refugee Impact",
        description:
            "The country is significantly affected by refugees, displacement, humanitarian spillover or other major humanitarian consequences of the crisis."
    },

    "diplomatic-humanitarian-role": {
        id: "diplomatic-humanitarian-role",
        label: "Diplomatic / Humanitarian Role",
        description:
            "The country has a significant documented diplomatic, mediation or humanitarian-support role connected to the crisis."
    }

};


// ============================================================
// COUNTRY FLAG
// ============================================================

function countryFlag(iso2) {

    if (!iso2 || iso2.length !== 2) {
        return "🌍";
    }

    return iso2
        .toUpperCase()
        .replace(
            /./g,
            character =>
                String.fromCodePoint(
                    127397 +
                    character.charCodeAt()
                )
        );
}


// ============================================================
// COUNTRY ID
// ============================================================

function createCountryId(name) {

    return name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}


// ============================================================
// DEFAULT SOURCE LIBRARY
// ============================================================

const defaultCountrySources = [

    {
        id: "un-member-states",
        name: "United Nations — Member States",
        url: "https://www.un.org/about-us/member-states",
        type: "international-organization"
    },

    {
        id: "un-m49",
        name: "United Nations Statistics Division — M49",
        url: "https://unstats.un.org/unsd/methodology/m49/",
        type: "international-organization"
    },

    {
        id: "world-bank-country-data",
        name: "World Bank — Country Data",
        url: "https://data.worldbank.org/country",
        type: "international-organization"
    }

];


// ============================================================
// CREATE THE 195 COUNTRY PROFILE OBJECTS
// ============================================================

const countries = countryData.map(
    (country, index) => {

        const [
            name,
            iso2,
            iso3,
            capital,
            region,
            subregion,
            latitude,
            longitude
        ] = country;

        return {

            id: createCountryId(name),

            profileNumber: index + 1,

            name: name,

            flag: countryFlag(iso2),

            iso2: iso2,

            iso3: iso3,

            coordinates: [
                latitude,
                longitude
            ],

            atAGlance: {
                capital: capital,
                region: region,
                subregion: subregion,
                population: null,
                populationYear: null,
                areaKm2: null,
                languages: [],
                currency: null
            },

            // Current-script compatibility
            capital: capital,
            region: region,
            subregion: subregion,

            overview:
                `${name} is a country in ${subregion}, ${region}. ` +
                `Its capital is ${capital}.`,

            countryNote: null,

            government: {

                governmentType: null,

                headOfState: {
                    name: null,
                    title: null,
                    asOf: null,
                    sourceIds: []
                },

                headOfGovernment: {
                    name: null,
                    title: null,
                    asOf: null,
                    sourceIds: []
                },

                unStatus:
                    (
                        iso3 === "VAT" ||
                        iso3 === "PSE"
                    )
                        ? "United Nations non-member observer state"
                        : "United Nations member state",

                internationalOrganizations: []

            },

            relatedCrises: [],

            // Legacy compatibility
            crisisIds: [],

            humanitarian: {
                summary: null,
                metrics: [],
                asOf: null,
                sourceIds: []
            },

            humanitarianSnapshot: null,

            displacement: {
                summary: null,
                refugeesHosted: null,
                refugeesFromCountry: null,
                internallyDisplaced: null,
                asylumSeekers: null,
                asOf: null,
                sourceIds: []
            },

            displacementSnapshot: null,

            timeline: [],

            organizations: [],

            sources:
                defaultCountrySources.map(
                    source => ({
                        ...source
                    })
                ),

            lastVerified:
                "September 30, 2026"

        };

    }
);


// ============================================================
// COUNTRY LOOKUP HELPERS
// ============================================================

function getCountryByIso3(iso3) {

    if (!iso3) {
        return null;
    }

    return countries.find(
        country =>
            country.iso3 ===
            iso3.toUpperCase()
    ) || null;
}


function getCountryByIso2(iso2) {

    if (!iso2) {
        return null;
    }

    return countries.find(
        country =>
            country.iso2 ===
            iso2.toUpperCase()
    ) || null;
}


function getCountryById(id) {

    if (!id) {
        return null;
    }

    return countries.find(
        country =>
            country.id === id
    ) || null;
}


// ============================================================
// SAFE COUNTRY UPDATE HELPER
// ============================================================

function updateCountryProfile(
    iso3,
    updates
) {

    const country =
        getCountryByIso3(iso3);

    if (!country) {

        console.warn(
            `Unable to update country profile: ${iso3} was not found.`
        );

        return;
    }

    Object.keys(updates).forEach(
        key => {

            const incomingValue =
                updates[key];

            const currentValue =
                country[key];

            if (
                incomingValue &&
                typeof incomingValue === "object" &&
                !Array.isArray(incomingValue) &&
                currentValue &&
                typeof currentValue === "object" &&
                !Array.isArray(currentValue)
            ) {

                country[key] = {
                    ...currentValue,
                    ...incomingValue
                };

            } else {

                country[key] =
                    incomingValue;

            }

        }
    );

}


// ============================================================
// SOURCE HELPER
// ============================================================

function addCountrySource(
    iso3,
    source
) {

    const country =
        getCountryByIso3(iso3);

    if (!country || !source) {
        return;
    }

    const alreadyExists =
        country.sources.some(
            existing =>
                existing.id === source.id
        );

    if (!alreadyExists) {

        country.sources.push(
            source
        );

    }

}


// ============================================================
// CRISIS RELATIONSHIP HELPER
// ============================================================

function addCountryCrisisRelationship(
    iso3,
    crisisId,
    relationships,
    explanation,
    asOf,
    sourceIds = []
) {

    const country =
        getCountryByIso3(iso3);

    if (!country) {

        console.warn(
            `Unable to add crisis relationship: ${iso3} was not found.`
        );

        return;
    }

    if (
        !crisisId ||
        !Array.isArray(relationships) ||
        relationships.length === 0
    ) {

        console.warn(
            `Invalid crisis relationship for ${iso3}.`
        );

        return;
    }

    const validRelationships =
        relationships.filter(
            relationship =>
                crisisRelationshipTypes[
                    relationship
                ]
        );

    if (
        validRelationships.length !==
        relationships.length
    ) {

        console.warn(
            `One or more invalid crisis relationship types were supplied for ${iso3}.`
        );

        return;
    }

    const existingRelationship =
        country.relatedCrises.find(
            item =>
                item.crisisId ===
                crisisId
        );

    if (existingRelationship) {

        existingRelationship.relationships =
            Array.from(
                new Set([
                    ...existingRelationship.relationships,
                    ...validRelationships
                ])
            );

        if (explanation) {
            existingRelationship.explanation =
                explanation;
        }

        if (asOf) {
            existingRelationship.asOf =
                asOf;
        }

        existingRelationship.sourceIds =
            Array.from(
                new Set([
                    ...existingRelationship.sourceIds,
                    ...sourceIds
                ])
            );

    } else {

        country.relatedCrises.push({

            crisisId: crisisId,

            relationships:
                validRelationships,

            explanation:
                explanation || null,

            asOf:
                asOf || null,

            sourceIds:
                sourceIds

        });

    }

    // Maintain old crisisIds for compatibility.
    if (
        !country.crisisIds.includes(
            crisisId
        )
    ) {

        country.crisisIds.push(
            crisisId
        );

    }

}


// ============================================================
// SPECIAL PROFILE NOTES
// ============================================================

// Bolivia
updateCountryProfile(
    "BOL",
    {
        countryNote:
            "Sucre is Bolivia's constitutional capital. La Paz is the seat of government."
    }
);


// Burundi
updateCountryProfile(
    "BDI",
    {
        countryNote:
            "Gitega is the political capital of Burundi. Bujumbura remains the country's largest city and principal economic center."
    }
);


// Côte d'Ivoire
updateCountryProfile(
    "CIV",
    {
        countryNote:
            "Yamoussoukro is the official capital. Abidjan is the country's largest city and major economic and administrative center."
    }
);


// Equatorial Guinea
updateCountryProfile(
    "GNQ",
    {
        countryNote:
            "Ciudad de la Paz was proclaimed the capital of Equatorial Guinea in January 2026, replacing Malabo."
    }
);


// Eswatini
updateCountryProfile(
    "SWZ",
    {
        countryNote:
            "Eswatini has two principal capitals: Mbabane serves as the administrative capital, while Lobamba is the royal and legislative capital."
    }
);


// Indonesia
updateCountryProfile(
    "IDN",
    {
        countryNote:
            "Indonesia is developing Nusantara as its future capital. As of September 2026, the legal transfer from Jakarta depends on the required presidential decree."
    }
);


// Israel
updateCountryProfile(
    "ISR",
    {
        countryNote:
            "Israel designates Jerusalem as its capital. The city's status is internationally disputed and is a central issue in the Israeli-Palestinian conflict."
    }
);


// Malaysia
updateCountryProfile(
    "MYS",
    {
        countryNote:
            "Kuala Lumpur is Malaysia's national capital. Putrajaya is the federal administrative center."
    }
);


// Nauru
updateCountryProfile(
    "NRU",
    {
        countryNote:
            "Nauru has no officially designated capital. Government offices are located in Yaren District."
    }
);


// Netherlands
updateCountryProfile(
    "NLD",
    {
        countryNote:
            "Amsterdam is the constitutional capital of the Netherlands. The government, parliament and Supreme Court are based in The Hague."
    }
);


// South Africa
updateCountryProfile(
    "ZAF",
    {
        countryNote:
            "South Africa distributes national capital functions among Pretoria (executive), Cape Town (legislative) and Bloemfontein (judicial)."
    }
);


// Sri Lanka
updateCountryProfile(
    "LKA",
    {
        countryNote:
            "Sri Jayawardenepura Kotte is Sri Lanka's legislative capital. Colombo remains a major executive, judicial and commercial center."
    }
);


// State of Palestine
updateCountryProfile(
    "PSE",
    {
        countryNote:
            "The State of Palestine claims East Jerusalem as its capital. Ramallah serves as the principal administrative center of the Palestinian Authority. The status of Jerusalem and the Palestinian territories remains subject to international dispute and diplomacy."
    }
);


// Switzerland
updateCountryProfile(
    "CHE",
    {
        countryNote:
            "Switzerland has no constitutionally designated capital. Bern functions as the federal city and seat of the federal government."
    }
);


// Tanzania
updateCountryProfile(
    "TZA",
    {
        countryNote:
            "Dodoma is Tanzania's capital. Dar es Salaam remains the country's largest city and a major commercial center."
    }
);


// ============================================================
// VERIFIED CRISIS RELATIONSHIPS
// PART 2 CONTINUES DIRECTLY FROM HERE
// ============================================================
// ============================================================
// VERIFIED CRISIS RELATIONSHIPS
// ============================================================
//
// These relationships connect the 32 Conflict Atlas entries
// to country profiles.
//
// IMPORTANT:
// A relationship is added only when the country is directly
// affected or has a significant documented connection.
//
// ============================================================

const COUNTRY_CRISIS_VERIFIED =
    "September 30, 2026";


// ============================================================
// 1. WAR IN UKRAINE
// ============================================================

addCountryCrisisRelationship(
    "UKR",
    "ukraine",
    [
        "directly-affected",
        "party-to-conflict"
    ],
    "Ukraine is directly affected by and is a party to the ongoing armed conflict.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "RUS",
    "ukraine",
    [
        "party-to-conflict"
    ],
    "Russia is a direct party to the armed conflict against Ukraine.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 2. WAR IN SUDAN
// ============================================================

addCountryCrisisRelationship(
    "SDN",
    "sudan",
    [
        "directly-affected"
    ],
    "Sudan is the location of the armed conflict between the Sudanese Armed Forces and the Rapid Support Forces.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "TCD",
    "sudan",
    [
        "humanitarian-refugee-impact"
    ],
    "Chad hosts large numbers of people who have fled the war in neighboring Sudan.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "EGY",
    "sudan",
    [
        "humanitarian-refugee-impact"
    ],
    "Egypt has received large numbers of people fleeing the war in Sudan.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "ETH",
    "sudan",
    [
        "humanitarian-refugee-impact"
    ],
    "Ethiopia is one of the countries affected by cross-border displacement from the war in Sudan.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "LBY",
    "sudan",
    [
        "humanitarian-refugee-impact"
    ],
    "Libya is one of the countries affected by displacement from the war in Sudan.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "SSD",
    "sudan",
    [
        "humanitarian-refugee-impact"
    ],
    "South Sudan has received refugees and returning South Sudanese fleeing the war in Sudan.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "CAF",
    "sudan",
    [
        "humanitarian-refugee-impact"
    ],
    "The Central African Republic has received people fleeing the war in neighboring Sudan.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "UGA",
    "sudan",
    [
        "humanitarian-refugee-impact"
    ],
    "Uganda is among the countries affected by displacement associated with the war in Sudan.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 3. ISRAEL–GAZA CONFLICT
// ============================================================

addCountryCrisisRelationship(
    "ISR",
    "gaza-israel",
    [
        "directly-affected",
        "party-to-conflict"
    ],
    "Israel is directly affected by and is a party to the Israel–Gaza conflict.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "PSE",
    "gaza-israel",
    [
        "directly-affected"
    ],
    "The Gaza Strip, part of the Palestinian territories, is a principal location of the conflict and severe humanitarian crisis.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 4. EASTERN DR CONGO CONFLICT
// ============================================================

addCountryCrisisRelationship(
    "COD",
    "drc",
    [
        "directly-affected"
    ],
    "The armed conflict and associated humanitarian emergency are concentrated in eastern Democratic Republic of the Congo.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 5. MYANMAR CIVIL CONFLICT
// ============================================================

addCountryCrisisRelationship(
    "MMR",
    "myanmar",
    [
        "directly-affected"
    ],
    "Myanmar is directly affected by nationwide armed conflict involving the military, ethnic armed organizations and resistance forces.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 6. YEMEN HUMANITARIAN CRISIS
// ============================================================

addCountryCrisisRelationship(
    "YEM",
    "yemen",
    [
        "directly-affected"
    ],
    "Yemen is directly affected by the prolonged humanitarian emergency associated with conflict, displacement, economic deterioration and food insecurity.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 7. AFGHANISTAN HUMANITARIAN CRISIS
// ============================================================

addCountryCrisisRelationship(
    "AFG",
    "afghanistan",
    [
        "directly-affected"
    ],
    "Afghanistan is directly affected by widespread humanitarian needs, displacement, economic hardship and large-scale return movements.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 8. SYRIA HUMANITARIAN CRISIS
// ============================================================

addCountryCrisisRelationship(
    "SYR",
    "syria",
    [
        "directly-affected"
    ],
    "Syria remains directly affected by extensive humanitarian and displacement needs following years of armed conflict.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "TUR",
    "syria",
    [
        "humanitarian-refugee-impact"
    ],
    "Türkiye continues to host a large population of refugees from Syria.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "LBN",
    "syria",
    [
        "humanitarian-refugee-impact"
    ],
    "Lebanon continues to host a large population of refugees from Syria.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "JOR",
    "syria",
    [
        "humanitarian-refugee-impact"
    ],
    "Jordan continues to host a substantial population of refugees from Syria.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "IRQ",
    "syria",
    [
        "humanitarian-refugee-impact"
    ],
    "Iraq continues to host refugees from Syria.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "EGY",
    "syria",
    [
        "humanitarian-refugee-impact"
    ],
    "Egypt continues to host refugees from Syria.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 9. SOMALIA HUMANITARIAN AND DISPLACEMENT CRISIS
// ============================================================

addCountryCrisisRelationship(
    "SOM",
    "somalia",
    [
        "directly-affected"
    ],
    "Somalia is directly affected by conflict, insecurity, climate shocks and large-scale internal displacement.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 10. SOUTH SUDAN HUMANITARIAN CRISIS
// ============================================================

addCountryCrisisRelationship(
    "SSD",
    "south-sudan",
    [
        "directly-affected"
    ],
    "South Sudan is directly affected by displacement, insecurity, food insecurity and other humanitarian pressures.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "UGA",
    "south-sudan",
    [
        "humanitarian-refugee-impact"
    ],
    "Uganda hosts a large population of refugees from South Sudan.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "ETH",
    "south-sudan",
    [
        "humanitarian-refugee-impact"
    ],
    "Ethiopia hosts refugees from South Sudan.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "KEN",
    "south-sudan",
    [
        "humanitarian-refugee-impact"
    ],
    "Kenya hosts refugees from South Sudan.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "COD",
    "south-sudan",
    [
        "humanitarian-refugee-impact"
    ],
    "The Democratic Republic of the Congo hosts refugees from South Sudan.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "SDN",
    "south-sudan",
    [
        "humanitarian-refugee-impact"
    ],
    "Sudan has historically hosted a substantial population of refugees from South Sudan.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 11. HAITI HUMANITARIAN AND DISPLACEMENT CRISIS
// ============================================================

addCountryCrisisRelationship(
    "HTI",
    "haiti",
    [
        "directly-affected"
    ],
    "Haiti is directly affected by armed-group violence, insecurity, displacement, food insecurity and disruption of essential services.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 12. CENTRAL SAHEL DISPLACEMENT CRISIS
// ============================================================

addCountryCrisisRelationship(
    "BFA",
    "central-sahel",
    [
        "directly-affected"
    ],
    "Burkina Faso is one of the principal countries affected by the Central Sahel displacement and protection crisis.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "MLI",
    "central-sahel",
    [
        "directly-affected"
    ],
    "Mali is one of the principal countries affected by the Central Sahel displacement and protection crisis.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "NER",
    "central-sahel",
    [
        "directly-affected"
    ],
    "Niger is one of the principal countries affected by the Central Sahel displacement and protection crisis.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 13. ETHIOPIA DISPLACEMENT CRISIS
// ============================================================

addCountryCrisisRelationship(
    "ETH",
    "ethiopia",
    [
        "directly-affected"
    ],
    "Ethiopia is directly affected by internal displacement associated with conflict, localized insecurity and climate-related shocks.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 14. NORTHERN MOZAMBIQUE DISPLACEMENT CRISIS
// ============================================================

addCountryCrisisRelationship(
    "MOZ",
    "mozambique-displacement",
    [
        "directly-affected"
    ],
    "Northern Mozambique is directly affected by displacement associated with insurgent violence and insecurity.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 15. CENTRAL AFRICAN REPUBLIC DISPLACEMENT CRISIS
// ============================================================

addCountryCrisisRelationship(
    "CAF",
    "car",
    [
        "directly-affected"
    ],
    "The Central African Republic is directly affected by a protracted humanitarian and displacement crisis.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "CMR",
    "car",
    [
        "humanitarian-refugee-impact"
    ],
    "Cameroon hosts refugees from the Central African Republic.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "TCD",
    "car",
    [
        "humanitarian-refugee-impact"
    ],
    "Chad hosts refugees from the Central African Republic.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "COD",
    "car",
    [
        "humanitarian-refugee-impact"
    ],
    "The Democratic Republic of the Congo hosts refugees from the Central African Republic.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "COG",
    "car",
    [
        "humanitarian-refugee-impact"
    ],
    "The Republic of the Congo hosts refugees from the Central African Republic.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 16. PHILIPPINES MONSOON FLOODS
// ============================================================

addCountryCrisisRelationship(
    "PHL",
    "philippines-floods-2026",
    [
        "directly-affected"
    ],
    "The Philippines was directly affected by the 2026 monsoon flooding recorded in Conflict Atlas.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 17. NEPAL FLASH FLOODS
// ============================================================

addCountryCrisisRelationship(
    "NPL",
    "nepal-floods-2026",
    [
        "directly-affected"
    ],
    "Nepal was directly affected by the August 2026 flash floods recorded in Conflict Atlas.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 18. COLOMBIA EARTHQUAKE
// ============================================================

addCountryCrisisRelationship(
    "COL",
    "colombia-earthquake-2026",
    [
        "directly-affected"
    ],
    "Colombia was directly affected by the August 2026 earthquake recorded in Conflict Atlas.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 19. MADAGASCAR CYCLONES
// ============================================================

addCountryCrisisRelationship(
    "MDG",
    "madagascar-cyclones-2026",
    [
        "directly-affected"
    ],
    "Madagascar was directly affected by the 2026 cyclones recorded in Conflict Atlas.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 20. MOZAMBIQUE FLOODS
// ============================================================

addCountryCrisisRelationship(
    "MOZ",
    "mozambique-floods-2026",
    [
        "directly-affected"
    ],
    "Mozambique was directly affected by severe flooding during 2026.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 21. LEBANON CONFLICT
// ============================================================

addCountryCrisisRelationship(
    "LBN",
    "lebanon-2026",
    [
        "directly-affected"
    ],
    "Lebanon is directly affected by the 2026 escalation of hostilities and associated displacement and humanitarian needs.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "ISR",
    "lebanon-2026",
    [
        "party-to-conflict"
    ],
    "Israel is a direct party to the hostilities represented by the Lebanon conflict entry.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "SYR",
    "lebanon-2026",
    [
        "humanitarian-refugee-impact"
    ],
    "Syria has received large numbers of people crossing from Lebanon during the 2026 escalation, including Lebanese refugees and returning Syrians.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 22. IRAN CONFLICT AND DISPLACEMENT EMERGENCY
// ============================================================

addCountryCrisisRelationship(
    "IRN",
    "iran-2026",
    [
        "directly-affected",
        "party-to-conflict"
    ],
    "Iran is directly affected by and is a party to the regional military escalation represented by this Conflict Atlas entry.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 23. COLOMBIA INTERNAL ARMED CONFLICTS
// ============================================================

addCountryCrisisRelationship(
    "COL",
    "colombia-conflict",
    [
        "directly-affected"
    ],
    "Colombia is directly affected by continuing internal armed conflicts involving state forces and non-state armed organizations.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 24. CHAD HUMANITARIAN CRISIS
// ============================================================

addCountryCrisisRelationship(
    "TCD",
    "chad-humanitarian",
    [
        "directly-affected"
    ],
    "Chad is directly affected by a humanitarian and displacement emergency involving refugee arrivals, internal displacement and pressure on essential services.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 25. CAMEROON HUMANITARIAN CRISIS
// ============================================================

addCountryCrisisRelationship(
    "CMR",
    "cameroon-humanitarian",
    [
        "directly-affected"
    ],
    "Cameroon is directly affected by overlapping insecurity, displacement and food-insecurity pressures.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 26. KENYA FOOD INSECURITY CRISIS
// ============================================================

addCountryCrisisRelationship(
    "KEN",
    "kenya-humanitarian",
    [
        "directly-affected"
    ],
    "Kenya is directly affected by the food-insecurity and nutrition crisis represented by this Conflict Atlas entry.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 27. VENEZUELA REGIONAL DISPLACEMENT CRISIS
// ============================================================

addCountryCrisisRelationship(
    "VEN",
    "venezuela-displacement",
    [
        "directly-affected"
    ],
    "Venezuela is the country of origin for the large regional displacement situation represented by this Conflict Atlas entry.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 28. NIGERIA DISPLACEMENT CRISIS
// ============================================================

addCountryCrisisRelationship(
    "NGA",
    "nigeria-displacement",
    [
        "directly-affected"
    ],
    "Nigeria is directly affected by large-scale displacement associated with armed conflict, insecurity, communal violence and disasters.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 29. ROHINGYA REFUGEE CRISIS IN BANGLADESH
// ============================================================

addCountryCrisisRelationship(
    "BGD",
    "rohingya-bangladesh",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "Bangladesh hosts the large Rohingya refugee population represented by this Conflict Atlas crisis entry.",
    COUNTRY_CRISIS_VERIFIED
);

addCountryCrisisRelationship(
    "MMR",
    "rohingya-bangladesh",
    [
        "humanitarian-refugee-impact"
    ],
    "Myanmar is the country of origin of the Rohingya refugee population represented by this crisis entry.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 30. VENEZUELA EARTHQUAKE
// ============================================================

addCountryCrisisRelationship(
    "VEN",
    "venezuela-earthquake-2026",
    [
        "directly-affected"
    ],
    "Venezuela was directly affected by the June 2026 earthquake emergency recorded in Conflict Atlas.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 31. VIET NAM FLOODS
// ============================================================

addCountryCrisisRelationship(
    "VNM",
    "vietnam-floods-2026",
    [
        "directly-affected"
    ],
    "Viet Nam was directly affected by the September 2026 flooding recorded in Conflict Atlas.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// 32. LIBYA FLASH FLOODS
// ============================================================

addCountryCrisisRelationship(
    "LBY",
    "libya-floods-2026",
    [
        "directly-affected"
    ],
    "Libya was directly affected by the September 2026 flash-flood emergency recorded in Conflict Atlas.",
    COUNTRY_CRISIS_VERIFIED
);


// ============================================================
// DATABASE VALIDATION
// ============================================================

console.log(
    `Conflict Atlas loaded ${countries.length} country profiles.`
);


if (countries.length !== 195) {

    console.warn(
        `Country database should contain 195 profiles, but currently contains ${countries.length}.`
    );

}


// ============================================================
// DUPLICATE ISO CHECK
// ============================================================

const countryIso3Codes =
    countries.map(
        country =>
            country.iso3
    );


const duplicateIso3Codes =
    countryIso3Codes.filter(
        (iso3, index) =>
            countryIso3Codes.indexOf(
                iso3
            ) !== index
    );


if (duplicateIso3Codes.length > 0) {

    console.warn(
        "Duplicate ISO-3 country codes detected:",
        duplicateIso3Codes
    );

}


// ============================================================
// CRISIS RELATIONSHIP VALIDATION
// ============================================================

countries.forEach(
    country => {

        country.relatedCrises.forEach(
            relationship => {

                relationship.relationships.forEach(
                    relationshipType => {

                        if (
                            !crisisRelationshipTypes[
                                relationshipType
                            ]
                        ) {

                            console.warn(
                                `Invalid crisis relationship type "${relationshipType}" in ${country.name}.`
                            );

                        }

                    }
                );

            }
        );

    }
);


// ============================================================
// CRISIS ID VALIDATION
//
// Checks that every country relationship points to a real
// crisis in conflicts.js.
// ============================================================

if (
    typeof conflicts !== "undefined" &&
    Array.isArray(conflicts)
) {

    const validCrisisIds =
        new Set(
            conflicts.map(
                crisis =>
                    crisis.id
            )
        );

    countries.forEach(
        country => {

            country.relatedCrises.forEach(
                relationship => {

                    if (
                        !validCrisisIds.has(
                            relationship.crisisId
                        )
                    ) {

                        console.warn(
                            `Unknown crisis ID "${relationship.crisisId}" in ${country.name}.`
                        );

                    }

                }
            );

        }
    );

}


// ============================================================
// RELATIONSHIP SUMMARY
// ============================================================

const countriesWithRelatedCrises =
    countries.filter(
        country =>
            country.relatedCrises.length > 0
    );


const totalCountryCrisisRelationships =
    countries.reduce(
        (total, country) =>
            total +
            country.relatedCrises.length,
        0
    );


console.log(
    `Conflict Atlas connected ${countriesWithRelatedCrises.length} countries to current crisis entries.`
);

console.log(
    `Conflict Atlas loaded ${totalCountryCrisisRelationships} country-to-crisis relationships.`
);


// ============================================================
// DATABASE READY
// ============================================================

console.log(
    "Conflict Atlas country database architecture ready."
);

console.log(
    "Available crisis relationship types:",
    Object.values(
        crisisRelationshipTypes
    ).map(
        type =>
            type.label
    )
);
