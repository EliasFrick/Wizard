import {View, StyleSheet, Image, Animated} from "react-native";
export default function LoadingScreen() {
    return(
        <View style={[{flex: 1}]}>
            <Image
                source={require('../../../assets/LoadingScreen.jpg')}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
});
