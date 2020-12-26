import React,{useState} from 'react';
import { StyleSheet, Dimensions, Image, ImageBackground, Platform,View,ScrollView} from 'react-native';
import { Block, theme, Button as GaButton } from 'galio-framework';

import { Button} from '../components';
import { Images, nowTheme } from '../constants';
import { HeaderHeight } from '../constants/utils';
// import { Card,Icon } from '../components/';
import { LinearGradient } from 'expo-linear-gradient';
import {Card,Icon,Text} from 'galio-framework';
import { Provider ,useDispatch, useSelector} from 'react-redux';
import {store} from '../plugin/redux/store'
import {requestActions} from '../action/requestActions';
import Articles from './Articles';
import { IconButton } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
const { height, width } = Dimensions.get('screen');

function location_single(props){
    const [data,setData] = useState({});
    useFocusEffect((data)=>{
        console.log("hehe",props);
        
        data = store.getState().locationReducer.data[props.route.params.locationId-1];
        console.log(data);
        setData(data);
    });
    const{navigation} = props;
    function renderSingle(){
        var test = new Date('1970','0','1');
        // test.setSeconds(data.openingTime);
        
        var date = new Date(data.opengingTime)
        let openingtime = date.getTime();
        console.log("time",test,data.openingTime,date,openingtime);
        var x;
        let str = "";
        console.log(str);
        for (x in data.sportsAvaliable){
          str += data.sportsAvaliable[x] + " , ";
          if (x >= 3)
          break;
        }
        console.log(str);
        return(
            <ImageBackground
            source={require('../assets/imgs/ball.jpeg')}
            style={{ flex: 1, height: height, width, zIndex: 1 }}
            >
            <Block style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }} >
                <Card style={styles.cardsSelena}>
                
                    
                <Text center bold size={16} color="#d9dadb" style={{marginTop: 12}}>
                      Name:{data.name}
                    </Text>
                    <Text center bold size={16} color="#d9dadb" style={{marginTop: 12}}>
                      district:{data.district2+" - "+data.district}
                    </Text>
                    <Text center bold size={16} color="#d9dadb" style={{marginTop: 12}}>
                      VenueType:{data.destinationType}
                    </Text>
                    <Text center bold size={16} color="#d9dadb" style={{marginTop: 12}}>
                      Sports: {str}
                    </Text>
                    <Text center bold size={16} color="#d9dadb" style={{marginTop: 12}}>
                      Opening Hours: {"09:00"}
                    </Text>
                    <Text center bold size={16} color="#d9dadb" style={{marginTop: 12}}>
                        Closing Hours: {"23:00"}
                    </Text>
                    <Text center bold size={16} color="#d9dadb" style={{marginTop: 12}}>
                      
                    </Text>
                    <Text center bold size={16} color="#d9dadb" style={{marginTop: 12}}>
                      
                    </Text>
                    
                {/* <Text>
                    Title:{data.title}
                </Text>
                <Text>
                Description:{data.description}
                </Text>
                <Text>
                Sport:{data.sport}    
                </Text>
                <Text>
                requiredNum:{data.requiredNum}
                </Text>
                <Text>
                Destination: {data.destination}
                </Text>
                <Text>
                Time: {data.timeInterval}
                </Text> */}
              </Card>
              <Button color="success" round style={styles.createButton} onPress={() => navigation.goBack()}>
                              
                              <Text
                              style={{ fontFamily: 'montserrat-bold' }}
                              size={14}
                              color={nowTheme.COLORS.WHITE}
                              >
                              Back
                              </Text>
                          </Button> 
                          <Block
                    row
                    space="between"
                  >
                    {/* <Text bold size={16} color="#525F7F" style={{marginTop: 12}}>
                      Album
                    </Text>
                    <Button
                      small
                      color="transparent"
                      textStyle={{ color: "#5E72E4", fontSize: 12, marginLeft: 24 }}
                    >
                      View all
                    </Button> */}
                  </Block>

                  <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                    <Block row space="between" center style={{ flexWrap: "wrap" }}>
                        <Text>
                            yo
                        </Text>
                    </Block>
                    <Block row space="between" center style={{ flexWrap: "wrap" }}>
                    <Text>
                            yo
                        </Text>
                    </Block>
                    <Block row space="between" center style={{ flexWrap: "wrap" }}>
                    <Text>
                            yo
                        </Text>
                    </Block>
                    </Block>
            </Block>
            </ImageBackground>
        )
    }
    return (
            <Block flex>
              <ScrollView showsVerticalScrollIndicator={false}>{renderSingle()}</ScrollView>
            </Block>
    )
}

const styles = StyleSheet.create({

    container:{
      flex:1,
      // marginTop:'65%',
      
    },
    gradient:{
      flex:1
    },
    cardSelena:{
      borderColor:'#fff',
      padding:'15%',
      borderRadius:450,
      marginLeft:'32%',
      marginRight:'32%',
      marginTop:'11%',
      marginBottom:'2%',
      backgroundColor:'#fff'
    },
    textSelena:{
      fontSize:29,
      fontWeight:'bold',
      alignSelf:'center',
      color:'#fff',
      
    },
    designer:{
      color:'#00d8ff',
      alignSelf:'center',
      fontSize:20,
      fontWeight:'500',
      marginTop:'1%',
      
    },
    cards12:{
      flexDirection:'row',
      justifyContent:'space-around',
      
    },
    cards1:{
      // paddingBottom:'25%',
     
      paddingLeft:'16%',
      paddingRight:'16%',
      backgroundColor:'transparent',
      borderColor:'transparent',
      
    },

    cards2:{
      // paddingBottom:'25%',
      // marginTop:'-1%',
      
      paddingLeft:'16%',
      paddingRight:'16%',
      backgroundColor:'transparent',
      borderColor:'transparent',
      
      
    },
    cards34:{
      flexDirection:'row',
      justifyContent:'space-around',
      // marginTop:'12%'
    },
    cards3:{
      // paddingBottom:'35%',
      // marginTop:'2%',
      paddingLeft:'16%',
      paddingRight:'16%',
      backgroundColor:'transparent',
      borderColor:'transparent',
      
    }, 
    cards4:{
      // paddingTop:'20%',
      // marginTop:'2%',
      paddingLeft:'16%',
      paddingRight:'16%',
      backgroundColor:'transparent',
      borderColor:'transparent',
      
    },
    friendsView:{
      marginTop:'1%',
      paddingBottom:'5%'
    },
    friends:{
      borderRadius:100,
      alignSelf:'center',
      // marginTop:'4%',
    },
    imageSS:{
      alignSelf:'center',
      marginTop:'20%',
      marginBottom:'5%',
      // height:'50%',
      // width:'25%',
      borderRadius:50
    },
    icon1:{
    //   // marginTop:'-45%',
      alignSelf:'center',
      paddingTop:'10%',
      

    },
    textNr1:{
      color:'#fff',
      fontWeight:'bold',
      fontSize:20,
      alignSelf:'center'
    },
    Followers:{
      color:'grey',
      alignSelf:'center',
      paddingTop:'1%',
      paddingBottom:'-5%'
    },  
    star:{
      alignSelf:'center',
      paddingTop:'10%'
    },  
    textNr2:{
      color:'#fff',
      fontWeight:'bold',
      fontSize:20,
      alignSelf:'center'
    },
    Collection:{
      color:'grey',
      alignSelf:'center',
      paddingTop:'1%',
      paddingBottom:'-5%'
    },
    heart:{
      alignSelf:'center',
      paddingTop:'10%'
    },  
    textNr3:{
      color:'#fff',
      fontWeight:'bold',
      fontSize:20,
      alignSelf:'center'
    },
    Likes:{
      color:'grey',
      alignSelf:'center',
      paddingTop:'1%',
      paddingBottom:'5%'
    },
    comment:{
      alignSelf:'center',
      paddingTop:'10%'
    },  
    textNr4:{
      color:'#fff',
      fontWeight:'bold',
      fontSize:20,
      alignSelf:'center'
    },  
    Comments:{
      color:'grey',
      alignSelf:'center',
      paddingTop:'1%',
      paddingBottom:'5%'
    },
    LinearGradient1:{
      borderRadius:5,
      // padding:'5%',
      paddingLeft:'12%',
      paddingRight:'12%',
      paddingBottom:'15%',
      marginLeft:'-2%'
      
    },
    LinearGradient2:{
      borderRadius:5,
      // padding:'5%',
      paddingLeft:'12%',
      paddingRight:'12%',
      paddingBottom:'15%',
      marginLeft:'-2%'
      
    },
    LinearGradient3:{
      borderRadius:5,
      // padding:'5%',
      paddingLeft:'11%',
      paddingRight:'11%',
      paddingBottom:'5%',
      // marginBottom:'3%'
      marginLeft:'-2%'
    },
    LinearGradient4:{
      borderRadius:5,
      // padding:'5%',
      paddingLeft:'11%',
      paddingRight:'11%',
      paddingBottom:'5%',
      marginLeft:'-2%'
     
    },
  });
  
export default location_single;