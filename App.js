import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import TransactionScreen from "./screens/WriteStoryScreen.js";
import SearchScreen from "./screens/ReadStoryScreen.js";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const tabNavigator = createBottomTabNavigator({
  Transaction: { screen: TransactionScreen },
  Search: { screen: SearchScreen },
});

const AppContainer = createAppContainer(tabNavigator);
