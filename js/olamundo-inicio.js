
var view = new ol.View({
    center: [0, 0],
    zoom: 0,
    projection: 'EPSG:4326'
});
var osm = new ol.layer.Tile({
    title: 'OSM',
    type: 'base',
    visible: true,
    source: new ol.source.OSM()
});
var map = new ol.Map({
    target: 'map',
    layers: [osm],
    view: view
});