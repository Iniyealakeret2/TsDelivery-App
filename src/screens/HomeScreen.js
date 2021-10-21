import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from "react-native";

import { Icon, Button, SocialIcon } from "react-native-elements";

import HomeHeader from "../components/HomeHeader";
import { colors, parameters } from "../global/styles";
import { filterData, restaurantData } from "../global/Data";
import FoodCard from "../components/FoodCard";

const SCREENWIDTH = Dimensions.get("window").width;

function HomeScreen(props) {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState("0");

  return (
    <View style={styles.container}>
      <HomeHeader />

      <ScrollView
        //it starts with the first view it meets and makes it stick
        stickyHeaderIndices={[0]}
        // the vertical line at the right side when scrolling
        showsHorizontalScrollIndicator={true}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 10,
            }}
          >
            {/* DELIVERY BUTTON */}
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}
            >
              <View>
                <Text
                  style={{
                    ...styles.deliveryButton,
                    backgroundColor: delivery
                      ? colors.buttons
                      : colors.cardBackground,
                  }}
                >
                  Delivery
                </Text>
              </View>
            </TouchableOpacity>

            {/* PICK UP BUTTON */}
            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
              }}
            >
              <View>
                <Text
                  style={{
                    ...styles.deliveryButton,
                    backgroundColor: delivery
                      ? colors.cardBackground
                      : colors.buttons,
                  }}
                >
                  Pick Up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* LOCATION STYLE HOLDER */}
        <View style={styles.locationAndFilterView}>
          {/* LOCATION AND TIME CONTAINER VIEW */}
          <View style={styles.locationAndTimeView}>
            {/* LOCATION ICON */}
            <View style={styles.locationIconView}>
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.grey1}
                size={26}
              />
              <Text>No.18 Baybridge Road.</Text>
            </View>

            {/* TIME ICON */}
            <View style={styles.timeIconView}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color={colors.grey1}
                size={26}
              />
              <Text>Now</Text>
            </View>
          </View>

          {/* FILTER ICON */}
          <View>
            <Icon
              type="material-community"
              name="tune"
              color={colors.grey1}
              size={32}
            />
          </View>
        </View>

        <View style={styles.categoryTextView}>
          <Text style={styles.categoryText}>Categories</Text>
        </View>

        {/* SWIPABLE IMAGE VIEW */}
        <View style={{ marginTop: 10 }}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={(item) => item.id}
            extraData={indexCheck}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}
              >
                <View
                  style={
                    indexCheck === item.id
                      ? { ...styles.categoryCardSelected }
                      : { ...styles.categoryCardUnselected }
                  }
                >
                  <Image
                    style={{
                      height: 60,
                      width: 80,
                      borderTopRightRadius: 8,
                      borderTopLeftRadius: 8,
                      marginTop: -30,
                    }}
                    source={item.image}
                  />

                  <Text
                    style={
                      indexCheck === item.id
                        ? { ...styles.categoryCardTextSelected, paddingTop: 10 }
                        : { ...styles.categoryCardTextUnselected }
                    }
                  >
                    {item.name}
                  </Text>
                </View>
              </Pressable>
            )}
          />
        </View>

        <View style={styles.categoryTextView}>
          <Text style={styles.categoryText}>Free delivery now </Text>
        </View>

        {/* RENDERING THE FOODCARD COMPONENT */}
        <View>
          <FlatList
            style={{ marginBottom: 10, marginTop: 10 }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={restaurantData}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <View>
                {/* setting the food card screen width to 80% */}
                <FoodCard
                  screenWidth={SCREENWIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  businessAddress={item.businessAddress}
                  numberOfReview={item.numberofReviews}
                  averageReview={item.averageReview}
                  farAway={item.farAway}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 8,
    paddingVertical: 5,
    height: 35,
  },

  deliveryText: {
    marginLeft: 5,
    fontSize: 20,
  },

  locationAndFilterView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },

  timeIconView: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  locationIconView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },

  locationAndTimeView: {
    flexDirection: "row",
    backgroundColor: colors.grey5,
    paddingVertical: 5,
    borderRadius: 8,
    paddingHorizontal: 15,
  },

  categoryTextView: {
    backgroundColor: colors.grey5,
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },

  categoryText: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.grey2,
  },

  categoryCardUnselected: {
    borderRadius: 10,
    backgroundColor: colors.grey4,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    height: 100,
    margin: 10,
  },

  categoryCardSelected: {
    borderRadius: 10,
    backgroundColor: colors.buttons,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    height: 100,
    margin: 10,
  },

  categoryCardTextSelected: {
    fontWeight: "bold",
    color: colors.cardBackground,
  },
  categoryCardTextUnselected: {
    fontWeight: "bold",
    color: colors.grey1,
    paddingTop: 5,
  },
});

export default HomeScreen;
