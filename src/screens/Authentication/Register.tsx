import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {StackNavigationProp} from "@react-navigation/stack";
import {TLogin} from "../../Types/StackScreens";
import {Firebase_Auth} from "./FirebaseConfig";
import {createUserWithEmailAndPassword} from "firebase/auth"

type ChooseFavoritesScreen = StackNavigationProp<
    TLogin,
    "LoginKey"
>;

type Props = {
    navigation: ChooseFavoritesScreen;
};

const Register: React.FC<Props> = ({navigation}) => {
    const [userCredentials, setUserCredentials] = useState({
        firstname: '',
        lastname: '',
        email: '',
        birthdate: '',
        phoneNumber: '',
        gender: '',
        password: '',
        confirmPassword: ''
    });
    const auth = Firebase_Auth;

    const handleInputChange = (name: string, value: string) => {
        setUserCredentials({
            ...userCredentials,
            [name]: value
        });
    };

    const navigateToLoginScreen = () => {
        navigation.goBack()
    };

    const createAccount = async () => {
        console.log(userCredentials)
        if (userCredentials.password !== userCredentials.confirmPassword) {
            alert("Passwörter stimmen nicht überein")
        } else {
            const response = await createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    console.log("Account erfolgreicht erstellt")
                    navigateToLoginScreen()
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("Fehler beim erstellen: " + errorMessage + ": " + errorCode)
                    // ..
                });

        }
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <LinearGradient
                colors={['#cd1f12', 'transparent']}
                style={styles.background}
            />
            <View style={styles.header}>
                <Text style={styles.title}>Restaurant Reservations</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.welcomeText}>Registrieren</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TextInput
                        style={[styles.input, {width: '48%'}]}
                        placeholder="Vorname"
                        placeholderTextColor="#666"
                        keyboardType="default"
                        autoCapitalize="none"
                        value={userCredentials.firstname}
                        onChangeText={(text) => handleInputChange('firstname', text)}
                    />
                    <TextInput
                        style={[styles.input, {width: '48%'}]}
                        placeholder="Nachname"
                        placeholderTextColor="#666"
                        keyboardType="default"
                        autoCapitalize="none"
                        value={userCredentials.lastname}
                        onChangeText={(text) => handleInputChange('lastname', text)}
                    />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="E-Mail Adresse"
                    placeholderTextColor="#666"
                    keyboardType="default"
                    autoCapitalize="none"
                    value={userCredentials.email}
                    onChangeText={(text) => handleInputChange('email', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Geburtsdatum"
                    placeholderTextColor="#666"
                    keyboardType="default"
                    autoCapitalize="none"
                    value={userCredentials.birthdate}
                    onChangeText={(text) => handleInputChange('birthdate', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Telefonnummer"
                    placeholderTextColor="#666"
                    keyboardType="default"
                    autoCapitalize="none"
                    value={userCredentials.phoneNumber}
                    onChangeText={(text) => handleInputChange('phoneNumber', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Geschlecht"
                    placeholderTextColor="#666"
                    keyboardType="default"
                    autoCapitalize="none"
                    value={userCredentials.gender}
                    onChangeText={(text) => handleInputChange('gender', text)}
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
                <TextInput
                    style={styles.input}
                    placeholder="Password bestätigen"
                    placeholderTextColor="#666"
                    secureTextEntry
                    autoCapitalize="none"
                    value={userCredentials.confirmPassword}
                    onChangeText={(text) => handleInputChange('confirmPassword', text)}
                />
                <TouchableOpacity style={styles.button} onPress={createAccount}>
                    <Text style={styles.buttonText}>Account erstellen</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Register

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
