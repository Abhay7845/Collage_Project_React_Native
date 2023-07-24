import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import TabNavigator from "../../Common/TabNavigator";

const More = () => {
  return (
    <View>
      <ScrollView>
        <Text>More</Text>
        <Text>More</Text>
        <Text>More</Text>
        <Text>More</Text>
        <Text>More</Text>
        <Text>More</Text>
        <Text>More</Text>
      </ScrollView>
      <TabNavigator />
    </View>
  );
};

export default More;

const styles = StyleSheet.create({});
