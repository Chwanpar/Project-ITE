import { View, Text, Button } from "react-native";
import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductScreen from "./Page/ProductScreen";
import HomeScreen from "./Page/detail";
import DetailScreen from "./Page/DetailScreen";
import page2 from "./Page/page2";
import ProductDetail from "./Page/ProductDetail"


function Stack1() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
function Stack2() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Product" component={ProductScreen}></Stack.Screen>
      {/* <Stack.Screen name="Detail" component={DetailScreen} /> */}
    </Stack.Navigator>
  );
}
function Stack3() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Contact" component={page2}></Stack.Screen>
    </Stack.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* <DrawerItem
        label="Close Drawer"
        onPress={() => props.navigation.closeDrawer()}
      /> */}
    </DrawerContentScrollView>
  );
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#4E31AA",
        },
        headerTintColor: "#ffffff",
        headerTittle: "bold",
      }}
    >
      <Stack.Screen name="Brand" component={ProductScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetail}></Stack.Screen>
      
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: 240,
        },
        drawerActiveBackgroundColor: "#ECF2FF",
      }}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Stack1} />
      <Drawer.Screen name="Product" component={ProductStack} />
      <Drawer.Screen name="Contact" component={Stack3} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (

    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};


export default App;