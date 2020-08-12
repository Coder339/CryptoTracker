import React,{ useState,useContext,useEffect } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    TextInput,
    ActivityIndicator,
    ScrollView,
    Keyboard } from 'react-native'

import Colors from '../constants/colors';
import { MaterialCommunityIcons as Icon,Ionicons } from '@expo/vector-icons';
import {AuthContext} from "../utils/Context"; 

export default function Login({props,navigation}) {

    
    const [username, setusername] = useState('')
    const [usernameError,setusernameError] = useState('')
    const [password,setPassword] = useState('')
    const [passError,setpassError] = useState('')
    const [iconName,seticonName] = useState('eye-off')
    const [secureEntry,setsecureEntry] = useState(true)

    const [loading,  setloading] = useState(true)
    
    const { signIn } = useContext(AuthContext);
    
    const usernameHandler = (text) => {
        setusername(text)
    }
    
    const usernameValidator = () => {
        if (username === ''){
            setusernameError(' < Email field can not be empty >')
        }
        else{
            setusernameError('')
        }
    }
    
    const passwordHandler = (text) => {
        setPassword(text)
    }
     
    const passwordValidator = () => {
        if (password === ''){
            setpassError(' < Password field can not be empty >')
        }
        else{
            setpassError('')
        }
    }
    const IconHandler = () =>{
        if (secureEntry){
            seticonName('eye')
        }else{
            seticonName('eye-off')
        }

        setsecureEntry(!secureEntry)
    }


    
    
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 1000);

      }, []);

    if (loading) {
        return <View style={styles.container}>
                  <ActivityIndicator size="large" color="#0000ff" />
               </View>;
      }
    else {
        return (
          <ScrollView style={{}}>
            <View style={styles.screen}>
                <View style={{flex:1,marginVertical:100,}}>
                    <Image
                        source={require('../src/images/login.png')} 
                        style={{width:70,height:70}}
                    />
                </View>
                <View style={{flex:1,alignItems:'center'}}>  
                        <View> 
                            <View style={{flexDirection:'row',marginBottom:5,marginTop:5}}>
                                <Text style={{marginLeft:12}}>Email</Text>
                                <Text style={{color:'red',marginLeft:12}}>{usernameError}</Text>
                            </View>
                            <TextInput 
                                style={styles.input} 
                                placeholder='  abc@example.com'
                                onChangeText={usernameHandler}
                                value={username}
                                onBlur={()=>{usernameValidator()}}
                            />
                        </View>
                        <View style={{marginTop:10}}>
                            <View style={{flexDirection:'row',marginTop:0}}>
                                <Text style={{marginLeft:1}}>Password</Text>
                                <Text style={{color:'red',marginLeft:20}}>{passError}</Text>
                            </View>
                            <View 
                                style={{borderBottomWidth:0.3,
                                        width:260,
                                        marginTop:25,
                                        flexDirection:'row',
                                        justifyContent:'space-between'}}
                                >
                                <TextInput 
                                    secureTextEntry={secureEntry}
                                    placeholder='  Enter Your Password...'
                                    onChangeText={passwordHandler}
                                    value={password}
                                    onBlur={()=>{passwordValidator()}}
                                />
                                <TouchableOpacity 
                                    onPress={()=>IconHandler()}>
                                    <Icon 
                                    name={iconName} size={20}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>
                <View style={{flex:1,alignItems:'center',marginVertical:50}}>
                    
                    <View style={styles.button}>
                        <Button 
                            color={Colors.primary}
                            title='login' 
                            onPress={() => signIn(username,password)}
                        />
                    </View>
                    
                </View>
                
             
            </View>      
         </ScrollView>
        
        )
    }
}

const styles=StyleSheet.create({
    screen:{
        flex: 1, 
        alignItems:'center', 
        justifyContent:'center', 
        backgroundColor: '#fff'
    },
    input: {
        // borderColor: '',
        borderBottomWidth: 0.3,
        width: 260,
        height:37,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        fontSize:16
    },
    button:{
        marginVertical:40,
        width:220,
        justifyContent:'space-evenly',
        
    },
    container:{
        flex:1,
        justifyContent:'center'
    }
})