import React, { useState } from "react";
import {
  Image,
  Box,
  Input,
  HStack,
  Icon,
  Text,
  VStack,
  Spacer,
  View,
  Center,
  Pressable,
  Button,
  IconButton,
} from "native-base";
import { AddTittle } from "../components";
import { AddImage } from "../components";
import { FontAwesome5 } from "@expo/vector-icons";

import { COLORS } from "../constants";
import { Addlocation } from "../components";

import { AddColors } from "../components";
import { AddDate } from "../components";
import { AddTime } from "../components";
import { AddSwitch } from "../components";
import { Elderly } from "../components";
import { GropElderly } from "../components";
import { Issues } from "../components";
import { DateChoose } from "../components";
import { DateRe } from "../components";

export default function ReturnDev({ navigation }) {
  const [quantity, setQuantity] = useState(0);
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      bgColor="#fff"
      safeAreaTop
    >
      <Center flex={1}>
        <Box flex={1} top="3%">
          <VStack>
            <AddTittle />
            <Box paddingX={70}>
              <HStack justifyContent="space-between">
                <Icon
                  as={FontAwesome5}
                  name="clipboard-list"
                  size="xl"
                  marginRight={3}
                  color="#35609C"
                />
                <Text
                  fontFamily="Regular"
                  fontSize="17 px"
                  color="#35609C"
                  marginRight="40%"
                >
                  อุปกรณ์ที่ยืม
                </Text>
                <Spacer />
                <Button
                  onPress={decrementQuantity}
                  width={8}
                  height={8}
                  justifyContent="center"
                  alignItems="center"
                  bg="#35609C"
                >
                  <Text fontSize={20} style={{ color: "#fff" }} w={8} h={8}>
                    -
                  </Text>
                </Button>

                <Input
                  keyboardType="numeric"
                  value={quantity.toString()}
                  onChangeText={(value) => setQuantity(parseInt(value))}
                  w={8}
                  h={8}
                />

                <Button onPress={incrementQuantity} w={8} h={8} bg="#35609C">
                  <Text fontSize={20} style={{ color: "#fff" }} w={8} h={8}>
                    +
                  </Text>
                </Button>
              </HStack>
            </Box>
            <AddImage />
            <DateRe />
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
              marginHorizontal: 45,
            }}
            onPress={() => navigation.navigate("ShowPickRe")}
          >
            บันทึก
          </Button>
        </Box>
      </Center>
    </View>
  );
}
