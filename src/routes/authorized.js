import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Search from "../screens/Search";
import UserDetails from "../screens/UserDetails";
import Notification from "../screens/Notification";
import { Bell, House, MagnifyingGlass, User } from "phosphor-react-native";

const { Navigator, Screen } = createBottomTabNavigator();

function AuthorizedRoutes() {
  const tabBarOptions = {
    activeTintColor: "#FFB24C",
    showLabel: false
  };

  function renderTabBarIcon(props, Icon, size) {
    const { color, focused } = props;
    return (
      <Icon size={size} color={color} weight={focused ? "bold" : "regular"} />
    );
  }
  return (
    <Navigator tabBarOptions={tabBarOptions}>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: (props) => renderTabBarIcon(props, House, 28)
        }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: (props) => renderTabBarIcon(props, MagnifyingGlass, 28)
        }}
      />
      <Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: (props) => renderTabBarIcon(props, Bell, 28)
        }}
      />
      <Screen
        name="Profile"
        component={UserDetails}
        options={{
          headerShown: false,
          tabBarIcon: (props) => renderTabBarIcon(props, User, 28)
        }}
      />
    </Navigator>
  );
}

export default AuthorizedRoutes;
