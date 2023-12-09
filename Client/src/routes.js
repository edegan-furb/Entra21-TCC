import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { StyleSheet, View } from "react-native";
import { useState, useEffect, useCallback } from "react";
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from "./constants/Colors"; 

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
        <Tab.Navigator 
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    backgroundColor: GlobalStyles.colors.primary900,
                    height: 80
                }
            }}
        >
            <Tab.Screen 
                name="Home"  
                component={HomeScreen}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                        if(focused) {
                        return <Ionicons 
                            size={25} 
                            name="home-sharp"
                            color={GlobalStyles.colors.neutral50} 
                        />
                        }
                        return <Ionicons size={25} color={GlobalStyles.colors.neutral400} name="home-outline"/>
                    }
                }}  
            />
            <Tab.Screen 
                name="Teams" 
                component={TeamsScreen} 
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                        if(focused) {
                        return <Ionicons 
                            size={25} 
                            name="people"
                            color={GlobalStyles.colors.neutral50} 
                        />
                        }
                        return <Ionicons size={25} color={GlobalStyles.colors.neutral400} name="people-outline"/>
                    }
                }} 
            />
            <Tab.Screen 
                name="Settings" 
                component={SettingsScreen} 
                options={{
                    tabBarShowLabel: false,
                    headerShown: true,
                    tabBarIcon: ({focused}) => {
                        if(focused) {
                        return <Ionicons 
                            size={25} 
                            name="settings"
                            color={GlobalStyles.colors.neutral50} 
                        />
                        }
                        return <Ionicons size={25} color={GlobalStyles.colors.neutral400} name="settings-outline"/>
                    }
                }}
            />
        </Tab.Navigator>
    );
}

export default function Routes() {

    const [isReady, setIsReady] = useState(false);
  
    useEffect(() => {
      async function prepare() {
        try {
          await Font.loadAsync({
            "open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
            "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
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
            <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Start"
                        component={StartScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="LogIn"
                        component={LogInScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUpScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen 
                        name="Tasks" 
                        component={TasksScreen} 
                    />
                    <Stack.Screen
                        name="Tabs"
                        component={TabNavigator}
                        options={{
                            headerShown: false,
                            gestureEnabled: false,
                        }}
                    />
                </Stack.Navigator>
            </View>
        </>
    );
}