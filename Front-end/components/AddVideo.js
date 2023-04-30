import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function AddVideo() {
 
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
