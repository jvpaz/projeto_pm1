import { Text, View, Image, Pressable } from 'react-native';
import { styles } from "../styles/styles";
import { PerfilStyle } from "../styles/PerfilStyle";
import { Ionicons } from '@expo/vector-icons';
import { SpeakerContext, SpeakerProvider } from '../utils/SpeakerContext';
import { useContext } from 'react';
import {Autentica } from '../utils/AutenticaContext';

export function PerfilScreen({navigation}) {

   const { falar, voiceEnabled, toggleVoice } = useContext(SpeakerContext);
   const {usuario, setUsuario} = Autentica();

   if(!usuario) //Previne tentar ler o usuario após sair da conta.
    return null;

  return ( 
    <View style={styles.container}> 

  <Pressable
    onPress={toggleVoice}
    style={({ pressed }) => [
      styles.botaoVolume, pressed &&
      styles.botaoPressionado
    ]}
  >
    <Ionicons 
      name={voiceEnabled ? "volume-high" : "volume-mute"} 
      size={24} 
      color="white" 
    />
  </Pressable>

      <View style={PerfilStyle.perfilContainer}>
        
        <Pressable
          onPress={() => falar('Perfil do usuário. Usuário temporário. Email temporario arroba email ponto com')}
          style={PerfilStyle.perfilCard}
        >
           <Image
    source={{
      uri: usuario.foto ?? 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'
    }}
    style={PerfilStyle.image}
  />

          <View style={PerfilStyle.perfilInfo}>
            <Text style={PerfilStyle.perfilInfoText}>{usuario.nome}</Text>
            <Text style={PerfilStyle.perfilInfoText}>{usuario.email}</Text>
          </View>
        </Pressable>

        <View style={PerfilStyle.perfilBotoes}>

          <Pressable
            onPress={() => navigation.navigate('EditarStack')}
            style={({ pressed }) => [
              PerfilStyle.button, pressed && styles.botaoPressionado
            ]}
          >
            <Ionicons name="add-circle-outline" size={25}/>
            <Text style={PerfilStyle.buttonText}>Editar Perfil</Text>
          </Pressable>

          <Pressable
            onPress={() => falar('Informações pessoais')}
            style={({ pressed }) => [
                            PerfilStyle.button, pressed && styles.botaoPressionado
            ]}
          >
            <Ionicons name="person" size={25}/>
            <Text style={PerfilStyle.buttonText}>Informações Pessoais</Text>
          </Pressable>

          <Pressable
            onPress={() => falar('Endereços')}
            style={({ pressed }) => [
                            PerfilStyle.button, pressed && styles.botaoPressionado
            ]}
          >
            <Ionicons name="car" size={25}/>
            <Text style={PerfilStyle.buttonText}>Endereços</Text>
          </Pressable>

          <Pressable
            onPress={() => falar('Cartões')}
            style={({ pressed }) => [
                            PerfilStyle.button, pressed && styles.botaoPressionado
            ]}
          >
            <Ionicons name="card" size={25}/>
            <Text style={PerfilStyle.buttonText}>Cartões</Text>
          </Pressable>

          <Pressable
            onPress={() => falar('Configurações de privacidade')}
            style={({ pressed }) => [
                            PerfilStyle.button, pressed && styles.botaoPressionado
            ]}
          >
            <Ionicons name="settings" size={25}/>
            <Text style={PerfilStyle.buttonText}>Privacidade</Text>
          </Pressable>

          <Pressable onPress={() => {
    
    navigation.replace('Login');
    setUsuario(null);
  }}
  style={({ pressed }) => [
    PerfilStyle.button, pressed && styles.botaoPressionado
  ]}
>
  <Ionicons name="log-out" size={25} color="red" />
  <Text style={[PerfilStyle.buttonText, { color: 'red' }]}>Sair da conta</Text>
</Pressable>

        </View>
      </View>
    </View>
  );
}