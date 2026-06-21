import { StyleSheet } from "react-native";

export const AutenticaStyle = StyleSheet.create({
  flex: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  container: { 
    flexGrow: 1, 
    padding: 24, 
    justifyContent: 'center' 

  },
  titulo: { 
    fontSize: 22, 
    color: '#111', 
    marginBottom: 4 

  },
  subtitulo: { 
    fontSize: 13, 
    color: '#aaa', 
    marginBottom: 28

   },
  label: { 
    fontSize: 13, 
    color: '#666', 
    marginBottom: 5, 
    marginTop: 12 

  },
  input: { 
    height: 44, 
    borderWidth: 1, 
    borderColor: '#ddd', 
    borderRadius: 8, 
    paddingHorizontal: 12, 
    fontSize: 14 

  },
  inputErro: { 
    borderColor: '#e24b4a' 
  },
  erro: { 
    fontSize: 12, 
    color: '#e24b4a', 
    marginTop: 3 

  },
  botao: { 
    marginTop: 24, 
    backgroundColor: '#333', 
    height: 44, 
    borderRadius: 8, 
    alignItems: 'center', 
    justifyContent: 'center' 

  },
  botaoPressionado: { 
    opacity: 0.6 
  },
  botaoTexto: { 
    color: '#fff', 
    fontSize: 15 

  },
  link: { 
    marginTop: 18,
    textAlign: 'center',
     fontSize: 13, 
     color:  '#888' 

  },
  linkDestaque: { 
    color: '#333' 
  },

  botaoDeletar: {
  marginTop: 8,
  padding: 14,
  borderRadius: 8,
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#e53935',
},
botaoDeletarTexto: {
  color: '#e53935',
  fontWeight: 'bold',
},
});