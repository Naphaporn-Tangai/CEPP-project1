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
import React from "react";
import {
  Ionicons,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { COLORS } from "../constants";
import { Addlocation } from "../components";
import { AddTittle } from "../components";
import { AddColors } from "../components";
import { AddDate } from "../components";
import { AddTime } from "../components";
import { AddSwitch } from "../components";

export default function SchNewCg() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      safeAreaTop
    >
      <Center flex={1}>
        <Box flex={1} top="3%">
          <VStack mb={10}>
            <AddTittle />
            <Addlocation />
            <AddColors />
            <AddDate />
            <AddTime />
            <AddSwitch />

            <Pressable
              paddingX={70}
              onPress={onOpen}
              _pressed={{ bg: "coolGray.200" }}
            >
              <Box>
                <HStack justifyContent="space-between">
                  <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
                    สี
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
                    กำหนดสี
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
              marginHorizontal: 40,
            }}
            onPress={() => navigation.navigate("BottomTapCG")}
          >
            บันทึก
          </Button>
        </Box>
      </Center>
    </View>
  );
}
