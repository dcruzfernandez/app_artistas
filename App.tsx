import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from './src/components/Login';
import { UserProvider } from './src/components/UserProvider';
import Registro from './src/components/Registro';
import Buscar from './src/components/Buscar';



const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>

        <Stack.Navigator initialRouteName={'home'}>
            <Stack.Screen name={'home'} component={Login} options={{title:'Inicio de sesión'}}/>
            <Stack.Screen name={'registro'} component={Registro} options={{title:'Registrar Usuario'}}/>
            <Stack.Screen name={'buscar'} component={Buscar} options={{title:'Buscar Artista'}}/>
            {/* <Stack.Screen name={'lista'} component={List} options={{title:'Lista de Personajes'}}/>
            <Stack.Screen name={'detalles'}
                          component={Details}
                          initialParams={{name:'',species:'',gender:'',image:''}}
                          options={{title:'Datos del Personaje'}}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
