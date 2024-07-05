import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

// icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../constants/colors";
import { fontSize, iconSize, spacing } from "../constants/dimensions";
import { fontFamily } from "../constants/fonts";
const CartButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        colors={["#8743FF", "#4136F1"]}
        start={{
          x: 0,
          y: 0.5,
        }}
        end={{
          x: 1,
          y: 0,
        }}
        style={styles.addToCartButton}
      >
        <MaterialCommunityIcons
          name={"cart-outline"}
          color={colors.background}
          size={iconSize.md}
        />
        <Text style={styles.addToCartText}>Add to Cart | $349.99</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: spacing.md,
  },
  addToCartButton: {
    width: "90%",
    padding: spacing.md,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: spacing.md,
    gap: spacing.sm,
  },
  addToCartText: {
    color: colors.background,
    fontFamily: fontFamily.Bold,
    fontSize: fontSize.md,
  },
});
