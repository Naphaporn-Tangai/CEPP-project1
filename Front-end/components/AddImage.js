
import React from 'react'
import { Input, Box , Button , HStack,Icon} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from '../constants';
export default function AddImage() {
  return (
    <>
       <Input 
       w={{
        base: "65%",
        md: "25%"
      }}
       variant="unstyled" 
       placeholder="เพิ่มรูปภาพ" 
       size="md" 
       _input={{ color:"#35609C"}} 
       fontFamily='Regular'
       fontSize="md"
       placeholderTextColor={COLORS.primary} 
       InputLeftElement={<Icon as={<FontAwesome name="camera" />} 
       size="md" ml="2" color={COLORS.primary}  />} />
    </>
  )
}