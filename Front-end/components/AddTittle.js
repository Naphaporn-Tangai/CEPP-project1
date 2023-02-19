import { Actionsheet, useDisclose, Box , Input , HStack ,Icon , Text ,VStack, Spacer ,Switch ,View , Center} from "native-base";
import React from 'react'
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from '../constants';
export default function AddTittle() {
  return (
    <Box paddingX={70}>
       <Input 
       w={{
        base: "80%",
        md: "40%"
      }}
       variant="unstyled" 
       placeholder="ชื่อ" 
       size="md" 
       _input={{ color:"#35609C"}} 
       fontFamily='Regular'
       fontSize="17 px"
       placeholderTextColor={COLORS.primary} 
       InputLeftElement={<Icon as={<FontAwesome name="file-text" />} 
       size="md"  color={COLORS.primary}  />} />
    </Box>
  )
}