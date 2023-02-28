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

const ProductScreen = ({ navigation }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //getData() for get data fron backend
  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://nice-plum-sturgeon-tie.cyclic.app/monitor");
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
          height: 0.5,
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
                    <View style={{height:15, backgroundColor: "#9ECEFF" }}></View>
                    </View>
        <TouchableOpacity
          style={styles.addButtonStyles}
          onPress={() => {
            navigation.navigate("Detail", {
              id: item.brandid,
              title: item.title,
            });
          }}
        >
          <View style={{ flex: 1, backgroundColor: "#ffffff" }}>

            <View style={{ flex: 1, margin: 5, flexDirection: "row" }}>

              <Image
                resizeMethod="cover"
                style={styles.thumbnail}
                source={{ uri: 'https://' + item.picture }}
              />
              <View style={styles.dataContainer}>
                <View style={styles.dataContent}>
                  <Text style={styles.title}>{item.title}</ Text>
                  <Text style={styles.detail}>{item.detail}</Text>
                  <View style={{ alignItems: "center", backgroundColor: "#ECF2FF" }}></View>
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
      <View style={{ marginTop: 20 }}></View>

      <FlatList 
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

export default ProductScreen;

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

    alignItems: 'center',
    padding: 6,
    width: 150,
    height: 150,
  },
  dataContent: {
    alignItems: 'center',
    padding: 55

  },
  title: {
    color: "#3A1078",
    fontSize: 18,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 16,
    color: "#4E31AA",
    fontWeight: "700",
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