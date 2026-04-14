import { Text, View, FlatList, Image } from 'react-native';
import { styles } from "../styles/styles";


const tempInfo = [
    {
        id: '1',
        nome: 'Cadeira1',
        img: 'https://cdn.awsli.com.br/1804/1804030/produto/217256355/cadeira-de-jantar-em-madeira-encosto-em-tela-frente-rytgcm49y2.jpg'
    },
    {
        id: '2',
        nome: 'Cadeira2',
        img: 'https://hiperequipamentos.fbitsstatic.net/img/p/cadeira-rustica-quadrada-de-madeira-c-cera-nao-e-verniz-%E2%80%93-tam-80-cm-vctt-ce-68845/255560-1.jpg?w=1500&h=1500&v=202512110945'
    }
]

const renderItem = ({ item }) => {
  return (
    <View>
      <Text>{item.id}</Text>
      <Image 
        source={{ uri: item.img }} 
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
};


export function HomeScreen() {

  return (
    <View style={styles.container}>
      <FlatList data={tempInfo}
      renderItem={(renderItem)}
      keyExtractor={item => item.id}
      horizontal
      />
    </View>
  )
}