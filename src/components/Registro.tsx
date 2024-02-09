import React, { useContext, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { UserContext } from './UserProvider';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


const Registro = ({navigation}:NativeStackScreenProps<any,any>) => {

    const {setUser} = useContext(UserContext);

    const [name ,setName] = useState<string>('');
    const [password ,setPassword] = useState<string>('');
    const [confirm ,setConfirm] = useState<string>('');

    const registrar = ()=>{
        if ((name !== '' && password !== '' && confirm !== '') && (password === confirm)){
            setUser({user:name,password:password});
            navigation.navigate('home');
        } else {
            Alert.alert('Error','Los password no coinciden o falta datos');
            setPassword('');
            setConfirm('');
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Registro de Usuario</Text>
            <TextInput
                style={styles.input}
                value={name}
                placeholder="Usuario"
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                value={password}
                secureTextEntry
                placeholder="Contraseña"
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                value={confirm}
                secureTextEntry
                placeholder="Contraseña"
                onChangeText={setConfirm}
            />
            <TouchableOpacity style={styles.button} onPress={registrar}>
                <Text style={styles.text_button}>Registrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={()=>navigation.navigate('home')}>
                <Text style={styles.text_button}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Registro;

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
    }
  });
