import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import AboutScreen from "../screens/About";
import ScheduleScreen from "../screens/Schedule";
import SessionScreen from "../screens/Session";
import FavesScreen from "../screens/Faves";

const AboutStack = createStackNavigator({
  About: AboutScreen
});

const ScheduleStack = createStackNavigator({
  Schedule: ScheduleScreen,
  Session: SessionScreen
});

const FavesStack = createStackNavigator({
  Faves: FavesScreen,
  Session: SessionScreen
});

export default createBottomTabNavigator(
  {
    About: AboutStack,
    Schedule: ScheduleStack,
    Faves: FavesStack
  },
  {
    tabBarOptions: {
      activeTintColor: "ffffff",
      inactiveTintColor: "medium grey",
      labelStyle: {
        fontSize: 10
      },
      style: {
        backgroundColor: "black"
      }
    }
  }
);
