import { Text, View, FlatList, Image,Alert, Pressable, Button} from 'react-native';
import { styles } from "../styles/styles";
import {ProdutoCardStyleHorizontal } from '../styles/ProdutoCardStyleHorizontal';
import { ProdutoCardStyleVertical } from '../styles/ProdutoCardStyleVertical';
import { Ionicons } from '@expo/vector-icons';
import { SpeakerContext, SpeakerProvider } from '../utils/SpeakerContext';
import { useContext } from 'react';
import { todosMoveis, moveisDestaque } from '../localVariables/moveis';
import { categorias } from '../localVariables/categorias';

export function HomeScreen() {
  const { falar } = useContext(SpeakerContext);

  const renderItemHorizontal = ({ item }) => {
    return (
      <View style={ProdutoCardStyleHorizontal.container}>
        <Pressable
          onPress={() => falar(item.nome)}
          style={({ pressed }) => [
            ProdutoCardStyleHorizontal.card,
            pressed && styles.botaoPressionado
          ]}
        >
          <Image 
            source={{ uri: item.img }} 
            style={ProdutoCardStyleHorizontal.image}
          />

          <View style={ProdutoCardStyleHorizontal.info}>
            <Text
              style={ProdutoCardStyleHorizontal.nome}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.nome}
            </Text>

            <Text style={ProdutoCardStyleHorizontal.preco}>
              R$ {item.preco}
            </Text>
          </View>
        </Pressable>
      </View>
    );
  };

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

              <Pressable
                onPress={() => Alert.alert("Ainda em construção!")}
                style={({ pressed }) => [
                  ProdutoCardStyleVertical.botaoCart,
                  pressed && styles.botaoPressionado
                ]}
              >
                <Ionicons name="cart" size={18} />
              </Pressable>
            </View>
          </View>

        </View>
      </View>
    );
  };

  const renderCategoryItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => falar(item.nome)}
        style={({ pressed }) => [
          {
            alignItems: 'center',
            marginRight: 15,
          },
          pressed && styles.botaoPressionado
        ]}
      >
        <View
          style={{
            backgroundColor: '#eee',
            padding: 12,
            borderRadius: 50,
          }}
        >
          <Ionicons name={item.icon} size={20} />
        </View>

        <Text style={{ marginTop: 5, fontSize: 12 }}>
          {item.nome}
        </Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={todosMoveis}
      renderItem={renderItemVertical}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <View style={styles.container}>
          <Text style={styles.textoDestaque}>
            Categorias
          </Text>
          <FlatList
            data={categorias}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />

          <Text style={styles.textoDestaque}>
            Móveis em Destaque
          </Text>

          <FlatList
            data={moveisDestaque}
            renderItem={renderItemHorizontal}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      }
    />
  );
}


