import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    Image,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { Button } from "react-native-web";


const detail = ({ navigation }) => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //getData() for get data fron backend
    const getData = async () => {
        try {
            setLoading(true);
            const res = await axios.get("https://nice-plum-sturgeon-tie.cyclic.app/monitor/repro/1");
            // alert(JSON.stringify(res.data.data));
            setProduct(res.data.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    if (error) {
        return (
            <View style={styles.container}>
                <Text>{error.message}</Text>
                <Text>เกิดข้อผิดพลาด ไม่สามารถติดต่อกับ Server ได้</Text>
            </View>
        );
    }

    // useEffect(() => {
    //   getData();
    // }, []);

    useFocusEffect(
        useCallback(() => {
            getData();
        }, [])
    );

    if (loading === true) {
        return (
            <View>
                <ActivityIndicator color={"#ECF2FF"} size="large" />
            </View>
        );
    }
    const _onRefresh = () => {
        getData();
    };
    const itemSeperatorView = () => {
        return (
            <View
                style={{
                    height: 10,
                    width: "100%",
                    backgroundColor: "#ECF2FF",
                }}
            />
        );
    };

    const _renderItem = ({ item }) => {
        return (
            <SafeAreaView>

                <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
                    <View style={{ height: 15, backgroundColor: "#ffffff" }}></View>
                    <View style={{ flex: 1, margin: 10, flexDirection: "column" }}>

                        <Image
                            resizeMethod="cover"
                            style={styles.thumbnail}
                            source={{ uri: 'https://' + item.picture }}
                        />
                        <View style={styles.dataContainer}>
                            <View style={{ margin: 10, alignContent: 'center', }}>
                                <Text style={styles.title}>{item.model}</ Text>
                                <Text style={styles.blank}></Text>
                                <Text style={styles.detail1}>  {item.detail} B.</Text>
                                <Text style={styles.blank}></Text>
                                <Text style={styles.detail2}>Price {item.price} B.</Text>
                                <Text style={styles.blank}></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>

        );
    };
    

    return (
        <View>
            <View style={{ marginTop: 20 }}></View>
            <View style={{ alignItems: "center", backgroundColor: "#ffffff" }}>
                <Image style={{ height: 150, width: 150, marginLeft: 20, marginRight: 20, marginBottom: 20 }} source={require('../assets/logo.png')} />
            </View>
           

            <FlatList style={{ marginTop: 10 }}
                data={product}
                keyExtractor={(item, index) => item.id.toString()}
                ItemSeparatorComponent={itemSeperatorView}
                renderItem={_renderItem}
                refreshing={loading}
                onRefresh={_onRefresh}
            />

        </View>
    );
};

export default detail;

const styles = StyleSheet.create({

    container: {
        height: 150,
        elevation: 3,
        borderColor: "#ECF2FF",
        borderRadius: 5,
        flexDirection: "row",
        marginHorizontal: 20,
    },
    dataContainer: {
        flex: 1,
    },
    thumbnail: {
        width: 350,
        height: 250,
    },
    dataContent: {
        alignItems: 'center',
        padding: 55

    },
    title: {
        color: "#3A1078",
        fontSize: 18,
        fontWeight: "bold",
        alignContent: "center"
    },
    detail: {
        fontSize: 16,
        color: "#4E31AA",
        fontWeight: "500",
    },
    detail1: {
        flex: 1,
        fontSize: 16,
        color: "#808080",
        fontWeight: "500",
    },
    detail2: {
        fontSize: 16,
        color: "#808080",
        fontWeight: "500",
        textAlign: 'right'
    },
    blank: {
        padding: 5
    }
});