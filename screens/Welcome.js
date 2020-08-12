import React from 'react'
import { 
    View, 
    Text, 
    Image,
    StyleSheet,
    TouchableOpacity,
    } from 'react-native';
import Colors from '../constants/colors';
import LoginSvg from "../utils/Svgs/LoginSvg"

export default function Welcome({navigation}) {
    // const {navigation} = props.navigation;
    
    return (
        <View style={{flex:1,alignItems:'center',backgroundColor: "#fff"}}>
            
            
            <View style={{flex:1,marginTop:100}}>
                <LoginSvg/>
            </View>
            <View 
                style={{flex:1,
                        flexDirection:'row',
                        marginBottom:100}}
                >
                <TouchableOpacity 
                        style={styles.fullWidthButton}
                        activeOpacity={.9}
                        onPress={()=>navigation.navigate('SignIn')}>
                        <View style={{flexDirection:"row",justifyContent:'space-between',padding:10}}>
                             <Image 
                              source={require('../src/images/send.png')} 
                              style={{width:30,height:30}}
                              />
                              <Text 
                              style={{color:Colors.fav2,fontSize:22}}>Get Started
                              </Text>
                        </View>
                        
                </TouchableOpacity>
            </View>
             
        </View>
    )
}

const styles=StyleSheet.create({
    button:{
        flex:1,
        width:200,
        justifyContent:'space-evenly',
        marginVertical:10,
    },
    fullWidthButton: {
        // backgroundColor: 'blue',
        height:42,
        width:400,
        opacity:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:200
      },
})