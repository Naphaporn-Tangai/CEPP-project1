import { Actionsheet, useDisclose, Box , Input , HStack ,Icon , Text ,Pressable, Spacer ,Switch} from "native-base";
import React from 'react'
import { Ionicons , FontAwesome ,FontAwesome5 ,MaterialCommunityIcons ,Entypo} from "@expo/vector-icons";
import { COLORS } from '../constants';

export default function ScheduleNew() {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();
  return ( <>
<Pressable
onPress={onOpen} _pressed={{bg:"coolGray.200"}}>
 <Box w="100%" h={35} >
 <HStack justifyContent="space-between">
 
 <Text fontFamily='Regular' fontSize="md">สี</Text>
 <Spacer />
 <Icon as={Entypo} name="chevron-right" size="xl" />
 </HStack>
 </Box>
 </Pressable> 
 

 
<Actionsheet isOpen={isOpen} onClose={onClose} >
 <Actionsheet.Content >
   <Box w="100%" h={60} px={4} justifyContent="center">
     <Text fontSize="md" color="#000" fontFamily='Medium' ml={3}>
       กำหนดสี
     </Text>
   </Box>
   
   <HStack space={4}  mb={5}>
   <Actionsheet.Item bg="#213D64" rounded="100" w="18.5%" h="70"></Actionsheet.Item>
   <Actionsheet.Item bg="#441555" rounded="100" w="18.5%" h="70"></Actionsheet.Item>
   <Actionsheet.Item bg="#308911" rounded="100" w="18.5%" h="70"></Actionsheet.Item>
   <Actionsheet.Item bg="#AD0000" rounded="100" w="18.5%" h="70"></Actionsheet.Item>
   </HStack>
   <HStack space={4}  mb={5}>
   <Actionsheet.Item bg="#346CB6" rounded="100" w="18.5%" h="70"></Actionsheet.Item>
   <Actionsheet.Item bg="#772A93" rounded="100" w="18.5%" h="70"></Actionsheet.Item>
   <Actionsheet.Item bg="#49AC26" rounded="100" w="18.5%" h="70"></Actionsheet.Item>
   <Actionsheet.Item bg="#CE1414" rounded="100" w="18.5%" h="70"></Actionsheet.Item>
   </HStack>
   <HStack space={4}  mb={5}>
   <Actionsheet.Item bg="#7296C7" rounded="100" w="18.5%" h="70"></Actionsheet.Item>
   <Actionsheet.Item bg="#A54CC5" rounded="100" w="18.5%" h="70"></Actionsheet.Item>
   <Actionsheet.Item bg="#61D638" rounded="100" w="18.5%" h="70"></Actionsheet.Item>
   <Actionsheet.Item bg="#F01A1A" rounded="100" w="18.5%" h="70"></Actionsheet.Item>
   </HStack>
   <HStack space={4}  mb={5}>
   <Actionsheet.Item bg="#8AA7CF" rounded="100" w="18.5%" h="70"></Actionsheet.Item>
   <Actionsheet.Item bg="#CF5CF8" rounded="100" w="18.5%" h="70"></Actionsheet.Item>
   <Actionsheet.Item bg="#60E930" rounded="100" w="18.5%" h="70"></Actionsheet.Item>
   <Actionsheet.Item bg="#E73939" rounded="100" w="18.5%" h="70"></Actionsheet.Item>
   </HStack>  
   
 </Actionsheet.Content>
</Actionsheet>
<HStack justifyContent="space-between">
<Text fontFamily='Regular' fontSize="md">แจ้งเตือนหน้าหลัก</Text>
<Spacer />
<Switch offTrackColor={COLORS.primary} onTrackColor="#DDDFE1" defaultIsChecked />
</HStack>
</>
  )
}