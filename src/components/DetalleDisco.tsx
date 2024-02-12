import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Album from '../interfaces/Album';
import Track from '../interfaces/track';

const DetalleDisco = ({route, navigation}:NativeStackScreenProps<any,any>) => {
    const {idAlbum,strArtist,strAlbum,intYearReleased,strAlbumThumb} =  route.params as Album;
    const [tracks,setTracks] = useState<Track[]>([]);
    const URL_BASE = 'https://www.theaudiodb.com/api/v1/json/2/track.php?';

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const url = `${URL_BASE}m=${idAlbum}`;
                const respuesta = await fetch(url);
                if (!respuesta.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const datos = await respuesta.json();
                const tracksArr:Track[] = datos.track.map((item:any)=>({
                                                idTrack:item.idTrack,
                                                idAlbum:item.idAlbum,
                                                strTrack:item.strTrack,
                                            }));
                setTracks(tracksArr);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
                throw error;
            }
        };

        obtenerDatos();
    }, [idAlbum]);
    return (
        <View style={styles.contenedor}>
            <Image
                style={styles.imagen}
                source={{uri:strAlbumThumb}}
            />
            <Text style={styles.titulo}>Album: {strAlbum}</Text>
            <Text style={styles.titulo2}>Artista: {strArtist}</Text>
            <Text style={styles.titulo2}>Año: {intYearReleased}</Text>
            <View style={styles.contenedorList}>
                <Text style={styles.titulo3}>Lista de canciones</Text>
                <FlatList data={tracks}
                            renderItem={({item,index})=>(
                                <Text>{index + 1}.{item.strTrack}</Text>)}
                                />
            </View>
            <TouchableOpacity style={styles.button1} onPress={()=>navigation.navigate('buscar')}>
                <Text style={styles.text_button}>Regresar a Buscar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DetalleDisco;

const styles = StyleSheet.create({
    contenedorList:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    contenedor:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    titulo:{
      color:'#A12709',
      fontSize:40,
      textAlign:'center',
      marginBottom:10,
    },
    titulo2:{
        color:'black',
        fontSize:30,
        textAlign:'center',
        marginBottom:10,
      },
      titulo3:{
        color:'#2D5A1E',
        fontSize:40,
        fontWeight:'bold',
    },
    button: {
        backgroundColor: '#A12709',
        color:'white',
        padding: 5,
        borderRadius: 5,
        width:200,
        margin:10,
        fontSize:20,
        alignItems:'center',
    },
    text_button:{
        color:'white',
        fontSize:20,
    },
    imagen:{
      borderRadius:100,
      margin:5,
      width:150,
      height:150,
    },
    scroll:{
        height:50,
        margin:10,
    },
    button1:{
        backgroundColor: '#8D908C',
        padding: 5,
        borderRadius: 5,
        width:200,
        margin:10,
        alignItems:'center',
    },
  });
