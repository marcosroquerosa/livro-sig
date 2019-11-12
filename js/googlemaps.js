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
var bingmaps = new ol.layer.Tile({
    title: 'Bing Maps',
    type: 'base',
    visible: true,
    source: new ol.source.BingMaps({
        key: 'Am7KKFUU2nGTBPOH92YZqu7zM0_VRX9JRlA4AuTUphLtqiNd5CYwDGR-Ixf2zBRQ',
        imagerySet: 'Road'
    })
});
var googlemaps = new ol.layer.Tile({
    title: 'Google Maps',
    type: 'base',
    visible: true,
    source: new ol.source.XYZ({
        url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
        attributions: '<a href="http://maps.google.com">Google Maps</a>'
    })
});
var map = new ol.Map({
    target: 'map',
    layers: [googlemaps],
    view: view
});