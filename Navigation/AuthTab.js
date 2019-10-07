import { createStackNavigator } from "react-navigation-stack";
import React from "react";

import { Icon } from "native-base";

import Login from "../Components/Login";
import UsersList from "../Components/Profile";

const AuthTab = createStackNavigator(
  {
    LoginScreen: Login,
    ProfileScreen: UsersList
  },
  {
    navigationOptions: {
      tabBarOptions: {
        showLabel: false,
        activeBackgroundColor: "#b8cdd0",
        inactiveBackgroundColor: "white",
        style: {
          backgroundColor: "rgb(20,90,100)"
        }
      },
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user" type="AntDesign" size={25} color={tintColor} />
      )
    }
  }
);

export default AuthTab;
