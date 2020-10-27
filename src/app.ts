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

type DataType = {
    lat: number
    lng: number
    weight: number
}

const fetchApiKey = () => {
    return require('../apikey.json');
};

const initMap = async () => {
    await new Loader({
        apiKey: fetchApiKey().apikey,
        libraries: ['visualization']
    }).loadPromise();

    const jsonData = JSON.parse(document.getElementById('data')?.textContent!) as DataType[];

    const data = jsonData.map((elm) => {
        return {
            location: new google.maps.LatLng(elm.lat, elm.lng),
            weight: elm.weight
        }
    });

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