import React from "react";
import { StyleSheet, TouchableOpacity, Linking, Alert } from "react-native";
import { Block, Text, theme } from "galio-framework";
import {authenticateActions} from "../action/authenticateActions";
import { CommonActions } from '@react-navigation/native';
import {locationActions} from "../action/locationActions";
import Icon from "./Icon";
import {store} from '../plugin/redux/store';
import nowTheme from "../constants/Theme";
import { useDispatch } from "react-redux";

function DrawerItem(props){
  const renderIcon = () => {
    const { title, focused } = props;

    switch (title) {
      case "Home":
        return (
          <Icon
            name="app2x"
            family="NowExtra"
            size={18}
            color={focused ? nowTheme.COLORS.PRIMARY : "white"}
            style={{ opacity: 0.5 }}
          />
        );
      case "Components":
        return (
          <Icon
            name="atom2x"
            family="NowExtra"
            size={18}
            color={focused ? nowTheme.COLORS.PRIMARY : "white"}
            style={{ opacity: 0.5 }}
          />
        );
      case "Articles":
        return (
          <Icon
            name="paper"
            family="NowExtra"
            size={18}
            color={focused ? nowTheme.COLORS.PRIMARY : "white"}
            style={{ opacity: 0.5 }}
          />
        );
      case "Profile":
        return (
          <Icon
            name="profile-circle"
            family="NowExtra"
            size={18}
            color={focused ? nowTheme.COLORS.PRIMARY : "white"}
            style={{ opacity: 0.5 }}
          />
        );
      case "Account":
        return (
          <Icon
            name="badge2x"
            family="NowExtra"
            size={18}
            color={focused ? nowTheme.COLORS.PRIMARY : "white"}
            style={{ opacity: 0.5 }}
          />
        );
      case "Settings":
        return (
          <Icon
            name="settings-gear-642x"
            family="NowExtra"
            size={18}
            color={focused ? nowTheme.COLORS.PRIMARY : "white"}
            style={{ opacity: 0.5 }}
          />
        );
      case "Examples":
        return (
          <Icon
            name="album"
            family="NowExtra"
            size={14}
            color={focused ? nowTheme.COLORS.PRIMARY : "white"}
          />
        );
      case "Request":
        return (
          <Icon
            name="album"
            family="NowExtra"
            size={14}
            color={focused ? nowTheme.COLORS.PRIMARY : "white"}
          />
        );
      case "Locations":
        console.log("icon",Icon.name);
      return (
        <Icon
          name="movie"
          family="NowExtra"
          size={14}
          color={focused ? nowTheme.COLORS.PRIMARY : "white"}
        />
      );
      case "GETTING STARTED":
        return (
          <Icon
            name="spaceship2x"
            family="NowExtra"
            size={18}
            style={{ borderColor: "rgba(0,0,0,0.5)", opacity: 0.5 }}
            color={focused ? nowTheme.COLORS.PRIMARY : "white"}
          />
        );
      case "LOGOUT":
        return (
          <Icon
            name="share"
            family="NowExtra"
            size={18}
            style={{ borderColor: "rgba(0,0,0,0.5)", opacity: 0.5 }}
            color={focused ? nowTheme.COLORS.PRIMARY : "white"}
          />
        );
      default:
        return null;
    }
  };

  
    const { focused, title, navigation } = props;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null
    ];
    const dispatch = useDispatch();
    return (
      <TouchableOpacity
        style={{ height: 60 }}
        onPress={() =>
          // title == "GETTING STARTED"
          //   ? Linking.openURL(
          //       "https://demos.creative-tim.com/now-ui-pro-react-native/docs/"
          //     ).catch(err => console.error("An error occurred", err))
          //   : navigation.navigate(title == 'LOGOUT' ? 'Onboarding' : title)
          { switch(title){
              case "LOGOUT":
              dispatch(authenticateActions.logout()); 
              navigation.navigate('Onboarding');
              break;
              case "Profile":
                if(!store.getState().authenticateReducer.haveSetProfile){
                  console.log("to profileForm")
                  navigation.navigate('profileForm');
                }
              break;
              case "Locations":
                console.log("location navigate started!");
                

                // locationActions.queryLocation().then(res=>{
                //   console.log("xd", res.data.data);
                //   console.log(JSON.stringify(navigation.dispatch));
                //   navigation.navigate({name:'Locations',params:res.data.data});
                  
                //   // navigation.dispatch(navigation_object=>{
                //   //   navigation_object.routes[11].params = res.data.data;
                //   //   let key = navigation_object.routes[11].key;
                //   //   console.log(navigation_object);
                //   //   return CommonActions.navigate({
                //   //     name:'Locations',
                //   //     key:key,
                //   //     params:res.data.data
                //   //   })
                //   // }

                //   // )
                  navigation.navigate('Locations');
                // });
              break;
              case "Chatroom":
                Alert.alert("Chatroom function are currently not avaliable, please wait for next update!");
                break;
              case "Components":
                navigation.navigate('pro');
                break;
              default:
                navigation.navigate(title);
              break;
            }
          }
        }
      >
        <Block flex row style={containerStyles}>
          <Block middle flex={0.1} style={{ marginRight: 5 }}>
            {renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text
              style={{
                fontFamily: "montserrat-regular",
                textTransform: "uppercase",
                fontWeight: "300"
              }}
              size={12}
              bold={focused ? true : false}
              color={focused ? nowTheme.COLORS.PRIMARY : "white"}
            >
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 15,
    paddingHorizontal: 14,
    color: "white"
  },
  activeStyle: {
    backgroundColor: nowTheme.COLORS.WHITE,
    borderRadius: 30,
    color: "white"
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
});


// class DrawerItem extends React.Component {
//   renderIcon = () => {
//     const { title, focused } = this.props;

//     switch (title) {
//       case "Home":
//         return (
//           <Icon
//             name="app2x"
//             family="NowExtra"
//             size={18}
//             color={focused ? nowTheme.COLORS.PRIMARY : "white"}
//             style={{ opacity: 0.5 }}
//           />
//         );
//       case "Components":
//         return (
//           <Icon
//             name="atom2x"
//             family="NowExtra"
//             size={18}
//             color={focused ? nowTheme.COLORS.PRIMARY : "white"}
//             style={{ opacity: 0.5 }}
//           />
//         );
//       case "Articles":
//         return (
//           <Icon
//             name="paper"
//             family="NowExtra"
//             size={18}
//             color={focused ? nowTheme.COLORS.PRIMARY : "white"}
//             style={{ opacity: 0.5 }}
//           />
//         );
//       case "Profile":
//         return (
//           <Icon
//             name="profile-circle"
//             family="NowExtra"
//             size={18}
//             color={focused ? nowTheme.COLORS.PRIMARY : "white"}
//             style={{ opacity: 0.5 }}
//           />
//         );
//       case "Account":
//         return (
//           <Icon
//             name="badge2x"
//             family="NowExtra"
//             size={18}
//             color={focused ? nowTheme.COLORS.PRIMARY : "white"}
//             style={{ opacity: 0.5 }}
//           />
//         );
//       case "Settings":
//         return (
//           <Icon
//             name="settings-gear-642x"
//             family="NowExtra"
//             size={18}
//             color={focused ? nowTheme.COLORS.PRIMARY : "white"}
//             style={{ opacity: 0.5 }}
//           />
//         );
//       case "Examples":
//         return (
//           <Icon
//             name="album"
//             family="NowExtra"
//             size={14}
//             color={focused ? nowTheme.COLORS.PRIMARY : "white"}
//           />
//         );
//       case "GETTING STARTED":
//         return (
//           <Icon
//             name="spaceship2x"
//             family="NowExtra"
//             size={18}
//             style={{ borderColor: "rgba(0,0,0,0.5)", opacity: 0.5 }}
//             color={focused ? nowTheme.COLORS.PRIMARY : "white"}
//           />
//         );
//       case "LOGOUT":
//         return (
//           <Icon
//             name="share"
//             family="NowExtra"
//             size={18}
//             style={{ borderColor: "rgba(0,0,0,0.5)", opacity: 0.5 }}
//             color={focused ? nowTheme.COLORS.PRIMARY : "white"}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   render() {
//     const { focused, title, navigation } = this.props;

//     const containerStyles = [
//       styles.defaultStyle,
//       focused ? [styles.activeStyle, styles.shadow] : null
//     ];

//     return (
//       <TouchableOpacity
//         style={{ height: 60 }}
//         onPress={() =>
//           // title == "GETTING STARTED"
//             // ? Linking.openURL(
//             //     "https://demos.creative-tim.com/now-ui-pro-react-native/docs/"
//             //   ).catch(err => console.error("An error occurred", err))
//             // : navigation.navigate(title == 'LOGOUT' ? 'Onboarding' : title)
//           {if(title == "LOGOUT" ) useDispatch(authenticateActions.logout())}
//         }
//       >
//         <Block flex row style={containerStyles}>
//           <Block middle flex={0.1} style={{ marginRight: 5 }}>
//             {this.renderIcon()}
//           </Block>
//           <Block row center flex={0.9}>
//             <Text
//               style={{
//                 fontFamily: "montserrat-regular",
//                 textTransform: "uppercase",
//                 fontWeight: "300"
//               }}
//               size={12}
//               bold={focused ? true : false}
//               color={focused ? nowTheme.COLORS.PRIMARY : "white"}
//             >
//               {title}
//             </Text>
//           </Block>
//         </Block>
//       </TouchableOpacity>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   defaultStyle: {
//     paddingVertical: 15,
//     paddingHorizontal: 14,
//     color: "white"
//   },
//   activeStyle: {
//     backgroundColor: nowTheme.COLORS.WHITE,
//     borderRadius: 30,
//     color: "white"
//   },
//   shadow: {
//     shadowColor: theme.COLORS.BLACK,
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowRadius: 8,
//     shadowOpacity: 0.1
//   }
// });

export default DrawerItem;
