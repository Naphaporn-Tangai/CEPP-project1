import React, { useState , useEffect} from "react";
import {
  Input,
  Icon,
  Text,
  Link,
  Center,
  FormControl,
  Box,
  Button,
  HStack,
  Checkbox,
  View,
  Toast,
  Alert
} from "native-base";
import { MaterialIcons, Feather, FontAwesome } from "@expo/vector-icons";
import axios from "axios";


export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    if (username === '' || password === '') {
      setErrorMessage('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน');
      Toast.show({
        render: () => (
          <Alert marginTop={10} status="info" variant="subtle" w="300">
            <HStack>
            <Alert.Icon />
            <Text style={{   marginLeft: 10 }}>กรุณากรอกชื่อผู้ใช้และรหัสผ่าน</Text>
            </HStack>
          </Alert>
        ),
        duration: 1200,
        placement: "top"
        
      });
      return;
    }
    try {
      const response = await axios.get('http://192.168.149.129:3000/users');

      const users = response.data;

      const matchedUser = users.find(
        (user) => user.username === username && user.password === password
      );

      if (matchedUser) {
        setErrorMessage('');
        Toast.show({
          render: () => (
            <Alert marginTop={10} status="success" variant="solid" w="300">
              <HStack>
              <Alert.Icon />
              <Text style={{ color: 'white' , marginLeft: 10 }}>เข้าสู่ระบบสำเร็จ</Text>
              </HStack>
            </Alert>
          ),
          duration: 1200,
          placement: "top"
          
        });
      navigation.navigate('CmCgScreen')
      } else {
        Toast.show({
          render: () => (
            <Alert marginTop={10} status="error" variant="subtle" w="300">
              <HStack>
              <Alert.Icon />
              <Text style={{ color: '#FF0000' , marginLeft: 10 }}>เข้าสู่ระบบล้มเหลว</Text>
              </HStack>
            </Alert>
          ),
          duration: 1200,
          placement: "top"
          
        });
        setErrorMessage("อีเมลผู้ใช้หรือรหัสผ่านไม่ถูกต้อง")
      
      }
    } catch (error) {
      Toast.show({
        render: () => (
          <Alert marginTop={10} status="warning" variant="subtle" w="300">
            <HStack>
            <Alert.Icon />
            <Text style={{   marginLeft: 10 }}>เกิดข้อผิดพลาด</Text>
            </HStack>
          </Alert>
        ),
        duration: 1200,
        placement: "top"
        
      });
      console.log("เกิดข้อผิดพลาด")
    }
  };

  const [show, setShow] = React.useState(false);
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      bgColor="#fff"
    >
      <Center flex={1}>
        <FormControl>
          <Text
            color="#35609C"
            bottom="80 px"
            fontFamily="Medium"
            fontSize="4xl"
            marginTop="150 px"
            style={{ textAlign: "right" }}
          >
            ลงชื่่อเข้าใช้
          </Text>
          <FormControl isRequired isInvalid={errorMessage !== ''}>
          <Input
            w={{
              base: "65%",
              md: "25%",
            }}
            InputLeftElement={
              <Icon
                as={<Feather name="at-sign" />}
                size={5}
                ml="2"
                marginRight="20 px"
                color="#B5B9BC"
              />
            }
            placeholder="อีเมล"
            variant="underlined"
            marginBottom="20 px"
            style={{ fontFamily: "Regular" }}
            _input={{ fontSize: 15 }}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />

          </FormControl>
          <FormControl isRequired isInvalid={errorMessage !== ''}>
          <Input
            w={{
              base: "65%",
              md: "25%",
            }}
            type={show ? "text" : "password"}
            InputLeftElement={
              <Icon
                as={<FontAwesome name="lock" />}
                size={5}
                ml="2"
                marginRight="20 px"
                color="#B5B9BC"
              />
            }
            InputRightElement={
              <Icon
                onPress={() => setShow(!show)}
                as={
                  <MaterialIcons
                    name={show ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            }
            placeholder="รหัสผ่าน"
            variant="underlined"
            style={{ fontFamily: "Regular" }}
            _input={{ fontSize: 15 }}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
           <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
          </FormControl>
          <Box alignItems="flex-end">
            <Link
              _text={{
                fontSize: "sm",
                color: "#8AA7CF",
                marginTop: "20 px",
                marginBottom: "40 px",
                fontFamily: "Regular",
              }}
              onPress={() => navigation.navigate("Forgot")}
              isUnderlined
              _hover={{
                _text: { color: "#35609C" },
              }}
            >
              ลืมรหัสผ่าน?
            </Link>
          </Box>
          <Button
            size="md"
            borderRadius={20}
            backgroundColor="#35609C"
            marginTop="30 px"
            _text={{
              color: "#FFFF",
              fontFamily: "Medium",
              fontSize: "md",
            }}
            _pressed={{
              bg: "#8AA7CF",
              _text: { color: "#35609C" },
            }}
            onPress={handleLogin}
          >
            เข้าสู่ระบบ
          </Button>

          <Checkbox
            size="sm"
            value="one"
            mt={5}
            borderRadius="10 px"
            _checked={{
              bg: "#8AA7CF",
              borderColor: "#8AA7CF",
            }}
            defaultIsChecked
            _text={{
              color: "#B5B9BC",
              fontFamily: "Regular",
            }}
          >
            จำรหัสผ่านไว้
          </Checkbox>

          <Box justifyContent="flex-end" alignItems="flex-start">
            <HStack mt="6" marginTop="100 px">
              <Text fontSize={14} fontFamily="Regular" color="#000">
                ยังไม่มีบัญชี
              </Text>
              <Link
                _text={{
                  color: "#8AA7CF",
                  fontSize: "sm",
                  fontFamily: "Regular",
                  marginLeft: "6 px",
                }}
                onPress={() => navigation.navigate("Register")}
              >
                ลงทะเบียน
              </Link>
            </HStack>
          </Box>
        </FormControl>
      </Center>
    </View>
  );
}
