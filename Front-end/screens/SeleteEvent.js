import {
  Container,
  Content,
  Box,
  HStack,
  VStack,
  View,
  Text,
  Pressable,
  Button,
  Icon,
  useDisclose,
  Center,
} from "native-base";
import { FontAwesome5 ,MaterialCommunityIcons , Ionicons} from "@expo/vector-icons";

import React, { useState, useEffect, useRef } from "react";
import AddVideo from "../components/AddVideo";

export default function SeleteEvent({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(new Date()); // set initial date to current date

  const formattedDate = `${selectedDate.getDate()} ${monthNames[selectedDate.getMonth()]
    } ${selectedDate.getFullYear()}`; // format selected date
    const {
      isOpen,
      onOpen,
      onClose
    } = useDisclose();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      bgColor="#fff" height="100%">
      <VStack marginTop={10}>
        <Text fontSize="17" fontFamily="Medium" color="#000" ml="9">
          {formattedDate}
        </Text>
      </VStack>
      <Box
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 1,
              height: 2,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 6,

            width: 400,
            height: "100%",
            marginTop: 40,
            backgroundColor: "#fff",
            borderRadius: 40,
          }}
        >
          <VStack mr={7}>
          <Text
            ml={10}
            mt={7}
            fontFamily="Medium"
            color="#35609C"
            fontSize={22}
          >
            เข้าปฎิบัติงาน
          </Text> 
          <Box paddingY={1} paddingX={70}>
          <HStack>
            <Icon
              as={<FontAwesome5 name="calendar-alt" />}
              size="md"
              color={COLORS.primary}
              marginRight={5}
            />
            <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
               16/10/65  -  20/10/25
            </Text>
          </HStack>
          <Box w={150} paddingBottom={4} mt={2}>
          <HStack>
            <Icon
              as={<MaterialCommunityIcons name="clock" />}
              size="md"
              color={COLORS.primary}
              marginRight={5}
            />
            <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
            08:00 - 09:00
            </Text>
          </HStack>
        </Box>
        <Box paddingX={70}>
          <HStack>
            <Icon
              as={<Ionicons name="location-sharp" />}
              size="md"
              color={COLORS.primary}
              marginRight={5}
            />
            
              <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
              หมู่บ้านเทพนคร
              189 ถ. พุทธมณฑลสาย 2 ซ. 10 แขวง บางแคเหนือ เขตบางแค 
              กรุงเทพมหานคร 10160
              </Text>
           
          </HStack>
        </Box>
        <Text fontFamily="Regular" fontSize="17 px" color="#35609C">ชื่อผู้สูงอายุ :</Text>
        <Text fontFamily="Regular" fontSize="17 px" color="#000">  นางสาริกา  ดิ้นทอง</Text>
        <HStack>
        <Text fontFamily="Regular" fontSize="17 px" color="#35609C">กลุ่มผู้สูงอายุ :</Text>
        <Text fontFamily="Regular" fontSize="17 px" color="#000">  กลุ่มติดเตียง</Text>
        </HStack>
        <Text fontFamily="Regular" fontSize="17 px" color="#35609C">ชื่อผู้สูงอายุ :</Text>
        <Text fontFamily="Regular" fontSize="17 px" color="#000">  นางสาริกา  ดิ้นทอง</Text>
        </Box>
        

          
          <Actionsheet isOpen={isOpen} onClose={onClose}>
              <Actionsheet.Content>
              <Button
            size="md"
            borderRadius={10}
            variant="outline"
            borderColor="#35609C"
            borderWidth={1}
            _text={{
              color: "#FFFF",
              fontFamily: "Medium",
              fontSize: "md",
            }}
            _pressed={{
              bg: "#8AA7CF",
              _text: { color: "#35609C" },
            }}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              marginBottom: 60,
              marginHorizontal: 45,
            }}
            onPress={() => navigation.navigate("HomeCg")}
          >
            ยืนยันการปฎิบัติงาน
          </Button>
              

                <HStack space={4} mb={5}>
                  <Actionsheet.Item><AddImaage/></Actionsheet.Item>
                  <Actionsheet.Item><Addlocation/></Actionsheet.Item>
                  <Actionsheet.Item><AddVideo/></Actionsheet.Item>
                  
                </HStack>
              </Actionsheet.Content>
            </Actionsheet>
        </VStack>
        </Box>
    </View>
  )
}