import { Actionsheet, useDisclose, Box, Input, HStack, Icon, Text, Pressable, Spacer,  } from "native-base";
import React , { useState } from 'react'
import {  Entypo } from "@expo/vector-icons";
import { COLORS } from '../constants';

export default function AddColors() {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();

  const [selectedColor, setSelectedColor] = useState();

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    onClose();
  }

  return (
  <Box >
    <Pressable
    paddingX={70}
    paddingY={2}
      onPress={onOpen} _pressed={{ bg: "coolGray.200" }} >
      <Box>
        <HStack justifyContent="space-between">

          <Text fontFamily='Regular' fontSize="17 px" color="#35609C">สี</Text>
          <Spacer />
          <Box style={{ backgroundColor: selectedColor }} w="7" h="7" borderRadius={50}></Box>
          <Icon as={Entypo} name="chevron-right" size="xl" />
        </HStack>
      </Box>
    </Pressable>



    <Actionsheet isOpen={isOpen} onClose={onClose} >
      <Actionsheet.Content >
        <Box w="100%" h={50} pl={4} >
          <Text fontSize="md" color="#000" fontFamily='Medium' ml={3}>
            กำหนดสี
          </Text>
        </Box>

        <HStack space={4} mb={5}>
          <Actionsheet.Item bg="#213D64" rounded="100" w="18.5%" h="70" onPress={() => handleColorSelection("#213D64")}></Actionsheet.Item>
          <Actionsheet.Item bg="#441555" rounded="100" w="18.5%" h="70" onPress={() => handleColorSelection("#441555")}></Actionsheet.Item>
          <Actionsheet.Item bg="#308911" rounded="100" w="18.5%" h="70" onPress={() => handleColorSelection("#308911")}></Actionsheet.Item>
          <Actionsheet.Item bg="#AD0000" rounded="100" w="18.5%" h="70" onPress={() => handleColorSelection("#AD0000")}></Actionsheet.Item>
        </HStack>
        <HStack space={4} mb={5}>
          <Actionsheet.Item bg="#346CB6" rounded="100" w="18.5%" h="70" onPress={() => handleColorSelection("#346CB6")}></Actionsheet.Item>
          <Actionsheet.Item bg="#772A93" rounded="100" w="18.5%" h="70" onPress={() => handleColorSelection("#772A93")}></Actionsheet.Item>
          <Actionsheet.Item bg="#49AC26" rounded="100" w="18.5%" h="70" onPress={() => handleColorSelection("#49AC26")}></Actionsheet.Item>
          <Actionsheet.Item bg="#CE1414" rounded="100" w="18.5%" h="70" onPress={() => handleColorSelection("#CE1414")}></Actionsheet.Item>
        </HStack>
        <HStack space={4} mb={5}>
          <Actionsheet.Item bg="#7296C7" rounded="100" w="18.5%" h="70" onPress={() => handleColorSelection("#7296C7")}></Actionsheet.Item>
          <Actionsheet.Item bg="#A54CC5" rounded="100" w="18.5%" h="70" onPress={() => handleColorSelection("#A54CC5")}></Actionsheet.Item>
          <Actionsheet.Item bg="#61D638" rounded="100" w="18.5%" h="70" onPress={() => handleColorSelection("#61D638")}></Actionsheet.Item>
          <Actionsheet.Item bg="#F01A1A" rounded="100" w="18.5%" h="70" onPress={() => handleColorSelection("#F01A1A")}></Actionsheet.Item>
        </HStack>
        <HStack space={4} mb={5}>
          <Actionsheet.Item bg="#8AA7CF" rounded="100" w="18.5%" h="70" onPress={() => handleColorSelection("#8AA7CF")}></Actionsheet.Item>
          <Actionsheet.Item bg="#CF5CF8" rounded="100" w="18.5%" h="70" onPress={() => handleColorSelection("#CF5CF8")}></Actionsheet.Item>
          <Actionsheet.Item bg="#60E930" rounded="100" w="18.5%" h="70" onPress={() => handleColorSelection("#60E930")}></Actionsheet.Item>
          <Actionsheet.Item bg="#E73939" rounded="100" w="18.5%" h="70" onPress={() => handleColorSelection("#E73939")}></Actionsheet.Item>
        </HStack>

      </Actionsheet.Content>
    </Actionsheet>

  </Box>
  )
}