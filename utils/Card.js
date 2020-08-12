import React from 'react';

import { Text, View, StyleSheet } from 'react-native';


const Card = (props) => {
    return (
        <View style={{...styles.card, ...props.style,}}>{props.children}</View>

    );
    
    
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        // borderBottomLeftRadius: 10,
        // borderBottomRightRadius: 10,
    }
})

export default Card;