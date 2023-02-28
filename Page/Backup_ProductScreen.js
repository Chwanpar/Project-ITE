import { StyleSheet, Text, View, Image, SafeAreaView, Button ,TouchableOpacity} from 'react-native'
import React from 'react'


const detail = ({navigation}) => {

    const chechTextInput = () => {
   
        alert("มีโปรจ้า สนใจบ่?");
        return;
      
    };

    return (
        <SafeAreaView style={{ backgroundColor: "#FCF8E8" }}>
            <View style={{ marginTop: 20 }}></View>
            <View style={{ flex: 1, alignItems: "center", backgroundColor: "#ffffff" }}>

                {/* <Text style={{ fontSize: 20, marginTop: 10, marginBottom: 10}}>LOGO</Text> */}
                <Image style={{ height: 100, width: 100, marginLeft: 20, marginRight: 20, marginBottom: 20 }} source={require('../assets/logo.png')} />

            </View>
            {/* <View style={{ flex: 1,  marginTop: 10,alignItems: "center"}}>
                <Text style={{ fontSize: 20, marginLeft: 5, marginRight: 5 }}></Text>
                <Text style={{ fontSize: 20, marginLeft: 5, marginRight: 5 }}>Text2</Text>
            </View> */}


            <View style={{ flexDirection: 'row', marginTop: 20, backgroundColor: '#ffffff', padding: 5 }}>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Image style={{ height: 100, width: 100, marginLeft: 20, marginRight: 20, marginBottom: 20 }} source={require('../assets/favicon.png')} />
                    <Text style={{ marginBottom: 10 }}>Product</Text>
                    
                </View>
                <View style={{ alignItems: "center", marginTop: 10, marginLeft: 20, marginRight: 20 }}>
                    <Text style={{ fontSize: 20, }}>ชื่อสินค้าที่แนะนำ</Text>
                    <Text style={{ fontSize: 15, marginTop: 10, }}>Detail เล็กๆน้อยๆ :D </Text>
                    <TouchableOpacity style={{
                            backgroundColor:"#4E31AA" ,padding:5 ,borderRadius:5
                    }} onPress={chechTextInput}>
                        <Text style={{color:'#ffffff'}}>รายละเอียดสินค้า</Text>

                    </TouchableOpacity>
                    {/* <Button title="" linearGradientProps={{ colors: ['#FF9800', '#F44336'] }} /> */}
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20, backgroundColor: '#ffffff', padding: 5 }}>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Image style={{ height: 100, width: 100, marginLeft: 20, marginRight: 20, marginBottom: 20 }} source={require('../assets/favicon.png')} />
                    <Text style={{ marginBottom: 10 }}>Product</Text>
                   
                </View>
                <View style={{ alignItems: "center", marginTop: 10, marginLeft: 20, marginRight: 20 }}>
                    <Text style={{ fontSize: 20, }}>ชื่อสินค้าที่แนะนำ</Text>
                    <Text style={{ fontSize: 15, marginTop: 10, }}>Detail เล็กๆน้อยๆ</Text>
                    <Button title="รายละเอียดสินค้า" linearGradientProps={{ colors: ['#FF9800', '#F44336'] }} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20, backgroundColor: '#ffffff', padding: 5 }}>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Image style={{ height: 100, width: 100, marginLeft: 20, marginRight: 20, marginBottom: 20 }} source={require('../assets/favicon.png')} />
                    <Text style={{ marginBottom: 10 }}>Product</Text>
                   
                </View>
                <View style={{  marginTop: 10, marginLeft: 20, marginRight: 20 }}>
                    <Text style={{ fontSize: 20, }}>ชื่อสินค้าที่แนะนำ</Text>
                    <Text style={{ fontSize: 15, marginTop: 10, }}>Detail เล็กๆน้อยๆ</Text>
                    <Button title="รายละเอียดสินค้า" linearGradientProps={{ colors: ['#FF9800', '#F44336'] }} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20, backgroundColor: '#ffffff', padding: 5 }}>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Image style={{ height: 100, width: 100, marginLeft: 20, marginRight: 20, marginBottom: 20 }} source={require('../assets/favicon.png')} />
                    <Text style={{ marginBottom: 10 }}>Product</Text>
                </View>
                <View style={{  marginTop: 10, marginLeft:5 ,backgroundColor:'#000000' }}>
                    <Text style={{ fontSize: 20, }}>ชื่อสินค้าที่แนะนำ</Text>
                    <Text style={{ fontSize: 15, marginTop: 10, }}>Detail เล็กๆน้อยๆ</Text>
                    <Button title="รายละเอียดสินค้า" linearGradientProps={{ colors: ['#FF9800', '#F44336'] }} />
                </View>
            </View>
            <View style={{ marginTop: 20 }}></View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
    },
    textInputStyle: {
      width: "100%",
      height: 40,
      paddingHorizontal: 5,
      borderWidth: 0.5,
      marginTop: 15,
    },
  });
export default detail

