import { StyleSheet } from "react-native";

export const ModalStyle = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    gap: 10,
  },
  imagem: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descricao: {
    fontSize: 14,
    color: '#666',
  },
  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  botaoCart: {
    backgroundColor: '#2e7d32',
    padding: 14,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  botaoCartTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  botaoFechar: {
    padding: 12,
    alignItems: 'center',
  },
  botaoFecharTexto: {
    color: '#888',
    fontSize: 14,
  },
});