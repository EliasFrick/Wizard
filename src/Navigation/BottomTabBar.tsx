import React, {useState} from "react";
import {useWindowDimensions} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Homescreen from "./ChooseStackScreen";

const Tab = createBottomTabNavigator();

const BottomTabBar: React.FC = () => {
    const [admin, setAdmin] = useState(false);

    const {height, width, scale, fontScale} = useWindowDimensions();

    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerTitleAlign: "center",
                headerShadowVisible: true,
                tabBarIcon: ({focused, color, size}) => {
                    let iconName: string;
                    if (route.name === "Home") {
                        size = focused ? 35 : 25;
                        return <Ionicons name={"home-sharp"} size={size} color={color}/>;
                    } else if (route.name === "Reservierungen") {
                        size = focused ? 35 : 25;
                        return (
                            <Ionicons name={"calendar-sharp"} size={size} color={color}/>
                        );
                    } else if (route.name === "Favoriten") {
                        size = focused ? 35 : 25;
                        return <Ionicons name={"heart"} size={size} color={color}/>;
                    } else if (route.name === "Guthaben") {
                        size = focused ? 35 : 25;
                        return <Ionicons name={"cash-sharp"} size={size} color={color}/>;
                    } else if (route.name === "Profil") {
                        size = focused ? 35 : 25;
                        return <Ionicons name={"person"} size={size} color={color}/>;
                    }
                },
                tabBarInactiveBackgroundColor: "#161616",
                tabBarActiveBackgroundColor: "#161616",
                tabBarActiveTintColor: "red",
                headerTintColor: "white",
                tabBarLabel: "",
                tabBarLabelStyle: {
                    color: "green",
                },
                headerStyle: {
                    backgroundColor: "#161616",
                },
                tabBarStyle: {
                    backgroundColor: "#161616",
                },
            })}
        >
            <Tab.Screen name="Home" component={Homescreen}/>
        </Tab.Navigator>
    );
};

export default BottomTabBar;
