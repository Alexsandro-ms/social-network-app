import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const { Screen, Navigator } = createBottomTabNavigator();

import SignInPage from "../screens/SignIn";
import SignUpPage from "../screens/SignUp";
import { SignIn } from "phosphor-react-native";

function UnauthorizedRoutes() {
  return (
    <Navigator>
      <Screen
        name="SignIn"
        component={SignInPage}
        options={{
          headerShown: false,
          tabBarStyle: {
            display: "none"
          },
          tabBarButton: () => null
        }}
      />
      <Screen
        name="SignUp"
        component={SignUpPage}
        options={{
          headerShown: false,
          tabBarStyle: {
            display: "none"
          },
          tabBarButton: () => null
        }}
      />
    </Navigator>
  );
}

export default UnauthorizedRoutes;
