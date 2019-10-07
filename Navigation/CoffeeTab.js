import { createStackNavigator } from "react-navigation-stack";
import React from "react";

import { Icon } from "native-base";

import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";

const CoffeeTab = createStackNavigator(
  {
    ListScreen: CoffeeList,
    DetailScreen: CoffeeDetail
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
        <Icon name="coffee" type="FontAwesome" size={25} color={tintColor} />
      )
    }
  }
);

export default CoffeeTab;
