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
import React from 'react'

export default function Issues() {
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
                  ประเด็นปัญหา                  
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
                  ประเด็นปัญหา
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