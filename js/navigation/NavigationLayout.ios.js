import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { sharedNavigationOptions } from "./config";
import Ionicons from "react-native-vector-icons/Ionicons";
import AboutScreen from "../screens/About";
import MapScreen from "../screens/Map";
import ScheduleScreen from "../screens/Schedule";
import SessionScreen from "../screens/Session";
import FavesScreen from "../screens/Faves";
import theme from "../config/styles";

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const MapStack = createStackNavigator(
  {
    Map: MapScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: SessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const FavesStack = createStackNavigator(
  {
    Faves: FavesScreen,
    Session: SessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack
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
        } else if (routeName === "Map") {
          iconName = `ios-map`;
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: theme.colors.lightGrey,
      inactiveTintColor: theme.colors.mediumGrey,
      labelStyle: {
        fontSize: theme.fonts.fontSize * 0.9
      },
      style: {
        backgroundColor: "black"
      }
    }
  }
);
