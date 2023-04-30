import React from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native"
import {
  Avatar,
  VStack, 
} from "native-base";

export default function DatumCG({ navigation }){
  return(
      <View style={styles.Container}>
                          <Avatar bg="green.500" style={{ width: 100, height: 100 , marginBottom: 10}} mr="2" source={{
                    uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                }} >
                    RS
                </Avatar>
                <VStack  style={{  alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontFamily: 'Medium', color: "#35609C" , fontSize: 17}}>
                        นายกันต์ มากทรัพย์สิน
                    </Text>
                    <Text style={{ fontFamily: 'Regular', color: "#8AA7CF", fontSize: 15 }}>
                    Care giver
                    </Text>
                </VStack>
          
          <View style={styles.WorkIn}>
              <Text style={{color:'white',fontSize:16,padding:10 ,fontFamily: 'Regular', marginLeft: 5}}>จำนวนการเข้างาน</Text>
              <View style={styles.SubText}>
                  <Text style={{color:'white',fontSize:30,padding:15,fontFamily: 'Regular'}}>1,085</Text>
                  <Text style={{color:'white',fontSize:16,fontFamily: 'Regular'}}>ครั้ง</Text>
              </View>
          </View>
          <View style={styles.SubContainer}>
              <View style={styles.Problem}>
                  <Text style={{fontSize:16,padding:10,fontFamily: 'Regular', marginLeft: 5}}>แจ้งปัญหา</Text>
                  <View style={styles.SubText2}>
                      <Text style={{color:'black',fontSize:30,padding:15,fontFamily: 'Regular'}}>1000</Text>
                      <Text style={{fontSize:16,paddingRight:15,fontFamily: 'Regular'}}>ครั้ง</Text>
                  </View>
              </View>
              <View style={styles.Time}>
              <Text style={{fontSize:16,padding:10,fontFamily: 'Regular', marginLeft: 5}}>ลงเวลาล่าช้า</Text>
                  <View style={styles.SubText2}>
                      <Text style={{color:'black',fontSize:30,padding:15,fontFamily: 'Regular'}}>1000</Text>
                      <Text style={{fontSize:16,paddingRight:15,fontFamily: 'Regular'}}>ครั้ง</Text>
                  </View>
              </View>
          </View>
          <View style={styles.WorkOut}>
              <Text style={{color:'white',fontSize:16,padding:10,fontFamily: 'Regular', marginLeft: 5}}>จำนวนการออกงาน</Text>
              <View style={styles.SubText}>
                  <Text style={{color:'white',fontSize:30,padding:15,fontFamily: 'Regular'}}>1,085</Text>
                  <Text style={{color:'white',fontSize:16,fontFamily: 'Regular'}}>ครั้ง</Text>
              </View>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    flex:1,
    alignItems:'center',
    padding:30,
  backgroundColor: "#fff"
  },
  UserName:{
      fontSize:24,
      fontWeight:"500",
      color:'darkblue',
      padding:10
  },
  Image:{
      width:100,
      height:100,
  },
  WorkIn:{
      marginTop:30,
      display:'flex',
      backgroundColor:"#35609C",
      borderRadius:10,
      alignSelf: 'stretch',
      
  },
  WorkOut:{
      marginTop:10,
      display:'flex',
      backgroundColor:"#35609C",
      borderRadius:10,
      alignSelf: 'stretch',
  },
  SubText:{
      display:'flex',
      flexDirection:'row',
      alignSelf: 'stretch',
      alignItems:'center',
      justifyContent:'center',
  },
  SubText2:{
      display:'flex',
      flexDirection:'row',
      alignSelf: 'stretch',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
      // padding:10,
      maxWidth:300,
      minWidth:160,
      flexWrap:'wrap'

      
  },
  SubContainer:{
      alignSelf: 'stretch',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      // backgroundColor:'gray'
      flexWrap:'wrap'
      
  },
  Problem:{
      marginTop:10,
      display:'flex',
      borderRadius:10,
      alignSelf: 'stretch',
      backgroundColor:'#a6bacb',
      
  },
  Time:{
      marginTop:10,
      display:'flex',
      borderRadius:10,
      alignSelf: 'stretch',
      backgroundColor:'#a6bacb',
  }

})
