import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from './src/components/Login';
import { UserProvider } from './src/components/UserProvider';
import Registro from './src/components/Registro';
import Buscar from './src/components/Buscar';
import DetalleArtista from './src/components/DetalleArtista';
import Discos from './src/components/Discos';
import DetalleDisco from './src/components/DetalleDisco';



const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>

        <Stack.Navigator initialRouteName={'home'}>
            <Stack.Screen name={'home'} component={Login} options={{title:'Inicio de sesión'}}/>
            <Stack.Screen name={'registro'} component={Registro} options={{title:'Registrar Usuario'}}/>
            <Stack.Screen name={'buscar'} component={Buscar} options={{title:'Buscar Artista'}}/>
            <Stack.Screen name={'detalle'} component={DetalleArtista} options={{title:'Datos de Artista'}}/>
            <Stack.Screen name={'discos'} component={Discos} options={{title:'Discografía'}}/>
            <Stack.Screen name={'detalleDisco'} component={DetalleDisco} options={{title:'Discografía'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
