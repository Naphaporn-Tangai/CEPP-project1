import { Input, Box , Button , HStack,Icon} from "native-base";
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from '../constants';
export default function Addlocation() {
  return (
    <>
       <Input 
         w={{
          base: "80%",
          md: "40%"
        }}
       variant="unstyled" 
       placeholder="สถานที่" 
       _input={{ color:"#35609C"}} 
       fontFamily='Regular'
       fontSize="md"
       placeholderTextColor={COLORS.primary} 
       InputLeftElement={<Icon as={<Ionicons name="location-sharp" />} 
       size="md" color={COLORS.primary}  />} />
    </>
  )
}