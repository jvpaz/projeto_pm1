import { useNavigation } from "@react-navigation/native";
import { Text, View } from 'react-native';
import { Button } from '@react-navigation/elements';
import { styles } from "../styles/styles";

export function CarrinhoScreen() {
    const navigation = useNavigation()


  return (
    <View style={styles.container}>
      <Text>Carrinho</Text>
      <Button onPress={() => navigation.navigate("Mapa")}>
        Ir para Mapa
        </Button>
    </View>
  );
}