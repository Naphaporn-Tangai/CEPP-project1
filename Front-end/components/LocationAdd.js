import { Input, Box, Button, HStack, Icon, Pressable, Text ,VStack} from 'native-base';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Addlocation(props) {
  const navigation = useNavigation();
  const route = useRoute();
  const [address, setAddress] = useState(null); // สร้าง state สำหรับเก็บข้อมูล address

  useEffect(() => {
    if (route.params?.address) { // เช็คว่ามีค่า address ที่ถูกส่งมาหรือไม่
      setAddress(route.params?.address);
    }
  }, [route.params?.address]);
console.log(address);

  return (
    <Box >
      <Pressable
        paddingY={2}
        _pressed={{ bg: 'coolGray.200' }}
        onPress={() => navigation.navigate('MapSch')}
        
      >
        <Box paddingX={70}>
          <HStack>
            <Icon
              as={<Ionicons name="location-sharp" />}
              size="md"
              color={COLORS.primary}
              marginRight={5}
            />
            {address ? ( // ถ้ามี address แล้ว
              <Pressable onPress={() => navigation.navigate('MapSch')} pr={5}>          
                <Text fontFamily="Regular" fontSize="17 px" color="#000">
                {address}
                </Text>
              </Pressable>
            ) : (
              <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
                สถานที่
              </Text>
            )}
          </HStack>
        </Box>
      </Pressable>
    </Box>
  );
}
