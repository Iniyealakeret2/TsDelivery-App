import React from "react";

import { View, StyleSheet, Text } from "react-native";

import { Icon, withBadge } from "react-native-elements";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors, parameters } from "../global/styles";

function HomeHeader(props) {
  // nofication badge Icon component created here
  const BadgeIcon = withBadge(0)(Icon);

  return (
    // CART MENU
    <View style={styles.header}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 15,
        }}
      >
        <Icon
          type="material-community"
          name="menu"
          color={colors.cardBackground}
          size={32}
        />
      </View>

      {/* CART TITLE */}
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            color: colors.cardBackground,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          TsDelivery
        </Text>
      </View>

      {/* CART ICON */}
      <View style={{ justifyContent: "center", marginRight: 15 }}>
        <BadgeIcon
          type="material-community"
          name="cart"
          color={colors.cardBackground}
          size={35}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: parameters.headerHeight,
    backgroundColor: colors.buttons,
  },
});

export default HomeHeader;
