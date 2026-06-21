import { Text, View, FlatList, Image, Alert, Pressable, Modal } from 'react-native';
import { styles } from "../styles/styles";
import { ProdutoCardStyleHorizontal } from '../styles/ProdutoCardStyleHorizontal';
import { ProdutoCardStyleVertical } from '../styles/ProdutoCardStyleVertical';
import { Ionicons } from '@expo/vector-icons';
import { SpeakerContext } from '../utils/SpeakerContext';
import { useContext, useEffect, useState } from 'react';
import { listarProdutos, listarProdutosLimitados, adicionarAoCarrinho } from '../database/db';
import { categorias } from '../localVariables/categorias';
import { ModalStyle } from '../styles/ModalStyle';
import { Autentica } from '../utils/AutenticaContext';

export function HomeScreen() {
  const { falar } = useContext(SpeakerContext);
  const {usuario} = Autentica();
  const [moveis, setMoveis] = useState([]);
  const [moveisDestaque, setMoveisDestaque] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null); // 👈

  useEffect(() => {
    setMoveis(listarProdutos());
    setMoveisDestaque(listarProdutosLimitados);
  }, []);

  const renderItemHorizontal = ({ item }) => (
    <View style={ProdutoCardStyleHorizontal.container}>
      <Pressable
        onPress={() => setProdutoSelecionado(item)} // 👈
        style={({ pressed }) => [
          ProdutoCardStyleHorizontal.card,
          pressed && styles.botaoPressionado,
        ]}
      >
        <Image
          source={{ uri: item.imagem_url }}
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
            R$ {item.preco.toFixed(2).replace('.', ',')}
          </Text>
        </View>
      </Pressable>
    </View>
  );

  const renderItemVertical = ({ item }) => (
    <View style={ProdutoCardStyleVertical.container}>
      <View style={ProdutoCardStyleVertical.card}>
        <Pressable
          onPress={() => setProdutoSelecionado(item)} // 👈
          style={({ pressed }) => [pressed && styles.botaoPressionado]}
        >
          <Image
            source={{ uri: item.imagem_url }}
            style={ProdutoCardStyleVertical.image}
          />
        </Pressable>

        <View style={ProdutoCardStyleVertical.info}>
          <Text style={ProdutoCardStyleVertical.nome}>{item.nome}</Text>
          <Text
            style={ProdutoCardStyleVertical.descricao}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {item.descricao}
          </Text>

          <View style={ProdutoCardStyleVertical.precoCard}>
            <Text style={ProdutoCardStyleVertical.preco}>
              R$ {item.preco.toFixed(2).replace('.', ',')}
            </Text>
            <Pressable
  onPress={() => {
    adicionarAoCarrinho(usuario.id, item.id);
    Alert.alert('Produto adicionado ao carrinho!');
  }}
  style={({ pressed }) => [
    ProdutoCardStyleVertical.botaoCart,
    pressed && styles.botaoPressionado,
  ]}
>
  <Ionicons name="cart" size={18} />
</Pressable>
          </View>
        </View>
      </View>
    </View>
  );

  const renderCategoryItem = ({ item }) => (
    <Pressable
      onPress={() => falar(item.nome)}
      style={({ pressed }) => [
        { alignItems: 'center', marginRight: 15 },
        pressed && styles.botaoPressionado,
      ]}
    >
      <View style={{ backgroundColor: '#eee', padding: 12, borderRadius: 50 }}>
        <Ionicons name={item.icon} size={20} />
      </View>
      <Text style={{ marginTop: 5, fontSize: 12 }}>{item.nome}</Text>
    </Pressable>
  );

  return (
    <>
      <FlatList
        data={moveis}
        renderItem={renderItemVertical}
        keyExtractor={(item) => String(item.id)}
        ListHeaderComponent={
          <View style={styles.container}>
            <Text style={styles.textoDestaque}>Categorias</Text>
            <FlatList
              data={categorias}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => String(item.id)}
              horizontal
              showsHorizontalScrollIndicator={false}
            />

            <Text style={styles.textoDestaque}>Móveis em Destaque</Text>
            <FlatList
              data={moveisDestaque}
              renderItem={renderItemHorizontal}
              keyExtractor={(item) => String(item.id)}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        }
      />

      <Modal
        visible={produtoSelecionado !== null}
        transparent
        animationType="slide"
        onRequestClose={() => setProdutoSelecionado(null)}
      >
        <View style={ModalStyle.fundo}>
          <View style={ModalStyle.modal}>
            <Image
              source={{ uri: produtoSelecionado?.imagem_url }}
              style={ModalStyle.imagem}
            />
            <Text style={ModalStyle.nome}>{produtoSelecionado?.nome}</Text>
            <Text style={ModalStyle.descricao}>{produtoSelecionado?.descricao}</Text>
            <Text style={ModalStyle.preco}>
              R$ {produtoSelecionado?.preco.toFixed(2).replace('.', ',')}
            </Text>

            <Pressable
  style={({ pressed }) => [ModalStyle.botaoCart, pressed && styles.botaoPressionado]}
  onPress={() => {
    adicionarAoCarrinho(usuario.id, produtoSelecionado.id);
    Alert.alert('Produto adicionado ao carrinho!');
    setProdutoSelecionado(null); // fecha o modal após adicionar
  }}
>
  <Ionicons name="cart" size={20} color="#fff" />
  <Text style={ModalStyle.botaoCartTexto}>Adicionar ao carrinho</Text>
</Pressable>

            <Pressable
              style={({ pressed }) => [ModalStyle.botaoFechar, pressed && styles.botaoPressionado]}
              onPress={() => setProdutoSelecionado(null)}
            >
              <Text style={ModalStyle.botaoFecharTexto}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

