import React from 'react';
import {  Box, VStack, Button ,Image} from "native-base";


import { COLORS } from '../constants';

export default function CmCgScreen() {
  return (
    <Box w="100%" safeAreaTop flex={1} justifyContent='center'>
        <Image
        source={require("../assets/icon.png")}
        size="2xl"
        marginLeft={6}
        />
      <VStack safeAreaTop space={3} alignItems="center" ml={6}  mr={9} mb={3}>
        <Button 
        _text={{color:"#fff",fontFamily: 'Regular',fontSize:"md"}}
        w="100%"
        bg={COLORS.primary}
        rounded="25"
        _pressed={{ 
            _text: {
            color: "#35609C" ,
             },bg:"#8AA7CF",
         }}
        >
        Care give</Button>
        <Button 
        variant="ghost"
        _text={{color:"#8AA7CF",fontFamily: 'Regular',fontSize:"md"}}
        borderColor="#35609C"
        w="100%"
        rounded="25"
        _pressed={{ 
            _text: {
            color: "#fff" ,
             },bg:"#8AA7CF",
        }}
        >
        Care manager</Button>
    </VStack>
    </Box>
  )
}