import { Text, View, Image, Pressable } from 'react-native';
import { styles } from "../styles/styles";
import { PerfilStyle } from "../styles/PerfilStyle";
import { Ionicons } from '@expo/vector-icons';
import { SpeakerContext, SpeakerProvider } from '../utils/SpeakerContext';
import { useContext } from 'react';

export function PerfilScreen() {

   const { falar, voiceEnabled, toggleVoice } = useContext(SpeakerContext);

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
              uri: 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'
            }}
            style={PerfilStyle.image}
          />

          <View style={PerfilStyle.perfilInfo}>
            <Text style={PerfilStyle.perfilInfoText}>Usuário Temporário</Text>
            <Text style={PerfilStyle.perfilInfoText}>temporario@email.com</Text>
            <Text style={PerfilStyle.perfilInfoText}>53 99999-9999</Text>
          </View>
        </Pressable>

        <View style={PerfilStyle.perfilBotoes}>

          <Pressable
            onPress={() => falar('Editar perfil')}
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

        </View>
      </View>
    </View>
  );
}