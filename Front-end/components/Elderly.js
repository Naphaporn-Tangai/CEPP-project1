
import React from 'react'
import {
    Actionsheet,
    useDisclose,
    Box,
    Input,
    HStack,
    Icon,
    Text,
    VStack,
    Spacer,
    Switch,
    View,
    Center,
    Pressable,
    Button
  } from "native-base";
  import {
    Ionicons,
    FontAwesome,
    FontAwesome5,
    MaterialCommunityIcons,
    Entypo,
  } from "@expo/vector-icons";

export default function Elderly() {
    const {
        isOpen,
        onOpen,
        onClose
      } = useDisclose();
  return (
    <Box mb={2}>
      <Pressable
              paddingX={60}
              paddingY={2}
              onPress={onOpen}
              _pressed={{ bg: "coolGray.200" }}
            >
              <Box>
                <HStack justifyContent="space-between">
                  <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
                  ชื่อผู้สูงอายุ                  
                  </Text>
                  <Spacer />
                  <Icon as={Entypo} name="chevron-right" size="xl" />
                </HStack>
              </Box>
            </Pressable>

            <Actionsheet isOpen={isOpen} onClose={onClose}>
              <Actionsheet.Content>
                <Box w="100%" h={50} pl={4}>
                  <Text fontSize="md" color="#000" fontFamily="Medium" ml={3}>
                   เพิ่มรายชื่อผู้สูงอายุ
                  </Text>
                </Box>

                <HStack space={4} mb={5}>
                  <Actionsheet.Item></Actionsheet.Item>
                  <Actionsheet.Item></Actionsheet.Item>
                  <Actionsheet.Item></Actionsheet.Item>
                  <Actionsheet.Item></Actionsheet.Item>
                </HStack>
              </Actionsheet.Content>
            </Actionsheet>
    </Box>
  )
}