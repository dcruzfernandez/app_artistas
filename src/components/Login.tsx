import React, { useContext } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { UserContext } from './UserProvider';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


const Login = ({navigation}:NativeStackScreenProps<any,any>) => {

    const {user} = useContext(UserContext);
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Iniciar Sesión</Text>
            <TextInput
                style={styles.input}
                value={user?.user}
                placeholder="Usuario"
            />
            <TextInput
                style={styles.input}
                value={user?.password}
                secureTextEntry
                placeholder="Contraseña"
            />
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('buscar')}>
                <Text style={styles.text_button}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={()=>navigation.navigate('registro')}>
                <Text style={styles.text_button}>Registrar Usuario</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
    },
    titulo:{
        color:'#A12709',
        fontSize:40,
        fontWeight:'bold',
    },
    input: {
      height: 40,
      width:200,
      margin: 10,
      borderWidth: 1,
      borderColor:'gray',
      padding: 10,
      borderRadius:5,
    },
    button:{
        backgroundColor: '#A12709',
        padding: 5,
        borderRadius: 5,
        width:200,
        alignItems:'center',
    },
    button1:{
        backgroundColor: '#8D908C',
        padding: 5,
        borderRadius: 5,
        width:200,
        marginTop:10,
        alignItems:'center',
    },
    text_button:{
        color:'white',
        fontSize:20,
    },
  });
