import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function AddVideo() {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);

  const handleCameraPermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleRecordButtonPress = async () => {
    if (cameraRef.current) {
      try {
        const { uri } = await cameraRef.current.recordAsync();
        console.log('Video recorded:', uri);
        // ทำสิ่งที่คุณต้องการกับวิดีโอที่บันทึกที่นี่ เช่น อัพโหลดไปยังเซิร์ฟเวอร์
      } catch (error) {
        console.error('Failed to record video', error);
      }
    }
  };

  return (
   
            <Box>
      <Pressable  onPress={takePhoto} _pressed={{ bg: "coolGray.200" }}>
        <Box paddingY={2} paddingX={70}>
          <HStack>
            <Icon
              as={<FontAwesome name="video-camera" />}
              size="md"
              color={COLORS.primary}
              marginRight={4}
            />        
            
             <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
              เพิ่มวิดีโอ
              </Text>
              
          </HStack>
        </Box>
      </Pressable>
    </Box>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
  },
  recordButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'red',
  },
});
