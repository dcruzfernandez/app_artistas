import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Album from '../interfaces/Album';
import { ItemDisco } from './ItemDisco';

const Discos = ({route,navigation}:NativeStackScreenProps<any,any>) => {
    const {id} = route.params;
    const [discos,setDiscos] = useState<Album[]>([]);

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
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonBuscar} onPress={()=>navigation.navigate('buscar')}>
                <Text style={styles.text_button}>Buscar Artista</Text>
            </TouchableOpacity>
            <FlatList data={discos}
                        renderItem={({item})=>(
                            <ItemDisco album={item} navigation={navigation} route={route}/>
                        )}
            />
        </View>
    );
};

export default Discos;

const styles = StyleSheet.create({
    container:{
        margin:10,
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
  });
