import React, {useState, useEffect} from 'react'
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native'
import axios from 'axios'

import ComponenteError from './ComponenteError'

const ItemPokemon = ({pokemon}) => {
    //ESTADOS useState
  const [detallePokemon, setDetallePokemon] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const {name, url} = pokemon
  //efectos useEffect

  useEffect(() => {
    async function traerInformacionDetallePokemon(){
      try{
        const response = await axios.get(url)
        setDetallePokemon(response.data)
        setError(false)
      }catch (error){
        console.log(error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    traerInformacionDetallePokemon()
  },[url])

  if(loading){
    return <View>
        <ActivityIndicator size="large" color="#0000ff"/>
    </View>
  }
  
  if (error){
    <ComponenteError mensaje="Ocurrio un error al traer los datos"></ComponenteError>
  }

  return (
    <View style={styles.container}>
        <Image source={{uri: detallePokemon.sprites.front_default}} style={styles.image} />
        <View style={styles.infoContainer}>
            <Text style={styles.name}>{detallePokemon.name}</Text>
            <Text style={styles.id}>ID: {detallePokemon.id}</Text>
        </View>
    </View>
  )

}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    loadingContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    infoContainer:{
        flex: 1
    },
    name:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    id:{
        color: "#555",
        marginTop: 5,
    }
})

export default ItemPokemon