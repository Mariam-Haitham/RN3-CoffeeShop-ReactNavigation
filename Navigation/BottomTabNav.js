import { createBottomTabNavigator } from "react-navigation-tabs";

import AuthTab from "./AuthTab";
import CoffeeTab from "./CoffeeTab";
import OrdersTab from "./OrdersTab";

const BottomTabNav = createBottomTabNavigator({
  AuthScreen: AuthTab,
  CoffeeScreen: CoffeeTab,
  OrdersScreen: OrdersTab
});

export default BottomTabNav;
