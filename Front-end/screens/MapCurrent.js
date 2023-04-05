import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';

const GOOGLE_MAPS_APIKEY = 'AIzaSyDh2INnXDJTTgeX7MLqTcTaplQ4xuR9w2w';

export default function MapCurrent() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.watchPosition(
      (position) => {
        setLocation(position.coords);
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  return (
    <MapView
      style={{ flex: 1 }}
      region={{
        latitude: location ? location.latitude : 37.78825,
        longitude: location ? location.longitude : -122.4324,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      showsUserLocation={true}
      followsUserLocation={true}
      zoomControlEnabled={true}
      minZoomLevel={15}
      maxZoomLevel={20}
      loadingEnabled={true}
      loadingIndicatorColor="#666666"
      loadingBackgroundColor="#eeeeee"
      provider="google"
      customMapStyle={[]}
      customMapStyleName=""
      mapType="standard"
      showsMyLocationButton={false}
      toolbarEnabled={false}
    >
      {location && (
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="You are here"
        />
      )}
    </MapView>
  );
}
