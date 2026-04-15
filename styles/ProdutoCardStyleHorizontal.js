import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const ProdutoCardStyleHorizontal = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginRight: 10, 
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    width: width * 0.35,
  },

  card: {
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },

  info: {
    marginTop: 8,
    width: '100%',
  },

  nome: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  preco: {
    fontSize: 11,
    marginTop: 4,
  },
});