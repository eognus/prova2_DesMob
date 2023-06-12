import { View, Text, TextInput } from "react-native";
import { Link } from '@react-navigation/native';
import styles from "./style";


export default function Login(){
    return(
        <View style={styles.container}>
            <View style={styles.caixa}>
                <Text style={styles.txt}>Email ou nome de usuário: </Text>
                <TextInput placeholder="Email ou usuario"/>
            </View>

            <View style={styles.caixa}>
                <Text style={styles.txt}> Senha:</Text>
                <TextInput placeholder="Senha"/>
            </View>

            <Link style={styles.forgot} to={{ screen: 'ForgotPassword'}}> Esqueceu a senha?</Link>
            <Text style={styles.btnClick}> Submit </Text>

           
        </View>
    )
}