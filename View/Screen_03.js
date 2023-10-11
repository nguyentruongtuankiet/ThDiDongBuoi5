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

import { useNavigation } from "@react-navigation/native";

export default function Screen_03() {
  const [image, SetImage] = useState(require("../Image/vs_blue.png"));

  const [color, SetColor] = useState("Xanh dương");

  const navigation = useNavigation();
  const handelScreen_01 = () => {
    console.log(image);
    navigation.navigate("Screen_01", {
      selectedImage: image,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.divheader}>
          <Image
            style={styles.image}
            source={image} // Thay đổi đường dẫn đến hình ảnh tương ứng
            resizeMode="contain"
          />
          <View style={styles.divText}>
            <Text style={styles.textName}>
              Điện Thoại Vsmart Joy 3 Hàng chính hãng
            </Text>
            <View style={styles.divcolor}>
              <Text style={styles.textcolor}>Màu:</Text>
              <Text style={styles.color}> {color}</Text>
            </View>
            <View style={styles.divsupplier}>
              <Text style={styles.textsupplier}>Cung cấp bởi </Text>
              <Text style={styles.supplier}>Tiki Tradding</Text>
            </View>
            <Text style={styles.textprice}>1.790.000đ</Text>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.textOptionColor}>Chọn một màu bên dưới:</Text>
        <View style={styles.divOption}>
          <TouchableOpacity
            onPress={() => {
              SetImage(require("../Image/vs_silver.png")), SetColor("Silver");
            }}
          >
            <View style={styles.divOptionColorSilver}></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              SetImage(require("../Image/vs_red.png")), SetColor("Đỏ");
            }}
          >
            <View style={styles.divOptionColorRed}></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              SetImage(require("../Image/vs_black.png")), SetColor("Đen");
            }}
          >
            <View style={styles.divOptionColorBlack}></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              SetImage(require("../Image/vs_blue.png")), SetColor("Xanh dương");
            }}
          >
            <View style={styles.divOptionColorBlue}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handelScreen_01}>
            <View style={styles.divChoose}>
              <Text style={styles.textChoose}>XONG</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    flex: 2.5,
  },
  body: {
    flex: 7.5,
    backgroundColor: "#C4C4C4",
  },
  divheader: {
    marginTop: 9,
    height: 128,
    width: 330,
    flexDirection: "row",
    marginLeft: 5,
  },

  image: {
    width: 114,
    height: 128,
  },
  divText: {
    marginLeft: 17,
  },
  textName: {
    marginTop: 8,
    marginLeft: 2,
    fontFamily: "Arial",
    fontSize: 15,
    color: "#000",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "normal",
    width: 164,
    height: 36,
  },
  divcolor: {
    width: 150,
    height: 18,
    flexDirection: "row",
    marginTop: 9,
  },
  textcolor: {
    fontFamily: "Arial",
    fontSize: 15,
    color: "#000",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  color: {
    fontFamily: "Arial",
    fontSize: 15,
    color: "#000",
    fontWeight: "700",
    fontStyle: "normal",
  },
  divsupplier: {
    width: 190,
    height: 20,
    flexDirection: "row",
    marginTop: 9,
  },
  textsupplier: {
    marginLeft: 2,
    fontFamily: "Arial",
    fontSize: 15,
    color: "#000",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  supplier: {
    fontFamily: "Arial",
    fontSize: 15,
    color: "#000",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  textprice: {
    marginLeft: 5,
    marginTop: 9,
    fontFamily: "Arial",
    fontSize: 18,
    color: "#000",
    fontWeight: "700",
    lineHeight: "normal",
  },
  textOptionColor: {
    fontFamily: "Arial",
    fontSize: 18,
    color: "#000",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "normal",
    marginLeft: 17,
    marginTop: 10,
  },
  divOptionColorSilver: {
    width: 85,
    height: 80,
    backgroundColor: "#C5F1FB",
    margin: 6.5,
  },
  divOptionColorRed: {
    width: 85,
    height: 80,
    backgroundColor: "#F30D0D",
    margin: 6.5,
  },
  divOptionColorBlack: {
    width: 85,
    height: 80,
    backgroundColor: "#000",
    margin: 6.5,
  },
  divOptionColorBlue: {
    // căn giữa divOptionColorBlue

    width: 85,
    height: 80,
    backgroundColor: "#234896",
    margin: 6.5,
  },
  divOption: {
    marginTop: 6.5,
    justifyContent: "center",
    alignItems: "center",
  },
  divChoose: {
    width: 326,
    height: 44,
    // borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "rgba(25, 82, 226, 0.58)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 27.5,
  },
  textChoose: {
    fontFamily: "Arial",
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
    lineHeight: "normal",
  },
});
