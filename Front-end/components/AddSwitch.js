import { Actionsheet, useDisclose, Box , Input , HStack ,Icon , Text ,VStack, Spacer ,Switch ,View , Center} from "native-base";

import { FontAwesome5 } from "@expo/vector-icons";
import React from 'react'

import { COLORS } from '../constants';
export default function AddSwitch() {
  return (
    <Box paddingX={70}>
      <HStack justifyContent="space-between">
      <Text fontFamily='Regular' fontSize="17 px">แจ้งเตือนหน้าหลัก</Text>
      <Spacer />
      <Switch offTrackColor={COLORS.primary} onTrackColor="#DDDFE1" defaultIsChecked />
      </HStack>
    </Box>
  )
}