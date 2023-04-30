import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Signature from "react-native-signature-canvas";
import {
  Button,
} from "native-base";
export default function SignatureScreen({navigation}) {
  const [signature, setSign] = useState(null);

  const handleOK = (signature) => {
    console.log('seve');
    setSign(signature);
  };

  const handleEmpty = () => {
    console.log("Empty");
  };

  const style = `.m-signature-pad--footer
  .m-signature-pad {
    height: 200 px;
    
  }
  .m-signature-pad--footer
    .button {
      background-color: #35609C;
      color: #FFF;
      
    }
`;

  return (
    <View style={{ flex: 1 , alignItems: "center", justifyContent: "center"}}  backgroundColor="#fff" >
      <View style={styles.preview}>
        {signature ? (
          <Image
            resizeMode={"contain"}
            style={{ width: 335, height: 200 }}
            source={{ uri: signature }}
            
          />
        ) : null}
      </View>
      <Signature
        onOK={handleOK}
        onEmpty={handleEmpty}
        descriptionText=""
        clearText="ล้าง"
        confirmText="เซ็นชื่อ"
        webStyle={style}
      />
    <Button backgroundColor="#35609C"onPress={() => navigation.navigate('BottomTapCG')}>บันทึก</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  preview: {
    width: 400,
    height: 100,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    flex: 1,
  },
  previewText: {
    color: "#FFF",
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#69B2FF",
    width: 120,
    textAlign: "center",
    marginTop: 10,
  },
});
