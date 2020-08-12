import React,{useContext,useState,useEffect,useCallback} from 'react'
import Colors from '../constants/colors'
import { StyleSheet, Text, View,Button,Image,TouchableOpacity,ScrollView,FlatList } from 'react-native'
import {AuthContext} from "../utils/Context"; 
import Card from '../utils/Card';
import CurrencyItem from '../components/CurrencyItem';
import axios from 'axios';

export default function Home({route,navigation}) {
    
    let currency = route.params?.currency

    let img;
    const { signOut } = useContext(AuthContext);
    const [cryptoList,setcryptoList] = useState([])


    if (currency === 'BTC' || currency ==='bitcoin'){

        getBtcApi()
        
    }
    if (currency === 'ETH' || currency ==='ethereum'){
        console.log('eth')
        getEthApi()
        
    }
    if (currency === 'XRP' || currency ==='xrp'){
        console.log('xrp')
        getXrpApi()
        
    }
    if (currency === 'LTC' || currency ==='litcoin'){
        console.log('ltc')
        getLtcApi()
        
    }
    
    useEffect(() => {

        setcryptoList(cryptoList.filter((item,index) => index!==id))

    }, [])
    

    async function getBtcApi() {
        console.log('vij')
        return await axios.get('https://data.messari.io/api/v1/assets/btc/metrics')
        .then(res => {
            img=require('../src/images/bitcoin.png')
            setcryptoList([...cryptoList,{name: res.data.data.name,
                                            symbol: res.data.data.symbol,
                                            image: img,
                                            price: res.data.data.market_data.price_usd,
                                            percent: res.data.data.market_data.percent_change_usd_last_24_hours}])})
        .catch(error=>console.log(error))

        
    }
    async function getEthApi(){

        return axios.get('https://data.messari.io/api/v1/assets/eth/metrics')
        .then(res => {
            img=require('../src/images/ethereum.png')
            setcryptoList([...cryptoList,{name: res.data.data.name,
                                            symbol: res.data.data.symbol,
                                            image: img,
                                            price: res.data.data.market_data.price_usd,
                                            percent: res.data.data.market_data.percent_change_usd_last_24_hours}])})
        .catch(error=>console.log(error))
        
        
 
    }
    

    async function getXrpApi(){
        return axios.get('https://data.messari.io/api/v1/assets/xrp/metrics')
        .then(res => {
            
            img=require('../src/images/xrp.png')
            setcryptoList([...cryptoList,{name: res.data.data.name,
                                            symbol: res.data.data.symbol,
                                            image: img,
                                            price: res.data.data.market_data.price_usd,
                                            percent: res.data.data.market_data.percent_change_usd_last_24_hours}])})
        .catch(error=>console.log(error))
 
    }
  

    async function getLtcApi(){

        return await axios.get('https://data.messari.io/api/v1/assets/ltc/metrics')
        .then(res => {
            img=require('../src/images/ltc.png')
            setcryptoList([...cryptoList,{name: res.data.data.name,
                                            symbol: res.data.data.symbol,
                                            image: image,
                                            price: res.data.data.market_data.price_usd,
                                            percent: res.data.data.market_data.percent_change_usd_last_24_hours}])})
        .catch(error=>console.log(error))
 
    }
    

    const Item = cryptoList.map((todo,index) => 

        <CurrencyItem key={index} todo={todo} navigation={navigation}/>                                               
    
    )

    // const Item1 =  <CurrencyItem todo={cryptoBit}/>
    // const Item2 =  <CurrencyItem todo={cryptoEth}/>
    // const Item3 =  <CurrencyItem todo={cryptoXrp}/>
    // const Item4 =  <CurrencyItem todo={cryptoLtc}/>
                                    
    // const [cryptoList,setCryptoList] = useState([])  
    // const Item = cryptoList.map((todo,index) => 
    //                             todo
                                    
    //                             )

    return (
        <View style={styles.screen}>
            <View style={{ 
              flex: 1.2,
              flexDirection:'row',
              marginTop:25,
              borderBottomWidth:0.3,
              backgroundColor:'#000',
              width:'100%',
              alignItems:'center'}}>
            <Image
                source={require('../src/images/elon.jpg')} 
                style={{width:70,
                        height:70,
                        marginLeft:30,
                        borderRadius:40}}
            />
            <View style={{alignItems:'flex-start',marginTop:10}}>
                    
                    <View style={{marginLeft:5}}>
                        <Text 
                            style={{fontSize:21,color:'#fff',marginLeft:100}}> CRYPTO TRACKER
                        </Text>
                    </View>
                    <View style={{alignItems:'flex-end'}}>
                        <View style={{borderBottomWidth:1,width:250,borderColor:'#fff'}}>
                        </View>
                    </View>
                    <Text style={{ margin: 10,color:'#fff' }}>Last Added : {currency}</Text>
                </View>
                
            
        </View>

        <View style={{ flex:5,alignItems:'center',backgroundColor:'#fff',width:'100%'}}>
              
                <ScrollView>
                    <View>
                        {Item}
                    </View>

                </ScrollView>
              
        </View>
            <View style={{position:'absolute',left:10,bottom:10,borderRadius:30}}>
                <Button title='logout' onPress={() => signOut()}/>
            </View>
            
                <TouchableOpacity style={{position:'absolute',
                                        right:10,
                                        bottom:10,
                                        width:60,
                                        height:60,
                                        borderRadius:40,
                                        backgroundColor:'#17baa1',
                                        justifyContent:'center',
                                        alignItems:'center'}} 
                                    onPress={() => {navigation.navigate('AddCrypto',)}}>
                                        <Text style={{
                                              fontSize:30,
                                              marginRight:5,
                                              color:'#fff'}}> +
                                        </Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    info:{
        flexDirection:'row',
        backgroundColor:'#17baa1',
        height:60,
        width:400,
        justifyContent:'space-around',
        alignItems:'center',
        borderColor:'#fff',
        borderBottomWidth:0.3,
      }
})
