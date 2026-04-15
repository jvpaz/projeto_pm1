import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const ProdutoCardStyleVertical = StyleSheet.create({
  container: {
    marginVertical: 1,
    backgroundColor: 'white',
    borderRadius: 3,
    padding: 10,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 3,
  },

  info: {
    flex: 2,
    marginLeft: 10,
  },

  nome: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  descricao: {
    fontSize: 12,
    marginTop: 4,
  },

  precoCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  preco: {
    flex: 2,
    fontSize: 14,
    textAlign: 'center',
  },

  botaoCart: {
    backgroundColor: "green",
    flex: 1,
    alignItems: 'center',
    padding: 8,
    borderRadius: 3,
    marginTop: 5,
  }
});