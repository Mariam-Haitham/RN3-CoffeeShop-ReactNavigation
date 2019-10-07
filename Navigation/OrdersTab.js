import { createStackNavigator } from "react-navigation-stack";
import React from "react";

import { Icon } from "native-base";

import CoffeeCart from "../Components/CoffeeCart";
import HistoryList from "../Components/OrderHistory";

const OrdersTab = createStackNavigator(
  {
    HistoryScreen: HistoryList,
    CartScreen: CoffeeCart
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
        <Icon
          name="shoppingcart"
          type="AntDesign"
          size={25}
          color={tintColor}
        />
      )
    }
  }
);

export default OrdersTab;
