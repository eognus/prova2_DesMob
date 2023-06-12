import { View, Text, TextInput } from "react-native";
import styles from "./style";


export default function Cadastro(){
    return(
        <View style={styles.container}>
            <View style={styles.caixa}>
                <Text style={styles.txt}>Escolha o seu nome de usuário: </Text>
                <TextInput placeholder="Usuário"/>
            </View>

            <View style={styles.caixa}>
                <Text style={styles.txt}> Email:</Text>
                <TextInput placeholder="Email"/>
            </View>

            <View style={styles.caixa}>
                <Text style={styles.txt}> Senha: </Text>
                <TextInput placeholder="Senha" />
            </View>
            <Text style={styles.btnClick}> Submit </Text>

           
        </View>
    )
}