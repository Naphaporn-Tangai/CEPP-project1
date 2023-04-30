import { Actionsheet, useDisclose, Box , Input , HStack ,Icon , Text ,VStack , Pressable , Modal , Button} from "native-base";
import { FontAwesome5 ,MaterialCommunityIcons} from "@expo/vector-icons";
import React ,{ useState }from 'react'
import { COLORS } from '../constants';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

export default function AddTime() {
  const [showModal, setShowModal] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setendTime] = useState(null);

  const handleConfirmStartTime = (time) => {
    setStartTime(moment(time).format("HH:mm"));
    setShowModal(false);
  };
  const handleConfirmEndTime = (time) => {
    setendTime(moment(time).format("HH:mm"));
    setShowModal(false);
  };


  return (
    <Box paddingX={70} >
      <HStack>
        <Pressable
          _pressed={{ bg: "coolGray.200" }}
          onPress={() => setShowModal(true)}
        >
          <Box w={150} marginRight={5} paddingBottom={4} mt={2}>
            <HStack>
              <Icon
                as={<FontAwesome5 name="clock" />}
                size="md"
                color={COLORS.primary}
                marginRight={5}
              />
              <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
                {startTime ? startTime : "เวลาเริ่ม"}
              </Text>
            </HStack>
          </Box>
        </Pressable>

        <Pressable onPress={() => setShowModal(true)}>
          <Box w={150} paddingBottom={4} mt={2}>
            <HStack>
              <Icon
                as={<MaterialCommunityIcons name="clock" />}
                size="md"
                color={COLORS.primary}
                marginRight={5}
              />
              <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
              {endTime ? endTime : "เวลาเริ่ม"}
              </Text>
            </HStack>
          </Box>
        </Pressable>
      </HStack>

      {/* Time Picker Modal */}
      <DateTimePickerModal
        isVisible={showModal}
        mode='time'
        onConfirm={handleConfirmStartTime}
        onCancel={() => setShowModal(false)}
      />
            <DateTimePickerModal
        isVisible={showModal}
        mode='time'
        onConfirm={handleConfirmEndTime}
        onCancel={() => setShowModal(false)}
      />
    </Box>
  );
}
