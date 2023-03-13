import React,{useState} from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableOpacityBase
} from "react-native"


export default function ReturnDev() {
  return (
    <View style={styles.barequipment}>
    <View style={styles.Subcontainer}>
        <Image source={{uri:'https://img.icons8.com/ios-glyphs/256/new-document.png'}} style={styles.Image}></Image>
        <TouchableOpacity>
            <Text style={styles.Textdetail}>{Name}</Text>
        </TouchableOpacity>
    </View>
    <View style={{display:'flex',flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingRight:20}}>
        <View style={styles.Subcontainer}>
            <Image source={{uri:'https://img.icons8.com/material-rounded/256/ingredients-list.png'}} style={styles.Image}></Image>
            <TouchableOpacity>
                <Text style={styles.Textdetail}>{Amount}</Text>
            </TouchableOpacity>
        </View>
            <View style={{display:"flex",flexDirection:'row',alignItems:"center"}}>
                <TouchableOpacity style={styles.Subamount} onPress={() => AddAmount(NumAmount)}>
                    <Image source={{uri:'https://img.icons8.com/material-outlined/256/plus-2-math.png'}} style={styles.Image}></Image>
                </TouchableOpacity>
                <Text style={styles.NumAmount}>{NumAmount}</Text>
                <TouchableOpacity style={styles.Subamount} onPress={() => DeleteAmount(NumAmount)}>    
                    <Image source={{uri:'https://img.icons8.com/material-outlined/256/indeterminate-checkbox.png'}} style={styles.Image}></Image>
                </TouchableOpacity>
            </View>
    </View>
    <View style={styles.Subcontainer}>
        <Image source={{uri:'https://img.icons8.com/ios-glyphs/256/compact-camera.png'}} style={styles.Image}></Image>
        <TouchableOpacity>
            <Text style={styles.Textdetail}>{Imagetext}</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.Subcontainer}>
        <Image source={{uri:'https://img.icons8.com/ios-glyphs/256/calendar.png'}} style={styles.Image}></Image>
        <TouchableOpacity>
            <Text style={styles.Textdetail}>{Date}</Text>
        </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={() => SaveEquipment()} style={{margin:30,height:50,justifyContent:"center",display:"flex",alignItems:"center",marginTop:50,backgroundColor:'blue',borderRadius:10}}>    
        <Text style={{fontSize:24,fontWeight:'500',color:'white'}}>บันทึก</Text>
    </TouchableOpacity>
</View>
)
}

const styles = StyleSheet.create({
  barequipment:{
      flex:1,
      marginTop:30,
      // backgroundColor:'green'
  },
  TextNavber:{
      fontSize:24,
      color:'black'
  },
  Textdetail:{
      fontSize:16,
      color:'darkblue',
      padding:10,
      paddingRight:20
  },
  Image:{
      width:30,
      height:30,
     
  },
  Subcontainer:{
      display:"flex",
      flexDirection:"row",
      paddingLeft:20,
      alignItems:"center"
  },
  Subamount:{
      display:"flex",
      flexDirection:"row"
  },
  NumAmount:{
      fontSize:16,
      fontWeight:"bold",
      color:'darkblue',
      padding:5
  },
  SaveButton:{
      width:50,
      height:50,
  }
})