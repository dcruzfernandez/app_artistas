import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Artista from '../interfaces/Artista';

const DetalleArtista = ({route, navigation}:NativeStackScreenProps<any,any>) => {
    const {idArtist,strArtist,strGenre,strBiographyES,strStyle,strArtistThumb} =  route.params as Artista;
    return (
        <View style={styles.contenedor}>
            <Image
                style={styles.imagen}
                source={{uri:strArtistThumb}}
            />
            <Text style={styles.titulo}>Nombre: {strArtist}</Text>
            <Text style={styles.titulo2}>Estilo: {strStyle}</Text>
            <Text style={styles.titulo2}>Género: {strGenre}</Text>
            <ScrollView style={styles.scroll}>
                <Text>Biografía: {strBiographyES}</Text>
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('discos',{id:idArtist})}>
                <Text style={styles.text_button}>Discografía</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={()=>navigation.navigate('buscar')}>
                <Text style={styles.text_button}>Buscar Artista</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DetalleArtista;

const styles = StyleSheet.create({
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
