import { PropTypes, useEffect, useRef, useState } from "react";
import { MdMyLocation } from "react-icons/md";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import Control from "react-leaflet-custom-control";
import { Icon } from "leaflet";
import { BoxCard } from "@/components/common/BoxCard";
// css files
import "leaflet-rotatedmarker";
import "leaflet/dist/leaflet.css";
// assets
import navigation from "@/assets/icons/navigation.svg";

const accessToken =
  "p8L2WRkDdOCAgFcGRI0naKSvNVkCSNLG7oTj2A8yDicQ3aHBWmTveiBEu6Sg1izZ";

MapComponent.propTypes = {};

export function MapComponent() {
  const customIcon = new Icon({
    iconUrl: navigation,
    iconSize: [30, 30]
  });

  const [angle, setAngle] = useState(100);
  const [markerKey, setMarkerKey] = useState(0);
  const [position, setPosition] = useState([8.9227, -79.5481]);
  const mapRef = useRef(null);

  // useEffect(() => {
  //   if (data?.lat !== undefined && data?.long !== undefined) {
  //     setPosition([data?.lat, data?.long])
  //   }
  // }, [data])

  const goToCurrentLocation = () => {
    if (mapRef.current) {
      mapRef.current.setView(position);
    }
  };

  return (
    <BoxCard className="w-full h-full overflow-hidden relative isolate flex flex-col p-0.5">
      <div className="w-full h-full bg-primary mt-auto relative isolate mx-auto">
        {/* map */}
        <MapContainer
          ref={mapRef}
          center={position}
          zoom={14}
          scrollWheelZoom={true}
          attributionControl={false}
        >
          {/* <TileLayer */}
          {/*   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" */}
          {/* /> */}
          <TileLayer
            url={`https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=${accessToken}`}
          />

          <Marker
            key={markerKey}
            position={position}
            icon={customIcon}
            rotationAngle={angle}
            rotationOrigin="center center"
          >
            <Popup>{`${position[0]}, ${position[1]}`}</Popup>
            <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
              {`${position[0].toFixed(2)}, ${position[1].toFixed(2)}`}
            </Tooltip>
          </Marker>
          <Control prepend position="topright">
            <MdMyLocation
              onClick={goToCurrentLocation}
              className="text-2xl cursor-pointer transition-colors text-accent-foreground hover:text-accent-foreground/60"
            />
          </Control>
        </MapContainer>
      </div>
    </BoxCard>
  );
}
