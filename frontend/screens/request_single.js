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
// import {ScrollView} from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('screen');
function request_single(props){
    const [data,setData] = useState({});
    useFocusEffect((data)=>{
        console.log("hahaha",props);
        console.log(store.getState().requestReducer.data.data);
        data = store.getState().requestReducer.data.data[props.route.params.requestId];
        console.log("data is :",data);
        setData(data);
    });
    const{navigation} = props;
    function renderSingle(){
        return(
          <ImageBackground
          source={Images.ProfileBackground}
          style={styles.imageBackgroundContainer}
          imageStyle={styles.imageBackground}
        >
              
            <Block style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }} >
                <Card style={styles.card1}>
                
                    
                    
                    
                    
                <Text center bold size={16} color="#d9dadb" style={{marginTop: 12}}>
                    Title:{data.title}
                </Text>
                <Text center bold size={16} color="#d9dadb" style={{marginTop: 12}}>
                Description:{data.description}
                </Text>
                <Text center bold size={16} color="#d9dadb" style={{marginTop: 12}}>
                Sport:{data.sport}    
                </Text>
                <Text center bold size={16} color="#d9dadb" style={{marginTop: 12}}>
                requiredNum:{data.requiredNum}
                </Text>
                <Text center bold size={16} color="#d9dadb" style={{marginTop: 12}}>
                Destination: {data.destination}
                </Text>
                <Text center bold size={16} color="#d9dadb" style={{marginTop: 12}}>
                Time: {data.timeInterval}
                </Text>
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
                    <Text bold size={16} color="#525F7F" style={{marginTop: 12}}>
                      Album
                    </Text>
                    <Button
                      small
                      color="transparent"
                      textStyle={{ color: "#5E72E4", fontSize: 12, marginLeft: 24 }}
                    >
                      View all
                    </Button>
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
// // export default request_single;
// class request_single extends React.Component {
//     render() {
//       return (

//         <View style={styles.container}>
        
//           <LinearGradient style={styles.gradient} colors={['#61045f', '#20011f',]}>
//             {/*<Card style={styles.cardSelena}></Card>*/}
//           <View>
//             <Image source={require('../assets/imgs/project4.jpg')} 
//             style={styles.imageSS}/>
//           </View>

//             <Text style={styles.textSelena}>Selena Gomez</Text>
//             <Text style={styles.designer}>Designer</Text>
            
            
//             <ScrollView>
//             <View style={{justifyContent:'space-around'}}>
//             <View style={styles.cards12}>
            

//               <Card style={styles.cards2}>
//               <LinearGradient 
//                 style={styles.LinearGradient2} 
//                 start={{ x: 1, y: 1 }}
//                  end={{ x: 0, y: 0 }} 
//                  colors={['#61045f', '#20011f',]}>
           

//               <Icon
//               style={styles.star} 
//               name="stars" 
//               family="MaterialIcons" 
//               color={'#fc408a'} 
//               size={45}         
//               />  
//               <Text h1 style={styles.textNr2}>3252</Text>
//               <Text h1 style={styles.Collection}>Collection</Text>
           
//               </LinearGradient>
//               </Card>
//             </View>

//             <View style={styles.cards34}>
//             <Card style={styles.cards3}>
//             <LinearGradient 
//                 style={styles.LinearGradient3} 
//                 start={{ x: 1, y: 1 }}
//                  end={{ x: 0, y: 0 }} 
//                  colors={['#61045f', '#20011f',]}>
              

//               <Icon
//               style={styles.heart} 
//               name="heart-circle" 
//               family="MaterialCommunityIcons" 
//               color={'red'} 
//               size={45}         
//               />  

//               <Text h1 style={styles.textNr3}>123K</Text>
//               <Text h1 style={styles.Likes}>  Likes you </Text>
              
//               </LinearGradient>
//               </Card>

//               <Card style={styles.cards4}>
//               <LinearGradient 
//               style={styles.LinearGradient4} 
//               start={{ x: 1, y: 1 }}
//                end={{ x: 0, y: 0 }} 
//                colors={['#61045f', '#20011f',]}>
             
              
//               <Icon
//               style={styles.comment} 
//               name="comment-text" 
//               family="MaterialCommunityIcons" 
//               color={'#7a52d1'} 
//               size={45}         
//               />  
//               <Text h1 style={styles.textNr4}>337</Text>
//               <Text h1 style={styles.Comments}>Comments</Text>
             
//               </LinearGradient>
//               </Card>
//             </View>
//             </View>
//             </ScrollView>
            
//             <View style={styles.friendsView}>
//               <Button 
//               size='small'
//               shadowless
//               color='#fc408a'
//               style={styles.friends}
//               onPress={() => this.props.navigation.navigate('Screen1')}>
//               Add to friends</Button>
//             </View>
          
//             </LinearGradient>
//         </View>

        
//         );
//     }
//   }

  const styles = StyleSheet.create({
    imageBackgroundContainer: {
      width: width,
      height: height,
      padding: 0,
      zIndex: 1
    },
    imageBackground: {
      width: width,
      height: height
    },
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
    export default request_single;