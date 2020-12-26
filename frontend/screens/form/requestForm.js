import React,{useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
  ImageBackground,
  Alert
} from 'react-native';

import {MyProvider} from '../../plugin/contextApi/provider';
// Galio components
import { Block, Text, Button as GaButton, theme } from 'galio-framework';

// Now UI themed components
import { Images, nowTheme, articles, tabs } from '../../constants';
import { Button, Select, Icon, Input, Header, Switch } from '../../components';

import Img from '../../components/Img';
import { Card } from '../../components';

import {requestActions} from '../../action/requestActions.js';

const { width } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 3;
const sport = ["Basketball","Swimming","Football","Badminton","Tennis","Hiking","Gym","Cycling","Extra"];
const destination = [,"Central","Central and Western","Eastern","Southern","Wan Chai",
"Kowloon City","Kwun Tong","Shum Shui Po","Yau Tsim Mong","Wong Tai Sin","Islands",
"Kwai Tsing","North","Sai Kung","Sha Tin","Tai Po","Tsuen Wan","Tuen Mun","Yuen Long"];
const ageGroup = ["10-17","18-25","26-33","34-41","42-49","50-57","58-65","65+"];

function requestForm(props){
    const {navigation} = props;
    const [checkSelected,setCheckSelected] = useState([]);
    const [switch1,setSwitch1] = useState(true);
    const [switch2,setSwitch2] = useState(false);
    const [requestInfo,setRequestInfo] = useState(
      {
      title: "",
      description: "",
      requiredNum: 0,
      timeInterval: "",
      sport: "",
      destination: "",
      ageGroup: ""
    });
    const [endCreateRequest,setEndCreateRequest] = useState(false);
    async function toRequest(){
      requestActions.query("","","",true);
      await navigation.navigate('Request',{requestInfo:requestInfo});
    }
    if(endCreateRequest){
      console.log("after finished");
      
      toRequest();
    }
    function updateField(fieldName,fieldValue){
      setRequestInfo({
        ...requestInfo,
        [fieldName]: fieldValue
      });
    };
    let xd;
  
    function toggleSwitch(switchId){
        if(switchId == 'switch-1'){
            setSwitch1(!switch1)
        }else{
            setSwitch2(!switch2)
        }
    };
    const handleOnSelect = (index, value) => {
      const { onSelect } = this.props;
  
      this.setState({ value: value });
      onSelect && onSelect(index, value);
    };
  
    function handleCallBack(childData){
      updateField(childData.fieldName,childData.fieldValue);
    }
    function handleSubmit(){
      if(switch1){
        Alert.alert("create chatroom function will bei implmented later stay close!");
        //createChatroom here
      }else if(requestInfo.title =="" || requestInfo.description =="" || requestInfo.timeInterval ==""|| requestInfo.sport ==""|| requestInfo.destination ==""|| requestInfo.ageGroup==""){
        Alert.alert("All fields have to be complete!");
      }else{
        // requestActions.insert(requestInfo).then(async ()=>{
        //   Alert().alert("Completed Adding new Request");
        //   console.log(navigation);
        // });
         
        console.log("finished!");
        setEndCreateRequest(true);
      }
    }
    function renderInputs(){
    
      return (
        <Block flex style={styles.group}>
          <Text size={16} style={styles.title}>
            Information
          </Text>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Input
              primary={checkSelected.primaryFocus1}
              // error={checkSelected.errorFocus1}
              right
              placeholder="Title"
              onFocus = {() => setCheckSelected({primaryFocus1: true})}
              onBlur = {() => {setCheckSelected({primaryFocus1: false}); if(!requestInfo.title)setCheckSelected({errorFocus1: true})}}
              onChangeText= {text=>{updateField("title",text)}}
              // name = "title"
              // value = {requestInfo.title}
              iconContent={<Block />}
              shadowless
            />
          </Block>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Input
              primary={checkSelected.primaryFocus2}
              error={checkSelected.errorFocus2}
              right
              placeholder="Short Description"
              onFocus = {() => setCheckSelected({primaryFocus2: true})}
              onBlur = {() => setCheckSelected({primaryFocus2: false})}
              onChangeText = {text=>{updateField("description",text)}}
              
              iconContent={<Block />}
              shadowless
            />
          </Block>

          
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          
            <Input
              primary={checkSelected.primaryFocus3}
              error={checkSelected.errorFocus3}
              right
              placeholder="Required Number"
              onFocus = {() => setCheckSelected({primaryFocus3: true})}
              onBlur = {() => setCheckSelected({primaryFocus3: false})}
              onChangeText = {text=>{updateField("requiredNum",text)}}
              iconContent={<Block />}
              shadowless
            />
          </Block>
          {/* {/* <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Input
              primary={checkSelected.primaryFocus}
              right
              placeholder="Title"
              onFocus = {() => setCheckSelected({primaryFocus: true})}
              onBlur = {() => setCheckSelected({primaryFocus: false})}
              iconContent={<Block />}
              shadowless
            />
          </Block> */}
          {/* <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Input
              primary={checkSelected.primaryFocus}
              right
              placeholder="Title"
              onFocus = {() => setCheckSelected({primaryFocus: true})}
              onBlur = {() => setCheckSelected({primaryFocus: false})}
              iconContent={<Block />}
              shadowless
            />
          </Block> */}
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Input
              primary={checkSelected.primaryFocus}
              right
              placeholder="Preferred Time"
              onFocus = {() => setCheckSelected({primaryFocus: true})}
              onBlur = {() => setCheckSelected({primaryFocus: false})}
              onChangeText = {text=>{updateField("timeInterval",text)}}
              iconContent={<Block />}
              shadowless
            />
          </Block> 
          <Block style={{ paddingHorizontal: theme.SIZES.BASE*2 }}>
            
            <Select style={{backgroundColor:"#b8b8b8"}} fieldname={"sport"} parentCallBack = {handleCallBack} options={sport} />
            
          </Block>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE*2 }}>
          <Select style={{backgroundColor:"#b8b8b8"}} fieldname={"destination"} parentCallBack = {handleCallBack} options={destination} />
            
          </Block>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE*2 }}>
          <Select style={{backgroundColor:"#b8b8b8"}} fieldname={"ageGroup"} parentCallBack = {handleCallBack} options={ageGroup} />
            
          </Block>
          
            
          {/* <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Input
              success={checkSelected.successFocus}
              right
              shadowless
              placeholder="Success"
              onFocus = {() => setCheckSelected({successFocus: true})}
              onBlur = {() => setCheckSelected({successFocus: false})}
              iconContent={
                <Icon size={11} color={nowTheme.COLORS.SUCCESS} name="check-22x" family="NowExtra" />
              }
            />
          </Block> */}
          {/* <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Input
              error={checkSelected.errorFocus}
              right
              shadowless
              placeholder="Error Input"
              onFocus = {() => setCheckSelected({errorFocus: true})}
              onBlur = {() => setCheckSelected({errorFocus: false})}
              iconContent={
                <Icon
                  size={11}
                  color={nowTheme.COLORS.INPUT_ERROR}
                  name="simple-remove2x"
                  family="NowExtra"
                />
              }
            />
          </Block>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Input
              placeholder="Left Font Awesome Icon"
              shadowless
              iconContent={
                <Icon
                  size={11}
                  style={{ marginRight: 10 }}
                  color={nowTheme.COLORS.ICON}
                  name="zoom-bold2x"
                  family="NowExtra"
                />
              }
            />
          </Block>
  
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Input
              right
              placeholder="Icon Right"
              shadowless
              iconContent={
                <Icon size={11} color={nowTheme.COLORS.ICON} name="single" family="NowExtra" />
              }
            />
          </Block> */}
        </Block>
      );
    };
  
    function renderSwitches(){
      return (
        <Block flex style={styles.group}>
          {/* <Text size={16} style={styles.title}>
            Switches
          </Text> */}
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Block row middle space="between" style={{ marginBottom: theme.SIZES.BASE }}>
              <Text
                style={{ fontFamily: 'montserrat-regular' }}
                size={14}
                color={nowTheme.COLORS.TEXT}
              >
                Create Chatroom now or after first matching? {switch1?"Now":"Later"}
              </Text>
              <Switch
                value={switch1}
                onValueChange={() => toggleSwitch('switch-1')}
              />
            </Block>
            {/* <Block row middle space="between">
              <Text
                style={{ fontFamily: 'montserrat-regular' }}
                size={14}
                color={nowTheme.COLORS.TEXT}
              >
                Switch is OFF
              </Text>
              <Switch
                value={switch2}
                onValueChange={() => toggleSwitch('switch-2')}
              />
            </Block> */}
          </Block>
        </Block>
      );
    };
  
    
  
    
      return (
        <Block style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 30 }}
          >
            
            {renderInputs()}
            {renderSwitches()}

            <Button
              textStyle={{ fontFamily: 'montserrat-regular', fontSize: 12 }}
              color="default"
              style={styles.button}
              onPress={handleSubmit}
            >
              Find teammate now!
            </Button>
          </ScrollView>
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
      paddingHorizontal: theme.SIZES.BASE * 2,
      marginTop: 44,
      color: nowTheme.COLORS.HEADER
    },
    social: {
      width: theme.SIZES.BASE * 3.5,
      height: theme.SIZES.BASE * 3.5,
      borderRadius: theme.SIZES.BASE * 1.75,
      justifyContent: 'center'
    },
    group: {
      paddingTop: theme.SIZES.BASE * 2
    },
    shadow: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      shadowOpacity: 0.2,
      elevation: 2
    },
    button: {
      marginBottom: theme.SIZES.BASE,
      width: width - theme.SIZES.BASE * 2,
    },
    optionsButton: {
      width: 'auto',
      height: 34,
      paddingHorizontal: 10,
      paddingVertical: 10
    },
    category: {
      backgroundColor: theme.COLORS.WHITE,
      marginVertical: theme.SIZES.BASE / 2,
      borderWidth: 0
    },
    categoryTitle: {
      height: '100%',
      paddingHorizontal: theme.SIZES.BASE,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageBlock: {
      overflow: 'hidden',
      borderRadius: 4,
      marginHorizontal: 10
    },
    albumThumb: {
      borderRadius: 4,
      marginVertical: 4,
      alignSelf: 'center',
      width: thumbMeasure,
      height: thumbMeasure
    },
    productTitle: {
      color: nowTheme.COLORS.PRIMARY,
      textAlign: 'center',
      fontFamily: 'montserrat-bold',
      fontSize: 18
    }
  });

// class requestForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       checkSelected: [],
//       'switch-1': true,
//       'switch-2': false,
//     };
//   }



//   toggleSwitch = switchId => this.setState({ [switchId]: !this.state[switchId] });

  



//   renderInputs = () => {
//     return (
//       <Block flex style={styles.group}>
//         <Text size={16} style={styles.title}>
//           Inputs
//         </Text>
//         <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
//           <Input
//             primary={this.state.primaryFocus}
//             right
//             placeholder="Regular"
//             onFocus = {() => this.setState({primaryFocus: true})}
//             onBlur = {() => this.setState({primaryFocus: false})}
//             iconContent={<Block />}
//             shadowless
//           />
//         </Block>
//         <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
//           <Input
//             success={this.state.successFocus}
//             right
//             shadowless
//             placeholder="Success"
//             onFocus = {() => this.setState({successFocus: true})}
//             onBlur = {() => this.setState({successFocus: false})}
//             iconContent={
//               <Icon size={11} color={nowTheme.COLORS.SUCCESS} name="check-22x" family="NowExtra" />
//             }
//           />
//         </Block>
//         <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
//           <Input
//             error={this.state.errorFocus}
//             right
//             shadowless
//             placeholder="Error Input"
//             onFocus = {() => this.setState({errorFocus: true})}
//             onBlur = {() => this.setState({errorFocus: false})}
//             iconContent={
//               <Icon
//                 size={11}
//                 color={nowTheme.COLORS.INPUT_ERROR}
//                 name="simple-remove2x"
//                 family="NowExtra"
//               />
//             }
//           />
//         </Block>
//         <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
//           <Input
//             placeholder="Left Font Awesome Icon"
//             shadowless
//             iconContent={
//               <Icon
//                 size={11}
//                 style={{ marginRight: 10 }}
//                 color={nowTheme.COLORS.ICON}
//                 name="zoom-bold2x"
//                 family="NowExtra"
//               />
//             }
//           />
//         </Block>

//         <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
//           <Input
//             right
//             placeholder="Icon Right"
//             shadowless
//             iconContent={
//               <Icon size={11} color={nowTheme.COLORS.ICON} name="single" family="NowExtra" />
//             }
//           />
//         </Block>
//       </Block>
//     );
//   };

//   renderSwitches = () => {
//     return (
//       <Block flex style={styles.group}>
//         <Text size={16} style={styles.title}>
//           Switches
//         </Text>
//         <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
//           <Block row middle space="between" style={{ marginBottom: theme.SIZES.BASE }}>
//             <Text
//               style={{ fontFamily: 'montserrat-regular' }}
//               size={14}
//               color={nowTheme.COLORS.TEXT}
//             >
//               Switch is ON
//             </Text>
//             <Switch
//               value={this.state['switch-1']}
//               onValueChange={() => this.toggleSwitch('switch-1')}
//             />
//           </Block>
//           <Block row middle space="between">
//             <Text
//               style={{ fontFamily: 'montserrat-regular' }}
//               size={14}
//               color={nowTheme.COLORS.TEXT}
//             >
//               Switch is OFF
//             </Text>
//             <Switch
//               value={this.state['switch-2']}
//               onValueChange={() => this.toggleSwitch('switch-2')}
//             />
//           </Block>
//         </Block>
//       </Block>
//     );
//   };

  

//   render() {
//     return (
//       <Block style={styles.container}>
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{ paddingBottom: 30 }}
//         >
          
//           {this.renderInputs()}
//           {this.renderSwitches()}
//         </ScrollView>
//       </Block>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: theme.SIZES.BASE
//   },
//   title: {
//     fontFamily: 'montserrat-bold',
//     paddingBottom: theme.SIZES.BASE,
//     paddingHorizontal: theme.SIZES.BASE * 2,
//     marginTop: 44,
//     color: nowTheme.COLORS.HEADER
//   },
//   social: {
//     width: theme.SIZES.BASE * 3.5,
//     height: theme.SIZES.BASE * 3.5,
//     borderRadius: theme.SIZES.BASE * 1.75,
//     justifyContent: 'center'
//   },
//   group: {
//     paddingTop: theme.SIZES.BASE * 2
//   },
//   shadow: {
//     shadowColor: 'black',
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//     shadowOpacity: 0.2,
//     elevation: 2
//   },
//   button: {
//     marginBottom: theme.SIZES.BASE,
//     width: width - theme.SIZES.BASE * 2,
//   },
//   optionsButton: {
//     width: 'auto',
//     height: 34,
//     paddingHorizontal: 10,
//     paddingVertical: 10
//   },
//   category: {
//     backgroundColor: theme.COLORS.WHITE,
//     marginVertical: theme.SIZES.BASE / 2,
//     borderWidth: 0
//   },
//   categoryTitle: {
//     height: '100%',
//     paddingHorizontal: theme.SIZES.BASE,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   imageBlock: {
//     overflow: 'hidden',
//     borderRadius: 4,
//     marginHorizontal: 10
//   },
//   albumThumb: {
//     borderRadius: 4,
//     marginVertical: 4,
//     alignSelf: 'center',
//     width: thumbMeasure,
//     height: thumbMeasure
//   },
//   productTitle: {
//     color: nowTheme.COLORS.PRIMARY,
//     textAlign: 'center',
//     fontFamily: 'montserrat-bold',
//     fontSize: 18
//   }
// });

export default requestForm;
