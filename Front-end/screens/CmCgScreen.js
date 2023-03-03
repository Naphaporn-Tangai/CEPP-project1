import React from 'react';
import { View , VStack, Button , Image , Center} from "native-base";


import { COLORS } from '../constants';

export default function CmCgScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} bgColor="#fff" safeAreaTop >
    <Center flex={1} >
        <Image
        source={require("../assets/icon.png")}
        size="2xl"
        marginLeft={6}
        alt="icon"
        />
      <VStack safeAreaTop space={3} alignItems="center" mb={3}>
        <Button 
        _text={{color:"#fff",fontFamily: 'Regular',fontSize:"md"}}
        px={90}
        bg={COLORS.primary}
        rounded="25"
        _pressed={{ 
            _text: {
            color: "#35609C" ,
             },bg:"#8AA7CF",
         }}
         onPress={() => navigation.navigate('BottomTapCG')}
        >
        Care give</Button>
        <Button 
        variant="ghost"
        _text={{color:"#8AA7CF",fontFamily: 'Regular',fontSize:"md"}}
        borderColor="#35609C"
        px={75}
        rounded="25"
        _pressed={{ 
            _text: {
            color: "#fff" ,
             },bg:"#8AA7CF",
        }}
        onPress={() => navigation.navigate('BottomTapCM')}
        >
        Care manager</Button>
    </VStack>
    </Center>
    </View>
  )
}