import React from "react";
import {StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Text,
  View,
  ScrollView,
  FlatList
} from "react-native";
// import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, theme, Button as GaButton } from "galio-framework";

// import { Card, Button } from "../components";
import articles from "../constants/articles";
// import { Images, nowTheme } from '../constants';
// const { width } = Dimensions.get("screen");

import { Button, Icon, Input } from '../components';
import { Images, nowTheme } from '../constants';
import { useDispatch } from 'react-redux';
import { authenticateActions } from '../action/authenticateActions';
import ScrollToTop from 'react-native-scroll-to-top';
import { useScrollToTop } from '@react-navigation/native';


import Constants, { AppOwnership } from "expo-constants";
import {Asset} from "expo-asset"
const { manifest,platform ,experienceUrl,intentUri,appOwnership} = Constants;
import {getIpAddressAsync,getMacAddressAsync,getNetworkStateAsync} from "expo-network";

const { width, height } = Dimensions.get('screen');
// import Carousel from 'react-native-snap-carousel';
// import { StyleSheet, Image, View, Dimensions } from 'react-native';
 
// const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;
 
const images = [
    "../assets/imgs/teamUp1.jpg",
    "../assets/imgs/teamUp2.jpg",
    "../assets/splash_bu.png"
];


import Carousel from 'react-native-snap-carousel';

class Home extends React.Component {
    
 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          
          {
              title:"Who we are?",
              text: "Team Up! Meet Up!",
          },
          {
              title:"Why you are?",
              text: "Love Sport? Being Bored?",
          },
          {
              title:"Where they are?",
              text: "Take our app, make request.",
          },
          // {
          //     title:"Item 5",
          //     text: "Text 5",
          // },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <ImageBackground
              resizeMode={'stretch'} // or cover
              style={{flex: 1}} // must be passed from the parent, the number may vary depending upon your screen size
              source={require('../assets/imgs/teamUp2.jpg')}
            >
          <View style={{
              
              // backgroundColor:'floralwhite',
              borderRadius: 5,
              height: 250,
              padding: 30,
              paddingTop:130,
              marginLeft: 60,
              marginRight: 25, }}>
            
            <Text style={{fontSize: 25,color: '#FFFFFF'}}>{item.title}</Text>
            <Text style={{color: '#FFFFFF'}}>{item.text}</Text>
          </View>
          </ImageBackground>

        )
    }
    ItemView = ({ item }) => {
      return (
        // Flat List Item
        <Text style={styles.itemStyle} onPress={() => getItem(item)}>
          {item.id}
          {'.'}
          {item.title.toUpperCase()}
        </Text>
      );
    };
  
    ItemSeparatorView = () => {
      return (
        // Flat List Item Separator
        <View
          style={{
            height: 0.5,
            width: '100%',
            backgroundColor: '#C8C8C8',
          }}
        />
      );
    };
    handleUpButton = () => {
      //OnCLick of Up button we scrolled the list to top
      this.listViewRef.scrollToOffset({ offset: 0, animated: true });
    };
  
    handleDownButton = () => {
      //OnCLick of down button we scrolled the list to bottom
      console.log("xd");
      console.log((manifest.packagerOpts.hostType === `lan`) && manifest.packagerOpts.dev);
      // this.listViewRef.scrollToEnd({ animated: true });
    };
    render() {
        return (
          // <SafeAreaView style={{flex: 1, backgroundColor:'rebeccapurple', paddingTop: 50, }}>
          <View>
          <ScrollView ref={this.props.scrollRef}
              showsVerticalScrollIndicator={false}
              // contentContainerStyle={styles.articles}
            >
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={400}
                  sliderHeight={1000}
                  itemHeight={100}
                  itemWidth={350}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
            <Block flex={1.0} middle>
              {/* <Text
                  style={{
                    fontSize:50,
                  // fontFamily: 'montserrat-regular',
                  textAlign: 'center'
                  }}
                  color="#333"
                  size={24}
              >
                  Easy 4 steps TO ENJOY our app!
              </Text> */}
              </Block>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
              <Image  source={require('../assets/imgs/graphic/1.png')} style={styles.image}/>
            </View>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
            <Image  source={require('../assets/imgs/graphic/2.png')} style={styles.image}/>
            </View>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
            <Image  source={require('../assets/imgs/graphic/4.png')} style={styles.image}/>
            </View>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
            <Image  source={require('../assets/imgs/graphic/3.png')} style={styles.image}/>
            </View>
            
              <Block flex={0.5} row middle space="between" style={{ marginBottom: 18 }}>
                        
               {/* <FlatList
              data={dataSource}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={this.ItemSeparatorView}
              renderItem={this.ItemView}
              ref={(ref) => {
                listViewRef = ref;
              }}
            />     */}
            
            
            
            
              {/* <Block middle style={{ top: height * 0.15 }}>
              <Image resizeMode="contain" resizeMethod="scale" style={{
                width: 200,
                height: 200,
                borderRadius:100,
                resizeMode: 'stretch',
              }}source={require('../assets/imgs/graphic/1.png')}/>
              </Block> */}
              
            </Block>
          {/* </SafeAreaView> */}
          
          
          
          
          </ScrollView>
          <GaButton
            round
            onlyIcon
            shadowless
            icon="arrow-up"
            iconFamily="Font-Awesome"
            iconColor={theme.COLORS.WHITE}
            iconSize={theme.SIZES.BASE * 1.625}
            color={nowTheme.COLORS.TWITTER}
            style={[styles.social, styles.shadow]}
            onPress={()=>{this.handleDownButton()}}
          />
          </View>
        );
    }
}
// class Home extends React.Component {
//   renderArticles = () => {
//     return (
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.articles}
//       >
//         <Block flex>
//         <Card item={articles[0]} horizontal />
//           <Block flex row>
//             <Card
//               item={articles[1]}
//               style={{ marginRight: theme.SIZES.BASE }}
//             />
//             <Card item={articles[2]} />
//           </Block>
//           <Card item={articles[3]} horizontal />
//           <Card item={articles[4]} full />
//         </Block>
//       </ScrollView>
//     );
//   };

//   render() {
//     return (
//       <Block flex center style={styles.home}>
//         {this.renderArticles()}
//       </Block>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   home: {
//     width: width
//   },
//   articles: {
//     width: width - theme.SIZES.BASE * 2,
//     paddingVertical: theme.SIZES.BASE,
//     paddingHorizontal: 2,
//     fontFamily: 'montserrat-regular'

//   }
// });

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
  registerContainer: {
    marginTop: 55,
    width: width * 0.9,
    height: height < 812 ? height * 0.8 : height * 0.8,
    backgroundColor: nowTheme.COLORS.WHITE,
    borderRadius: 4,
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: 'hidden'
  },
  socialConnect: {
    backgroundColor: nowTheme.COLORS.WHITE
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderColor: "rgba(136, 152, 170, 0.3)"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: '#fff',
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: nowTheme.COLORS.PRIMARY,
    fontWeight: '800',
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12,
    color: nowTheme.COLORS.ICON_INPUT
  },
  inputs: {
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 21.5
  },
  passwordCheck: {
    paddingLeft: 2,
    paddingTop: 6,
    paddingBottom: 15
  },
  createButton: {
    width: width * 0.5,
    marginTop: 15,
    marginBottom: 20
  },
  social: {
    width: 60,  
    height: 60,   
    borderRadius: 30,            
    backgroundColor: '#f28b0c',                                    
    position: 'absolute',                                          
    bottom: 10,                                                    
    right: 10, 
  },
  image: {
    flex: 1,
    width: 250,
    height: 250,
    resizeMode: 'contain' }
});


// export default Home;
export default function(props) {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return <Home {...props} scrollRef={ref} />;
}