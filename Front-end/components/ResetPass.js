import React from "react";
import { Input, Icon, Text, Link, Center, FormControl, Box, Button, HStack, Checkbox } from "native-base";
import { MaterialIcons, Feather, FontAwesome } from "@expo/vector-icons";

export default function ResetPass() {

  return (
    <Center flex={1} px="3">

      <FormControl style={{ fontFamily: 'Regular' }}>
        <Text color="#35609C" bottom='80 px' fontFamily='Medium' fontSize="4xl" marginTop="200 px"
          style={{ textAlign: 'right', }}>
          รีเซ็ตรหัสผ่าน
        </Text>

        <Input w={{
          base: "65%",
          md: "25%"
        }} 
          InputLeftElement={<Icon as={<FontAwesome name="lock" />} size={5} ml="2" marginRight='20 px' color="#B5B9BC" />}
             placeholder="รหัสผ่านใหม่" variant="underlined" marginBottom='20 px'
          style={{ fontFamily: 'Regular' }} />

        <Input w={{
          base: "65%",
          md: "25%"
        }} 
          InputLeftElement={<Icon as={<FontAwesome name="lock" />} size={5} ml="2" marginRight='20 px' color="#B5B9BC" />}
           placeholder="ยืนยันรหัสผ่าน" variant="underlined"
          style={{ fontFamily: 'Regular' }} />
        <Box alignItems="flex-end">

       
        </Box>
        <Button size="md" borderRadius={20} backgroundColor="#35609C" marginTop="30 px"_text={{
          color: "#FFFF", fontFamily: 'Medium' ,fontSize: "md",
        }} _pressed={{
          bg: "#8AA7CF" ,_text: { color: "#35609C" }
        }}>
          ส่ง
        </Button>


      </FormControl>

    </Center>
  );
};