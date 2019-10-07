import { createStackNavigator } from "react-navigation-stack";

import CoffeeCart from "../Components/CoffeeCart";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeList from "../Components/CoffeeList";
import HomePage from "../Components/HomePage";
import Login from "../Components/Login";

const MyStackNav = createStackNavigator(
  {
    CartScreen: CoffeeCart,
    DeatilScreen: CoffeeDetail,
    ListScreen: CoffeeList,
    LoginScreen: Login
  },
  {
    initialRouteName: "LoginScreen"
  }
);

export default MyStackNav;
