import React ,{useState,useEffect} from 'react';
import {useFocusEffect} from "@react-navigation/native";   
import { ScrollView, StyleSheet, Image,TouchableOpacity } from 'react-native';
//galio
import { Block, Text, theme ,Button as GaButton} from 'galio-framework';
import { articles, nowTheme } from '../constants/';
import { Button,Card,Icon } from '../components/';

import { Provider ,useDispatch, useSelector} from 'react-redux';
import {store} from '../plugin/redux/store'
import {locationActions} from '../action/locationActions';
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

function location(props) {
  const { navigation } = props;
  const dispatch = useDispatch();
  // const [datas,usedata] = useState({});
  const [cards,useCards] = useState([]);
  let articlesArr = [];
  let cardArr = [];
  let datas;
  useEffect(()=>{
    
  })
  console.log(cards.length);
  var x;
    console.log("yoyoyoyo");
    console.log(props);
    if(store.getState().locationReducer.data){
      // usedata(store.getState().locationReducer.data
      datas = store.getState().locationReducer.data;
      console.log(datas);
    for (x in datas){
      if(datas[x].name == undefined)
        continue;
      let articleBody = {
          title: datas[x].district2 + "-"+datas[x].district,
          description: datas[x].name,
          image: require("../assets/imgs/project15.jpg"),
          cta: "See details...",
          horizontal: true,
      }
      

      articlesArr.push(articleBody);
      cardArr.push(
        <Card item={articleBody} locationId={datas[x].destinationID} horizontal />
        )
      
    }
    }
    cardArr.pop(1);
    // let res = locationActions.queryLocation();
    // res.then(res=>{
    //     usedata(res.data.data);
    // })  

    // usedata(res);
    
    // useCards(cardArr);
//   console.log(store.getState().locationReducer.data.data);
//     for (x in store.getState().locationReducer.data.data){
//       console.log("xd")
//       let articleBody = {
//         title: store.getState().locationReducer.data.data[x].title,
//         description: store.getState().locationReducer.data.data[x].description,
//         image: require("../assets/imgs/project15.jpg"),
//         cta: "See details...",
//         horizontal: true,
//       }
//       articlesArr.push(articleBody);
//     }
//     for (x in articlesArr){
//       cards.push(
//         <Card item={articlesArr[x]} locationId={store.getState().locationReducer.data.data[x].locationID} horizontal />
//       )
//     }
  function renderCards(){
    
    return (
      <Block style={styles.container}>
        
      <Text size={16} style={styles.title}>
        location:
      </Text>
      <Block row center space="between">
      <Block flex middle right>
        {/* <GaButton
                round
                onlyIcon
                shadowless
                icon="plus"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={nowTheme.COLORS.FACEBOOK}
                style={[styles.button]}
                onPress={()=>{navigation.navigate('Form')}}
              /> */}
      </Block>
      
      </Block>
      
        {cardArr}

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

export default location;