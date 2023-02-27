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
} from "native-base";
import { Addlocation } from "../components";
import { AddImage } from "../components";
import { ButtonSave } from "../components";

export default function InOutScreen({ navigation }) {
  const [choice, setChoice] = useState("");
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      safeAreaTop
    >
      <Center flex={1}>
        <Box flex={1} top="3%">
          <HStack space={3} mx={10} mb={3}>
            <Button
              value="1"
              onPress={() => setChoice(1)}
              variant="outline"
              _text={{
                color: "#35609C",
                fontFamily: "Regular",
                fontSize: "md",
              }}
              isPressed={choice === 1}
              _pressed={{
                _text: {
                  color: "#fff",
                },
                bg: "#35609C",
              }}
              borderColor="#35609C"
              w="50%"
            >
              เข้างาน
            </Button>
            <Button
              value="2"
              onPress={() => setChoice(2)}
              variant="outline"
              _text={{
                color: "#35609C",
                fontFamily: "Regular",
                fontSize: "md",
              }}
              isPressed={choice === 2}
              _pressed={{
                _text: {
                  color: "#fff",
                },
                bg: "#35609C",
              }}
              borderColor="#35609C"
              w="50%"
            >
              ออกงาน
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
      marginBottom: 40,
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
