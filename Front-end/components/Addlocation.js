import { Input, Box , Button , HStack,Icon} from "native-base";
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from '../constants';
export default function Addlocation() {
  return (
    <>
       <Input 
       w={{
        base: "65%",
        md: "25%"
      }}
       variant="unstyled" 
       placeholder="สถานที่" 
       size="md" 
       _input={{ color:"#35609C"}} 
       fontFamily='Regular'
       fontSize="md"
       placeholderTextColor={COLORS.primary} 
       InputLeftElement={<Icon as={<Ionicons name="location-sharp" />} 
       size="md" ml="2" color={COLORS.primary}  />} />
    </>
  )
}