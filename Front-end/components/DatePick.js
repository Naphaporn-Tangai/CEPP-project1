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
  import React, { useState , useEffect } from "react";
  import moment from 'moment';
  import { COLORS } from "../constants";
  
  export default function DatePick() {
    const [selectedDate, setSelectedDate] = useState(undefined);
    const [result, setResult] = useState("");
    const handleDatePress = (date) => {
      setSelectedDate(date.dateString);
    };
    const handleSavePress = () => {
      setResult(moment(selectedDate).format("DD/MM/YY"));
      onClose();
    };
    
    const { isOpen, onOpen, onClose } = useDisclose();
    return (
      <Box paddingX={70}>
        <Input
          w={{
            base: "79%",
            md: "25%",
          }}
          showSoftInputOnFocus={false}
          onPressIn={onOpen}
          variant="unstyled"
          placeholder="วันที่เบิก"
          size="md"
          _input={{ color: "#35609C" }}
          fontFamily="Regular"
          fontSize="17 px"
          placeholderTextColor={COLORS.primary}
          InputLeftElement={
            <Icon
              as={<FontAwesome5 name="calendar-alt" />}
              size="md"
              color={COLORS.primary}
              marginRight={2}
            />
          }
        >
          {result}
        </Input>
    
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content bgColor="#fff">
            <Box w="100%" h={390}>
              <Calendar
                theme={{
                  textDayFontFamily: "Regular",
                  todayTextColor: "#35609C",
                  selectedDayTextColor: "#fff",
                  selectedDayBackgroundColor: "#35609C",
                }}
                current={selectedDate ? moment(selectedDate).format("YYYY-MM-DD") : moment().format("YYYY-MM-DD")}
                markingType="custom"
                markedDates={{
                  [selectedDate]: {
                    customStyles: {
                      container: {
                        backgroundColor: "#35609C",
                        borderRadius: 5,
                        borderRadius: 100
                      },
                      text: {
                        color: "white",
                        fontWeight: "bold",
                      },
                    },
                  },
                }}
                onDayPress={handleDatePress}
              />
    
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
                onPress={() => handleSavePress(onClose)}
              >
                บันทึก
              </Button>
            </Box>
          </Actionsheet.Content>
        </Actionsheet>
      </Box>
    );
  }
  