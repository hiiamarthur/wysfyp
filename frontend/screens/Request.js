import React ,{useState,useEffect} from 'react';
import {useFocusEffect} from "@react-navigation/native";   
import { ScrollView, View,StyleSheet, Image,TouchableOpacity } from 'react-native';
//galio
import { Block, Text, theme ,Button as GaButton} from 'galio-framework';
import { articles, nowTheme } from '../constants/';
import { Button,Card,Icon } from '../components/';

import { Provider ,useDispatch, useSelector} from 'react-redux';
import {store} from '../plugin/redux/store'
import {requestActions} from '../action/requestActions';
import Articles from './Articles';
import { IconButton } from 'react-native-paper';

// {
//   title: 'The time is now for it to be okay to be',
//   image: require("../assets/imgs/project15.jpg"),
//   cta: 'View article',
//   horizontal: true
// },
// {
//   title: '$377',
//   image: require("../assets/imgs/saint-laurent.jpg"),
//   subtitle: 'Black Jacket',
//   description:
//     'The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket.',
//   horizontal: true
// },

function Request(props) {
  const { navigation } = props;
  const dispatch = useDispatch();
  // const [data,useData] = useState([]);
  let articlesArr = []
  let test = "yo"
  var cards = []  
  var dataBody = []
  useEffect(()=>{
    var x;
    // console.log("yoyoyoyo")
    console.log(props);
    
    
    // for (x in data){
    //   console.log(x);
    // }
  })
var x;
var data = []
  console.log("hererere");
  console.log(data = store.getState().requestReducer.data.data);
  // useData(store.getState().requestReducer.data.data);
  console.log(data);
  try{
    if(props.route.params.requestInfo){
      let temp = props.route.params.requestInfo;
        let articleBody = {
          title: temp.title,
          description: temp.description,
          image: require("../assets/imgs/project15.jpg"),
          cta: "See details...",
          horizontal: true,
        }
        articlesArr.push(articleBody);
        cards.push(
          <Card item={articleBody} requestId={4} horizontal />
        )
    }
  }catch{
    console.log("error");
  }
  
    for (x in data){
      console.log("xd")
      let articleBody = {
        title: data[x].title,
        description: data[x].description,
        image: require("../assets/imgs/project15.jpg"),
        cta: "See details...",
        horizontal: true,
      }
      articlesArr.push(articleBody);
      cards.push(
        <Card item={articleBody} requestId={x} horizontal />
      )
    }
    cards.pop(1);
    // for (x in articlesArr){
    //   console.log(store.getState().requestReducer.data.data[x]);
    //   let y = data[x].title;
    //   // let y = [2,3,4,5];
    //   console.log('1.\n',y);
    //   cards.push(
    //     <Card item={articlesArr[x]} requestId={y} horizontal />
    //   )
    // }
  function renderCards(){
    
    return (
      <View>
        <Block flex middle right>
        <GaButton
                round
                onlyIcon
                shadowless
                icon="plus"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={nowTheme.COLORS.FACEBOOK}
                style={[styles.button]}
                onPress={()=>{navigation.navigate('form')}}
              />
          </Block>
      <Block style={styles.container}>
        
      <Text size={16} style={styles.title}>
        Request:
      </Text>
      <Block row center space="between">
      
      
      </Block>
      
        {cards}

        {/* <Card item={articlesArr[0]} horizontal /> */}
        {/* <Card item={articles[0]} horizontal />
        <Block flex row>
          <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
          <Card item={articles[2]} />
        </Block>
        <Block flex row>
          <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
          <Card item={articles[2]} />
        </Block>
        <Card item={articles[3]} horizontal />
        <Card item={articles[5]} full /> */}
        <TouchableOpacity
        activeOpacity={0.7}
          // onPress={clickHandler}
          style={styles.touchableOpacityStyle}>
          {/* <Image
            // FAB using TouchableOpacity with an image
            // For online image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }}
            // For local image
            //source={require('./images/float-add-icon.png')}
            style={styles.floatingButtonStyle}
          />   */}
          </TouchableOpacity>
      </Block>
      </View>
    );
  };

  
  return (
    <Block flex>
      <ScrollView showsVerticalScrollIndicator={false}>{renderCards()}</ScrollView>
    </Block>
  );
  
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.SIZES.BASE
  },
  title: {
    fontFamily: 'montserrat-bold',
    paddingBottom: theme.SIZES.BASE,
    marginTop: 44,
    color: nowTheme.COLORS.HEADER
  },
  touchableOpacityStyle: {
    //Here is the trick
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
 },
 button: {
  width: theme.SIZES.BASE * 3.5,
  height: theme.SIZES.BASE * 3.5,
  borderRadius: theme.SIZES.BASE * 1.75,
  justifyContent: 'center',
  // position: "relative"
},
 floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
});

export default Request;