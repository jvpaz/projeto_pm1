import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Alert, FlatList, Image, Pressable, Text, View } from 'react-native';
import { styles } from "../styles/styles";
import { SpeakerContext } from "../utils/SpeakerContext";
import { useContext, useEffect, useState, useCallback } from "react";
import { Ionicons } from '@expo/vector-icons';
import { ProdutoCardStyleVertical } from "../styles/ProdutoCardStyleVertical";
import { CarrinhoStyle } from "../styles/CarrinhoStyle";
import { listarCarrinho, resumoCarrinho, limparCarrinho } from "../database/db";
import { Autentica } from "../utils/AutenticaContext";

export function CarrinhoScreen({ navigation }) {
  const { falar } = useContext(SpeakerContext);
  const {usuario} = Autentica();
  const [itens, setItens] = useState([]);
  const [resumo, setResumo] = useState({ total: 0, total_itens: 0 });

  const USUARIO_ID = usuario.id;



useFocusEffect(
  useCallback(() => {
    setItens(listarCarrinho(USUARIO_ID));
    setResumo(resumoCarrinho(USUARIO_ID));
  }, [])
);

  const renderItemVertical = ({ item }) => (
    <View style={ProdutoCardStyleVertical.container}>
      <View style={ProdutoCardStyleVertical.card}>
        <Pressable
          onPress={() => falar(item.nome)}
          style={({ pressed }) => [pressed && styles.botaoPressionado]}
        >
          <Image
            source={{ uri: item.imagem_url }}
            style={ProdutoCardStyleVertical.image}
          />
        </Pressable>

        <View style={ProdutoCardStyleVertical.info}>
          <Text style={ProdutoCardStyleVertical.nome}>{item.nome}</Text>

          <Text style={{ fontSize: 12, color: '#888' }}>
            Qtd: {item.quantidade}
          </Text>

          <View style={ProdutoCardStyleVertical.precoCard}>
            <Text style={ProdutoCardStyleVertical.preco}>
              R$ {item.subtotal.toFixed(2).replace('.', ',')}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={CarrinhoStyle.carrinhoCard}>
        <FlatList
          data={itens}
          renderItem={renderItemVertical}
          keyExtractor={(item) => String(item.id)}
          ListEmptyComponent={
    <View style={{ alignItems: 'center', marginTop: 40, gap: 10 }}>
      <Ionicons name="cart-outline" size={64} color="#ccc" />
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#888' }}>
        Carrinho vazio
      </Text>
      <Text>
        Adicione produtos para continuar
      </Text>
    </View>
  }
          ListHeaderComponent={
            <Pressable onPress={() => navigation.navigate('Mapa')}>
              <Image
                source={{ uri: 'https://t3.ftcdn.net/jpg/03/96/88/32/360_F_396883284_1APy4O6kZumSUDLE33VgJ3ADdMYt39Bv.jpg' }}
                style={CarrinhoStyle.image}
              />
            </Pressable>
          }
        />

        <View style={CarrinhoStyle.checkoutCard}>
          <Text>Total a pagar:</Text>
          <Text style={CarrinhoStyle.checkoutTotal}>
            R$ {resumo.total.toFixed(2).replace('.', ',')}
          </Text>
          <Pressable
            onPress={() => {Alert.alert('Compra finalizada!')
              limparCarrinho(usuario.id);
              navigation.navigate('HomeTabs')
            }
            }
            style={({ pressed }) => [
              CarrinhoStyle.checkoutButton,
              pressed && styles.botaoPressionado,
            ]}
          >
            <Ionicons name="card" size={18} color="white" />
            <Text style={CarrinhoStyle.checkoutButtonText}>Finalizar compra</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}