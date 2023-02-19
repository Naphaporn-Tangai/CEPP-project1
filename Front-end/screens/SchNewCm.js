import { Actionsheet, useDisclose, Box , Input , HStack ,Icon , Text ,VStack, Spacer ,Switch ,View , Center} from "native-base";
import React from 'react'
import { Ionicons , FontAwesome ,FontAwesome5 ,MaterialCommunityIcons ,Entypo} from "@expo/vector-icons";
import { COLORS } from '../constants';
import { Addlocation } from "../components"
import { AddTittle } from "../components"
import { AddColors } from "../components"
import { AddDate } from "../components"
import { AddTime } from "../components"
import { AddSwitch } from "../components"

export default function SchNewCm() {


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} safeAreaTop >
    <Center flex={1} >
    <Box  flex={1} top='3%'>
    <VStack  mb={5}>
        <AddTittle/>
        <Addlocation/>
        <AddColors/>
        <AddDate/>
        <AddTime/>
        <AddSwitch/>
      </VStack>
      </Box>
      </Center>
    </View>
  )
}