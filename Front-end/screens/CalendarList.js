import { View, Center } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet, Animated, Easing } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { addDays, format, startOfDay , endOfDay} from "date-fns";
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { backgroundColor } from 'react-native-calendars/src/style';


LocaleConfig.locales.th = {
  monthNames: [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม',
  ],
  
  dayNames: [
    'อาทิตย์',
    'จันทร์',
    'อังคาร',
    'พุธ',
    'พฤหัสบดี',
    'ศุกร์',
    'เสาร์',
  ],
  dayNamesShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
};

LocaleConfig.defaultLocale = 'th';

export default function CalendarList() {

  const date = new Date();
  const tomorrow = addDays(date, 1);
  const start = startOfDay(date);
  const end = startOfDay(date);
  const dateFormatted = format(date, "yyyy-MM-dd"); 
  console.log(tomorrow)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}  bgColor="#fff">
      <Center flex={1}>


        <Calendar
          style={{ height: 700 , width: 420 , paddingTop: 30}}
          markingType={"custom"}
          theme={{
            textDayFontFamily: 'Regular',
            selectedDayBackgroundColor: '#35609C',
            calendarBackground: "#fff",
            selectedDayTextColor: "#fff",
            selectedDayBackgroundColor: "#35609C",
            todayTextColor: '#fff',
            todayBackgroundColor: '#35609C',
            'stylesheet.day': { today: { backgroundColor: '#35609C', borderRadius: 100, width: 35 ,height: 35 } },
          }}
        />
      </Center>
    </View>
  )
}
