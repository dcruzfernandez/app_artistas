import React, { useState } from 'react';
import Artista from '../interfaces/Artista';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const Buscar = ({navigation}:NativeStackScreenProps<any,any>) => {
    const [clave,setClave] = useState<string>('');
    //const [artistas, setArtistas] = useState<Artista[]>([]);

    const URL_BASE = 'https://www.theaudiodb.com/api/v1/json/2/search.php?';

    const obtenerDatos = async () => {
        try {
            const url = `${URL_BASE}s=${clave}`;
            const respuesta = await fetch(url);
            if (!respuesta.ok) {
                throw new Error('Error al obtener los datos');
            }
            const datos = await respuesta.json();
            const artistasArr:Artista[] = datos.artists.map((item:any)=>({
                                            idArtist:item.idArtist,
                                            strArtist:item.strArtist,
                                            intBornYear:item.intBornYear,
                                            strStyle:item.strStyle,
                                            strGenre:item.strGenre,
                                            strBiographyES:item.strBiographyES,
                                            strArtistThumb:item.strArtistThumb
                                        }));
            return artistasArr;
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            throw error;
        }
    };
    const buscarArtista = async()=>{
       try {
        if (clave !== '') {
            const datos = await obtenerDatos();
            if (datos.length > 0){
                navigation.navigate('detalle',{...datos[0]});
            }
        } else {
            Alert.alert('Error','Debe ingresar el nombre del artista');
        }
       } catch (error) {
            console.log('Error al buscar');
       }

    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Buscar Artista</Text>
            <TextInput
                style={styles.input}
                value={clave}
                onChangeText={setClave}
                placeholder="Nombre de artista"
            />
            <TouchableOpacity style={styles.button} onPress={buscarArtista}>
                <Text style={styles.text_button}>Buscar</Text>
            </TouchableOpacity>
            {/* <View>
                <Text>{artistas.length !== 0 ? artistas[0].strArtist : ''}</Text>
            </View> */}
        </View>
    );
};

export default Buscar;

const styles = StyleSheet.create({
    container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
    },
    titulo:{
        color:'#2D5A1E',
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
        backgroundColor: '#2D5A1E',
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
