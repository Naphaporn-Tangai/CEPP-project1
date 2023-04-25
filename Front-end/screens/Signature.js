import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Signature from "react-native-signature-canvas";

export default function SignatureScreen() {
  const [signature, setSign] = useState(null);

  const handleOK = (signature) => {
    console.log('seve');
    setSign(signature);
  };

  const handleEmpty = () => {
    console.log("Empty");
  };

  const style = `.m-signature-pad--footer
  .button.save {
    background-color: #35609C;
    color: #FFF;
    font-size: 16px;
    font-family: Medium ;
    border-radius: 10px;
  }`;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.preview}>
        {signature ? (
          <Image
            resizeMode={"contain"}
            style={{ width: 335, height: 300 }}
            source={{ uri: signature }}
            
          />
        ) : null}
      </View>
      <Signature
        onOK={handleOK}
        onEmpty={handleEmpty}
        descriptionText="Sign"
        clearText="ล้าง"
        confirmText="เซ็นชื่อ"
        webStyle={style}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  preview: {

    height: 114,
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
