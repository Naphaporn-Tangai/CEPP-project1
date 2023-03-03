import React, { useState } from "react";
import {
  HStack,
  View,
  VStack,
  Button,
  Center,
  Box,
  Footer,
  FooterTab,
  Text
} from "native-base";
import { Addlocation } from "../components";
import { AddImage } from "../components";
import { ButtonSave } from "../components";

export default function InOutScreen({ navigation }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      safeAreaTop
      bgColor="#fff"
    >
      <Center flex={1}>
        <Box flex={1} top="5%">
          <HStack space={3} mx={10} mb={3}>
            <Button
              
              onPress={() => handleOptionSelect('option1')}
              variant="outline"
              style={{ backgroundColor: selectedOption === 'option1' ? '#35609C' : '#fff' }}
              borderColor="#35609C"
              w="50%"
            >
              <Text style={{ color: selectedOption === 'option1' ? '#fff' : '#35609C' }} fontFamily="Regular" fontSize="md">
              เข้างาน
              </Text>
            </Button>
            <Button
              
              onPress={() => handleOptionSelect('option2')}
              variant="outline"
              style={{ backgroundColor: selectedOption === 'option2' ? '#35609C' : '#fff' }}
              borderColor="#35609C"
              w="50%"
            >
              <Text style={{ color: selectedOption === 'option2' ? '#fff' : '#35609C' }} fontFamily="Regular" fontSize="md">
              ออกงาน
              </Text>
            </Button>
          </HStack>

          <VStack right={30} mb={3}>
            <Addlocation />
            <AddImage />
          </VStack>

          <Button
    size="md"
    borderRadius={10}
    backgroundColor="#35609C"
    _text={{
      color: "#FFFF",
      fontFamily: "Medium",
      fontSize: "md",
    }}
    _pressed={{
      bg: "#8AA7CF",
      _text: { color: "#35609C" },
    }}
    style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      marginBottom: 60,
      marginHorizontal: 20,
    }}
    onPress={() => navigation.navigate('BottomTapCG')}
  >
    บันทึก
  </Button>
        </Box>
      </Center>
    </View>
  );
}
