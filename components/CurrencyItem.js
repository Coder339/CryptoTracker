import React,{ useState} from 'react';
import Colors from '../constants/colors'
import { StyleSheet, Text, View,Button,Image,TouchableOpacity,ScrollView,FlatList,Alert } from 'react-native'

import Card from '../utils/Card';
import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';



function CurrencyItem(props){
   const key = props.key;
   
   let icon;
   if (props.todo.percent.toFixed(2) < 0){
       icon='trending-down'
   }
   else{
       icon='trending-up'
   }

   const removeHandler = (id) => {
        Alert.alert('Do you want to Delete this item?','You are good to go',
        [   
            { text: 'No',style: 'destructive',onPress: props.navigation.navigate('Home')},
            { text: 'Yes',style: 'destructive',onPress: props.navigation.navigate('Home',{id:id})}
        
        ])
        return
   }

   return(

    <View style={{padding:10,}}>
        <Card style={{width:340,}}>

            <TouchableOpacity style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center'}}
                    onPress={()=>{removeHandler(key)}}>
                <View style={{
                        flexDirection:"row",
                        alignItems:'center',
                        width:50}}>
                    <Image
                        source={props.todo.image} 
                        style={{width:50,
                                height:50,
                                marginLeft:15,
                                borderRadius:40,
                                backgroundColor:'#fff'}}
                    />
                </View>
                <View>

                    <Text style={{
                            fontSize:25,
                            marginBottom:2,
                            color:'#17baa1'}}>{props.todo.name} 
                    </Text>
                    <Text style={{
                            fontSize:20,
                            color:'#000'}}>{props.todo.symbol}
                    </Text>
                </View>
                <View>
                   <Text>Price: {props.todo.price.toFixed(2)}</Text>
                   <View>
                        <Text>Percent: <MaterialCommunityIcons color='red' name={icon} size={15}/> {props.todo.percent.toFixed(2)}
                        </Text>
                   </View>
                </View>
            </TouchableOpacity>

        </Card>
    </View>
   )
}

export default CurrencyItem;