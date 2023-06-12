import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      justifyContent:'center',
      alignItems: 'center'
    },
    header:{
        backgroundColor: 'white',
        width: '100%',
        height: '50px',
        maxHeight: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: '5px'
    },
    btnClick:{
        borderRadius: '10px',
        borderWidth: '2px',
        textDecorationLine: "none",
        marginHorizontal: '20px',
        maxHeight: '80%',
        height: '30px',
        width: '10%',
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: 'red'
    }
  });

  export default styles;
