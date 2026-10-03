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
    ["Saint Lucia","LC","LCA","Castries","Americas","Caribbean",13.88,-61.13],
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
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .replace(
            /[^a-z0-9]+/g,
            "-"
        )
        .replace(
            /^-|-$/g,
            ""
        );
}


// ============================================================
// DEFAULT SOURCE LIBRARY
// ============================================================

const defaultCountrySources = [

    {
        id: "un-member-states",
        name:
            "United Nations — Member States",
        url:
            "https://www.un.org/about-us/member-states",
        type:
            "international-organization"
    },

    {
        id: "un-m49",
        name:
            "United Nations Statistics Division — M49",
        url:
            "https://unstats.un.org/unsd/methodology/m49/",
        type:
            "international-organization"
    },

    {
        id: "world-bank-country-data",
        name:
            "World Bank — Country Data",
        url:
            "https://data.worldbank.org/country",
        type:
            "international-organization"
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

            id:
                createCountryId(name),

            profileNumber:
                index + 1,

            name:
                name,

            flag:
                countryFlag(iso2),

            iso2:
                iso2,

            iso3:
                iso3,

            coordinates: [
                latitude,
                longitude
            ],


            // AT A GLANCE

            atAGlance: {

                capital:
                    capital,

                region:
                    region,

                subregion:
                    subregion,

                population:
                    null,

                populationYear:
                    null,

                areaKm2:
                    null,

                languages:
                    [],

                currency:
                    null

            },


            // CURRENT SCRIPT COMPATIBILITY

            capital:
                capital,

            region:
                region,

            subregion:
                subregion,


            // ABOUT

            overview:
                `${name} is a country in ${subregion}, ${region}. ` +
                `Its capital is ${capital}.`,

            countryNote:
                null,


            // GOVERNMENT & INTERNATIONAL RELATIONS

            government: {

                governmentType:
                    null,

                headOfState: {

                    name:
                        null,

                    title:
                        null,

                    asOf:
                        null,

                    sourceIds:
                        []

                },

                headOfGovernment: {

                    name:
                        null,

                    title:
                        null,

                    asOf:
                        null,

                    sourceIds:
                        []

                },

                unStatus:
                    (
                        iso3 === "VAT" ||
                        iso3 === "PSE"
                    )
                        ? "United Nations non-member observer state"
                        : "United Nations member state",

                internationalOrganizations:
                    []

            },


            // CRISIS RELATIONSHIPS

            relatedCrises:
                [],

            crisisIds:
                [],


            // HUMANITARIAN SNAPSHOT

            humanitarian: {

                summary:
                    null,

                peopleInNeed:
                    null,

                peopleInNeedYear:
                    null,

                sourceIds:
                    []

            },


            // DISPLACEMENT

            displacement: {

                internallyDisplaced:
                    null,

                refugeesHosted:
                    null,

                refugeesOrigin:
                    null,

                asylumSeekers:
                    null,

                year:
                    null,

                summary:
                    null,

                sourceIds:
                    []

            },


            // RECENT HISTORY

            timeline:
                [],


            // HUMANITARIAN ORGANIZATIONS

            humanitarianOrganizations:
                [],


            // SOURCES

            sources:
                defaultCountrySources.map(
                    source => ({
                        ...source
                    })
                ),


            // VERIFICATION

            lastVerified:
                null

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
            country.iso3.toUpperCase() ===
            String(iso3).toUpperCase()
    ) || null;
}


function getCountryByIso2(iso2) {

    if (!iso2) {
        return null;
    }

    return countries.find(
        country =>
            country.iso2.toUpperCase() ===
            String(iso2).toUpperCase()
    ) || null;
}


function getCountryByName(name) {

    if (!name) {
        return null;
    }

    const normalizedName =
        String(name)
            .trim()
            .toLowerCase();

    return countries.find(
        country =>
            country.name.toLowerCase() ===
            normalizedName
    ) || null;
}


// ============================================================
// UPDATE COUNTRY PROFILE
// ============================================================

function updateCountryProfile(
    iso3,
    updates = {}
) {

    const country =
        getCountryByIso3(iso3);

    if (!country) {

        console.warn(
            `Country profile not found: ${iso3}`
        );

        return null;
    }


    Object.keys(updates).forEach(
        key => {

            const newValue =
                updates[key];

            if (
                newValue &&
                typeof newValue === "object" &&
                !Array.isArray(newValue) &&
                country[key] &&
                typeof country[key] === "object" &&
                !Array.isArray(country[key])
            ) {

                country[key] = {
                    ...country[key],
                    ...newValue
                };

            } else {

                country[key] =
                    newValue;

            }

        }
    );


    return country;
}


// ============================================================
// ADD COUNTRY SOURCE
// ============================================================

function addCountrySource(
    iso3,
    source
) {

    const country =
        getCountryByIso3(iso3);

    if (
        !country ||
        !source ||
        !source.id
    ) {
        return;
    }


    const existingSource =
        country.sources.find(
            item =>
                item.id === source.id
        );


    if (!existingSource) {

        country.sources.push({
            ...source
        });

    }

}


// ============================================================
// ADD COUNTRY CRISIS RELATIONSHIP
// ============================================================

function addCountryCrisisRelationship(
    iso3,
    crisisId,
    relationships,
    explanation,
    asOf = null,
    sourceIds = []
) {

    const country =
        getCountryByIso3(iso3);


    if (!country) {

        console.warn(
            `Cannot add crisis relationship. Country not found: ${iso3}`
        );

        return;
    }


    if (!crisisId) {

        console.warn(
            `Cannot add crisis relationship to ${iso3}: missing crisis ID.`
        );

        return;
    }


    const relationshipList =
        Array.isArray(relationships)
            ? relationships
            : [relationships];


    const validRelationships =
        relationshipList.filter(
            relationship =>
                crisisRelationshipTypes[
                    relationship
                ]
        );


    if (
        validRelationships.length === 0
    ) {

        console.warn(
            `No valid relationship type supplied for ${iso3} / ${crisisId}.`
        );

        return;
    }


    const existing =
        country.relatedCrises.find(
            relationship =>
                relationship.crisisId ===
                crisisId
        );


    if (existing) {

        validRelationships.forEach(
            relationship => {

                if (
                    !existing.relationships.includes(
                        relationship
                    )
                ) {

                    existing.relationships.push(
                        relationship
                    );

                }

            }
        );


        if (
            explanation &&
            !existing.explanation
        ) {

            existing.explanation =
                explanation;

        }


        if (asOf) {

            existing.asOf =
                asOf;

        }


        sourceIds.forEach(
            sourceId => {

                if (
                    !existing.sourceIds.includes(
                        sourceId
                    )
                ) {

                    existing.sourceIds.push(
                        sourceId
                    );

                }

            }
        );

    } else {

        country.relatedCrises.push({

            crisisId:
                crisisId,

            relationships:
                [...validRelationships],

            explanation:
                explanation || "",

            asOf:
                asOf,

            sourceIds:
                [...sourceIds]

        });

    }


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
// COUNTRY-SPECIFIC NOTES
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
            "Gitega is Burundi's political capital. Bujumbura remains the country's largest city and principal economic center."
    }
);


// Côte d'Ivoire

updateCountryProfile(
    "CIV",
    {
        countryNote:
            "Yamoussoukro is Côte d'Ivoire's official capital. Abidjan remains the country's largest city and principal economic center."
    }
);


// Equatorial Guinea

updateCountryProfile(
    "GNQ",
    {
        countryNote:
            "Ciudad de la Paz is listed here as the national capital. Malabo has historically served as the seat of national government."
    }
);


// Eswatini

updateCountryProfile(
    "SWZ",
    {
        countryNote:
            "Eswatini divides capital functions between Mbabane, the administrative capital, and Lobamba, the royal and legislative capital."
    }
);


// Indonesia

updateCountryProfile(
    "IDN",
    {
        countryNote:
            "Indonesia has been developing Nusantara as a new national capital. Government functions have historically been centered in Jakarta."
    }
);


// Israel

updateCountryProfile(
    "ISR",
    {
        countryNote:
            "Israel considers Jerusalem its capital. The status of Jerusalem remains internationally disputed."
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
//
// The relationship database below connects countries to the
// 32 crisis entries in conflicts.js.
//
// IMPORTANT:
// The crisisId values MUST exactly match conflicts.js.
// ============================================================

const crisisRelationshipSources = [

    {
        id:
            "unhcr-ukraine-2026",

        name:
            "UNHCR — Ukraine Emergency",

        url:
            "https://www.unhcr.org/emergencies/ukraine-emergency",

        type:
            "international-organization"
    },

    {
        id:
            "unhcr-sudan-regional-2026",

        name:
            "UNHCR — Sudan Emergency",

        url:
            "https://www.unhcr.org/emergencies/sudan-emergency",

        type:
            "international-organization"
    },

    {
        id:
            "unhcr-drc-regional-2026",

        name:
            "UNHCR — DR Congo Emergency",

        url:
            "https://www.unhcr.org/emergencies/dr-congo-emergency",

        type:
            "international-organization"
    },

    {
        id:
            "un-drc-rwanda",

        name:
            "United Nations Security Council — Democratic Republic of the Congo",

        url:
            "https://press.un.org/en/2025/sc16004.doc.htm",

        type:
            "international-organization"
    },

    {
        id:
            "unhcr-myanmar-regional-2026",

        name:
            "UNHCR — Myanmar Emergency",

        url:
            "https://www.unhcr.org/emergencies/myanmar-emergency",

        type:
            "international-organization"
    },

    {
        id:
            "unhcr-afghanistan-2026",

        name:
            "UNHCR — Afghanistan Emergency",

        url:
            "https://www.unhcr.org/emergencies/afghanistan-emergency",

        type:
            "international-organization"
    },

    {
        id:
            "unhcr-syria-regional-2026",

        name:
            "UNHCR — Syria Emergency",

        url:
            "https://www.unhcr.org/emergencies/syria-emergency",

        type:
            "international-organization"
    },

    {
        id:
            "unhcr-somalia-2026",

        name:
            "UNHCR — Somalia Situation",

        url:
            "https://data.unhcr.org/en/situations/horn",

        type:
            "international-organization"
    },

    {
        id:
            "unhcr-south-sudan-2026",

        name:
            "UNHCR — South Sudan Emergency",

        url:
            "https://www.unhcr.org/emergencies/south-sudan-emergency",

        type:
            "international-organization"
    },

    {
        id:
            "unhcr-car-2026",

        name:
            "UNHCR — Central African Republic Emergency",

        url:
            "https://www.unhcr.org/emergencies/central-african-republic-emergency",

        type:
            "international-organization"
    },

    {
        id:
            "unhcr-sahel-2026",

        name:
            "UNHCR — Sahel Emergency",

        url:
            "https://www.unhcr.org/emergencies/sahel-emergency",

        type:
            "international-organization"
    },

    {
        id:
            "unhcr-middle-east-2026",

        name:
            "UNHCR — Middle East Emergency",

        url:
            "https://www.unhcr.org/emergencies/middle-east-emergency",

        type:
            "international-organization"
    },

    {
        id:
            "un-iran-us-2026",

        name:
            "United Nations — United States letter to the Security Council, S/2026/161",

        url:
            "https://documents.un.org/api/symbol/access?l=en&s=S%2F2026%2F161&t=pdf",

        type:
            "international-organization"
    },

    {
        id:
            "un-iran-region-2026",

        name:
            "United Nations — 2026 Middle East Escalation",

        url:
            "https://www.un.org/",

        type:
            "international-organization"
    },

    {
        id:
            "un-lebanon-israel-2026",

        name:
            "United Nations — Israel-Lebanon Conflict",

        url:
            "https://www.un.org/",

        type:
            "international-organization"
    },

    {
        id:
            "unhcr-venezuela",

        name:
            "UNHCR — Venezuela Situation",

        url:
            "https://www.unhcr.org/emergencies/venezuela-situation",

        type:
            "international-organization"
    },

    {
        id:
            "unhcr-colombia",

        name:
            "UNHCR — Colombia",

        url:
            "https://data.unhcr.org/en/country/COL",

        type:
            "international-organization"
    },

    {
        id:
            "unhcr-rohingya-2026",

        name:
            "UNHCR — Rohingya Emergency",

        url:
            "https://www.unhcr.org/rohingya-emergency",

        type:
            "international-organization"
    },

    {
        id:
            "unhcr-nigeria-2026",

        name:
            "UNHCR — Lake Chad Basin Displacement Crisis",

        url:
            "https://data.unhcr.org/",

        type:
            "international-organization"
    }

];


// ============================================================
// RELATIONSHIP SOURCE HELPER
// ============================================================

function attachRelationshipSource(
    iso3,
    sourceId
) {

    const source =
        crisisRelationshipSources.find(
            item =>
                item.id === sourceId
        );


    if (source) {

        addCountrySource(
            iso3,
            source
        );

    }

}


// ============================================================
// VERIFIED RELATIONSHIP HELPER
// ============================================================

function addVerifiedRelationship(
    iso3,
    crisisId,
    relationships,
    explanation,
    sourceIds = []
) {

    sourceIds.forEach(
        sourceId =>
            attachRelationshipSource(
                iso3,
                sourceId
            )
    );


    addCountryCrisisRelationship(
        iso3,
        crisisId,
        relationships,
        explanation,
        "October 3, 2026",
        sourceIds
    );

}


// ============================================================
// 1. WAR IN UKRAINE
// ============================================================

addVerifiedRelationship(
    "UKR",
    "ukraine",
    [
        "directly-affected",
        "party-to-conflict",
        "humanitarian-refugee-impact"
    ],
    "Ukraine is directly affected by and is a party to the war, with large-scale internal and cross-border displacement.",
    [
        "unhcr-ukraine-2026"
    ]
);


addVerifiedRelationship(
    "RUS",
    "ukraine",
    [
        "party-to-conflict"
    ],
    "Russia is a party to the war in Ukraine.",
    [
        "unhcr-ukraine-2026"
    ]
);


// Ukraine regional refugee impact

[
    ["BLR", "Belarus"],
    ["BGR", "Bulgaria"],
    ["CZE", "Czechia"],
    ["EST", "Estonia"],
    ["HUN", "Hungary"],
    ["LVA", "Latvia"],
    ["LTU", "Lithuania"],
    ["POL", "Poland"],
    ["MDA", "Moldova"],
    ["ROU", "Romania"],
    ["SVK", "Slovakia"]

].forEach(
    ([iso3, name]) => {

        addVerifiedRelationship(
            iso3,
            "ukraine",
            [
                "humanitarian-refugee-impact"
            ],
            `${name} is identified as an affected country in the regional refugee response to displacement from Ukraine.`,
            [
                "unhcr-ukraine-2026"
            ]
        );

    }
);


// ============================================================
// 2. WAR IN SUDAN
// ============================================================

addVerifiedRelationship(
    "SDN",
    "sudan",
    [
        "directly-affected",
        "party-to-conflict",
        "humanitarian-refugee-impact"
    ],
    "Sudan is the location of the armed conflict and the center of the associated humanitarian and displacement emergency.",
    [
        "unhcr-sudan-regional-2026"
    ]
);


[
    ["CAF", "Central African Republic"],
    ["TCD", "Chad"],
    ["EGY", "Egypt"],
    ["ETH", "Ethiopia"],
    ["LBY", "Libya"],
    ["SSD", "South Sudan"],
    ["UGA", "Uganda"]

].forEach(
    ([iso3, name]) => {

        addVerifiedRelationship(
            iso3,
            "sudan",
            [
                "humanitarian-refugee-impact"
            ],
            `${name} is part of the regional refugee and humanitarian response to displacement from Sudan.`,
            [
                "unhcr-sudan-regional-2026"
            ]
        );

    }
);


// ============================================================
// 3. ISRAEL–GAZA CONFLICT
// ============================================================

addVerifiedRelationship(
    "ISR",
    "gaza-israel",
    [
        "directly-affected",
        "party-to-conflict"
    ],
    "Israel is directly affected by and is a party to the Israel–Gaza conflict."
);


addVerifiedRelationship(
    "PSE",
    "gaza-israel",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "The Gaza Strip is the principal location of the humanitarian emergency documented in this Conflict Atlas entry."
);


// ============================================================
// 4. EASTERN DR CONGO CONFLICT
// ============================================================

addVerifiedRelationship(
    "COD",
    "drc",
    [
        "directly-affected",
        "party-to-conflict",
        "humanitarian-refugee-impact"
    ],
    "The Democratic Republic of the Congo is directly affected by armed conflict and large-scale displacement.",
    [
        "unhcr-drc-regional-2026"
    ]
);


addVerifiedRelationship(
    "RWA",
    "drc",
    [
        "military-involvement"
    ],
    "The United Nations Security Council has called on the Rwanda Defence Force to cease support to M23 and withdraw from Congolese territory.",
    [
        "un-drc-rwanda"
    ]
);


[
    ["AGO", "Angola"],
    ["BDI", "Burundi"],
    ["COG", "Republic of the Congo"],
    ["RWA", "Rwanda"],
    ["UGA", "Uganda"],
    ["TZA", "Tanzania"],
    ["ZMB", "Zambia"]

].forEach(
    ([iso3, name]) => {

        addVerifiedRelationship(
            iso3,
            "drc",
            [
                "humanitarian-refugee-impact"
            ],
            `${name} is affected by the regional displacement emergency associated with the conflict in the Democratic Republic of the Congo.`,
            [
                "unhcr-drc-regional-2026"
            ]
        );

    }
);


// ============================================================
// 5. MYANMAR CIVIL CONFLICT
// ============================================================

addVerifiedRelationship(
    "MMR",
    "myanmar",
    [
        "directly-affected",
        "party-to-conflict",
        "humanitarian-refugee-impact"
    ],
    "Myanmar is directly affected by armed conflict and associated internal and cross-border displacement.",
    [
        "unhcr-myanmar-regional-2026"
    ]
);


[
    ["BGD", "Bangladesh"],
    ["IND", "India"],
    ["IDN", "Indonesia"],
    ["MYS", "Malaysia"],
    ["THA", "Thailand"]

].forEach(
    ([iso3, name]) => {

        addVerifiedRelationship(
            iso3,
            "myanmar",
            [
                "humanitarian-refugee-impact"
            ],
            `${name} is part of the regional displacement context associated with refugees and asylum-seekers from Myanmar.`,
            [
                "unhcr-myanmar-regional-2026"
            ]
        );

    }
);


// ============================================================
// 6. YEMEN HUMANITARIAN CRISIS
// ============================================================

addVerifiedRelationship(
    "YEM",
    "yemen",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "Yemen is directly affected by the prolonged humanitarian and displacement crisis documented by Conflict Atlas."
);


// ============================================================
// 7. AFGHANISTAN HUMANITARIAN CRISIS
// ============================================================

addVerifiedRelationship(
    "AFG",
    "afghanistan",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "Afghanistan is directly affected by a major humanitarian and displacement crisis.",
    [
        "unhcr-afghanistan-2026"
    ]
);


[
    ["IRN", "Iran"],
    ["PAK", "Pakistan"],
    ["TJK", "Tajikistan"],
    ["TKM", "Turkmenistan"],
    ["UZB", "Uzbekistan"]

].forEach(
    ([iso3, name]) => {

        addVerifiedRelationship(
            iso3,
            "afghanistan",
            [
                "humanitarian-refugee-impact"
            ],
            `${name} is affected by the regional displacement situation associated with Afghanistan.`,
            [
                "unhcr-afghanistan-2026"
            ]
        );

    }
);


// ============================================================
// 8. SYRIA HUMANITARIAN CRISIS
// ============================================================

addVerifiedRelationship(
    "SYR",
    "syria",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "Syria remains directly affected by a major humanitarian and displacement crisis.",
    [
        "unhcr-syria-regional-2026"
    ]
);


[
    ["EGY", "Egypt"],
    ["IRQ", "Iraq"],
    ["JOR", "Jordan"],
    ["LBN", "Lebanon"],
    ["TUR", "Türkiye"]

].forEach(
    ([iso3, name]) => {

        addVerifiedRelationship(
            iso3,
            "syria",
            [
                "humanitarian-refugee-impact"
            ],
            `${name} hosts refugees from Syria and remains part of the regional refugee response.`,
            [
                "unhcr-syria-regional-2026"
            ]
        );

    }
);


// ============================================================
// 9. SOMALIA HUMANITARIAN AND DISPLACEMENT CRISIS
// ============================================================

addVerifiedRelationship(
    "SOM",
    "somalia",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "Somalia is directly affected by a major humanitarian and displacement crisis.",
    [
        "unhcr-somalia-2026"
    ]
);


[
    ["DJI", "Djibouti"],
    ["ETH", "Ethiopia"],
    ["KEN", "Kenya"],
    ["UGA", "Uganda"],
    ["YEM", "Yemen"]

].forEach(
    ([iso3, name]) => {

        addVerifiedRelationship(
            iso3,
            "somalia",
            [
                "humanitarian-refugee-impact"
            ],
            `${name} hosts refugees from Somalia as part of the regional displacement situation.`,
            [
                "unhcr-somalia-2026"
            ]
        );

    }
);


// ============================================================
// 10. SOUTH SUDAN HUMANITARIAN CRISIS
// ============================================================

addVerifiedRelationship(
    "SSD",
    "south-sudan",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "South Sudan is directly affected by conflict, humanitarian needs and large-scale displacement.",
    [
        "unhcr-south-sudan-2026"
    ]
);


[
    ["COD", "Democratic Republic of the Congo"],
    ["ETH", "Ethiopia"],
    ["KEN", "Kenya"],
    ["SDN", "Sudan"],
    ["UGA", "Uganda"]

].forEach(
    ([iso3, name]) => {

        addVerifiedRelationship(
            iso3,
            "south-sudan",
            [
                "humanitarian-refugee-impact"
            ],
            `${name} is affected by the regional refugee situation associated with South Sudan.`,
            [
                "unhcr-south-sudan-2026"
            ]
        );

    }
);
// ============================================================
// 11. HAITI HUMANITARIAN AND DISPLACEMENT CRISIS
// ============================================================

addVerifiedRelationship(
    "HTI",
    "haiti",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "Haiti is directly affected by severe insecurity, humanitarian needs and large-scale internal displacement."
);


// ============================================================
// 12. CENTRAL SAHEL DISPLACEMENT CRISIS
// ============================================================

[
    ["BFA", "Burkina Faso"],
    ["MLI", "Mali"],
    ["NER", "Niger"]

].forEach(
    ([iso3, name]) => {

        addVerifiedRelationship(
            iso3,
            "central-sahel",
            [
                "directly-affected",
                "humanitarian-refugee-impact"
            ],
            `${name} is directly affected by conflict, insecurity and displacement in the Central Sahel.`,
            [
                "unhcr-sahel-2026"
            ]
        );

    }
);


addVerifiedRelationship(
    "MRT",
    "central-sahel",
    [
        "humanitarian-refugee-impact"
    ],
    "Mauritania is affected by the wider Sahel displacement emergency.",
    [
        "unhcr-sahel-2026"
    ]
);


// ============================================================
// 13. ETHIOPIA DISPLACEMENT CRISIS
// ============================================================

addVerifiedRelationship(
    "ETH",
    "ethiopia",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "Ethiopia is directly affected by significant internal displacement linked to conflict, insecurity and humanitarian pressures."
);


// ============================================================
// 14. NORTHERN MOZAMBIQUE DISPLACEMENT CRISIS
// ============================================================

addVerifiedRelationship(
    "MOZ",
    "mozambique-displacement",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "Northern Mozambique is directly affected by conflict-related displacement."
);


// ============================================================
// 15. CENTRAL AFRICAN REPUBLIC DISPLACEMENT CRISIS
// ============================================================

addVerifiedRelationship(
    "CAF",
    "car",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "The Central African Republic is directly affected by conflict and displacement.",
    [
        "unhcr-car-2026"
    ]
);


[
    ["CMR", "Cameroon"],
    ["TCD", "Chad"],
    ["COD", "Democratic Republic of the Congo"],
    ["COG", "Republic of the Congo"]

].forEach(
    ([iso3, name]) => {

        addVerifiedRelationship(
            iso3,
            "car",
            [
                "humanitarian-refugee-impact"
            ],
            `${name} is affected by the regional refugee situation associated with displacement from the Central African Republic.`,
            [
                "unhcr-car-2026"
            ]
        );

    }
);


// ============================================================
// 16. PHILIPPINES MONSOON FLOODS
// ============================================================

addVerifiedRelationship(
    "PHL",
    "philippines-floods-2026",
    [
        "directly-affected"
    ],
    "The Philippines is directly affected by the 2026 monsoon flooding documented by Conflict Atlas."
);


// ============================================================
// 17. NEPAL FLASH FLOODS
// ============================================================

addVerifiedRelationship(
    "NPL",
    "nepal-floods-2026",
    [
        "directly-affected"
    ],
    "Nepal is directly affected by the 2026 flash flooding documented by Conflict Atlas."
);


// ============================================================
// 18. COLOMBIA EARTHQUAKE
// ============================================================

addVerifiedRelationship(
    "COL",
    "colombia-earthquake-2026",
    [
        "directly-affected"
    ],
    "Colombia is directly affected by the 2026 earthquake documented by Conflict Atlas."
);


// ============================================================
// 19. MADAGASCAR CYCLONES
// ============================================================

addVerifiedRelationship(
    "MDG",
    "madagascar-cyclones-2026",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "Madagascar is directly affected by the 2026 cyclone emergency documented by Conflict Atlas."
);


// ============================================================
// 20. MOZAMBIQUE FLOODS
// ============================================================

addVerifiedRelationship(
    "MOZ",
    "mozambique-floods-2026",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "Mozambique is directly affected by the 2026 flood emergency documented by Conflict Atlas."
);


// ============================================================
// 21. LEBANON CONFLICT
// ============================================================

addVerifiedRelationship(
    "LBN",
    "lebanon-2026",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "Lebanon is directly affected by the 2026 conflict and associated displacement.",
    [
        "unhcr-middle-east-2026"
    ]
);


addVerifiedRelationship(
    "ISR",
    "lebanon-2026",
    [
        "party-to-conflict"
    ],
    "Israel is a party to the 2026 Israel–Lebanon hostilities documented by Conflict Atlas.",
    [
        "un-lebanon-israel-2026"
    ]
);


addVerifiedRelationship(
    "SYR",
    "lebanon-2026",
    [
        "humanitarian-refugee-impact"
    ],
    "Syria received significant cross-border movements from Lebanon during the 2026 regional escalation.",
    [
        "unhcr-middle-east-2026"
    ]
);


// ============================================================
// 22. IRAN CONFLICT AND DISPLACEMENT EMERGENCY
// ============================================================

addVerifiedRelationship(
    "IRN",
    "iran-2026",
    [
        "directly-affected",
        "party-to-conflict",
        "humanitarian-refugee-impact"
    ],
    "Iran is directly affected by and is a party to the 2026 regional armed conflict, with associated humanitarian and displacement impacts.",
    [
        "unhcr-middle-east-2026",
        "un-iran-region-2026"
    ]
);


// UNITED STATES

addVerifiedRelationship(
    "USA",
    "iran-2026",
    [
        "party-to-conflict"
    ],
    "The United States commenced combat operations against Iran on 28 February 2026 and is a party to the armed conflict documented by Conflict Atlas.",
    [
        "un-iran-us-2026"
    ]
);


// ISRAEL

addVerifiedRelationship(
    "ISR",
    "iran-2026",
    [
        "party-to-conflict"
    ],
    "Israel conducted military operations against Iran during the 2026 escalation and is a party to the conflict documented by Conflict Atlas.",
    [
        "un-iran-region-2026"
    ]
);


// COUNTRIES DIRECTLY AFFECTED BY THE REGIONAL ESCALATION

[
    ["BHR", "Bahrain"],
    ["IRQ", "Iraq"],
    ["JOR", "Jordan"],
    ["KWT", "Kuwait"],
    ["QAT", "Qatar"],
    ["SAU", "Saudi Arabia"],
    ["ARE", "United Arab Emirates"]

].forEach(
    ([iso3, name]) => {

        addVerifiedRelationship(
            iso3,
            "iran-2026",
            [
                "directly-affected"
            ],
            `${name} was directly affected during the 2026 regional military escalation.`,
            [
                "un-iran-region-2026"
            ]
        );

    }
);


// COUNTRIES AFFECTED BY HUMANITARIAN / CROSS-BORDER IMPACT

[
    ["AFG", "Afghanistan"],
    ["ARM", "Armenia"],
    ["PAK", "Pakistan"],
    ["TUR", "Türkiye"],
    ["TKM", "Turkmenistan"]

].forEach(
    ([iso3, name]) => {

        addVerifiedRelationship(
            iso3,
            "iran-2026",
            [
                "humanitarian-refugee-impact"
            ],
            `${name} is included in humanitarian preparedness or response activity connected to the 2026 Middle East emergency.`,
            [
                "unhcr-middle-east-2026"
            ]
        );

    }
);


// ============================================================
// 23. COLOMBIA INTERNAL ARMED CONFLICTS
// ============================================================

addVerifiedRelationship(
    "COL",
    "colombia-conflict",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "Colombia is directly affected by continuing armed violence and internal displacement.",
    [
        "unhcr-colombia"
    ]
);


[
    ["ECU", "Ecuador"],
    ["PAN", "Panama"],
    ["PER", "Peru"],
    ["VEN", "Venezuela"]

].forEach(
    ([iso3, name]) => {

        addVerifiedRelationship(
            iso3,
            "colombia-conflict",
            [
                "humanitarian-refugee-impact"
            ],
            `${name} is part of the regional protection context associated with displacement from Colombia.`,
            [
                "unhcr-colombia"
            ]
        );

    }
);


// ============================================================
// 24. CHAD HUMANITARIAN CRISIS
// ============================================================

addVerifiedRelationship(
    "TCD",
    "chad-humanitarian",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "Chad is directly affected by overlapping humanitarian, refugee and displacement pressures."
);


// ============================================================
// 25. CAMEROON HUMANITARIAN CRISIS
// ============================================================

addVerifiedRelationship(
    "CMR",
    "cameroon-humanitarian",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "Cameroon is directly affected by conflict, displacement and humanitarian needs."
);


// ============================================================
// 26. KENYA FOOD INSECURITY CRISIS
// ============================================================

addVerifiedRelationship(
    "KEN",
    "kenya-humanitarian",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "Kenya is directly affected by the food-insecurity and humanitarian crisis documented by Conflict Atlas."
);


// ============================================================
// 27. VENEZUELA REGIONAL DISPLACEMENT CRISIS
// ============================================================

addVerifiedRelationship(
    "VEN",
    "venezuela-displacement",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "Venezuela is the country of origin of one of the world's largest cross-border displacement situations.",
    [
        "unhcr-venezuela"
    ]
);


[
    ["ARG", "Argentina"],
    ["BRA", "Brazil"],
    ["COL", "Colombia"],
    ["CRI", "Costa Rica"],
    ["ECU", "Ecuador"],
    ["MEX", "Mexico"],
    ["PAN", "Panama"],
    ["PER", "Peru"]

].forEach(
    ([iso3, name]) => {

        addVerifiedRelationship(
            iso3,
            "venezuela-displacement",
            [
                "humanitarian-refugee-impact"
            ],
            `${name} is affected by the Venezuela regional displacement situation.`,
            [
                "unhcr-venezuela"
            ]
        );

    }
);


// ============================================================
// 28. NIGERIA DISPLACEMENT CRISIS
// ============================================================

addVerifiedRelationship(
    "NGA",
    "nigeria-displacement",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "Nigeria is directly affected by large-scale internal and cross-border displacement.",
    [
        "unhcr-nigeria-2026"
    ]
);


[
    ["CMR", "Cameroon"],
    ["TCD", "Chad"],
    ["NER", "Niger"]

].forEach(
    ([iso3, name]) => {

        addVerifiedRelationship(
            iso3,
            "nigeria-displacement",
            [
                "humanitarian-refugee-impact"
            ],
            `${name} is part of the Lake Chad Basin regional displacement crisis affecting Nigeria and neighboring countries.`,
            [
                "unhcr-nigeria-2026"
            ]
        );

    }
);


// ============================================================
// 29. ROHINGYA REFUGEE CRISIS
// ============================================================

addVerifiedRelationship(
    "BGD",
    "rohingya-bangladesh",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "Bangladesh is the principal host country for more than one million Rohingya refugees.",
    [
        "unhcr-rohingya-2026"
    ]
);


addVerifiedRelationship(
    "MMR",
    "rohingya-bangladesh",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "The Rohingya refugee crisis originates in forced displacement from Myanmar, where conflict and displacement continue.",
    [
        "unhcr-rohingya-2026"
    ]
);


[
    ["IND", "India"],
    ["IDN", "Indonesia"],
    ["MYS", "Malaysia"],
    ["THA", "Thailand"]

].forEach(
    ([iso3, name]) => {

        addVerifiedRelationship(
            iso3,
            "rohingya-bangladesh",
            [
                "humanitarian-refugee-impact"
            ],
            `${name} is part of the wider regional displacement context involving Rohingya refugees.`,
            [
                "unhcr-rohingya-2026"
            ]
        );

    }
);


// ============================================================
// 30. VENEZUELA EARTHQUAKE
// ============================================================

addVerifiedRelationship(
    "VEN",
    "venezuela-earthquake-2026",
    [
        "directly-affected"
    ],
    "Venezuela is directly affected by the 2026 earthquake documented by Conflict Atlas."
);


// ============================================================
// 31. VIET NAM FLOODS
// ============================================================

addVerifiedRelationship(
    "VNM",
    "vietnam-floods-2026",
    [
        "directly-affected"
    ],
    "Vietnam is directly affected by the 2026 flooding documented by Conflict Atlas."
);


// ============================================================
// 32. LIBYA FLASH FLOODS
// ============================================================

addVerifiedRelationship(
    "LBY",
    "libya-floods-2026",
    [
        "directly-affected",
        "humanitarian-refugee-impact"
    ],
    "Libya is directly affected by the 2026 flash-flood emergency documented by Conflict Atlas."
);


// ============================================================
// DATABASE VALIDATION
// ============================================================

console.log(
    `Conflict Atlas loaded ${countries.length} country profiles.`
);


if (
    countries.length !== 195
) {

    console.warn(
        `Expected 195 country profiles but loaded ${countries.length}.`
    );

}


// ============================================================
// VALIDATE CRISIS RELATIONSHIP TYPES
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
                                `Unknown crisis relationship type "${relationshipType}" for ${country.name}.`
                            );

                        }

                    }
                );

            }
        );

    }
);


// ============================================================
// VALIDATE CRISIS IDS AGAINST conflicts.js
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


    let invalidRelationshipCount =
        0;


    countries.forEach(
        country => {

            country.relatedCrises.forEach(
                relationship => {

                    if (
                        !validCrisisIds.has(
                            relationship.crisisId
                        )
                    ) {

                        invalidRelationshipCount++;


                        console.warn(
                            `Invalid crisis relationship: ${country.name} → ${relationship.crisisId}`
                        );

                    }

                }
            );

        }
    );


    if (
        invalidRelationshipCount === 0
    ) {

        console.log(
            "Conflict Atlas country relationship validation passed: all crisis IDs match conflicts.js."
        );

    } else {

        console.warn(
            `Conflict Atlas found ${invalidRelationshipCount} country relationship(s) with invalid crisis IDs.`
        );

    }

}


// ============================================================
// COUNTRY RELATIONSHIP SUMMARY
// ============================================================

const countriesWithCrisisRelationships =
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
    `${countriesWithCrisisRelationships.length} countries currently have at least one verified Conflict Atlas crisis relationship.`
);


console.log(
    `${totalCountryCrisisRelationships} total country-to-crisis relationships loaded.`
);


// ============================================================
// END OF COUNTRY DATABASE
// ============================================================
