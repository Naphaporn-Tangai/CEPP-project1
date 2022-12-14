import { View, Center  } from 'native-base'
import React from 'react'
import {Calendar} from 'react-native-calendars';
export default function CalendarList() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} safeAreaTop >
    <Center flex={1}>
    <Calendar
    w="100%"
  markingType={'period'}
  markedDates={{
    '2012-05-15': {marked: true, dotColor: '#7296C7'},
    '2012-05-16': {marked: true, dotColor: '#7296C7'},
    '2012-05-21': {startingDay: true, color: '#7296C7', textColor: 'white'},
    '2012-05-22': {color: '#8AA7CF', textColor: 'white'},
    '2012-05-23': {color: '#8AA7CF', textColor: 'white', marked: true, dotColor: 'white'},
    '2012-05-24': {color: '#8AA7CF', textColor: 'white'},
    '2012-05-25': {endingDay: true, color: '#7296C7', textColor: 'white'}
  }}
/>
      </Center>
    </View>
  )
}