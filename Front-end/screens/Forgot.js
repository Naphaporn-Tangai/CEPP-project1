import React from "react";
import { Input, Icon, Text, Link, Center, FormControl, Box, Button, View } from "native-base";
import { MaterialIcons, Feather, FontAwesome } from "@expo/vector-icons";

export default function Forgot({ navigation }) {
 
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} bgColor="#fff" safeAreaTop >
    <Center flex={1}>
      <FormControl style={{ fontFamily: 'Regular' }}>
        <Text color="#35609C" bottom='80 px' fontFamily='Medium' fontSize="4xl" marginTop="50 px"
          style={{ textAlign: 'left', }}>
          ลืมรหัสผ่าน?
        </Text>

        <Input w={{
          base: "65%",
          md: "25%"
        }} InputLeftElement={<Icon as={<Feather name="at-sign" />} size={5} ml="2" marginRight='20 px' color="#B5B9BC" />}
          placeholder="อีเมล / เบอร์โทร" variant="underlined" marginBottom='20 px'
          style={{ fontFamily: 'Regular' }} />

        <Button onPress={() => navigation.navigate('ResetPass')}
        size="md" borderRadius={20} backgroundColor="#35609C" marginTop="30 px"_text={{
          color: "#FFFF", fontFamily: 'Medium' ,fontSize: "md",
        }} _pressed={{
          bg: "#8AA7CF" ,_text: { color: "#35609C" }
        }}
        
        >
          ส่ง
        </Button>

     

        <Box justifyContent="flex-end" alignItems="flex-start" >

        </Box>
      </FormControl>
      </Center>
    </View>
    
  );
};