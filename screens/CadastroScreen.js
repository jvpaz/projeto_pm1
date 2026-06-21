import { useState } from 'react';
import {View, Text, TextInput, Pressable, Alert, KeyboardAvoidingView, Platform, ScrollView,
} from 'react-native';
import { criarUsuario, buscarUsuarioPorEmail } from '../database/db';
import { AutenticaStyle } from '../styles/AutenticaStyle';

export function CadastroScreen({ navigation }) {
  const [form, setForm] = useState({ nome: '', email: '', senha: '', confirmar: '' });
  const [erros, setErros] = useState({});

  function validar() {
    const novosErros = {};
    if (!form.nome.trim())              
        novosErros.nome  = 'Nome obrigatório';
    if (!form.email.includes('@'))      
        novosErros.email = 'E-mail inválido';
    if (form.senha !== form.confirmar) 
        novosErros.confirmar = 'As senhas não coincidem';
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  }

  function handleCadastro() {
    if (!validar()) return;

    const jaExiste = buscarUsuarioPorEmail(form.email);
    if (jaExiste) {
      Alert.alert('Erro', 'Este e-mail já está cadastrado.');
      return;
    }

    criarUsuario(form.nome, form.email, form.senha);
    Alert.alert('Sucesso', 'Conta criada com sucesso!', [
      { text: 'Entrar', onPress: () => navigation.replace('Login') },
    ]);
  }

  return (
    <KeyboardAvoidingView
      style={AutenticaStyle.flex}
    >
      <ScrollView contentContainerStyle={AutenticaStyle.container} keyboardShouldPersistTaps="handled">
        <Text style={AutenticaStyle.titulo}>Criar conta</Text>
        <Text style={AutenticaStyle.subtitulo}>Preencha os dados abaixo</Text>

        <Text style={AutenticaStyle.label}>Nome</Text>
        <TextInput
          style={[AutenticaStyle.input, erros.nome && AutenticaStyle.inputErro]}
          placeholder="Seu nome completo"
          value={form.nome}
          onChangeText={(v) => setForm({ ...form, nome: v })}
        />
        {erros.nome && <Text style={AutenticaStyle.erro}>{erros.nome}</Text>}

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
          placeholder="..."
          secureTextEntry
          value={form.senha}
          onChangeText={(v) => setForm({ ...form, senha: v })}
        />
        {erros.senha && <Text style={AutenticaStyle.erro}>{erros.senha}</Text>}

        <Text style={AutenticaStyle.label}>Confirmar senha</Text>
        <TextInput
          style={[AutenticaStyle.input, erros.confirmar && AutenticaStyle.inputErro]}
          placeholder="Repita a senha"
          secureTextEntry
          value={form.confirmar}
          onChangeText={(v) => setForm({ ...form, confirmar: v })}
        />
        {erros.confirmar && <Text style={AutenticaStyle.erro}>{erros.confirmar}</Text>}

        <Pressable
          style={({ pressed }) => [AutenticaStyle.botao, pressed && AutenticaStyle.botaoPressionado]}
          onPress={handleCadastro}
        >
          <Text style={AutenticaStyle.botaoTexto}>Cadastrar</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={AutenticaStyle.link}>Já tem conta? <Text style={AutenticaStyle.linkDestaque}>Entrar</Text></Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}