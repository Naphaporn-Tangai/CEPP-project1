import SimpleSelectButton from 'react-native-simple-select-button';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Box , Button , HStack} from "native-base";
import React, { useState } from 'react';
import { COLORS } from '../constants';

export default function SignInOut() {

    const [choice, setChoice] = useState('');

    return (
      <Box marginBottom={3}  safeAreaTop flex={1} ml="10%" mr="13%">
       
        <HStack space={3} alignItems="center">
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
         
      </Box>
    );
  }