import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Screen_01 from "./View/Screen_01.js";
import Screen_03 from "./View/Screen_03.js";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false, // Tắt tiêu đề
  headerBackTitleVisible: false, // Tắt mũi tên điều hướng trở lại
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen_01" screenOptions={screenOptions}>
        <Stack.Screen name="Screen_01" component={Screen_01} />
        <Stack.Screen name="Screen_03" component={Screen_03} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
