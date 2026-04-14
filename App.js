import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { HomeScreen } from './screens/HomeScreen';
import { PerfilScreen} from './screens/PerfilScreen';
import { CarrinhoScreen } from './screens/CarrinhoScreen';
import { MapScreen } from './screens/MapScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({ color, size }) => (
  <Ionicons name="home" size={size} color={color} />), headerShown: false}}/>
      <Tab.Screen name="Carrinho" component={CarrinhoScreen} options={{tabBarIcon:({color, size}) => (
  <Ionicons name="cart" size={size} color={color}/>
      ), headerShown: false}}/>
      <Tab.Screen name="Mapa" component={MapScreen} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}

function Drawers() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeTabs" component={Tabs} options={{title:"Home", drawerIcon: ({color,size}) =>(<Ionicons name="home" size={size}  color={color}/>)}}/>
      <Drawer.Screen name="Profile" component={PerfilScreen} options={{drawerIcon: ({color,size}) =>(<Ionicons name="person" size={size}  color={color} />)}}/>
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Drawers/>
    </NavigationContainer>
  );
}

