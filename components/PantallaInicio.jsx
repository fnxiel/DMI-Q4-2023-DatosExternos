import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

import axios from 'axios'

import ComponenteError from './ComponenteError';
import ItemPokemon from './ItemPokemon';

export default function PantallaInicio({navigation}) {
    //ESTADOS useState
    const [listadoPokemons, setListadoPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    //efectos useEffect
  
    useEffect(() => {
      async function traerInformacionPokemons(){
        try{
          const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
          setListadoPokemons(response.data.results)
          setError(false)
        }catch (error){
          console.log(error)
          setError(true)
        } finally {
          setLoading(false)
        }
      }
  
      traerInformacionPokemons()
    },[])
  
    //Renders

    return (
      <View style={{flex: 1}}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff"/>
        ) : error ? (
          <ComponenteError mensaje="Ocurrio un error al traer los datos"></ComponenteError>
        ) : (
          <FlatList
          data={listadoPokemons}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
              <TouchableOpacity style={{padding: 10}}
                onPress={() => navigation.navigate("Detalles", {pokemon: item})}
              >
                <ItemPokemon pokemon={item}></ItemPokemon>
              </TouchableOpacity>
          )}>
          </FlatList>
        )}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  