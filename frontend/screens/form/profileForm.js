import React ,{useState,useEffect} from 'react';
import {useFocusEffect} from "@react-navigation/native";    
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TextInput,
  Alert,
  KeyboardAvoidingView
} from 'react-native';
import { Block, Checkbox, Text, Button as GaButton, theme } from 'galio-framework';

import { Button, Icon, Input } from '../../components';
import { Images, nowTheme } from '../../constants';

// these include function call login action and update state if necessary.
import {createStore, combineReducers} from 'redux';
import { Provider ,useDispatch, useSelector} from 'react-redux';
import {store} from '../../plugin/redux/store'
import { actions } from '../../action/authenticateActions';
// import {loginReducer} from '../plugin/redux/reducer';
const { width, height } = Dimensions.get('screen');

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);

const sports = ['basketball','badminton','football'];
var checkboxList = []
Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
function profileForm(props){
  const { navigation } = props;
  
  const [data,setData] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [more,setMore] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);
  
  
//   const [inputs, setInputs] = useState({
//     username: '',
//     password: ''
// });
// const [submitted, setSubmitted] = useState(false);
// const { username, password } = inputs;
// const loggingIn = useSelector(state => state.authentication.loggingIn);
const dispatch = useDispatch();
// const location = useLocation();
console.log(more);
// reset login status
useFocusEffect(() => {
  // if (isRefresh){
  //   navigation.navigate("Onboarding");
  //   navigation.navigate("Login");
  // }
  // setData({sports:[]});
  var x;
  for(x in sports){
    
    checkboxList.push(
      <Checkbox
      checkboxStyle={{
          // size: 100px,
          borderWidth: 2,
          borderRadius: 3,
          borderColor: '#E3E3E3'
      }}
      onChange={()=>{setData({sports:[sports[x]].concat(data.sports)})}}
      color={nowTheme.COLORS.PRIMARY}
      labelStyle={{
          color: nowTheme.COLORS.HEADER,
          fontFamily: 'montserrat-regular'
      }}
      label={sports[x]}
      />
    )
  }
}, []);

// function handleChange(e) {
//     const { name, value } = e.target;
//     setInputs(inputs => ({ ...inputs, [name]: value }));
// }

  
function renderMore(){
  if(!more){
    return(
      <GaButton
        round
        onlyIcon
        shadowless
        icon="dribbble"
        iconFamily="Font-Awesome"
        onPress={()=>{setMore(true); console.log(more);}}
        iconColor={theme.COLORS.WHITE}
        iconSize={theme.SIZES.BASE * 1.625}
        color={nowTheme.COLORS.DRIBBBLE}
        style={[styles.social, styles.shadow]}
      />
    )
  }else{
    return(
      
        // <Checkbox
        //   checkboxStyle={{
        //       borderWidth: 1,
        //       borderRadius: 2,
        //       borderColor: '#E3E3E3'
        //   }}
        //   color={nowTheme.COLORS.PRIMARY}
        //   labelStyle={{
        //       color: nowTheme.COLORS.HEADER,
        //       fontFamily: 'montserrat-regular'
        //   }}
        //   label={sports[x]}
        //   >
          
        // </Checkbox>
        <Input placeholder="please specify" onChangeText={text=>{console.log(text)}}></Input>
      )
    
  }
}
  
function handleSubmit(e) {
  // e.preventDefault();
  console.log("running handle submit")
  // setSubmitted(true);
  if (username && password) {
      // get return url from location state or default to home page
      // const { from } = location.state || { from: { pathname: "/" } };
      let name = "App";
      console.log(dispatch(actions.login(username, password,navigation,name)).then(xd=>{console.log(xd)}));
      if(store.getState().authenticateReducer.isLoggedIn){
        console.log("truela");
      }else{
        console.log("falsela");
      }
  }
  test()
}
  


    return (

      <DismissKeyboard>
        <Block flex middle>
          <ImageBackground
            source={Images.RegisterBackground}
            style={styles.imageBackgroundContainer}
            imageStyle={styles.imageBackground}
          >
            <Block flex middle>
              <Block style={styles.registerContainer}>
                <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.articles}
                >
                    <Block flex space="evenly">
                    <Block flex={2.4} middle style={styles.socialConnect}>
                        <Block flex={1.0} middle>
                        <Text
                            style={{
                            fontFamily: 'montserrat-regular',
                            textAlign: 'center'
                            }}
                            color="#333"
                            size={24}
                        >
                            Profile Setup
                        </Text>
                        </Block>

                        {/* <Block flex={0.5} row middle space="between" style={{ marginBottom: 18 }}>
                        <GaButton
                            round
                            onlyIcon
                            shadowless
                            icon="twitter"
                            iconFamily="Font-Awesome"
                            iconColor={theme.COLORS.WHITE}
                            iconSize={theme.SIZES.BASE * 1.625}
                            color={nowTheme.COLORS.TWITTER}
                            style={[styles.social, styles.shadow]}
                        />

                        <GaButton
                            round
                            onlyIcon
                            shadowless
                            icon="dribbble"
                            iconFamily="Font-Awesome"
                            iconColor={theme.COLORS.WHITE}
                            iconSize={theme.SIZES.BASE * 1.625}
                            color={nowTheme.COLORS.DRIBBBLE}
                            style={[styles.social, styles.shadow]}
                        />
                        <GaButton
                            round
                            onlyIcon
                            shadowless
                            icon="facebook"
                            iconFamily="Font-Awesome"
                            iconColor={theme.COLORS.WHITE}
                            iconSize={theme.SIZES.BASE * 1.625}
                            color={nowTheme.COLORS.FACEBOOK}
                            style={[styles.social, styles.shadow]}
                        />
                        </Block> */}
                    </Block>
                    
                    <Block flex={1} middle space="between">
                        <Block center flex={0.9}>
                        <Block flex space="between">
                            <Block>
                            <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                                <Input
                                placeholder="Your show name!"
                                onChangeText={text => setData({showName:text})}
                                value = {username}
                                style={styles.inputfield}
                                iconContent={
                                    <Icon
                                    size={16}
                                    color="#ADB5BD"
                                    name="profile-circle"
                                    family="NowExtra"
                                    style={styles.inputIcons}
                                    />
                                }
                                />
                            </Block>
                            <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                                <Input
                                placeholder="Short Words to decribe yrself!"
                                style={styles.inputs}
                                onChangeText={text => setData({selfIntro:text})}
                                value = {password}
                                
                                iconContent={
                                    <Icon
                                    size={16}
                                    color="#ADB5BD"
                                    name="caps-small2x"
                                    family="NowExtra"
                                    style={styles.inputIcons}
                                    />
                                }
                                />
                            </Block>
                            <Block width={width * 0.8}>
                                <Input
                                placeholder="Age"
                                style={styles.inputs}
                                onChangeText={text=>setData({age:parseInt(text)})}
                                iconContent={
                                    <Icon
                                    size={16}
                                    color="#ADB5BD"
                                    name="email-852x"
                                    family="NowExtra"
                                    style={styles.inputIcons}
                                    />
                                }
                                />
                            </Block>
                            {checkboxList}
                            {renderMore()}
                            
                            {/* <Block
                                style={{ marginVertical: theme.SIZES.BASE, marginLeft: 15}}
                                row
                                width={width * 0.75}
                            >
                                <Checkbox
                                checkboxStyle={{
                                    borderWidth: 1,
                                    borderRadius: 2,
                                    borderColor: '#E3E3E3'
                                }}
                                color={nowTheme.COLORS.PRIMARY}
                                labelStyle={{
                                    color: nowTheme.COLORS.HEADER,
                                    fontFamily: 'montserrat-regular'
                                }}
                                label="I agree to the terms and conditions."
                                />
                            </Block> */}
                            </Block>
                            <Block center>
                            <Button color="primary" round style={styles.createButton} onPress={() => navigation.navigate('Profile')}>
                              
                                <Text
                                style={{ fontFamily: 'montserrat-bold' }}
                                size={14}
                                color={nowTheme.COLORS.WHITE}
                                >
                                Finish!
                                </Text>
                            </Button>
                            </Block>
                            {/* <Block center>
                            <Button color="primary" round style={styles.createButton} onPress={() => navigation.goBack()}>
                            <Text
                                style={{ fontFamily: 'montserrat-bold' }}
                                size={14}
                                color={nowTheme.COLORS.WHITE}
                                >
                                Forgot Password
                                </Text>
                                </Button>
                            </Block> */}
                            <Block center>
                            <Button color="primary" round style={styles.createButton} onPress={() => navigation.goBack()}>
                            <Text
                                style={{ fontFamily: 'montserrat-bold' }}
                                size={14}
                                color={nowTheme.COLORS.WHITE}
                                >
                                Back
                                </Text>
                                </Button>
                            </Block>
                        </Block>
                        </Block>
                    </Block>
                    </Block>
                </ScrollView>
              </Block>
            </Block>
          </ImageBackground>
        </Block>
      </DismissKeyboard>
    );
  }


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
  inputfield:{
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
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
    marginHorizontal: 10
  }
});

export default profileForm;

