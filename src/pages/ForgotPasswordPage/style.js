import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        marginVertical: '10%',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: '20px',
        marginHorizontal: '30%',
        border: '2px solid grey',
        width: '500px',
        minHeight: '40%',
        padding: '10px'
    },

    txt: {
        fontWeight: 'bold'
    },
    caixa:{
        marginLeft: '100px',
        marginVertical: '15px'
    },
    btnClick:{
        borderRadius: '10px',
        borderWidth: '2px',
        textDecorationLine: "none",
        marginHorizontal: '20px',
        maxHeight: '80%',
        height: '30px',
        width: '40%',
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: 'red'
    }
    
})

export default styles;