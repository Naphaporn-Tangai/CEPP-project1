import React, { useState } from 'react';
import { HStack, View, VStack, Button , Center ,Box} from "native-base";
import { Addlocation } from "../components"
import { AddImage } from "../components"


export default function InOutScreen({ navigation }) {  
  const [choice, setChoice] = useState('');
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} safeAreaTop>
    <Center flex={1}>
    <Box safeAreaTop flex={1} >
    <HStack space={3}  mx={10} mb={3} >
        <Button 
        value="1"
        onPress={() => setChoice(1)} 
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
        value="2"
        onPress={() => setChoice(2)} 
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
    
      <VStack mx={10} mb={3}>
        <Addlocation/>
        <AddImage/>
      </VStack>
      </Box>
      </Center>
    </View>
  )
}