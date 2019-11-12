var view = new ol.View({
    center: [-54.585956, -25.538514],
    zoom: 12,
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