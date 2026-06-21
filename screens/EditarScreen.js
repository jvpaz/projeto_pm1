import { useState } from 'react';
import {View, Text, TextInput, Pressable, Alert, KeyboardAvoidingView, Platform, ScrollView, Image
} from 'react-native';
import { criarUsuario, buscarUsuarioPorEmail, atualizarUsuario, deletarUsuario } from '../database/db';
import { AutenticaStyle } from '../styles/AutenticaStyle';
import { escolherFoto } from '../utils/EscolherFoto';
import { Autentica } from '../utils/AutenticaContext';
import {PerfilStyle} from '../styles/PerfilStyle'

export function EditarScreen({ navigation }) {
  const {usuario, setUsuario} = Autentica();

  if(!usuario)
    return null;

  const [form, setForm] = useState({ nome: usuario.nome, senha: usuario.senha, confirmar: '' });
  const [erros, setErros] = useState({});

  

  function validar() {
    const novosErros = {};
    if (!form.nome.trim())              
        novosErros.nome  = 'Nome obrigatório';
    if (form.senha !== form.confirmar) 
        novosErros.confirmar = 'As senhas não coincidem';
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  }

  function handleEdicao() {
    if (!validar()) return;

    atualizarUsuario(usuario.id, { nome: form.nome, senha: form.senha, foto: usuario.foto});
      setUsuario({ ...usuario, nome: form.nome, senha: form.senha });

    Alert.alert('Sucesso', 'Edição realizada com sucesso!', [
      { text: 'Voltar ao perfil', onPress: () => navigation.replace('PerfilStack') },
    ]);
  }

function handleDeletar() {
  Alert.alert(
    'Deletar conta',
    'Tem certeza? Essa ação não pode ser desfeita.',
    [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Deletar',
        style: 'destructive',
        onPress: () => {
          navigation.replace('Login');
          deletarUsuario(usuario.id);
          setUsuario(null);
        },
      },
    ]
  );
}


  return (
    <KeyboardAvoidingView
      style={AutenticaStyle.flex}
    >
      <ScrollView contentContainerStyle={AutenticaStyle.container} keyboardShouldPersistTaps="handled">
        <Text style={AutenticaStyle.titulo}>Atualizar dados</Text>
        <Text style={AutenticaStyle.subtitulo}>Preencha os dados abaixo</Text>

        <Pressable onPress={() => {escolherFoto(usuario, setUsuario)}}>
  <Image
    source={{
      uri: usuario.foto ?? 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'
    }}
    style={PerfilStyle.image}
  />
</Pressable>

        <Text style={AutenticaStyle.label}>Nome</Text>
        <TextInput
          style={[AutenticaStyle.input, erros.nome && AutenticaStyle.inputErro]}
          placeholder="Escreva seu novo nome"
          value={form.nome}
          onChangeText={(v) => setForm({ ...form, nome: v })}
        />
        {erros.nome && <Text style={AutenticaStyle.erro}>{erros.nome}</Text>}

        <Text style={AutenticaStyle.label}>Senha</Text>
        <TextInput
          style={[AutenticaStyle.input, erros.senha && AutenticaStyle.inputErro]}
          placeholder="Escreva sua nova senha"
          secureTextEntry
          value={form.senha}
          onChangeText={(v) => setForm({ ...form, senha: v })}
        />
        {erros.senha && <Text style={AutenticaStyle.erro}>{erros.senha}</Text>}

        <Text style={AutenticaStyle.label}>Confirmar senha</Text>
        <TextInput
          style={[AutenticaStyle.input, erros.confirmar && AutenticaStyle.inputErro]}
          placeholder="Repita a sua nova senha"
          secureTextEntry
          value={form.confirmar}
          onChangeText={(v) => setForm({ ...form, confirmar: v })}
        />
        {erros.confirmar && <Text style={AutenticaStyle.erro}>{erros.confirmar}</Text>}

        <Pressable
          style={({ pressed }) => [AutenticaStyle.botao, pressed && AutenticaStyle.botaoPressionado]}
          onPress={handleEdicao}
        >
          <Text style={AutenticaStyle.botaoTexto}>Confirmar</Text>
        </Pressable>

        <Pressable
  style={({ pressed }) => [AutenticaStyle.botaoDeletar, pressed && AutenticaStyle.botaoPressionado]}
  onPress={handleDeletar}
>
  <Text style={AutenticaStyle.botaoDeletarTexto}>Deletar conta</Text>
</Pressable>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}