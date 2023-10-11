import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Screen_01() {
  const route = useRoute();
  const selectedImage = route.params
    ? route.params.selectedImage
    : require("../Image/vs_blue.png");

  const navigation = useNavigation();

  const handelScreen_02 = () => {
    navigation.navigate("Screen_03");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.imageproduct}
          source={selectedImage} // Thay đổi đường dẫn đến hình ảnh tương ứng
        />
      </View>
      <View style={styles.divnameproduct}>
        <Text style={styles.textnameproduct}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>
      <View style={styles.divEvaluate}>
        <View style={styles.divStarEvaluate}>
          <Image
            style={styles.imagestrar}
            source={require("../Image/star.png")}
          />
          <Image
            style={styles.imagestrar}
            source={require("../Image/star.png")}
          />
          <Image
            style={styles.imagestrar}
            source={require("../Image/star.png")}
          />
          <Image
            style={styles.imagestrar}
            source={require("../Image/star.png")}
          />
          <Image
            style={styles.imagestrar}
            source={require("../Image/star.png")}
          />
        </View>
        <Text style={styles.textStarEvaluate}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.divPrice}>
        <Text style={styles.textPriceNew}>1.790.000đ</Text>
        <Text style={styles.textPriceOld}>1.790.000đ</Text>
      </View>
      <View style={styles.divcommitment}>
        <Text style={styles.textcommitment}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image
          style={styles.imagecommitment}
          source={require("../Image/question.png")}
        />
      </View>
      <TouchableOpacity onPress={handelScreen_02}>
        <View style={styles.divchoosecolor}>
          <View style={styles.divtextchoosecolor}>
            <Text style={styles.textchoosecolor}>4 MÀU-CHỌN MÀU</Text>
          </View>
          <Image
            style={styles.imagechoosecolor}
            source={require("../Image/Vector.png")}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.divchoose}>
        <Text style={styles.textchoose}>CHỌN MUA</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  header: {
    width: 301,
    height: 361,
    // backgroundColor : "red",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  imageproduct: {
    width: 301,
    height: 361,
  },
  divnameproduct: {
    width: 320,
    height: 18,
    marginLeft: 22,
    // backgroundColor: "red",
  },
  textnameproduct: {
    fontFamily: "Arial",
    fontSize: 15,
    color: "#000",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  divEvaluate: {
    marginTop: 9,
    height: 25,
    width: 320,
    flexDirection: "row",
    marginLeft: 22,
    alignItems: "center",
  },
  divStarEvaluate: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 128,
    height: 25,
  },
  imagestrar: {
    width: 24,
    height: 25,
  },
  textStarEvaluate: {
    marginLeft: 23,
    fontFamily: "Arial",
    fontSize: 15,
    color: "#000",
    fontWeight: "400",
    fontStyle: "normal",
  },
  divPrice: {
    marginTop: 13,
    height: 25,
    width: 320,
    flexDirection: "row",
    marginLeft: 23,
    alignItems: "center",
  },
  textPriceNew: {
    fontFamily: "Arial",
    fontSize: 18,
    color: "#000",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal",
    width: 99,
    height: 21,
  },
  textPriceOld: {
    width: 88,
    height: 18,
    marginLeft: 10,
    fontFamily: "Arial",
    fontSize: 15,
    color: "#00000094",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "normal",
    textDecorationLine: "line-through",
    marginLeft: 44,
  },
  divcommitment: {
    marginTop: 16,
    width: 320,
    height: 20,
    marginLeft: 23,
    alignItems: "center",
    flexDirection: "row",
  },
  textcommitment: {
    fontFamily: "Arial",
    fontSize: 11.5,
    color: "#FA0000",
    fontWeight: "700",
    fontStyle: "normal",
  },
  imagecommitment: {
    width: 20,
    height: 20,
    marginLeft: 8,
  },
  divchoosecolor: {
    marginTop: 19,
    width: 332,
    height: 34,
    marginLeft: 18,
    borderRadius: "10px",
    border: "1px solid rgba(0, 0, 0, 0.46)",
    background: "rgba(196, 196, 196, 0.00)",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    flexDirection: "row",
    alignItems: "center",
  },
  divtextchoosecolor: {
    width: 332,
    height: 34,
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  textchoosecolor: {
    fontFamily: "Arial",
    fontSize: 15,
    color: "#000",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "normal",
    textAlignVertical: "center",
  },
  imagechoosecolor: {
    width: 12,
    height: 15,
    right: 31,
  },
  divchoose: {
    width: 326,
    height: 44,
    marginLeft: 21,
    marginTop: 59,
    borderRadius: "10px",
    border: "1px solid rgba(0, 0, 0, 0.46)",
    backgroundColor: "#EE0A0A",
    justifyContent: "center",
    alignItems: "center",
  },
  textchoose: {
    fontFamily: "Arial",
    fontSize: 20,
    color: "#F9F2F2",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal",
  },
});
