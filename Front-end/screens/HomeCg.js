import React, { Component } from "react";
import {
  Text,
  Avatar,
  Center,
  HStack,
  Box,
  VStack,
  IconButton,
  Icon,
  Badge,
  FlatList,
  Spacer,
  Button,
  Image,
  View,
  Pressable
} from "native-base";
import {
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { Video, Date, COLORS } from "../constants";
import { PagerView } from "react-native-pager-view";
import { ListDate, ProfileNav } from "../components";
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeCg({ navigation }) {
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      top="5%"
      bgColor="#fff"
    >
      <Center flex={1}>
      <ScrollView showsVerticalScrollIndicator={false} >
          <VStack>
            <ProfileNav />
            <Box marginTop={55}>
            <ListDate/>
            </Box>
            <Box bg="#35609C" p="5" rounded="xl" marginBottom={5} mx="6" marginTop={9}>
              <HStack justifyContent="space-between" alignItems="center">
                <VStack>
                  <Text fontSize="md" fontFamily="Regular" color="#fff">
                    นัดประชุมกับ CM
                  </Text>
                  <Text fontSize="sm" fontFamily="Regular" color="#fff">
                    10:00AM - 11:00 AM
                  </Text>
                  <Text
                    fontSize="sm"
                    fontFamily="Regular"
                    color="#fff"
                    marginTop={5}
                  >
                    สถานที่: Online
                  </Text>
                </VStack>
                <Spacer />
                <HStack>
                  <Badge
                    colorScheme="success"
                    alignSelf="center"
                    marginTop={16}
                    variant="solid"
                    rounded="xl"
                    _text={{
                      color: "white",
                      fontFamily: "Regular",
                    }}
                  >
                    พรุ่งนี้
                  </Badge>
                </HStack>
              </HStack>
            </Box>
            <Box justifyContent="center" alignItems="center" marginBottom={10}>
              <HStack space={10}>
                <VStack justifyContent="center" alignItems="center" space={1}>
                  <IconButton
                    icon={
                      <Icon
                        size="19"
                        as={Ionicons}
                        name="bookmark"
                        color="#35609C"
                      />
                    }
                    bg="#EBF3FE"
                    rounded="30"
                    p={4}
                    onPress={() => navigation.navigate("Article")}
                  />
                  <Text color="#35609C" fontFamily="Regular" fontSize="12">
                    บทความ
                  </Text>
                </VStack>
                <VStack justifyContent="center" alignItems="center" space={1}>
                  <IconButton
                    icon={
                      <Icon
                        size="19"
                        as={FontAwesome}
                        name="play-circle"
                        color="#35609C"
                        pl={0.5}
                      />
                    }
                    bg="#EBF3FE"
                    rounded="30"
                    p={4}
                    onPress={() => navigation.navigate("Clip")}
                  />
                  <Text color="#35609C" fontFamily="Regular" fontSize="12">
                    สื่อความรู้
                  </Text>
                </VStack>
                <VStack justifyContent="center" alignItems="center" space={1}>
                  <IconButton
                    icon={
                      <Icon
                        size="19"
                        as={FontAwesome5}
                        name="clipboard-list"
                        color="#35609C"
                        pl={0.5}
                      />
                    }
                    bg="#EBF3FE"
                    rounded="30"
                    p={4}
                    onPress={() => navigation.navigate("ShowPickRe")}
                  />
                  <Text color="#35609C" fontFamily="Regular" fontSize="12">
                    เบิกอุปกรณ์
                  </Text>
                </VStack>
                <VStack justifyContent="center" alignItems="center" space={1}>
                  <IconButton
                    icon={
                      <Icon
                        size="19"
                        as={FontAwesome}
                        name="exclamation-triangle"
                        color="#35609C"
                      />
                    }
                    bg="#EBF3FE"
                    rounded="30"
                    p={4}
                    onPress={() => navigation.navigate("Report")}
                  />
                  <Text color="#35609C" fontFamily="Regular" fontSize="12">
                    แจ้งปัญหา
                  </Text>
                </VStack>
              </HStack>
            </Box>
            <Box justifyContent="center" alignItems="center">
              <HStack space={5}>
                <Pressable
                  w="40%"
                  py="30 px"
                  borderRadius={10}
                  _pressed={{ bg: "coolGray.200" }}
                  onPress={() => navigation.navigate("InOutScreen")}
                  borderWidth={1.5}
                  borderColor="#DDDFE1"
                >
                  <Box >
                    <VStack justifyContent="center" alignItems="center">
                      <Text
                        fontFamily="Medium"
                        fontSize="18 px"
                        color="#35609C"
                        marginBottom={5}
                      >
                        ลงชื่อเข้างาน
                      </Text>

                      <Icon as={Feather} name="user-check" size={33} color="#35609C"/>
                    </VStack>
                  </Box>
                </Pressable>
                <Pressable
                  w="40%"
                  py="30 px"
                  borderRadius={10}
                  _pressed={{ bg: "coolGray.200" }}
                  onPress={() => navigation.navigate("EventDay")}
                  borderWidth={1.5}
                  borderColor="#DDDFE1"
                >
                  <Box>
                    <VStack justifyContent="center" alignItems="center">
                      <Text
                        fontFamily="Medium"
                        fontSize="18 px"
                        color="#35609C"
                        marginBottom={5}
                      >
                        กำหนดการ
                      </Text>

                      <Icon as={MaterialCommunityIcons} name="calendar-clock" size={33} color="#35609C"/>
                    </VStack>
                  </Box>
                </Pressable>

        
              </HStack>
            </Box>
          </VStack>
      </ScrollView>
      </Center>
    </View>
  );
}
