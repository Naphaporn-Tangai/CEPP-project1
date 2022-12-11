import React from "react";
import { Input, Icon, Text, Link, Center, FormControl, Box, Button, HStack, VStack } from "native-base";
import { MaterialIcons , Feather , FontAwesome ,FontAwesome5 } from "@expo/vector-icons";


export default function Register() {
  const [show, setShow] = React.useState(false);
  return (
   
      <FormControl style={{ fontFamily: 'Regular' }}>
        <Text color="#35609C" bottom='80 px' fontFamily='Medium' fontSize="4xl" marginTop="150 px"
          style={{ textAlign: 'left', }}>
          ลงทะเบียน
        </Text>

        <Input w={{
          base: "65%",
          md: "25%"
        }} InputLeftElement={<Icon as={<FontAwesome5 name="user-circle" />} size={5} ml="2" marginRight='20 px' color="#B5B9BC" />}
          placeholder="ชื่อผู้ใช้" variant="underlined" marginBottom='20 px'
          style={{ fontFamily: 'Regular' }} />

        <Input w={{
          base: "65%",
          md: "25%"
        }} InputLeftElement={<Icon as={<Feather name="at-sign" />} size={5} ml="2" marginRight='20 px' color="#B5B9BC" />}
          placeholder="อีเมล" variant="underlined" marginBottom='20 px'
          style={{ fontFamily: 'Regular' }} />

        <Input w={{
          base: "65%",
          md: "25%"
        }} InputLeftElement={<Icon as={<FontAwesome name="phone" />} size={5} ml="2" marginRight='20 px' color="#B5B9BC" />}
          placeholder="เบอร์โทร" variant="underlined" marginBottom='20 px'
          style={{ fontFamily: 'Regular' }} />

        <Input w={{
          base: "65%",
          md: "25%"
        }} type={show ? "text" : "password"}
          InputLeftElement={<Icon as={<FontAwesome name="lock" />} size={5} ml="2" marginRight='20 px' color="#B5B9BC" />}
          InputRightElement={
            <Icon onPress={() => setShow(!show)} as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
              size={5} mr="2" color="muted.400" />} placeholder="รหัสผ่าน" variant="underlined"
          style={{ fontFamily: 'Regular' }} />
        <Button size="md" borderRadius={20} backgroundColor="#35609C" marginTop="30 px"_text={{
          color: "#FFFF", fontFamily: 'Medium' ,fontSize: "md",
        }} _pressed={{
          bg: "#8AA7CF" ,_text: { color: "#35609C" }
        }}>
          ลงทะเบียน
        </Button>
        <Box alignItems="flex-end" >

          <HStack mt="6" marginTop="100 px">

            <Text fontSize="sm" fontFamily='Regular' color="#000">
              มีบัญชีอยู่แล้ว
            </Text>
            <Link _text={{
              color: "#8AA7CF",
              fontSize: "sm",
              fontFamily: 'Regular',
              marginLeft: '6 px'
            }} href="#">
              ลงชื่อเข้าใช้
            </Link>
          </HStack>

        </Box>
      </FormControl>

  );
};