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
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'
export default function ListDate() {
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
  const navigation = useNavigation();
  return (
    <Box flex={1}>
      <VStack>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize="17" fontFamily="Medium" color="#000" ml="9">
            {formattedDate}
          </Text>
          <Spacer />
          <HStack mr="6">
            <IconButton
               onPress={() => navigation.navigate("DatumCG")}

              icon={
                <Icon
                  as={Feather}
                  name="bar-chart-2"
                  size="7"
                  color="#B5B9BC"
                />
              }
            />
          </HStack>
        </HStack>

        <HStack ml="6" top="3%">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            removeClippedSubviews={true}
          >
            {weekDates.map((item, index) => (
              <Pressable
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
   
    </Box>
  );
}
