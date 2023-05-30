import {
  Actionsheet,
  useDisclose,
  Box,
  Input,
  HStack,
  Icon,
  Text,
  VStack,
  Pressable,
  Modal,
  Button,
} from "native-base";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { COLORS } from "../constants";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

export default function AddTime() {
  const [isStartTimePickerVisible, setStartTimePickerVisible] = useState(false);
  const [isEndTimePickerVisible, setEndTimePickerVisible] = useState(false);
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);

  const showStartTimePicker = () => {
    setStartTimePickerVisible(true);
  };

  const hideStartTimePicker = () => {
    setStartTimePickerVisible(false);
  };

  const handleStartTimeConfirm = (date) => {
    setSelectedStartTime(date);
    hideStartTimePicker();
  };

  const showEndTimePicker = () => {
    setEndTimePickerVisible(true);
  };

  const hideEndTimePicker = () => {
    setEndTimePickerVisible(false);
  };

  const handleEndTimeConfirm = (date) => {
    setSelectedEndTime(date);
    hideEndTimePicker();
  };


  return (
    <Box paddingX={70}>
      <HStack>
        <Pressable
          _pressed={{ bg: "coolGray.200" }}
          onPress={showStartTimePicker}
        >
          <Box w={150} marginRight={5} paddingBottom={4} mt={2}>
            <HStack>
              <Icon
                as={<FontAwesome5 name="clock" />}
                size="md"
                color={COLORS.primary}
                marginRight={5}
              />
        <Text fontFamily="Regular" fontSize="17px" color="#35609C">
          {selectedStartTime ? selectedStartTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'เวลาเริ่ม'}
        </Text>
            </HStack>
          </Box>
        </Pressable>
        <DateTimePickerModal
        isVisible={isStartTimePickerVisible}
        mode="time"
        display="spinner" 
        dateFormat="hh:mm"
        onConfirm={handleStartTimeConfirm}
        onCancel={hideStartTimePicker}
        />
        
        <Pressable onPress={showEndTimePicker}>
          <Box w={150} paddingBottom={4} mt={2}>
            <HStack>
              <Icon
                as={<MaterialCommunityIcons name="clock" />}
                size="md"
                color={COLORS.primary}
                marginRight={5}
              />
        <Text fontFamily="Regular" fontSize="17px" color="#35609C">
          {selectedEndTime ? selectedEndTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'เวลาสิ้นสุด'}
        </Text>
            </HStack>
          </Box>
        </Pressable>    

        <DateTimePickerModal
        isVisible={isEndTimePickerVisible}
        mode="time"
        display="spinner" 
        dateFormat="hh:mm"
        onConfirm={handleEndTimeConfirm}
        onCancel={hideEndTimePicker}
              />
    

      </HStack>
    </Box>
  );
}
