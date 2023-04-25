import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Content,
  Box,
  HStack,
  VStack,
  View,
  Text,
  Pressable,
  IconButton,
  Icon,
  Spacer,
  Center,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { Event } from "../constants";
export default function ListDate({ navigation }) {
  const monthNames = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];

  const [selectedDate, setSelectedDate] = useState(new Date()); // set initial date to current date

  const formattedDate = `${selectedDate.getDate()} ${
    monthNames[selectedDate.getMonth()]
  } ${selectedDate.getFullYear()}`; // format selected date

  const daysOfWeek = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"]; // array of day names
  const startDate = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    selectedDate.getDate() - 1
  ); // get the date of the start of the current week (starting from the day before the current day)
  const endDate = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    startDate.getDate() + 6
  ); // get the date of the end of the current week

  const weekDates = []; // array to store the dates of the current week
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate() + i
    );
    const isToday = currentDate.toDateString() === selectedDate.toDateString(); // check if currentDate is selectedDate
    weekDates.push({
      id: i,
      date: currentDate.getDate(), // store the date as the first value
      dayName: daysOfWeek[currentDate.getDay()], // store the day name as the second value
      isToday,
    });
  }

  const handleDatePress = (date) => {
    setSelectedDate(date);
  };

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      bgColor="#fff" height="100%"
    >
      <Box flex={1} >
        <ScrollView Vertical showsVerticalScrollIndicator={false}> 
        <VStack marginTop={10}>
          <Text fontSize="17" fontFamily="Medium" color="#000" ml="9">
            {formattedDate}
          </Text>

          <HStack ml="6" top="3%">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              removeClippedSubviews={true}
            >
              {weekDates.map((item, index) => (
                <Pressable
                onPress={() => navigation.navigate('SeleteEvent')}
                _pressed={{ bg: 'coolGray.200' }}
                  key={item.id}
                  justifyContent="center"
                  borderWidth="1"
                  w="63"
                  h="84"
                  rounded="25"
                  borderColor="#DDDFE1"
                  marginRight={3}
                  backgroundColor={item.isToday ? "#35609C" : undefined}
                  onPress={() =>
                    handleDatePress(
                      new Date(
                        selectedDate.getFullYear(),
                        selectedDate.getMonth(),
                        item.date
                      )
                    )
                  }
                >
                  <HStack justifyContent="center">
                    <VStack
                      space={2.5}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Text
                        fontFamily="Medium"
                        style={{ color: item.isToday ? "#fff" : undefined }}
                      >
                        {item.dayName}
                      </Text>
                      <Text
                        fontFamily="Regular"
                        style={{ color: item.isToday ? "#fff" : undefined }}
                      >
                        {item.date}
                      </Text>
                    </VStack>
                  </HStack>
                </Pressable>
              ))}
            </ScrollView>
          </HStack>
        </VStack>
        <Box
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 1,
              height: 2,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 6,

            width: 400,
            height: "100%",
            marginTop: 40,
            backgroundColor: "#fff",
            borderRadius: 40,
          }}
        >
          <Text
            ml={10}
            mt={7}
            fontFamily="Medium"
            color="#35609C"
            fontSize={22}
          >
            กำหนดการวันนี้
          </Text>
          {Event.map((item, index) => (
          <HStack justifyContent="space-between" alignItems="center">
            <VStack >
              <Box backgroundColor="#D9D9D9" w={55} h={1} mb={3} />
            <Text
              ml={10}
              fontFamily="Regular"
              color="#000"
              fontSize={15}
              mb={0.5}
            >
             {item.date}
            </Text>
            <Text
              ml={10}
              fontFamily="Regular"
              color="#000"
              fontSize={15}
              
            >
              AM
            </Text>
            </VStack>
            <Pressable
              backgroundColor={item.Bg}
              w={350}
              paddingVertical={25}
              ml={7}
              borderRadius={30}
              mt={4}
            >
              <Spacer />
              <HStack>
                <VStack ml={9}>
                  <Text fontFamily="Regular" fontSize={16} color="#fff">
                  {item.title}
                  </Text>
                  <Text fontFamily="Regular" fontSize={15} color="#fff">
                    {" "}
                    {item.num}
                  </Text>
                  
                </VStack>
              </HStack>
              
            </Pressable>
          </HStack>))}
        </Box>
        </ScrollView>
      </Box>
    </View>
  );
}
