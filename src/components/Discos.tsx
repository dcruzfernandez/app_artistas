import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Album from '../interfaces/Album';

const Discos = ({route,navigation}:NativeStackScreenProps<any,any>) => {
    const {id} = route.params;
    const [discos,setDiscos] = useState<Album[]>([]);
    //const [artistas, setArtistas] = useState<Artista[]>([]);

    const URL_BASE = 'https://www.theaudiodb.com/api/v1/json/2/album.php?';

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const url = `${URL_BASE}i=${id}`;
                const respuesta = await fetch(url);
                if (!respuesta.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const datos = await respuesta.json();
                const albumsArr:Album[] = datos.album.map((item:any)=>({
                                                idAlbum:item.idAlbum,
                                                idArtist:item.idArtist,
                                                strArtist:item.strArtist,
                                                strAlbum:item.strAlbum,
                                                intYearReleased:item.intYearReleased,
                                                strAlbumThumb:item.strAlbumThumb,
                                                strDescriptionES:item.strDescriptionEN,
                                            }));
                setDiscos(albumsArr);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
                throw error;
            }
        };

        obtenerDatos();
    }, [id]);

    return (
        <View>
            <TouchableOpacity style={styles.buttonBuscar} onPress={()=>navigation.navigate('buscar')}>
                <Text style={styles.text_button}>Buscar Artista</Text>
            </TouchableOpacity>
            <FlatList data={discos}
                        renderItem={({item})=>(
                            <View style={styles.container}>
                                <View style={styles.imagenContainer}>
                                    <TouchableOpacity onPress={()=>navigation.navigate('detalleDisco',{...item})}>
                                        <Image style={styles.imagen} source={{uri:item.strAlbumThumb}}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.textosContainer}>
                                    <Text style={styles.text}>Album: </Text>
                                    <Text style={styles.text2}>{item.strAlbum} </Text>
                                    <Text style={styles.text2}>{item.intYearReleased}</Text>
                                </View>
                            </View>
                        )}
            />
        </View>
    );
};

export default Discos;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
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
    buttonBuscar:{
        backgroundColor: '#8D908C',
        padding: 5,
        borderRadius: 5,
        margin:10,
        alignItems:'center',
    },
    text_button:{
        color:'white',
        fontSize:20,
    },
    imagenContainer: {
        marginRight: 10,
      },
      imagen: {
        width: 80,
        height: 80,
        borderRadius: 50,
      },
      textosContainer: {
        margin:5,
      },
      text:{
          fontWeight: 'bold',
          fontSize:18,
          color:'black',
      },
      text2:{
        fontSize:16,
        color:'black',
      },
  });
