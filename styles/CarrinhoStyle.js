import { StyleSheet } from "react-native";


export const CarrinhoStyle = StyleSheet.create({
    image: {
        opacity: 0.8,
        width: 500,
        height: 200,
        marginBottom: 10,
        borderRadius: 10
    },
    carrinhoCard: {
        flex: 1
    },
    checkoutCard: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        height: 80,
        justifyContent: "space-evenly",
        alignItems: 'center',
        paddingLeft: 10
    },

    checkoutTotal: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'center',
        flex: 2
    },

    checkoutButton: {
        flexDirection: 'row',
        backgroundColor: 'black',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flex: 2
    },

    checkoutButtonText: {
        color: 'white',
        fontWeight: 'bold',
}
});