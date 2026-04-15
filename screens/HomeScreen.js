import { Text, View, FlatList, Image, TouchableOpacity, Alert, ScrollView} from 'react-native';
import { styles } from "../styles/styles";
import {ProdutoCardStyleHorizontal } from '../styles/ProdutoCardStyleHorizontal';
import { ProdutoCardStyleVertical } from '../styles/ProdutoCardStyleVertical';
import { Ionicons } from '@expo/vector-icons';

const moveisDestaque = [
    {
  id: '1',
  img: 'https://abramais.vteximg.com.br/arquivos/ids/232288/29082024-_MG_9988-1000x1000.jpg?v=638772985264970000',
  preco: '100,00',
  nome: 'Cadeira de Jantar Branca Moderna',
  descricao: 'Cadeira branca com design moderno, ideal para salas de jantar ou cozinhas. Possui estrutura resistente e acabamento elegante, combinando com diversos estilos de decoração.'
},
{
  id: '2',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbHv5KR7f1yQUulMzmUPjEOCtN7LcV8YH7w&s',
  preco: '100,00',
  nome: 'Cadeira Preta Minimalista',
  descricao: 'Cadeira preta com visual minimalista, perfeita para ambientes modernos. Leve, prática e fácil de combinar com mesas e outros móveis.'
},
{
  id: '3',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMWXfwO7qgQFljSdTD-gfQehauO_9mAxlx1w&s',
  preco: '100,00',
  nome: 'Cadeira de Escritório Ergonômica',
  descricao: 'Cadeira de escritório com encosto confortável e design ergonômico, ideal para longas horas de trabalho ou estudo, ajudando a manter uma postura adequada.'
},
{
  id: '4',
  img: 'https://cdn.awsli.com.br/2500x2500/214/214875/produto/55704212/chatgpt-image-17-de-abr--de-2025-12_09_40-r8jn2cfcrc.png',
  preco: '250,00',
  nome: 'Mesa de Escritório Compacta',
  descricao: 'Mesa de escritório funcional e compacta, perfeita para home office. Oferece espaço suficiente para computador, livros e acessórios do dia a dia.'
},
{
  id: '5',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7LCyHiKLtBFlYQM1Avzg6jlNJWM3-vH5-UA&s',
  preco: '800,00',
  nome: 'Guarda-Roupa 3 Portas Espaçoso',
  descricao: 'Guarda-roupa com três portas e ótimo espaço interno para organização de roupas e acessórios. Ideal para quartos que precisam de praticidade e armazenamento eficiente.'
}
]

const todosMoveis = [
  {
  id: '6',
  img: 'https://io.convertiez.com.br/m/lojasedmil/shop/products/images/1410/large/cama-de-casal-madeira-em-mdp-e-mdf-amendoa-athenas-lopas_9736.jpg',
  preco: '400,00',
  nome: 'Cama de Casal em Madeira',
  descricao: 'Cama de casal com estrutura em madeira resistente, ideal para garantir conforto e durabilidade no dia a dia. Combina com diversos estilos de quarto e oferece um ótimo custo-benefício.'
},
{
  id: '7',
  img: 'https://m.media-amazon.com/images/I/91IfCAx66cL._AC_UF894,1000_QL80_.jpg',
  preco: '400,00',
  nome: 'Abajur Decorativo Moderno',
  descricao: 'Abajur com design moderno, perfeito para iluminação suave em quartos e salas. Ideal para criar um ambiente aconchegante e complementar a decoração.'
},
{
  id: '11',
  img: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/g/pg-omgs-onix125445v5.jpg',
  preco: '180,00',
  nome: 'Cadeira Gamer Ergonômica',
  descricao: 'Cadeira gamer com design ergonômico, proporcionando conforto durante longas sessões de jogo ou trabalho. Possui estrutura reforçada e acabamento moderno.'
},
{
  id: '12',
  img: 'https://images.tcdn.com.br/img/img_prod/752045/sofa_4_lugares_dubai_3_40_com_chaise_direito_linho_10003065_1_c90765fe1f3f6b34c7699f7a6f11143f.jpg',
  preco: '1200,00',
  nome: 'Sofá 4 Lugares com Chaise',
  descricao: 'Sofá espaçoso com quatro lugares e chaise, ideal para salas amplas. Oferece conforto, estilo e praticidade para momentos de descanso e convivência.'
},
{
  id: '13',
  img: 'https://carrefourbr.vtexassets.com/arquivos/ids/185851852/image-0.jpg?v=638802570165830000',
  preco: '500,00',
  nome: 'Rack para TV Moderno',
  descricao: 'Rack para TV com design moderno e funcional, ideal para organizar aparelhos eletrônicos e itens decorativos, trazendo mais estilo para sua sala.'
}
]

const categorias = [
  { id: '1', nome: 'Camas', icon: 'bed' },
  { id: '2', nome: 'Mesas', icon: 'grid' },
  { id: '3', nome: 'TVs', icon: 'tv' },
  { id: '4', nome: 'Armários', icon: 'cube' },
];

const renderItemHorizontal = ({ item }) => {
  return (
    <View style={ProdutoCardStyleHorizontal.container}>
      <TouchableOpacity style={ProdutoCardStyleHorizontal.card} onPress={() => Alert.alert("Ainda em construção!")}>
        
        <Image 
          source={{ uri: item.img }} 
          style={ProdutoCardStyleHorizontal.image}
        />

        <View style={ProdutoCardStyleHorizontal.info}>
          <Text style={ProdutoCardStyleHorizontal.nome} numberOfLines={1}
  ellipsizeMode="tail">
            {item.nome}
          </Text>

          <Text style={ProdutoCardStyleHorizontal.preco}>
            R$ {item.preco}
          </Text>
        </View>

      </TouchableOpacity>
    </View>
  );
};

const renderItemVertical = ({ item }) => {
  return (
    <View style={ProdutoCardStyleVertical.container}>
      <View style={ProdutoCardStyleVertical.card}>
      <TouchableOpacity  onPress={() => Alert.alert("Ainda em construção!")}>
        
        <Image 
          source={{ uri: item.img }} 
          style={ProdutoCardStyleVertical.image}
        />
      </TouchableOpacity>
        <View style={ProdutoCardStyleVertical.info}>
          <Text style={ProdutoCardStyleVertical.nome}>
            {item.nome}
          </Text>
          <Text style={ProdutoCardStyleVertical.descricao} numberOfLines={2} ellipsizeMode='tail'>
            {item.descricao}</Text>

        <View style={ProdutoCardStyleVertical.precoCard}>
          <Text style={ProdutoCardStyleVertical.preco}>
            R$ {item.preco}
          </Text>
          <TouchableOpacity style={ProdutoCardStyleVertical.botaoCart}>
          <Ionicons name="cart" onPress={() => Alert.alert("Ainda em construção!")}></Ionicons>
          </TouchableOpacity>
        </View>
          </View>
        </View>
    </View>
  );
};

const renderCategoryItem = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        marginRight: 15,
      }}
      onPress={() => Alert.alert(item.nome)}
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
    </TouchableOpacity>
  );
};


export function HomeScreen() {

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