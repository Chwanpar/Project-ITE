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
import axios from "axios";
import react from "react";

const DetailScreen = ({ route, navigation }) => {
    const { id, title } = route.params;

    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //getData() for get data fron backend
    const getData = async (id) => {
        try {
            setLoading(true);
            const res = await axios.get(
                "https://nice-plum-sturgeon-tie.cyclic.app/monitor/getDproduct/" + id
            )

            // alert(JSON.stringify(res.data.data));
            setDetail(res.data.data);
            setLoading(false);

        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    useEffect(() => {
        getData(id);
    }, [id]);

    react.useLayoutEffect(() => {
        navigation.setOptions({
            title: "Detail ", //set แบบ Static
            // title: title, //set แบบ Dynmic
        });
    }, [navigation, title]);

    if (loading === true) {
        return (
            <View>
                <ActivityIndicator color={"#9C9EFE"} size="large" />
            </View>
        );
    }

    const _onRefresh = () => {
        getData(id);
    };
    const itemSeperatorView = () => {
        return (
            <View
                style={{
                    height: 0.5,
                    width: "100%",
                    backgroundColor: "#C8C8C8",
                }}
            />
        );
    };

    const _renderItem = ({ item, index }) => {
        return (

            <SafeAreaView>
                <TouchableOpacity
                    style={styles.addButtonStyles}
                    onPress={() => {
                        navigation.navigate("ProductDetail", {
                            id: item.model,
                            title: item.title,
                        });
                    }}
                >

                    <View style={{ backgroundColor: "#ffffff" }}>
                        <View style={{ margin: 10 }}>
                            <Image
                                resizeMethod="cover"
                                style={styles.thumbnail}
                                source={{ uri: 'https://' + item.picture }}
                            />
                        </View>
                        <View style={styles.dataContainer}>
                            <View style={{ margin: 10, alignContent: 'center', }}>
                                <Text style={styles.title}>{item.model}</ Text>
                                <Text style={styles.blank}></Text>
                                <Text style={styles.detail1}>  {item.detail} B.</Text>
                                <Text style={styles.blank}></Text>
                                <Text style={styles.blank}></Text>
                                <Text style={styles.detail2}>Quantity {item.quantity}</Text>
                                
                                <Text style={styles.detail2}>Price {item.price} B.</Text>
                                <Text style={styles.blank}></Text>
                            </View>
                        </View>
                    </View>

                </TouchableOpacity>
            </SafeAreaView>

        );
    };

    return (
        <View>
            <View style={{ marginTop: 20 }}></View>
            <View style={{ alignItems: "center", backgroundColor: "#ffffff" }}></View>
            <FlatList
                data={detail}
                keyExtractor={(item, index) => item.id.toString()}
                ItemSeparatorComponent={itemSeperatorView}
                renderItem={_renderItem}
                refreshing={loading}
                onRefresh={_onRefresh}
            />
        </View>
    );
};
export default DetailScreen;


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