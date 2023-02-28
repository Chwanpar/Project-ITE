import { StyleSheet, Text, View, Image, SafeAreaView ,TouchableOpacity} from 'react-native'
import React from 'react'

const page2 = () => {
    return (
        <SafeAreaView >
            <View style={{ flex: 1, marginTop: 20, alignItems: 'center' }}>
                <Text style={{ fontSize: 25 ,marginBottom:10 , color:'#0A61BA'}}>ช่องทางการติดต่อเรา</Text>

                <View style={{ marginTop: 10, flexDirection:'row' }}>
                    <Image style={{ height: 20, width: 20}} source={require('../assets/iconmail.png')} />
                    <Text style={{ fontSize: 16, marginLeft: 15, marginRight: 5 }}>E-Mail : te.kunyanut@tni.ac.th</Text>
                    
                </View>
                <View style={{ marginTop: 10, flexDirection:'row' }}>
                    <Image style={{ height: 20, width: 20}} source={require('../assets/iconscall.png')} />
                    <Text style={{ fontSize: 16, marginLeft: 15, marginRight: 5 }}>Tel : 02-721-7688                      </Text>
                    
                </View>

                <View style={{ marginTop: 20 }}>
                    <View style={{ marginTop: 20 }}>
                        <Image style={{ height: 150, width: 150, marginLeft: 20, marginRight: 20 }} source={require('../assets/logo.png')} />
                    </View>
                </View>
            </View>

            <View style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                <Text style={{ fontSize: 15, color: "gray" }}>
                    Copyright 2023
                </Text>
            </View>

        </SafeAreaView >
    )
}

export default page2

const styles = StyleSheet.create({})