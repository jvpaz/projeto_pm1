import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
        container: {
            flex: 1, alignItems: 'center', justifyContent: 'center',
        },
        textoDestaque: {
            fontWeight: 'bold',
            fontSize: 14,
            marginTop: 10
        },
        normal:
        {
            padding: 10,
              borderRadius: 8,
              marginBottom: 10
        },
        botaoPressionado:
        {
            opacity: 0.6
        },
        botaoVolume:
        {
            position: 'absolute',
            top: 1,
            right: 20,
            width: 50,
            height: 50,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
        }
    }
)