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
import React ,{useState}from "react";

export default function Issues() {
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
              ประเด็นปัญหา
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
              ประเด็นปัญหา
            </Text>
          </Box>

          
            <Actionsheet.Item onPress={() => handleColorSelection("กลั้นปัสสาวะไม่ได้")}>
              <Text fontFamily="Regular" fontSize="17 px" color="#35609C" >
              กลั้นปัสสาวะไม่ได้
              </Text>
            </Actionsheet.Item>
            <Actionsheet.Item onPress={() => handleColorSelection("ความสามารถในการมองเห็น")}>
              <Text fontFamily="Regular" fontSize="17 px" color="#35609C" >
              ความสามารถในการมองเห็น
              </Text>
            </Actionsheet.Item>
            <Actionsheet.Item onPress={() => handleColorSelection("ความสามารถในการมองเห็น")}>
              <Text fontFamily="Regular" fontSize="17 px" color="#35609C" >
              ความสามารถในการมองเห็น
              </Text>
            </Actionsheet.Item>
            <Actionsheet.Item onPress={() => handleColorSelection("เข้าห้องน้ำด้วยตนเองไม่ได้")}>
              <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
              เข้าห้องน้ำด้วยตนเองไม่ได้
              </Text>
            </Actionsheet.Item>
            <Actionsheet.Item onPress={() => handleColorSelection("ซึมเศร้า")}>
              <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
              ซึมเศร้า
              </Text>
            </Actionsheet.Item>
            <Actionsheet.Item onPress={() => handleColorSelection("นอนไม่หลับ")}>
              <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
              นอนไม่หลับ
              </Text>
            </Actionsheet.Item>
       
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
}
