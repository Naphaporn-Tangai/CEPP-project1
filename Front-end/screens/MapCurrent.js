import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { Button, View } from "native-base";

import * as Location from 'expo-location';

export default function MapCurrent({ navigation }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  const handleSaveLocation = () => {
    navigation.navigate('Addlocation', { location: location });
  }

  return (
    <View style={styles.container}>
      {location && (
        <MapView style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker coordinate={{latitude: location.coords.latitude, longitude: location.coords.longitude}} />
        </MapView>
      )}
      <Button
        size="md"
        borderRadius={10}
        backgroundColor="#35609C"
        _text={{
          color: "#FFFF",
          fontFamily: "Medium",
          fontSize: "md",
        }}
        _pressed={{
          bg: "#8AA7CF",
          _text: { color: "#35609C" },
        }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          marginBottom: 60,
          marginHorizontal: 45,
        }}
        onPress={handleSaveLocation}
      >
        บันทึก
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
