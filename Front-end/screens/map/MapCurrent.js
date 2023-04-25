import {
  Input,
  Box,
  Button,
  HStack,
  Icon,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Location from "expo-location";
import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet, View } from "react-native";

export default function MapCurrent() {
  const navigation = useNavigation();
  const route = useRoute();
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      let addressResponse = await Location.reverseGeocodeAsync({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
      setAddress(addressResponse[0]);
    })();
  }, []);

  const handleSaveLocation = async () => {
    try {
      const locationDetails = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      const { name, street, region, country, district, postalCode } =
        locationDetails[0];
      const address = `${name} ${street}, จังหวัด${region}, ${country}, ${district}, ${postalCode}`;
      navigation.navigate("InOutScreen", { address: address });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
        </MapView>
      )}

      <Pressable
        backgroundColor="#ffff"
        style={{
          position: "absolute",
          marginHorizontal: 20,
          paddingVertical: 25,
          paddingHorizontal: 30,
          top: "5%",
          justifyContent: "center",
          flex: 1,
          alignItems: "center",
          left: 0,
          right: 0,
        }}
      >
        {address && (
          <VStack>
            <Text fontSize={17} fontWeight="bold">
              {address.name}
            </Text>
            <Text fontSize={16}>
             
              {address.street}, จังหวัด {address.region}, {address.country},
              {address.district}, {address.postalCode}
            </Text>
          </VStack>
        )}
      </Pressable>

      <Button
        onPress={handleSaveLocation}
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
          marginHorizontal: 25,
        }}
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
    width: "100%",
    height: "100%",
  },
});
