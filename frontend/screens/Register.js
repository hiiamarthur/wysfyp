import React ,{useState}from 'react';
import { Alert, TextInput } from 'react-native';

import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView
} from 'react-native';
import { Block, Checkbox, Text, Button as GaButton, theme } from 'galio-framework';

import { Button, Icon, Input } from '../components';
import { Images, nowTheme } from '../constants';
import { useDispatch } from 'react-redux';
import { authenticateActions } from '../action/authenticateActions';

const { width, height } = Dimensions.get('screen');

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);
function validate(data,type){
  let result;
  switch(type){
    case username:
      if(!data){
        result = {
          msg: "username cannot be empty!"
        }
      }
  }
}
function Register(props){

    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [borderColor, setColor] = useState({username:'#E3E3E3',email:'#E3E3E3',password:'#E3E3E3'});
    const [checkError ,setCheckError ] = useState([]);
    const [checkSelected,setCheckSelected] = useState([]);
    const [checkbox,setCheckBox] = useState(false);
    console.log(borderColor);
    
    // function checkError(con,text){
    //   if(con ){
    //     var x;
    //     for (x in borderColor){
    //       if(x == text){
    //         borderColor[x] = '#ff0000';
    //       }
    //     }
    //     setColor(borderColor);
    //     setError(true);
    //     // Alert.alert("Do not leave it blank!");
    //   }else{
    //     var x;
    //     for (x in borderColor){
    //       if(x == text){
    //         borderColor[x] = '#E3E3E3';
    //       }
    //     }
    //     setError(false);
        
    //   }
    // }
      

      
  
    const [email, setEmail] = useState("");
    const { navigation } = props;

    const Results = () => (
      <div id="results" className="search-results">
        Some Results
      </div>
    )
    let inquireInfo;
    async function checkInfo(text){
      let trueObject;
      let falseObject;
      let regex;
      let regexError;
      switch (text){
        case "username":
          inquireInfo = username;
          trueObject = {errorFocus1:true};
          falseObject = {errorFocus1:false};
          regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
          regexError = "username must satisfied with following requirement:\nAt least one letter and one number.\n2.longer than 8 digit.";
          break;
        case "email":
          inquireInfo = email;
          trueObject = {errorFocus2:true};
          falseObject = {errorFocus2:false};
          regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          regexError = "it is an invalid email format please try again!";
          break;
        case "password":
          inquireInfo = password;
          trueObject = {errorFocus3:true};
          falseObject = {errorFocus3:false};
          regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
          regexError = "password must satisfied with following requirement:\n1.At lesat one letter and one umber and one special character.\n2.longer than 8 digit.";
          break;
        default:
          break;
      }
      if(!regex.test(inquireInfo)){
        Alert.alert(`${text} Error:`,regexError);
        setCheckError(trueObject);
      }
      else if(inquireInfo.length > 0){
        await authenticateActions.getAccountInfo(inquireInfo,text)
        .then(async result=>{
          console.log("result ",result);
          if(!result.status){
            setCheckError(trueObject);
          }else{
            setCheckError(falseObject);
          }
        }).catch(err=>{
          console.error(err);
        });
        
      }else{
        Alert.alert(`${text} Error:`,"field cannot be empty!");
        setCheckError(trueObject);
      }
      
    }
    function handleSubmit(e) {
      // e.preventDefault();
      console.log("running handle submit")
      // setSubmitted(true);
      console.log(username,password,email);
      if(!checkError.errorFocus1&&!checkError.errorFocus2&&!checkError.errorFocus3){
        if(checkbox){
          Alert.alert("Argeement error","please agree to the terms and condition first");
        }else{
          dispatch(authenticateActions.register(username, password,email  ));
        }
        
      }
      else{
        Alert.alert("Register Error","Make Appeant Change first");
          // get return url from location state or default to home page
          // const { from } = location.state || { from: { pathname: "/" } };
          
      }
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
                    <Block flex={0.4} middle style={styles.socialConnect}>
                      <Block flex={0.5} middle>
                        <Text
                          style={{
                            fontFamily: 'montserrat-regular',
                            textAlign: 'center'
                          }}
                          color="#333"
                          size={24}
                        >
                          Register
                        </Text>
                      </Block>

                      <Block flex={0.5} row middle space="between" style={{ marginBottom: 18 }}>
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
                      </Block>
                    </Block>
                    <Block flex={0.1} middle>
                      <Text
                        style={{
                          fontFamily: 'montserrat-regular',
                          textAlign: 'center'
                        }}
                        muted
                        size={16}
                      >
                        or be classical
                      </Text>
                    </Block>
                    <Block flex={1} middle space="between">
                      <Block center flex={0.9}>
                        <Block flex space="between">
                          <Block>
                            <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                              <Input 
                                // primary={checkSelected.primaryFocus2}
                                error={checkError.errorFocus1}
                                placeholder="Username"
                                sstyle={
                                  {borderWidth: 1,
                                  borderColor: borderColor.username,
                                  borderRadius: 21.5}
                                }
                                onFocus = {() => setCheckError({errorFocus1: false})}
                                onBlur={function(){
                                  checkInfo('username');
                                  
                                }}
                                onChangeText={text => setUsername(text)}
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
                            {/* { showResults ? <Results /> : null } */}
                            <Block width={width * 0.8}>
                              <Input
                                placeholder="Email"
              
                                error={checkError.errorFocus2}
                                
                                sstyle={
                                  {borderWidth: 1,
                                  borderColor: borderColor.username,
                                  borderRadius: 21.5}
                                }
                                onFocus = {() => setCheckError({errorFocus2: false})}
                                onBlur={event=>checkInfo("email")}
                                onChangeText={text => setEmail(text)}
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

                            <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                              <Input
                                placeholder="Password"
                                sstyle={
                                  {borderWidth: 1,
                                  borderColor: borderColor.password,
                                  borderRadius: 21.5}
                                }
                                // onBlur={event=>checkInfo("password")}
                                
                                error={checkError.errorFocus3}
                                
                                sstyle={
                                  {borderWidth: 1,
                                  borderColor: borderColor.username,
                                  borderRadius: 21.5}
                                }
                                onFocus = {() => setCheckError({errorFocus3: false})}
                                onBlur={function(){
                                  checkInfo('password');
                                  
                                }}
                                
                              
                                onChangeText={text => setPassword(text)}
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
                            <Block
                              style={{ marginVertical: theme.SIZES.BASE, marginLeft: 15}}
                              row
                              width={width * 0.75}
                            >
                              <Checkbox
                                onChange={()=>{setCheckBox(checkbox?false:true)}}
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
                            </Block>
                          </Block>
                          <Block center>
                            <Button color="primary" round style={styles.createButton} onPress={() => handleSubmit()}>
                              <Text
                                style={{ fontFamily: 'montserrat-bold' }}
                                size={14}
                                color={nowTheme.COLORS.WHITE}
                              >
                                Get Started
                              </Text>
                            </Button>
                          </Block>
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

export default Register;
