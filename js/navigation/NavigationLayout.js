import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
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
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Schedule") {
          iconName = `ios-calendar`;
        } else if (routeName === "Faves") {
          iconName = `ios-heart`;
        } else if (routeName === "About") {
          iconName = `ios-information-circle`;
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "medium grey",
      labelStyle: {
        fontStyle: "Montserrat",
        fontSize: 10
      },
      style: {
        backgroundColor: "black"
      }
    }
  }
);
