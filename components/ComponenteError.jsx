import {View, Text, StyleSheet} from 'react-native'

const ComponenteError = ({mensaje}) =>{
    return (
        <View style={styles.container}>
            <Text style={styles.textoError}>
                {mensaje}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoError:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center',
        padding: 20
    }
})

export default ComponenteError