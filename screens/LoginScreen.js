import { useState } from 'react';
import {
  View, Text, TextInput, Pressable, Alert, KeyboardAvoidingView,
  Platform, ScrollView,
} from 'react-native';
import { buscarUsuarioPorEmail } from '../database/db';
import { AutenticaStyle } from '../styles/AutenticaStyle';
import { Autentica } from '../utils/AutenticaContext';

export function LoginScreen({ navigation }) {
  const [form, setForm] = useState({ email: '', senha: '' });
  const {setUsuario} = Autentica();
  const [erros, setErros] = useState({});

  function validar() {
    const novosErros = {};
    if (!form.email.includes('@'))
       novosErros.email = 'E-mail inválido';
    if (!form.senha)               
      novosErros.senha = 'Senha obrigatória';
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  }

  function handleLogin() {
    if (!validar()) return;

    const usuario = buscarUsuarioPorEmail(form.email);
    if (!usuario || usuario.senha !== form.senha) {
      Alert.alert('Erro', 'E-mail ou senha incorretos.');
      return;
    }

    setUsuario(usuario);

    navigation.replace('App');
  }

  return (
    <KeyboardAvoidingView
      style={AutenticaStyle.flex}
    >
      <ScrollView contentContainerStyle={AutenticaStyle.container} keyboardShouldPersistTaps="handled">
        <Text style={AutenticaStyle.titulo}>Bem-vindo</Text>
        <Text style={AutenticaStyle.subtitulo}>Entre na sua conta</Text>

        <Text style={AutenticaStyle.label}>E-mail</Text>
        <TextInput
          style={[AutenticaStyle.input, erros.email && AutenticaStyle.inputErro]}
          placeholder="seu@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={form.email}
          onChangeText={(v) => setForm({ ...form, email: v })}
        />
        {erros.email && <Text style={AutenticaStyle.erro}>{erros.email}</Text>}

        <Text style={AutenticaStyle.label}>Senha</Text>
        <TextInput
          style={[AutenticaStyle.input, erros.senha && AutenticaStyle.inputErro]}
          placeholder="Sua senha"
          secureTextEntry
          value={form.senha}
          onChangeText={(v) => setForm({ ...form, senha: v })}
        />
        {erros.senha && <Text style={AutenticaStyle.erro}>{erros.senha}</Text>}

        <Pressable
          style={({ pressed }) => [AutenticaStyle.botao, pressed && AutenticaStyle.botaoPressionado]}
          onPress={handleLogin}
        >
          <Text style={AutenticaStyle.botaoTexto}>Entrar</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Cadastro')}>
          <Text style={AutenticaStyle.link}>Não tem conta? <Text style={AutenticaStyle.linkDestaque}>Cadastre-se</Text></Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

