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
  Button,
} from "native-base";
import {
  Ionicons,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import React , {useState}from "react";

export default function GropElderly() {
  const { isOpen, onOpen, onClose } = useDisclose();
  
  const [selectedColor, setSelectedColor] = useState();

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    onClose();
  }
  return (
    <Box>
      <Pressable
        paddingX={70}
        paddingY={2}
        onPress={onOpen}
        _pressed={{ bg: "coolGray.200" }}
      >
        <Box>
          <HStack justifyContent="space-between">
            <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
              กลุ่มผู้สูงอายุ
            </Text>
            <Spacer />
            <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
             {selectedColor}
            </Text>
            <Icon as={Entypo} name="chevron-right" size="xl" />
          </HStack>
        </Box>
      </Pressable>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={50} pl={4}>
            <Text fontSize="md" color="#000" fontFamily="Medium" ml={3}>
              กลุ่มภาวะพึ่งพิง
            </Text>
          </Box>

          <Actionsheet.Item onPress={() => handleColorSelection("กลุ่มติดบ้าน")}>
            <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
              กลุ่มติดบ้าน
            </Text>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => handleColorSelection("กลุ่มติดเตียง")}>
            <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
              กลุ่มติดเตียง
            </Text>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
}
