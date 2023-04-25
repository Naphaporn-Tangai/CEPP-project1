import React, { useState } from "react";
import {
  Input,
  Box,
  Button,
  HStack,
  Icon,
  Pressable,
  Text,
  Image,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../constants";
import * as ImagePicker from "expo-image-picker";
export default function AddImage() {
  const [imageUri, setImageUri] = useState(null);

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access camera roll is required!");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  return (
    <Box>
      <Pressable  onPress={takePhoto} _pressed={{ bg: "coolGray.200" }}>
        <Box paddingY={2} paddingX={70}>
          <HStack>
            <Icon
              as={<FontAwesome name="camera" />}
              size="md"
              color={COLORS.primary}
              marginRight={4}
            />        
            {imageUri ? (
              <Image
                  source={{ uri: imageUri }}
                  style={{ width: 270, height: 150  }}
                  alt="Selected Image"
                   
                />
             ) : (
             <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
              เพิ่มรูปภาพ
              </Text>
              )}
              
              
          </HStack>
        </Box>
      </Pressable>
    </Box>
  );
}
