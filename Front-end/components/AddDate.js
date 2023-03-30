import {
  Actionsheet,
  useDisclose,
  Box,
  Input,
  Icon,
  Text,
  VStack,
  Button,
  Switch,
  View,
  Pressable,
  FormControl,
  HStack,
} from "native-base";
import { Calendar, LocaleConfig, DateObject } from "react-native-calendars";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import moment from "moment";
import { COLORS } from "../constants";

export default function AddDate() {
  useFocusEffect(
    useCallback(() => {
      setResult("");
    }, [])
  );
  const [selectedRange, setSelectedRange] = useState({
    startDate: undefined,
    endDate: undefined,
  });
  const [result, setResult] = useState("");
  const getRangeMarkedDates = () => {
    const { startDate, endDate } = selectedRange;
    const rangeMarkedDates = {};

    if (startDate && endDate) {
      let currentDate = new Date(startDate);
      while (currentDate <= new Date(endDate)) {
        const dateString = currentDate.toISOString().substring(0, 10);
        if (currentDate.getTime() === new Date(startDate).getTime()) {
          rangeMarkedDates[dateString] = {
            startingDay: true,
            color: "#35609C",
            textColor: "#fff",
            borderRadius: {
              topLeft: 100,
              bottomLeft: 100,
            },
          };
        } else if (currentDate.getTime() === new Date(endDate).getTime()) {
          rangeMarkedDates[dateString] = {
            endingDay: true,
            color: "#35609C",
            textColor: "#fff",
            borderRadius: {
              topLeft: 100,
              bottomLeft: 100,
            },
          };
        } else {
          rangeMarkedDates[dateString] = {
            color: "#8AA7CF",
            textColor: "black",
          };
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }

    return rangeMarkedDates;
  };
  const handleSavePress = () => {
    setResult(
      `${moment(selectedRange.startDate).format("DD/MM/YY")} - ${moment(
        selectedRange.endDate
      ).format("DD/MM/YY")}`
    );
    onClose();
  };
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Box >
      <Pressable  onPressIn={onOpen} _pressed={{ bg: "coolGray.200" }}>
        <Box paddingY={2} paddingX={70}>
          <HStack>
            <Icon
              as={<FontAwesome5 name="calendar-alt" />}
              size="md"
              color={COLORS.primary}
              marginRight={5}
            />
            <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
              {result ? result : "วันที่"}
            </Text>
          </HStack>
        </Box>
      </Pressable>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content bgColor="#fff">
          <Box w="100%" h={500}>
            <Calendar
              theme={{
                textDayFontFamily: "Regular",
                todayTextColor: "#fff",
                todayBackgroundColor: "#35609C",
                "stylesheet.day.period": {
                  today: {
                    backgroundColor: "#35609C",
                    borderRadius: 100,
                    width: 35,
                    height: 35,
                  },
                },
              }}
              markedDates={{
                [selectedRange.startDate]: {
                  startingDay: true,
                  color: "#35609C",
                  textColor: "#fff",
                  borderRadius: {
                    topRight: 20,
                    bottomRight: 20,
                  },
                },
                [selectedRange.endDate]: {
                  endingDay: true,
                  color: "#35609C",
                  textColor: "#fff",
                  borderRadius: {
                    topRight: 20,
                    bottomRight: 20,
                  },
                },
                ...getRangeMarkedDates(),
              }}
              markingType="period"
              onDayPress={(day) => {
                if (!selectedRange.startDate) {
                  setSelectedRange({
                    ...selectedRange,
                    startDate: day.dateString,
                  });
                } else if (
                  selectedRange.startDate &&
                  !selectedRange.endDate &&
                  new Date(day.dateString) > new Date(selectedRange.startDate)
                ) {
                  setSelectedRange({
                    ...selectedRange,
                    endDate: day.dateString,
                  });
                } else {
                  setSelectedRange({
                    startDate: day.dateString,
                    endDate: null,
                  });
                }
              }}
            />
            <HStack marginLeft={5} marginRight={210}>
              <FormControl marginRight={5}>
                <FormControl.Label _text={{ fontFamily: "Regular" }}>
                  วันที่เริ่ม
                </FormControl.Label>
                <Box
                  bg="#fff"
                  borderWidth={1.5}
                  borderColor="#DDDFE1"
                  borderRadius={10}
                  padding={2}
                >
                  {selectedRange.startDate &&
                  moment(selectedRange.startDate, "YYYY-MM-DD", true).isValid()
                    ? moment(selectedRange.startDate).format("DD/MM/YY")
                    : ""}
                </Box>
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{ fontFamily: "Regular" }}>
                  วันที่สิ้นสุด
                </FormControl.Label>
                <Box
                  bg="#fff"
                  borderWidth={1.5}
                  borderColor="#DDDFE1"
                  borderRadius={10}
                  padding={2}
                >
                  {selectedRange.endDate &&
                  moment(selectedRange.endDate, "YYYY-MM-DD", true).isValid()
                    ? moment(selectedRange.endDate).format("DD/MM/YY")
                    : ""}
                </Box>
              </FormControl>
            </HStack>
            <Button
              size="md"
              borderRadius={10}
              backgroundColor="#35609C"
              marginTop="25 px"
              _text={{
                color: "#FFFF",
                fontFamily: "Medium",
                fontSize: "md",
              }}
              _pressed={{
                bg: "#8AA7CF",
                _text: { color: "#35609C" },
              }}
              onPress={handleSavePress}
            >
              บันทึก
            </Button>
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
}
