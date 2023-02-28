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
  const getData = async (brandid) => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://nice-plum-sturgeon-tie.cyclic.app/monitor/product/" + brandid
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
      title: "รายละเอียดสินค้าของ " + title, //set แบบ Static
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
              id: item.id,
              title: item.title,
            });
          }}
        >

          <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <View style={{ margin: 10 }}>
              <Image
                resizeMethod="cover"
                style={styles.thumbnail}
                source={{ uri: 'https://' + item.picture }}
              />
            </View>
            <View style={{ flex: 1, margin: 5, flexDirection: "column" }}>
              <View style={styles.dataContainer}>
                <View style={styles.dataContent}>
                  <Text style={styles.title}>{item.model}</Text>
                  {/* <Text>{item.detail}</Text> */}
                </View>
              </View>
            </View>
          </View>

        </TouchableOpacity>
      </SafeAreaView>

    );
  };

  return (
    <View>
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
    height: 80,
    elevation: 3,
    borderColor: "gray",
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
    marginTop: 5,
    marginLeft: 15,
  },
  title: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 16,
    color: "#888",
    fontWeight: "700",
  },
});