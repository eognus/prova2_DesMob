import { View, Text, TextInput } from "react-native";
import styles from "./style";


export default function ForgotPassword(){
    return(
        <View style={styles.container}>
            <View style={styles.caixa}>
                <Text style={styles.txt}>Digite seu email: </Text>
                <TextInput placeholder="Email"/>
            </View>
            <Text style={styles.btnClick}> Submit </Text>
        </View>
    )
}