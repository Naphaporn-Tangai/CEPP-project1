import React, { useRef, useState } from "react";
import { Input, Text, Center, FormControl, Button, HStack } from "native-base";


export default function ConfirmReset() {
  const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '' });
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  return (
    <Center flex={1} px="3">
      <FormControl style={{ fontFamily: 'Regular' }}>
        <Text color="#35609C" bottom='35 px' fontFamily='Medium' fontSize="4xl" marginTop="150 px"
          style={{ textAlign: 'right' }}>
          ยืนยันรหัส
        </Text>
        <Text color="#B5B9BC" bottom='35 px' fontFamily='Medium' fontSize="md"
          style={{ textAlign: 'right' }}
        >
          ยืนยันรหัส
        </Text>
        <HStack space={3} justifyContent="center">

          <Input bgColor="#EEEEEE" Bottom="80 px" w="60 px" h="60 px"
            maxLength={1} fontFamily='Regular'
            fontSize="2xl" textAlign='center' color="#8AA7CF"
            keyboardType="number-pad"
            ref={firstInput}
            onChangeText={text => {
              setOtp({ ...otp, 1: text });
              text && secondInput.current.focus();
            }}
          />

          <Input bgColor="#EEEEEE" Bottom="80 px" w="60 px" h="60 px"
            maxLength={1} fontFamily='Regular'
            fontSize="2xl" textAlign='center' color="#8AA7CF"
            keyboardType="number-pad"
            ref={secondInput}
            onChangeText={text => {
              setOtp({ ...otp, 2: text });
              text ? thirdInput.current.focus() : firstInput.current.focus();
            }} />

          <Input bgColor="#EEEEEE" Bottom="80 px" w="60 px" h="60 px"
            maxLength={1} fontFamily='Regular'
            fontSize="2xl" textAlign='center' color="#8AA7CF"
            keyboardType="number-pad"
            ref={thirdInput}
            onChangeText={text => {
              setOtp({ ...otp, 3: text });
              text ? fourthInput.current.focus() : secondInput.current.focus();
            }} />

          <Input bgColor="#EEEEEE" Bottom="80 px" w="60 px" h="60 px"
            maxLength={1} fontFamily='Regular'
            fontSize="2xl" textAlign='center' color="#8AA7CF"
            keyboardType="number-pad"
            ref={fourthInput}
            onChangeText={text => {
              setOtp({ ...otp, 4: text });
              !text && thirdInput.current.focus();
            }} />
        </HStack>
        <Button size="md" borderRadius={20} backgroundColor="#35609C" marginTop="30 px" _text={{
          color: "#FFFF", fontFamily: 'Medium', fontSize: "md",
        }} _pressed={{
          bg: "#8AA7CF", _text: { color: "#35609C" }
        }}>
          ส่ง
        </Button>

      </FormControl>
    </Center>
  );
};