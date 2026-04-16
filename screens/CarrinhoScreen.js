import { useNavigation } from "@react-navigation/native";
import { Alert, FlatList, Image, Pressable, Text, View } from 'react-native';
import { Button } from '@react-navigation/elements';
import { styles } from "../styles/styles";
import { todosMoveis } from "../localVariables/moveis";
import { SpeakerContext } from "../utils/SpeakerContext";
import { useContext } from "react";
import { Ionicons } from '@expo/vector-icons';
import { ProdutoCardStyleVertical } from "../styles/ProdutoCardStyleVertical";
import { CarrinhoStyle } from "../styles/CarrinhoStyle";

export function CarrinhoScreen({navigation}) {

  const {falar} = useContext(SpeakerContext);

  const renderItemVertical = ({ item }) => {
    return (
      <View style={ProdutoCardStyleVertical.container}>
        <View style={ProdutoCardStyleVertical.card}>

          <Pressable
            onPress={() => falar(item.nome)}
            style={({ pressed }) => [
              pressed && styles.botaoPressionado
            ]}
          >
            <Image 
              source={{ uri: item.img }} 
              style={ProdutoCardStyleVertical.image}
            />
          </Pressable>

          <View style={ProdutoCardStyleVertical.info}>
            <Text style={ProdutoCardStyleVertical.nome}>
              {item.nome}
            </Text>

            <Text
              style={ProdutoCardStyleVertical.descricao}
              numberOfLines={2}
              ellipsizeMode='tail'
            >
              {item.descricao}
            </Text>

            <View style={ProdutoCardStyleVertical.precoCard}>
              <Text style={ProdutoCardStyleVertical.preco}>
                R$ {item.preco}
              </Text>
            </View>
          </View>

        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={CarrinhoStyle.carrinhoCard}>
      <FlatList data={todosMoveis}
            renderItem={renderItemVertical}
            keyExtractor={(item) => item.id} 
            ListHeaderComponent={
              <Pressable onPress={() => navigation.navigate("Mapa")}>
        <Image source={{uri: 'https://t3.ftcdn.net/jpg/03/96/88/32/360_F_396883284_1APy4O6kZumSUDLE33VgJ3ADdMYt39Bv.jpg'
          
        }} style={CarrinhoStyle.image}>

        </Image>
      </Pressable>}>
      </FlatList>
      <View style={CarrinhoStyle.checkoutCard}>
        <Text>Total a pagar:</Text>
        <Text style={CarrinhoStyle.checkoutTotal}>R$2680,00</Text>
        <Pressable
    onPress={() => Alert.alert("Compra finalizada!")}
    style={({ pressed }) => [
      CarrinhoStyle.checkoutButton,
      pressed && styles.botaoPressionado
    ]}
  >
    <Ionicons name="card" size={18} color="white" />
    <Text style={CarrinhoStyle.checkoutButtonText}>
      Finalizar compra
    </Text>
  </Pressable>
  </View>
      </View>
    </View>
  );
}