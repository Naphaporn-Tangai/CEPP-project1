
import React from 'react'
import { Input, Box , Button , HStack,Icon} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from '../constants';
export default function AddImage() {
  return (
    <>
       <Input 
       w={{
        base: "80%",
        md: "40%"
      }}
       variant="unstyled" 
       placeholder="เพิ่มรูปภาพ" 
       _input={{ color:"#35609C"}} 
       fontFamily='Regular'
       fontSize="md"
       placeholderTextColor={COLORS.primary} 
       InputLeftElement={<Icon as={<FontAwesome name="camera" />} 
       size="md" color={COLORS.primary}  />} />
    </>
  )
}