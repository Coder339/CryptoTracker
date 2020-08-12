import React,{useState} from 'react'
import { StyleSheet, Text, View, Button,TextInput } from 'react-native'

export default function AddCrypto({ navigation,route }) {
    const [currency,setCurrency] = useState('')

    return (
        <View style={styles.screen}>
            <Text style={{marginRight:160}}> Add Cryptocurrency</Text>
            <TextInput 
                style={styles.input} 
                placeholder='  use a name string or symbol'
                onChangeText={setCurrency}
                value={currency}
                
            />
            <Button title='Add Cryptocurrency' onPress={() => {navigation.navigate('Home',{currency:currency})}}/>
        
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    input: {
        // borderColor: '',
        borderWidth: 0.3,
        width: 260,
        height:37,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        fontSize:16
    },
})
