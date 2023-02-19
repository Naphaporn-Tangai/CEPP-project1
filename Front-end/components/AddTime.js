import { Actionsheet, useDisclose, Box , Input , HStack ,Icon , Text ,VStack, Spacer ,Switch ,View , Center} from "native-base";

import { FontAwesome5 ,MaterialCommunityIcons} from "@expo/vector-icons";
import React from 'react'

import { COLORS } from '../constants';
export default function AddTime() {
  return (
    <Box paddingX={70}>
       <HStack mb={3}>
        <Input 
       w={{
        base: "60%",
        md: "20%"
      }}
       variant="unstyled" 
       placeholder="เวลาเริ่ม" 
       size="md" 
       _input={{ color:"#35609C"}} 
       fontFamily='Regular'
       fontSize="17 px"
       placeholderTextColor={COLORS.primary} 
       InputLeftElement={<Icon as={<FontAwesome5 name="clock" />} 
       size="md"  color={COLORS.primary}  />} />
       <Input 
       w={{
        base: "60%",
        md: "20%"
      }}
       variant="unstyled" 
       placeholder="เวลาสิ้นสุด" 
       size="md" 
       _input={{ color:"#35609C"}} 
       fontFamily='Regular'
       fontSize="17 px"
       placeholderTextColor={COLORS.primary} 
       InputLeftElement={<Icon as={<MaterialCommunityIcons name="clock" />} 
       size="md"  color={COLORS.primary}  />} />
       </HStack>
    </Box>
  )
}