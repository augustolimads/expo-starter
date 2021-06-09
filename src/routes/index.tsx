import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Main } from "../screens/Main";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={Main} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
