import * as ImagePicker from 'expo-image-picker';
import { atualizarUsuario } from '../database/db';
import { Autentica } from './AutenticaContext';


export async function escolherFoto(usuario, setUsuario) {
  const resultado = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1], 
    quality: 0.7,
  });

  if (!resultado.canceled) {
    const uri = resultado.assets[0].uri;
    atualizarUsuario(usuario.id, { foto: uri });
    setUsuario({ ...usuario, foto: uri });
  }
}