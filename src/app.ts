import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Loader } from '@googlemaps/js-api-loader';

declare var google: {
    maps: {
        LatLng: any
        Map: any
        visualization: any
    }
};

const fetchApiKey = async () => {
    const resp = await fetch('/apikey.json');
    return await resp.json() as {apikey: string};
};

const initMap = async () => {

    await new Loader({
        apiKey: (await fetchApiKey()).apikey,
        libraries: ['visualization']
    }).loadPromise();

    const data = [
        {location: new google.maps.LatLng(35.6811673, 139.7670516), weight: 1.1},

        {location: new google.maps.LatLng(35.9157546, 139.5088025), weight: 1},

        {location: new google.maps.LatLng(35.4529118, 139.4550275), weight: 0.9},

        {location: new google.maps.LatLng(35.652848, 139.7104629), weight: 0.9},

        {location: new google.maps.LatLng(35.7146163,139.7966369), weight: 0.9},

        {location: new google.maps.LatLng(35.706112, 139.6242348), weight: 0.94},

        {location: new google.maps.LatLng(35.5565084, 139.502266), weight: 0.94},

        {location: new google.maps.LatLng(35.6331633, 140.0272211), weight: 0.88},
    ];

    const tokyo = new google.maps.LatLng(35.6811673, 139.7670516);

    const map = new google.maps.Map(document.getElementById("map"), {
        center: tokyo,
        zoom: 10,
        mapTypeControl: false,
        zoomControl: false,
        fullscreenControl: false,
        rotateControl: false,
        streetViewControl: false,
    });

    const heatmap = new google.maps.visualization.HeatmapLayer({
        data: data,
        radius: 130,
    });
    heatmap.setMap(map);
}

window.addEventListener('DOMContentLoaded', () => {
    initMap();
});