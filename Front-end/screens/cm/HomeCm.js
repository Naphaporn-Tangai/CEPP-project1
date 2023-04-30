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
  View,
  Stack,
  Pressable
} from "native-base";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { UserCG } from "../../constants";
import { ListDate, ProfileNav } from "../../components";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeCm({ navigation }) {
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      bgColor="#fff"
      top="2%"
    >
      <Center flex={1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack>
            <Box mx="6" top="5%" flex={1}>
              <HStack justifyContent="space-between" alignItems="center">
                <Avatar
                  bg="green.500"
                  mr="2"
                  source={{
                    uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                  }}
                >
                  RS
                </Avatar>
                <VStack>
                  <Text style={{ fontFamily: "Medium", color: "#35609C" }}>
                    นายกันต์ มากทรัพย์สิน
                  </Text>
                  <Text style={{ fontFamily: "Regular", color: "#8AA7CF" }}>
                    Care manager
                  </Text>
                </VStack>
                <Spacer />
                <HStack>
                  <IconButton
                    onPress={() => navigation.openDrawer()}
                    icon={
                      <Icon
                        as={FontAwesome5}
                        name="bars"
                        size="5"
                        color="#B5B9BC"
                      />
                    }
                  />
                </HStack>
              </HStack>
            </Box>

            <Box marginTop={79}>
              <ListDate />
            </Box>
            <Box
              bg="#35609C"
              p="5"
              rounded="xl"
              marginBottom={5}
              mx="6"
              marginTop={9}
            >
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
            <Box mx="6" marginBottom="50%">
              <Text
                fontSize="15"
                fontFamily="Medium"
                style={{ color: "#35609C" }}
              >
                รายชื่อ Care giver
              </Text>
              <Box marginTop={2}>
                {UserCG.map((item) => (
                  <Pressable
                  onPress={() => navigation.navigate("WorkCG")}
                    key={item.id}
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
                      <VStack>
                        <Text color="#35609C" fontFamily="Medium">
                          {item.fullName}
                        </Text>
                        <Text color="#8AA7CF" fontFamily="Regular">
                          {item.title}
                        </Text>
                      </VStack>
                      <Spacer />
                    </HStack>
                  </Pressable>
                ))}
              </Box>
            </Box>
          </VStack>
        </ScrollView>
      </Center>
    </View>
  );
}
