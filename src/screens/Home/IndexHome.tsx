import {StyleSheet, Text, View} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {TIndexHome} from "../../Types/StackScreens";

type ChooseHomeScreen = StackNavigationProp<TIndexHome, "IndexHomeKey">;

type Props = {
    navigation: ChooseHomeScreen;
};

const IndexHomes: React.FC<Props> = ({navigation}) => {
    return <View>
        <Text>Home</Text>
    </View>;
};

export default IndexHomes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#161616",
    },
});
