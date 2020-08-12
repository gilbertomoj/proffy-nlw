import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        padding: 40,
        backgroundColor: '#8257e5'
    },
    topBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    title : {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40,
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
})

export default styles;
