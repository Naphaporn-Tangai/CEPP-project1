import React from "react";
import {
  Box,
  FlatList,
  Center,
  View,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  ScrollView,
} from "native-base";

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    tittle: "ทำการกายภาพบำบัด",
    timeStamp: "12:47 PM",
    recentText: "10:00 AM - 10:30 AM",
    avatarUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    tittle: "ทำการกายภาพบำบัด",
    timeStamp: "11:11 PM",
    recentText: "10:00 AM - 10:30 AM",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    tittle: "แจ้งปัญหา",
    timeStamp: "6:22 PM",
    recentText: "จากนายดวงดี  นำโชค",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
  },
  {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    tittle: "แจ้งปัญหา",
    timeStamp: "8:56 PM",
    recentText: "จากนายดวงดี  นำโชค",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
  },
];
export default function NotifyScreen() {
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      bgColor="#ffff"
    >
      <Center flex={1} top="3%">
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack>
            <Box >
              <Text
                fontSize="xl"
                fontFamily="Medium"
                style={{ color: "#35609C" }}
                marginLeft={5}
                marginRight={10}
                borderColor="#DDDFE1"
                borderBottomWidth={1}
                paddingBottom={3}
              >
                วันนี้
              </Text>
              {data.map((item) => (
                <Box
                  marginBottom={2}
                  marginRight={10}
                  rounded="xl"
                  pl={["4", "4"]}
                  pr={["0", "5"]}
                  py="3"
                  key={item.id} // ใส่ key ด้วยเพื่อให้ React แยกแต่ละ element ใน List
                >
                  <HStack space={[3.5, 3]} justifyContent="space-between">
                    <Avatar
                      size="48px"
                      source={{
                        uri: item.avatarUrl,
                      }}
                    />
                    <VStack>
                      <Text
                        color="#35609C"
                        fontFamily="Medium"
                        paddingRight={45}
                      >
                        {item.tittle}
                      </Text>
                      <Text color="#8AA7CF" fontFamily="Regular">
                        {item.recentText}
                      </Text>
                    </VStack>
                    <Spacer />
                    <Text
                      fontSize="xs"
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      alignSelf="flex-start"
                    >
                      {item.timeStamp}
                    </Text>
                  </HStack>
                </Box>
              ))}
            </Box>
          </VStack>
        </ScrollView>
      </Center>
    </View>
  );
}
