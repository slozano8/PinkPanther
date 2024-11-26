import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import Home from "./pages/Home";
import MovieList from "./pages/MovieList";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === "android" && (
        <Drawer.Navigator screenOptions={{headerShown: false}}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Latest Movies" component={MovieList} />
        </Drawer.Navigator>
      )}
      {Platform.OS == "ios" && (
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Latest Movies" component={MovieList} />
        </Tab.Navigator>
      )}
      {/* This is for testing, I build using web browser */}
      {Platform.OS == "web" && (
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Latest Movies" component={MovieList} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
