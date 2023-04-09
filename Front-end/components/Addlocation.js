import { Input, Box, Button, HStack, Icon, Pressable, Text } from "native-base";
import React, { useState, useEffect } from 'react'
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';

export default function Addlocation(props) {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
    setLatitude(currentLocation.coords.latitude);
    setLongitude(currentLocation.coords.longitude);
  }

  return (
    <Box mb={1}>
      <Pressable
        paddingY={2}
        _pressed={{ bg: "coolGray.200" }}
        onPress={() => navigation.navigate("MapCurrent")}>
        <Box paddingX={70}>
          <HStack>
            <Icon
              as={<Ionicons name="location-sharp" />}
              size="md"
              color={COLORS.primary}
              marginRight={5}
            />
            <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
              {latitude && longitude ? `${latitude}, ${longitude}` : "สถานที่"}
            </Text>
          </HStack>
        </Box>
      </Pressable>
    </Box>

  )
}
