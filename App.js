import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from './screens/HomeScreen';
import { AutenticaProvider } from "./utils/AutenticaContext";
import { PerfilScreen } from './screens/PerfilScreen';
import { EditarScreen } from './screens/EditarScreen';
import { CarrinhoScreen } from './screens/CarrinhoScreen';
import { MapScreen } from './screens/MapScreen';
import { LoginScreen } from './screens/LoginScreen';
import { CadastroScreen } from './screens/CadastroScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { SpeakerProvider } from "./utils/SpeakerContext";
import { iniciarDatabase } from './database/db';
import { useEffect, useState } from 'react';

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
      animation: 'shift',
      tabBarIconStyle: { marginTop: 5 },
    }}>
      <Tab.Screen
        name="HomeTabs"
        component={HomeScreen}
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="CarrinhoTabs"
        component={StacksNavigator}
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="cart" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

function StacksNavigator() {
  return (
    <Stacks.Navigator>
      <Stacks.Screen name="CarrinhoStack" component={CarrinhoScreen} options={{ headerShown: false }} />
      <Stacks.Screen name="Mapa" component={MapScreen} options={{ headerShown: false }} />
    </Stacks.Navigator>
  );
}

function Drawers() {
  return (
    <Drawer.Navigator screenOptions={{
      drawerActiveBackgroundColor: 'black',
      drawerActiveTintColor: 'white',
      headerStyle: { backgroundColor: 'black' },
      headerTintColor: 'white',
    }}>
      <Drawer.Screen
        name="HomeDrawer"
        component={Tabs}
        options={{
          title: 'Inicio',
          drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={PerfilStack}
        options={{
          title: 'Perfil',
          drawerIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}

function PerfilStack()
{
  return(
    <Stacks.Navigator screenOptions={{ headerShown: false }}>
      <Stacks.Screen name="PerfilStack" component={PerfilScreen} />
      <Stacks.Screen name="EditarStack" component={EditarScreen} />
    </Stacks.Navigator>
  )
}


function InicioNavigator() {
  return (
    <Stacks.Navigator screenOptions={{ headerShown: false }}>
      <Stacks.Screen name="Login" component={LoginScreen} />
      <Stacks.Screen name="Cadastro" component={CadastroScreen} />
      <Stacks.Screen name="App" component={Drawers} />
    </Stacks.Navigator>
  );
}

export default function App() {
  const [pronto, setPronto] = useState(false);

  useEffect(() => {
    iniciarDatabase();
    setPronto(true);
  }, []);

  if (!pronto) return null;

  return (
    <SpeakerProvider>
      <AutenticaProvider>
      <NavigationContainer>
        <InicioNavigator />
      </NavigationContainer>
      </AutenticaProvider>
    </SpeakerProvider>
  );
}