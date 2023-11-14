import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { View } from "react-native";
import { useState, useEffect, useCallback } from "react";

import HomeScreen from "./screens/HomeScreen";
import TeamsScreen from "./screens/TeamsScreen";
import TasksScreen from "./screens/TasksScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StartScreen from "./screens/StartScreen";
import LogInScreen from "./screens/LogInScreen";
import SignUpScreen from "./screens/SignUpScreen";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Teams" component={TeamsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
          "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Start"
              component={StartScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="LogIn" component={LogInScreen} />
            <Stack.Screen 
              name="SignUp" 
              component={SignUpScreen} 
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Tasks" component={TasksScreen} />
            <Stack.Screen
              name="Tabs"
              component={TabNavigator}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}
