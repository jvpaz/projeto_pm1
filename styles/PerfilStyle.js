import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

export const PerfilStyle = StyleSheet.create({

    perfilContainer:{
        flex: 1,
        width: width,
        height: height
    },

    perfilCard: {
        flex: 2,
        backgroundColor: 'black',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: 30,
    },

    perfilInfo: 
    {
        flexDirection: 'column',
        fontSize: 18,
        padding: 20
    },

    perfilInfoText: 
    {
        textAlign: 'center',
        color: 'white',
        fontSize: 15
    },

    perfilBotoes:
    {
        flex: 6,
    },

    image:{
        width: 100,
        height: 100,
        borderRadius: 100
    },

    button:
    {
        fontSize: 12,
        marginTop: 2,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 3,
        flexDirection: 'row',
    },

    buttonText:
    {
        paddingLeft: 20,
        fontSize: 19,
        fontWeight: 'bold'
    }


})