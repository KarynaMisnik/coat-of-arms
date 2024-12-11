import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ lat, lon, municipality }) => {
  if (!lat || !lon) {
    return <div>No location data available.</div>;
  }

  return (
    <div className="map-container">
      <Tooltip title="Refresh the page to see right location" arrow>
        <IconButton
          sx={{
            position: "absolute",
            zIndex: 1000,
            top: { xs: "10px", sm: "30px" },
            right: { xs: "20px", sm: "40px" },
          }}
        >
          <InfoIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      {/* Leaflet Map */}
      <MapContainer
        center={[lat, lon]}
        zoom={13}
        style={{
          height: "85%",
          width: "90%",
          border: "2px solid var(--black)",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lon]}>
          <Popup>
            <strong>{municipality}</strong>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
