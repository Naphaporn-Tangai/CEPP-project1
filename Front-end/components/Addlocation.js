import { Input, Box , Button , HStack,Icon} from "native-base";
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from '../constants';
export default function Addlocation() {
  return (
    <Box paddingX={70} mb={1}>
       <Input 
         w={{
          base: "80%",
          md: "40%"
        }}
       variant="unstyled" 
       placeholder="สถานที่" 
       _input={{ color:"#35609C"}} 
       fontFamily='Regular'
       fontSize="17 px"
       placeholderTextColor={COLORS.primary} 
       InputLeftElement={<Icon as={<Ionicons name="location-sharp" />} 
       size="17 px" color={COLORS.primary} marginRight={2} />} />
    </Box>
  )
}