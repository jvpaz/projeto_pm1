import { StyleSheet } from "react-native";

export const ProdutoCardStyleVertical = StyleSheet.create({
  container: {
    marginVertical: 1,
    backgroundColor: 'white',
    borderRadius: 3,
    padding: 10
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 3,
  },

  info: {
    marginLeft: 10,
    justifyContent: 'space-between'
  },

  nome: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  descricao: {
    fontSize: 12,
    width: 280,
    marginTop: 4,
  },

  precoCard: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  preco: {
    fontSize: 14,
    textAlign: 'center',
  },

  botaoCart: {
    backgroundColor: "green",
    alignItems: 'center',
    padding: 8,
    paddingHorizontal: 40,
    marginRight: 40,
    borderRadius: 3,
    marginTop: 5,
  }
});