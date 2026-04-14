import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { HomeScreen } from './screens/HomeScreen';
import { PerfilScreen} from './screens/PerfilScreen';
import { CarrinhoScreen } from './screens/CarrinhoScreen';
import { MapScreen } from './screens/MapScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stacks = createStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: 'black', 
    tabBarInactiveTintColor: 'white',
    tabBarActiveBackgroundColor: 'white',
    tabBarInactiveBackgroundColor: 'black',
    animation: 'shift'}}>
      <Tab.Screen name="HomeTabs" component={HomeScreen} options={{tabBarIcon: ({ color, size }) => (
  <Ionicons name="home" size={size} color={color} />), headerShown: false}}/>
      <Tab.Screen name="CarrinhoTabs" component={StacksNavigator} options={{tabBarIcon:({color, size}) => (
  <Ionicons name="cart" size={size} color={color}/>
      ), headerShown: false}}/>
    </Tab.Navigator>
  );
}

function StacksNavigator()
{
    return (
      <Stacks.Navigator>
        <Stacks.Screen name="CarrinhoStack" component={CarrinhoScreen} options={{headerShown: false}}/>
        <Stacks.Screen name="Mapa" component={MapScreen} options={{headerShown: false}}/>
      </Stacks.Navigator>
    )
}

function Drawers() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeDrawer" component={Tabs} options={{title:"Home", drawerIcon: ({color,size}) =>(<Ionicons name="home" size={size}  color={color}/>)}}/>
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

