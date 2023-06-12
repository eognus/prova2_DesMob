import { ScrollView, ActivityIndicator, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Link } from '@react-navigation/native';
import { useEffect, useState } from "react";
import styles from "./style";
import CartaoFilme from "../../components/Cartao";

export default function Dashboard(){

    let [ filmes, setFilmes ] = useState([]);

    useEffect(function(){
      fetch('https://api.otaviolube.com/api/filmes?populate=*').then( resultado => resultado.json()
       ).then( objeto => {setFilmes(objeto.data); console.log(objeto)})
    }, [])


    return(
        
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
              <Link style={styles.btnClick} to={{ screen: 'Login'}}> Login </Link>
              <Link style={styles.btnClick} to={{ screen: 'Cadastro'}}> Cadastro </Link>
            </View>
      {filmes.length > 0 ?
      filmes.map(filme =><CartaoFilme key={filme.id} filme={filme.attributes} />) 

      : <ActivityIndicator size={'large'} />}

      <StatusBar style="auto" />
    </ScrollView>
    )
}