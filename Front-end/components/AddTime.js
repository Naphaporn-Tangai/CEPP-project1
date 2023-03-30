import { Actionsheet, useDisclose, Box , Input , HStack ,Icon , Text ,VStack , Pressable} from "native-base";

import { FontAwesome5 ,MaterialCommunityIcons} from "@expo/vector-icons";
import React ,{ useState }from 'react'

import { COLORS } from '../constants';
export default function AddTime() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Box paddingX={70} mb={1}>
       <HStack>
       <Pressable _pressed={{ bg: "coolGray.200" }}>
       <Box w={150} marginRight={5} paddingBottom={4} mt={2}>
          <HStack>
            <Icon
              as={<FontAwesome5 name="clock" />}
              size="md"
              color={COLORS.primary}
              marginRight={5}
            />
            <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
             เวลาเริ่ม
            </Text>
          </HStack>
        </Box>
       </Pressable> 
       <Pressable>
       <Box w={150} paddingBottom={4} mt={2}>
          <HStack>
            <Icon
              as={<MaterialCommunityIcons name="clock" />}
              size="md"
              color={COLORS.primary}
              marginRight={5}
            />
            <Text fontFamily="Regular" fontSize="17 px" color="#35609C">
            เวลาสิ้นสุด
            </Text>
          </HStack>
        </Box>
       </Pressable> 
       <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>ตั้งค่าเวลาเริ่ม</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
           
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button flex="1" onPress={() => {
            setShowModal2(true);
          }}>
              บันทึก
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

       </HStack>
    </Box>
  )
}