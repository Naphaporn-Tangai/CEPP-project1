import React ,{useState}from "react";
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
  Radio,
} from "native-base";
import {
  Ionicons,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";

export default function Elderly() {

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
              ชื่อผู้สูงอายุ
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
              เพิ่มรายชื่อผู้สูงอายุ
            </Text>
          </Box>

          <Actionsheet.Item onPress={() => handleColorSelection("นางสะอาด เอี่ยม")}>
            <Text fontFamily="Regular" fontSize="17 px" color="#35609C" >
              นางสะอาด เอี่ยม
            </Text>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => handleColorSelection("นางดาวิกา จันทร์เจ้า")}>
            <Text fontFamily="Regular" fontSize="17 px" color="#35609C" >
              นางดาวิกา จันทร์เจ้า
            </Text>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => handleColorSelection("นายดวงดี นำโชค")}>
        <Text fontFamily="Regular" fontSize="17 px" color="#35609C"   >
              นายดวงดี นำโชค
            </Text>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => handleColorSelection("นางสาริกา ดิ้นทอง")}>
            <Text fontFamily="Regular" fontSize="17 px" color="#35609C"  >
              นางสาริกา ดิ้นทอง
            </Text>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
}
