import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css"; // Import leaflet styles directly

function LeafletMap() {
  useEffect(() => {
    // Make sure window.L is available (this is where the Leaflet object resides)
    if (window.L) {
      const OSM_URL = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
      const OSM_ATTRIB =
        '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
      const osmLayer = L.tileLayer(OSM_URL, { attribution: OSM_ATTRIB });

      const WAQI_URL =
        "https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=_TOKEN_ID_";
      const WAQI_ATTR =
        'Air Quality Tiles &copy; <a href="http://waqi.info">waqi.info</a>';
      const waqiLayer = L.tileLayer(WAQI_URL, { attribution: WAQI_ATTR });

      const map = L.map("map").setView([51.505, -0.09], 11);
      map.addLayer(osmLayer).addLayer(waqiLayer);
    }
  }, []);

  return <div id="map" style={{ height: "380px" }} />;
}

export default LeafletMap;
