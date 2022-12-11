import React, { useState } from 'react';
import { HStack, Box, VStack, Button  } from "native-base";
import { Addlocation } from "../components"
import { AddImage } from "../components"


export default function InOutScreen() {  
  const [choice, setChoice] = useState('');
  return (
    <Box w="100%" safeAreaTop flex={1}>
     
    <HStack safeAreaTop space={3} alignItems="center" ml={6}  mr={9} mb={3}>
        <Button 
        value="1"onPress={() => setChoice(1)} 
        variant="outline" 
        _text={{color:"#35609C",fontFamily: 'Regular',fontSize:"md"}}
        isPressed={choice === 1}
        _pressed={{ 
          _text: {
          color: "#fff" ,
           },bg:"#35609C",
           
          }}
        borderColor="#35609C"
       
        w="50%"
        >
        เข้างาน</Button>
        <Button 
        value="2"onPress={() => setChoice(2)} 
        variant="outline" 
        _text={{color:"#35609C",fontFamily: 'Regular',fontSize:"md"}}
        isPressed={choice === 2} 
        _pressed={{ 
          _text: {
          color: "#fff" ,
           },bg:"#35609C",
          
          }}
        borderColor="#35609C"
        w="50%"
        
        >
        ออกงาน</Button>
    </HStack>
      <VStack mx={6} mb={3}>
        <Addlocation/>
        <AddImage/>
      </VStack>
    </Box>
  )
}