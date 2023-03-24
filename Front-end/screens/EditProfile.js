import { View, Text, Center, Button, Pressable, Box } from "native-base";
import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";

import * as ImagePicker from "expo-image-picker";
export default function EditProfile() {
  const [imageUri, setImageUri] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      bgColor="#fff"
      safeAreaTop
    >
      <Center flex={1}>
        <Pressable onPress={pickImage} overflow="hidden">
          <Box>
            {imageUri ? (
              <Image
                source={{ uri: imageUri }}
                style={{ width: 130, height: 130, borderRadius: 100 }}
              />
            ) : (
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                }}
                style={{ width: 130, height: 130, borderRadius: 100 }}
              />
            )}
          </Box>
        </Pressable>
      </Center>
    </View>
  );
}
