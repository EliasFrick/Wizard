import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {StackNavigationProp} from "@react-navigation/stack";
import {TLogin} from "../../Types/StackScreens";
import {signInWithEmailAndPassword} from "firebase/auth"
import {Firebase_Auth} from "./FirebaseConfig";
import {useMyLoginContext} from "../../Provider/LoginProvider";
import CheckLogin from "./CheckLogin";

type ChooseFavoritesScreen = StackNavigationProp<
    TLogin,
    "LoginKey"
>;

type Props = {
    navigation: ChooseFavoritesScreen;
};


const Login: React.FC<Props> = ({navigation}) => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: '',
    });
    const {loggedIn, email, username, setLoggedIn, setUsername, setEmail} = useMyLoginContext();

    const auth = Firebase_Auth;

    const handleInputChange = (name: string, value: string) => {
        setUserCredentials({
            ...userCredentials,
            [name]: value
        });
    };

    const navigateToPushInput = () => {
        navigation.navigate("RegisterStack");
    };

    const navigateToHomeScreen = () => {
        navigation.navigate("BottomStack");
    }

    const TryLogin = async () => {
        signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("Account gefunden")
                setLoggedIn(true)
                return <CheckLogin/>
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("Fehler")
            });
    }


    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <LinearGradient
                colors={['#cd1f12', 'transparent']}
                style={styles.background}
            />
            <View style={styles.header}>
                <Text style={styles.title}>Wizard</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.welcomeText}>Welcome Back</Text>
                <Text style={styles.signInText}>Sign in to continue</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    placeholderTextColor="#666"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={userCredentials.email}
                    onChangeText={(text) => handleInputChange('email', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#666"
                    secureTextEntry
                    autoCapitalize="none"
                    value={userCredentials.password}
                    onChangeText={(text) => handleInputChange('password', text)}
                />
                <TouchableOpacity style={styles.button} onPress={TryLogin}>
                    <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
                {/*<TouchableOpacity onPress={navigateToPushInput}>*/}
                {/*    <Text style={styles.createAccountText}>Create Account</Text>*/}
                {/*</TouchableOpacity>*/}
            </View>
        </View>
    );
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 50,
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#fff',
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
    },
    inputContainer: {
        width: '80%',
    },
    welcomeText: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 8,
    },
    signInText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#2d2d2d',
        padding: 15,
        borderRadius: 8,
        color: '#fff',
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#cd1f12',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    createAccountText: {
        color: '#fff',
        textAlign: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '110%',
    },
});
