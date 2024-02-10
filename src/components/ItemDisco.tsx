import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import Album from '../interfaces/Album';
interface PropsItem extends NativeStackScreenProps<any,any>{
    album:Album;
}
export const ItemDisco = ({album,navigation}:PropsItem) => {
    const {strAlbumThumb,strAlbum, intYearReleased} = album;
    return (
        <View style={styles.container}>
            <View style={styles.imagenContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('detalleDisco',{...album})}>
                    <Image style={styles.imagen} source={{uri:strAlbumThumb}}/>
                </TouchableOpacity>
            </View>
            <View style={styles.textosContainer}>
                <Text style={styles.text}>Album: </Text>
                <Text style={styles.text2}>{strAlbum} </Text>
                <Text style={styles.text2}>{intYearReleased}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
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
