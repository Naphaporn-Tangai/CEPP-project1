import React from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Box, HStack, VStack } from 'native-base';

export default function EventDay() {
  const today = new Date(); // get today's date
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // array of day names
  const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay()); // get the date of the start of the current week
  const endDate = new Date(today.getFullYear(), today.getMonth(), startDate.getDate() + 6); // get the date of the end of the current week

  const weekDates = []; // array to store the dates of the current week
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i);
    weekDates.push({
      id: i,
      date: currentDate.toLocaleDateString('en-US', { weekday: 'short' }),
      numDate: currentDate.getDate(),
    });
  }

  return (
   
        <Box flexDirection="row">
          {weekDates.map((item) => (
            <Box
              key={item.id}
              justifyContent="center"
              marginBottom={5}
              borderWidth="1"
              w="63"
              h="84"
              rounded="25"
              borderColor="#DDDFE1"
              marginRight={3}
            >
              <HStack justifyContent="center">
                <VStack space={2.5} justifyContent="center" alignItems="center">
                  <Text color="#8AA7CF" fontFamily="Regular">
                    {item.date}
                  </Text>
                  <Text color="#35609C" fontFamily="Medium">
                    {item.numDate}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          ))}
        </Box>
   
  );
}
