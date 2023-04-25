import { View, Text } from 'react-native'
import React, { useState, useEffect, useRef } from "react";

export default function SeleteEvent({ navigation }) {
    const [selectedDate, setSelectedDate] = useState(new Date()); // set initial date to current date

  const formattedDate = `${selectedDate.getDate()} ${
    monthNames[selectedDate.getMonth()]
  } ${selectedDate.getFullYear()}`; // format selected date

  return (
    <View>
      <Text>{formattedDate}</Text>
    </View>
  )
}