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
import { Elderly } from "../components";
import { GropElderly } from "../components";
import { Issues } from "../components";
import { DateChoose } from "../components";
import { AddFf } from "../components";

export default function SchNewCg({ navigation }) {
  const { isOpen, onOpen, onClose } = useDisclose();
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
            <Addlocation />
            <AddDate />
            <AddTime />
            <DateChoose />
            <Elderly />
            <GropElderly />
            <Issues />
            <AddColors />
            <AddSwitch />
           
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
            onPress={() => navigation.navigate("HomeCg")}
          >
            บันทึก
          </Button>
        </Box>
      </Center>
    </View>
  );
}
