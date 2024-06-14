import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useEffect, useState} from "react";
import BottomTabBar from "../../Navigation/BottomTabBar";
import Login from "./Login";
import {AuthenticationScreen} from "../../Navigation/ChooseStackScreen";
import {useMyLoginContext} from "../../Provider/LoginProvider";
import {Firebase_App} from "./FirebaseConfig";
import LoadingScreen from "./LoadingScreen";
export default function CheckLogin() {
    // const [loggedIn, setLoggedIn] = useState(false)
    const {loggedIn, email, username, setLoggedIn, setUsername, setEmail} = useMyLoginContext();
    const [checkedLogin, setCheckedLogin] = useState(false);
    const [loading, setLoading] = useState(true); // Zustandsvariable für Ladezustand hinzugefügt

    useEffect(() => {
        Firebase_App.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log('user: ' + JSON.stringify(user))
                setLoggedIn(true);
            }
            console.log('Test: ' + JSON.stringify(user))
            setCheckedLogin(true);
            setLoading(false);
        });
    }, []);


    // if (loggedIn) {
    //     return <BottomTabBar />;
    // } else {
    //     return <LoadingScreen />;

    if (loading) {
        return <LoadingScreen />;
    } else if (loggedIn) {
        return <BottomTabBar />;
    } else if (!loggedIn) {
        return <AuthenticationScreen  />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
