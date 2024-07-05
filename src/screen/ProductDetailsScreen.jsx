import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";

// icons

import { fontSize, iconSize, spacing } from "../constants/dimensions";
import Header from "../components/Header";
import ProductCarousel from "../components/ProductCarousel";
import { colors } from "../constants/colors";

// icon
import AntDesign from "react-native-vector-icons/AntDesign";
import { fontFamily } from "../constants/fonts";

const colorsData = [
  {
    colorName: "Silver",
    colorValue: "#F0F2F2",
  },
  {
    colorName: "Bright Orange",
    colorValue: "#F25745",
  },
  {
    colorName: "Starlight",
    colorValue: "#FAF6F2",
  },
];

const ProductDetailsScreen = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedTab, setSelectedTab] = useState("Details");
  const item = useRoute().params.item;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <Header />
        <ProductCarousel images={item.images} />

        {/* contnet stuff */}
        <View style={styles.titleContainer}>
          {/* title wrapper */}
          <View style={styles.titleWrapper}>
            <Text style={styles.productTitle}>{item.name}</Text>
            <Text style={styles.brand}>{item.brand}</Text>
          </View>

          {/* rating wrapper */}
          <View style={styles.ratingWrapper}>
            <AntDesign name={"star"} color={colors.yellow} size={iconSize.sm} />
            <Text style={styles.ratingValue}>4.5</Text>
          </View>
        </View>

        {/* color contaienr */}
        <View style={styles.colorContainer}>
          <Text style={styles.colorHeading}>Colors</Text>
          {/* inside this view we gonna rendr all the colors card */}
          <FlatList
            data={colorsData}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.selectColorContainer,
                  item.colorValue === selectedColor && {
                    borderColor: colors.purple,
                  },
                ]}
                onPress={() => {
                  setSelectedColor(item.colorValue);
                }}
              >
                <View
                  style={[
                    styles.circleColor,
                    {
                      backgroundColor: item.colorValue,
                    },
                  ]}
                />
                <Text style={styles.colorText}>{item.colorName}</Text>
              </TouchableOpacity>
            )}
            horizontal
            ItemSeparatorComponent={() => (
              <View
                style={{
                  width: spacing.sm,
                }}
              />
            )}
          />
        </View>

        {/* details and review  */}
        <View style={styles.detailsReviewTabs}>
          <TouchableOpacity
            onPress={() => {
              setSelectedTab("Details");
            }}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab == "Details" && { color: colors.purple },
              ]}
            >
              Details
            </Text>
            {selectedTab === "Details" && <View style={styles.underline} />}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedTab("Review");
            }}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === "Review" && { color: colors.purple },
              ]}
            >
              Review
            </Text>
            {selectedTab === "Review" && <View style={styles.underline} />}
          </TouchableOpacity>
        </View>

        <Text style={styles.detailsContent}>
          {selectedTab === "Details" ? item.details : item.review}
        </Text>
      </ScrollView>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  scrollViewContainer: {
    padding: spacing.md,
  },
  titleContainer: {
    flexDirection: "row",
  },
  titleWrapper: {
    flex: 1,
  },
  productTitle: {
    fontFamily: fontFamily.Bold,
    color: colors.black,
    fontSize: fontSize.lg,
  },
  brand: {
    fontFamily: fontFamily.Medium,
    color: colors.gray,
    fontSize: fontSize.sm,
    paddingVertical: spacing.sm,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.lavendar,
    borderRadius: spacing.md,
    padding: spacing.sm,
    height: 50,
    marginTop: spacing.md,
  },
  ratingValue: {
    color: colors.gray,
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.md,
  },
  colorContainer: {
    paddingTop: spacing.md,
  },
  colorHeading: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.SemiBold,
    color: colors.black,
    paddingBottom: spacing.md,
  },
  selectColorContainer: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 4,
    padding: spacing.sm,
    flexDirection: "row",
    gap: spacing.sm,
    justifyContent: "center",
    alignItems: "center",
  },
  circleColor: {
    height: spacing.md,
    width: spacing.md,
    backgroundColor: colors.purple,
    borderRadius: spacing.md / 2,
  },
  colorText: {
    fontSize: fontSize.sm,
    fontFamily: fontFamily.Medium,
    color: colors.black,
  },
  detailsReviewTabs: {
    flexDirection: "row",
    paddingTop: spacing.lg,
    gap: spacing.lg,
  },
  tabText: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.Medium,
    color: colors.gray,
  },
  underline: {
    borderBottomColor: colors.purple,
    borderBottomWidth: 2,
    width: "50%",
    marginTop: spacing.xs,
  },
  detailsContent: {
    color: colors.gray,
    fontFamily: fontFamily.Regular,
    fontSize: fontSize.md,
    paddingVertical: spacing.xs,
    paddingBottom: 200,
  },
});
