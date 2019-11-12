var view = new ol.View({
    center: [-54.585956, -25.538514],
    zoom: 11,
    projection: 'EPSG:4326'
});
var osm = new ol.layer.Tile({
    title: 'OSM',
    type: 'base',
    visible: true,
    source: new ol.source.OSM()
});
var geojsonfoz = {
    'type': 'FeatureCollection',
    'crs': {
        'type': 'name',
        'properties': { 'name': 'EPSG:4326' }
    },
    'features': [{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [-54.479032, -25.613642]
        }, "properties": { "name": "Parque Nacional do Iguaçu" }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [-54.483093, -25.614439]
        }, "properties": { "name": "Parque das Aves" }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [-54.590132, -25.589771]
        }, "properties": { "name": "Marco das Três Fronteiras" }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [-54.599119, -25.474573]
        }, "properties": { "name": "Templo Budista" }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [-54.584241, -25.446901]
        }, "properties": { "name": "Complexo Turístico Itaipu" }
    }]
};

var dadosvetoriais = new ol.source.Vector({
    features: (new ol.format.GeoJSON()).readFeatures(geojsonfoz)
});

var icone = new ol.style.Style({
    image: new ol.style.Icon(({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'data/star.png'
    }))
});

var pontos = new ol.layer.Vector({
    source: dadosvetoriais,
    style: icone
});

var map = new ol.Map({
    target: 'map',
    layers: [osm, pontos],
    view: view
});

// Exibir informação do nome no clique do mouse.
var element = document.getElementById('popup');

var popup = new ol.Overlay({
    element: element,
    positioning: 'bottom-center',
    stopEvent: false,
    offset: [0, -50]
});

map.addOverlay(popup);

// popup clique do mouse
map.on('click', function (evt) {
    var feature = map.forEachFeatureAtPixel(evt.pixel,
        function (feature) {
            return feature;
        });
    if (feature) {
        var coordinates = feature.getGeometry().getCoordinates();
        popup.setPosition(coordinates);
        $(element).popover({
            placement: 'top',
            html: true,
            content: feature.get('name')
        });
        $(element).popover('show');
    } else {
        $(element).popover('destroy');
    }
});