var map;
var Points = [];
var cinemas = [
    {
        nom: "Cinéma Rex",
        places: 433,
        ville: "Retournac",
        code: "43130",
        dep: "Haute-Loire",
        lat: 45.186514,
        lon: 4.029204,
        AAV: 1
    },
    {
        nom: "Centre Socio-Culturel",
        places: 432,
        ville: "Rosières",
        code: "43800",
        dep: "Haute-Loire",
        lat: 45.13212308261013,
        lon: 3.9861038287024497,
        AAV: 3
    },
    {
        nom: "Le Maubourg",
        places: 433,
        ville: "Dunières",
        code: "43220",
        dep: "Haute-Loire",
        lat: 45.2175919573821,
        lon: 4.34125503623901,
        AAV: 1
    },
    {
        nom: "Aurecinema",
        places: 433,
        ville: "Aurec-sur-Loire",
        code: "43110",
        dep: "Haute-Loire",
        lat: 45.3702370782674,
        lon: 4.19896827745528,
        AAV: 5
    },
    {
        nom: "Ciné Dyke",
        places: 432,
        ville: "Le Puy-en-Velay",
        code: "43000",
        dep: "Haute-Loire",
        lat: 45.040387,
        lon: 3.886089,
        AAV: 4
    },
    {
        nom: "Cinéma Grenette",
        places: 433,
        ville: "Yssingeaux",
        code: "43200",
        dep: "Haute-Loire",
        lat: 45.143821,
        lon: 4.124759,
        AAV: 2
    },
    {
        nom: "Paris",
        places: 431,
        ville: "Brioude",
        code: "43100",
        dep: "Haute-Loire",
        lat: 45.292071,
        lon: 3.387558,
        AAV: 2
    },
    {
        nom: "Cinemascoop",
        places: 433,
        ville: "Le Chambon-sur-Lignon",
        code: "43400",
        dep: "Haute-Loire",
        lat: 45.0611463006446,
        lon: 4.30293626013985,
        AAV: 1
    },
    {
        nom: "Espace Culturel Le Cercle",
        places: 433,
        ville: "Saint-Just-Malmont",
        code: "43240",
        dep: "Haute-Loire",
        lat: 45.340205,
        lon: 4.313068,
        AAV: 5
    },
    {
        nom: "Cin Étoiles",
        places: 433,
        ville: "Sainte-Sigolène",
        code: "43600",
        dep: "Haute-Loire",
        lat: 45.2402394084497,
        lon: 4.23351039970905,
        AAV: 2
    },
    {
        nom: "Cinéma la Capitelle",
        places: 348,
        ville: "Monistrol-sur-Loire",
        code: "43120",
        dep: "Haute-Loire",
        lat: 45.284509,
        lon: 4.176668,
        AAV: 5
    },
    {
        nom: "Ciné Tence",
        places: 172,
        ville: "Tence",
        code: "43190",
        dep: "Haute-Loire",
        lat: 45.1136039950647,
        lon: 4.29043031107862,
        AAV: 1
    },
    {
        nom: "Espace Lumière",
        places: 258,
        ville: "Balbigny",
        code: "42510",
        dep: "Loire",
        lat: 45.817369,
        lon: 4.183976,
        AAV: 1
    },
    {
        nom: "Cinéma Feurs",
        places: 283,
        ville: "Feurs",
        code: "42110",
        dep: "Loire",
        lat: 45.750204,
        lon: 4.225091,
        AAV: 2
    },
    {
        nom: "Cinéma Rex Montbrison",
        places: 816,
        ville: "Montbrison",
        code: "42600",
        dep: "Loire",
        lat: 45.6148049602884,
        lon: 4.06764893664634,
        AAV: 2
    },
    {
        nom: "Le Grand Palais",
        places: 1919,
        ville: "Roanne",
        code: "42300",
        dep: "Loire",
        lat: 46.0377691525392,
        lon: 4.06420779827641,
        AAV: 4
    },
    {
        nom: "Cin'etoile Saint-Bonnet",
        places: 145,
        ville: "Saint-Bonnet-le-Château",
        code: "42380",
        dep: "Loire",
        lat: 45.4212341598795,
        lon: 4.06441776474206,
        AAV: 1
    },
    {
        nom: "Salle Pinatel",
        places: 204,
        ville: "Saint-Genest-Lerpt",
        code: "42530",
        dep: "Loire",
        lat: 45.4461340776378,
        lon: 4.33622170968937,
        AAV: 5
    },
    {
        nom: "Le Quai des Arts",
        places: 145,
        ville: "Usson-en-Forez",
        code: "42550",
        dep: "Loire",
        lat: 45.390497,
        lon: 3.946964,
        AAV: 1
    },
    {
        nom: "L'Entract",
        places: 183,
        ville: "Boën-sur-Lignon",
        code: "42130",
        dep: "Loire",
        lat: 45.7444244165228,
        lon: 4.00592577150754,
        AAV: 1
    },
    {
        nom: "Les Halles",
        places: 210,
        ville: "Charlieu",
        code: "42190",
        dep: "Loire",
        lat: 46.158309,
        lon: 4.170764,
        AAV: 3
    },
    {
        nom: "Le Foyer Noirétable",
        places: 181,
        ville: "Noirétable",
        code: "42440",
        dep: "Loire",
        lat: 45.8173155,
        lon: 3.7672235,
        AAV: 1
    },
    {
        nom: "Mégarama Jean Jaurès",
        places: 1733,
        ville: "Saint-Étienne",
        code: "42000",
        dep: "Loire",
        lat: 45.4418302937405,
        lon: 4.38484675912187,
        AAV: 6
    },
    {
        nom: "Le Quarto",
        places: 377,
        ville: "Unieux",
        code: "42240",
        dep: "Loire",
        lat: 45.396194,
        lon: 4.281269,
        AAV: 5
    },
    {
        nom: "Foyer Bourg-Argental",
        places: 213,
        ville: "Bourg-Argental",
        code: "42220",
        dep: "Loire",
        lat: 45.2976368190252,
        lon: 4.55884919176527,
        AAV: 3
    },
    {
        nom: "Espace Renoir",
        places: 429,
        ville: "Roanne",
        code: "42300",
        dep: "Loire",
        lat: 46.0382513894764,
        lon: 4.0694832499609,
        AAV: 4
    },
    {
        nom: "L'Opsis",
        places: 350,
        ville: "Roche-la-Molière",
        code: "42230",
        dep: "Loire",
        lat: 45.434822,
        lon: 4.32352,
        AAV: 6
    },
    {
        nom: "Mégarama Chavanelle",
        places: 1643,
        ville: "Saint-Étienne",
        code: "42000",
        dep: "Loire",
        lat: 45.4379,
        lon: 4.395893,
        AAV: 6
    },
    {
        nom: "Cine Feurs",
        places: 141,
        ville: "Feurs",
        code: "42110",
        dep: "Loire",
        lat: 45.743661,
        lon: 4.225721,
        AAV: 2
    },
    {
        nom: "Beausejour",
        places: 148,
        ville: "Panissières",
        code: "42360",
        dep: "Loire",
        lat: 45.7922037524669,
        lon: 4.34161026553614,
        AAV: 1
    },
    {
        nom: "Ciné Chaplin",
        places: 384,
        ville: "Rive-de-Gier",
        code: "42800",
        dep: "Loire",
        lat: 45.528846043649,
        lon: 4.61482885296944,
        AAV: 7
    },
    {
        nom: "Le Méliès Saint-François",
        places: 477,
        ville: "Saint-Étienne",
        code: "42000",
        dep: "Loire",
        lat: 45.4392402692254,
        lon: 4.40157869444196,
        AAV: 6
    },
    {
        nom: "Espace Jules Verne",
        places: 221,
        ville: "Saint-Genest-Malifaux",
        code: "42660",
        dep: "Loire",
        lat: 45.339698,
        lon: 4.414174,
        AAV: 5
    },
    {
        nom: "Family Cinéma",
        places: 1641,
        ville: "Saint-Just-Saint-Rambert",
        code: "42170",
        dep: "Loire",
        lat: 45.5106791037247,
        lon: 4.2623977398233,
        AAV: 5
    },
    {
        nom: "Centre Culturel Communal Le Sou",
        places: 277,
        ville: "La Talaudière",
        code: "42350",
        dep: "Loire",
        lat: 45.482487,
        lon: 4.429981,
        AAV: 5
    },
    {
        nom: "Salle de la Cantine",
        places: 50,
        ville: "Chalmazel-Jeansagnière",
        code: "42920",
        dep: "Loire",
        lat: 45.7269327,
        lon: 3.8349293,
        AAV: 1
    },
    {
        nom: "Majestic",
        places: 837,
        ville: "Firminy",
        code: "42700",
        dep: "Loire",
        lat: 45.3896052805311,
        lon: 4.2899376807223,
        AAV: 5
    },
    {
        nom: "Cinépilat",
        places: 164,
        ville: "Pélussin",
        code: "42410",
        dep: "Loire",
        lat: 45.418565,
        lon: 4.675401,
        AAV: 1
    },
    {
        nom: "Veo Grand Lumière",
        places: 950,
        ville: "Saint-Chamond",
        code: "42400",
        dep: "Loire",
        lat: 45.472045,
        lon: 4.505391,
        AAV: 5
    },
    {
        nom: "Le Méliès",
        places: 630,
        ville: "Saint-Étienne",
        code: "42000",
        dep: "Loire",
        lat: 45.441645954546,
        lon: 4.38729425013307,
        AAV: 6
    },
    {
        nom: "Le Colisée",
        places: 202,
        ville: "Saint-Galmier",
        code: "42330",
        dep: "Loire",
        lat: 45.5912095466512,
        lon: 4.31666246800092,
        AAV: 5
    },
    {
        nom: "Salle des Fêtes",
        places: 200,
        ville: "Saint-Julien-Molin-Molette",
        code: "42220",
        dep: "Loire",
        lat: 45.319731,
        lon: 4.616216,
        AAV: 3
    },
    {
        nom: "Nouvel Espace Culturel",
        places: 150,
        ville: "Saint-Priest-en-Jarez",
        code: "42270",
        dep: "Loire",
        lat: 45.474022,
        lon: 4.380177,
        AAV: 6
    }
];


//Set icônes perso pour marqueurs
var IconDefaut = L.icon({
    iconUrl: 'images/NoData.svg',
    iconSize: [38, 95],
    iconAnchor: [20, 40],
    popupAnchor: [-10, -10]
});
var Icon1 = L.icon({
    iconUrl: 'images/1.svg',
    iconSize: [38, 95],
    iconAnchor: [20, 40],
    popupAnchor: [-10, -10]
});
var Icon2 = L.icon({
    iconUrl: 'images/2.svg',
    iconSize: [38, 95],
    iconAnchor: [20, 40],
    popupAnchor: [-10, -10]
});
var Icon3 = L.icon({
    iconUrl: 'images/3.svg',
    iconSize: [38, 95],
    iconAnchor: [20, 40],
    popupAnchor: [-10, -10]
});
var Icon4 = L.icon({
    iconUrl: 'images/4.svg',
    iconSize: [38, 95],
    iconAnchor: [20, 40],
    popupAnchor: [-10, -10]
});
var Icon5 = L.icon({
    iconUrl: 'images/5.svg',
    iconSize: [38, 95],
    iconAnchor: [20, 40],
    popupAnchor: [-10, -10]
});
var Icon6 = L.icon({
    iconUrl: 'images/6.svg',
    iconSize: [38, 95],
    iconAnchor: [20, 40],
    popupAnchor: [-10, -10]
});
var Icon7 = L.icon({
    iconUrl: 'images/7.svg',
    iconSize: [38, 95],
    iconAnchor: [20, 40],
    popupAnchor: [-10, -10]
});

//permet convertion des AAV mis sur chaque cinéma en texte
function convertAAV(aav) {
    switch (aav) {
        case 1: return "hors zone d'attraction";
        case 2: return "très faible";
        case 3: return "faible";
        case 4: return "moyenne";
        case 5: return "forte";
        case 6: return "très forte";
        case 7: return "majeure";
        default: return "inconnu";
    }
}

function updateMap() {
    //supprime et vire tout les marqueurs du tableau
    Points.forEach(m => map.removeLayer(m));
    Points = [];

    //récupère valeurs filtres
    let regionFilter = document.getElementById("région-select").value;
    let siegeFilter = document.getElementById("siège-select").value;
    let influenceFilter = document.getElementById("influence-select").value;

    //Filtre 
    cinemas.forEach(function (c) {
        if (regionFilter !== "TOUS" && c.dep !== regionFilter) return;
        if (siegeFilter === "Moins de 500 sièges" && c.places >= 500) return;
        if (siegeFilter === "Plus de 500 sièges" && c.places < 500) return;
        if (influenceFilter !== "TOUS" && "Zone d'attraction " + convertAAV(c.AAV) !== influenceFilter
            && !(influenceFilter === "Hors zone d'attraction" && c.AAV === 1)) return;

        //choix icône selon AAV
        let icon = IconDefaut;
        if (c.AAV === 1) icon = Icon1;
        if (c.AAV === 2) icon = Icon2;
        if (c.AAV === 3) icon = Icon3;
        if (c.AAV === 4) icon = Icon4;
        if (c.AAV === 5) icon = Icon5;
        if (c.AAV === 6) icon = Icon6;
        if (c.AAV === 7) icon = Icon7;

        //Création du marqueur
        let marker = L.marker([c.lat, c.lon], { icon: icon }).addTo(map);
        marker.bindPopup(
            `<b>${c.nom}</b><br>` +
            `Nombre de places : ${c.places}<br>` +
            `${c.ville}, ${c.code}, ${c.dep}<br>` +
            `Zone d'attraction : ${convertAAV(c.AAV)}`
        );

        marker.on('dblclick', function () {
            map.setView(this.getLatLng(), 18);
        });


        Points.push(marker);
    });
}

function init() {
    map = L.map('map').setView([45.43301300, 4.32282500], 9);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 15,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    updateMap();

    //ajout des écouteurs d'évènements sur les filtres pour mise à jour de la carte.
    document.getElementById("région-select").addEventListener("change", updateMap);
    document.getElementById("siège-select").addEventListener("change", updateMap);
    document.getElementById("influence-select").addEventListener("change", updateMap);

    // Bouton Leaflet
    var Recentrer = L.control({ position: 'topright' });
    Recentrer.onAdd = function () {
        var btn = L.DomUtil.create('button', 'Refresh the map');
        btn.innerHTML = "Refresh the map";
        btn.style.background = "white";
        btn.style.border = "1px solid #555";
        btn.style.padding = "5px";
        btn.style.cursor = "pointer";

        L.DomEvent.disableClickPropagation(btn);

        btn.onclick = function () {
            map.closePopup();
            map.setView([45.43301300, 4.32282500], 9); // Vue initiale
        };

        return btn;
    };
    Recentrer.addTo(map);


    const ctx = document.getElementById('myChart');

    // Création du graphique, code prit sur https://www.chartjs.org/docs/latest/getting-started/
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Outside catchment areas',
                'Poles under 50,000 inhabitants',
                'Poles from 50,000 to under 200,000 inhabitants',
                'Poles from 200,000 to under 700,000 inhabitants',
                'Crowns from 50,000 to under 200,000 inhabitants',
                'Crowns from 200,000 to under 700,000 inhabitants',
                'Crowns of 700,000 inhabitants or more'
            ],
            datasets: [{
                label: 'Average seat count based on city catchment areas',
                data: [
                    "160",
                    "355",
                    "1166",
                    "831",
                    "193",
                    "484",
                    "384"
                ],
                backgroundColor: [
                    '#d8b2ff', // Outside
                    '#b188ff', // Very low
                    '#8c5eff', // Low
                    '#6433ff', // Medium
                    '#4210cc', // High
                    '#310099', // Very high
                    '#1f0066'  // Major
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    // initialisation de la carte
    function init() {
        map = L.map('map').setView([45.2926341, 4.1727546], 9);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 15,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        updateMap();

        //ajout des écouteurs d'évènements sur les filtres pour mise à jour de la carte.
        document.getElementById("région-select").addEventListener("change", updateMap);
        document.getElementById("siège-select").addEventListener("change", updateMap);
        document.getElementById("influence-select").addEventListener("change", updateMap);
    }
}

// appel quand le DOM est chargé
window.addEventListener('load', init); 