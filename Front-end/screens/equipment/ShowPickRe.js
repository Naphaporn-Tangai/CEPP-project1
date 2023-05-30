import React, { useState } from "react";
import {
  HStack,
  View,
  VStack,
  Button,
  Center,
  Box,
  Avatar,
  Text,
  Spacer,
  Pressable,
  Actionsheet,
  Icon,
  Image,
  Badge,
} from "native-base";
import { Addlocation } from "../../components";
import { AddImage } from "../../components";
import { UserPick } from "../../constants";

import { FontAwesome5 } from "@expo/vector-icons";
export default function ShowPickRe({ navigation }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const [showActionsheet, setShowActionsheet] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openActionsheet = (item) => {
    setSelectedItem(item);
    setShowActionsheet(true);
  };

  const closeActionsheet = () => {
    setShowActionsheet(false);
    setSelectedItem(null);
  };
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      safeAreaTop
      bgColor="#fff"
    >
      <Center flex={1}>
        <Box flex={1} top="3%">
          <HStack
            space={5}
            mx={2}
            mb={3}
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Button
              onPress={() => handleOptionSelect("option1")}
              variant="Solid"
              style={{
                backgroundColor:
                  selectedOption === "option1" ? "#fff" : "#35609C",
              }}
              size="sm"
              w="40%"
              onPress={() => navigation.navigate("PickUpDev")}
            >
              <Text
                style={{
                  color: selectedOption === "option1" ? "#35609C" : "#fff",
                }}
                fontFamily="Regular"
                fontSize="md"
              >
                เบิกอุปกรณ์
              </Text>
            </Button>
            <Button
              onPress={() => handleOptionSelect("option2")}
              variant="Solid"
              style={{
                backgroundColor:
                  selectedOption === "option2" ? "#35609C" : "#8AA7CF",
              }}
              size="sm"
              w="40%"
              onPress={() => navigation.navigate("ReturnDev")}
            >
              <Text
                style={{
                  color: selectedOption === "option2" ? "#fff" : "#35609C",
                }}
                fontFamily="Regular"
                fontSize="md"
              >
                คืนอุปกรณ์
              </Text>
            </Button>
          </HStack>
          <Box marginTop={2}>
            {UserPick.map((item) => (
              <React.Fragment key={item.id}>
                <Pressable
                  key={item.id}
                  _pressed={{ bg: "coolGray.200" }}
                  onPress={() => openActionsheet(item)}
                  marginBottom={2}
                  borderWidth="1"
                  rounded="xl"
                  borderColor="#DDDFE1"
                  pl={["4", "4"]}
                  pr={["0", "5"]}
                  py="3"
                >
                  <HStack space={[3.5, 3]} justifyContent="space-between">
                    <Avatar size="48px" source={{ uri: item.avatarUrl }} />
                    <Badge
                      colorScheme={item.colorBadge}
                      alignSelf="center"
                      position="absolute"
                      top="1%"
                      right="2"
                      variant="solid"
                    >
                      <Text fontFamily="Regular" fontSize="sm" color="#fff">
                      {item.badge}</Text>
                    </Badge>
                    <VStack>
                      <Text color="#35609C" fontFamily="Medium">
                        {item.tool}
                      </Text>
                      <Text color="#8AA7CF" fontFamily="Regular">
                        {item.date}
                      </Text>
                    </VStack>
                    <Spacer />
                  </HStack>
                </Pressable>
                {selectedItem && selectedItem.id === item.id && (
                  <Actionsheet
                    isOpen={showActionsheet}
                    onClose={closeActionsheet}
                  >
                    <Actionsheet.Content>
                      <Actionsheet.Item
                        onPress={closeActionsheet}
                        key={item.id}
                      >
                        <Box ml={10}>

                          <Image
                            source={{ uri: item.photo }}
                            size="2xl"
                            mb={5}
                            alt="icon"
                          />                        
                          <Badge
                      colorScheme={item.colorBadge}
                      alignSelf="center"
                      position="absolute"
                      top="-5%"
                      right="-20%"
                      variant="solid"
                    >
                      <Text fontFamily="Regular" fontSize="sm" color="#fff">
                      {item.badge}</Text>
                    </Badge>
                          <HStack mb={4}>
                            <Icon
                              as={<FontAwesome5 name="calendar-alt" />}
                              size="md"
                              color="#35609C"
                              marginRight={5}
                            />
                            <Text
                              fontFamily="Regular"
                              fontSize="17 px"
                              color="#35609C"
                            >
                              วันที่เบิก : {item.datePick}
                            </Text>
                          </HStack>

                          <HStack mb={4}>
                            <Icon
                              as={<FontAwesome5 name="calendar-alt" />}
                              size="md"
                              color="#35609C"
                              marginRight={5}
                            />
                            <Text
                              fontFamily="Regular"
                              fontSize="17 px"
                              color="#35609C"
                            >
                              วันที่คืน : {item.dateRe}
                            </Text>
                          </HStack>

                          <HStack mb={4}>
                            <Icon
                              as={<FontAwesome5 name="calendar-alt" />}
                              size="md"
                              color="#35609C"
                              marginRight={5}
                            />
                            <Text
                              fontFamily="Regular"
                              fontSize="17 px"
                              color="#35609C"
                            >
                              อุปกรณ์ที่ยืม : {item.numTool}
                            </Text>
                          </HStack>
                        </Box>
                      </Actionsheet.Item>
                    </Actionsheet.Content>
                  </Actionsheet>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Center>
    </View>
  );
}
