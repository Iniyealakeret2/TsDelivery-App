import React from "react";

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  useColorScheme,
} from "react-native";

import { colors, parameters } from "../global/styles";
import { restaurantData } from "../global/Data";
import { Icon, Button, SocialIcon } from "react-native-elements";

function FoodCard({
  onPressFoodCard,
  restaurantName,
  deliveryAvailable,
  discountAvailable,
  discountPercent,
  numberOfReview,
  businessAddress,
  farAway,
  averageReview,
  images,
  screenWidth,
}) {
  return (
    <TouchableOpacity>
      {/* IMAGE  VIEW*/}
      <View style={{ ...styles.cardView, width: screenWidth }}>
        <Image
          style={{ ...styles.cardImage, width: screenWidth }}
          source={{ uri: images }}
        />

        <View style={styles.restaurantName}>
          <Text>{restaurantName}</Text>
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          {/* location and time view */}
          <View>
            <Icon
              type="material-community"
              name="map-marker"
              color={colors.grey1}
              size={18}
              iconStyle={{ marginTop: 3 }}
            />

            <Text styles={styles.restaurantMinute}>{farAway} Min</Text>
          </View>
          {/* Address view */}
          <View style={{ flex: 9, flexDirection: "row" }}>
            <Text style={styles.restaurantAddress}>{businessAddress}</Text>
          </View>
        </View>
      </View>

      {/* REVIEW VIEW */}
      <View style={styles.restaurantReview}>
        <Text style={styles.restaurantAverageReview}>{averageReview}</Text>
        <Text style={{ color: colors.grey5 }}>{numberOfReview} reviews</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderWidth: 1,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderColor: colors.grey4,
  },

  cardImage: { borderTopLeftRadius: 5, borderTopRightRadius: 5, height: 150 },

  restaurantName: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.grey1,
    marginTop: 5,
  },

  restaurantDistance: {
    flex: 4,
    flexDirection: "row",
    borderRightColor: colors.grey4,
    borderRightWidth: 1,
    paddingHorizontal: 5,
  },

  restaurantMinute: {
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 5,
    color: colors.grey3,
  },

  restaurantAddress: {
    fontSize: 12,
    paddingTop: 5,
    color: colors.grey3,
    paddingHorizontal: 10,
  },

  restaurantReview: {
    position: "absolute",
    top: 0,
    right: 10,
    backgroundColor: "rgba(52,52,52,0.3)",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },

  restaurantAverageReview: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -3,
  },
});

export default FoodCard;
