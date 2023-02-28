import { View, Text,Button } from 'react-native';
import React from 'react'
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import detail from "./Page/detail";
import page1 from "./Page/page1";
import page2 from "./Page/page2";
import DetailScreen from "./Page/DetailScreen"


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Stack1() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="detail" component={detail}></Stack.Screen>
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
            <Stack.Screen name="page1" component={page1}></Stack.Screen>
            {/* <Stack.Screen name="page2" component={page2}></Stack.Screen> */}
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
            <Stack.Screen name="page2" component={page2 }></Stack.Screen>
            {/* <Stack.Screen name="page2" component={page2}></Stack.Screen> */}
        </Stack.Navigator>
    );
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

function MyDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    // backgroundColor: '#b0e0e6',
                    width: 240
                }
            }}
            useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent{...props} />}>

            <Drawer.Screen
                name="First Stack"
                component={Stack1}
                options={{
                    drawerLabel: "First page Option",
                    title: "แนะนำสินค้า",
                }}
            />
            <Drawer.Screen
                name="Second Stack"
                component={Stack2}
                options={{
                    drawerLabel: "Second page Option",
                    title: "Second Stack",
                }}
            ></Drawer.Screen>
            <Drawer.Screen
                name="Third Stack"
                component={Stack3}
                options={{
                    drawerLabel: "Third page Option",
                    title: "Third Stack",
                }}
            ></Drawer.Screen>
        </Drawer.Navigator>
    )
}

const App = () => {
    return (

        <NavigationContainer>
            <MyDrawer></MyDrawer>
        </NavigationContainer>

    )
}

export default App
