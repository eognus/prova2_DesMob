import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    imgFilme: {
        width: '200px',
        height: '250px ',
        maxWidth: '40%',
        
    },
    viewCartao: {
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: 'yellow',
        margin: '20px',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-around',
        maxWidth: '90%'
    },
    txtTitulo: {
        fontWeight: 'bold',
        fontSize: '25px'
    },
    btncomprar: {
        border: '1px solid #000',
        borderRadius: '10px',
        color: 'black',
        backgroundColor: 'grey',
        textAlign: 'center',
        maxWidth: '300px',
        width: "80%",
        height: '20px'
    },
    sinopse : {
        
    },
    descricao: {
        flexDirection: 'column',
        width: '60%',
        paddingLeft: '30px',
        alignItems: "center",
        justifyContent: 'space-around',
        height: '80%'
    }
})

export default styles;